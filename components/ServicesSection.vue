<template>
    <div class="">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold techserm-text-black mb-4">
                Our Services
            </h2>
            <div class="w-24 h-1 techserm-bg-blue mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="service in services" :key="service.title"
                class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div class="p-8 text-center">
                    <!-- Icon Container -->
                    <div class="icon-container mx-auto mb-6">
                        <div class="icon-circle bg-blue-100 text-blue-600">
                            <i :class="`fas ${service.icon} text-2xl`"></i>
                        </div>
                    </div>

                    <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ service.title }}</h3>
                    <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const services = [
    {
        title: 'Custom Software Development',
        icon: 'fa-laptop-code',
        description: 'We build tailored software solutions from the ground up. Our team transforms your ideas into powerful, scalable applications with exceptional service and reliable results.'
    },
    {
        title: 'Web Application Development',
        icon: 'fa-globe',
        description: 'We deliver cutting-edge web applications using modern technologies to build fast, secure, and scalable platforms that align with your business goals.'
    },
    {
        title: 'Mobile Application Development',
        icon: 'fa-mobile-alt',
        description: 'We craft high-performance mobile apps for Android and iOS platforms, creating intuitive, responsive applications that delight users and drive engagement.'
    }
]
</script>

<style scoped>
.icon-container {
    width: 80px;
    height: 80px;
    position: relative;
}

.icon-circle {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
}

/* Hover effect */
.bg-white:hover .icon-circle {
    background: linear-gradient(135deg, #009EE0, #0066CC);
    color: white;
    transform: scale(1.1);
}

/* Gradient text for headings */
.text-gradient {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(135deg, #009EE0, #0066CC);
}
</style>