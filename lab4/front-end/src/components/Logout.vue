<template>
    <div></div>
</template>

<script>
    export default {
        name: "Logout",
        created() {
            this.$store.dispatch('logoutUser')
                .then(() => {
                    this.$router.push({name: 'Home'})
                })
        }
    }
</script>

