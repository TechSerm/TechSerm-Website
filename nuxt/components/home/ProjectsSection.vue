<template>
    <div class="text-center">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold techserm-text-black mb-4">
                Projects
            </h2>
            <div class="w-24 h-1 techserm-bg-blue mx-auto"></div>
        </div>
       <ProjectSection :projects="projects.project_list" />
    </div>
</template>

<script setup>
import ProjectSection from '../ProjectSection.vue'
defineProps({
    projects: Object
})
</script>