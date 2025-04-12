<script setup>
// @/Components
import FixedSideBar from '@/components/FixedSideBar.vue'
import SearchBarField from '@/components/SearchBarField.vue'
// import ResponsiveNavLink from '@/components/ResponsiveNavLink.vue';

// @/Fixtures (components)
import TradingCard from '@/components/TradingCard.vue'

// @/Models
import IBeyInfo from '@/models/IBeyInfo'

// Library
import { reactive } from 'vue'

const beys = reactive(IBeyInfo)
</script>

<template>
    <Head title="Dashboard" />
        <main class="bg-stone-300 pb-8 text-black/50">
            <FixedSideBar />
            <div
                class="relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden selection:bg-emerald-200 selection:text-stone-900"
            >
                <div class="relative w-full max-w-2xl px-6">
                    <section class="mt-6">
                        <SearchBarField />
                        <section
                            class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            <article>
                                <TradingCard
                                    id="product-article-card"
                                    v-for="bey in beys"
                                    v-bind:key="bey.id"
                                >
                                    {{ bey }}
                                </TradingCard>
                            </article>
                        </section>
                    </section>
                </div>
            </div>
        </main>
</template>
