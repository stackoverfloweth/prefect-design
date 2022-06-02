<template>
  <div class="p-data-display">
    <div class="p-data-display__label">
      <slot name="label">
        {{ label }}
      </slot>
    </div>
    <div v-if="isDefined(value) || slots.value" class="p-data-display__value">
      <slot name="value">
        {{ value }}
      </slot>
    </div>
    <div v-else class="p-data-display__empty">
      <slot name="empty">
        None
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useSlots } from 'vue'

  const slots = useSlots()

  defineProps<{
    label?: string,
    value?: unknown,
  }>()

  const isDefined = (val: unknown): boolean => {
    return typeof val !== 'undefined' && val !== null && val !== ''
  }
</script>

<style>
.p-data-display {
  @apply
  text-xs
  leading-4
  font-normal
}

.p-data-display__label {
  @apply
  font-semibold
  text-slate-400
}

.p-data-display__empty {
  @apply
  text-slate-400
}
</style>