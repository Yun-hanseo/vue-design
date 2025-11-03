<template>
  <div class="facade-container">
    <h2>Facade 패턴 예제 — 스마트홈 시스템</h2>
    <button @click="activateHome">저녁 모드 실행</button>
    <p v-if="result" class="result">{{ result }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SmartHomeFacade } from "./Facade";

const result = ref("");

const activateHome = () => {
  const home = new SmartHomeFacade();
  result.value = home.startEveningMode();
  console.log(result.value);
};
</script>

<style scoped>
.facade-container {
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
  background-color: blue;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: gray;
}
.result {
  margin-top: 20px;
  background: white;
  padding: 10px;
  border-radius: 10px;
}

</style>

