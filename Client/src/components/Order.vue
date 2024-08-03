<template>
    <div>
        <h1 class="text-xl font-bold">Đơn hàng của bạn<div class="border-b-4 border-yellow-500 w-14"></div></h1>
        <div class="py-2">
            <table class="w-full table border">
                <thead class="bg-yellow-800 text-sm">
                    <tr>
                        <th class="text-white border border-white p-2">Đơn hàng</th>
                        <th class="text-white border border-white p-2">Ngày</th>
                        <th class="text-white border border-white p-2 hidden lg:table-cell">Địa chỉ</th>
                        <th class="text-white border border-white p-2">Giá trị đơn hàng</th>
                        <th class="text-white border border-white p-2">TT thanh toán</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <td class="border p-2 text-blue-500 hover:text-black"><a href="/Account/orders/dds">#1003</a></td>
                        <td class="border p-2">21/07/2024</td>
                        <td class="border p-2 hidden lg:table-cell">Quận Ba Đình, Hà Nội, Vietnam</td>
                        <td class="border p-2">1.560.000₫</td>
                        <td class="border p-2">Chưa thu tiền</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default{
    name:"OrderView"
}
</script>