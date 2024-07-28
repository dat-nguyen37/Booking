<template>
    <div class="bg-[url('D:\Workspace\vuejs\hotel\client\public\Image\footer.webp')] w-full h-auto bg-contain p-4 md:p-10 text-white">
        <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            <div class="lg:col-span-1">
                <h1 class="uppercase">HOTLINE HỖ TRỢ</h1>
                <p class="my-2">1900 6750</p>
            </div>
            <div class="lg:col-span-1">
                <h1 class="uppercase">EMAIL HỖ TRỢ</h1>
                <p class="my-2">support@sapo.vn</p>
            </div>
            <div class="lg:col-span-2">
                <h1 class="uppercase">ĐĂNG KÝ NHẬN TIN</h1>
                <div class="my-2">
                    <input type="email" name="" id="" placeholder="Email của bạn" class="w-[70%] p-2 outline-none text-black" required>
                    <button class="p-2 bg-yellow-600">ĐĂNG KÝ</button>
                </div>
            </div>
            <div class="lg:col-span-1">
                <h1 class="uppercase">KẾT NỐI CHÚNG TÔI</h1>
                <div class="flex gap-5 my-2">
                    <a href="" class="flex justify-center items-center w-8 h-8 border rounded-full hover:bg-blue-700">
                        <font-awesome-icon icon="fab fa-facebook-f" class=""/>
                    </a>
                    <a href="" class="flex justify-center items-center w-8 h-8 border rounded-full hover:bg-blue-400">
                        <font-awesome-icon icon="fab fa-twitter" class="" />
                    </a>
                    <a href="" class="flex justify-center items-center w-8 h-8 border rounded-full hover:bg-gradient-to-tr from-purple-400 to-pink-700">
                        <font-awesome-icon icon="fab fa-instagram" class="" />
                    </a>
                    <a href="" class="flex justify-center items-center w-8 h-8 border rounded-full hover:bg-red-600">
                        <font-awesome-icon icon="fab fa-youtube" class="" />
                    </a>
                </div>

            </div>
        </div>
        <div class="hidden md:flex flex-col items-center mb-10">
            <a href="" class="uppercase text-xl hover:text-yellow-500 my-5">
                <font-awesome-icon icon="home"/>
                HỆ THỐNG CHI NHÁNH
            </a>
            <div class="flex flex-wrap">
                <div class="w-1/3 flex gap-3 px-2 py-4 border-r border-b border-gray-600">
                    <div class="w-6 h-6 border flex justify-center items-center border-white rounded-full"><font-awesome-icon icon="map-marker-alt"/></div>
                    <div class="text-sm flex flex-col gap-3">
                        <p>Hotel HCM : 772 Điện Biên Phủ, Phường 1, Bình Thạnh</p>
                        <p>Hotline: 0982.847.974</p>
                    </div>
                </div>
                <div class="w-1/3 flex gap-3 px-2 py-4 border-r border-b border-gray-600">
                    <div class="w-6 h-6 border flex justify-center items-center border-white rounded-full"><font-awesome-icon icon="map-marker-alt"/></div>
                    <div class="text-sm flex flex-col gap-3">
                        <p>Hotel Đà Lạt : 94 Hoàng Hoa Thám, Phường 10</p>
                        <p>Hotline: 0263.306.997</p>
                    </div>
                </div>
                <div class="w-1/3 flex gap-3 px-2 py-4  border-b border-gray-600">
                    <div class="w-6 h-6 border flex justify-center items-center border-white rounded-full"><font-awesome-icon icon="map-marker-alt"/></div>
                    <div class="text-sm flex flex-col gap-3">
                        <p>Hotel Nha Trang : 02 Phạm Văn Đồng, Phường Vĩnh Phước</p>
                        <p>Hotline: 0903.307.497</p>
                    </div>
                </div>
                <div class="w-1/3 flex gap-3 px-2 py-4 border-r border-b border-gray-600">
                    <div class="w-6 h-6 border flex justify-center items-center border-white rounded-full"><font-awesome-icon icon="map-marker-alt"/></div>
                    <div class="text-sm flex flex-col gap-3">
                        <p>Hotel Phú Quốc : 147 Trần Hưng Đạo, Dương Đông</p>
                        <p>Hotline: 0903.307.447</p>
                    </div>
                </div>
                <div class="w-1/3 flex gap-3 px-2 py-4 border-r border-b border-gray-600">
                    <div class="w-6 h-6 border flex justify-center items-center border-white rounded-full"><font-awesome-icon icon="map-marker-alt"/></div>
                    <div class="text-sm flex flex-col gap-3">
                        <p>Hotel ĐăkLăk : 38 Huỳnh Thúc Kháng, Phường Tân Lợi</p>
                        <p>Hotline: 0903.307.448</p>
                    </div>
                </div>
                <div class="w-1/3 flex gap-3 px-2 py-4  border-b border-gray-600">
                    <div class="w-6 h-6 border flex justify-center items-center border-white rounded-full"><font-awesome-icon icon="map-marker-alt"/></div>
                    <div class="text-sm flex flex-col gap-3">
                        <p>Hotel Hà Nội : 266 Đội Cấn, Ba Đình</p>
                        <p>Hotline: 0903.307.449</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
            <div class="lg:col-span-3 flex flex-col gap-4">
                <img src="/Image/logo_foo.webp" alt="" class="text-white w-56 h-16">
                <p class="text-base">Nằm ở trung tâm thành phố và nhiều thành phố khác. Chúng tôi cung cấp chỗ nghỉ thanh lịch và đầy phong cách với truy cập Wifi miễn phí trong các khu vực chung. Khách sạn có lễ tân 24 giờ, hồ bơi trong nhà, trung tâm thể dục và bãi đỗ xe miễn phí trong khuôn viên.</p>
            </div>
            <div class="lg:col-span-4 py-4 flex flex-col gap-2">
                <h1>BÀI VIẾT MỚI</h1>
                <div class="py-2 border-b border-gray-500">
                    <a href="" class="text-sm">10 xu hướng thịnh hành trong ngành khách sạn 2022</a>
                    <p class="text-xs text-gray-300">Ngày đăng 06/12/2022</p>
                </div>
                <div class="py-2 border-b border-gray-500">
                    <a href="" class="text-sm">Những điều kiêng kị khi ở khách sạn mà bạn nên biết</a>
                    <p class="text-xs text-gray-300">Ngày đăng 06/12/2022</p>
                </div>
                <div class="py-2 border-b border-gray-500">
                    <a href="" class="text-sm">Ý nghĩa việc khách sạn để chocolate lên gối khi dọn phòng</a>
                    <p class="text-xs text-gray-300">Ngày đăng 06/12/2022</p>
                </div>
            </div>
            <div class="lg:col-span-2 py-4 flex flex-col gap-4">
                <h1>CHÍNH SÁCH</h1>
                <div class="text-sm flex flex-col gap-2">
                    <a href="">Chính sách nhận phòng</a>
                    <a href="">Chính sách trả phòng</a>
                    <a href="">Chính sách thanh toán</a>
                    <a href="">Chính sách bảo mật</a>
                </div>
            </div>
            <div class="lg:col-span-3 py-4 flex flex-col gap-4">
                <h1>HÌNH THỨC THANH TOÁN</h1>
                <img src="/Image/icon_check_out.webp" alt="" class="w-72 h-32">
            </div>
        </div>
  </div>
</template>
<script>

export default ({
    name:"FooterView"
})
</script>
