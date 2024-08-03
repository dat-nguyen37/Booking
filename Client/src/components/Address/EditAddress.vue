<template>
    <div class="max-w-[calc(100%-20px)] sm:w-[30rem] h-auto bg-white z-50 rounded-lg">
        <div class="flex justify-between p-2 border-b text-xl font-bold">
            <h1>Chỉnh sửa địa chỉ</h1>
            <font-awesome-icon @click="hideModal" :icon="['far', 'times-circle']" class="cursor-pointer hover:text-red-500"/>
        </div>
        <div class="p-2 flex gap-3 flex-wrap">
            <input type="text" placeholder="Họ và tên" class="w-full flex p-2 border outline-none rounded-lg">
            <input type="text" placeholder="Số điện thoại" class="w-full flex p-2 border outline-none rounded-lg">
            <input type="text" placeholder="Công ty" class="w-full flex p-2 border outline-none rounded-lg">
            <input type="text" placeholder="Quốc gia" class="w-full flex p-2 border outline-none rounded-lg">
            <div class="w-full grid grid-cols-3 gap-2">
                <select name="" class="flex p-2 border outline-none rounded-lg">
                    <option selected>Tỉnh thành</option>
                </select>
                <select name="" class="flex p-2 border outline-none rounded-lg">
                    <option selected>Quận huyện</option>
                </select>
                <select name="" class="flex p-2 border outline-none rounded-lg">
                    <option selected>Phường xã</option>
                </select>
            </div>
            <input type="text" placeholder="Địa chỉ" class="w-full flex p-2 border outline-none rounded-lg">
            <label for="checkbox" class="flex gap-2 items-center">
                <input id="checkbox" type="checkbox" value="true">
                <span class="cursor-pointer">Đặt là địa chỉ mặc định?</span>
            </label>
            <div class="w-full flex justify-end text-sm gap-3">
                <div @click="hideModal" class="border p-2 rounded-md hover:bg-gray-600 cursor-pointer">Hủy</div>
                <div class="bg-yellow-700 font-bold text-white p-2 rounded-md hover:opacity-75 cursor-pointer">Chỉnh sửa địa chỉ</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"EditAddress",
    methods:{
        hideModal(){
            this.$emit("hideModal",'')
        }
    }
}
</script>