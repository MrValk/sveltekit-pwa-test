<script>
	import '../app.scss';

	import Header from '$components/Header.svelte';
	import Navbar from '$components/Navbar.svelte';
</script>

<div class="wrapper flex flex-col h-screen w-screen">
	<Header />
	<main>
		<slot />
	</main>
	<Navbar />
</div>
