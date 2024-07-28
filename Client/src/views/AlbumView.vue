<template>
    <div class="w-full">
        <div class="flex w-full bg-gray-100 h-14 px-5 ">
            <ul class="flex items-center gap-3 text-sm text-gray-500">
                <li><a href="/" class="hover:text-yellow-600">Trang chủ </a></li>
                <li><a href="" class="hover:text-yellow-600">
                    <font-awesome-icon icon="fa-angle-right"/>
                    Thư viện ảnh
                </a></li>
            </ul>
        </div>
        <div class="flex flex-col items-center my-5 gap-4 ">
            <h1 class="uppercase font-medium text-3xl">THƯ VIỆN ẢNH</h1>
            <div class="border-b border-t w-40 h-1 border-black"></div>
            <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-5 w-[calc(100%-20px)] mx-auto lg:p-5">
                <img src="/Image/album/1.webp" alt="" class="w-full h-[50vh] sm:h-48 object-cover rounded-2xl">
                <img src="/Image/album/2.webp" alt="" class="w-full h-[50vh] sm:h-48 object-cover rounded-2xl">
                <img src="/Image/album/3.webp" alt="" class="w-full h-[50vh] sm:h-48 object-cover rounded-2xl">
                <img src="/Image/album/4.webp" alt="" class="w-full h-[50vh] sm:h-48 object-cover rounded-2xl">
                <img src="/Image/album/5.webp" alt="" class="w-full h-[50vh] sm:h-48 object-cover rounded-2xl">
                <img src="/Image/album/6.webp" alt="" class="w-full h-[50vh] sm:h-48 object-cover rounded-2xl">
                <img src="/Image/album/7.webp" alt="" class="w-full h-[50vh] sm:h-48 object-cover rounded-2xl">
                <img src="/Image/album/8.webp" alt="" class="w-full h-[50vh] sm:h-48 object-cover rounded-2xl">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"AlbumView"
}
</script>