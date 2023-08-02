import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const playerId = +params.id;
	const response = await fetch(`/api/${playerId}`);
	const player = await response.json();

	return { player };
}) satisfies PageLoad;
