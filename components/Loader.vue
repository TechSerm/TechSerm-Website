<template>
    <div class="fixed inset-0 z-[9999] flex justify-center items-center min-h-screen bg-white/90 backdrop-blur-sm">
        <!-- Enhanced spinner with logo integration -->
        <div class="flex flex-col items-center">
            <!-- Spinner container with logo centered -->
            <div class="relative w-24 h-24">
                <!-- Background circle (optional) -->
                <div class="absolute inset-0 rounded-full bg-gray-50 opacity-10"></div>

                <!-- Animated gradient spinner -->
                <div
                    class="absolute inset-0 rounded-full border-6 border-transparent border-t-[#003D5A] border-r-[#009EE0] border-b-[#003D5A] border-l-[#009EE0] animate-spin">
                </div>

                <!-- Subtle outer ring (optional) -->
                <div class="absolute inset-0 rounded-full border-4 border-gray-100"></div>

                <!-- Your logo centered -->
                <div class="absolute inset-0 flex items-center justify-center">
                    <img src="/assets/img/small_logo.png" alt="Company Logo"
                        class="w-14 h-14 object-contain opacity-90" />
                </div>
            </div>

            <!-- Loading text with animation -->
            <p class="mt-4 text-xl font-semibold text-[#003D5A]">
                <span class="inline-block animate-pulse [animation-delay:0ms]">L</span>
                <span class="inline-block animate-pulse [animation-delay:150ms]">o</span>
                <span class="inline-block animate-pulse [animation-delay:300ms]">a</span>
                <span class="inline-block animate-pulse [animation-delay:450ms]">d</span>
                <span class="inline-block animate-pulse [animation-delay:600ms]">i</span>
                <span class="inline-block animate-pulse [animation-delay:750ms]">n</span>
                <span class="inline-block animate-pulse [animation-delay:900ms]">g</span>
                <span class="inline-block animate-pulse [animation-delay:1050ms]">.</span>
                <span class="inline-block animate-pulse [animation-delay:1200ms]">.</span>
                <span class="inline-block animate-pulse [animation-delay:1350ms]">.</span>
            </p>
        </div>
    </div>
</template>

<style scoped>
/* Spinner animation */
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>