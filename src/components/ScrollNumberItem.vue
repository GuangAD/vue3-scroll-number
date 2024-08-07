<template>
  <div class="scroll-item-wrapper">
    <div style="opacity: 0; display: inline-block">{{ topValue }}</div>
    <div class="scroll-numbers" :style="styleTop">{{ topValue }}</div>
    <div class="scroll-numbers" :style="styleBottom">{{ bottomValue }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'

const props = defineProps<{
  value: number
  transformDuration: number
}>()
watch(
  () => props.value,
  (val) => {
    if (isTransitioning) {
      start.value = current.value
      end.value = val
    } else {
      start.value = end.value
      end.value = val
      startScroll()
    }
  }
)

const start = ref(props.value)
const end = ref(props.value)
const current = ref(props.value)
const topValue = computed(() => Math.floor(current.value))
const bottomValue = computed(() => Math.floor(current.value) + 1)
const styleTop = computed(() => ({
  transform: `translateY(${(current.value - topValue.value) * 100 * -1}%)`,
  opacity: 1 - Math.abs(current.value - topValue.value)
}))
const styleBottom = computed(() => ({
  transform: `translateY(${(bottomValue.value - current.value) * 100}%)`,
  opacity: Math.abs(current.value - topValue.value)
}))
let rAF: number | null = null
function startScroll() {
  rAF = requestAnimationFrame(calcCurrrntValue)
}

defineEmits(['cancelAnimationFrame'])

function cancelAnimationFrame() {
  if (rAF) {
    window.cancelAnimationFrame(rAF)
    current.value = end.value
    rAF = null
  }
}

function requestAnimationFrame(cb: FrameRequestCallback) {
  return window.requestAnimationFrame(cb)
}

let startTime: number | null = null
let isTransitioning = false
function calcCurrrntValue(time: number) {
  isTransitioning = true
  if (!startTime) {
    startTime = time
  }
  const progress = (time - startTime) / props.transformDuration
  if (progress > 1) {
    current.value = end.value
    startTime = null
    isTransitioning = false
    return
  }
  current.value = (start.value + (end.value - start.value) * progress) % 10
  rAF = requestAnimationFrame(calcCurrrntValue)
}
</script>

<style scoped>
.scroll-item-wrapper {
  display: inline-block;
  position: relative;
  height: auto;
  /* overflow: inherit; */
}
.scroll-item-wrapper .scroll-numbers {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
</style>
