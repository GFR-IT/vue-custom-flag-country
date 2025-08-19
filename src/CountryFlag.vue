<template>
  <component :is="flagComponent" v-if="flagComponent" v-bind="$attrs" class="object-cover" />
</template>

<script setup lang="ts">
import { ref, watchEffect, markRaw } from 'vue'
import flags from './flags' // auto-generated map of lazy imports

const props = defineProps<{ country: string }>()

const flagComponent = ref<any>(null)

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
