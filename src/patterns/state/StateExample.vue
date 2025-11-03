<template>
  <div class="state-container">
    <h2>State 패턴 예제 — 전등 스위치</h2>
    <button @click="toggleLight">스위치 누르기</button>
    <p v-if="result" style="margin-top: 20px;">{{ result }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Light, OffState } from "./State";

const result = ref("");
const light = new Light(new OffState());

const toggleLight = () => {
  result.value = light.pressButton();
  console.log(result.value);
};
</script>

<style scoped>
.state-container{
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
  background-color: #ffb300;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
}
button:hover {
  background-color: #ffa000;

}

</style>
