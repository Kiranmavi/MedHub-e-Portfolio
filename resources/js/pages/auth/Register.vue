<script setup lang="ts">
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';
import { Form, Head, Link } from '@inertiajs/vue3';



const roles = [
    { value: 'student', label: 'Student' },
    { value: 'admin', label: 'Admin' },
    { value: 'supervisor', label: 'Supervisor' },
]
</script>

<template>
    <Head title="Register" />
    <div class="flex w-full h-screen overflow-hidden bg-[#E5E5E5]">
        <!-- Left Side - Image (Hidden on mobile/tablet) -->
        <div class="hidden md:flex md:w-1/2 h-full items-center justify-center bg-gray-100">
            <div class="w-full h-full flex items-center justify-center p-4">
                <img src="/medhub-logo.png" alt="Register" class="w-full h-full rounded-2xl object-cover">
            </div>
        </div>

        <!-- Right Side - Form (Full width on mobile/tablet) -->
        <div class="w-full md:w-1/2 h-full flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-y-auto">
            <div class="w-full max-w-2xl">
                <div class="flex flex-col items-center justify-center mb-8">
                    <h1 class="text-2xl font-bold pb-2 text-[var(--primary-color)]">Create an account</h1>
                    <p class="text-sm text-gray-600">
                        Enter your details below to create your account
                    </p>
                </div>
                
                <Form
                    v-bind="store.form()"
                    :reset-on-success="['password', 'password_confirmation']"
                    v-slot="{ errors, processing }"
                    class="flex flex-col gap-6 w-full"
                >
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div class="grid gap-2">
                            <Label for="first_name">First Name</Label>
                            <Input
                                id="first_name"
                                type="text"
                                required
                                autofocus
                                :tabindex="1"
                                autocomplete="given-name"
                                name="first_name"
                                placeholder="First name"
                                class="border-none" 
                            />
                            <InputError :message="errors.first_name" />
                        </div>

                        <div class="grid gap-2">
                            <Label for="last_name">Last Name</Label>
                            <Input
                                id="last_name"
                                type="text"
                                required
                                :tabindex="2"
                                autocomplete="family-name"
                                name="last_name"
                                placeholder="Last name"
                                class="border-none"
                            />
                            <InputError :message="errors.last_name" />
                        </div>

                        <div class="grid gap-2">
                            <Label for="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                :tabindex="3"
                                autocomplete="email"
                                name="email"
                                placeholder="email@example.com"
                                class="border-none"
                            />
                            <InputError :message="errors.email" />
                        </div>

                        <div class="grid gap-2">
                            <Label for="role">Role</Label>
                            <select
                                id="role"
                                name="role"
                                required
                                :tabindex="4"
                                class="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="" class="bg-white text-gray-900">Select a role</option>
                                <option 
                                    v-for="role in roles" 
                                    :key="role.value" 
                                    :value="role.value"
                                    class="bg-white text-gray-900"
                                >
                                    {{ role.label }}
                                </option>
                            </select>
                            <InputError :message="errors.role" />
                        </div>

                        <div class="grid gap-2">
                            <Label for="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                :tabindex="5"
                                autocomplete="new-password"
                                name="password"
                                placeholder="Password"
                                class="border-none"
                            />
                            <InputError :message="errors.password" />
                        </div>

                        <div class="grid gap-2">
                            <Label for="password_confirmation">Confirm password</Label>
                            <Input
                                id="password_confirmation"
                                type="password"
                                required
                                :tabindex="6"
                                autocomplete="new-password"
                                name="password_confirmation"
                                placeholder="Confirm password"
                                class="border-none"
                            />
                            <InputError :message="errors.password_confirmation" />
                        </div>

                        <Button
                            type="submit"
                            class="mt-2 w-full md:col-span-2 bg-[var(--primary-color)] text-white cursor-pointer hover:bg-[var(--primary-color)]/80"
                            tabindex="7"
                            :disabled="processing"
                            data-test="register-user-button"
                        >
                            <Spinner v-if="processing" />
                            Create account
                        </Button>
                    </div>
                </Form>
                
                <div class="text-center flex flex-row items-center justify-center gap-2 p-2 text-sm text-gray-600 mt-6">
                    <div>Already have an account?</div>
                    <Link :href="login()" class="text-blue-500 cursor-pointer hover:underline">Log In</Link>
                </div>
            </div>
        </div>
    </div>
</template>
