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
import type { IOptions } from '../options'

interface IProps extends IOptions {
  value: number
}

defineOptions({
  name: 'ScrollNumber'
})
const props = withDefaults(defineProps<IProps>(), {
  transformDuration: () => getOption('transformDuration') as number,
  fractionDigits: () => getOption('fractionDigits') as number,
  prefix: () => getOption('prefix') as string,
  infix: () => getOption('infix') as string,
  suffix: () => getOption('suffix') as string,
  thousandSeparator: () => getOption('thousandSeparator') as string
})
// ??
function isNumber(x: any): x is number {
  return !Number.isNaN(+x)
}
/** */
function formatNumbers(
  value: number,
  fractionDigits: number,
  prefix: string,
  infix: string,
  suffix: string,
  thousandSeparator: string
) {
  // 分隔
  const isNegative = value < 0
  const digits: Array<number | string> = value.toFixed(fractionDigits).split('')
  // 千分位符
  if (thousandSeparator) {
    let counter = 0
    const target = isNegative ? 1 : 0
    for (let i = digits.length - fractionDigits - 2; i > target; i--) {
      counter++
      if (counter > 0 && counter % 3 == 0) {
        digits.splice(i, 0, thousandSeparator)
      }
    }
  }
  // 后缀
  suffix && digits.push(suffix)
  // 前缀2
  infix && (value < 0 ? digits.splice(1, 0, infix) : digits.unshift(infix))
  // 前缀1
  prefix && digits.unshift(prefix)
  return digits.map((it) => (isNumber(it) ? Number(it) : it))
}

const numbers = computed(() =>
  formatNumbers(
    props.value,
    props.fractionDigits,
    props.prefix,
    props.infix,
    props.suffix,
    props.thousandSeparator
  )
)
</script>

<style scoped>
.scroll-number-wrapper {
  display: inline;
  overflow: hidden;
}
</style>
