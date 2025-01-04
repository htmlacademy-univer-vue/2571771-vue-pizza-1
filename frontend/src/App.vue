<template>
<<<<<<< HEAD
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


=======
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
>>>>>>> 928f0bb (initial commit)
</template>

<style lang="scss">
@import "@/assets/scss/app.scss";
<<<<<<< HEAD
=======

>>>>>>> 928f0bb (initial commit)
body {
  justify-content: center;
  align-items: center;
}
<<<<<<< HEAD
.main__wrapper {
  padding-bottom: 30px;

=======

.main__wrapper {
  padding-bottom: 30px;
>>>>>>> 928f0bb (initial commit)
  background-color: $white;
  box-shadow: $shadow-light;

  h1 {
    margin-bottom: 0;
    padding: 0 95px;
<<<<<<< HEAD

    text-align: center;

=======
    text-align: center;
>>>>>>> 928f0bb (initial commit)
    @include b-s36-h42;
  }

  p {
    padding: 0 95px;
<<<<<<< HEAD

    text-align: center;

=======
    text-align: center;
>>>>>>> 928f0bb (initial commit)
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
<<<<<<< HEAD

=======
>>>>>>> 928f0bb (initial commit)
  background-color: $green-600;

  img {
    display: block;
<<<<<<< HEAD

=======
>>>>>>> 928f0bb (initial commit)
    margin: 0 auto;
  }
}

<<<<<<< HEAD
</style>

<script>
=======
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
>>>>>>> 928f0bb (initial commit)
import DoughList from "@/components/DoughList.vue";
import IngredientList from "@/components/IngredientList.vue";
import MiscList from "@/components/MiscList.vue";
import SauceList from "@/components/SauceList.vue";
import SizeList from "@/components/SizeList.vue";
<<<<<<< HEAD

import dough from "@/mocks/dough.json";
import ingredients from "@/mocks/ingredients.json";
import misc from "@/mocks/misc.json";
import sauces from "@/mocks/sauces.json";
import sizes from "@/mocks/sizes.json";

export default {
  components: {
=======
import dough from "@/common/doughSizes.js";
import ingredients from "@/common/ingredients.js";
import misc from "@/mocks/misc.json"; // Example: You may use a similar structure to dough or sizes
import sauces from "@/common/sauces.js";
import sizes from "@/common/sizes.js";

export default {
  name: 'App',
  components: {
    AppHeader,
>>>>>>> 928f0bb (initial commit)
    DoughList,
    IngredientList,
    MiscList,
    SauceList,
<<<<<<< HEAD
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
=======
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
>>>>>>> 928f0bb (initial commit)
};
</script>
