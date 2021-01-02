<script>
    import { afterUpdate } from "svelte";
    import Highcharts from "highcharts";

    export let products = [];

    let canvas;
    let name = [];
    let count = [];

    afterUpdate(() => {
        products.forEach((product) => {
            name = [...name, product.product_name];
            count = [...count, product.count];
        });

        Highcharts.chart(canvas, {
            chart: {
                type: "column",
            },
            title: {
                text: "Best Seller Products",
            },
            xAxis: {
                categories: name,
            },
            yAxis: {
                title: {
                    text: "Items",
                },
            },
            series: [
                {
                    name: "Product",
                    data: count,
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
