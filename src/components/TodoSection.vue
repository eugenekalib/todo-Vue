<template>
    <div :class="['container', $style.todoWrapper]">
        <h2 :class="$style.heading">Список задач</h2>
        <div :class="$style.cardsWrapper">
            <TodoCard 
                v-for="todo in todos"
                :key="todo.id"
                :text="todo.text"
            />
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { getTodos } from '@/api/api-todos';
import TodoCard from '@/components/TodoCard.vue';

const todos = reactive([]);

const getTodoList = async () => {
    const todoList = await getTodos();
    todos.push(...todoList);
} 

onMounted(async () => {
    await getTodoList();
})
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
    --columns-count: 3;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(var(--columns-count), 1fr);
    row-gap: 20px;
    column-gap: 50px;
}
@media (max-width: 768px) {
    .cardsWrapper {
        --columns-count: 2;
    }
}
@media (max-width: 480px) {
    .cardsWrapper {
        --columns-count: 1;
    }
}
</style>
