<template>
    <div>
        <div v-if="brand==='room'" class="flex flex-col min-w-56 sm:min-w-full h-[22rem] bg-white border">
        <img src="/Image/room/1.webp" alt="" class="w-full h-44 object-cover">
        <div class="flex flex-col h-44 items-center justify-between p-2">
            <p class="py-2 font-normal ">PHÒNG ĐƠN TIÊU CHUẨN</p>
            <div class="flex justify-center gap-5 text-xl py-2">
                <font-awesome-icon icon="coffee"/>
                <font-awesome-icon icon="bath"/>
                <font-awesome-icon icon="wifi"/>
            </div>
            <hr class="w-32 h-2 text-black">
            <p>02 Khách &nbsp; 25m²</p>
            <div class="flex w-full justify-between">
                <p class="text-red-500">950.000₫/Đêm</p>
                <router-link :to="{name:'productdetail',params:{brand:brand,id:'PHÒNG ĐƠN TIÊU CHUẨN'}}" class="bg-red-600 text-white p-1">Đặt phòng</router-link>
            </div>
        </div>
        </div>
        <div v-if="brand==='menu'" class="relative group flex flex-col h-[16rem] md:h-[20rem] lg:h-[16rem] bg-white border shadow">
            <router-link :to="{name:'productdetail',params:{brand:brand,id:'Bún bò - heo'}}" class="w-full h-[calc(100%-4rem)]"><img src="/Image/food/8.webp" alt="" class="w-full h-full object-cover"></router-link>
            <div class="absolute right-0 m-4 hidden  md:group-hover:flex flex-col gap-2 text-white text-2xl">
                <button class="w-14 h-14 rounded-full bg-yellow-500 hover:bg-red-500">
                    <font-awesome-icon icon="shopping-cart"/>
                </button>
                <button @click="PopupView()" class="w-14 h-14 rounded-full bg-yellow-500 hover:bg-red-500"><font-awesome-icon icon="eye"/></button>
            </div>
            <div class="flex flex-col h-[4rem] p-2">
                <p class="font-normal uppercase">Bún bò - heo</p>
                    <p class="font-bold text-red-500">80.000₫</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ProductItem",
    props:['brand'],
    methods:{
        PopupView(){
            this.$emit("show-popup-view")
        }
    }
}
</script>