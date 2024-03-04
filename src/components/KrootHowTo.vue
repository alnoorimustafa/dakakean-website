<template>
  <div class="container mb-5">
    <router-link to="/QR/kroot">
      <button type="button" class="btn btn-dark mb-5 mt-5">الرجوع</button>
    </router-link>
    <h1 class="fs-5 text-gold">الخطوة الاولى</h1>
    <p>اضغط على خيار استكشف لتصفح بطاقات المتاجر</p>
    <div class="imgContainer text-center">
      <img src="/new.png" alt="" />
    </div>
    <hr />
    <h1 class="fs-5 text-gold">الخطوة الثانية</h1>
    <p>اضغط على بطاقة المتجر لاظهار تفاصيل وشروط المتجر وجوائزه</p>
    <div class="imgContainer">
      <img src="/terms.png" alt="" />
    </div>
    <hr />
    <h1 class="fs-5 text-gold">الخطوة الثالثة</h1>
    <p>
      بعد ذهابك الى المتجر واتمام عملية الشراء اضغط على خيار الرمز لاظهار QR الخاص بك لصاحب المتجر
    </p>
    <div class="imgContainer">
      <img src="/qr.png" alt="" />
    </div>
    <hr />
    <h1 class="fs-5 text-gold">الخطوة الرابعة</h1>
    <p>يقوم صاحب المتجر بتصوير رمز QR الخاص بك وختم البطاقة الخاصة بك</p>
    <p>الان يمكنك متابعة عدد الاختام في صفحة محفظتي</p>
    <div class="imgContainer">
      <img src="/stamp.png" alt="" />
    </div>
    <hr />
    <h1 class="fs-5 text-gold">الخطوة الخامسة</h1>
    <p>عند اكمال جميع الاختام في بطاقتك ستحصل على الهدية</p>
    <h4 class="text-center text-green fs-3">🎉 مبروك عليك الهدية 🎉</h4>
    <p class="text-center">في زيارتك القادمة سوف تصدر لك بطاقة جديدة</p>
    <router-link to="/QR/kroot">
      <button type="button" class="btn btn-dark mb-5 mt-5">الرجوع</button>
    </router-link>
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
