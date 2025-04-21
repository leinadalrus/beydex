<script setup lang="ts">
import { ref } from 'vue'
import FixedSideBar from '@/components/FixedSideBar.vue'
import SearchBarField from '@/components/SearchBarField.vue'
import TradingCard from '@/components/TradingCard.vue'
import { IBeyInfo } from '@/models/IBeyInfo'

const beys = ref<IBeyInfo[]>([])
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
