<template>
  <div class="py-5 sm:py-32 bg-blue-50">
    <div class="container">
      <div class="grid grid-cols-1 gap-20 md:grid-cols-1 lg:grid-cols-2">
        <!-- Left Column -->
        <div class="lg:!pt-[95px]">
          <div>
            <img :src="project.basic.banner" :alt="project.basic.title" 
                 class="w-full rounded-xl shadow-xl">
          </div>
          <div class="font-bold my-4 text-2xl">Technologies</div>
          <div class="flex flex-wrap gap-4">
            <span v-for="tech in project.technologies" :key="tech"
              class="rounded-full px-4 py-2 font-bold text-sm bg-orange-100 text-orange-800">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Right Column -->
        <div>
          <div class="flex items-center gap-3">
            <div class="max-w-14 max-h-14"></div>
            <div class="font-bold text-3xl">{{ project.basic.title }}</div>
          </div>

          <!-- Project Details -->
          <div class="grid md:grid-cols-2 grid-cols-1 md:my-14 my-8 pt-2 gap-4 md:pt-0">
            <!-- Project Type -->
            <div class="flex">
              <div class="w-16">
                <svg data-name="Layer 1" width="45" height="45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                  <g>
                    <g>
                      <path d="M29.21774,32.12435c-.55774-.18848-1.03817-.3164-1.48787-.51421a.63868.63868,0,0,0-.82586.132,12.5977,12.5977,0,0,1-1.35418,1.09422.48613.48613,0,0,0-.25332.57612,5.88986,5.88986,0,0,1,.13216.9346,1.2834,1.2834,0,0,1-.96507,1.43141c-.615.19606-1.23559.37583-1.85875.54416a1.28949,1.28949,0,0,1-1.74112-.86075c-.2652-.8394-.742-1.00941-1.57238-1.13778a1.84824,1.84824,0,0,0-2.23557.88707,1.13208,1.13208,0,0,1-1.609.27335c-.58916-.3-1.167-.62447-1.73509-.963a1.24573,1.24573,0,0,1-.59015-1.7654,1.60329,1.60329,0,0,0-.29987-2.00387c-.57384-.74222-1.03763-1.06541-1.9795-.809a1.23475,1.23475,0,0,1-1.53181-.99178C9.1289,28.3648,8.9527,27.77619,8.7905,27.184a1.2942,1.2942,0,0,1,.85106-1.78242c.84789-.28383,1.07092-.76409,1.19923-1.63766a1.71,1.71,0,0,0-.89885-2.04611,1.20691,1.20691,0,0,1-.412-1.73986c.304-.60463.63485-1.19755.98543-1.7765a1.21515,1.21515,0,0,1,1.69244-.57775,1.79847,1.79847,0,0,0,2.2937-.32571,1.61637,1.61637,0,0,0,.73564-1.92842,1.3054,1.3054,0,0,1,1.07416-1.69413c.545-.15573,1.08832-.31763,1.6318-.47877a1.32877,1.32877,0,0,1,1.82569.85355A1.73439,1.73439,0,0,0,21.4935,15.416a1.59875,1.59875,0,0,0,1.80434-.81461c.55393-.88141,1.17188-.97535,2.09916-.47.49791.27135.997.54119,1.486.828a1.25282,1.25282,0,0,1,.62232,1.79414,1.70861,1.70861,0,0,0,.29977,2.24864,1.43965,1.43965,0,0,0,1.63436.5975c1.13361-.26467,1.684.12436,1.97961,1.23719.13746.51743.29808,1.02889.428,1.5481a1.24927,1.24927,0,0,1-.8385,1.69822,1.63473,1.63473,0,0,0-1.24881,1.69109,1.70947,1.70947,0,0,0,.87941,1.96745,1.25675,1.25675,0,0,1,.41953,1.84989,16.15727,16.15727,0,0,1-.92232,1.648A6.29663,6.29663,0,0,1,29.21774,32.12435ZM19.50858,20.75623a4.16838,4.16838,0,1,0,4.85385,3.2143A4.14832,4.14832,0,0,0,19.50858,20.75623Z" style="fill: rgb(255, 154, 45);"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="pl-4">
                <h4 class="font-bold text-2xl text-vivid-orange pb-2">Project Type</h4>
                <p class="font-bold text-lg text-neutral-600">Web</p>
              </div>
            </div>

            <!-- Client -->
            <div class="flex">
              <div class="w-16">
                <svg width="45" height="45" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                  <path d="M.02687,23.81725V21.18567a3.73417,3.73417,0,0,0,.076-.42084,21.75789,21.75789,0,0,1,.87557-4.72724A22.44014,22.44014,0,1,1,43.59393,30.06467C40.61141,38.12638,34.72209,42.965,26.26459,44.62058c-.81277.1591-1.64344.22686-2.46579.337H21.16722c-.28743-.03388-.57458-.07036-.86233-.10126A22.16,22.16,0,0,1,7.83258,39.5037,21.99236,21.99236,0,0,1,.36173,26.28059C.22159,25.46437.1371,24.6386.02687,23.81725Z" style="fill: rgb(255, 154, 45);"></path>
                </svg>
              </div>
              <div class="pl-4">
                <h4 class="font-bold text-2xl text-vivid-orange pb-2">Client</h4>
                <p class="font-bold text-lg text-neutral-600">{{ project.basic.client }}</p>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="max-w-none mx-auto prose dark:prose-invert ml-0 text-zinc-600 text-justify">
            <p class="col-start-2 text-black">{{ project.basic.short_descriptions }}</p>
          </div>

          <!-- Key Features -->
          <div class="font-bold my-4 text-2xl">Key Features</div>
          <div v-for="(feature, index) in project.basic.key_features" :key="index" class="font-bold py-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9a2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check inline-block mr-2 size-5 fill-vivid-orange stroke-white">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span class="text-base text-zinc-600 font-normal">{{ feature }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  isReversed: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.text-vivid-orange {
  color: #ff9a2d;
}
</style>