<template>
    <div class="w-full">
        <div class="flex w-full bg-gray-100 h-14 px-5 ">
            <ul class="flex items-center gap-3 text-sm text-gray-500">
                <li><a href="/" class="hover:text-yellow-600">Trang chủ </a></li>
                <li><a href="" class="hover:text-yellow-600">
                    <font-awesome-icon icon="fa-angle-right"/>
                    Dịch vụ
                </a></li>
            </ul>
        </div>
        <div class="flex flex-col items-center my-5 gap-4 ">
            <h1 class="uppercase font-medium text-3xl">HỘI NGHỊ - CƯỚI HỎI</h1>
            <div class="border-b border-t w-40 h-1 border-black"></div>
            <div class="flex overflow-x-auto no-scrollbar w-full sm:grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
                <div class="border min-w-64 sm:min-w-full h-[18rem] md:h-[10rem] lg:h-[18rem] shadow-xl rounded-2xl">
                    <img src="/Image/service/1.webp" alt="" class="w-full h-[calc(100%-4rem)] rounded-t-2xl object-cover">
                    <div class="text-lg text-center font-bold line-clamp-2">Tổ chức tiệc hội nghị, hội thảo cao cấp</div>
                </div>
                <div class="border min-w-64 sm:min-w-full h-[18rem] md:h-[10rem] lg:h-[18rem] shadow-2xl rounded-2xl">
                    <img src="/Image/service/2.webp" alt="" class="w-full h-[calc(100%-4rem)]  rounded-t-2xl object-cover">
                    <p class="text-lg text-center font-bold line-clamp-2">Tổ chức tiệc hội nghị, hội thảo cao cấp</p>
                </div>
                <div class="border min-w-64 sm:min-w-full h-[18rem] md:h-[10rem] lg:h-[18rem] shadow-2xl rounded-2xl">
                    <img src="/Image/service/3.webp" alt="" class="w-full h-[calc(100%-4rem)] rounded-t-2xl object-cover">
                    <p class="text-lg text-center font-bold line-clamp-2">Tổ chức tiệc hội nghị, hội thảo cao cấp</p>
                </div>
                <div class="border min-w-64 sm:min-w-full h-[18rem] md:h-[10rem] lg:h-[18rem] shadow-2xl rounded-2xl">
                    <img src="/Image/service/4.webp" alt="" class="w-full h-[calc(100%-4rem)] rounded-t-2xl object-cover">
                    <p class="text-lg text-center font-bold line-clamp-2">Tổ chức tiệc hội nghị, hội thảo cao cấp</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center my-5 gap-4 ">
            <h1 class="uppercase font-medium text-3xl">SỨC KHỎE - LÀM ĐẸP</h1>
            <div class="border-b border-t w-40 h-1 border-black"></div>
            <div class="flex overflow-x-auto no-scrollbar w-full sm:grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
                <div class="border min-w-64 sm:min-w-full h-[18rem] md:h-[10rem] lg:h-[18rem] shadow-xl rounded-2xl">
                    <img src="/Image/service/5.webp" alt="" class="w-full h-[calc(100%-4rem)] rounded-t-2xl object-cover">
                    <div class="text-lg text-center font-bold line-clamp-2">Nghỉ dưỡng kết hợp massage thư giãn với đá nóng</div>
                </div>
                <div class="border min-w-64 sm:min-w-full h-[18rem] md:h-[10rem] lg:h-[18rem] shadow-2xl rounded-2xl">
                    <img src="/Image/service/6.webp" alt="" class="w-full h-[calc(100%-4rem)]  rounded-t-2xl object-cover">
                    <p class="text-lg text-center font-bold line-clamp-2">Tắm trắng và kết hợp dưỡng da toàn thân</p>
                </div>
                <div class="border min-w-64 sm:min-w-full h-[18rem] md:h-[10rem] lg:h-[18rem] shadow-2xl rounded-2xl">
                    <img src="/Image/service/7.webp" alt="" class="w-full h-[calc(100%-4rem)] rounded-t-2xl object-cover">
                    <p class="text-lg text-center font-bold line-clamp-2">Massage body toàn thân bằng tinh dầu và hơi nước</p>
                </div>
                <div class="border min-w-64 sm:min-w-full h-[18rem] md:h-[10rem] lg:h-[18rem] shadow-2xl rounded-2xl">
                    <img src="/Image/service/8.webp" alt="" class="w-full h-[calc(100%-4rem)] rounded-t-2xl object-cover">
                    <p class="text-lg text-center font-bold line-clamp-2">Tẩy da chết toàn thân bằng tinh chất cám gạo, ngũ cốc</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ServiceView"
}
</script>