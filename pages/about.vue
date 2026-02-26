<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-28 md:py-36 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c" alt="Background"
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
            About Us
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
            We Build <span class="text-[#07A0E1]">Digital Solutions</span> That Matter
          </h1>
          <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Empowering businesses through innovative technology — from startups to global enterprises.
          </p>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="relative -mt-12 z-20">
      <div class="container mx-auto px-4">
        <div
          class="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div class="p-6 md:p-8 text-center">
            <div class="text-3xl md:text-4xl font-extrabold text-[#07A0E1] mb-1">5+</div>
            <p class="text-gray-500 text-sm font-medium">Years Experience</p>
          </div>
          <div class="p-6 md:p-8 text-center">
            <div class="text-3xl md:text-4xl font-extrabold text-[#07A0E1] mb-1">50+</div>
            <p class="text-gray-500 text-sm font-medium">Projects Delivered</p>
          </div>
          <div class="p-6 md:p-8 text-center">
            <div class="text-3xl md:text-4xl font-extrabold text-[#07A0E1] mb-1">15+</div>
            <p class="text-gray-500 text-sm font-medium">Team Members</p>
          </div>
          <div class="p-6 md:p-8 text-center">
            <div class="text-3xl md:text-4xl font-extrabold text-[#07A0E1] mb-1">99%</div>
            <p class="text-gray-500 text-sm font-medium">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="space-y-6">
            <div
              class="inline-flex items-center gap-2 bg-[#07A0E1]/10 text-[#07A0E1] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Our Story
            </div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#04405D] leading-tight">
              Building Digital Solutions <span class="text-[#07A0E1]">Since Day One</span>
            </h2>
            <p class="text-gray-500 text-lg leading-relaxed">
              Techserm delivers custom software, web, and mobile application development services to both government and
              commercial clients. Our team of full-stack developers specializes in building scalable digital solutions
              tailored to unique business needs.
            </p>
            <p class="text-gray-500 text-lg leading-relaxed">
              From intuitive web platforms and robust mobile apps to complex enterprise systems, Techserm is committed to
              driving innovation and efficiency. We empower our clients — ranging from startups to global enterprises — to
              build smarter, more connected solutions for a better tomorrow.
            </p>
            <NuxtLink to="/contact"
              class="group inline-flex items-center gap-3 techserm-bg-blue text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg shadow-[#07A0E1]/25 hover:shadow-xl hover:shadow-[#07A0E1]/30 hover:-translate-y-0.5">
              Get In Touch
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
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Our Team"
                class="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#04405D]/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-24 bg-gradient-to-br from-white via-[#04405D]/[0.03] to-[#07A0E1]/[0.05]">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div
            class="inline-flex items-center gap-2 bg-[#04405D]/10 text-[#04405D] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            What We Believe
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#04405D] mb-6 leading-tight">
            Values That <span class="text-[#07A0E1]">Drive Us</span>
          </h2>
          <p class="text-gray-500 text-lg leading-relaxed">
            Our core values shape every project and every relationship we build.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Innovation -->
          <div
            class="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#07A0E1]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <div class="absolute top-0 left-0 right-0 h-1 bg-[#07A0E1] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div
              class="w-14 h-14 bg-[#07A0E1]/10 rounded-2xl flex items-center justify-center mb-6 text-[#07A0E1] group-hover:bg-[#07A0E1] group-hover:text-white transition-colors duration-500">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#04405D] mb-3 group-hover:text-[#07A0E1] transition-colors duration-300">Innovation</h3>
            <p class="text-gray-500 leading-relaxed text-sm">
              Pushing boundaries and exploring new technologies to deliver cutting-edge solutions.
            </p>
          </div>

          <!-- Partnership -->
          <div
            class="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#07A0E1]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <div class="absolute top-0 left-0 right-0 h-1 bg-[#07A0E1] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div
              class="w-14 h-14 bg-[#04405D]/10 rounded-2xl flex items-center justify-center mb-6 text-[#04405D] group-hover:bg-[#04405D] group-hover:text-white transition-colors duration-500">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#04405D] mb-3 group-hover:text-[#07A0E1] transition-colors duration-300">Partnership</h3>
            <p class="text-gray-500 leading-relaxed text-sm">
              Building long-term relationships based on trust, transparency, and mutual success.
            </p>
          </div>

          <!-- Excellence -->
          <div
            class="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#07A0E1]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <div class="absolute top-0 left-0 right-0 h-1 bg-[#07A0E1] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div
              class="w-14 h-14 bg-[#07A0E1]/10 rounded-2xl flex items-center justify-center mb-6 text-[#07A0E1] group-hover:bg-[#07A0E1] group-hover:text-white transition-colors duration-500">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#04405D] mb-3 group-hover:text-[#07A0E1] transition-colors duration-300">Excellence</h3>
            <p class="text-gray-500 leading-relaxed text-sm">
              Committed to delivering the highest quality solutions that exceed expectations.
            </p>
          </div>

          <!-- Collaboration -->
          <div
            class="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#07A0E1]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <div class="absolute top-0 left-0 right-0 h-1 bg-[#07A0E1] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div
              class="w-14 h-14 bg-[#04405D]/10 rounded-2xl flex items-center justify-center mb-6 text-[#04405D] group-hover:bg-[#04405D] group-hover:text-white transition-colors duration-500">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#04405D] mb-3 group-hover:text-[#07A0E1] transition-colors duration-300">Collaboration</h3>
            <p class="text-gray-500 leading-relaxed text-sm">
              Working together with clients and team members to achieve shared goals.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Work / Process Section -->
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
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#04405D] mb-6 leading-tight">
            How We <span class="text-[#07A0E1]">Deliver Results</span>
          </h2>
          <p class="text-gray-500 text-lg leading-relaxed">
            A proven methodology that ensures every project is delivered on time and exceeds expectations.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div class="relative text-center">
            <div class="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#07A0E1]/40 to-transparent"></div>
            <div
              class="w-20 h-20 bg-[#07A0E1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
              <span class="text-2xl font-extrabold text-[#07A0E1]">01</span>
            </div>
            <h3 class="text-lg font-bold text-[#04405D] mb-2">Discovery</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              We deeply understand your business goals, requirements, and the challenges you face.
            </p>
          </div>
          <!-- Step 2 -->
          <div class="relative text-center">
            <div class="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#07A0E1]/40 to-transparent"></div>
            <div
              class="w-20 h-20 bg-[#07A0E1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
              <span class="text-2xl font-extrabold text-[#07A0E1]">02</span>
            </div>
            <h3 class="text-lg font-bold text-[#04405D] mb-2">Design</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              We architect and design solutions that are scalable, intuitive, and aligned with your vision.
            </p>
          </div>
          <!-- Step 3 -->
          <div class="relative text-center">
            <div class="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#07A0E1]/40 to-transparent"></div>
            <div
              class="w-20 h-20 bg-[#07A0E1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
              <span class="text-2xl font-extrabold text-[#07A0E1]">03</span>
            </div>
            <h3 class="text-lg font-bold text-[#04405D] mb-2">Develop</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Agile development with iterative sprints, regular demos, and continuous feedback loops.
            </p>
          </div>
          <!-- Step 4 -->
          <div class="relative text-center">
            <div
              class="w-20 h-20 bg-[#07A0E1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
              <span class="text-2xl font-extrabold text-[#07A0E1]">04</span>
            </div>
            <h3 class="text-lg font-bold text-[#04405D] mb-2">Deliver & Support</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              We launch, monitor, and provide ongoing support to ensure long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="relative group order-2 lg:order-1">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-[#04405D]/20 to-[#07A0E1]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <div class="relative overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" alt="Why Choose Us"
                class="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#04405D]/30 via-transparent to-transparent"></div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div
              class="inline-flex items-center gap-2 bg-[#07A0E1]/10 text-[#07A0E1] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Why Choose Us
            </div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#04405D] mb-8 leading-tight">
              What Sets Us <span class="text-[#07A0E1]">Apart</span>
            </h2>
            <div class="space-y-5">
              <div
                class="group/item flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-[#07A0E1]/30 hover:shadow-lg transition-all duration-300">
                <div
                  class="w-10 h-10 bg-[#07A0E1]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#07A0E1] transition-colors duration-300">
                  <svg class="w-5 h-5 text-[#07A0E1] group-hover/item:text-white transition-colors duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[#04405D] mb-1">Full-Stack Expertise</h3>
                  <p class="text-gray-500 text-sm leading-relaxed">End-to-end development capabilities from frontend to
                    backend and cloud infrastructure.</p>
                </div>
              </div>
              <div
                class="group/item flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-[#07A0E1]/30 hover:shadow-lg transition-all duration-300">
                <div
                  class="w-10 h-10 bg-[#07A0E1]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#07A0E1] transition-colors duration-300">
                  <svg class="w-5 h-5 text-[#07A0E1] group-hover/item:text-white transition-colors duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[#04405D] mb-1">Agile Methodology</h3>
                  <p class="text-gray-500 text-sm leading-relaxed">Iterative development with regular feedback loops to
                    ensure project success.</p>
                </div>
              </div>
              <div
                class="group/item flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-[#07A0E1]/30 hover:shadow-lg transition-all duration-300">
                <div
                  class="w-10 h-10 bg-[#07A0E1]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#07A0E1] transition-colors duration-300">
                  <svg class="w-5 h-5 text-[#07A0E1] group-hover/item:text-white transition-colors duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[#04405D] mb-1">Client-Centric Approach</h3>
                  <p class="text-gray-500 text-sm leading-relaxed">Your business goals drive every decision we make
                    throughout the project lifecycle.</p>
                </div>
              </div>
              <div
                class="group/item flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-[#07A0E1]/30 hover:shadow-lg transition-all duration-300">
                <div
                  class="w-10 h-10 bg-[#07A0E1]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#07A0E1] transition-colors duration-300">
                  <svg class="w-5 h-5 text-[#07A0E1] group-hover/item:text-white transition-colors duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[#04405D] mb-1">Ongoing Support</h3>
                  <p class="text-gray-500 text-sm leading-relaxed">Dedicated post-launch support and maintenance to keep
                    your solutions running smoothly.</p>
                </div>
              </div>
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
                Ready to Start Your <br class="hidden md:block">Next Project?
              </h2>
              <p class="text-white/80 text-lg leading-relaxed mb-8">
                Let's create something amazing together. Get in touch to discuss how we can help transform your ideas into
                reality.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink to="/contact"
                  class="group inline-flex items-center justify-center gap-3 bg-white text-[#07A0E1] font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                  Contact Us
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
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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
</script>
