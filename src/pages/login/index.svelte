<script>
  import "./index.scss";
  import { Link } from "svelte-routing";
</script>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  </style>
</head>

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
              <p
                class="is-title is-uppercase has-text-centered title-login">
                Login Member
              </p>

              <div class="field">
                <div class="control">
                  <input
                    class="input kotak"
                    type="text"
                    placeholder="Masukkan username Anda" />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    class="input kotak"
                    type="text"
                    placeholder="Masukkan password Anda" />
                </div>
              </div>

              <button
                class="button is-fullwidth btn">LOGIN</button>

              <p class="text-bawah">Belum punya akun ? <a href="register" class="has-text-link">Daftar Member</a></p>
            </div>
          </div>
        </div>
      </center>
    </div>
    <div class="column" />
  </div>
</section>
