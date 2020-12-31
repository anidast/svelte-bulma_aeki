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
  <div class="columns mb-5">
    <div class='column is-three-fifths'>
      <p class="title is-size-3 has-text-weight-bold mx-6">{category}</p>
    </div>
    <div class='column is-two-fifths'>
      <div class="panel-block" style="float:right">
        <p class="control has-icons-left">
          <input class="input box-input" type="text" placeholder="Search">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
    </div>
  </div>
  

  <div class="columns is-multiline is-justify-content-center mt-2">
    {#each products as product}
      <Link to={'product/' + product.id}>
        <div class="column">
          <div class="product_item">
            <div class="card-image">
              <figure class="image is-4by5">
                <!-- <img src={apiUrl + product.product_photos[0].photo_url} alt={product.product_name} /> -->
                <img
                  src={product.product_photos[0].photo_url}
                  alt={product.product_name} />
              </figure>
            </div>
            <div class="card-content">
              <div class="content product_text">
                <p class="title is-size-5 has-text-weight-bold mb-4">
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
