<script lang="ts" setup>
import MyCard from './MyCard.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      testClass: 'col-lg-4 col-md-5 col-sm-10 mb-5'
    }
  }
})
</script>

<template>
  <div class="p-5 text-center">
    <h1 class="fs-1 text-gold">ميزتنا</h1>

    <div class="mt-5">
      <div class="row justify-content-around">
        <MyCard :mute="true" :my-class="testClass" title="نص" subtitle="نص" />
        <MyCard :mute="true" :my-class="testClass" title="نص" subtitle="نص" />
      </div>
      <div class="row justify-content-around">
        <MyCard :mute="true" :my-class="testClass" title="نص" subtitle="نص" />
        <MyCard :mute="true" :my-class="testClass" title="نص" subtitle="نص" />
      </div>
    </div>
  </div>
</template>
