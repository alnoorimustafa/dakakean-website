<template>
  <section class="section">
    <div class="container mb-5">
      <router-link to="">
        <button @click="$router.go(-1)" type="button" class="btn btn-dark mb-5 mt-5">الرجوع</button>
      </router-link>
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 text-center">
          <h3>لديك اقتراح او شكوى ؟</h3>
          <p class="mb-3">سنكون سعداء بتواصلك معنا</p>
          <div class="d-flex justify-content-center flex-wrap gap-3">
            <a
              href="https://wa.me/+9647833718681"
              class="btn gold"
              style="color: #fff; font-family: somar"
              >واتساب</a
            >
            <a
              href="mailto: info@dakakean.com"
              class="btn gold"
              style="color: #fff; font-family: somar"
              >ايميل</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  min-height: 600px;
}
</style>
