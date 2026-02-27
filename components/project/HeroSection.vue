<template>
  <section class="relative py-28 md:py-36 overflow-hidden">
    <div class="absolute inset-0">
      <img :src="projectData.banner" :alt="projectData.title" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-[#04405D]/95 to-[#04405D]/80"></div>
    </div>
    <div class="absolute -top-20 -right-20 w-96 h-96 bg-[#07A0E1]/10 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-[#07A0E1]/[0.07] rounded-full blur-3xl"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          {{ projectData.title }}
        </h1>
        <p class="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
          {{ projectData.descriptions || projectData.short_descriptions }}
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <div v-if="projectData.project_type"
            class="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {{ projectData.project_type }}
          </div>
          <div v-if="projectData.client"
            class="inline-flex items-center gap-2 bg-[#07A0E1]/20 border border-[#07A0E1]/30 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {{ projectData.client }}
          </div>
        </div>
        <div class="mt-8 flex gap-4" v-if="projectData.liveUrl">
          <a :href="projectData.liveUrl" target="_blank"
            class="group inline-flex items-center gap-3 techserm-bg-blue text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg shadow-[#07A0E1]/25 hover:shadow-xl hover:shadow-[#07A0E1]/30 hover:-translate-y-0.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Preview
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Project Info Section -->
  <section class="py-24 bg-gradient-to-br from-white via-[#04405D]/[0.03] to-[#07A0E1]/[0.05]">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Column -->
        <div class="space-y-6">
          <div
            class="inline-flex items-center gap-2 bg-[#07A0E1]/10 text-[#07A0E1] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            About This Project
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#04405D] leading-tight">
            {{ projectData.title }}
          </h2>

          <div v-if="projectData.project_type || projectData.client" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-if="projectData.project_type"
              class="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100">
              <div class="w-10 h-10 bg-[#07A0E1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-[#07A0E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Project Type</p>
                <p class="text-[#04405D] font-bold">{{ projectData.project_type }}</p>
              </div>
            </div>
            <div v-if="projectData.client"
              class="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100">
              <div class="w-10 h-10 bg-[#04405D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-[#04405D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Client</p>
                <p class="text-[#04405D] font-bold">{{ projectData.client }}</p>
              </div>
            </div>
          </div>

          <p class="text-gray-500 text-lg leading-relaxed">
            {{ projectData.descriptions }}
          </p>
        </div>

        <!-- Right Column -->
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
        <div v-else class="relative group">
          <div
            class="absolute -inset-4 bg-gradient-to-r from-[#07A0E1]/20 to-[#04405D]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>
          <div class="relative overflow-hidden rounded-2xl">
            <img :src="projectData.banner" :alt="projectData.title"
              class="w-full object-cover group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-[#04405D]/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  projectData: Object
})
</script>

<style>
.plyr--video {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  overflow: hidden;
  transition: all 0.3s ease;
}

.plyr--video:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}
</style>
