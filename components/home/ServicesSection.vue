<template>
  <section class="py-24 bg-gray-50">
    <div class="container mx-auto px-4">

      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div
          class="inline-flex items-center gap-2 bg-[#04405D]/10 techserm-text-black px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35" />
          </svg>
          What We Do
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold techserm-text-black mb-6 leading-tight">
          Services We <span class="techserm-text-blue">Offer</span>
        </h2>
        <p class="text-gray-500 text-lg md:text-xl leading-relaxed">
          Comprehensive IT solutions tailored to your business needs, from concept to deployment and beyond
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink v-for="(service, index) in services" :key="index" :to="service.link"
          class="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#07A0E1]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">

          <!-- Number -->
          <div class="text-6xl font-extrabold text-gray-100 absolute top-6 right-6 leading-none select-none group-hover:text-[#07A0E1]/10 transition-colors duration-500">
            0{{ index + 1 }}
          </div>

          <!-- Icon -->
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500"
            :class="index % 2 === 0 ? 'bg-[#07A0E1]/10' : 'bg-[#04405D]/10'">
            <svg class="w-7 h-7 transition-colors duration-500"
              :class="index % 2 === 0 ? 'techserm-text-blue' : 'techserm-text-black'"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="service.iconPath" />
            </svg>
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold techserm-text-black mb-3 group-hover:techserm-text-blue transition-colors duration-300">
            {{ service.title }}
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">{{ service.description }}</p>

          <!-- Features -->
          <ul class="space-y-2 mb-8">
            <li v-for="(feature, i) in service.features" :key="i"
              class="flex items-center gap-2 text-sm text-gray-500">
              <svg class="w-4 h-4 techserm-text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
              {{ feature }}
            </li>
          </ul>

          <!-- Arrow Link -->
          <div class="flex items-center gap-2 techserm-text-blue font-semibold text-sm">
            Learn More
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Web Development',
    description: 'Custom web solutions built with modern frameworks to deliver fast, responsive, and scalable applications.',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    link: '/services/web-development',
    features: ['Custom Web Apps', 'E-commerce', 'CMS Solutions']
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that provide seamless experiences across all devices.',
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    link: '/services/mobile-app-development',
    features: ['iOS & Android', 'Cross-Platform', 'App Store Launch']
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to power your applications with maximum reliability.',
    iconPath: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    link: '/services/cloud-solutions',
    features: ['Cloud Migration', 'DevOps', 'Infrastructure']
  },
  {
    title: 'AI Solutions',
    description: 'Intelligent AI-powered solutions to automate workflows, enhance decision-making, and drive innovation.',
    iconPath: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.59.659H9.06a2.25 2.25 0 01-1.591-.659L5 14.5m14 0V17a2 2 0 01-2 2H7a2 2 0 01-2-2v-2.5',
    link: '/services/ai-solutions',
    features: ['Machine Learning', 'Chatbots & NLP', 'AI Automation']
  }
]
</script>
