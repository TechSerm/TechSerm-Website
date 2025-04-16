<template>
    <div class="">
        <div class="font-bold techserm-text-blue text-center text-xl">
            What We Do
        </div>
        <div class="mb-10 techserm-text-black font-extrabold text-center text-4xl">
            Our Service
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            <div v-for="service in services" :key="service.title"
                class="bg-white hover:border-blue-500 border-1 border-gray-200 border-dashed rounded-xl overflow-hidden transition-all duration-300  ">
                <div class="p-8 text-center">
                    <!-- Hexagonal Icon Container -->
                    <div class="hexagon-container mx-auto mb-8">
                        <div class="hexagon bg-blue-50 techserm-text-blue">
                            <i :class="`fas ${service.icon}`"></i>
                        </div>
                    </div>

                    <h3 class="text-2xl font-semibold techserm-text-black mb-4">{{ service.title }}</h3>
                    <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const services = [
    {
        title: 'Build From Scratch',
        icon: 'fa-search',
        description: 'Comprehensive market research and data analysis to develop winning strategies.'
    },
    {
        title: 'Prototype Development',
        icon: 'fa-cube',
        description: 'Rapid prototyping to transform ideas into tangible models for testing.'
    },
    {
        title: 'Product Development',
        icon: 'fa-code',
        description: 'End-to-end development of scalable, high-performance solutions.'
    },
    {
        title: 'Product Development',
        icon: 'fa-code',
        description: 'End-to-end development of scalable, high-performance solutions.'
    },
    {
        title: 'Product Development',
        icon: 'fa-code',
        description: 'End-to-end development of scalable, high-performance solutions.'
    },
    {
        title: 'Product Development',
        icon: 'fa-code',
        description: 'End-to-end development of scalable, high-performance solutions.'
    }
]
</script>

<style scoped>
/* Hexagon CSS */
.hexagon-container {
    width: 85px;
    height: 95px;
    position: relative;
}

.hexagon {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    transition: all 0.3s ease;
}

.hexagon i {
    font-size: 45px;
}

/* Hover effect */
.bg-white:hover .hexagon {
    background: #009EE0;
    color: white;
    transform: rotate(5deg);
}
</style>