<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
    { name: 'Home', href: '#home', icon: 'fa-home' },
    { name: 'About', href: '#about', icon: 'fa-info-circle' },
    { name: 'Services', href: '#services', icon: 'fa-cogs' },
    { name: 'Projects', href: '#projects', icon: 'fa-briefcase' },
    { name: 'Contact', href: '#contact', icon: 'fa-envelope' }
]

const isMobileMenuOpen = ref(false)
const hasScrolled = ref(false)
const currentSection = ref('')

let lastScrollPosition = 0

const onScroll = () => {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    hasScrolled.value = currentScrollPosition > 60

    for (const item of navItems) {
        const section = document.querySelector(item.href)
        if (section) {
            const sectionTop = section.offsetTop - 120
            const sectionHeight = section.offsetHeight
            if (
                currentScrollPosition >= sectionTop &&
                currentScrollPosition < sectionTop + sectionHeight
            ) {
                currentSection.value = item.href
                break
            }
        }
    }

    lastScrollPosition = currentScrollPosition
}

const scrollToSection = (selector) => {
    const el = document.querySelector(selector)
    if (el) {
        const top = el.offsetTop - 70
        window.scrollTo({ top, behavior: 'smooth' })
        isMobileMenuOpen.value = false
    }
}

onMounted(() => {
    window.addEventListener('scroll', onScroll)
    onScroll() // initialize current section on page load
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<template>
    <header class="fixed w-full top-0 z-50 bg-transparent transition-shadow duration-300"
        :class="{ 'shadow-sm bg-white': hasScrolled }">
        <nav class="container techserm-page-width mx-auto flex items-center justify-between pt-2 pb-2">
            <a href="#" class="flex items-center space-x-2">
                <img src="/src/assets/img/logo1.png" alt="Logo" class="h-14 w-auto" />
            </a>

            <!-- Mobile Menu Toggle -->
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="lg:hidden focus:outline-none">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <!-- Desktop Navigation -->
            <ul class="hidden lg:flex space-x-6">
                <li v-for="item in navItems" :key="item.name">
                    <a href="#" @click.prevent="scrollToSection(item.href)"
                        :class="[
                            'flex items-center font-bold transition-colors duration-300',
                            currentSection === item.href ? 'text-[#009EE0]' : 'text-[#003D5A] hover:text-[#009EE0]'
                        ]">
                        <i class="fas mr-2 text-sm" :class="item.icon"></i>
                        {{ item.name }}
                    </a>
                </li>
            </ul>

            <!-- Mobile Navigation -->
            <div v-if="isMobileMenuOpen" class="absolute top-full left-0 w-full bg-white lg:hidden shadow-lg">
                <ul class="flex flex-col divide-y">
                    <li v-for="item in navItems" :key="item.name" class="px-4 py-3 hover:bg-gray-100">
                        <a href="#" @click.prevent="scrollToSection(item.href)"
                            class="flex items-center"
                            :class="currentSection === item.href ? 'text-[#009EE0]' : 'text-gray-600'">
                            <i class="fas mr-3" :class="item.icon"></i>
                            <span>{{ item.name }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>