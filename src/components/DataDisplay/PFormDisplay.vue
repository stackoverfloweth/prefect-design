<template>
  <article class="p-form-display">
    <div class="p-form-display__header">
      <slot name="heading">
        <span>
          {{ heading }}
        </span>
      </slot>
    </div>
    <slot />
  </article>
</template>

<script lang="ts" setup>
  defineProps<{
    heading?: string,
  }>()
</script>

<style>
.p-form-display { @apply
  w-full
  flex
  flex-col
  gap-y-6
}

.p-form-display__header { @apply
  text-xl
}
</style>