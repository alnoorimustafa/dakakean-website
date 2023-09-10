<script lang="ts" setup>
import ContentBlock from './ContentBlock.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // Component options
})
</script>

<template>
  <div class="p-5 text-center">
    <h1 class="fs-1 text-gold">تطبيقاتنا</h1>

    <div class="mt-5">
      <div class="row justify-content-around">
        <ContentBlock
          :showBtn="true"
          title="تطبيق كروت"
          subtitle="تطبيق الولاء وبطاقات المكافات"
          image="iPhone kroot.png"
          link="kroot"
          color="green"
        />
        <hr />
        <ContentBlock
          :showBtn="true"
          title="تطبيق خصم"
          subtitle="تطبيق العروض والخصوم"
          image="iPhone khasm.png"
          link="khasm"
          color="purple"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  height: 300px;
}
.imageContainer {
  height: 200px;
}

img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>
