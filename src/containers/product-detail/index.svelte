<script>
    import "./index.scss";

    let count = 1;

    function minus(){
        count-=1;
    }

    function plus(){
        count+=1;
    }
</script>

<section class="m-6">
    <div class="container">
        <div class="columns">
            <div class="column is-half">
                <figure class="image is-128x128">
                    <img src="" alt="">
                </figure>
                <div class="columns">
                    <div class="column is-one-third"></div>
                </div>
            </div>
            <div class="column is-half pd">
                <p class="title is-size-4">Quart Bel Chair</p>
                <p class="title is-size-5 price_text">Rp. 345.000</p>
                <p class="mt-4 mb-2">Kategori<span class="cat_text">: Kursi</span></p>
                <p>Stok<span class="cat_text" style="color:#676767!important;">: 10</span></p>
                <hr>
                <p class="mb-3">Rincian produk</p>
                <table class="table is-striped" >
                    <tbody>
                        <tr>
                            <td>SKU</td>
                            <td class="tk">504.105.37</td>
                        </tr>
                        <tr>
                            <td>Fitur</td>
                            <td>Bentuk unik dan kokoh</td>
                        </tr>
                        <tr>
                            <td>Bahan</td>
                            <td>Poliester</td>
                        </tr>
                        <tr>
                            <td>Warna</td>
                            <td>Biru</td>
                        </tr>
                        <tr>
                            <td>Diuji untuk</td>
                            <td>Up to 110kg</td>
                        </tr>
                        <tr>
                            <td>Lebar</td>
                            <td>68cm</td>
                        </tr>
                        <tr>
                            <td>Ketinggian</td>
                            <td>92cm</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <div class="button is-rounded btn-count mr-3">
                    <p class="is-size-3 count" on:click={minus}>-</p>
                    <input class="mx-4 kotak-input" bind:value={count}>
                    <p class="is-size-4 mt-1" on:click={plus}>+</p>
                </div>
                <button class="button is-link is-rounded is-uppercase ac">Add to cart</button>
                <hr>
            </div>
        </div>
    </div>
</section>
