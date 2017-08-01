import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Mine from '@/components/Mine'
import ProductDetail from '@/components/ProductDetail'
import ProductBuy from '@/components/ProductBuy'
import AccountDetail from '@/components/AccountDetail'
import productCalculator from '@/components/productCalculator'
import Login from '@/components/login'
import Register from '@/components/register'

const routes = [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },{
      path: '/home',
      component: Home
    },{
      path: '/products',
      component: Products
    },{
      path: '/mine',
      component: Mine
    },{
      path: '/login',
      component: Login
    },{
      path: '/register',
      component: Register
    },{
      path:'/product-detail/:pid',
      name:'product-detail',
      component: ProductDetail
    },{
      path:'/product-buy/:pid',
      name:'product-buy',
      meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: ProductBuy
    },{
      path:'/account-details/:aid',
      name:'account-details',
      component: AccountDetail
    },{
      path:'/product-calculator',
      name:'product-calculator',
      component: productCalculator
    }
  ];
  
const router = new Router({
  routes
});
router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
         console.log(document.cookie.user_token)
        if (getCookie('user_token')) {  // cookie获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                // query: {redirect: to.fullPath},  // 将跳转的路由path作为参数，登录成功后跳转到该路由
                query: {name:to.name ,id: to.params.pid}
            })
        }
    }
    else {
        next();
    }
});
function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))
return unescape(arr[2]);
else
return null;
}
export default router