<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-24 md:py-32">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c" alt="Background"
          class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-[#04405D]/90 to-[#04405D]/70"></div>
      </div>
      <div class="container mx-auto px-4 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">About Techserm</h1>
          <p class="text-xl text-white/90 max-w-2xl mx-auto">
            Empowering businesses through innovative technology solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="space-y-6">
            <div
              class="inline-flex items-center gap-2 bg-[#07A0E1]/10 text-[#07A0E1] px-4 py-1.5 rounded-full text-sm font-semibold">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Our Story
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-[#04405D]">Building Digital Solutions Since Day One</h2>
            <p class="text-gray-600 text-lg leading-relaxed">
              Techserm delivers custom software, web, and mobile application development services to both government and
              commercial clients. Our team of full-stack developers specializes in building scalable digital solutions
              tailored to unique business needs.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed">
              From intuitive web platforms and robust mobile apps to complex enterprise systems, Techserm is committed to
              driving innovation and efficiency. We empower our clients—ranging from startups to global enterprises—to
              build smarter, more connected solutions for a better tomorrow.
            </p>
          </div>
          <div class="relative group">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-[#07A0E1]/20 to-[#04405D]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Our Team"
              class="relative w-full rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300 object-cover">
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gradient-to-br from-[#04405D] to-[#032d40]">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Team Members -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-[#07A0E1] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div class="text-5xl font-bold text-white mb-2">15+</div>
            <h3 class="text-xl font-semibold text-white mb-2">Team Members</h3>
            <p class="text-white/70">Expert developers and designers working together</p>
          </div>

          <!-- Projects Completed -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-[#07A0E1] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div class="text-5xl font-bold text-white mb-2">50+</div>
            <h3 class="text-xl font-semibold text-white mb-2">Projects Completed</h3>
            <p class="text-white/70">Successful deliveries worldwide</p>
          </div>

          <!-- Years Experience -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-[#07A0E1] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="text-5xl font-bold text-white mb-2">5+</div>
            <h3 class="text-xl font-semibold text-white mb-2">Years Experience</h3>
            <p class="text-white/70">Industry expertise and knowledge</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div
            class="inline-flex items-center gap-2 bg-[#04405D]/10 text-[#04405D] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            What We Believe
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-[#04405D]">Our Values</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Innovation -->
          <div
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-8">
            <div
              class="w-14 h-14 bg-[#07A0E1]/10 rounded-xl flex items-center justify-center mb-6 text-[#07A0E1]">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#04405D] mb-3">Innovation</h3>
            <p class="text-gray-600 leading-relaxed">
              Pushing boundaries and exploring new technologies to deliver cutting-edge solutions.
            </p>
          </div>

          <!-- Partnership -->
          <div
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-8">
            <div
              class="w-14 h-14 bg-[#04405D]/10 rounded-xl flex items-center justify-center mb-6 text-[#04405D]">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#04405D] mb-3">Partnership</h3>
            <p class="text-gray-600 leading-relaxed">
              Building long-term relationships based on trust, transparency, and mutual success.
            </p>
          </div>

          <!-- Excellence -->
          <div
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-8">
            <div
              class="w-14 h-14 bg-[#07A0E1]/10 rounded-xl flex items-center justify-center mb-6 text-[#07A0E1]">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#04405D] mb-3">Excellence</h3>
            <p class="text-gray-600 leading-relaxed">
              Committed to delivering the highest quality solutions that exceed expectations.
            </p>
          </div>

          <!-- Collaboration -->
          <div
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-8">
            <div
              class="w-14 h-14 bg-[#04405D]/10 rounded-xl flex items-center justify-center mb-6 text-[#04405D]">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#04405D] mb-3">Collaboration</h3>
            <p class="text-gray-600 leading-relaxed">
              Working together with clients and team members to achieve shared goals.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div
              class="inline-flex items-center gap-2 bg-[#07A0E1]/10 text-[#07A0E1] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Why Choose Us
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-[#04405D] mb-6">What Sets Us Apart</h2>
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-[#07A0E1] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[#04405D] mb-1">Full-Stack Expertise</h3>
                  <p class="text-gray-600">End-to-end development capabilities from frontend to backend and cloud infrastructure.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-[#07A0E1] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[#04405D] mb-1">Agile Methodology</h3>
                  <p class="text-gray-600">Iterative development with regular feedback loops to ensure project success.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-[#07A0E1] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[#04405D] mb-1">Client-Centric Approach</h3>
                  <p class="text-gray-600">Your business goals drive every decision we make throughout the project lifecycle.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-[#07A0E1] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[#04405D] mb-1">Ongoing Support</h3>
                  <p class="text-gray-600">Dedicated post-launch support and maintenance to keep your solutions running smoothly.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative group">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-[#04405D]/20 to-[#07A0E1]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" alt="Why Choose Us"
              class="relative w-full rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300 object-cover">
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-[#04405D] to-[#032d40] text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Join Us on Our Journey</h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Let's create something amazing together. Get in touch to discuss your project.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact"
            class="inline-block bg-[#07A0E1] hover:bg-[#068cc4] text-white font-bold py-4 px-10 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Contact Us
          </NuxtLink>
          <NuxtLink to="/projects"
            class="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-[#04405D] text-white font-bold py-4 px-10 rounded-lg transition-all duration-300">
            View Our Work
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  data: Object
})
</script>
