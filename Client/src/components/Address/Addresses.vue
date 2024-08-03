<template>
    <div class="w-full">
        <div v-if="modalCreate || modalEdit"  class=" fixed flex justify-center items-center z-20 inset-0 bg-black bg-opacity-50 h-[100vh] m-0">
            <!-- <font-awesome-icon icon="spinner" spin class="text-7xl text-white"/> -->
            <CreateAddress v-if="modalCreate" @hideModal="hide"/>
            <EditAddress v-if="modalEdit" @hideModal="hide"/>
        </div>
        <h1 class="text-xl font-bold">Địa chỉ của bạn <div class="border-b-4 border-yellow-500 w-14"></div></h1>
        <div class="py-2 gap-2">
            <button @click="showModalCreate" class="p-2 my-2 bg-yellow-800 text-white font-medium hover:opacity-75">Thêm địa chỉ</button>
            <div class="border-t py-2 flex justify-between">
                <div class="text-sm">
                    <p><strong class="mr-2">Họ tên: </strong>datchienhoang <span class="text-xs text-green-500 px-2">Địa chỉ mặc định</span></p>
                    <p><strong class="mr-2">Địa chỉ: </strong>nghean, Xã Thạch Trị, Huyện Thạch Hà, Hà Tĩnh, Vietnam</p>
                    <p><strong class="mr-2">Số điện thoại: </strong>3994934</p>
                    <p><strong class="mr-2">Công ty: </strong>dsds</p>
                </div>
                <div class="px-10 flex items-center gap-5">
                    <p @click="showModalEdit" class="text-red-500 cursor-pointer hover:text-black">Sửa</p>
                    <p class="text-blue-500 cursor-pointer hover:text-black">Xóa</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CreateAddress from './CreateAddress.vue'
import EditAddress from './EditAddress.vue'

export default{
    name:"AddressView",
    components:{CreateAddress,EditAddress},
    data(){
        return{
            modalCreate:false,
            modalEdit:false
        }
    },
    methods:{
        showModalCreate(){
            this.modalCreate=true
        },
        showModalEdit(){
            this.modalEdit=true
        },
        hide(){
            this.modalCreate=false
            this.modalEdit=false
        }
    }
}
</script>