import AboutView from '@/views/AboutView.vue'
import AlbumView from '@/views/AlbumView.vue'
import BookingView from '@/views/BookingView.vue'
import CartView from '@/views/CartView.vue'
import Categoryview from '@/views/CategoryView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import RegisterView from '@/views/RegisterView.vue'
import SearchView from '@/views/SearchView.vue'
import ServiceView from '@/views/ServiceView.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import ProfileView from '@/views/ProfileView.vue'
import Account from '@/components/Account.vue'
import Order from '@/components/Order.vue'
import ChangePass from '@/components/ChangePass.vue'
import Addresses from '@/components/Address/Addresses.vue'
import OrderDetail from '@/components/OrderDetail.vue'

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        name:'home',
        component:HomeView,
        meta: {
            title: 'Bean Hotel',
          }
    },
    {
        path:'/ProductDetail/:brand/:id',
        name:'productdetail',
        component:ProductDetail,
        meta: {
            title: 'Chi tiết sản phẩm',
          }
    },
    {
        path:'/Album',
        name:'album',
        component:AlbumView,
        meta: {
            title: 'Thư viện ảnh',
          }
    },
    {
        path:'/Dichvu',
        name:'service',
        component:ServiceView,
        meta: {
            title: 'Dịch vụ',
          }
    },
    {
        path:'/About',
        name:'about',
        component:AboutView,
        meta: {
            title: 'Về chúng tôi',
          }
    },
    {
        path:'/Search',
        name:'search',
        component:SearchView,
        meta: {
            title: 'Tìm kiếm',
          }
    },
    {
        path:'/Category',
        name:'category',
        component:Categoryview,
        meta: {
            title: 'Trang chủ',
          }
    },
    {
        path:'/Cart',
        name:'cart',
        component:CartView,
        meta: {
            title: 'Giỏ hàng',
          }
    },
    {
        path:'/Register',
        name:'register',
        component:RegisterView,
        meta: {
            title: 'Đăng ký',
          }
    },
    {
        path:'/Login',
        name:'login',
        component:LoginView,
        meta: {
            title: 'Đăng nhập',
          }
    },
    {
      path:'/Booking',
      name:'booking',
      component:BookingView,
      meta: {
          title: 'Đặt phòng',
        }
  },
  {
    path:'/Contact',
    name:'contact',
    component:ContactView,
    meta: {
        title: 'Liên hệ',
      }
  },
  {
    path:'/Account',
    component: ProfileView,
      children: [
        {
          path: '',
          name:'account',
          component: Account,
          meta: {
            title: 'Trang khách hàng',
          },
        },
        {
          path: 'orders',
          name:'orders',
          component: Order,
          meta: {
            title: 'Trang đơn hàng',
          },
        },
        {
          path: 'orders/:id',
          name:'orderdetail',
          component: OrderDetail,
          meta: {
            title: 'Chi tiết đơn hàng',
          },
        },
        {
          path: 'changepassword',
          name:'changepassword',
          component: ChangePass,
          meta: {
            title: 'Thay đổi mật khẩu',
          },
        },
        {
          path: 'addresses',
          name:'addresses',
          component: Addresses,
          meta: {
            title: 'Sổ địa chỉ',
          },
        },
      ]
  },
]

const router=new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
  });

export default router