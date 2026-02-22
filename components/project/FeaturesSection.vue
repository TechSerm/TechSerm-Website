<template>
    <!-- Features Section -->
    <div class="py-16 pb-22 border-b border-gray-100 shadow-md" style="background-color: #f8fafc;">
        <div class="container">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4 techserm-text-black">Key Features</h2>
            </div>

            <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Feature Cards -->
                <div v-for="(feature, index) in features" :key="index" @click="openModal(feature)"
                    class="bg-white  rounded-xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer">
                    <div class="h-60 p-1 overflow-hidden">
                        <img :src="feature.image" :alt="feature.title"
                            class="w-full border-2 border-gray-200 rounded-lg h-full object-cover">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 techserm-text-blue">{{ feature.title }}</h3>
                        <p class="text-gray-600 line-clamp-2">
                            {{ feature.descriptions }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Backdrop -->
        <div v-if="selectedFeature" @click.self="closeModal"
            class="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm" style="z-index: 55;">
            <!-- Modal Container -->
            <div
                class="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 sm:mx-8 flex flex-col max-h-[90vh] animate-fade-in">
                <!-- Close Button -->
                <button @click="closeModal"
                    class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer z-10">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- Header -->
                <div class="px-6 pt-6 pb-2">

                </div>

                <!-- Content Area -->
                <div class="px-6 py-4 overflow-y-auto flex-1 space-y-6">
                    <!-- Image -->
                    <div class="rounded-lg shadow-md border border-gray-100 overflow-hidden">
                        <img :src="selectedFeature.image" :alt="selectedFeature.title"
                            class="w-full h-full object-cover">
                    </div>
                    <!-- Title -->
                    <h3 class="text-2xl font-bold techserm-text-blue mt-4 mb-3">
                        {{ selectedFeature.title }}
                    </h3>
                    <!-- Long Description -->
                    <div class="text-gray-700 whitespace-pre-line">
                        {{ selectedFeature.descriptions }}
                    </div>

                    <!-- Benefits -->
                    <div v-if="selectedFeature.benefits">
                        <h4 class="text-xl font-semibold techserm-text-blue mb-3">Key Benefits</h4>
                        <ul class="list-disc pl-5 space-y-2 text-gray-700">
                            <li v-for="(benefit, i) in selectedFeature.benefits" :key="i">
                                {{ benefit }}
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Footer -->
                <div class="bg-gray-50 px-6 py-4 border-t border-gray-200 sticky bottom-0 flex justify-end">
                    <button type="button" @click="closeModal"
                        class="inline-flex justify-center cursor-pointer rounded-lg techserm-bg-blue text-white px-5 py-2 text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2">
                        Close
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        features: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedFeature: null
        };
    },
    methods: {
        openModal(feature) {
            this.selectedFeature = feature;
            document.body.style.overflow = 'hidden';
        },
        closeModal() {
            this.selectedFeature = null;
            document.body.style.overflow = '';
        }
    }
}
</script>

<style>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.animate-fade-in {
    animation: fade-in 0.2s ease-out;
}
</style>