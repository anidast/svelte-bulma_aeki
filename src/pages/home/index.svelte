<script>
    import "./index.scss";
    import {
        Navbar,
        Hero,
        FeaturedCategory,
        ProductsList,
        Chart,
        ProductsSlider,
        Footer,
    } from "../../containers";
    import { apiUrl } from "../../stores";

    let products;

    //dummy
    let latestProducts = [
        {
            id: 1,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            id: 2,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            id: 3,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            id: 4,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            id: 5,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            id: 6,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            id: 7,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            id: 8,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
    ];
    let bestSeller = [
        {
            id: 1,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            count: 5,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            id: 2,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            count: 2,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            id: 1,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            count: 6,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            id: 1,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            count: 9,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            id: 1,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            count: 4,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            id: 1,
            product_name: "Quart Bel Chair",
            product_price: 345000,
            count: 11,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
    ];
    let bestSellerProducts = bestSeller;
    //end of dummy

    // let latestProducts = [];
    // let bestSeller = [];
    // let bestSellerProducts = [];

    // const getlatest = (async () => {
    //     const response = await fetch(apiUrl + "product", {
    //         method: "GET",
    //     });
    //     let res = await response.json();
    //     if (response.status == 200) {
    //         products = res.data;
    //         let len = products.length;
    //         for (var i = len-10; i < len; i++){
    //             latestProducts = [...latestProducts, products[i]];
    //         }
    //     }
    // })();

    // const getbestseller = (async () => {
    //     const response = await fetch(apiUrl + "product/sold", {
    //         method: "GET",
    //     });
    //     let res = await response.json();
    //     if (response.status == 200) {
    //         bestSeller = res.data;
    //         bestSeller.forEach((bs) => {
    //             const gbsp = (async () => {
    //                 const response = await fetch(apiUrl + "product/" + bs.id, {
    //                     method: "GET",
    //                 });
    //                 res = await response.json();
    //                 if (response.status == 200) {
    //                     bestSellerProducts = [...bestSellerProducts, res.data]
    //                 }
    //             })();
    //         });
    //     }
    // })();
</script>

<Navbar />
<Hero />
<FeaturedCategory />
{#if latestProducts}
<ProductsList category="Latest Product" products={latestProducts} />
{/if}
{#if bestSeller}
<Chart products={bestSeller} />
<!-- <ProductsSlider title="Best Seller" products={bestSellerProducts} /> -->
{/if}
<Footer />
