<template>
  <component :is="component" v-bind="componentProps" class="p-link">
    <slot />
  </component>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'

  const props = defineProps<{
    to?: unknown,
  }>()

  const component = computed(() => 'router-link')
  const componentProps = computed(() => {
    if (!props.to) {
      return {
        target: '_blank',
      }
    }

    return {
      to: props.to,
    }
  })
</script>

<style>
.p-link { @apply
  text-link
  cursor-pointer
  hover:underline
}

.p-link__external-icon { @apply
  inline
  relative
  -top-[0.4em]
  w-3
  h-3
}
</style>
