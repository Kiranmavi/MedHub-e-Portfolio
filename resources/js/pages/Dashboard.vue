<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, router, Form } from '@inertiajs/vue3';
import PlaceholderPattern from '../components/PlaceholderPattern.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/InputError.vue';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Edit, Trash2, Plus } from 'lucide-vue-next';
import placementRoutes from '@/routes/placements';
import { ref, computed } from 'vue';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useInitials } from '@/composables/useInitials';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

interface UserData {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    role?: string;
    student?: {
        id: number;
        user_id: number;
        student_uni_id: string;
        programme: string;
        start_date: string;
    };
}

interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

interface Student {
    id: number;
    user_id: number;
    student_uni_id: string;
    programme: string;
    start_date: string;
    user?: User;
}

interface Placement {
    id: number;
    student_id: number;
    placement_date: string;
    placement_location: string;
    ward_department?: string;
    status?: string;
    arrival_time?: string;
    departure_time?: string;
    notes?: string;
    student?: Student;
}

interface Props {
    placements: Placement[];
    role?: string;
    user?: UserData | null;
}

const props = withDefaults(defineProps<Props>(), {
    role: 'guest',
    user: null,
});

// Computed properties for role-based UI
const isStudent = computed(() => props.role === 'student');
const canCreatePlacement = computed(() => isStudent.value);
const canEditPlacement = computed(() => isStudent.value);
const canDeletePlacement = computed(() => isStudent.value);

const { getInitials } = useInitials();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

const isEditDialogOpen = ref(false);
const isCreateMode = ref(false);
const editingPlacement = ref<Placement | null>(null);
const formData = ref<Partial<Placement>>({});
const selectedPlacement = ref<Placement | null>(
    props.placements.length > 0 ? props.placements[0] : null
);

const placementStatuses = [
    { value: 'attended', label: 'Attended' },
    { value: 'not-attended', label: 'Not Attended' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'late', label: 'Late' },
];

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
};

const formatDateForInput = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
};

const handleCreate = () => {
    isCreateMode.value = true;
    editingPlacement.value = null;
    formData.value = {
        student_id: undefined,
        placement_date: '',
        placement_location: '',
        ward_department: '',
        status: 'attended',
        arrival_time: '',
        departure_time: '',
        notes: '',
    };
    isEditDialogOpen.value = true;
};

const handleEdit = (placementId: number) => {
    const placement = props.placements.find(p => p.id === placementId);
    if (placement) {
        isCreateMode.value = false;
        editingPlacement.value = placement;
        formData.value = {
            student_id: placement.student_id,
            placement_date: formatDateForInput(placement.placement_date),
            placement_location: placement.placement_location,
            ward_department: placement.ward_department || '',
            status: placement.status || 'attended',
            arrival_time: placement.arrival_time || '',
            departure_time: placement.departure_time || '',
            notes: placement.notes || '',
        };
        isEditDialogOpen.value = true;
    }
};

const handleRowClick = (placement: Placement) => {
    selectedPlacement.value = placement;
};

const handleCancel = () => {
    isEditDialogOpen.value = false;
    isCreateMode.value = false;
    editingPlacement.value = null;
    formData.value = {};
};

const isSubmitting = ref(false);

const handleSubmit = async () => {
    isSubmitting.value = true;

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        };
        
        if (csrfToken) {
            headers['X-CSRF-TOKEN'] = csrfToken;
        }

        let response: Response;
        let dataToSend: Partial<Placement>;

        if (isCreateMode.value) {
            // Create mode: send all form data
            // Get student_id from logged-in user's student relationship (for students)
            // For admins/supervisors, use the selected placement's student_id if available
            let studentId: number | undefined;
            
            if (props.user?.student?.id) {
                // User is a student, use their student_id
                studentId = props.user.student.id;
            } else if (selectedPlacement.value?.student_id) {
                // User is admin/supervisor, use selected placement's student_id
                studentId = selectedPlacement.value.student_id;
            } else if (props.placements.length > 0 && props.placements[0]?.student_id) {
                // Fallback: use first placement's student_id
                studentId = props.placements[0].student_id;
            }
            
            if (!studentId) {
                alert('Error: Student ID not found. Please select a placement or ensure you are logged in as a student.');
                isSubmitting.value = false;
                return;
            }
            
            dataToSend = {
                student_id: studentId,
                placement_date: formData.value.placement_date,
                placement_location: formData.value.placement_location,
                ward_department: formData.value.ward_department,
                status: formData.value.status,
                arrival_time: formData.value.arrival_time,
                departure_time: formData.value.departure_time,
                notes: formData.value.notes,
            };

            response = await fetch(
                placementRoutes.store().url,
                {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(dataToSend),
                    credentials: 'same-origin',
                }
            );
        } else {
            // Edit mode: only send changed fields
            if (!editingPlacement.value) return;
            
            const changedData: Partial<Placement> = {};
            const original = editingPlacement.value;

            if (formData.value.student_id !== original.student_id) {
                changedData.student_id = formData.value.student_id;
            }
            if (formData.value.placement_date !== formatDateForInput(original.placement_date)) {
                changedData.placement_date = formData.value.placement_date;
            }
            if (formData.value.placement_location !== original.placement_location) {
                changedData.placement_location = formData.value.placement_location;
            }
            if (formData.value.ward_department !== (original.ward_department || '')) {
                changedData.ward_department = formData.value.ward_department;
            }
            if (formData.value.status !== (original.status || 'attended')) {
                changedData.status = formData.value.status;
            }
            if (formData.value.arrival_time !== (original.arrival_time || '')) {
                changedData.arrival_time = formData.value.arrival_time;
            }
            if (formData.value.departure_time !== (original.departure_time || '')) {
                changedData.departure_time = formData.value.departure_time;
            }
            if (formData.value.notes !== (original.notes || '')) {
                changedData.notes = formData.value.notes;
            }

            dataToSend = changedData;

            response = await fetch(
                placementRoutes.update({ placement: editingPlacement.value.id }).url,
                {
                    method: 'PUT',
                    headers,
                    body: JSON.stringify(dataToSend),
                    credentials: 'same-origin',
                }
            );
        }

        if (response.ok) {
            isEditDialogOpen.value = false;
            isCreateMode.value = false;
            editingPlacement.value = null;
            formData.value = {};
            // Reload the page to get updated placements
            router.reload();
        } else {
            const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
            alert(`Error ${isCreateMode.value ? 'creating' : 'updating'} placement: ` + (errorData.message || 'Unknown error'));
        }
    } catch (error) {
        console.error(`Error ${isCreateMode.value ? 'creating' : 'updating'} placement:`, error);
        alert(`Error ${isCreateMode.value ? 'creating' : 'updating'} placement. Please try again.`);
    } finally {
        isSubmitting.value = false;
    }
};

