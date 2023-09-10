<template>
  <div class="container mb-5">
    <router-link to="">
      <button type="button" @click="$router.go(-1)" class="btn btn-dark mb-5 mt-5">الرجوع</button>
    </router-link>
    <h1 class="fs-5 text-gold">الرئيسية</h1>
    <div class="imgContainer text-center">
      <img src="/khasm-home.png" alt="" />
    </div>
    <p><span>1 : </span> صفحة الاشعارات</p>
    <hr class="my-5" />
    <h1 class="fs-5 text-gold">استكشف</h1>
    <div class="imgContainer">
      <img src="/khasm-explore.png" alt="" />
    </div>
    <p><span>1 : </span>اختيار المدينة</p>
    <p><span>2 : </span>فلتر الاعلانات</p>
    <p><span>3 : </span>اختيار الفئة</p>
    <p><span>4 : </span>اختيار التخفيضات فقط</p>
    <p><span>5 : </span>اختيار العروض فقط</p>
    <p><span>6 : </span>حفظ الاعلان</p>
    <p><span>7 : </span>فتح صفحة المتجر</p>
    <p><span>8 : </span>اختيار الفئة المشابهة</p>
    <p><span>9 : </span>مشاركة الاعلان</p>
    <hr class="my-5" />
    <h1 class="fs-5 text-gold">البحث</h1>
    <div class="imgContainer">
      <img src="/khasm-search.png" alt="" />
    </div>
    <p><span>1 : </span>اختيار المدينة</p>
    <p><span>2 : </span>نتائج الاعلانات</p>
    <p><span>3 : </span>نتائج المتاجر</p>
    <hr class="my-5" />
    <h1 class="fs-5 text-gold">صفحة المتجر</h1>
    <div class="imgContainer">
      <img src="/khasm-store.png" alt="" />
    </div>
    <p><span>1 : </span>مشاركة صفحة المتجر</p>
    <p><span>2 : </span>متابعة المتجر لاستلام اشعارات المتجر</p>
  </div>
</template>

<style>
li {
  font-size: 18px;
  margin: 10px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 10px;
}

.imgContainer {
  max-width: 250px;
  margin: auto;
}
</style>
