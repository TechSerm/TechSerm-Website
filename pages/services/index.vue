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

    <!-- Services Grid -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div
            class="inline-flex items-center gap-2 bg-[#04405D]/10 text-[#04405D] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35" />
            </svg>
            What We Do
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#04405D] mb-6 leading-tight">
            Services We <span class="text-[#07A0E1]">Offer</span>
          </h2>
          <p class="text-gray-500 text-lg leading-relaxed">
            Comprehensive IT solutions tailored to your business needs, from concept to deployment and beyond.
          </p>
        </div>

        <div class="space-y-20">
          <!-- Service Items -->
          <div v-for="(service, index) in services" :key="service.slug"
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <!-- Image -->
            <div class="relative group" :class="index % 2 === 1 ? 'lg:order-2' : ''">
              <div
                class="absolute -inset-4 bg-gradient-to-r rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                :class="index % 2 === 0 ? 'from-[#07A0E1]/20 to-[#04405D]/20' : 'from-[#04405D]/20 to-[#07A0E1]/20'">
              </div>
              <NuxtLink :to="`/services/${service.slug}`" class="block">
                <div class="relative overflow-hidden rounded-2xl">
                  <img :src="service.image" :alt="service.title"
                    class="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700">
                  <div class="absolute inset-0 bg-gradient-to-t from-[#04405D]/40 via-transparent to-transparent"></div>
                  <div
                    class="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                    <span v-for="tech in service.technologies" :key="tech"
                      class="bg-white/90 backdrop-blur-sm text-[#04405D] px-3 py-1 rounded-full text-xs font-semibold">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Content -->
            <div class="space-y-6" :class="index % 2 === 1 ? 'lg:order-1' : ''">
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase"
                :class="index % 2 === 0 ? 'bg-[#07A0E1]/10 text-[#07A0E1]' : 'bg-[#04405D]/10 text-[#04405D]'">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
                </svg>
                {{ service.label }}
              </div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-[#04405D] leading-tight">
                {{ service.title }}
              </h2>
              <p class="text-gray-500 text-lg leading-relaxed">{{ service.description }}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div v-for="feature in service.features" :key="feature"
                  class="flex items-center gap-3 rounded-xl px-4 py-3"
                  :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-[#04405D]/[0.03]'">
                  <svg class="w-5 h-5 text-[#07A0E1] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-600 text-sm font-medium">{{ feature }}</span>
                </div>
              </div>
              <NuxtLink :to="`/services/${service.slug}`"
                class="group inline-flex items-center gap-3 font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                :class="index % 2 === 0 ? 'techserm-bg-blue text-white shadow-[#07A0E1]/25 hover:shadow-[#07A0E1]/30' : 'bg-[#04405D] text-white shadow-[#04405D]/25 hover:shadow-[#04405D]/30'">
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

const services = [
  {
    slug: 'web-development',
    label: 'Web Development',
    title: 'Custom Web Solutions',
    description: 'We create custom web applications that are not just visually appealing but also highly functional and scalable. From responsive websites to complex enterprise platforms.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    technologies: ['React', 'Vue.js', 'Node.js', 'TypeScript'],
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Custom CMS Development',
      'API Integration',
      'Performance Optimization'
    ]
  },
  {
    slug: 'mobile-app-development',
    label: 'Mobile Development',
    title: 'Mobile Apps That Perform',
    description: 'We build native and cross-platform mobile applications that deliver exceptional user experiences. From iOS to Android, we cover all platforms.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    features: [
      'iOS & Android Development',
      'Cross-platform Solutions',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'Mobile App Maintenance'
    ]
  },
  {
    slug: 'cloud-solutions',
    label: 'Cloud & Enterprise',
    title: 'Enterprise Solutions That Scale',
    description: 'We develop scalable enterprise software and cloud solutions that streamline operations, boost productivity, and help your business grow without limits.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    features: [
      'Custom ERP Systems',
      'Cloud Migration',
      'Workflow Automation',
      'DevOps & CI/CD',
      'Business Intelligence',
      'Enterprise Integration'
    ]
  }
]
</script>
