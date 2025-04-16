<script setup>
defineProps({
    href: {
        type: String
    }
})
</script>

<template>
    <nav>
        <slot />
    </nav>
</template>
