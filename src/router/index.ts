import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import MyProjects from '@/components/MyProjects.vue'
import KhasmPrivacy from '@/components/KhasmPrivacy.vue'
import KrootPrivacy from '@/components/KrootPrivacy.vue'
import HelpAreaVue from '@/components/HelpAreaVue.vue'
import KrootHowTo from '@/components/KrootHowTo.vue'
import KhasmHowTo from '@/components/KhasmHowTo.vue'
import ContactUs from '@/components/ContactUs.vue'
import KrootHowToOwner from '@/components/KrootHowToOwner.vue'
import KhasmHowToOwner from '@/components/KhasmHowToOwner.vue'
import KrootView from '@/views/KrootView.vue'
import KhasmView from '@/views/KhasmView.vue'
import QRScreen from '@/views/QRScreen.vue'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about-us',
      component: AboutUsView
    },
    {
      path: '/projects',
      component: MyProjects
    },
    {
      path: '/contact-us',
      component: ContactUs
    },
    {
      path: '/kroot',
      component: KrootView
    },
    {
      path: '/khasm',
      component: KhasmView
    },
    {
      path: '/khasm/privacy',
      component: KhasmPrivacy
    },
    {
      path: '/kroot/privacy',
      component: KrootPrivacy
    },
    {
      path: '/support',
      component: HelpAreaVue
    },
    {
      path: '/kroot/how-to',
      component: KrootHowTo
    },
    {
      path: '/kroot/how-to-owner',
      component: KrootHowToOwner
    },
    {
      path: '/khasm/how-to',
      component: KhasmHowTo
    },
    {
      path: '/khasm/how-to-owner',
      component: KhasmHowToOwner
    },
    {
      path: '/QR/Kroot',
      component: QRScreen
    }
  ]
})

export default router
