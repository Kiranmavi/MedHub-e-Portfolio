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
    <div class="flex items-center justify-center w-full min-h-screen bg-[#E5E5E5] px-0 md:px-0 lg:px-10">
        <Head title="Log in" />

        <div class="w-full text-black md:w-[80%] lg:w-[60%] xl:w-[40%] bg-white rounded-0 md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm">
            <div class="mb-6 space-y-2 text-center">
                <h1 class="text-2xl font-semibold pb-2 text-[var(--primary-color)]">Welcome back</h1>
                <p class="text-sm text-black">
                    Enter your email and password to continue.
                </p>
            </div>

            <div
                v-if="status"
                class="mb-4 rounded-md bg-green-50 p-3 text-center text-sm font-medium text-green-700"
            >
                {{ status }}
            </div>

            <Form
                v-bind="store.form()"
                :reset-on-success="['password']"
                v-slot="{ errors, processing }"
                class=" gap-5 flex flex-col items-center justify-center"
            >
                <div class="grid gap-2 w-[80%]">
                    <Label for="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        required
                        autofocus
                        autocomplete="email"
                        placeholder="you@example.com"
                        class="border-none w-[100%]"
                    />
                    <InputError :message="errors.email" />
                </div>

                <div class="grid gap-2 w-[80%]">
                    <Label for="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        required
                        autocomplete="current-password"
                        placeholder="••••••••"
                        class="border-none w-[100%]"
                    />
                    <InputError :message="errors.password" />
                </div>

                <Button
                    type="submit"
                    class="mt-2 w-[80%] cursor-pointer bg-[var(--primary-color)] text-white hover:bg-[var(--primary-color)]/80"
                    :disabled="processing"
                    data-test="login-button"
                >
                    <Spinner v-if="processing" />
                    <span v-else>Log in</span>
                </Button>
            </Form>
            <div class="mt-5 text-black text-center">
                Don&apos;t have an account?
                <Link :href="register()" class="text-blue-500">Register</Link>
            </div>
            <div class="mt-2 text-black text-center">
                Go to
                <Link :href="dashboard().url" class="text-blue-500">Dashboard</Link>
            </div>
        </div>
    </div>
</template>
