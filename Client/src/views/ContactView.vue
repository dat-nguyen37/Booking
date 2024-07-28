<template>
    <div class="w-full">
        <div class="flex w-full bg-gray-100 h-14 px-5 ">
            <ul class="flex items-center gap-3 text-sm text-gray-500">
                <li><a href="/" class="hover:text-yellow-600">Trang chủ </a></li>
                <li><a href="" class="hover:text-yellow-600">
                    <font-awesome-icon icon="fa-angle-right"/>
                    Liên hệ
                </a></li>
            </ul>
        </div>
        <div class="flex flex-col gap-10 items-center container py-10 mx-auto">
            <div class="grid lg:grid-cols-12">
                <div class="col-span-1"></div>
                <div class="col-span-10 flex flex-col lg:flex-row p-10 gap-5 shadow-[0px_0px_10px_10px_rgba(0,0,0,0.9)]">
                    <div class="flex flex-1 flex-col gap-5">
                        <h1 class="text-sm">Thông tin liên hệ</h1>
                        <p class="text-sm">Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi. Chúng tôi sẽ trả lời bạn sau khi nhận được.</p>
                        <input type="text" placeholder="Họ và tên *" class="outline-none border-b p-2">
                        <input type="text" placeholder="Email *" class="outline-none border-b p-2">
                        <textarea name="" id="" rows="2" placeholder="Nội dung *" class="outline-none border-b p-2"></textarea>
                        <div class="bg-black text-white font-bold text-center p-2">GỬI LIÊN HỆ</div>
                    </div>
                    <div class="flex flex-1 flex-col gap-10 bg-black text-white p-5">
                        <h1 class="font-bold text-lg">Thông tin</h1>
                        <div class="flex items-center gap-5">
                            <font-awesome-icon :icon="['fas', 'map-marked-alt']" class="text-2xl"/>
                            <p class="hover:text-yellow-500">70 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh</p>
                        </div>
                        <div class="flex items-center gap-5">
                            <font-awesome-icon :icon="['fas', 'phone-volume']" class="text-2xl"/>
                            <p class="hover:text-yellow-500">1900 6750</p>
                        </div>
                        <div class="flex items-center gap-5">
                            <font-awesome-icon :icon="['far', 'envelope']" class="text-2xl"/>
                            <p class="hover:text-yellow-500">support@sapo.vn</p>
                        </div>
                        <div class="flex items-center gap-5">
                            <font-awesome-icon :icon="['far', 'clock']" class="text-2xl"/>
                            <p class="hover:text-yellow-500">Mở cửa 24/24</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-1"></div>
            </div>   
            <div class="w-[calc(100%-20px)] mx-auto ">
                <iframe height="350" class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.518104241413!2d106.650981814287!3d10.771573662229935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec073c87139%3A0x10ef6fd79e84aa6f!2zNzAgTOG7ryBHaWEsIFBoxrDhu51uZyAxNSwgUXXhuq1uIDExLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1647783383128!5m2!1svi!2s" frameborder="0" allowfullscreen="lazy"></iframe>
            </div>         
        </div>
    </div>
</template>
<script>
export default {
    name:"ContactView"
}
</script>