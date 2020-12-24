<script>
    import { user } from "../../stores";
    import { Link } from "svelte-routing";

    function logout() {
        $user.id = null;
        $user.username = null;
        $user.password = null;
        window.location.href = "/";
    }
</script>

{#if $user.id}
    <Link to="/" class="navbar-item" on:click={logout}>Logout</Link>
{:else}
    <Link to="login" class="navbar-item">Login</Link>
    <Link to="register" class="navbar-item">Register</Link>
{/if}
