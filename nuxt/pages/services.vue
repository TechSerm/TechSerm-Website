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
                <h2 class="text-3xl md:text-4xl font-bold text-[#003D5A]">Web Development</h2>
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
                <UButton to="/contact" color="primary" variant="solid" size="lg"
                  class="bg-[#003D5A] hover:bg-[#009EE0]">
                  Get Started
                </UButton>
              </div>
            </div>
            <div class="lg:w-1/2">
              <div class="relative rounded-xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166" alt="Web Development"
                  class="w-full h-[400px] object-cover">
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Development Service -->
        <div class="bg-white py-16 px-8 rounded-2xl mb-20">
          <div class="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div class="lg:w-1/2">
              <div class="space-y-6">
                <h2 class="text-3xl md:text-4xl font-bold text-[#003D5A]">Mobile Development</h2>
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
                <UButton to="/contact" color="primary" variant="solid" size="lg"
                  class="bg-[#003D5A] hover:bg-[#009EE0]">
                  Get Started
                </UButton>
              </div>
            </div>
            <div class="lg:w-1/2">
              <div class="relative rounded-xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c" alt="Mobile Development"
                  class="w-full h-[400px] object-cover">
              </div>
            </div>
          </div>
        </div>

        <!-- Enterprise Solutions Service -->
        <div class="bg-gray-50 py-16 px-8 rounded-2xl">
          <div class="flex flex-col lg:flex-row items-center gap-12">
            <div class="lg:w-1/2">
              <div class="space-y-6">
                <h2 class="text-3xl md:text-4xl font-bold text-[#003D5A]">Enterprise Solutions</h2>
                <p class="text-gray-600 leading-relaxed">
                  We develop scalable enterprise software solutions that streamline operations and boost productivity.
                  Our enterprise services include:
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    Custom ERP Systems
                  </li>
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    Business Intelligence
                  </li>
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    Workflow Automation
                  </li>
                  <li class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-[#009EE0] rounded-full mr-3"></span>
                    Enterprise Integration
                  </li>
                </ul>
                <UButton to="/contact" color="primary" variant="solid" size="lg"
                  class="bg-[#003D5A] hover:bg-[#009EE0]">
                  Get Started
                </UButton>
              </div>
            </div>
            <div class="lg:w-1/2">
              <div class="relative rounded-xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="Enterprise Solutions"
                  class="w-full h-[400px] object-cover">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-[#003D5A] text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Let's discuss how we can help transform your business with
          our technology solutions.</p>
        <a href="/contact"
          class="inline-block bg-[#009EE0] hover:bg-[#0086c3] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
          Get in Touch
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  data: Object
})
</script>