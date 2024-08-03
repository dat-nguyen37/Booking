<template>
    <div class="w-full">
        <div class="flex w-full bg-gray-100 h-14 px-5 ">
            <ul class="flex items-center gap-3 text-sm text-gray-500">
                <li><a href="/" class="hover:text-yellow-600">Trang chủ </a></li>
                <li><a href="" class="hover:text-yellow-600">
                    <font-awesome-icon icon="fa-angle-right"/>
                    Trang khách hàng
                </a></li>
            </ul>
        </div>
        <div class="p-10">
            <div class="flex flex-col md:grid grid-cols-12 gap-5">
                <div class="col-span-3 md:col-span-4">
                    <div @click="showMenu" class="flex items-center justify-between bg-black text-white text-center p-2">
                        <div>
                            <h1 class="text-xl">Trang tài khoản</h1>
                            <strong class="text-sm">Xin chào, <span class="text-yellow-600">{{ $store.state.user.username }}</span> !</strong>
                        </div>
                        <font-awesome-icon :icon="menu ? 'angle-up' : 'angle-down'" />
                    </div>
                    <ul v-if="menu" class="py-2 text-sm bg-gray-100">
                        <li><a href="/Account" class="flex hover:text-yellow-600 hover:bg-gray-700 p-2">Thông tin tài khoản</a></li>
                        <li><a href="/Account/orders" class="flex hover:text-yellow-600 hover:bg-gray-700 p-2">Đơn hàng của bạn</a></li>
                        <li><a href="/Account/changepassword" class="flex hover:text-yellow-600 hover:bg-gray-700 p-2">Đổi mật khẩu</a></li>
                        <li><a href="/Account/addresses" class="flex hover:text-yellow-600 hover:bg-gray-700 p-2">Sổ địa chỉ(1)</a></li>
                    </ul>
                </div>
                <div class="col-span-9 md:col-span-8">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ProfileView",
    data(){
        return{
            menu:true
        }
    },
    methods:{
        showMenu(){
           this.menu=!this.menu 
        }
    }
}
</script>