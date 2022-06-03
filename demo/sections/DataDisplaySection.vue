<template>
  <Section heading="Data Display">
    <SubSection heading="Default">
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
    </SubSection>

    <SubSection heading="Form Display">
      <p-button>Edit</p-button>

      <div class="temp">
        <p-form-display>
          <p-data-display label="Email" :value="formValue1" />
        </p-form-display>

        <p-form>
          <p-label label="Email">
            <p-text-input v-model="formValue1" />
          </p-label>
        </p-form>
      </div>
    </SubSection>
  </Section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Section from '../components/Section.vue'
  import SubSection from '../components/SubSection.vue'

  const formValue1 = ref('marvin@prefect.io')
</script>

<style>
.data-display-section__turtles {
  background-image: linear-gradient(to left, #E3331C, #EA9500, #4C9C23, #00AAE6, #995AA0);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.temp {
  @apply
  flex
}
</style>