<template>
  <div class="scroll-number-wrapper">
    <template v-for="(item, index) in numbers" :key="index">
      <ScrollNumberItem
        v-if="isNumber(item)"
        :value="item"
        :transform-duration="transformDuration"
      />
      <span v-else>{{ item }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ScrollNumberItem from './ScrollNumberItem.vue'
import { getOption } from '../options'

defineOptions({
  name: 'ScrollNumber'
})
const props = withDefaults(
  defineProps<{
    value: number
    transformDuration?: number
  }>(),
  {
    transformDuration: getOption('transformDuration')
  }
)
// ??
function isNumber(x: any): x is number {
  return !Number.isNaN(+x)
}
function getNumbers(value: Number) {
  return String(value)
    .split('')
    .map((it) => (isNumber(it) ? Number(it) : it))
}
const numbers = computed(() => getNumbers(props.value))
</script>

<style scoped>
.scroll-number-wrapper {
  overflow: hidden;
}
</style>
