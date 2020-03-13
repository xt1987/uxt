<template>
    <form @submit="submit">
        a:
        <input
            name="a"
            type="text"
        />
        b:
        <input
            name="b"
            type="text"
        />
        <button form-type="submit">提交</button>
    </form>
</template>

<script>
export default {
    methods: {
        submit(e) {
            console.log(e)
        }
    }
}
</script>

<style>
</style>
