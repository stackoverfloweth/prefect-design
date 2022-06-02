<template>
  <Section heading="Form Data Display">
    <p-data-display label="Flow Run ID" value="3fa85f64" />

    <p-data-display>
      <template #label>
        <div class="text-pink-400 uppercase">
          Created
        </div>
      </template>
      <template #value>
        {{ new Date().toISOString().slice(0, 10) }}
      </template>
    </p-data-display>

    <p-data-display label="This should say 'None' below" />

    <p-data-display label="This uses an empty slot">
      <template #empty>
        None - <span class="data-display-section__turtles">Ninja turtles</span>
      </template>
    </p-data-display>
  </Section>
</template>

<script setup lang="ts">
  import Section from '../components/Section.vue'
</script>

<style>
.data-display-section__turtles {
  background-image: linear-gradient(to left, #E3331C, #EA9500, #4C9C23, #00AAE6, #995AA0);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>