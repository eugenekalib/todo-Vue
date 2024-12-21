<template>
<button :class="[$style.button, classList]">{{ text }}</button>
</template>

<script setup>
import { computed, useCssModule } from 'vue';

const $style = useCssModule();

const props = defineProps({
    type: {
        type: String,
        default: '',
    },
    text: {
        type: String,
        required: true
    }
});

const classList = computed(() => {
    return [
        props.type === 'outlined' && $style.typeOutlined,
        props.type === 'green' && $style.typeGreen,
        props.type === 'red' && $style.red,
    ];
})
</script>

<style module>
.button {
    padding: 8px 20px;
    border-radius: 2px;
    color: var(--color-black);
    background-color: var(--color-white);
    border: 1px solid transparent;
}
.typeOutlined {
    background: transparent;
    border-color: var(--color-white);
    color: var(--color-white);
}
.typeGreen {
    background-color: var(--color-success);
    border-color: var(--color-success);
    color: var(--color-white);
}
.typeRed {
    background-color: var(--color-error);
    border-color: var(--color-error);
    color: var(--color-white);
}
</style>
