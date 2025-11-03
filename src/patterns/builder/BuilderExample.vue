<template>
  <div class="pizza-container">
    <h2>Builder 패턴 예제 - 피자만들기</h2>
    <button @click="makePizza">피자 만들기</button>
    <p v-if="result" style="margin-top: 20px;">{{ result }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PizzaBuilder } from './Builder'

const result = ref('')

const makePizza = () => {
  const pizza = new PizzaBuilder()
      .setSize('큰')
      .setTopping('페퍼로니')
      .build()

  result.value = pizza.desc()
  console.log(pizza.desc())
}
</script>

<style scoped>
.pizza-container {
  background-color: whitesmoke;
  text-align: center;
  margin-top: 60px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

button {
  background-color: #ff7b29;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
}
button:hover {
  background-color: #ff5e00;
}
</style>
