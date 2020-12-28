<script>
  import "./index.scss";
  import { Link } from "svelte-routing";

  export let category;
  export let products;

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID").format(money);
  };

  function addToCart(id) {
    const response = fetch(apiUrl + "/cart/add", {
      method: "POST",
      body: JSON.stringify({
        product_id: id,
        quantity: 1,
      }),
    });
    res = response.json();
    console.log(res);
  }
</script>

<section class="section mx-6 px-6">
  <p class="title is-size-3 has-text-weight-bold mx-6">{category}</p>

  <div class="columns is-multiline mx-6">
    {#each products as product}
      <Link to={'product/' + product.id}>
        <div class="column is-3">
          <div class="product_item">
            <div class="card-image">
              <figure class="image is-4by4">
                <!-- <img src={apiUrl + product.product_photos[0].photo_url} alt={product.product_name} /> -->
                <img
                  src={product.product_photos[0].photo_url}
                  alt={product.product_name} />
              </figure>
            </div>
            <div class="card-content">
              <div class="content product_text">
                <p class="title is-size-5 has-text-weight-bold mb-5">
                  {product.product_name}
                </p>
                <p class="subtitle">
                  {'Rp. ' + formatRupiah(product.product_price)}
                </p>
                <p class="text-chart" on:click={addToCart(product.id)}>
                  + ADD TO CHART
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    {/each}
  </div>
</section>
