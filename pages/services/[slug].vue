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
          <div class="prose prose-lg mx-auto">
            <p>{{ service.overview }}</p>
          </div>
        </div>

        <!-- Technologies -->
        <div class="mb-20">
          <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Technologies We Use</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div v-for="tech in service.technologies" :key="tech.name"
              class="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300">
              <div class="w-16 h-16 mx-auto mb-4 text-[#FF6B00] group-hover:scale-110 transition-transform duration-300">
                <component :is="tech.icon" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900">{{ tech.name }}</h3>
            </div>
          </div>
        </div>

        <!-- Features -->
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
          <div class="grid gap-8">
            <div v-for="(feature, index) in service.features" :key="index" 
              class="bg-white rounded-xl p-6 shadow-lg group hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-[#003D5A] text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help transform your business with our {{ service.title.toLowerCase() }} solutions
        </p>
        <NuxtLink to="/contact"
          class="inline-block bg-[#FF6B00] hover:bg-[#FF8533] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
          Contact Us
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
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

// Service data (in a real app, this would come from an API or CMS)
const services = {
  'web-development': {
    title: 'Web Development',
    description: 'Custom web solutions tailored to your business needs. From simple websites to complex web applications, we deliver scalable and secure solutions.',
    heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    overview: 'Our web development services focus on creating modern, responsive, and user-friendly web applications that help businesses achieve their goals. We use the latest technologies and best practices to ensure your web solution is fast, secure, and scalable.',
    technologies: [
      {
        name: 'React',
        icon: IconReact
      },
      {
        name: 'Vue.js',
        icon: IconVue
      },
      {
        name: 'Node.js',
        icon: IconNode
      },
      {
        name: 'TypeScript',
        icon: IconTypeScript
      }
    ],
    features: [
      {
        title: 'Responsive Design',
        description: 'Websites that look and work great on all devices, from mobile phones to desktop computers.'
      },
      {
        title: 'Performance Optimization',
        description: 'Fast loading times and smooth user experience through optimized code and assets.'
      },
      {
        title: 'Security First',
        description: 'Built-in security features and best practices to protect your data and users.'
      },
      {
        title: 'SEO Friendly',
        description: 'Optimized for search engines to help your website rank higher in search results.'
      }
    ]
  },
  'mobile-app-development': {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences and robust functionality.',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    overview: 'We develop high-performance mobile applications for iOS and Android platforms. Our mobile solutions are designed to provide excellent user experience while meeting your business requirements.',
    technologies: [
      {
        name: 'React Native',
        icon: IconReact
      },
      {
        name: 'Flutter',
        icon: IconFlutter
      },
      {
        name: 'Swift',
        icon: IconSwift
      },
      {
        name: 'Kotlin',
        icon: IconKotlin
      }
    ],
    features: [
      {
        title: 'Cross-Platform Development',
        description: 'Build once and deploy to both iOS and Android platforms.'
      },
      {
        title: 'Native Performance',
        description: 'Optimized performance and access to native device features.'
      },
      {
        title: 'Offline Support',
        description: 'Applications that work seamlessly even without internet connection.'
      },
      {
        title: 'Push Notifications',
        description: 'Engage users with timely and relevant notifications.'
      }
    ]
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to power your business applications and services.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    overview: 'Our cloud solutions help businesses leverage the power of cloud computing to improve efficiency, reduce costs, and scale their operations. We provide end-to-end cloud services from migration to management.',
    technologies: [
      {
        name: 'AWS',
        icon: IconAWS
      },
      {
        name: 'Azure',
        icon: IconAzure
      },
      {
        name: 'Docker',
        icon: IconDocker
      },
      {
        name: 'Kubernetes',
        icon: IconKubernetes
      }
    ],
    features: [
      {
        title: 'Cloud Migration',
        description: 'Seamless migration of your existing infrastructure to the cloud.'
      },
      {
        title: 'Scalable Infrastructure',
        description: 'Automatically scale resources based on demand.'
      },
      {
        title: 'Security & Compliance',
        description: 'Enterprise-grade security and compliance with industry standards.'
      },
      {
        title: '24/7 Monitoring',
        description: 'Continuous monitoring and support for your cloud infrastructure.'
      }
    ]
  }
}

const service = services[slug] || {
  title: 'Service Not Found',
  description: 'The requested service could not be found.',
  heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  overview: 'Please check the URL and try again.',
  technologies: [],
  features: []
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