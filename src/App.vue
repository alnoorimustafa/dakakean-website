<script setup lang="ts">
import MyHeader from './components/MyHeader.vue'

import MyFooter from './components/MyFooter.vue'
</script>

<template>
  <div dir="rtl" lang="ar" class="no">
    <MyHeader />
    <router-view />
    <MyFooter />
  </div>
</template>

<style>
@font-face {
  font-family: med;
  src: url(./assets/fonts/Tajawal-Medium.ttf);
}
@font-face {
  font-family: bld;
  src: url(./assets/fonts/Alexandria-bold.ttf);
}
@font-face {
  font-family: somar;
  src: url(./assets/fonts/somar.woff);
}

.no {
  width: 100%;
  overflow-x: hidden;
}

p,
a,
span {
  font-family: med;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: bld;
  line-height: 1.8;
}

.btn {
  font-family: somar;
}

h1 {
  font-size: 48px;
  margin-top: 1rem;
}

p {
  font-size: 18px;
  margin-top: 1rem;
}

.gold {
  background-color: #ffc200;
}
.text-gold {
  color: #ffc200;
}

.green {
  background-color: #64b565;
}
.text-green {
  color: #64b565;
}

.purple {
  background-color: #733980;
}
.text-purple {
  color: #733980;
}

.btn {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
