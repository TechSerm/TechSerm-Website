<template>
    <div class="grid grid-cols-2 md:grid-cols-2 max-w-4xl mx-auto py-12">
        <div v-for="(feature, index) in features" :key="index" 
             class="flex flex-col items-center p-8 text-center bg-white"
             :class="{
                 'border-r border-gray-100': feature.borderRight,
                 'border-t border-gray-100': feature.borderTop
             }">
            <i class="fas text-4xl techserm-text-blue" :class="feature.icon"></i>
            <h3 class="text-xl font-bold mt-3 techserm-text-black">{{ feature.title }}</h3>
        </div>
    </div>
</template>

<script setup>
const features = [
    {
        title: 'High-Quality Code',
        icon: 'fa-code',
        borderRight: true,
        borderTop: false,
    },
    {
        title: 'Agile Approach',
        icon: 'fa-arrows-rotate',
        borderRight: false,
        borderTop: false,
    },
    {
        title: 'Full-Stack Teams',
        icon: 'fa-layer-group',
        borderRight: true,
        borderTop: true,
    },
    {
        title: 'Flexibility',
        icon: 'fa-sliders',
        borderRight: false,
        borderTop: true,
    },
]
</script>