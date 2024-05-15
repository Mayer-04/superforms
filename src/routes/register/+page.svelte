<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import type { PageData } from "./$types";

	export let data: PageData;

	const { form, enhance } = superForm(data.form);
</script>

<form method="post" use:enhance>
	<h2>Soy un Register</h2>

	<div>
		<label for="username">Nombre de usuario</label>
		<input
			bind:value={$form.username}
			type="text"
			name="username"
			id="username"
			placeholder="Mayer"
		/>
	</div>

	<div>
		<label for="email">Correo electronico</label>
		<input
			bind:value={$form.email}
			type="email"
			name="email"
			id="email"
			placeholder="mayer@example.com"
		/>
	</div>

	<div>
		<label for="password">Contraseña:</label>
		<input
			bind:value={$form.password}
			type="password"
			name="password"
			id="password"
			placeholder="password123"
		/>
	</div>

	<div>
		<label for="confirmPassword">Confirma la contraseña:</label>
		<input
			bind:value={$form.confirmPassword}
			type="text"
			name="confirmPassword"
			id="confirmPassword"
			placeholder="password123"
		/>
	</div>

	<button type="submit">Registrarse</button>
</form>
