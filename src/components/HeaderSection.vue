<script setup>
defineProps({
  data: Object
})
</script>
<template>

    <div class="mt-12">
        <div class="flex flex-col md:flex-row gap-8 md:gap-12">
            <!-- Text Content -->
            <div class="w-full md:w-2/3 lg:w-5/6 space-y-6 lg:space-y-8 text-center md:text-left">
                <h1 class="text-3xl lg:text-[46px] font-extrabold text-black">
                    <span class="relative">
                        <span class="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">{{data.website_name}}</span>
                        <span class="absolute inset-0 techserm-text-blue mt-2">{{data.website_name}}</span>
                    </span>
                    <span class="techserm-text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                        - {{data.header_slogan}}
                    </span>
                </h1>
                <p class="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                    {{data.header_description}}
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a href="#" class="main-btn techserm-bg-blue text-white hover:techserm-bg-blue-dark">
                        <i class="fas fa-paper-plane mr-2"></i> Contact Us
                    </a>
                    <a href="#" class="main-btn techserm-bg-black text-white hover:techserm-bg-gray-800">
                        <i class="fas fa-cogs mr-2"></i> Our Services
                    </a>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-500 justify-center md:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd" />
                    </svg>
                    Successfully delivered <b>{{data.successful_projects}}</b> projects
                </div>
            </div>

            <!-- Image -->
            <div class="w-full md:w-1/3 lg:w-7/12 md:-mt-24 flex items-center justify-center order-first md:order-last">
                <img :src="data.header_image" alt="Software interface illustration"
                    class="w-[70%] md:w-full max-w-[700px] h-auto object-contain mx-auto md:ml-auto">
            </div>
        </div>
    </div>

</template>