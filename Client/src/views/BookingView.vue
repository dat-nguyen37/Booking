<template>
    <div class="w-full">
        <div class="flex w-full bg-gray-100 h-14 px-5 ">
            <ul class="flex items-center gap-3 text-sm text-gray-500">
                <li><a href="/" class="hover:text-yellow-600">Trang chủ </a></li>
                <li><a href="" class="hover:text-yellow-600">
                    <font-awesome-icon icon="fa-angle-right"/>
                    Đặt phòng
                </a></li>
            </ul>
        </div>
        <div class="flex flex-col items-center my-5 gap-4 p-6">
            <h1 class="uppercase font-medium text-3xl">ĐẶT PHÒNG</h1>
            <div class="border-b border-t w-40 h-1 border-black"></div>
            <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div class="w-full relative flex justify-center items-center ">
                    <img src="/Image/banner_booking.webp" alt="" class="w-full object-contain rounded-xl">
                    <div class="absolute w-[80%]  bg-black bg-opacity-60 text-white p-10 rounded-xl text-center">
                        <p class="">Để lại thông tin đặt phòng và chúng tôi sẽ liên hệ bạn sớm nhất có thể. Cảm ơn bạn đã tin tưởng chúng tôi.</p>
                        <p> Bean Hotel trân trọng!</p>
                    </div>
                </div>
                <div class="bg-gray-100 p-4 rounded-lg">
                    <div class="grid grid-cols-2 gap-5">
                        <div class="flex flex-col gap-2">
                            <label for="" class="text-sm text-gray-700">Họ và tên*</label>
                            <input type="text" name="" id="" placeholder="Họ và tên" class="outline-none p-2 rounded-lg">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="" class="text-sm text-gray-700">Số điện thoại*</label>
                            <input type="text" name="" id="" placeholder="Số điện thoại" class="outline-none p-2 rounded-lg">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="" class="text-sm text-gray-700">Ngày nhận</label>
                            <input type="date" name="" id="" :value="formattedDate" placeholder="YYYY-MM-DD" class="outline-none p-2 rounded-lg">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="" class="text-sm text-gray-700">Ngày trả</label>
                            <input type="date" name="" id="" :value="formattedDate" placeholder="YYYY-MM-DD" class="outline-none p-2 rounded-lg">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="" class="text-sm text-gray-700">Số người</label>
                            <input type="text" name="" id="" placeholder="Họ và tên" class="outline-none p-2 rounded-lg">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="" class="text-sm text-gray-700">Chọn phòng</label>
                            <input type="text" name="" id="" placeholder="Họ và tên" class="outline-none p-2 rounded-lg">
                        </div>
                    </div>
                    <div class="bg-yellow-500 text-xl font-bold uppercase text-white p-2 text-center mt-4 rounded-xl border border-yellow-500 hover:text-yellow-500 hover:bg-white cursor-pointer">ÐẶT PHÒNG</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
export default {
    name:"BookingView",
    data() {
    return {
        rawDate: new Date(),
        };
    },
    mounted(){
        console.log(this.formattedDate);
    },
  computed: {
    formattedDate() {
      return moment(this.rawDate).format('YYYY-MM-DD');
    },
  },
}
</script>