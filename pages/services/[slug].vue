<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[500px] flex items-center">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img :src="service.heroImage" :alt="service.title" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-[#003D5A]/90 to-[#003D5A]/70"></div>
      </div>

      <!-- Content -->
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Service Icon -->
          <div class="w-20 h-20 bg-[#FF6B00] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <component :is="service.mainIcon" class="w-12 h-12 text-white" />
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            {{ service.title }}
          </h1>
          <p class="text-xl text-white/90 mb-8">
            {{ service.description }}
          </p>
          <NuxtLink to="/contact"
            class="inline-block bg-[#FF6B00] hover:bg-[#FF8533] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Get Started
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <!-- Overview -->
        <div class="max-w-3xl mx-auto mb-20">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Overview</h2>
          <div class="prose prose-lg mx-auto text-gray-600 text-center">
            <p>{{ service.overview }}</p>
          </div>
        </div>

        <!-- Technologies -->
        <div class="mb-20">
          <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">Technologies We Use</h2>
          <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We leverage the latest and most powerful technologies to build exceptional solutions
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div v-for="tech in service.technologies" :key="tech.name"
              class="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <div class="w-16 h-16 mx-auto mb-4 text-[#003D5A] group-hover:scale-110 transition-transform duration-300">
                <component :is="tech.icon" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900">{{ tech.name }}</h3>
            </div>
          </div>
        </div>

        <!-- Features -->
        <div class="max-w-5xl mx-auto mb-20">
          <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">What We Offer</h2>
          <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive services tailored to your specific needs
          </p>
          <div class="grid md:grid-cols-2 gap-8">
            <div v-for="(feature, index) in service.features" :key="index"
              class="bg-white rounded-xl p-8 shadow-lg group hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-xl flex items-center justify-center flex-shrink-0 mr-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <component :is="feature.icon" class="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-gray-50 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">Why Choose Us</h2>
          <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Partner with us for exceptional results and dedicated support
          </p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(benefit, index) in service.benefits" :key="index"
              class="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="font-medium text-gray-800">{{ benefit }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">Our Process</h2>
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A streamlined approach to deliver exceptional results
        </p>
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-4 gap-8">
            <div v-for="(step, index) in service.process" :key="index" class="text-center relative">
              <!-- Connector Line -->
              <div v-if="index < service.process.length - 1" class="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#FF8533]"></div>

              <div class="relative z-10">
                <div class="w-16 h-16 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span class="text-2xl font-bold text-white">{{ index + 1 }}</span>
                </div>
                <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
                <p class="text-gray-600 text-sm">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-[#003D5A] to-[#002A3F] text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help transform your business with our {{ service.title.toLowerCase() }} solutions
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact"
            class="inline-block bg-[#FF6B00] hover:bg-[#FF8533] text-white font-bold py-4 px-10 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Start Your Project
          </NuxtLink>
          <NuxtLink to="/projects"
            class="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-[#003D5A] text-white font-bold py-4 px-10 rounded-lg transition-all duration-300">
            View Our Work
          </NuxtLink>
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
