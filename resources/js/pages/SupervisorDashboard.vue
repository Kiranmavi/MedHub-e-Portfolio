<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/vue3';
import { ref } from 'vue';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useInitials } from '@/composables/useInitials';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

interface UserData {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    role?: string;
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

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Supervisor Dashboard',
        href: dashboard().url,
    },
];

const selectedPlacement = ref<Placement | null>(
    props.placements.length > 0 ? props.placements[0] : null
);

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
};

const handleRowClick = (placement: Placement) => {
    selectedPlacement.value = placement;
};

const { getInitials } = useInitials();
</script>

<template>
    <Head title="Supervisor Dashboard" />

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
                            <span v-if="props.role" class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 capitalize">
                                {{ props.role }}
                            </span>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital Name</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
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
                                    <td class="px-4 py-3 text-sm text-gray-900">
                                        <div class="flex items-center gap-2">
                                            <Avatar class="h-8 w-8">
                                                <AvatarFallback class="bg-[var(--primary-color)] text-white text-xs">
                                                    {{ getInitials(`${placement.student?.user?.first_name || ''} ${placement.student?.user?.last_name || ''}`) }}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span>{{ placement.student?.user?.first_name }} {{ placement.student?.user?.last_name }}</span>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap">
                                        <span class="px-2 py-1 text-xs font-medium rounded-full"
                                            :class="{
                                                'bg-green-100 text-green-800': placement.status === 'attended',
                                                'bg-red-100 text-red-800': placement.status === 'not-attended',
                                                'bg-yellow-100 text-yellow-800': placement.status === 'late',
                                                'bg-gray-100 text-gray-800': placement.status === 'cancelled',
                                            }"
                                        >
                                            {{ placement.status || 'N/A' }}
                                        </span>
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
                
                <!-- Supervisor Details Card -->
                <div
                    class="w-full md:w-[30%] rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-white overflow-hidden"
                >
                    <div class="p-4 border-b border-gray-200">
                        <h2 class="text-lg font-semibold text-gray-800">Supervisor Details</h2>
                    </div>
                    <div class="p-4">
                        <div v-if="props.user" class="space-y-4">
                            <div class="flex justify-center mb-4">
                                <Avatar class="h-16 w-16">
                                    <AvatarFallback class="bg-[var(--primary-color)] text-white text-lg">
                                        {{ getInitials(`${props.user.first_name || ''} ${props.user.last_name || ''}`) }}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <div class="space-y-3">
                                <div>
                                    <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">First Name</p>
                                    <p class="text-sm text-gray-900 font-medium">
                                        {{ props.user.first_name || 'N/A' }}
                                    </p>
                                </div>
                                <div>
                                    <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Last Name</p>
                                    <p class="text-sm text-gray-900 font-medium">
                                        {{ props.user.last_name || 'N/A' }}
                                    </p>
                                </div>
                                <div>
                                    <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Email</p>
                                    <p class="text-sm text-gray-900 font-medium">
                                        {{ props.user.email || 'N/A' }}
                                    </p>
                                </div>
                                <div>
                                    <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Role</p>
                                    <p class="text-sm text-gray-900 font-medium capitalize">
                                        {{ props.user.role || 'N/A' }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div v-else class="flex items-center justify-center h-full min-h-[200px]">
                            <p class="text-sm text-gray-500 text-center">
                                Supervisor information not available
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

