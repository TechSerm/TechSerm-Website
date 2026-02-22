<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
          alt="Background" 
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-[#003D5A]/90 to-[#009EE0]/90"></div>
      </div>
      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
          <p class="text-xl text-white opacity-90">Transforming ideas into powerful digital solutions that drive business growth</p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <!-- Web Development Service -->
        <div class="bg-gray-50 py-16 px-8 rounded-2xl mb-20">
          <div class="flex flex-col lg:flex-row items-center gap-12">
            <div class="lg:w-1/2">
              <div class="space-y-6">
                <NuxtLink to="/services/web-development" class="block">
                  <h2 class="text-3xl md:text-4xl font-bold text-[#003D5A] hover:text-[#009EE0] transition-colors duration-300">Web Development</h2>
                </NuxtLink>
                <p class="text-gray-600 leading-relaxed">
                  We create custom web applications that are not just visually appealing but also highly functional and
                  scalable. Our web development services include:
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    Responsive Design & Development
                  </li>
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    Progressive Web Applications
                  </li>
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    E-commerce Solutions
                  </li>
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    Custom CMS Development
                  </li>
                </ul>
                <NuxtLink to="/services/web-development" 
                  class="inline-block px-6 py-3 bg-[#003D5A] text-white font-semibold rounded-lg hover:bg-[#009EE0] transition-colors duration-300">
                  Learn More
                </NuxtLink>
              </div>
            </div>
            <div class="lg:w-1/2">
              <NuxtLink to="/services/web-development" class="block">
                <div class="relative rounded-xl overflow-hidden shadow-xl group">
                  <img src="https://images.unsplash.com/photo-1547658719-da2b51169166" alt="Web Development"
                    class="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Mobile Development Service -->
        <div class="bg-white py-16 px-8 rounded-2xl mb-20">
          <div class="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div class="lg:w-1/2">
              <div class="space-y-6">
                <NuxtLink to="/services/mobile-app-development" class="block">
                  <h2 class="text-3xl md:text-4xl font-bold text-[#003D5A] hover:text-[#009EE0] transition-colors duration-300">Mobile Development</h2>
                </NuxtLink>
                <p class="text-gray-600 leading-relaxed">
                  We build native and cross-platform mobile applications that deliver exceptional user experiences. Our
                  mobile development expertise includes:
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    iOS & Android Development
                  </li>
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    Cross-platform Solutions
                  </li>
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    App Store Optimization
                  </li>
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    Mobile App Maintenance
                  </li>
                </ul>
                <NuxtLink to="/services/mobile-app-development" 
                  class="inline-block px-6 py-3 bg-[#003D5A] text-white font-semibold rounded-lg hover:bg-[#009EE0] transition-colors duration-300">
                  Learn More
                </NuxtLink>
              </div>
            </div>
            <div class="lg:w-1/2">
              <NuxtLink to="/services/mobile-app-development" class="block">
                <div class="relative rounded-xl overflow-hidden shadow-xl group">
                  <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c" alt="Mobile Development"
                    class="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Cloud Solutions Service -->
        <div class="bg-gray-50 py-16 px-8 rounded-2xl mb-20">
          <div class="flex flex-col lg:flex-row items-center gap-12">
            <div class="lg:w-1/2">
              <div class="space-y-6">
                <NuxtLink to="/services/cloud-solutions" class="block">
                  <h2 class="text-3xl md:text-4xl font-bold text-[#003D5A] hover:text-[#009EE0] transition-colors duration-300">Cloud Solutions</h2>
                </NuxtLink>
                <p class="text-gray-600 leading-relaxed">
                  We provide comprehensive cloud solutions to help businesses scale and optimize their operations. Our cloud
                  services include:
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    Cloud Migration & Strategy
                  </li>
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    Infrastructure as a Service
                  </li>
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    Cloud Security & Compliance
                  </li>
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    DevOps & Automation
                  </li>
                </ul>
                <NuxtLink to="/services/cloud-solutions" 
                  class="inline-block px-6 py-3 bg-[#003D5A] text-white font-semibold rounded-lg hover:bg-[#009EE0] transition-colors duration-300">
                  Learn More
                </NuxtLink>
              </div>
            </div>
            <div class="lg:w-1/2">
              <NuxtLink to="/services/cloud-solutions" class="block">
                <div class="relative rounded-xl overflow-hidden shadow-xl group">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="Cloud Solutions"
                    class="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-[#003D5A] to-[#009EE0] text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Let's discuss how we can help transform your business with
          our technology solutions.</p>
        <NuxtLink to="/contact"
          class="inline-block bg-white text-[#003D5A] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
          Get in Touch
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  data: Object
})
</script>