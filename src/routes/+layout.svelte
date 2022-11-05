<script>
	import '../app.scss';

	import Header from '$components/Header.svelte';
	import Navbar from '$components/Navbar.svelte';

	import { theme, setTheme } from '$stores/theme';
	import { onMount } from 'svelte';

	onMount(() => {
		const theme = localStorage.getItem('theme');

		if (theme) {
			setTheme(theme);
		}
	});

	$: $theme, console.log($theme);
</script>

<div class="wrapper flex flex-col h-screen w-screen">
	<Header />
	<main class="flex flex-col items-center overflow-x-auto px-4 py-2">
		<slot />
	</main>
	<Navbar />
</div>
