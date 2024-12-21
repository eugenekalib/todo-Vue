<template>
    <div :class="$style.modalWrapper">
        <div :class="$style.modal">
            <slot></slot>
        </div>
    </div>
</template>

<style module>
.modalWrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
}
.modal {
    height: 417px;
    width: 705px;
    background-color: var(--color-white);
    border-radius: 16px;
}
</style>