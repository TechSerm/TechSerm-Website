<template>
    <div class="grid grid-cols-2 md:grid-cols-2 max-w-4xl mx-auto py-12">
        <div v-for="(feature, index) in features" :key="index" 
             class="flex flex-col items-center p-8 text-center bg-white"
             :class="{
                 'border-r border-gray-100': feature.border_right,
                 'border-t border-gray-100': feature.border_top
             }">
            <i class="fas text-4xl techserm-text-blue" :class="feature.icon"></i>
            <h3 class="text-xl font-bold mt-3 techserm-text-black">{{ feature.title }}</h3>
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: Object
})

const features = [
    {
        icon: 'fas fa-user',
        title: 'Who We Are',
        border_right: true,
        border_top: true
    },
    {
        icon: 'fas fa-cog',
        title: 'What We Do',
        border_right: true,
        border_top: false
    },
    {
        icon: 'fas fa-code',
        title: 'Our Services',
        border_right: false,
        border_top: true
    },
    {
        icon: 'fas fa-info',
        title: 'Our Team',
        border_right: false,
        border_top: false
    }
]

</script>