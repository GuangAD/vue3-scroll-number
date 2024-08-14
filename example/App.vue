<script setup lang="ts">
import { ref } from 'vue'
const value = ref(-123.45)
const add = () => {
  value.value += 20
}
const sub = () => {
  value.value -= 20
}

const percentage = ref(24.8)
const addPercentage = () => {
  percentage.value += 2.4
}
const subPercentage = () => {
  percentage.value -= 2.4
}
</script>

<template>
  <div>
    <ScrollNumber :value="value" />
    <span style="margin-left: 50px">
      <button @click="add">add</button>
      <button @click="sub">sub</button>
    </span>
  </div>
  <div>
    <ScrollNumber :value="percentage" :fractionDigits="1" prefix="" infix="" suffix="%" />
    <span style="margin-left: 50px">
      <button @click="addPercentage">add</button>
      <button @click="subPercentage">sub</button>
    </span>
  </div>
</template>
