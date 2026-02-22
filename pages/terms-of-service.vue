<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-[#003D5A] mb-8">Terms of Service</h1>
      
      <div class="prose max-w-none">
        <p class="text-gray-600 mb-6">Last updated: {{ new Date().toLocaleDateString() }}</p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">1. Agreement to Terms</h2>
          <p class="text-gray-600">
            By accessing and using TechSerm's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">2. Use License</h2>
          <p class="text-gray-600 mb-4">Permission is granted to temporarily access the materials on TechSerm's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">3. Services</h2>
          <p class="text-gray-600 mb-4">TechSerm provides various IT services including but not limited to:</p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Cloud Solutions</li>
            <li>Digital Marketing</li>
            <li>IT Consulting</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">4. Disclaimer</h2>
          <p class="text-gray-600">
            The materials on TechSerm's website are provided on an 'as is' basis. TechSerm makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">5. Limitations</h2>
          <p class="text-gray-600">
            In no event shall TechSerm or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TechSerm's website.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">6. Revisions and Errata</h2>
          <p class="text-gray-600">
            The materials appearing on TechSerm's website could include technical, typographical, or photographic errors. TechSerm does not warrant that any of the materials on its website are accurate, complete, or current. TechSerm may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">7. Links</h2>
          <p class="text-gray-600">
            TechSerm has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TechSerm of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">8. Contact Information</h2>
          <p class="text-gray-600">
            If you have any questions about these Terms of Service, please contact us at:
            <br>
            Email: legal@techserm.com
            <br>
            Phone: +1 (555) 123-4567
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 