<template>
    <div v-if="success || error" :class="success ? 'bg-blue-100 border border-blue-400 text-blue-700' : 'bg-red-100 border border-red-400 text-red-700'" class=" px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">{{ success ? 'Success!' : 'Error!' }}</strong>
        <span class="block sm:inline">{{ success || error }}</span>
        <span @click="CloseAlert" class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg :class="success ? 'text-blue-500' : 'text-red-500'" class="fill-current h-6 w-6" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
    </div>
</template>
<script>
export default {
    name:"AlertMessage",
    props:["success","error"],
    watch: {
        success(newVal) {
            if (newVal) {
                this.autoCloseAlert();
            }
        },
        error(newVal) {
            if (newVal) {
                this.autoCloseAlert();
            }
        }
    },
    methods: {
        autoCloseAlert() {
            setTimeout(() => {
                this.CloseAlert();
            }, 3000);
        },
        CloseAlert() {
            this.$emit('hideAlert', '');
        }
    }
    
}
</script>