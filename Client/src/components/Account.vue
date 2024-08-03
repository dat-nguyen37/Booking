<template>
    <div>
        <h1 class="text-xl font-bold">Thông tin tài khoản<div class="border-b-4 border-yellow-500 w-14"></div></h1>
        <div class="py-2 flex flex-col gap-4">
            <p><strong class="mr-2">Họ tên:</strong>{{ $store.state.user.username }}</p>
            <p><strong class="mr-2">Email:</strong>{{ $store.state.user.email }}</p>
            <p><strong class="mr-2">Điện thoại:</strong>{{ $store.state.user.phone }}</p>
            <p><strong class="mr-2">Địa chỉ :</strong>{{ $store.state.user.address }}</p>
        </div>
    </div>
</template>

<script>
export default{
    name:"AccountView"
}
</script>