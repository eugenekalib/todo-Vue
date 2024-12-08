<template>
<button :class="$style.button">{{ buttonText }}</button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        required: true,
    },
});

const buttonText = computed(() => {
    const text = {
            create: 'Создать',
            delete: 'Удалить',
    };
    return text[props.type] || 'Кнопка';
});
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
