<template>
    <div class="text-center">
        <div class="font-bold mb-1 techserm-text-blue text-xl">
            Our Project
        </div>
        <div class="mb-16 techserm-text-black font-extrabold text-4xl">
            Projects
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div v-for="(project, index) in projects" :key="index"
         class="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-300 flex flex-col h-full">
        
        <!-- Image with hover effect -->
        <div class="relative overflow-hidden aspect-[4/3]">
            <a :href="project.image" >
                <img :src="project.image" :alt="project.title"
                 class="w-full h-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-105" />
            </a>
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent"></div>
        </div>
        
        <!-- Content area with flex-grow to push tech to bottom -->
        <div class="flex flex-col flex-grow">
            <div class="mb-0 p-3 pt-5">
                <a href="#" class="">
                    <h3 class="text-xl font-extrabold techserm-text-blue mb-2">
                        <span class="text-xl hover:text-blue-600 ">{{ project.title }}</span> <span class="text-blue-400 hover:text-blue-500  text-md"><i class="fa fa-external-link" aria-hidden="true"></i></span>
                    </h3>
                </a>
                <p class="text-gray-600 text-sm text-justify leading-relaxed">
                    {{ project.description }}
                </p>
            </div>
            
            <!-- Technology description at bottom -->
            <div class="mt-auto  font-semibold p-3 border-t border-gray-100">
                <div class="text-center text-sm techserm-text-black">
                    <i class="fa fa-code mr-2"></i>
                    <span>{{ project.technology_description }}</span>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
</template>

<script setup>
const projects = [
    {
        title: 'Project 1',
        description: 'Mahfil is a digital marketplace that delivers a YouTube-like live-streaming experience personalized for Islamic content. Designed to serve the growing audience in Bangladesh, ',
        technology_description: 'Go, MongoDB, ElasticSearch',
        image: 'https://qtecsolution.com/storage/case-studies/173867973167a225b36f8310.11547089.png',
    },
    {
        title: 'Project 2',
        description: 'Description of project 2.',
        technology_description: 'Laravel, Vue.js',
        image: 'https://streamstech.com/wp-content/uploads/2022/11/500px-Why-choose-US-photo-New-01.webp',
    },
    {
        title: 'Project 3',
        description: 'Description of project 3.',
        technology_description: 'Laravel, Vue.js',
        image: 'https://streamstech.com/wp-content/uploads/2022/11/500px-Why-choose-US-photo-New-01.webp',
    },
    // Add more projects as needed
]
</script>