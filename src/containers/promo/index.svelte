<script>
    import "./index.scss";
    import { onMount } from "svelte";
    import Glide from "@glidejs/glide";

    onMount(() => {
        new Glide(".glide", {
            type: "carousel",
            startAt: 0,
            perView: 1,
            autoplay: 7000,
        }).mount();
    });
</script>

<div class="glide my-6">
    <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
            <li class="glide__slide">
                <img class="image is-fullwidth" src="image/promo.png" alt="promo">
            </li>
            <li class="glide__slide">
                <img class="image is-fullwidth" src="image/promo3.png" alt="promo">
            </li>
        </ul>

        <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0" />
            <button class="glide__bullet" data-glide-dir="=1" />
        </div>
    </div>
</div>
