<template>
  <div class="container" dir="rtl">
    <router-link to="">
      <button @click="$router.go(-1)" type="button" class="btn btn-dark my-5">الرجوع</button>
    </router-link>
    <div style="min-height: 500px; text-align: center">
      <p class="text-center fs-4 mb-4">فديو توضيحي لكيفية عمل التطبيق لاصحاب الاعمال التجارية</p>
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100093675182308%2Fvideos%2F891252059007426%2F&show_text=true&width=476&t=0"
        width="476"
        height="591"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  </div>
</template>
