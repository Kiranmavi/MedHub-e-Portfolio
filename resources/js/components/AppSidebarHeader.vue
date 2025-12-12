<script setup lang="ts">
import { SidebarTrigger } from '@/components/ui/sidebar';
import UserInfo from '@/components/UserInfo.vue';
import UserMenuContent from '@/components/UserMenuContent.vue';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { usePage } from '@inertiajs/vue3';
import { ChevronsUpDown } from 'lucide-vue-next';

const page = usePage();
const user = page.props.auth?.user ?? { name: 'Guest', email: 'kiranmavi5502@gmail.com' };
</script>

<template>
    <header
        class="flex h-16 shrink-0 bg-[var(--primary-color)] items-center justify-between gap-2 border-[var(--primary-color)] px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4"
    >
        <div class="flex items-center gap-2">
            <SidebarTrigger class="-ml-1" />
            <div class="px-3 py-1 bg-white rounded text-[var(--primary-color)] font-semibold text-sm">
                MEDHUB
            </div>
        </div>
        
        <div class="flex items-center">
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button
                        variant="ghost"
                        class="h-auto p-2 hover:bg-white/10 text-white"
                        data-test="header-user-menu-button"
                    >
                        <UserInfo :user="user" />
                        <ChevronsUpDown class="ml-2 size-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    class="w-56 rounded-lg"
                    align="end"
                    :side-offset="4"
                >
                    <UserMenuContent :user="user" />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </header>
</template>
