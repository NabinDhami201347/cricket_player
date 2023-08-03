import type { Handle } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session');

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	try {
		// find the user based on the session
		const user = jwt.verify(session, 'secret');

		// if `user` exists set `events.local`
		if (user) {
			event.locals.user = {
				// @ts-ignore
				id: user.id,
				// @ts-ignore
				role: user.role
			};
		}

		// load page as normal
		return await resolve(event);
	} catch (error) {
		// If JWT verification fails (expired or invalid token), remove the 'session' cookie
		event.cookies.set('session', '', { maxAge: 0, path: '/' });

		// Load page as normal even without a valid session
		return await resolve(event);
	}
};
