<template>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> <!-- This will display the matched route's component -->
  <div id="app">
    <div>
      <div class="main__wrapper">
        <div class="main__header">
          <img src="@/assets/img/logo.svg" width="300" height="47" alt="V!U!E! Pizza" />
        </div>
        <h1>Добро пожаловать!</h1>
        <p>
          Это проект V!U!E! Pizza для обучения на профессиональном онлайн‑курсе<br />
          <b>«Vue.js для опытных разработчиков».</b>
        </p>
      </div>
      <h1>Vue Pizza Project</h1>
      <DoughList :dough="dough" />
      <IngredientList :ingredients="ingredients" />
      <MiscList :misc="misc" />
      <SauceList :sauces="sauces" />
      <SizeList :sizes="sizes" />
  </div>
</div>


</template>

<style lang="scss">
@import "@/assets/scss/app.scss";
body {
justify-content: center;
align-items: center;
}
.main__wrapper {
padding-bottom: 30px;

background-color: $white;
box-shadow: $shadow-light;

h1 {
  margin-bottom: 0;
  padding: 0 95px;

  text-align: center;

  @include b-s36-h42;
}

p {
  padding: 0 95px;

  text-align: center;

  font-size: 20px;
  line-height: 30px;
}

b {
  font-size: 1.2em;
}
}

.main__header {
margin-bottom: 30px;
padding: 20px 0;

background-color: $green-600;

img {
  display: block;

  margin: 0 auto;
}
}

</style>

<script>
import DoughList from "@/components/DoughList.vue";
import IngredientList from "@/components/IngredientList.vue";
import MiscList from "@/components/MiscList.vue";
import SauceList from "@/components/SauceList.vue";
import SizeList from "@/components/SizeList.vue";

import dough from "@/mocks/dough.json";
import ingredients from "@/mocks/ingredients.json";
import misc from "@/mocks/misc.json";
import sauces from "@/mocks/sauces.json";
import sizes from "@/mocks/sizes.json";

export default {
components: {
  DoughList,
  IngredientList,
  MiscList,
  SauceList,
  SizeList,
},
data() {
  return {
    dough,
    ingredients,
    misc,
    sauces,
    sizes,
  };
},
};
</script>
