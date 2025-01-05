import { defineStore } from "pinia";
import { ref } from "vue";
import { useDataStore } from "./dataStore";
import { computed } from "vue";

export const usePizzaStore = defineStore("pizza", () => {
  const { getEntity } = useDataStore();

  const pizzaIngredients = ref({});
  const pizzaDough = ref(1);
  const pizzaSize = ref(1);
  const pizzaSauce = ref(1);

  const getPizzaPrice = computed(() => {
    let ingredientsSum = 0;

    for (let [id, count] of Object.entries(pizzaIngredients.value)) {
      ingredientsSum += getEntity(id, 'ingredient').price * count;
    }
    return (
      (getEntity(pizzaDough.value, "dough").price +
        getEntity(pizzaSauce.value, "sauce").price +
        ingredientsSum) *
      getEntity(pizzaSize.value, "sauce").multiplier
    );
  });

  return { pizzaIngredients, pizzaDough, pizzaSize, pizzaSauce, getPizzaPrice };
});
