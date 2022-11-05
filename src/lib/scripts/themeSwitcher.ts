export default function themeSwitcher() {
	const body = document.querySelector('body');
	if (!body) return;

	const classList = body.classList;

	if (classList.contains('dark-theme')) {
		classList.remove('dark-theme');
	} else {
		classList.add('dark-theme');
	}
}
