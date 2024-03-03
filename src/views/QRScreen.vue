<template>
  <div class="container mb-5">
    <div class="imageContainer">
      <img src="/kroot.png" alt="kroot app icon" />
    </div>
    <h1 class="fs-1 text-green mb-5 text-center">تطبيق كروت</h1>
    <div class="row">
      <div class="col-6 mb-3">
        <RouterLink to="/kroot/how-to" class="text-decoration-none">
          <div
            class="gold rounded-4 selection d-flex align-items-center justify-content-center text-center text-center"
          >
            <p class="text-white">كيف يعمل التطبيق للزبون</p>
          </div>
        </RouterLink>
      </div>
      <div class="col-6 mb-3">
        <RouterLink to="/support" class="text-decoration-none">
          <div
            class="gold rounded-4 selection d-flex align-items-center justify-content-center text-center text-center"
          >
            <p class="text-white">خدمة الزبائن</p>
          </div>
        </RouterLink>
      </div>
    </div>
    <hr class="my-5" />
    <div class="mb-5">
      <h1 class="fs-1 mb-4 text-center fs-1 text-green">روابط التحميل</h1>

      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 text-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.dakakean.kroot&pcampaignid=web_share"
          >
            <img src="/googleplay.png" alt="" />
          </a>
          <p>متجر اندرويد</p>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 text-center">
          <a
            href="https://apps.apple.com/us/app/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D9%83%D8%B1%D9%88%D8%AA/id6462827834"
          >
            <img src="/appstore.png" alt="" />
          </a>
          <p>متجر ابل</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.selection {
  height: 100px;
}

p {
  font-family: bld;
  font-size: 14px;
}

.imageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: auto;
}

.imageContainer img {
  width: 80px;
  height: 80px;
  border-radius: 20% !important;
}

img {
  margin: auto;
  width: 100%;
  height: auto;
}
.container {
  min-height: 600px;
}
</style>
