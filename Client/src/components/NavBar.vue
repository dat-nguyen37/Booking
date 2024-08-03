<template>
    <div class="relative w-full h-28">
        <div class="w-full h-6 flex text-white bg-yellow-600 justify-end items-center lg:justify-between px-5">
            <p class="hidden lg:block">Chào mừng bạn đến với Bean Hotel!</p>
            <ul class="flex lg:mr-[5rem]">
                <div v-if="$store.state.user" class="flex">
                    <li @click="Logout" class="border-r-2 border-r-white px-4"><a href="">Đăng xuất</a></li>
                    <li class="border-r-2 border-r-white px-4"><a href="/Account">Tài khoản</a></li>
                </div>
                <div v-else class="flex">
                    <li class="border-r-2 border-r-white px-4"><a href="/Register">Đăng ký</a></li>
                    <li class="border-r-2 border-r-white px-4"><a href="/Login">Đăng nhập</a></li>
                </div>
                <li class="border-r-2 border-r-white px-4 hidden lg:block"><a href="/Cart"><font-awesome-icon icon="shopping-cart" class="px-1"/>Giỏ hàng (0)</a></li>
                <li class="px-4 relative"><a href="#" @click="toggleSearch"><font-awesome-icon :icon="search ? ['fas', 'times-circle'] : ['fas', 'search']" class="px-1"/>Tìm kiếm</a></li>
                <div v-if="search" class="absolute w-full md:w-1/2 shadow-2xl p-4 bg-white top-6 right-0 z-10 border text-black">
                    <div class="w-full flex justify-between border-b-2 border-yellow-500">
                        <input type="text" class="outline-none w-4/5" placeholder="Nhập từ khóa tìm kiếm">
                        <font-awesome-icon icon="search" class="text-yellow-500 cursor-pointer"/>
                    </div>
                </div>
            </ul>
        </div>
        <div class=" w-full px-5 py-2 flex items-center justify-between lg:justify-start">
            <img src="/Image/logo.png" alt="" class="object-contain">
            <div class="flex gap-10">
                <a href="#" class="relative lg:hidden">
                    <font-awesome-icon icon="shopping-cart" class="lg:hidden absolute text-2xl cursor-pointer"/>
                    <span class="absolute bg-yellow-500 text-white w-5 h-5 rounded-full flex justify-center items-center -top-2 -right-8">0</span>
                </a>
                <button @click="toggleModal"><font-awesome-icon icon="bars" class="lg:hidden text-2xl cursor-pointer"/></button>
                <div v-if="modal" class="fixed inset-0 bg-black bg-opacity-50" @click="toggleModal"></div>
                <ul :class="modal ? 'flex flex-col' : 'hidden'" class=" absolute font-medium bg-white w-60 h-[100vh] top-0 left-0 shadow-2xl lg:w-auto lg:h-auto lg:relative lg:bg-transparent lg:shadow-none lg:flex">
                    <font-awesome-icon icon="close" @click="toggleModal" class="lg:hidden self-end p-1 hover:bg-red-500 text-2xl cursor-pointer"/>
                    <li class="flex px-2  py-1 hover:text-yellow-500"><a href="/" class="w-full">Trang chủ</a></li>
                    <li class="flex px-2 py-1 hover:text-yellow-500"><a href="/About" class="w-full">Về chúng tôi</a></li>
                    <li class="flex px-2 py-1 hover:text-yellow-500 relative group">
                        <a href="/Category" class="w-full flex justify-between items-center gap-2">Phòng<font-awesome-icon icon="caret-down"/></a>
                        <ul class="absolute hidden group-hover:block bg-white text-black -right-60 lg:-right-40 lg:top-8 w-60 z-10 shadow-xl">
                            <li class=" flex font-normal p-2 text-start hover:text-yellow-500 hover:bg-gray-200 hover:border-l-2 hover:border-yellow-600"><a href="" class="w-full">Phòng đơn</a></li>
                            <li class=" flex font-normal p-2 text-start hover:text-yellow-500 hover:bg-gray-200 hover:border-l-2 hover:border-yellow-600"><a href="" class="w-full">Phòng đôi</a></li>
                            <li class=" flex font-normal p-2 text-start hover:text-yellow-500 hover:bg-gray-200 hover:border-l-2 hover:border-yellow-600"><a href="" class="w-full">Phòng víp</a></li>
                        </ul>
                    </li>
                    <li class="flex px-2 py-1 hover:text-yellow-500 relative group">
                        <a href="" class="w-full flex justify-between items-center gap-2">Ẩm thực <font-awesome-icon icon="caret-down"/></a>
                        <ul class="absolute hidden group-hover:block bg-white text-black -right-60 lg:-right-40 lg:top-8 w-60 z-10 shadow-xl">
                            <li class=" flex font-normal p-2 text-start hover:text-yellow-500 hover:bg-gray-200 hover:border-l-2 hover:border-yellow-600"><a href="" class="w-full">Món ăn</a></li>
                            <li class=" flex font-normal p-2 text-start hover:text-yellow-500 hover:bg-gray-200 hover:border-l-2 hover:border-yellow-600"><a href="" class="w-full">Đồ uống</a></li>
                            <li class=" flex font-normal p-2 text-start hover:text-yellow-500 hover:bg-gray-200 hover:border-l-2 hover:border-yellow-600"><a href="" class="w-full">Bánh ngọt</a></li>
                        </ul>
                    </li>
                    <li class="flex px-2 py-1 hover:text-yellow-500"><a href="/Dichvu" class="w-full">Dịch vụ</a></li>
                    <li class="flex px-2 py-1 hover:text-yellow-500"><a href="/Album" class="w-full">Thư viện ảnh</a></li>
                    <li class="flex px-2 py-1 hover:text-yellow-500"><a href="/Contact" class="w-full">Liên hệ</a></li>
                </ul>
            </div>
        </div>
        <a href="/Booking" class="absolute top-0 right-2 hover:shadow-[0px_0px_2px_2px_rgba(0,0,0,0.9)] hidden lg:flex flex-col items-center justify-center bg-yellow-700 text-white h-full px-3">
            <img src="/icon/schedule.png" alt="" class="w-10 h-10">
            <p class="font-medium">Đặt phòng</p>
        </a>
    </div>
</template>
<script>
export default({
    name:"NavBar",
    data(){
        return{
            modal:false,
            search:false
        }
    },
    methods:{
        Logout(){
            this.$store.commit('SET_LOGOUT')
        },
        toggleModal() {
        this.modal = !this.modal;
        },
        toggleSearch() {
        this.search = !this.search;
        }
    }
})
</script>
<style lang="css" scoped>

</style>