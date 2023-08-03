import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { db } from '$lib/utils/database';

// redirect user if logged in
export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/');
	}
};

const login: Action = async ({ cookies, request }) => {
	const data = await request.formData();
	const email = data.get('email');
	const password = data.get('password');

	if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
		return fail(400, { invalid: true });
	}

	const user = await db.user.findUnique({ where: { email } });

	if (!user) {
		return fail(400, { credentials: true });
	}

	const userPassword = await bcrypt.compare(password, user.password);

	if (!userPassword) {
		return fail(400, { credentials: true });
	}

	const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

	cookies.set('session', token, {
		// send cookie for every page
		path: '/',
		// server side only cookie so you can't use `document.cookie`
		httpOnly: true,
		// only requests from same site can send cookies
		// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
		sameSite: 'strict',
		// only sent over HTTPS in production
		secure: process.env.NODE_ENV === 'production',
		// set cookie to expire after a month
		maxAge: 60 * 60 * 24 * 30
	});

	// redirect the user
	throw redirect(302, '/');
};

export const actions: Actions = { login };
