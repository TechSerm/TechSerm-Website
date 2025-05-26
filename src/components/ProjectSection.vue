<template>
    <section class="text-center mb-16 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(project, index) in projects"
          :key="index"
          class="group bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300 flex flex-col overflow-hidden"
        >
          <!-- Project Image -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <a :href="project.basic.banner" target="_blank" rel="noopener noreferrer">
              <img
                :src="project.basic.banner"
                :alt="project.basic.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
  
          <!-- Project Content -->
          <div class="flex flex-col flex-grow p-4">
            <router-link :to="'/projects/' + project.basic.slug" class="mb-2 text-left">
              <h3 class="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {{ project.basic.title }}
                <span class="text-blue-400 text-sm ml-1">
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </span>
              </h3>
            </router-link>
  
            <p class="text-sm text-gray-600 text-justify leading-relaxed mb-4">
              {{ project.basic.short_descriptions }}
            </p>
          </div>
        </article>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({
    projects: Array
  })
  
  </script>
  