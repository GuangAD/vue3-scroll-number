<script setup lang="ts">
import { ref } from 'vue'
const value = ref(7)
const add = () => {
  value.value += 1
}
const sub = () => {
  value.value -= 1
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
      <button @click="add">add count is {{ value }}</button>
      <button @click="sub">sub count is {{ value }}</button>
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
