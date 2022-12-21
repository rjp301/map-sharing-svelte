<script lang="ts">
  import { currentUser, pb } from "./pocketbase";

  let username: string;
  let password: string;
  let error: string;

  async function login() {
    try {
      const user = await pb
        .collection("users")
        .authWithPassword(username, password);
      console.log(user);
      error = "";
    } catch (err) {
      error = err.data.message;
      console.log(err.data);
    }
  }

  async function signUp() {
    try {
      const data = { username, password, passwordConfirm: password };
      await pb.collection("users").create(data);
      await login();
    } catch (err) {
      error = err.data.message;
      console.log(err.data);
    }
  }

  function signOut() {
    pb.authStore.clear();
  }
</script>

{#if $currentUser}
  <div class="flex gap-4 items-center">
    <p class="dark:text-slate-500">Signed in as {$currentUser.username}</p>
    <button
      class="dark:bg-slate-600 bg-slate-50 rounded px-4 py-1"
      on:click={signOut}>Sign out</button
    >
  </div>
{:else}
  <div class="flex flex-col">
    <form on:submit|preventDefault class="flex gap-4 items-center">
      <input
        class="min-w-min text-center rounded dark:bg-slate-500"
        type="text"
        placeholder="Username"
        bind:value={username}
      />
      <input
        class="min-w-min text-center rounded dark:bg-slate-500"
        type="password"
        placeholder="Password"
        bind:value={password}
      />
      <button
        class="dark:bg-slate-600 bg-slate-50 rounded px-4 py-1"
        on:click={login}>Login</button
      >
      <button
        class="dark:bg-amber-800 bg-amber-50 rounded px-4 py-1"
        on:click={signUp}>Sign Up</button
      >
    </form>
    {#if error}
      <p class="text-orange-500 text-sm">{error}</p>
    {/if}
  </div>
{/if}
