<script setup>
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const searchFinder = reactive({
    name: {
        type: String
    },
    description: {
        type: String
    }
})

const route = useRoute()

const loading = ref(false)
const post = ref(null)
const error = ref(null)

async function searchItemByName(name) {
    return await fetch(`/api/${name}`)
}

async function utilDataFetch() {
    error.value = post.value = null
    loading.value = true

    try {
        post.value = await searchItemByName(post.value)
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
        <input
            type="search"
            name="name"
            class="rounded-md border-stone-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            placeholder="Search product here..."
            v-model="searchFinder"
        />
        <PrimaryButton
            id=""
            class="m-4 rounded-md bg-emerald-50 text-stone-900"
            type="text"
            @click="(name) => searchItemByName(name)"
        >
            Search
        </PrimaryButton>
    </article>
</template>
