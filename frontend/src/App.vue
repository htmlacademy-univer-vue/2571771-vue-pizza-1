<template>
  <div id="app">
    <AppHeader />
    <router-view /> <!-- This will display the matched route's component -->
    <div class="main__wrapper">
      <div class="main__header">
        <img src="@/assets/img/logo.svg" width="300" height="47" alt="V!U!E! Pizza" />
      </div>
      <h1>Добро пожаловать!</h1>
      <p>
        Это проект V!U!E! Pizza для обучения на профессиональном онлайн‑курсе<br />
        <b>«Vue.js для опытных разработчиков».</b>
      </p>
      <h1>Vue Pizza Project</h1>
      <div class="pizza-constructor">
        <DoughList :dough="dough" />
        <SizeList :sizes="sizes" />
        <SauceList :sauces="sauces" />
        <IngredientList :ingredients="ingredients" />
        <MiscList :misc="misc" @miscSelected="setMisc" />
      </div>
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

.pizza-constructor {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  padding: 0 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

<script>
import AppHeader from '@/layouts/AppHeader.vue';
import DoughList from "@/components/DoughList.vue";
import IngredientList from "@/components/IngredientList.vue";
import MiscList from "@/components/MiscList.vue";
import SauceList from "@/components/SauceList.vue";
import SizeList from "@/components/SizeList.vue";
import dough from "@/common/doughSizes.js";
import ingredients from "@/common/ingredients.js";
import misc from "@/mocks/misc.json"; // Example: You may use a similar structure to dough or sizes
import sauces from "@/common/sauces.js";
import sizes from "@/common/sizes.js";

export default {
  name: 'App',
  components: {
    AppHeader,
    DoughList,
    IngredientList,
    MiscList,
    SauceList,
    SizeList
  },
  data() {
    return {
      dough: this.mapToArray(dough),
      ingredients: this.mapToArray(ingredients),
      misc,
      sauces: this.mapToArray(sauces),
      sizes: this.mapToArray(sizes),
    };
  },
  methods: {
    setMisc(selectedMisc) {
      console.log("Selected misc items:", selectedMisc);
      // Handle selected misc items
    },
    mapToArray(dataObject) {
      return Object.entries(dataObject).map(([id, name], index) => ({
        id: parseInt(id),
        name,
        image: name, // Assuming images are named after `name`
        price: (index + 1) * 50, // Example pricing logic
      }));
    },
  },
};
</script>
