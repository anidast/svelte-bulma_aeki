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
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
        {
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "image/chair2.png",
                },
            ],
        },
    ];
    let bestSeller = latestProducts;
    //end of dummy

    // let latestProducts = [];
    // let bestSeller = [];

    // const getlatest = (async () => {
    //     const response = await fetch(apiUrl + "product", {
    //         method: "GET",
    //     });
    //     res = await response.json();
    //     if (response.status == 200) {
    //         products = res.data;
    //         let len = products.length;
    //         for (i = len-6; i < len; i++){
    //             latestProducts = [...latestProducts, products[i]];
    //         }
    //     }
    // })();

    // const getbestseller = (async () => {
    //     const response = await fetch(apiUrl + "product/sold", {
    //         method: "GET",
    //     });
    //     res = await response.json();
    //     if (response.status == 200) {
    //         bestSeller = res.data;
    //     }
    // })();
</script>

<Navbar />
<Hero />
<FeaturedCategory />
<ProductsList category="Latest Product" products={latestProducts} />
<Chart  products={bestSeller}/>
<ProductsSlider title="Best Seller" products={bestSeller} />
<Footer />
