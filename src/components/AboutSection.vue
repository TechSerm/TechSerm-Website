<script setup>
import AboutSectionRight from './AboutSectionRight.vue'
defineProps({
  data: Object
})
</script>
<template>
    <div class="font-bold mb-1 techserm-text-blue text-center text-xl">
        What We Do
    </div>
    <div class="mb-16 techserm-text-black font-extrabold text-center text-4xl">
        Who We Are
    </div>
    <div class="">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 items-center">
            <!-- Left Section: 4/6 -->
            <div class="col-span-7 md:col-span-4 space-y-6">
                <div class="text-lg techserm-text-black text-justify">
                    {{ data.who_we_are_descriptions }}
                </div>
                <div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        <!-- First Column with Image and Stats Card -->
                        <div class="relative group mb-15">
                            <!-- Image -->
                            <img src="https://streamstech.com/wp-content/uploads/2022/11/500px-Why-choose-US-photo-New-01.webp"
                                class="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                                alt="Our Projects">

                            <!-- Stats Card -->
                            <div class="absolute -bottom-15 left-1/2 transform -translate-x-1/2 w-4/5">
                                    <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                                        <p class="text-5xl font-bold text-gray-700">15+</p>
                                        <p class="text-xl font-bold text-gray-500 mt-1">Team Members</p>
                                    </div>
                                </div>
                        </div>

                        <!-- Second Column with Image Only -->
                        <div>
                            <div class="relative group">
                                <!-- Image -->
                                <img src="https://streamstech.com/wp-content/uploads/2022/11/500px-Why-choose-US-photo-New-01.webp"
                                    class="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                                    alt="Our Projects">

                                <!-- Stats Card -->
                                <div class="absolute -bottom-15 left-1/2 transform -translate-x-1/2 w-4/5">
                                    <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                                        <p class="text-5xl font-bold text-gray-700">15+</p>
                                        <p class="text-xl font-bold text-gray-500 mt-1">Team Members</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Section: 2/6 -->
            <div class="col-span-7 md:col-span-3">
                <AboutSectionRight :data="data" />
            </div>
        </div>
    </div>
</template>