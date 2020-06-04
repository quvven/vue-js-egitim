<template>
    <div class="form-group">
        <label for="isim">İsim</label>
        <input type="text" :value="text" @input="changeText($event)" id="isim" class="form-control" />
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            text: ''
        }
    },
    methods: {
        changeText(e) {
            this.$emit('input', e.target.value);
        }
    }

}
</script>

<style>

</style>