const handleDelete = async (placementId: number) => {
    if (!confirm('Are you sure you want to delete this placement?')) {
        return;
    }

    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        const headers: Record<string, string> = {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        };
        
        if (csrfToken) {
            headers['X-CSRF-TOKEN'] = csrfToken;
        }

        const response = await fetch(
            placementRoutes.destroy({ placement: placementId }).url,
            {
                method: 'DELETE',
                headers,
                credentials: 'same-origin',
            }
        );

        if (response.ok) {
            // Reload the page to get updated placements
            router.reload();
        } else {
            const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
            alert('Error deleting placement: ' + (errorData.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error deleting placement:', error);
        alert('Error deleting placement. Please try again.');
    }
};
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout>
        <div
            class="flex min-h-[80%] flex-1 bg-white flex-col gap-4 overflow-x-auto text-[var(--primary-color)] rounded-xl p-4"
        >
            <!-- Breadcrumbs Row -->
            <div class="mb-2">
                <Breadcrumbs :breadcrumbs="breadcrumbs" />
            </div>
            
            <div class="flex flex-col md:flex-row gap-4 w-full">
                <!-- Placement Records Table -->
                <div
                    class="w-full md:w-[70%] rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-white overflow-hidden"
                >
                    <div class="p-4 border-b border-gray-200 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <h2 class="text-lg font-semibold text-gray-800">Placement Records</h2>
                            <span v-if="props.role" class="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 capitalize">
                                {{ props.role }}
                            </span>
                        </div>
                        <Button
                            v-if="canCreatePlacement"
                            @click="handleCreate"
                            class="bg-[var(--primary-color)] text-white hover:bg-[var(--primary-color)]/80"
                            size="sm"
                        >
                            <Plus class="h-4 w-4 mr-2" />
                            Create
                        </Button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital Name</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                                    <th class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr 
                                    v-for="(placement, index) in props.placements" 
                                    :key="placement.id"
                                    @click="handleRowClick(placement)"
                                    :class="[
                                        'hover:bg-gray-50 transition-colors cursor-pointer',
                                        selectedPlacement?.id === placement.id ? 'bg-blue-50' : ''
                                    ]"
                                >
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                        {{ index + 1 }}
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                        {{ formatDate(placement.placement_date) }}
                                    </td>
                                    <td class="px-4 py-3 text-sm text-gray-900">
                                        {{ placement.placement_location }}
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                        <div class="flex items-center gap-2">
                                            <Avatar class="h-8 w-8">
                                                <AvatarFallback class="bg-[var(--primary-color)] text-white text-xs">
                                                    {{ getInitials(`${placement.student?.user?.first_name || ''} ${placement.student?.user?.last_name || ''}`) }}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span>{{ placement.student?.user?.first_name }} {{ placement.student?.user?.last_name }}</span>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-right text-sm font-medium" @click.stop>
                                        <div class="flex items-center justify-end gap-2">
                                            <Button
                                                v-if="canEditPlacement"
                                                variant="ghost"
                                                size="sm"
                                                @click.stop="handleEdit(placement.id)"
                                                class="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600"
                                            >
                                                <Edit class="h-4 w-4" />
                                            </Button>
                                            <Button
                                                v-if="canDeletePlacement"
                                                variant="ghost"
                                                size="sm"
                                                @click.stop="handleDelete(placement.id)"
                                                class="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
                                            >
                                                <Trash2 class="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="props.placements.length === 0">
                                    <td colspan="5" class="px-4 py-8 text-center text-sm text-gray-500">
                                        No placement records found.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Student Details Card -->
                <div
                    class="w-full md:w-[30%] rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-white overflow-hidden"
                >
                    <div class="p-4 border-b border-gray-200">
                        <h2 class="text-lg font-semibold text-gray-800">Student Details</h2>
                    </div>
                    <div class="p-4">
                        <div v-if="selectedPlacement?.student" class="space-y-4">
                            <div class="flex justify-center mb-4">
                                <Avatar class="h-16 w-16">
                                    <AvatarFallback class="bg-[var(--primary-color)] text-white text-lg">
                                        {{ getInitials(`${selectedPlacement.student.user?.first_name || ''} ${selectedPlacement.student.user?.last_name || ''}`) }}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <div class="space-y-3">
                                <div>
                                    <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">First Name</p>
                                    <p class="text-sm text-gray-900 font-medium">
                                        {{ selectedPlacement.student.user?.first_name || 'N/A' }}
                                    </p>
                                </div>
                                <div>
                                    <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Last Name</p>
                                    <p class="text-sm text-gray-900 font-medium">
                                        {{ selectedPlacement.student.user?.last_name || 'N/A' }}
                                    </p>
                                </div>
                                <div>
                                    <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">University ID</p>
                                    <p class="text-sm text-gray-900 font-medium">
                                        {{ selectedPlacement.student.student_uni_id || 'N/A' }}
                                    </p>
                                </div>
                                <div>
                                    <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Programme</p>
                                    <p class="text-sm text-gray-900 font-medium">
                                        {{ selectedPlacement.student.programme || 'N/A' }}
                                    </p>
                                </div>
                                <div>
                                    <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Start Date</p>
                                    <p class="text-sm text-gray-900 font-medium">
                                        {{ selectedPlacement.student.start_date ? formatDate(selectedPlacement.student.start_date) : 'N/A' }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div v-else class="flex items-center justify-center h-full min-h-[200px]">
                            <p class="text-sm text-gray-500 text-center">
                                {{ props.placements.length === 0 
                                    ? 'No placement records available' 
                                    : 'Click on a placement row to view student details' }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Create/Edit Placement Dialog -->
        <Dialog :open="isEditDialogOpen" @update:open="isEditDialogOpen = $event">
            <DialogContent class="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{{ isCreateMode ? 'Create Placement' : 'Edit Placement' }}</DialogTitle>
                </DialogHeader>

                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <!-- Student ID -->
                    <div class="grid gap-2">
                        <Label for="student_id">Student ID</Label>
                        <Input
                            id="student_id"
                            type="number"
                            v-model="formData.student_id"
                            required
                        />
                    </div>

                    <!-- Placement Date -->
                    <div class="grid gap-2">
                        <Label for="placement_date">Placement Date</Label>
                        <Input
                            id="placement_date"
                            type="date"
                            v-model="formData.placement_date"
                            required
                        />
                    </div>

                    <!-- Placement Location -->
                    <div class="grid gap-2">
                        <Label for="placement_location">Hospital Name</Label>
                        <Input
                            id="placement_location"
                            type="text"
                            v-model="formData.placement_location"
                            placeholder="Enter hospital name"
                            required
                        />
                    </div>

                    <!-- Ward Department -->
                    <div class="grid gap-2">
                        <Label for="ward_department">Ward/Department</Label>
                        <Input
                            id="ward_department"
                            type="text"
                            v-model="formData.ward_department"
                            placeholder="Enter ward or department"
                        />
                    </div>

                    <!-- Status -->
                    <div class="grid gap-2">
                        <Label for="status">Status</Label>
                        <select
                            id="status"
                            v-model="formData.status"
                            class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            required
                        >
                            <option class="bg-white text-gray-900"
                            v-for="status in placementStatuses" :key="status.value" :value="status.value">
                                {{ status.label }}
                            </option>
                        </select>
                    </div>

                    <!-- Arrival Time -->
                    <div class="grid gap-2">
                        <Label for="arrival_time">Arrival Time</Label>
                        <Input
                            id="arrival_time"
                            type="time"
                            v-model="formData.arrival_time"
                        />
                    </div>

                    <!-- Departure Time -->
                    <div class="grid gap-2">
                        <Label for="departure_time">Departure Time</Label>
                        <Input
                            id="departure_time"
                            type="time"
                            v-model="formData.departure_time"
                        />
                    </div>

                    <!-- Notes -->
                    <div class="grid gap-2">
                        <Label for="notes">Notes</Label>
                        <textarea
                            id="notes"
                            v-model="formData.notes"
                            rows="4"
                            class="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter any additional notes"
                        ></textarea>
                    </div>

                    <DialogFooter class="gap-2">
                        <DialogClose as-child>
                            <Button
                                type="button"
                                variant="secondary"
                                @click="handleCancel"
                            >
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            class="bg-[var(--primary-color)] text-white hover:bg-[var(--primary-color)]/80"
                            :disabled="isSubmitting"
                        >
                            {{ isSubmitting ? 'Submitting...' : 'Submit' }}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </AppLayout>
</template>
