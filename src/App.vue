<script setup lang="ts">
import { ref } from 'vue'
const value = ref(123.45)
const add = () => {
  value.value += 20
}
const sub = () => {
  value.value -= 20
}
</script>

<template>
  <div @click="add">AAAA</div>
  <ScrollNumber :value="value" />1111111111111

  <div style="margin-top: 50px">
    <button @click="add">add</button>
    <button @click="sub">sub</button>
  </div>
  <div>123.45</div>
  <div>
    <div style="display: inline-block">
      <div>1</div>
    </div>
    <div style="display: inline-block"><div>2</div></div>
    <div style="display: inline-block"><div>3</div></div>
    <span>.</span>
    <div style="display: inline-block"><div>4</div></div>
    <div style="display: inline-block"><div>5</div></div>
  </div>
</template>
