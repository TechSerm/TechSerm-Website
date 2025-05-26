<template>
    <section class="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div class="absolute bottom-0 right-0 w-32 h-32 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        
        <div class="max-w-7xl mx-auto relative">
            <div class="text-center mb-12">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Let's <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Connect</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    We'd love to hear from you! Reach out for inquiries, collaborations, or just to say hello.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h3>
                    <form class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input type="text" id="name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" placeholder="John Doe">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" id="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" placeholder="you@example.com">
                        </div>
                        <div>
                            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <select id="subject" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                                <option>General Inquiry</option>
                                <option>Support</option>
                                <option>Partnership</option>
                                <option>Feedback</option>
                            </select>
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea id="message" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" placeholder="Your message here..."></textarea>
                        </div>
                        <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition duration-200 shadow-md">
                            Send Message
                        </button>
                    </form>
                </div>

                <!-- Contact Info -->
                <div class="space-y-8">
                    <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                        <h3 class="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div class="ml-4">
                                    <h4 class="text-lg font-medium text-gray-900">Phone</h4>
                                    <p class="mt-1 text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div class="ml-4">
                                    <h4 class="text-lg font-medium text-gray-900">Email</h4>
                                    <p class="mt-1 text-gray-600">contact@example.com</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div class="ml-4">
                                    <h4 class="text-lg font-medium text-gray-900">Office</h4>
                                    <p class="mt-1 text-gray-600">123 Business Ave, Suite 400<br>San Francisco, CA 94107</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                        <h3 class="text-2xl font-semibold text-gray-800 mb-6">Business Hours</h3>
                        <div class="space-y-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Monday - Friday</span>
                                <span class="font-medium text-gray-900">9:00 AM - 5:00 PM</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Saturday</span>
                                <span class="font-medium text-gray-900">10:00 AM - 2:00 PM</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Sunday</span>
                                <span class="font-medium text-gray-900">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>