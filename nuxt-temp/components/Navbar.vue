<script>
export default {
  name: 'Navbar',
  setup() {
    const route = useRoute()
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    return {
      route,
      isMenuOpen,
      toggleMenu
    }
  }
}
</script>

<template>
  <nav class="bg-white shadow-lg fixed w-full z-50">
    <!-- Copy your Navbar.vue template content here -->
  </nav>
</template> 