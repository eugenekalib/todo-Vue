<template>
    <div :class="$style.card">
        <p> {{ text }} </p>
    </div>
</template>

<script setup>
defineProps({
    text: String,
    required: true,
})
</script>

<style module>
.card {
    border-radius: 20px;
    background-color: var(--color-white);
    padding: 20px;
    height: fit-content;
    font-weight: 500;
    font-size: 20px;
}
</style>
