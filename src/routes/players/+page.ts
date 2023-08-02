import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/players');
	const players = await response.json();
	return { players };
}) satisfies PageLoad;
