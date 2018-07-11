import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import AboutUsPage from '@/components/aboutUsPage'
import ProductServerPage from '@/components/productServerPage'

Vue.use(Router)

export default new Router({
  routes: [
		  {
				path: '/',
				redirect:'/home' 
		  },
			{
			  path: '/home',
			  name: 'Home',
			  component: Home
			},
			{
			  path: '/aboutUsPage',
			  name: 'AboutUsPage',
			  component: AboutUsPage
			},
			{
			  path: '/productServicePage',
			  name: 'ProductServerPage',
			  component: ProductServerPage
			}
  ],
  linkActiveClass: 'active',
	scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	}
})
