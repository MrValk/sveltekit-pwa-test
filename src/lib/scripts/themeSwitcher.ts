export default function themeSwitcher(theme: string) {
	const body = document.querySelector('body');
	if (!body) return;

	const classList = body.classList;

	classList.add(theme);

	if (theme === 'light') classList.remove('dark');
}
