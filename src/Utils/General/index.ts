export function getCookie(name: string): string | null {
	const nameLenPlus = name.length + 1;
	return (
		document.cookie
			.split(';')
			.map((c) => c.trim())
			.filter((cookie) => {
				return cookie.substring(0, nameLenPlus) === `${name}=`;
			})
			.map((cookie) => {
				return decodeURIComponent(cookie.substring(nameLenPlus));
			})[0] || null
	);
}

export function removeCookies() {
	document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
