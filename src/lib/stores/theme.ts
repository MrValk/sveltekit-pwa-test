import { writable } from 'svelte/store';
import switchTheme from '$lib/scripts/themeSwitcher';

export const theme = writable('light');

export function toggleTheme() {
	theme.update((value) => {
		const newTheme = value === 'light' ? 'dark' : 'light';

		switchTheme(newTheme);

		localStorage.setItem('theme', newTheme);

		return newTheme;
	});
}

export function setTheme(newTheme: string) {
	theme.update(() => {
		switchTheme(newTheme);

		localStorage.setItem('theme', newTheme);

		return newTheme;
	});
}
