<template>
  <div class="container mb-5">
    <router-link to="">
      <button type="button" @click="$router.go(-1)" class="btn btn-dark mb-5 mt-5">الرجوع</button>
    </router-link>
    <h1 class="fs-5 text-gold">الخطوة الاولى</h1>
    <p>تصفح المتاجر الجديدة في صفحة استكشف</p>
    <div class="imgContainer text-center">
      <img src="/new.png" alt="" />
    </div>
    <hr />
    <h1 class="fs-5 text-gold">الخطوة الثانية</h1>
    <p>اضغط على كارت المتجر لاظهار كافة التفاصيل واقرا شروط المتجر وجوائزه</p>
    <div class="imgContainer">
      <img src="/terms.png" alt="" />
    </div>
    <hr />
    <h1 class="fs-5 text-gold">الخطوة الثالثة</h1>
    <p>الذهاب الى المتجر وبعد عملية الشراء اظهر الرمز الخاص بك في صفحة الرمز</p>
    <div class="imgContainer">
      <img src="/qr.png" alt="" />
    </div>
    <hr />
    <h1 class="fs-5 text-gold">الخطوة الرابعة</h1>
    <p>يقوم صاحب المتجر بتصوير الرمز والتحقق من اكتمال شروطه ويقوم بختم الكارت</p>
    <p>سوف تستلم اشعار بعملية الختم ويمكنك متابعة عدد الاختام من صفحة محفظتي</p>
    <div class="imgContainer">
      <img src="/stamp.png" alt="" />
    </div>
    <hr />
    <h1 class="fs-5 text-gold">الخطوة الخامسة</h1>
    <p>
      عند اكمال جميع الاختام الخاصة بكارت المتجر الحالي سيعرض عليك صاحب المتجر اختيار هديتك من بين
      الخيارات الموجودة مسبقا
    </p>
    <h4 class="text-center text-green fs-3">🎉 مبروك عليك الهدية 🎉</h4>
    <p class="text-center">في زيارتك القادمة لنفس المتجر سوف تصدر لك بطاقة جديدة</p>
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
