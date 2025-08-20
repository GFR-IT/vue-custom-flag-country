<template>
  <component
    :is="flagComponent"
    v-if="flagComponent"
    :class="[rounded ? 'rounded-full overflow-hidden' : '', customClass]"
    :style="{
      width: width ? width + 'px' : size ? size + 'px' : undefined,
      height: height ? height + 'px' : size ? size + 'px' : undefined
    }"
    role="img"
    :aria-label="country.toUpperCase()"
  />
</template>

<script setup lang="ts">
import { ref, watchEffect, markRaw } from 'vue'
import flags from './flags'

const props = defineProps<{
  country: string
  size?: number           // square fallback (width = height)
  width?: number          // optional explicit width
  height?: number         // optional explicit height
  rounded?: boolean       // rounded option
  class?: string          // pass-through classes
}>()

const flagComponent = ref<any>(null)
const customClass = props.class

watchEffect(async () => {
  const key = props.country?.toLowerCase()
  if (key && flags[key]) {
    const mod = await flags[key]()
    flagComponent.value = markRaw(mod.default)
  } else {
    flagComponent.value = null
  }
})
</script>
