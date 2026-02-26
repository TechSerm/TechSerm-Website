<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-28 md:py-36 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Background"
          class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-[#04405D]/95 to-[#04405D]/80"></div>
      </div>
      <div class="absolute -top-20 -right-20 w-96 h-96 bg-[#07A0E1]/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-[#07A0E1]/[0.07] rounded-full blur-3xl"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#07A0E1] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#07A0E1]"></span>
            </span>
            Our Services
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
            Our <span class="text-[#07A0E1]">Services</span>
          </h1>
          <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital solutions that drive growth and innovation.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Overview Cards -->
    <section class="relative -mt-12 z-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(item, index) in quickServices" :key="index"
            class="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex items-center gap-5">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              :class="index % 2 === 0 ? 'bg-[#07A0E1]/10' : 'bg-[#04405D]/10'">
              <svg class="w-6 h-6" :class="index % 2 === 0 ? 'text-[#07A0E1]' : 'text-[#04405D]'" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="item.icon" />
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-[#04405D]">{{ item.title }}</h3>
              <p class="text-gray-400 text-sm">{{ item.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Web Development Service -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="space-y-6">
            <div
              class="inline-flex items-center gap-2 bg-[#07A0E1]/10 text-[#07A0E1] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Web Development
            </div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#04405D] leading-tight">
              Custom Web <span class="text-[#07A0E1]">Solutions</span>
            </h2>
            <p class="text-gray-500 text-lg leading-relaxed">
              We create custom web applications that are not just visually appealing but also highly functional and
              scalable. From responsive websites to complex enterprise platforms.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div v-for="feature in webFeatures" :key="feature"
                class="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                <svg class="w-5 h-5 text-[#07A0E1] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-gray-600 text-sm font-medium">{{ feature }}</span>
              </div>
            </div>
            <NuxtLink to="/services/web-development"
              class="group inline-flex items-center gap-3 techserm-bg-blue text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg shadow-[#07A0E1]/25 hover:shadow-xl hover:shadow-[#07A0E1]/30 hover:-translate-y-0.5">
              Learn More
              <span
                class="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </NuxtLink>
          </div>
          <div class="relative group">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-[#07A0E1]/20 to-[#04405D]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <div class="relative overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1547658719-da2b51169166" alt="Web Development"
                class="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#04405D]/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Development Service -->
    <section class="py-24 bg-gradient-to-br from-white via-[#04405D]/[0.03] to-[#07A0E1]/[0.05]">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="relative group order-2 lg:order-1">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-[#04405D]/20 to-[#07A0E1]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <div class="relative overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c" alt="Mobile Development"
                class="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#04405D]/30 via-transparent to-transparent"></div>
            </div>
          </div>
          <div class="space-y-6 order-1 lg:order-2">
            <div
              class="inline-flex items-center gap-2 bg-[#04405D]/10 text-[#04405D] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Mobile Development
            </div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#04405D] leading-tight">
              Mobile Apps That <span class="text-[#07A0E1]">Perform</span>
            </h2>
            <p class="text-gray-500 text-lg leading-relaxed">
              We build native and cross-platform mobile applications that deliver exceptional user experiences.
              From iOS to Android, we cover all platforms with robust functionality.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div v-for="feature in mobileFeatures" :key="feature"
                class="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100">
                <svg class="w-5 h-5 text-[#07A0E1] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-gray-600 text-sm font-medium">{{ feature }}</span>
              </div>
            </div>
            <NuxtLink to="/services/mobile-app-development"
              class="group inline-flex items-center gap-3 bg-[#04405D] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg shadow-[#04405D]/25 hover:shadow-xl hover:shadow-[#04405D]/30 hover:-translate-y-0.5">
              Learn More
              <span
                class="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Enterprise Solutions Service -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="space-y-6">
            <div
              class="inline-flex items-center gap-2 bg-[#07A0E1]/10 text-[#07A0E1] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              Cloud & Enterprise
            </div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#04405D] leading-tight">
              Enterprise <span class="text-[#07A0E1]">Solutions</span> That Scale
            </h2>
            <p class="text-gray-500 text-lg leading-relaxed">
              We develop scalable enterprise software and cloud solutions that streamline operations,
              boost productivity, and help your business grow without limits.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div v-for="feature in enterpriseFeatures" :key="feature"
                class="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                <svg class="w-5 h-5 text-[#07A0E1] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                <span class="text-gray-600 text-sm font-medium">{{ feature }}</span>
              </div>
            </div>
            <NuxtLink to="/services/cloud-solutions"
              class="group inline-flex items-center gap-3 techserm-bg-blue text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg shadow-[#07A0E1]/25 hover:shadow-xl hover:shadow-[#07A0E1]/30 hover:-translate-y-0.5">
              Learn More
              <span
                class="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </NuxtLink>
          </div>
          <div class="relative group">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-[#07A0E1]/20 to-[#04405D]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <div class="relative overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="Enterprise Solutions"
                class="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#04405D]/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-0">
      <div class="absolute bottom-0 left-0 right-0 h-1/2 techserm-bg-black"></div>
      <div class="container mx-auto relative z-10 pb-10">
        <div class="techserm-bg-blue rounded-[2rem] px-8 md:px-16 py-16 md:py-20 relative overflow-hidden">
          <div class="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>
          <div class="absolute -bottom-10 -left-10 w-48 h-48 bg-white/[0.07] rounded-full"></div>
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Ready to Start <br class="hidden md:block">Your Project?
              </h2>
              <p class="text-white/80 text-lg leading-relaxed mb-8">
                Let's discuss how we can help transform your business with our technology solutions.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink to="/contact"
                  class="group inline-flex items-center justify-center gap-3 bg-white text-[#07A0E1] font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                  Get In Touch
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
                <NuxtLink to="/projects"
                  class="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
                  View Our Work
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <div class="hidden lg:flex justify-end">
              <div class="relative">
                <div class="w-64 h-64 border-2 border-white/20 rounded-full flex items-center justify-center">
                  <div class="w-44 h-44 border-2 border-white/15 rounded-full flex items-center justify-center">
                    <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  data: Object
})

const quickServices = [
  { title: 'Web Development', subtitle: 'Modern & scalable apps', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { title: 'Mobile Development', subtitle: 'iOS & Android', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { title: 'Cloud & Enterprise', subtitle: 'Scalable infrastructure', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' }
]

const webFeatures = [
  'Responsive Design',
  'Progressive Web Apps',
  'E-commerce Solutions',
  'Custom CMS Development',
  'API Integration',
  'Performance Optimization'
]

const mobileFeatures = [
  'iOS & Android Development',
  'Cross-platform Solutions',
  'App Store Optimization',
  'Push Notifications',
  'Offline Functionality',
  'Mobile App Maintenance'
]

const enterpriseFeatures = [
  'Custom ERP Systems',
  'Cloud Migration',
  'Workflow Automation',
  'DevOps & CI/CD',
  'Business Intelligence',
  'Enterprise Integration'
]
</script>
