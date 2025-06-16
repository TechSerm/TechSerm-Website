<template>
    <div class="grid grid-cols-2 md:grid-cols-2 py-8">
        <div v-for="(feature, index) in features" :key="index" 
             class="flex flex-col items-center p-8 pt-12 pb-12 text-center bg-white"
             :class="{
                 'border-r border-gray-100': feature.border_right,
                 'border-t border-gray-100': feature.border_top
             }">
            <i class="fas text-4xl techserm-text-blue" :class="feature.icon"></i>
            <h3 class="text-xl font-bold mt-4 techserm-text-black">{{ feature.title }}</h3>
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: Object
})

const features = [
    {
        icon: 'fas fa-code',
        title: 'Scalable Code',
        border_right: true,
        border_top: false
    },
    {
        icon: 'fas fa-sync-alt',
        title: 'Agile Process',
        border_right: false,
        border_top: false
    },
    {
        icon: 'fas fa-users-cog',
        title: 'Full-Stack Team',
        border_right: true,
        border_top: true
    },
    {
        icon: 'fas fa-sliders-h',
        title: 'Flexible Delivery',
        border_right: false,
        border_top: true
    }
]


</script>