<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<main class="flex flex-col min-h-screen">
	<Header />
	<div class="flex-1">
		<slot />
	</div>
	<Footer />
</main>
