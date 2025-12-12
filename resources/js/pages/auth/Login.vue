<script setup lang="ts">
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store } from '@/routes/login';
import { Form, Head } from '@inertiajs/vue3';
import { Link } from '@inertiajs/vue3';
import { register } from '@/routes';
import { dashboard } from '@/routes';

defineProps<{
    status?: string;
}>();
</script>

<template>
    <Head title="Log in" />
    <div class="flex w-full h-[100%] overflow-hidden bg-white">
        <!-- Left Side - Image (Hidden on mobile/tablet) -->
        <div class="hidden md:flex md:w-1/2 h-full items-center justify-center">
            <div class="w-full h-[100%] flex items-center justify-center p-4">
                <img src="/medhub-logo.png" alt="Login" class="w-full h-full rounded-2xl object-cover">
            </div>
        </div>

        <!-- Right Side - Form (Full width on mobile/tablet) -->
        <div class="w-full md:w-1/2 h-[100%] flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-y-auto">
            <div class="w-full max-w-md">
                <div class="mb-6 space-y-2 text-center">
                    <h1 class="text-2xl font-semibold pb-2 text-[var(--primary-color)]">Welcome back</h1>
                    <p class="text-sm text-gray-600">
                        Enter your email and password to continue.
                    </p>
                </div>
                <Form
                    v-bind="store.form()"
                    :reset-on-success="['password']"
                    v-slot="{ errors, processing }"
                    class="flex flex-col gap-5"
                >
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            required
                            autofocus
                            autocomplete="email"
                            placeholder="you@example.com"
                            class="border border-gray-200"
                        />
                        <InputError :message="errors.email" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            required
                            autocomplete="current-password"
                            placeholder="••••••••"
                            class="border border-gray-200"
                        />
                        <InputError :message="errors.password" />
                    </div>

                    <Button
                        type="submit"
                        class="mt-2 w-full cursor-pointer bg-[var(--primary-color)] text-white hover:bg-[var(--primary-color)]/80"
                        :disabled="processing"
                        data-test="login-button"
                    >
                        <Spinner v-if="processing" />
                        <span v-else>Log in</span>
                    </Button>
                </Form>
                
                <div class="mt-5 text-black text-center text-sm">
                    Don&apos;t have an account?
                    <Link :href="register()" class="text-blue-500 hover:underline ml-1">Register</Link>
                </div>
            </div>
        </div>
    </div>
</template>
