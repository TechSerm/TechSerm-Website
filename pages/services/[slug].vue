<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-28 md:py-36 overflow-hidden">
      <div class="absolute inset-0">
        <img :src="service.heroImage" :alt="service.title" class="w-full h-full object-cover">
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
            {{ service.title }}
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
            {{ service.heroHeading }} <span class="text-[#07A0E1]">{{ service.heroAccent }}</span>
          </h1>
          <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            {{ service.description }}
          </p>
          <NuxtLink to="/contact"
            class="group inline-flex items-center gap-3 bg-[#07A0E1] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-[#07A0E1]/25 hover:shadow-xl hover:shadow-[#07A0E1]/30 hover:-translate-y-0.5">
            Get Started
            <span
              class="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
              <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 bg-[#07A0E1]/10 text-[#07A0E1] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Overview
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#04405D] mb-6 leading-tight">
            What We <span class="text-[#07A0E1]">Deliver</span>
          </h2>
          <p class="text-gray-500 text-lg md:text-xl leading-relaxed">
            {{ service.overview }}
          </p>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="py-24 bg-gradient-to-br from-white via-[#04405D]/[0.03] to-[#07A0E1]/[0.05]">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div
            class="inline-flex items-center gap-2 bg-[#04405D]/10 text-[#04405D] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35" />
            </svg>
            Tech Stack
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#04405D] mb-6 leading-tight">
            Technologies We <span class="text-[#07A0E1]">Use</span>
          </h2>
          <p class="text-gray-500 text-lg leading-relaxed">
            We leverage the latest and most powerful technologies to build exceptional solutions.
          </p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div v-for="(tech, index) in service.technologies" :key="tech.name"
            class="group bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#07A0E1]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
            <div class="w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
              :class="index % 2 === 0 ? 'text-[#07A0E1]' : 'text-[#04405D]'">
              <component :is="tech.icon" />
            </div>
            <h3 class="text-sm font-bold text-[#04405D] group-hover:text-[#07A0E1] transition-colors duration-300">
              {{ tech.name }}
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div
            class="inline-flex items-center gap-2 bg-[#07A0E1]/10 text-[#07A0E1] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            What We Offer
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#04405D] mb-6 leading-tight">
            Key <span class="text-[#07A0E1]">Features</span>
          </h2>
          <p class="text-gray-500 text-lg leading-relaxed">
            Comprehensive services tailored to your specific needs.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="(feature, index) in service.features" :key="index"
            class="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#07A0E1]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <div
              class="absolute top-0 left-0 right-0 h-1 bg-[#07A0E1] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left">
            </div>
            <div
              class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500"
              :class="index % 2 === 0 ? 'bg-[#07A0E1]/10 text-[#07A0E1] group-hover:bg-[#07A0E1] group-hover:text-white' : 'bg-[#04405D]/10 text-[#04405D] group-hover:bg-[#04405D] group-hover:text-white'">
              <component :is="feature.icon" class="w-7 h-7" />
            </div>
            <h3
              class="text-xl font-bold text-[#04405D] mb-3 group-hover:text-[#07A0E1] transition-colors duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-gray-500 leading-relaxed text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <div
              class="inline-flex items-center gap-2 bg-[#04405D]/10 text-[#04405D] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Why Choose Us
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#04405D] mb-6 leading-tight">
              Benefits of Working <span class="text-[#07A0E1]">With Us</span>
            </h2>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div v-for="(benefit, index) in service.benefits" :key="index"
              class="group flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-[#07A0E1]/30 hover:shadow-lg transition-all duration-300">
              <div
                class="w-10 h-10 bg-[#07A0E1]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#07A0E1] transition-colors duration-300">
                <svg
                  class="w-5 h-5 text-[#07A0E1] group-hover:text-white transition-colors duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="font-semibold text-[#04405D] text-sm">{{ benefit }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div
            class="inline-flex items-center gap-2 bg-[#07A0E1]/10 text-[#07A0E1] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Our Process
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#04405D] mb-6 leading-tight">
            How We <span class="text-[#07A0E1]">Work</span>
          </h2>
          <p class="text-gray-500 text-lg leading-relaxed">
            A streamlined approach to deliver exceptional results.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div v-for="(step, index) in service.process" :key="index" class="relative text-center">
            <div v-if="index < service.process.length - 1"
              class="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#07A0E1]/40 to-transparent">
            </div>
            <div
              class="w-20 h-20 bg-[#07A0E1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
              <span class="text-2xl font-extrabold text-[#07A0E1]">0{{ index + 1 }}</span>
            </div>
            <h3 class="text-lg font-bold text-[#04405D] mb-2">{{ step.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ step.description }}</p>
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
                Ready to Get <br class="hidden md:block">Started?
              </h2>
              <p class="text-white/80 text-lg leading-relaxed mb-8">
                Let's discuss how we can help transform your business with our
                {{ service.title.toLowerCase() }} solutions.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink to="/contact"
                  class="group inline-flex items-center justify-center gap-3 bg-white text-[#07A0E1] font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                  Start Your Project
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
                      <component :is="service.mainIcon" class="w-10 h-10 text-white" />
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
import { markRaw } from 'vue'
const route = useRoute()
const slug = route.params.slug

// Import icon components
import IconReact from '~/components/icons/IconReact.vue'
import IconVue from '~/components/icons/IconVue.vue'
import IconNode from '~/components/icons/IconNode.vue'
import IconTypeScript from '~/components/icons/IconTypeScript.vue'
import IconFlutter from '~/components/icons/IconFlutter.vue'
import IconSwift from '~/components/icons/IconSwift.vue'
import IconKotlin from '~/components/icons/IconKotlin.vue'
import IconAWS from '~/components/icons/IconAWS.vue'
import IconAzure from '~/components/icons/IconAzure.vue'
import IconDocker from '~/components/icons/IconDocker.vue'
import IconKubernetes from '~/components/icons/IconKubernetes.vue'
import IconNextJS from '~/components/icons/IconNextJS.vue'
import IconNuxt from '~/components/icons/IconNuxt.vue'
import IconTailwind from '~/components/icons/IconTailwind.vue'
import IconMongoDB from '~/components/icons/IconMongoDB.vue'

// Feature icons
import IconCode from '~/components/icons/IconCode.vue'
import IconDevice from '~/components/icons/IconDevice.vue'
import IconSpeed from '~/components/icons/IconSpeed.vue'
import IconShield from '~/components/icons/IconShield.vue'
import IconSearch from '~/components/icons/IconSearch.vue'
import IconIntegration from '~/components/icons/IconIntegration.vue'
import IconMobile from '~/components/icons/IconMobile.vue'
import IconCloud from '~/components/icons/IconCloud.vue'
import IconWeb from '~/components/icons/IconWeb.vue'

// Service data
const services = {
  'web-development': {
    title: 'Web Development',
    heroHeading: 'Custom Web',
    heroAccent: 'Solutions',
    description: 'Custom web solutions tailored to your business needs. From simple websites to complex web applications, we deliver scalable and secure solutions.',
    heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    mainIcon: markRaw(IconCode),
    overview: 'Our web development services focus on creating modern, responsive, and user-friendly web applications that help businesses achieve their goals. We use the latest technologies and best practices to ensure your web solution is fast, secure, and scalable. Whether you need a corporate website, an e-commerce platform, or a custom web application, our team of experienced developers is ready to bring your vision to life.',
    technologies: [
      { name: 'React', icon: markRaw(IconReact) },
      { name: 'Vue.js', icon: markRaw(IconVue) },
      { name: 'Next.js', icon: markRaw(IconNextJS) },
      { name: 'Nuxt', icon: markRaw(IconNuxt) },
      { name: 'Node.js', icon: markRaw(IconNode) },
      { name: 'TypeScript', icon: markRaw(IconTypeScript) },
      { name: 'Tailwind', icon: markRaw(IconTailwind) },
      { name: 'MongoDB', icon: markRaw(IconMongoDB) }
    ],
    features: [
      {
        title: 'Responsive Design',
        description: 'Websites that look and work great on all devices, from mobile phones to desktop computers. We ensure a seamless experience across all screen sizes.',
        icon: markRaw(IconDevice)
      },
      {
        title: 'Performance Optimization',
        description: 'Fast loading times and smooth user experience through optimized code, lazy loading, and efficient asset management.',
        icon: markRaw(IconSpeed)
      },
      {
        title: 'Security First',
        description: 'Built-in security features and best practices to protect your data and users from common vulnerabilities and attacks.',
        icon: markRaw(IconShield)
      },
      {
        title: 'SEO Friendly',
        description: 'Optimized for search engines to help your website rank higher in search results and drive organic traffic.',
        icon: markRaw(IconSearch)
      },
      {
        title: 'API Integration',
        description: 'Seamless integration with third-party services, payment gateways, and custom APIs to extend functionality.',
        icon: markRaw(IconIntegration)
      },
      {
        title: 'Progressive Web Apps',
        description: 'Build web applications that work offline, send push notifications, and provide native-like experiences.',
        icon: markRaw(IconWeb)
      }
    ],
    benefits: [
      'Modern Technology Stack',
      'Scalable Architecture',
      'Cross-browser Compatible',
      'Mobile-First Approach',
      'Fast Loading Speed',
      'Regular Updates & Support'
    ],
    process: [
      { title: 'Discovery', description: 'Understand your goals and requirements' },
      { title: 'Design', description: 'Create wireframes and visual designs' },
      { title: 'Development', description: 'Build with clean, maintainable code' },
      { title: 'Launch', description: 'Deploy and provide ongoing support' }
    ]
  },
  'mobile-app-development': {
    title: 'Mobile Development',
    heroHeading: 'Mobile Apps That',
    heroAccent: 'Perform',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences and robust functionality.',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    mainIcon: markRaw(IconMobile),
    overview: 'We develop high-performance mobile applications for iOS and Android platforms. Our mobile solutions are designed to provide excellent user experience while meeting your business requirements.',
    technologies: [
      { name: 'React Native', icon: markRaw(IconReact) },
      { name: 'Flutter', icon: markRaw(IconFlutter) },
      { name: 'Swift', icon: markRaw(IconSwift) },
      { name: 'Kotlin', icon: markRaw(IconKotlin) }
    ],
    features: [
      {
        title: 'Cross-Platform Development',
        description: 'Build once and deploy to both iOS and Android platforms with native performance.',
        icon: markRaw(IconMobile)
      },
      {
        title: 'Native Performance',
        description: 'Optimized performance and access to native device features for the best user experience.',
        icon: markRaw(IconSpeed)
      },
      {
        title: 'Offline Support',
        description: 'Applications that work seamlessly even without internet connection.',
        icon: markRaw(IconCloud)
      },
      {
        title: 'Push Notifications',
        description: 'Engage users with timely and relevant notifications to boost engagement.',
        icon: markRaw(IconDevice)
      }
    ],
    benefits: [
      'Native Performance',
      'Cross-platform Support',
      'Offline Functionality',
      'Push Notifications',
      'Real-time Updates',
      'App Store Optimization'
    ],
    process: [
      { title: 'Planning', description: 'Define app features and user flows' },
      { title: 'Design', description: 'Create intuitive UI/UX designs' },
      { title: 'Development', description: 'Build for iOS and Android' },
      { title: 'Launch', description: 'Submit to app stores and support' }
    ]
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    heroHeading: 'Cloud Infrastructure',
    heroAccent: 'That Scales',
    description: 'Scalable and secure cloud infrastructure to power your business applications and services.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    mainIcon: markRaw(IconCloud),
    overview: 'Our cloud solutions help businesses leverage the power of cloud computing to improve efficiency, reduce costs, and scale their operations. We provide end-to-end cloud services from migration to management.',
    technologies: [
      { name: 'AWS', icon: markRaw(IconAWS) },
      { name: 'Azure', icon: markRaw(IconAzure) },
      { name: 'Docker', icon: markRaw(IconDocker) },
      { name: 'Kubernetes', icon: markRaw(IconKubernetes) }
    ],
    features: [
      {
        title: 'Cloud Migration',
        description: 'Seamless migration of your existing infrastructure to the cloud with minimal downtime.',
        icon: markRaw(IconCloud)
      },
      {
        title: 'Scalable Infrastructure',
        description: 'Automatically scale resources based on demand to optimize costs and performance.',
        icon: markRaw(IconSpeed)
      },
      {
        title: 'Security & Compliance',
        description: 'Enterprise-grade security and compliance with industry standards and regulations.',
        icon: markRaw(IconShield)
      },
      {
        title: '24/7 Monitoring',
        description: 'Continuous monitoring and support for your cloud infrastructure around the clock.',
        icon: markRaw(IconDevice)
      }
    ],
    benefits: [
      'Scalable Infrastructure',
      'Cost Optimization',
      'High Availability',
      'Enhanced Security',
      'Automated Operations',
      'Disaster Recovery'
    ],
    process: [
      { title: 'Assessment', description: 'Evaluate current infrastructure' },
      { title: 'Strategy', description: 'Design cloud architecture' },
      { title: 'Migration', description: 'Execute seamless transition' },
      { title: 'Optimization', description: 'Monitor and optimize performance' }
    ]
  }
}

const service = services[slug] || {
  title: 'Service Not Found',
  heroHeading: 'Service',
  heroAccent: 'Not Found',
  description: 'The requested service could not be found.',
  heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  mainIcon: markRaw(IconWeb),
  overview: 'Please check the URL and try again.',
  technologies: [],
  features: [],
  benefits: [],
  process: []
}

// Set page metadata
useHead({
  title: `${service.title} - TechSerm`,
  meta: [
    {
      name: 'description',
      content: service.description
    }
  ]
})
</script>
