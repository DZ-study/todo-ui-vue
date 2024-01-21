<template>
  <div class="slide-wrapper">
    <div v-for="i in seperator"
      :key="i"
      class="slide-container"
      :style="style"
      @mouseenter="onMouseenter"
      @mousemove="onMousemove"
      @mouseup="onMouseup"
    >
      <div class="slide-content"><slot :name="`slide${i}`" /></div>
      <div v-show="i < seperator" class="slide-line"
        :style="slideLineStyle"
        @mousedown="event => onMousedown(event, i)"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import './Slide.less'
import { computed, reactive, onMounted } from 'vue'
const props = withDefaults(defineProps<{
  seperator?: number,
  minWidths?: number[]
}>(), {seperator: 3, minWidths: () => [100, 200, 300]})

let slideDoms: NodeListOf<Element> | [] = []

onMounted(() => {
  slideDoms = document.querySelectorAll('.slide-container') || []
})


// 鼠标移入分割线时的样式
const slideLineStyle = reactive({
  cursor: 'default'
})

// 移动的滑块的数据
const slideMove = reactive<{
  isDown: boolean, // 是否开始拖拽
  downX: number, // 鼠标按下时x坐标
  index: number // 第几个滑块
}>({
  isDown: false,
  downX: 0,
  index: 0
})

// 每一个插槽的样式
const style = computed(() => ({
  width: `${100 / props.seperator}%`,
  minHeight: '500px'
}))

const onMouseenter = () => {
  slideLineStyle.cursor = "col-resize"
}

const onMousedown = (event: MouseEvent, i: number) => {
  slideMove.isDown = true
  slideMove.downX = event.pageX
  slideMove.index = i
}

const onMousemove = (event: MouseEvent) => {
  
  if (!slideMove.isDown) return
  const moveX = event.pageX - slideMove.downX
  const index = slideMove.index
  const leftDom = slideDoms[index]
  const rightDom = slideDoms[index - 1]
  slideMove.downX = event.pageX
  
  if (moveX < 0 && (leftDom.clientWidth < props.minWidths[index - 1] || rightDom.clientWidth < props.minWidths[index])) return
  // @ts-ignore
  leftDom.style.width = leftDom.clientWidth - moveX + 'px'
  // @ts-ignore
  rightDom.style.width = rightDom.clientWidth + moveX + 'px'
}

const onMouseup = () => {
  slideMove.isDown = false
}

const seperator: number = props.seperator
</script>