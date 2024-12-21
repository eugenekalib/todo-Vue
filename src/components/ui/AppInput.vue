<template>
    <div>
        <input type="text" :placeholder="placeholder" />
    </div>
</template>

<script setup>
defineProps({
    placeholder: {
        type: String,
        default: 'Ввести текст'
    }
})
</script>

<style module>

</style>
