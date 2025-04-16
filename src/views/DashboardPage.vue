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
    <main>
        <FixedSideBar />
        <div>
            <div>
                <section>
                    <SearchBarField />
                    <section>
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
