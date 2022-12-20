<script lang="ts">
  import { currentUser, pb } from "./pocketbase";

  let username: string;
  let password: string;

  let usernameError: string = "";
  let passwordError: string = "";

  async function login() {
    const user = await pb
      .collection("users")
      .authWithPassword(username, password);
    console.log(user);
  }

  async function signUp() {
    try {
      const data = { username, password, passwordConfirm: password };
      const createdUser = await pb.collection("users").create(data);
      await login();
    } catch (err) {
      usernameError = err.data.data.username.message;
      passwordError = err.data.data.password.message;
      console.log(err.data);
    }
  }

  function signOut() {
    pb.authStore.clear();
  }
</script>

{#if $currentUser}
  <p>
    Signed in as {$currentUser.username}
    <button on:click={signOut}>Sign out</button>
  </p>
{:else}
  <form on:submit|preventDefault>
    <input type="text" placeholder="Username" bind:value={username} />
    {#if usernameError} <div>{usernameError}</div> {/if}
    
    <input type="password" placeholder="Password" bind:value={password} />
    {#if passwordError} <div>{passwordError}</div> {/if}
    
    <button on:click={signUp}>Sign Up</button>
    <button on:click={login}>Login</button>
  </form>
{/if}
