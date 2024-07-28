<template>
    <div class="w-full flex flex-col gap-5">
        <div v-if="showPopupView || showPopupCart"  class="fixed z-20 inset-0 bg-black bg-opacity-50 h-[100vh] w-[100vw]"></div>
        <div id="popup-view" v-if="showPopupView" class=" flex bg-white w-[70%] lg:w-[60%] rounded-lg  z-20 top-10 fixed h-auto p-3 gap-5 self-center">
            <div class="flex w-64 flex-col gap-3">
                <img src="/Image/food/1.webp" alt="" class="w-full h-40 object-cover">
                <div class="grid grid-cols-3 gap-3">
                    <img src="/Image/food/2.webp" alt="" class="w-full object-contain">
                    <img src="/Image/food/3.webp" alt="" class="w-full object-contain">
                    <img src="/Image/food/4.webp" alt="" class="w-full object-contain">
                </div>
            </div>
            <div class="w-2/3 flex flex-col gap-2">
                <h1 class="font-medium text-xl">Bánh mì ốp la trứng</h1>
                <p class="text-xl text-red-500 font-medium">40.000₫</p>
                <p class="text-xs lg:text-sm leading-5">Đĩa bánh mì ốp la trứng ngon nóng hổi sẽ cung cấp bữa sáng tuyệt vời, đầy đủ dinh dưỡng, năng lượng cho một ngày dài. Sự hòa quyện vị ngọt tự nhiên của rau củ, thịt và gia vị sẽ giúp món mì thêm đậm đà, đượm vị.</p>
                <div class="flex">
                    <input type="text" min="1" value="1" class="w-10 h-10 border-2 outline-none p-2">
                    <div class="text-xl">
                        <div class="w-6 h-5 border-2 flex justify-center items-center cursor-pointer">+</div>
                        <div class="w-6 h-5 border-2 flex justify-center items-center cursor-pointer">-</div>
                    </div>
                    <div @click="Addtocart" class="bg-yellow-500 ml-5 leading-10 px-2 text-white border border-yellow-500 hover:bg-white hover:text-yellow-500 cursor-pointer">THÊM VÀO GIỎ HÀNG</div>
                </div>
            </div>
            <font-awesome-icon icon="close" @click="PopupView" class="absolute right-0 top-0 p-2 cursor-pointer transform hover:rotate-45"/>
        </div>
        <div v-if="showPopupCart" id="popup-cart"  class=" flex flex-col bg-white rounded-lg w-[28rem]  z-20 top-10 fixed h-auto self-center">
            <div class="bg-yellow-500 w-full flex items-center justify-between p-1 rounded-t-lg">
                <div class="flex gap-2 items-center text-white">
                    <font-awesome-icon :icon="['far', 'check-circle']" class="text-white text-xl"/>                    
                    <p class="font-bold">Mua hàng thành công</p>
                </div>
                <font-awesome-icon icon="close" @click="PopupCart" class=" right-0 top-0 p-2 text-white cursor-pointer transform hover:rotate-45 text-xl"/>
            </div>
            <div class="flex border-b border-black p-2 gap-3">
                <img src="/Image/food/1.webp" alt="" class="w-20 h-18 object-">
                <div class="font-bold">
                    <p>Bún xào thịt heo</p>
                    <p>75.000₫  </p>
                </div>
            </div>
            <div class="p-2 flex flex-col gap-3">
                <a href="/Cart" class="text-sm">Giỏ hàng của bạn hiện có 10 sản phẩm</a>
                <div class="text-white grid grid-cols-2 gap-3 text-center">
                    <div class="bg-gray-500 p-2 cursor-pointer rounded-lg hover:bg-gray-700">Tiếp tục mua hàng</div>
                    <div class="bg-yellow-500 p-2 cursor-pointer rounded-lg hover:bg-yellow-700">Thanh toán ngay</div>
                </div>
            </div>
        </div>
        <img src="/Image/slider_1.png" alt="" class="object-contain">
        <div class="grid grid-cols-1 lg:grid-cols-2 w-full p-2 gap-10 mx-auto my-5 lg:p-6">
            <div class="flex w-full justify-center">
                <img src="/Image/about.png" alt="" class="w-full">
            </div>
            <div class="flex flex-col">
                <h1 class="font-bold text-3xl py-1">Bean Hotel</h1>
                <p class="text-2xl font-medium py-1">Giới thiệu về chúng tôi</p>
                <span class="font-light py-2">Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh. Với hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác...</span>
                <button class="self-start bg-yellow-500 py-3 px-5 text-white font-normal">Xem thêm</button>
            </div>
        </div>
        <div class="w-full bg-gray-200 ">
            <div class="flex flex-col items-center">
                <h1 class="uppercase text-3xl font-medium p-2 border-b-2 border-black">PHÒNG</h1>
                <div class="flex overflow-x-auto no-scrollbar w-full sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 p-2 lg:p-6">
                    <ProductItem :brand="'room'"/>
                    <ProductItem :brand="'room'"/>
                    <ProductItem :brand="'room'"/>
                    <ProductItem :brand="'room'"/>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <h1 class="uppercase text-3xl font-medium p-2 border-b-2 border-black">PHÒNG ĐÔI</h1>
                <div class="flex overflow-x-auto no-scrollbar w-full sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 p-2 lg:p-6">
                    <ProductItem :brand="'room'"/>
                    <ProductItem :brand="'room'"/>
                    <ProductItem :brand="'room'"/>
                    <ProductItem :brand="'room'"/>
                </div>
            </div>
        </div>
        <!-- room vip -->
        <div class="w-full">
            <div class="flex flex-col items-center">
                <h1 class="uppercase text-3xl font-medium p-2 border-b-2 border-black">PHÒNG VIP</h1>
                <div class="w-full my-2 lg:grid lg:grid-cols-5 lg:gap-5 p-2 lg:p-6">
                    <div class="border md:col-span-2">
                        <img src="/Image/roomvip/1.webp" alt="" class="object-cover w-full">
                        <div class="flex flex-col w-full p-2">
                            <h1 class="uppercase font-medium">Phòng đơn vip</h1>
                            <div class="flex justify-between items-center">
                                <p>02 Khách &nbsp;&nbsp; 25m²</p>
                                <div class="flex justify-center gap-5 text-xl py-2">
                                    <font-awesome-icon icon="coffee"/>
                                    <font-awesome-icon icon="bath"/>
                                    <font-awesome-icon icon="wifi"/>
                                </div>
                            </div>
                            <span class="font-light">Với tiêu chí ngày càng nâng cao và đáp ứng mọi nhu cầu của khách hàng chúng tôi cung cấp thêm loại phòng đơ...</span>
                            <button class="bg-red-600 text-white p-1 mt-2">ÐẶT PHÒNG TỪ 2.500.000₫/Đêm</button>
                        </div>
                    </div>
                    <div class="flex gap-5 overflow-x-auto no-scrollbar py-5 lg:py-0 md:col-span-3 md:grid md:grid-cols-2 md:grid-rows-2">
                        <div class="relative min-w-64 h-full">
                            <img src="/Image/roomvip/1.webp" alt="" class="w-full h-full">
                            <div class="absolute w-full p-2 flex justify-between bottom-0 text-sm">
                                <p class="uppercase font-medium text-white">PHÒNG GIA ĐÌNH</p>
                                <button class="bg-red-600 text-white p-1">3.000.000₫/Đêm</button>
                            </div>
                        </div>
                        <div class="relative min-w-64 h-full">
                            <img src="/Image/roomvip/2.webp" alt="" class="w-full h-full">
                            <div class="absolute w-full p-2 flex justify-between bottom-0 text-sm">
                                <p class="uppercase font-medium text-white">CĂN HỘ CHUNG CƯ</p>
                                <button class="bg-red-600 text-white p-1">2.700.000₫/Đêm</button>
                            </div>
                        </div>
                        <div class="relative min-w-64 h-full">
                            <img src="/Image/roomvip/3.webp" alt="" class="w-full h-full">
                            <div class="absolute w-full p-2 flex justify-between bottom-0 text-sm">
                                <p class="uppercase font-medium text-white">PHÒNG HẠNG SANG</p>
                                <button class="bg-red-600 text-white p-1">3.500.000₫/Đêm</button>
                            </div>
                        </div>
                        <div class="relative min-w-64 h-full">
                            <img src="/Image/roomvip/4.webp" alt="" class="w-full h-full">
                            <div class="absolute w-full p-2 flex justify-between bottom-0 text-sm">
                                <p class="uppercase font-medium text-white">PHÒNG ĐÔI NỐI LIỀN</p>
                                <button class="bg-red-600 text-white p-1">4.000.000₫/Đêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- food -->
        <div class="w-full">
            <div class="flex flex-col items-center">
                <h1 class="uppercase text-3xl font-medium border-b-2 border-black">ẨM THỰC</h1>
                <div class="flex gap-10 py-4">
                    <button class="uppercase text-xl font-medium hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500">MÓN ĂN</button>
                    <button class="uppercase text-xl font-medium hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500">ĐỒ UỐNG</button>
                    <button class="uppercase text-xl font-medium hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500">BÁNH NGỌT</button>
                </div>
                <div class="w-full p-2 lg:p-5 grid grid-cols-2 gap-5 lg:grid-cols-4">
                    <ProductItem :brand="'menu'" @show-popup-view="PopupView"/>
                    <ProductItem :brand="'menu'" @show-popup-view="PopupView"/>
                    <ProductItem :brand="'menu'" @show-popup-view="PopupView"/>
                    <ProductItem :brand="'menu'" @show-popup-view="PopupView"/>
                    <ProductItem :brand="'menu'" @show-popup-view="PopupView"/>
                    <ProductItem :brand="'menu'" @show-popup-view="PopupView"/>
                    <ProductItem :brand="'menu'" @show-popup-view="PopupView"/>
                    <ProductItem :brand="'menu'" @show-popup-view="PopupView"/>
                </div>
                <button class="bg-yellow-500 uppercase text-white py-2 my-3 px-3">Xem thêm</button>
            </div>
        </div>
        <!-- restaurant -->
        <div class="w-full bg-gray-100 ">
            <div class="flex flex-col items-center w-full p-2 mx-auto lg:p-6">
                <div class="bg-gray-200 flex w-96 h-17 my-4">
                    <div @click="currentTab = 'Tab1'" :class="{'bg-yellow-500 text-white': currentTab === 'Tab1'}"  class="w-1/3 p-2 flex flex-col items-center cursor-pointer hover:bg-yellow-500 hover:text-white">
                        <img src="https://bizweb.dktcdn.net/thumb/small/100/472/947/themes/888072/assets/cutlery.png" alt="" class="w-8 h-8">
                        <h1 class="uppercase">KHÁCH SẠN</h1>
                        <hr class="w-20 text-black">
                    </div>
                    <div @click="currentTab = 'Tab2'" :class="{'bg-yellow-500 text-white': currentTab === 'Tab2'}" class="w-1/3 p-2 flex flex-col items-center cursor-pointer hover:bg-yellow-500 hover:text-white">
                        <img src="https://bizweb.dktcdn.net/thumb/small/100/472/947/themes/888072/assets/meeting.png" alt="" class="w-8 h-8">
                        <h1 class="uppercase">phòng họp</h1>
                        <hr class="w-20 text-black">
                    </div>
                    <div @click="currentTab = 'Tab3'" :class="{'bg-yellow-500 text-white': currentTab === 'Tab3'}" class="w-1/3 p-2 flex flex-col items-center cursor-pointer hover:bg-yellow-500 hover:text-white">
                        <img src="https://bizweb.dktcdn.net/thumb/small/100/472/947/themes/888072/assets/skin-care.png" alt="" class="w-8 h-8">
                        <h1 class="uppercase">Làm đẹp</h1>
                        <hr class="w-20 text-black">
                    </div>
                </div>
                <div v-if="currentTab === 'Tab1'" class=" w-full flex flex-col gap-5 lg:gap-10 md:flex-row bg-yellow-500 p-3">
                    <div class="md:w-1/3 flex flex-col ">
                        <h1 class="text-white text-4xl font-serif">TIỆN NGHI</h1>
                        <h1 class="text-white text-4xl font-serif self-end">SANG TRỌNG</h1>
                        <img src="/Image/banner1.webp" alt="" class="object-cover">
                    </div>
                    <div class="md:w-1/3 bg-yellow-100 flex flex-col gap-2 justify-center p-4 lg:p-8 lg:my-5">
                        <h1 class="uppercase text-2xl lg:text-4xl font-serif">KHÁCH SẠN</h1>
                        <span class="font-light md:text-sm lg:text-base">Chúng tôi mang lại không gian thư giản và tiện nghi đáp ứng mọi nhu cầu cho bạn.</span>
                        <span class="font-light md:text-sm lg:text-base">Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh. Với hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác...</span>
                    </div>
                    <div class="md:w-1/3 flex flex-col">
                        <img src="/Image/banner2.webp" alt="" class="object-cover">
                    </div>
                </div>
                <div v-if="currentTab === 'Tab2'" class=" w-full flex  flex-col gap-5 lg:gap-10 md:flex-row bg-yellow-500 p-3 ">
                    <div class="md:w-1/3 flex flex-col ">
                        <h1 class="text-white text-4xl font-serif">RỘNG RÃI</h1>
                        <h1 class="text-white text-4xl font-serif self-end">THANH LỊCH</h1>
                        <img src="/Image/banner3.webp" alt="" class="object-cover">
                    </div>
                    <div class="md:w-1/3 bg-yellow-100 flex flex-col gap-2 justify-center p-4 lg:p-8 lg:my-5">
                        <h1 class="uppercase text-2xl lg:text-4xl font-serif">PHÒNG HỌP</h1>
                        <span class="font-light md:text-sm lg:text-base">Chúng tôi mang lại không gian thư giản và tiện nghi đáp ứng mọi nhu cầu cho bạn.</span>
                        <span class="font-light md:text-sm lg:text-base">Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh. Với hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác...</span>
                    </div>
                    <div class="md:w-1/3 flex flex-col">
                        <img src="/Image/banner4.webp" alt="" class="object-cover">
                    </div>
                </div>
                <div v-if="currentTab === 'Tab3'" class="w-full flex flex-col gap-5 lg:gap-10 md:flex-row bg-yellow-500 p-3 ">
                    <div class="md:w-1/3 flex flex-col ">
                        <h1 class="text-white text-4xl font-serif">KHỎE VÀ ĐẸP</h1>
                        <h1 class="text-white text-4xl font-serif self-end">THƯ GIÃN</h1>
                        <img src="/Image/banner5.webp" alt="" class="object-cover">
                    </div>
                    <div class="md:w-1/3 bg-yellow-100 flex flex-col gap-2 justify-center p-4 lg:p-8 lg:my-5">
                        <h1 class="uppercase text-2xl lg:text-4xl font-serif">LÀM ĐẸP</h1>
                        <span class="font-light md:text-sm lg:text-base">Chúng tôi mang lại không gian thư giản và tiện nghi đáp ứng mọi nhu cầu cho bạn.</span>
                        <span class="font-light md:text-sm lg:text-base">Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh. Với hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác...</span>
                    </div>
                    <div class="md:w-1/3 flex flex-col">
                        <img src="/Image/banner6.webp" alt="" class="object-cover">
                    </div>
                </div>
            </div>
        </div>
        <!-- blog -->
         <div class="w-full md:h-[60vh] lg:h-[90vh]">
            <div class="flex flex-col items-center w-full p-2 mx-auto lg:p-6">
                <h1 class="uppercase text-3xl font-medium border-b-2 border-black">HIỂU BIẾT KHÁCH SẠN</h1>
                <div class="flex gap-5 py-4">
                    <div class="w-1/3 relative flex flex-col">
                        <img src="/Image/blog1.webp" alt="" title="10 xu hướng thịnh hành trong ngành khách sạn 2022" class="object-cover">
                        <div class="md:absolute md:w-[calc(100%-40px)] self-center bg-gray-100 shadow-2xl md:top-28 lg:top-40 p-3 rounded-md text-center">
                            <h1 class="text-lg lg:text-xl line-clamp-2 font-medium text-ellipsis overflow-hidden">10 xu hướng thịnh hành trong ngành khách sạn 2022</h1>
                            <div class="my-2 hidden lg:line-clamp-3 text-ellipsis overflow-hidden">Không gian ngoài trời mở rộng hơn, nâng cấp công nghệ để hạn chế tối đa tiếp xúc là những xu hướng mới nhiều khách...</div>
                            <div class="lg:flex justify-between my-4 text-xs lg:text-sm">
                                <p>By Bean Hotel</p>
                                <p>06/12/2022</p>
                            </div>
                            <button class="hidden lg:flex absolute p-2 bg-yellow-600 text-white -right-5 -bottom-5">Đọc thêm</button>
                        </div>
                    </div>
                    <div class="w-1/3 relative flex flex-col">
                        <img src="/Image/blog2.webp" alt="" title="Những điều kiêng kị khi ở khách sạn mà bạn nên biết" class="object-cover">
                        <div class="md:absolute md:w-[calc(100%-40px)] self-center bg-gray-100 shadow-2xl md:top-28 lg:top-40 p-3 rounded-md text-center">
                            <h1 class="text-lg lg:text-xl font-medium line-clamp-2 text-ellipsis overflow-hidden">Những điều kiêng kị khi ở khách sạn mà bạn nên biết</h1>
                            <h1 class="my-2 hidden lg:line-clamp-3 text-ellipsis overflow-hidden">Để không gặp nhiều phiền toái và giữ an toàn cho chính bản thân trong mỗi chuyến đi, bạn nên cẩn thận tìm hiểu một...</h1>
                            <div class="lg:flex justify-between my-4 text-xs lg:text-sm">
                                <p>By Bean Hotel</p>
                                <p>06/12/2022</p>
                            </div>
                            <button class="hidden lg:flex absolute p-2 bg-yellow-600 text-white -right-5 -bottom-5">Đọc thêm</button>
                        </div>
                    </div>
                    <div class="w-1/3 relative flex flex-col">
                        <img src="/Image/blog3.webp" alt="" title="Ý nghĩa việc khách sạn để chocolate lên gối khi dọn..." class="object-cover">
                        <div class="md:absolute md:w-[calc(100%-40px)] self-center bg-gray-100 shadow-2xl md:top-28 lg:top-40 p-3 rounded-md text-center">
                            <h1 class="text-lg line-clamp-2 font-medium text-ellipsis overflow-hidden">Ý nghĩa việc khách sạn để chocolate lên gối khi dọn...</h1>
                            <div class="my-2 hidden lg:line-clamp-3 text-ellipsis overflow-hidden">Các quản lý khách sạn phát hiện ra dịch vụ này nhận được nhiều lời khen từ khách thuê phòng hơn bất kỳ hoạt động...</div>
                            <div class="lg:flex justify-between my-4 text-xs lg:text-sm">
                                <p>By Bean Hotel</p>
                                <p>06/12/2022</p>
                            </div>
                            <button class="hidden lg:flex absolute p-2 bg-yellow-600 text-white -right-5 -bottom-5">Đọc thêm</button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>
<script>
import ProductItem from '@/components/ProductItem.vue'
export default {
    name:"HomeView",
    components:{
        ProductItem
    },
    data() {
    return {
      currentTab: 'Tab1',
      showPopupView:false,
      showPopupCart:false
    };
  },
  methods:{
    PopupView(){
        this.showPopupView=true
    },
    Addtocart(){
        this.showPopupView=false
        this.showPopupCart=true
    }
  }
}
</script>
<style scoped>

</style>