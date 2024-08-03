<template>
    <div class="flex flex-col gap-5">
        <div class="flex flex-col lg:flex-row justify-between gap-5">
            <h1 class="text-xl font-bold">Chi tiết đơn hàng  #1003<div class="border-b-4 border-yellow-500 w-14"></div></h1>
            <p class="text-sm">Ngày tạo: 21/ 07/ 2024</p>
        </div>
        <div class="flex flex-col lg:flex-row text-sm gap-5">
            <p>Trạng thái thanh toán:<em class="font-bold text-red-500">Chưa thanh toán</em></p>
            <p>Trạng thái vận chuyển: <em class="font-bold">Chưa chuyển</em></p>
        </div>
        <div class="lg:grid grid-cols-12 gap-5">
            <div class="col-span-6">
                <h1 class="text-xl">Địa chỉ giao hàng</h1>
                <div class="border py-2 px-4 text-sm min-h-24 rounded-md">
                    <strong class="uppercase">Tuấn Đạt Nguyễn</strong>
                    <p>Địa chỉ: , Quận Ba Đình, Hà Nội</p>
                </div>
            </div>
            <div class="col-span-3">
                <h1 class="text-xl">Thanh toán</h1>
                <div class="border py-2 px-4 text-sm min-h-24 rounded-md">
                    <p>Thanh toán khi giao hàng (COD)</p>
                </div>
            </div>
            <div class="col-span-3">
                <h1 class="text-xl">Ghi chú</h1>
                <div class="border py-2 px-4 text-sm min-h-24 rounded-md">
                    <p>Không có ghi chú</p>
                </div>
            </div>
        </div>
        <div class="border p-2 flex flex-col gap-3">
            <table class="table w-full">
                <thead class="hidden lg:table-header-group">
                    <tr class="border-b">
                        <td class="p-2">Sản phẩm</td>
                        <td class="p-2">Đơn giá</td>
                        <td class="p-2">Số lượng</td>
                        <td class="p-2">Tổng</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b">
                        <td class="p-2 flex items-center gap-5">
                            <img src="/Image/food/1.webp" alt="" class="w-10 h-10 object-cover">
                            <div class="flex flex-col">
                                <span>Mì xào bò</span>
                                <span class="lg:hidden">x19</span>
                            </div>
                        </td>
                        <td class="p-2 hidden lg:table-cell">80.000₫</td>
                        <td class="p-2 hidden lg:table-cell">19</td>
                        <td class="p-2 ">1.520.000₫</td>
                    </tr>
                </tbody>
            </table>
            <table class="flex justify-end">
                <tfoot>
                    <tr>
                        <td class="w-2/4">Khuyến mại</td>
                        <td>0₫</td>
                    </tr>
                    <tr>
                        <td class="w-2/4">Phí vận chuyển</td>
                        <td>40.000₫ (Giao hàng tận nơi)</td>
                    </tr>
                    <tr>
                        <td class="w-2/4">Tổng tiền</td>
                        <td class="font-bold text-red-500">1.560.000₫</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<script>
export default{
    name:"OrderDetail"
}
</script>