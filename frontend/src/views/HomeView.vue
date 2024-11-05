<template>
<<<<<<< HEAD
<<<<<<< HEAD
    <div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
=======
=======
>>>>>>> 81bcd38 (Created AppHeader.vue, HomeView.vue, and AppLayout.vue components)
    <main class="content">
    <form action="#" method="post">

      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
<<<<<<< HEAD
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>
            <div class="sheet__content dough">
              <label class="dough__input dough__input--light">
                <input type="radio" name="dough" value="light" class="visually-hidden" v-model="selectedDough" />
                <b>Тонкое</b>
                <span>Из твердых сортов пшеницы</span>
              </label>
              <label class="dough__input dough__input--large">
                <input type="radio" name="dough" value="large" class="visually-hidden" v-model="selectedDough" />
=======

          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <label class="dough__input dough__input--light">
                <input type="radio" name="dought" value="light" class="visually-hidden" checked>
                <b>Тонкое</b>
                <span>Из твердых сортов пшеницы</span>
              </label>

            <label class="dough__input dough__input--large">
                <input type="radio" name="dought" value="large" class="visually-hidden">
>>>>>>> 81bcd38 (Created AppHeader.vue, HomeView.vue, and AppLayout.vue components)
                <b>Толстое</b>
                <span>Из твердых сортов пшеницы</span>
              </label>
            </div>
<<<<<<< HEAD
          </div>
=======

          </div>

>>>>>>> 81bcd38 (Created AppHeader.vue, HomeView.vue, and AppLayout.vue components)
        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>
<<<<<<< HEAD
            <div class="sheet__content diameter">
              <label class="diameter__input diameter__input--small">
                <input type="radio" name="diameter" value="small" class="visually-hidden" v-model="selectedDiameter" />
                <span>23 см</span>
              </label>
              <label class="diameter__input diameter__input--normal">
                <input type="radio" name="diameter" value="normal" class="visually-hidden" v-model="selectedDiameter" />
                <span>32 см</span>
              </label>
              <label class="diameter__input diameter__input--big">
                <input type="radio" name="diameter" value="big" class="visually-hidden" v-model="selectedDiameter" />
=======

            <div class="sheet__content diameter">
              <label class="diameter__input diameter__input--small">
                <input type="radio" name="diameter" value="small" class="visually-hidden">
                <span>23 см</span>
              </label>
              <label class="diameter__input diameter__input--normal">
                <input type="radio" name="diameter" value="normal" class="visually-hidden" checked>
                <span>32 см</span>
              </label>
              <label class="diameter__input diameter__input--big">
                <input type="radio" name="diameter" value="big" class="visually-hidden">
>>>>>>> 81bcd38 (Created AppHeader.vue, HomeView.vue, and AppLayout.vue components)
                <span>45 см</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>
<<<<<<< HEAD
=======

>>>>>>> 81bcd38 (Created AppHeader.vue, HomeView.vue, and AppLayout.vue components)
            <div class="sheet__content ingredients">

              <div class="ingredients__sauce">
                <p>Основной соус:</p>

                <label class="radio ingredients__input">
<<<<<<< HEAD
                  <input type="radio" name="sauce" value="tomato" v-model="selectedSauce" />
                  <span>Томатный</span>
                </label>
                <label class="radio ingredients__input">
                  <input type="radio" name="sauce" value="creamy" v-model="selectedSauce" />
=======
                  <input type="radio" name="sauce" value="tomato" checked>
                  <span>Томатный</span>
                </label>
                <label class="radio ingredients__input">
                  <input type="radio" name="sauce" value="creamy">
>>>>>>> 81bcd38 (Created AppHeader.vue, HomeView.vue, and AppLayout.vue components)
                  <span>Сливочный</span>
                </label>
              </div>

              <div class="ingredients__filling">
                <p>Начинка:</p>

                <ul class="ingredients__list">
<<<<<<< HEAD
                  <li class="ingredients__item" v-for="(ingredient, index) in ingredients" :key="index">
                    <span :class="`filling filling--${ingredient.name}`">{{ ingredient.name }}</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" @click="decreaseCount(index)" :disabled="ingredient.count === 0">
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" v-model.number="ingredient.count" />
                      <button type="button" class="counter__button counter__button--plus" @click="increaseCount(index)">
