<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <h4>Girdiğiniz Bilgier</h4>
                        </div>
                        <div class="panel-body">
                            <text-input v-model="userData.isim"></text-input>
                            <div class="form-group">
                                <label for="eposta">E Posta</label>
                                <input type="email" id="eposta" v-model="userData.eposta" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="parola">Parola</label>
                                <input type="password" id="parola" v-model="userData.parola" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="cinsiyet">Cinsiyet</label>
                                <select id="cinsiyet" v-model="userData.cinsiyet" class="form-control">
                                    <option value="kadin">Kadın</option>
                                    <option value="erkek">Erkek</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-sm btn-primary" @click.prevent="submit">Kaydet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmited">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h4>Girdiğiniz Bilgier</h4>
                    </div>
                    <div class="panel-body">
                        <p>Tam Ad: {{ userData.isim }}</p>
                        <p>E-mail: {{ userData.eposta }}</p>
                        <p>Şifre: {{ userData.parola }}</p>
                        <p>Cinsiyet: {{ userData.cinsiyet }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TextInput from './TextInput';

    export default {
        components: {
            textInput: TextInput
        },
        data: function () {
            return {
                userData: {
                    isim: '',
                    eposta: '',
                    parola: '',
                    cinsiyet: '',
                    isSubmited: false
                }
            }
        },
        methods: {
            submit() {
                this.isSubmited=true;
            }
        }
    }
</script>

<style>
</style>
