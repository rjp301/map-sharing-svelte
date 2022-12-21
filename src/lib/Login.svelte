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
  <div class="w-full h-screen flex items-center justify-center">
    <form
      on:submit|preventDefault
      class="flex flex-col gap-4 bg-slate-700 px-8 py-6"
    >
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
      <div class="flex justify-between gap-4">
        <button
          class="dark:bg-slate-600 bg-slate-50 rounded px-4 py-1"
          on:click={login}>Login</button
        >
        <button
          class="dark:bg-amber-800 bg-amber-50 rounded px-4 py-1"
          on:click={signUp}>Sign Up</button
        >
      </div>
      {#if error}
        <p class="text-orange-500 text-sm text-center">{error}</p>
      {/if}
    </form>
  </div>
{/if}
