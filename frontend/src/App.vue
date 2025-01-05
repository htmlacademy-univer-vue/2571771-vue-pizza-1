<template>
  <AppHeader />
  <router-view /> <!-- This will display the matched route's component -->
  <!-- <div class="main__wrapper">
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
  </div> -->
</template>

<style lang="scss">
</style>

<script>
import AppHeader from '@/layouts/AppHeader.vue';
import DoughList from "@/common/components/DoughList.vue";
import IngredientList from "@/common/components/IngredientList.vue";
import MiscList from "@/common/components/MiscList.vue";
import SauceList from "@/common/components/SauceList.vue";
import SizeList from "@/common/components/SizeList.vue";
import dough from "@/common/data/doughSizes.js";
import ingredients from "@/common/data/ingredients.js";
import misc from "@/mocks/misc.json"; // Example: You may use a similar structure to dough or sizes
import sauces from "@/common/data/sauces.js";
import sizes from "@/common/data/sizes.js";

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