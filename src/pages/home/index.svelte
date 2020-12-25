<script>
    import "./index.scss";
    import {
        Navbar,
        Hero,
        FeaturedCategory,
        ProductsList,
        ProductsSlider,
        Footer,
    } from "../../containers";
    import { apiUrl } from "../../stores";

    let products;
    // let latestProducts = [];
    let latestProducts = [
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
    let bestSeller = latestProducts;

    // const getlatest = (async () => {
    //     const response = await fetch($apiUrl + "product", {
    //         method: "GET",
    //     });
    //     res = await response.json();
    //     if (res.meta.code === "success") {
    //         products = res.data;
    //         let len = products.length;
    //         for (i = len-6; i < len; i++){
    //             latestProducts = [...latestProducts, products[i]];
    //         }
    //     }
    // })();

    // const getbestseller = (async () => {
    //     const response = await fetch($apiUrl + "product/sold", {
    //         method: "GET",
    //     });
    //     res = await response.json();
    //     if (res.meta.code === "success") {
    //         bestSeller = res.data;
    //     }
    // })();
</script>

<Navbar />
<Hero />
<FeaturedCategory />
<ProductsList category="Latest Product" products={latestProducts} />
<ProductsSlider title="Best Seller" products={bestSeller} />
<Footer />
