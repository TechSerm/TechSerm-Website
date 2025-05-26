<template>
    <div style="background: url('https://www.openproject.org/assets/images/contact/hero-contact-4cf9fa21.png');"
        class="relative flex h-80 justify-center items-center text-white">
        <div class="absolute z-10 text-center px-5">
            <div class="text-3xl font-bold text-white mb-8">Want to buid your one?
                We are here for you!</div>
            <router-link 
                class="inline-flex bg-blue-100  rounded-xl items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ml-auto h-10 bg-vivid-orange hover:bg-vivid-orange text-blue-900 text-lg font-bold rounded-none p-8"
                to="/contact">Let's Start Your Project</router-link>
        </div>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>