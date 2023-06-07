<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color" :class="fillClass"></use>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 显示的 svg
  name: {
    type: String,
    required: true
  },
  // svg 图标的颜色
  color: {
    type: String
  },
  // tailwind 指定 svg 颜色的类名
  fillClass: {
    type: String
  }
})

const symbolId = computed(() => `#icon-${props.name}`)
</script>
