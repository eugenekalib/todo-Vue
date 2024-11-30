<template>
    <div :class="['container', $style.todoWrapper]">
        <h2 :class="$style.heading">Список задач</h2>
        <div :class="$style.cardsWrapper">
            <TodoCard text="Карточка" />
            <TodoCard text="Карточка с очень большим длинным текстом" />
            <TodoCard text="Карточка с текстом" />
            <TodoCard text="Карточка" />
            <TodoCard text="Карточка" />
            <TodoCard text="Карточка" />
        </div>
    </div>
</template>

<script setup>
import TodoCard from '@/components/TodoCard.vue';
</script>

<style module>
.todoWrapper {
    padding-top: 50px;
}
.heading {
    font-weight: 700;
    font-size: 24px;
}
.cardsWrapper {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 50px;
}
</style>