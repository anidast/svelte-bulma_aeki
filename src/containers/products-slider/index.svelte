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

  onMount(async () => {
    let ul = document.querySelector(".glide__slides");
    let card = "";
    console.log(title);

    // change line 28 with this:
    // <img src=${apiUrl + product.product_photos[0].photo_url} alt=${product.name} />

    products.forEach((product) => {
      card += `
      <li class="glide__slide">
        <div class="column">
          <div class="product_item">
            <div class="card-image">
              <figure class="image is-4by5">
                <img src=${product.product_photos[0].photo_url} alt=${
        product.name
      } />
              </figure>
            </div>
            <div class="card-content">
              <div class="content product_text">
                <p class="title is-size-5 has-text-weight-bold mb-5">
                  ${product.name}
                </p>
                <p class="subtitle">${"Rp. " + formatRupiah(product.price)}</p>
                <p class="text-chart">+ ADD TO CHART</p>
              </div>
            </div>
          </div>
        </div>
      </li>`;
    });
    ul.innerHTML = card;
    console.log(ul.innerHTML);
    new Glide(".glide", {
      type: "carousel",
      perView: 4,
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
