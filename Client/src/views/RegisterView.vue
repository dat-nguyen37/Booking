<template>
    <div class="w-full">
        <AlertMessage :success="messageSuccess" :error="messageError" @hideAlert="hide"/>
        <div v-if="$store.state.loading"  class="fixed flex justify-center items-center z-20 inset-0 bg-black bg-opacity-50 h-[100vh] w-[100vw]">
            <font-awesome-icon icon="spinner" spin class="text-7xl text-white"/>
        </div>
        <div class="flex w-full bg-gray-100 h-14 px-5 ">
            <ul class="flex items-center gap-3 text-sm text-gray-500">
                <li><a href="/" class="hover:text-yellow-600">Trang chủ </a></li>
                <li><a href="" class="hover:text-yellow-600">
                    <font-awesome-icon icon="fa-angle-right"/>
                    Đăng ký tài khoản
                </a></li>
            </ul>
        </div>
        <div class="flex justify-center p-2 lg:p-6">
            <div class="flex flex-col  w-full md:w-1/2 lg:w-1/3 items-center gap-2 p-4 border shadow-2xl">
                <h1 class="text-2xl uppercase font-medium text-yellow-500">ĐĂNG KÝ</h1>
                <p class="text-sm">Đã có tài khoản, đăng nhập <a href="/Login" class="text-yellow-500 hover:text-black">tại đây</a></p>
                <input type="text" v-model="Username" name="Username" class="w-full border outline-none p-2" placeholder="Username" required>
                <input type="Email" v-model="Email" name="Email" class="w-full border outline-none p-2" placeholder="Email" required>
                <input type="Password" v-model="Password" name="Password" class="w-full border outline-none p-2" placeholder="Mật khẩu" required>
                <input type="Tel" v-model="Phone" name="Phone" class="w-full border outline-none p-2" placeholder="Số điện thoại" required>
                <button @click="Register" class="bg-yellow-500 border border-yellow-500 rounded-md w-full py-2 text-lg text-white hover:text-yellow-500 hover:bg-white">ĐĂNG KÝ</button>
                <p class="text-sm">Hoặc đăng nhập bằng</p>
                <div class="w-full flex gap-1 justify-center">
                    <div class="bg-blue-800 text-white text-xm w-32 flex items-center gap-2 cursor-pointer px-2 py-1"><font-awesome-icon :icon="['fab', 'facebook-f']" class="w-10 py-2 border-r border-gray-600"/>Facebook</div>
                    <div class="bg-red-600 text-white text-sm w-32 flex items-center gap-2 cursor-pointer px-2 py-1"><font-awesome-icon :icon="['fab', 'google-plus-g']" class="w-10 py-2 border-r border-gray-600"/>Google</div>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
import axios from 'axios';
import AlertMessage from '../components/Alert.vue'
export default {
    name:"RegisterView",
    components:{AlertMessage},
    data(){
        return{
            messageSuccess:"",
            messageError:"",
            Username:"",
            Email:"",
            Password:"",
            Phone:""
        }
    },
    methods:{
        async Register(){
            this.$store.commit('LOGIN_START')
            try {
                const res=await axios.post('Auth/register',{
                    Username:this.Username,
                    Email:this.Email,
                    Password:this.Password,
                    Phone:this.Phone
                })
                this.messageSuccess=res.data.message
                this.$store.commit('LOGIN_SUCCESS',res.data.user)
                this.$router.push('/')
            } catch (err) {
                if (err.response) {
                // Server trả về phản hồi với mã lỗi (status code) khác 2xx
                    if (err.response.data.errors) {
                        // Nếu có nhiều lỗi xác thực, hiển thị tất cả các lỗi
                        for (const key in err.response.data.errors) {
                            this.messageError += `${err.response.data.errors[key].join(', ')}\n`;
                        }
                    } else {
                        // Hiển thị thông báo lỗi cụ thể từ API
                        this.messageError =err.response.data.message;
                    }
                } else if (err.request) {
                    // Request đã được gửi nhưng không có phản hồi
                    this.messageError ='No response from server. Please try again later.';
                } else {
                    // Đã xảy ra lỗi khi thiết lập request
                    this.messageError =err.message;
                }
                this.$store.commit('LOGIN_FAILURE',this.messageError)
            }
        },
        hide() {
            this.messageSuccess = '';
            this.messageError = '';
        },
    }
}
</script>