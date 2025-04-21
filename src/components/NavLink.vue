<script setup lang="ts">
defineProps({
    href: {
        type: String
    }
})
</script>

<template>
    <nav>
        <slot></slot>
    </nav>
</template>