=======
                  <li class="ingredients__item">
                    <span class="filling filling--mushrooms">Грибы</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
>>>>>>> 81bcd38 (Created AppHeader.vue, HomeView.vue, and AppLayout.vue components)
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--cheddar">Чеддер</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--salami">Салями</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--ham">Ветчина</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--ananas">Ананас</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--bacon">Бекон</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--onion">Лук</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--chile">Чили</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--jalapeno">Халапеньо</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--olives">Маслины</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--tomatoes">Томаты</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--salmon">Лосось</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--mozzarella">Моцарелла</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--parmesan">Пармезан</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                  <li class="ingredients__item">
                    <span class="filling filling--blue_cheese">Блю чиз</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button" class="counter__button counter__button--minus" disabled>
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter" class="counter__input" value="0">
                      <button type="button" class="counter__button counter__button--plus">
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>

              </div>

            </div>
          </div>
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
<<<<<<< HEAD
            <input type="text" name="pizza_name" v-model="pizzaName" placeholder="Введите название пиццы" />
=======
            <input type="text" name="pizza_name" placeholder="Введите название пиццы">
>>>>>>> 81bcd38 (Created AppHeader.vue, HomeView.vue, and AppLayout.vue components)
          </label>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
<<<<<<< HEAD
                <div class="pizza__filling" v-for="(ingredient, index) in ingredients" :key="index" v-if="ingredient.count > 0" :class="`pizza__filling--${ingredient.name}`"></div>
=======
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
>>>>>>> 81bcd38 (Created AppHeader.vue, HomeView.vue, and AppLayout.vue components)
              </div>
            </div>
          </div>

          <div class="content__result">
<<<<<<< HEAD
            <p>Итого: {{ totalPrice }} ₽</p>
            <button type="button" class="button" :disabled="!canOrder">Готовьте!</button>
=======
            <p>Итого: 0 ₽</p>
            <button type="button" class="button" disabled>Готовьте!</button>
>>>>>>> 81bcd38 (Created AppHeader.vue, HomeView.vue, and AppLayout.vue components)
          </div>
        </div>

      </div>

    </form>
  </main>
<<<<<<< HEAD
</template>

<script>
export default {
  data() {
    return {
      pizzaName: "",
      selectedDough: "light",
      selectedDiameter: "normal",
      selectedSauce: "tomato",
      ingredients: [
        { name: "mushrooms", count: 0, price: 30 },
        { name: "cheddar", count: 0, price: 40 },
        { name: "salami", count: 0, price: 50 },
        { name: "ham", count: 0, price: 40 },
        { name: "ananas", count: 0, price: 30 },
        { name: "bacon", count: 0, price: 50 },
        { name: "onion", count: 0, price: 20 },
        { name: "chile", count: 0, price: 30 },
        { name: "jalapeno", count: 0, price: 30 },
        { name: "olives", count: 0, price: 20 },
        { name: "tomatoes", count: 0, price: 25 },
        { name: "salmon", count: 0, price: 60 },
        { name: "mozzarella", count: 0, price: 35 },
        { name: "parmesan", count: 0, price: 40 },
        { name: "blue_cheese", count: 0, price: 50 },
      ],
    };
  },
  computed: {
    totalPrice() {
      let basePrice = 0;
      if (this.selectedDiameter === "small") {
        basePrice = 200;
      } else if (this.selectedDiameter === "normal") {
        basePrice = 300;
      } else {
        basePrice = 400;
      }

      let ingredientPrice = this.ingredients.reduce((total, ingredient) => {
        return total + ingredient.count * ingredient.price;
      }, 0);

      return basePrice + ingredientPrice;
    },
    canOrder() {
      return this.pizzaName && this.totalPrice > 0;
    },
  },
  methods: {
    increaseCount(index) {
      this.ingredients[index].count++;
    },
    decreaseCount(index) {
      if (this.ingredients[index].count > 0) {
        this.ingredients[index].count--;
      }
    },
  },
};
</script>
>>>>>>> 928f0bb (initial commit)
=======
</template>
