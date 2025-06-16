<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navItems = [
    { name: 'Home', path: '/', href: '#', icon: 'fa-home' },
    { name: 'About', path: '/about', href: '#about', icon: 'fa-info-circle' },
    { name: 'Services', path: '/services', href: '#services', icon: 'fa-cogs' },
    { name: 'Projects', path: '/projects', href: '#projects', icon: 'fa-briefcase' },
    { name: 'Contact', path: '/contact', href: '#contact', icon: 'fa-envelope' }
]

const isMobileMenuOpen = ref(false)
const hasScrolled = ref(false)
const currentSection = ref('')

const onScroll = () => {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    hasScrolled.value = currentScrollPosition > 0
}

const isHome = () => {
    return window.location.pathname === '/'
}

const activeLink = () => {
    const pathSegments = router.currentRoute.value.path.split('/')
    const secondSegment = pathSegments[1]
    currentSection.value = "#"+secondSegment
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
    activeLink()
    window.addEventListener('scroll', onScroll)
    onScroll() 
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})

watch(() => router.currentRoute.value.path, () => {
    activeLink()
})



</script>

<template>
    <header class="fixed w-full top-0 z-50 bg-transparent transition-shadow duration-300"
        :class="{ 'shadow-sm bg-white': hasScrolled }">
        <nav class="container techserm-page-width mx-auto flex items-center justify-between pt-2 pb-2">
            <a href="#" class="flex items-center space-x-2">
                <img src="/assets/img/logo1.png" alt="Logo" class="h-14 w-auto" />
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
                    <router-link :to="item.path"
                        :class="[
                            'flex items-center font-bold transition-colors duration-300',
                            currentSection === item.href ? 'text-[#009EE0]' : 'text-[#003D5A] hover:text-[#009EE0]'
                        ]">
                        <i class="fas mr-2 text-sm" :class="item.icon"></i>
                        {{ item.name }}
                    </router-link>
                </li>
            </ul>

            <!-- Mobile Navigation -->
            <div v-if="isMobileMenuOpen" class="absolute top-full left-0 w-full bg-white lg:hidden shadow-lg">
                <ul class="flex flex-col divide-y">
                    <li v-for="item in navItems" :key="item.name" class="px-4 py-3 hover:bg-gray-100">
                        <a v-if="isHome()" href="#" @click.prevent="scrollToSection(item.href)"
                            class="flex items-center"
                            :class="currentSection === item.href ? 'text-[#009EE0]' : 'text-gray-600'">
                            <i class="fas mr-3" :class="item.icon"></i>
                            <span>{{ item.name }}</span>
                        </a>
                        <router-link v-else :to="item.path"
                            class="flex items-center"
                            :class="currentSection === item.href ? 'text-[#009EE0]' : 'text-gray-600'">
                            <i class="fas mr-3" :class="item.icon"></i>
                            <span>{{ item.name }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.navbar-shadow {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.03);
}
</style>