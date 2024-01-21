<template>
  Test {{ props.primary }}
</template>

<script setup lang="ts">
/**
 * withDefaults为props提供默认值，且做类型检查
 */
const props = withDefaults(defineProps<{
  primary?: boolean,
  test?: boolean
}>(), {})
</script>