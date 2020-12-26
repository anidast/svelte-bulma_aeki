<script>
  import "./index.scss";
  import { Link } from "svelte-routing";
  import { apiUrl, user } from "../../stores";

  let username;
  let password;

  $: isEmpty = !username || !password;

  function login() {
    // const pages = (async () => {
    //   const response = await fetch($apiUrl + "user/login", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       username: username,
    //       password: password,
    //     }),
    //   });
    //   res = await response.json();
    //   if (res.meta.code === "success") {
    //     $user.id = res.data.id;
    //     $user.username = username;
    //     $user.password = password;
    //   }
    // })();

    //dummy
    $user.id = 1;
    $user.username = username;
    $user.password = password;
    //end of dummy
  }
</script>

<section class="login">
  <div class="link-home p-4">
    <Link to="/"><i class="fa fa-arrow-left" /> Home</Link>
  </div>

  <div class="columns">
    <div class="column" />
    <div class="column">
      <center>
        <div class="card login-card">
          <div class="card-content">
            <div class="content">
              <p class="is-title is-uppercase has-text-centered title-login">
                Login Member
              </p>

              <div class="field">
                <div class="control">
                  <input
                    class="input kotak"
                    type="text"
                    bind:value={username}
                    placeholder="Masukkan username Anda" />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    class="input kotak"
                    type="text"
                    bind:value={password}
                    placeholder="Masukkan password Anda" />
                </div>
              </div>

              <Link to="/">
                <button
                  class="button is-fullwidth btn"
                  on:click={login}
                  disabled={isEmpty}>LOGIN</button>
              </Link>

              <p class="text-bawah">
                Belum punya akun ?
                <Link to="register"><span class="has-text-link">Daftar Member</span></Link>
              </p>
            </div>
          </div>
        </div>
      </center>
    </div>
    <div class="column" />
  </div>
</section>
