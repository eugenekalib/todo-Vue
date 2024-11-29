<template>
<button :class="$style.button">{{ text }}</button>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    }
})
</script>

<style module>
.button {
    padding: 8px 20px;
    border: 1px solid var(--color-white);
    color: var(--color-white);
    background: transparent;
    border-radius: 2px;
}
</style>
