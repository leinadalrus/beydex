<script setup lang="ts">
import { IBeyInfo } from '@/models/IBeyInfo'
const props = defineProps<{
    beyInfo: IBeyInfo
}>()
</script>

<template>
    <article>
        <li v-for="i in props" :key="i.id">
            {{ i }}
        </li>
    </article>
</template>
