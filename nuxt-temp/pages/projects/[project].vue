<script setup>
const route = useRoute()
const { data } = await useFetch(`/api/projects/${route.params.project}`)

useHead({
  title: `${data.value?.project?.title || 'Project'} - TechSerm`
})
</script>

<template>
  <div v-if="data">
    <ProjectHeroSection :project="data.project" />
    <ProjectFeaturesSection :features="data.project.features" />
    <ProjectTechnology :technologies="data.project.technologies" />
    <ProjectContactUsSection />
  </div>
  <div v-else class="container py-16 text-center">
    <h1 class="text-4xl font-bold">Loading...</h1>
  </div>
</template> 