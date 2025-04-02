<script setup lang="ts">
defineProps({
    name: String
})
</script>

<template>
    <div id="container">
        {{ name }}
    </div>
</template>
