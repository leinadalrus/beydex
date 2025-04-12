<script setup>
import NavLink from "@/components/NavLink.vue"

defineProps({
    hyperlinks: {
        type: String,
    },
    item: {
        type: String,
    },
})
</script>

<template>
    <aside
        class="flex h-auto w-56 flex-col items-center gap-2 overflow-x-hidden p-1"
    >
        <article class="flex w-40 flex-col lg:flex-shrink-0 lg:overflow-y-auto">
            <section class="flex flex-1 flex-col overflow-y-auto">
                <ul class="flex-1 p-1">
                    <NavLink v-bind:href="dashboard">
                        <div class="inline-flex w-12 flex-shrink-0 items-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                                />
                            </svg>
                        </div>
                        <address class="text-xs font-normal">Dashboard</address>
                    </NavLink>

                    <li
                        class="text-lg font-semibold text-black"
                        v-for="link in hyperlinks"
                        v-bind:key="link.id"
                    >
                        <NavLink>{{ link }}</NavLink>
                    </li>
                </ul>
            </section>
        </article>
    </aside>
</template>
