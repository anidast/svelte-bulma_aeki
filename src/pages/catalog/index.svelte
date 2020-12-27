<script>
    import "./index.scss";
    import { Navbar, Promo, ProductsList, Footer } from "../../containers";
    import { apiUrl } from "../../stores";

    export let category;

    //dummy
    let products = [
        {
            name: "Quart Bel Chair",
            price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            name: "Quart Bel Chair",
            price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            name: "Quart Bel Chair",
            price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            name: "Quart Bel Chair",
            price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            name: "Quart Bel Chair",
            price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
    ];
    //end of dummy

    // let products;
    // const getproducts = (async () => {
    //     const response = await fetch(apiUrl + "/" + category, {
    //         method: "GET",
    //     });
    //     res = await response.json();
    //     if (response.status == 200) {
    //         products = res.data;
    //     }
    // })();
</script>

<Navbar />
<Promo />
<ProductsList {category} {products}/>
<Footer />