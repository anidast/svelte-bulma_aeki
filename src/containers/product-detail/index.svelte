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
            <div class="column is-half">
                <p>H3 Quart Bel Chair</p>
                <p>Rp. 345.000</p>
                <p>Kategori : Kursi</p>
                <p>Stok : 10 </p>
                <hr>
                <p>Rincian produk</p>
                <table class="table is-striped">
                    <tbody>
                        <tr>
                            <td>SKU</td>
                            <td>504.105.37</td>
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
                <div class="button is-rounded">
                    <p class="is-size-2" on:click={minus}>-</p>
                    <input class="mx-4" bind:value={count}>
                    <p class="is-size-3" on:click={plus}>+</p>
                </div>
                <button class="button is-link is-rounded">Add to cart</button>
                <hr>
            </div>
        </div>
    </div>
</section>
