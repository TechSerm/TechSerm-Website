<template>
  <section class="">
    <div class="">
      <!-- Project List -->
      <div class="">
        <ProjectListItem 
          v-for="(project, index) in projects"
          :key="project.basic.slug"
          :project="project"
          :is-reversed="index % 2 !== 0"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectListItem from './ProjectListItem.vue'

defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script> 