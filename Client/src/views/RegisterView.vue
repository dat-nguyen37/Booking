<template>
    <div class="w-full">
        <div class="flex w-full bg-gray-100 h-14 px-5 ">
            <ul class="flex items-center gap-3 text-sm text-gray-500">
                <li><a href="/" class="hover:text-yellow-600">Trang chủ </a></li>
                <li><a href="" class="hover:text-yellow-600">
                    <font-awesome-icon icon="fa-angle-right"/>
                    Đăng ký tài khoản
                </a></li>
            </ul>
        </div>
        <div class="flex justify-center p-2 lg:p-6">
            <div class="flex flex-col  w-full md:w-1/2 lg:w-1/3 items-center gap-2 p-4 border shadow-2xl">
                <h1 class="text-2xl uppercase font-medium text-yellow-500">ĐĂNG KÝ</h1>
                <p class="text-sm">Đã có tài khoản, đăng nhập <a href="/Login" class="text-yellow-500 hover:text-black">tại đây</a></p>
                <input type="text" name="" id="" class="w-full border outline-none p-2" placeholder="Họ">
                <input type="text" name="" id="" class="w-full border outline-none p-2" placeholder="Tên">
                <input type="text" name="" id="" class="w-full border outline-none p-2" placeholder="Email">
                <input type="text" name="" id="" class="w-full border outline-none p-2" placeholder="Số điện thoại">
                <input type="text" name="" id="" class="w-full border outline-none p-2" placeholder="Mật khẩu">
                <button class="bg-yellow-500 border border-yellow-500 rounded-md w-full py-2 text-lg text-white hover:text-yellow-500 hover:bg-white">ĐĂNG KÝ</button>
                <p class="text-sm">Hoặc đăng nhập bằng</p>
                <div class="w-full flex gap-1 justify-center">
                    <div class="bg-blue-800 text-white text-xm w-32 flex items-center gap-2 cursor-pointer px-2 py-1"><font-awesome-icon :icon="['fab', 'facebook-f']" class="w-10 py-2 border-r border-gray-600"/>Facebook</div>
                    <div class="bg-red-600 text-white text-sm w-32 flex items-center gap-2 cursor-pointer px-2 py-1"><font-awesome-icon :icon="['fab', 'google-plus-g']" class="w-10 py-2 border-r border-gray-600"/>Google</div>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    name:"RegisterView",

}
</script>