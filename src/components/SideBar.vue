<template>
    <div class="flex">
        <div class='bg-dark-purple text-white h-screen p-5 pt-8 {{ open ? "w-72" : "w-20"}} relative'>
            <BsArrowLeftShort 
                class="
                bg-white text-dark-purple 
                text-3xl rounded-full absolute 
                -right-3 top-9 border border-dark-purple 
                cursor-pointer"
                @click="open = !open"
            />
        </div>
        <div class="p-7">
            <h1 class="text-2xl font-semibold">HomePage</h1>
        </div>
    </div>
</template>
<script setup>
    import BsArrowLeftShort from './icons/BsArrowLeftShort.vue';
    import { ref } from "vue";
    const open = () => { ref(true) };
</script>