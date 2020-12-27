<script>
    import { afterUpdate } from "svelte";
    import Highcharts from "highcharts";
    
    export let products = [];

    let canvas;
    let name = [];
    let count = [];

    products.forEach(product => {
        name = [...name, product.product_name];
        count = [...count, product.count];
    });

    afterUpdate(() => {
        Highcharts.chart(canvas, {
            chart: {
                type: "column",
            },
            title: {
                text: "Best Seller Products",
            },
            xAxis: {
                categories: ["Apples", "Bananas", "Oranges"],
                // categories: name,
            },
            yAxis: {
                title: {
                    text: "Items",
                },
            },
            series: [
                {
                    name: "Product",
                    data: [5, 7, 3],
                    // data: count,
                },
            ],
        });
    });
</script>

<section>
    <div class="container">
        <div bind:this={canvas} style="width:100%; height:400px;">
            <slot />
        </div>
    </div>
</section>
<svelte:options tag="highchart-box" />
