import type { Actions, PageServerLoad } from "./$types";
import { z } from "zod";
import { zod } from "sveltekit-superforms/adapters";
import { superValidate } from "sveltekit-superforms";
import { fail } from "@sveltejs/kit";

const registerSchema = z.object({
	username: z.string().min(3),
	email: z.string().email(),
	password: z.string(),
	confirmPassword: z.string(),
});

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(registerSchema));

	console.log({ load: form });

	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(registerSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		console.log({ action: form });
	},
};
