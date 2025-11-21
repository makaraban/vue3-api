<script>

</script>
<template>
    <div class="bg-gray-50 min-h-screen flex items-center justify-center p-4">
        <div class="max-w-md w-full text-center">
        <!-- Error Icon -->
        <div class="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <i class="fas fa-exclamation-triangle text-red-500 text-5xl"></i>
        </div>

        <!-- Error Message -->
        <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p class="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/" class="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition duration-300 hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                <i class="fas fa-home mr-2"></i> {{ $t("go_to_home_page") }}
            </router-link>
            <a href="#" class="border border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition duration-300">
                <i class="fas fa-arrow-left mr-2"></i> {{ $t("go_back") }}
            </a>
        </div>
    </div>
    </div>
</template>
