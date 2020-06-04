<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectedComponent = 'appBlue'" class="btn btn-primary">Mavi Temayı Yükle</button>
                <button @click="selectedComponent = 'appGreen'" class="btn btn-success">Yeşil Temayı Yükle</button>
                <button @click="selectedComponent = 'appRed'" class="btn btn-danger">Kırmızı Temayı Yükle </button>
                <hr>

                <keep-alive>
                  <component :is="selectedComponent">
                    <h1 slot="title">{{ selectedComponent }}</h1>
                    <p slot="content">bu bir denemedir</p>
                    <i>All Right...</i>
                  </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function () {
          return {
            selectedComponent: "appBlue"
          }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {

        }
    }
</script>

<style>
</style>
