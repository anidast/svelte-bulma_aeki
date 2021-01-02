<script>
    import "./index.scss";

    export let id;
    let product;

    const getproduct = (async () => {
        const response = await fetch(apiUrl + "product/" + id, {
            method: "GET",
        });
        let res = await response.json();
        if (response.status == 200) {
            product = res.data;
        }
    })();

    let count = 1;

    const formatRupiah = (money) => {
        return new Intl.NumberFormat("id-ID").format(money);
    };

    function minus() {
        count -= 1;
    }

    function plus() {
        count += 1;
    }
</script>

<section class="m-6">
    {#if product}
        <div class="container">
            <div class="columns">
                <div
                    class="column is-half foto-product"
                    style="margin-top:70px;">
                    <figure class="image is-4by3 px-6 mx-4 mb-4">
                        <img
                            src={'http://' + product.product_photos[0].photo_url}
                            alt={product.product_name} />
                    </figure>
                    <div class="columns mx-1">
                        <div class="column">
                            <figure class="image is-square">
                                <img
                                    src={product.product_photos[1].photo_url}
                                    alt={product.product_name} />
                            </figure>
                        </div>
                        <div class="column">
                            <figure class="image is-square">
                                <img
                                    src={product.product_photos[2].photo_url}
                                    alt={product.product_name} />
                            </figure>
                        </div>
                        <div class="column">
                            <figure class="image is-square">
                                <img
                                    src={product.product_photos[3].photo_url}
                                    alt={product.product_name} />
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="column is-half pd">
                    <p class="title is-size-4">{product.product_name}</p>
                    <p class="title is-size-5 price_text">
                        {formatRupiah(product.product_price)}
                    </p>
                    <p class="mt-4 mb-2">
                        Kategori<span
                            class="cat_text">{': ' + product.product_category}</span>
                    </p>

                    <p class="mb-3">Rincian produk</p>
                    <table class="table is-striped">
                        <tbody>
                            <tr>
                                <td>Vendor</td>
                                <td class="tk">{product.product_vendor}</td>
                            </tr>
                            <tr>
                                <td>Fitur</td>
                                <td>{product.product_description}</td>
                            </tr>
                            <tr>
                                <td>Bahan</td>
                                <td>{product.product_material}</td>
                            </tr>
                            <tr>
                                <td>Warna</td>
                                <td>{product.product_color}</td>
                            </tr>
                            <tr>
                                <td>Diuji untuk</td>
                                <td>{product.product_durability}</td>
                            </tr>
                            <tr>
                                <td>Lebar</td>
                                <td>{product.product_width + ' cm'}</td>
                            </tr>
                            <tr>
                                <td>Ketinggian</td>
                                <td>{product.product_height + ' cm'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <div class="button is-rounded btn-count mr-3">
                        <p class="is-size-3 count" on:click={minus}>-</p>
                        <input class="mx-4 kotak-input" bind:value={count} />
                        <p class="is-size-4 mt-1" on:click={plus}>+</p>
                    </div>
                    <button
                        class="button is-link is-rounded is-uppercase ac">Add to
                        cart</button>
                    <hr />
                </div>
            </div>
        </div>
    {/if}
</section>
