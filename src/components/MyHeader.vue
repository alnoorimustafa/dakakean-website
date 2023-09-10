<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/android-chrome-512x512.png" alt="Logo" width="35" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul class="navbar-nav">
            <router-link to="/" class="text-decoration-none">
              <li class="nav-item">
                <a class="nav-link">الصفحة الرئيسية</a>
              </li>
            </router-link>
            <router-link to="/about-us" class="text-decoration-none">
              <li class="nav-item">
                <a class="nav-link">من نحن</a>
              </li>
            </router-link>
            <router-link to="/projects" class="text-decoration-none">
              <li class="nav-item">
                <a class="nav-link">تطبيقاتنا</a>
              </li>
            </router-link>
            <router-link to="/kroot" class="text-decoration-none">
              <li class="nav-item">
                <a class="nav-link">تطبيق كروت</a>
              </li>
            </router-link>
            <router-link to="/khasm" class="text-decoration-none">
              <li class="nav-item">
                <a class="nav-link">تطبيق خصم</a>
              </li>
            </router-link>
            <!-- Add more nav links here -->
          </ul>
          <router-link to="/contact-us" class="text-decoration-none">
            <div class="navbar-nav">
              <a class="nav-link">تواصل</a>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
img {
  border-radius: 0 !important;
}
</style>
