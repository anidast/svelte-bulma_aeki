<script>
    import "./index.scss";
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
    <Link to="/" on:click={logout}>Logout</Link>
{:else}
    <Link to="login">Login</Link>
    <Link to="register">Register</Link>
{/if}
