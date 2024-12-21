<template>
    <div :class="$style.card">
        <p> {{ text }} </p>
        <div :class="$style.buttons">
            <TodoButton type="change" text="Изменить" />
            <TodoButton type="delete" text="Удалить" />
        </div>
    </div>
</template>

<script setup>
import TodoButton from '@/components/ui/TodoButton.vue';

defineProps({
    text: {
        type: String,
        required: true,
    }
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
    position: relative;
}
.card:hover .buttons {
    opacity: 1;
    visibility: visible;
}
.buttons {
    position: absolute;
    right: 20px;
    top: -11px;
    margin-left: 10px;
    opacity: 0;
    visibility: hidden ;
    transition: 0.2s;
}
</style>
