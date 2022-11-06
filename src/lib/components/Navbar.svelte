<script>
	import Fa from 'svelte-fa';
	import {
		faHouse,
		faNewspaper,
		faPlus,
		faBell,
		faSun,
		faMoon
	} from '@fortawesome/free-solid-svg-icons';

	import { theme, toggleTheme } from '$stores/theme';
</script>

<nav class="flex justify-around items-center w-full h-20 mt-auto primary-color">
	<button aria-label="Home">
		<Fa icon={faHouse} />
	</button>
	<button aria-label="News">
		<Fa icon={faNewspaper} />
	</button>
	<button aria-label="New Post">
		<Fa icon={faPlus} />
	</button>
	<button aria-label="Notifications">
		<Fa icon={faBell} />
	</button>
	<button on:click={toggleTheme} aria-label="Toggle Theme">
		{#if $theme == 'light'}
			<Fa icon={faSun} />
		{:else}
			<Fa icon={faMoon} />
		{/if}
	</button>
</nav>

<style lang="scss">
	nav {
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			aspect-ratio: 1/1;
			width: 18vw;
			font-size: 1.2rem;
		}
	}
</style>
