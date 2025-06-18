<template>
    <section class="relative h-[60vh] min-h-[500px] flex items-center">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img :src="projectData.banner" :alt="projectData.title" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-[#003D5A]/90 to-[#003D5A]/70"></div>
      </div>

      <!-- Content -->
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            test
          </h1>
          <p class="text-xl text-white/90 mb-8">
            test
          </p>
          <NuxtLink to="/contact"
            class="inline-block bg-[#FF6B00] hover:bg-[#FF8533] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Get Started
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="relative bg-[#F7F8EF] border-b border-t border-gray-200 shadow-sm">

        <div class="container pt-25 pb-25 grid md:grid-cols-2 gap-12 items-center">

            <!-- Left Column -->
            <div class="space-y-8">
                <!-- Feature Grid -->
                <div class="text-3xl sm:text-5xl lg:text-6xl font-extrabold techserm-text-blue leading-tight tracking-tight drop-shadow-md">
                    {{ projectData.title }}
                </div>

                <div v-if="projectData.project_type || projectData.client"
                    class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div v-if="projectData.project_type" class="flex items-start gap-4">
                        <div class="techserm-bg-blue p-3 rounded-full">
                            <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg techserm-text-blue font-bold">Project Type</h3>
                            <p class="text-gray-700">{{ projectData.project_type }}</p>
                        </div>
                    </div>
                    <div v-if="projectData.client" class="flex items-start gap-4">
                        <div class="techserm-bg-blue p-3 rounded-full">
                            <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg techserm-text-blue font-bold">Client</h3>
                            <p class="text-gray-700">{{ projectData.client }}</p>
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <p class="text-lg text-gray-700">
                    {{ projectData.descriptions }}
                </p>

                <!-- Live Preview Button -->
                <div class="pt-5 flex gap-4" v-if="projectData.liveUrl">
                    <a :href="projectData.liveUrl" target="_blank"
                        class="bg-[#003D5A] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition">
                        <i class="fas fa-globe mr-2"></i>Live Preview
                    </a>
                </div>
            </div>

            <vue-plyr v-if="projectData.videoUrl">
                <div data-plyr-provider="youtube" :data-plyr-config="{
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    disablekb: 1,
                    fs: 0
                }" :data-plyr-embed-id="projectData.videoUrl"></div>
            </vue-plyr>
            <img v-else :src="projectData.banner" class="shadow-lg border-2 border-gray-200 rounded-lg w-full"
                alt="Project Image">
        </div>

    </section>

    
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    projectData: Object
})

const showVideo = ref(false)
</script>

<style>
.plyr--video {
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    overflow: hidden;
    transition: all 0.3s ease;
    transform: translateZ(0);
    /* for hardware acceleration */
}

.plyr--video:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}
</style>