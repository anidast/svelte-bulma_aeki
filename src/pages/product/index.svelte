<script>
    import "./index.scss";
    import {
        Navbar,
        ProductDetail,
        ProductsSlider,
        Footer,
    } from "../../containers";
    import { apiUrl } from "../../stores";

    //dummy
    let product = {
        product_name: "kursi",
        product_description: "sebuah kursi",
        product_price: 120500,
        product_vendor: "Mebel International",
        product_category: "chair",
        product_durability: "Tahan 10Kg",
        product_width: 60,
        product_color: "Merah",
        product_material: "plastic",
        product_height: 120,
        product_photos: [
            {
                photo_url: "http://localhost:5000/image/chair2.png",
            },
            {
                photo_url: "http://localhost:5000/image/chair2.png",
            },
            {
                photo_url: "http://localhost:5000/image/chair2.png",
            },
            {
                photo_url: "http://localhost:5000/image/chair2.png",
            },
        ],
        id: 12,
    };

    let products = [
        {
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "http://localhost:5000/image/chair2.png",
                },
            ],
        },
        {
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "http://localhost:5000/image/chair2.png",
                },
            ],
        },
        {
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "http://localhost:5000/image/chair2.png",
                },
            ],
        },
        {
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "http://localhost:5000/image/chair2.png",
                },
            ],
        },
        {
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "http://localhost:5000/image/chair2.png",
                },
            ],
        },
        {
            product_name: "Quart Bel Chair",
            product_price: 345000,
            product_photos: [
                {
                    photo_url: "http://localhost:5000/image/chair2.png",
                },
            ],
        },
    ];
    //end of dummy

    // export let id;
    // let product;
    // let products = [];

    // const getproduct = (async () => {
    //     const response = await fetch(apiUrl + "/product/" + id, {
    //         method: "GET",
    //     });
    //     res = await response.json();
    //     if (response.status == 200) {
    //         product = res.data;
    //     }
    // })();

    // const getproducts = (async () => {
    //     const response = await fetch(apiUrl + "/" + product.product_category, {
    //         method: "GET",
    //     });
    //     res = await response.json();
    //     if (response.status == 200) {
    //         products = res.data;
    //     }
    // })();
</script>

<Navbar />
<ProductDetail {product}/>
<ProductsSlider title={product.product_category} {products} />
<Footer />
