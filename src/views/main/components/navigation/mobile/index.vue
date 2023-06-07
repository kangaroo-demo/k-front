<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      id="nvmeun"
      ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>
      <!--汉堡按钮-->
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-l-white"
      >
        <k-svg-icon class="w-1.5 h-1.5" name="hamburger"></k-svg-icon>
      </li>
      <!--items-->
      <li
        v-for="(item, index) in data"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{ 'text-white': currentCategoryIndex === index }"
        :ref="setItemRef"
        @click="onItemsClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onBeforeUpdate, ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
defineProps({
  data: {
    type: Array,
    required: true
  }
})

const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '60px'
})

// 选中 items 下标
const currentCategoryIndex = ref(0)
// 点击 item 切换下标
const onItemsClick = (index) => {
  currentCategoryIndex.value = index
}

// 获取所有 item 元素
let itemsData = []
const setItemRef = (el) => {
  itemsData.push(el)
}
// 数据改变之后，dom变化之前，清空 itemsData,防止重复添加 items 数据
onBeforeUpdate(() => {
  itemsData = []
})

// 获取 ul 元素
const ulTarget = ref(null)
const { x: ulScrollLeft } = useScroll(ulTarget)

// 监听
watch(currentCategoryIndex, (val) => {
  const { left, right, width } = itemsData[val].getBoundingClientRect()
  if (left > 250) {
    console.log('left', right, ulTarget.value.scrollLeft)
    ulTarget.value.scrollLeft = ulTarget.value.scrollLeft + 200
  }
  if (right < 250) {
    ulTarget.value.scrollLeft = ulTarget.value.scrollLeft - 100
  }
  sliderStyle.value = {
    // 滑块的位置 = ul 横向滚动的距离 + 当前元素的 left - ul 的 padding
    transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
    width: width + 'px'
  }
})
</script>
