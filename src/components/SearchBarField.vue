<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { IBeyInfo } from '@/models/IBeyInfo'

const beyTrades = ref<IBeyInfo[]>([])
const routes = useRoute()

async function searchViaProcessedValues(contents: string) {
    for (const bey in beyTrades) {
        for (const part in beyTrades)
            if (contents === bey || contents === part)
                return await fetch(`/api/${bey}` || `/api/${part}`)
    }

    return await fetch(`/api/${name}`)
}

watch(
    () => routes.params.id,
    () => {
        searchViaProcessedValues
    }
)
</script>

<template>
    <article class="m-4 p-3">
        <input type="search" name="name" placeholder="Search product here..." />
        <button
            type="submit"
            onsubmit="(values: string) => searchViaProcessedValues(values)"
        >
            Search
        </button>
    </article>
</template>
