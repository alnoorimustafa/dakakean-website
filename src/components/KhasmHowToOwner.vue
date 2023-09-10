<template>
  <div class="container" dir="rtl">
    <router-link to="">
      <button @click="$router.go(-1)" type="button" class="btn btn-dark my-5">الرجوع</button>
    </router-link>
    <div style="min-height: 500px">
      <p class="text-center fs-4">قريبا ...</p>
    </div>
  </div>
</template>
