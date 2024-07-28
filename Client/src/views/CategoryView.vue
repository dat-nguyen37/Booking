<template>
    <div class="w-full">
        <div class="flex w-full bg-gray-100 h-14 px-5 ">
            <ul class="flex items-center gap-3 text-sm text-gray-500">
                <li><a href="/" class="hover:text-yellow-600">Trang chủ </a></li>
                <li><a href="" class="hover:text-yellow-600">
                    <font-awesome-icon icon="fa-angle-right"/>
                    Phòng
                </a></li>
            </ul>
        </div>
        <div class="p-2 lg:p-6">
            <div class="flex justify-between p-2 bg-gray-100 text-gray-600">
                <h1 class="font-bold">PHÒNG</h1>
                <div class="flex items-center">
                    <font-awesome-icon :icon="['fas', 'sort-amount-down']" />
                    <p>Sắp xếp:</p>
                    <select name="" id="" class="outline-none bg-gray-100">
                        <option value="">Mặc định</option>
                        <option value="">A->Z</option>
                        <option value="">Z->A</option>
                        <option value="">Giá tăng dần</option>
                        <option value="">Giá giảm dần</option>
                    </select>
                </div>
            </div>
            <div class=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-2">
                <ProductItem :brand="'room'"/>
                <ProductItem :brand="'room'"/>
                <ProductItem :brand="'room'"/>
                <ProductItem :brand="'room'"/>
                <ProductItem :brand="'room'"/>
                <ProductItem :brand="'room'"/>
                <ProductItem :brand="'room'"/>
                <ProductItem :brand="'room'"/>
            </div>
            <div class="flex justify-end py-2">
                <div class="flex gap-1">
                    <div class="w-8 h-8 border border-yellow-500 bg-yellow-500 rounded-lg text-white flex justify-center items-center">1</div>
                    <div class="w-8 h-8 border border-yellow-500  rounded-lg  flex justify-center items-center">2</div>
                    <div class="w-8 h-8 border border-yellow-500  rounded-lg  flex justify-center items-center">3</div>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
import ProductItem from '@/components/ProductItem.vue'
export default {
    name:"CategoryView",
    components:{ProductItem}
}
</script>