import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import bcrypt from 'bcrypt';

import { db } from '$lib/utils/database';

// using an enum for user roles to avoid typos
// if you're not using TypeScript use an object
enum Roles {
	ADMIN = 'ADMIN',
	USER = 'USER'
}

// redirect user if logged in
export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/');
	}
};

const register: Action = async ({ request }) => {
	const data = await request.formData();
	const email = data.get('email');
	const password = data.get('password');
	const confirmpassword = data.get('confirmpassword');

	if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
		return fail(400, { invalid: true });
	}

	if (password !== confirmpassword) {
		return fail(400, { passwords: true });
	}

	const user = await db.user.findUnique({
		where: { email }
	});

	if (user) {
		return fail(400, { user: true });
	}

	await db.user.create({
		data: {
			email,
			password: await bcrypt.hash(password, 10)
		}
	});

	throw redirect(303, '/login');
};

export const actions: Actions = { register };
