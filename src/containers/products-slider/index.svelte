<script>
  import "./index.scss";
  import { apiUrl } from "../../stores";
  import { onMount } from "svelte";
  import Glide from "@glidejs/glide";

  export let products = [];
  export let title;

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID").format(money);
  };

  function addToCart(id) {
    const response = fetch(apiUrl + "/cart/add" , {
      method: "POST",
      body: JSON.stringify({
        product_id: id,
        quantity: 1,
      })
    });
    res = response.json();
    console.log(res);
  }

  onMount(async () => {
    let ul = document.querySelector(".glide__slides");
    let card = "";

    // change line 28 with this:
    // <img src=${apiUrl + product.product_photos[0].photo_url} alt=${product.product_name} />

    products.forEach((product) => {
      card += `
      <li class="glide__slide">
        <Link to=${'product/' + product.id}>
          <div class="column">
            <div class="product_item">
              <div class="card-image">
                <figure class="image is-4by5">
                  <img src=${"http://"+product.product_photos[0].photo_url} alt=${product.product_name} />
                </figure>
              </div>
              <div class="card-content">
                <div class="content product_text">
                  <p class="title is-size-5 has-text-weight-bold mb-4">
                    ${product.product_name}
                  </p>
                  <p class="subtitle">${
                    "Rp. " + formatRupiah(product.product_price)
                  }</p>
                  <p class="text-chart" on:click={addToCart(product.id)}>+ ADD TO CART</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </li>`;
    });
    ul.innerHTML = card;
    new Glide(".glide", {
      type: "carousel",
      perView: 5,
      autoplay: 6000,
    }).mount();
  });
</script>

<section class="section mx-6 px-6">
  <p class="title is-size-3 has-text-weight-bold mx-6">{title}</p>

  <div class="columns mx-6">
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides" />
      </div>
    </div>
  </div>
</section>
