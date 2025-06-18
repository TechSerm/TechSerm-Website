<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-[#003D5A] mb-8">Cookie Policy</h1>
      
      <div class="prose max-w-none">
        <p class="text-gray-600 mb-6">Last updated: {{ new Date().toLocaleDateString() }}</p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">1. What Are Cookies</h2>
          <p class="text-gray-600">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience. Cookies can be "persistent" or "session" cookies.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">2. How We Use Cookies</h2>
          <p class="text-gray-600 mb-4">We use cookies for the following purposes:</p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li>Essential cookies: Required for the website to function properly</li>
            <li>Analytics cookies: Help us understand how visitors interact with our website</li>
            <li>Functionality cookies: Remember your preferences and settings</li>
            <li>Marketing cookies: Used to track visitors across websites</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">3. Types of Cookies We Use</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-[#003D5A] mb-2">Essential Cookies</h3>
              <p class="text-gray-600">
                These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-[#003D5A] mb-2">Analytics Cookies</h3>
              <p class="text-gray-600">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-[#003D5A] mb-2">Functionality Cookies</h3>
              <p class="text-gray-600">
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
            </div>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">4. Managing Cookies</h2>
          <p class="text-gray-600 mb-4">
            Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience using our website. To learn more about cookies and how to manage them, visit:
          </p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li>Chrome: <a href="https://support.google.com/chrome/answer/95647" class="text-[#009EE0] hover:underline">https://support.google.com/chrome/answer/95647</a></li>
            <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" class="text-[#009EE0] hover:underline">https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer</a></li>
            <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" class="text-[#009EE0] hover:underline">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></li>
            <li>Edge: <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" class="text-[#009EE0] hover:underline">https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</a></li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">5. Third-Party Cookies</h2>
          <p class="text-gray-600">
            Some cookies are placed by third-party services that appear on our pages. We use trusted third-party services that track this information on our behalf. These third-party services may include Google Analytics, social media platforms, and other analytics tools.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">6. Updates to This Policy</h2>
          <p class="text-gray-600">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-[#003D5A] mb-4">7. Contact Us</h2>
          <p class="text-gray-600">
            If you have any questions about our use of cookies, please contact us at:
            <br>
            Email: privacy@techserm.com
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