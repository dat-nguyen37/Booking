<template>
    <div class="w-full">
        <div class="flex w-full bg-gray-100 h-14 px-5 ">
            <ul class="flex items-center gap-3 text-sm text-gray-500">
                <li><a href="/" class="hover:text-yellow-600">Trang chủ </a></li>
                <li><a href="" class="hover:text-yellow-600">
                    <font-awesome-icon icon="fa-angle-right"/>
                    Tìm kiếm
                </a></li>
            </ul>
        </div>
        <div class="p-2 lg:p-6">
            <h1 class="text-2xl font-medium my-3">Có 5 kết quả tìm kiếm phù hợp</h1>
            <div class=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <ProductItem :brand="'menu'"/>
                <ProductItem :brand="'menu'"/>
                <ProductItem :brand="'menu'"/>
                <ProductItem :brand="'menu'"/>
                <ProductItem :brand="'menu'"/>
                <ProductItem :brand="'menu'"/>
                <ProductItem :brand="'menu'"/>
                <ProductItem :brand="'menu'"/>
            </div>
        </div>
    </div> 
</template>
<script>
import ProductItem from '@/components/ProductItem.vue'
export default {
    name:"SearchView",
    components:{ProductItem}
}
</script>