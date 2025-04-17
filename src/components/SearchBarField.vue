<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { IBeyInfo } from '@/models/IBeyInfo'

const beyTrades = ref(IBeyInfo)

const route = useRoute()

const loading = ref(false)
const post = ref(null)
const error = ref(null)

async function searchViaProcessedValues(values) {
    for (const bey of beyTrades) {
        for (const items of bey.description)
            if (values === bey.name || values === items)
                return await fetch(`/api/${bey.name}`)
    }

    return await fetch(`/api/${name}`)
}

async function utilDataFetch() {
    error.value = post.value = null
    loading.value = true

    try {
        post.value = await searchViaProcessedValues(post.value)
    } catch (err) {
        error.value = err.toString()
    } finally {
        loading.value = false
    }
}

watch(() => route.params.id, utilDataFetch, { immediate: true })
</script>

<template>
    <article class="m-4 p-3">
        <input type="search" name="name" placeholder="Search product here..." />
        <button
            id=""
            type="text"
            @click="(values) => searchViaProcessedValues(values)"
        >
            Search
        </button>
    </article>
</template>
