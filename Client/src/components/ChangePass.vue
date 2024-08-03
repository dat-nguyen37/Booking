<template>
    <div class="w-full">
        <h1 class="text-xl font-bold">Đổi mật khẩu<div class="border-b-4 border-yellow-500 w-14"></div></h1>
        <div class="py-2 flex flex-col gap-2">
            <div class="flex flex-col md:w-1/2">
                <label for="">Mật khẩu cũ *</label>
                <input type="Password" class="border outline-none p-2">
            </div>
            <div class="flex flex-col md:w-1/2">
                <label for="">Mật khẩu mới *</label>
                <input type="Password" class="border outline-none p-2">
            </div>
            <div class="flex flex-col md:w-1/2">
                <label for="">Xác nhận lại mật khẩu *</label>
                <input type="Password" class="border outline-none p-2">
            </div>
            <button class="p-2 bg-yellow-600 text-white w-1/2 rounded-md border border-yellow-600 hover:text-yellow-600 hover:bg-white">Đặt lại mật khẩu</button>
        </div>
    </div>
</template>

<script>
export default{
    name:"ChangePassView"
}
</script>