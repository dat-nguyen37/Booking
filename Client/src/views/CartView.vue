<template>
    <div class="w-full">
        <div class="flex w-full bg-gray-100 h-14 px-5 ">
            <ul class="flex items-center gap-3 text-sm text-gray-500">
                <li><a href="/" class="hover:text-yellow-600">Trang chủ </a></li>
                <li><a href="" class="hover:text-yellow-600">
                    <font-awesome-icon icon="fa-angle-right"/>
                    Giỏ hàng
                </a></li>
            </ul>
        </div>
        <div class="p-2 lg:p-6">
            <div class=" p-2 bg-gray-100 text-gray-600">
                <h1 class="font-bold">GIỎ HÀNG CỦA BẠN</h1>
            </div>
            <div class="grid grid-cols-12 py-2 gap-5">
                <div class="col-span-12 md:col-span-7 lg:col-span-9">
                    <table class="w-full border table">
                        <thead class="w-full text-gray-600 border">
                            <tr class="w-full hidden lg:table-row text-xs lg:text-base font-bold">
                                <th class="p-2 text-left">THÔNG TIN SẢN PHẨM</th>
                                <th class="p-2 text-left">ĐƠN GIÁ</th>
                                <th class="p-2 text-left">SỐ LƯỢNG</th>
                                <th class="p-2 text-left">THÀNH TIỀN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-sm lg:text-base">
                                <td class="flex items-center gap-3 p-3">
                                    <img src="/Image/food/1.webp" alt="" class="w-16 h-16 object-cover">
                                    <div class="text-sm">
                                        <p class="font-bold text-gray-600">Bún bò - heo hbjhj hjb</p>
                                        <p class="hover:text-yellow-500 cursor-pointer hidden lg:block">Xóa</p>
                                        <div class="flex lg:hidden">
                                            <button class="w-6 h-6 border">-</button>
                                            <input type="number" class="w-6 h-6 border" min="1" value="1">
                                            <button class="w-6 h-6 border">+</button>
                                        </div>
                                    </div>
                                </td>
                                <td class=" text-red-500 font-bold p-2">
                                    80.000₫
                                    <p class="text-yellow-500 cursor-pointer lg:hidden">Xóa</p>
                                </td>
                                <td class="p-2 hidden lg:table-cell">
                                    <button class="w-6 h-6 border">-</button>
                                    <input type="number" class="w-6 h-6 border" min="1" value="1">
                                    <button class="w-6 h-6 border">+</button>
                                </td>
                                <td class="text-red-500 font-bold p-2 hidden lg:table-cell">80.000₫</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="py-2 flex flex-col lg:flex-row gap-3 justify-between">
                        <a href="/" class="bg-gray-900 p-2 rounded-lg text-center text-white uppercase font-normal lg:normal-case lg:text- lg:bg-transparent lg:text-black lg:hover:text-yellow-500 order-2 lg:order-1">Tiếp tục mua hàng</a>
                        <div class="flex flex-col gap-3 order-1 lg:order-2">
                            <div class="flex justify-between gap-20 text-sm lg:text-base">
                                <p class="font-medium">TỔNG TIỀN:</p>
                                <p class="text-red-500 font-bold">85.000₫</p>
                            </div>
                            <div class="bg-yellow-500 border border-yellow-500 cursor-pointer rounded-lg hover:text-yellow-500 hover:bg-white p-2 text-white font-normal text-center">THANH TOÁN</div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-5 lg:col-span-3 py-5">
                    <div class="relative border border-yellow-500 p-3 pt-8 rounded-xl bg-gray-100">
                        <div class="flex items-center justify-center border bg-gray-100 border-yellow-500 p-1 w-40 rounded-xl gap-2 absolute -top-4">
                            <img src="/icon/gif.webp" alt="" class="w-6 h-6 object-cover opacity-80">
                            <p class="uppercase text-yellow-500">MÃ GIẢM GIÁ</p>
                        </div>
                        <div class="flex flex-col gap-3">
                            <div class="p-1 bg-white flex flex-col gap-1">
                                <div class="flex justify-between">
                                    <p class="font-bold text-yellow-500">10% OFF</p>
                                    <img src="/icon/coupon1_value_img.webp" alt="" class="w-10 h-5">
                                </div>
                                <p class="text-sm">Giảm <strong>10%</strong> cho đơn hàng từ <strong>500k.</strong></p>
                                <div class="flex justify-between items-center bg-gray-100">
                                    <p class="p-1 w-full font-bold text-gray-500">BHOTEL10</p>
                                    <button @click="copyToClipboard('BHOTEL10')" class="w-16 p-1 rounded-md text-sm bg-yellow-500 text-white">
                                        {{couponCode=="BHOTEL10" ?"copied!":"copy"}}
                                    </button>
                                </div>
                            </div>
                            <div class="p-1 bg-white flex flex-col gap-1">
                                <div class="flex justify-between">
                                    <p class="font-bold text-yellow-500">10% OFF</p>
                                    <img src="/icon/coupon2_value_img.webp" alt="" class="w-10 h-5">
                                </div>
                                <p class="text-sm">Giảm <strong>15%</strong> cho đơn hàng từ <strong>900k.</strong></p>
                                <div class="flex justify-between items-center bg-gray-100">
                                    <p class="p-1 w-full font-bold text-gray-500">BHOTEL15</p>
                                    <button @click="copyToClipboard('BHOTEL15')" class="w-16 p-1 rounded-md text-sm bg-yellow-500 text-white">
                                        {{couponCode=="BHOTEL15" ?"copied!":"copy"}}
                                    </button>
                                </div>
                            </div>
                            <div class="p-1 bg-white flex flex-col gap-1">
                                <div class="flex justify-between">
                                    <p class="font-bold text-yellow-500">FREESHIP</p>
                                    <img src="/icon/coupon3_value_img.webp" alt="" class="w-10 h-5">
                                </div>
                                <p class="text-sm"><strong>Freeship </strong> cho đơn hàng từ <strong>nội thành.</strong></p>
                                <div class="flex justify-between items-center bg-gray-100">
                                    <p class="p-1 w-full font-bold text-gray-500">BHOTELFREE</p>
                                    <button @click="copyToClipboard('BHOTELFREE')" class="w-16 p-1 rounded-md text-sm bg-yellow-500 text-white">
                                        {{couponCode=="BHOTELFREE" ?"copied!":"copy"}}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    name:"CartView",
    data() {
        return {
        couponCode: ''
        }
    },
    methods: {
        async copyToClipboard(text) {
            await navigator.clipboard.writeText(text);
            this.couponCode=text
        }
    }
}
</script>