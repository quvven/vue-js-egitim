<template>
  <div class="container">
    <h3 class="text-center mt-3">Vuelidate ile Form Kontrolü</h3>
    <div class="d-flex justify-content-center align-content-center flex-row">
      <div class="card p-4 mt-3  shadow">
        <form style="width: 350px" @submit.prevent="onSubmit">
          <div class="form-group">
            <label>E-posta Adresiniz</label>
            <input
              @blur="$v.email.$touch()"
              v-model="email" 
              type="email" 
              class="form-control"
              :class="{'is-invalid': $v.email.$error}"
              placeholder="E-posta adresini giriniz"
            >
            <small class="form-text text-danger" v-if="!$v.email.customRuleAsync">Zaten Kayıtlı!</small>
            <!-- <small class="form-text text-danger" v-if="!$v.email.required">Gerekli</small>
            <small class="form-text text-danger" v-if="!$v.email.customRule">deneme@deneme.com olmalıdır</small>
            <small class="form-text text-danger" v-if="!$v.email.email">E Posta Hatalı</small> -->
          </div>
          <div class="form-group">
            <label>Yaşınız</label>
            <input
              @blur="$v.age.$touch()"
              v-model="age" 
              type="text" 
              class="form-control"
              :class="{'is-invalid': $v.age.$error}"
              placeholder="Yaşınızı giriniz"
            >
            <small class="form-text text-danger" v-if="!$v.age.required">Gerekli</small>
            <small class="form-text text-danger" v-if="!$v.age.numeric">Numerik Olmalıdır!</small>
            <small class="form-text text-danger" v-if="!$v.age.between">
              Yaşınız Uygun Değil!
              {{ $v.age.$params.between.min }} ile {{ $v.age.$params.between.max }} arasında olmalıdır.
              </small>
          </div>
          <div class="form-group">
            <label>Şifre</label>
            <input 
                v-model="$v.password.$model" 
                type="password" 
                class="form-control" 
                :class="{'is-invalid': $v.password.$error}"
                placeholder="Şifrenizi giriniz"
              >
            <small class="form-text text-danger" v-if="!$v.password.required">Gerekli</small>
            <small class="form-text text-danger" v-if="!$v.password.minLength">Minimum {{ $v.password.$params.minLength.min}} karakter</small>
            <small class="form-text text-danger" v-if="!$v.password.maxLength">Maximum {{ $v.password.$params.maxLength.max}} karakter</small>
            <small class="form-text text-danger" v-if="!$v.password.numeric">Numerik Olmalıdır!</small>
          </div>
          <div class="form-group">
            <label>Şifre Tekrar</label>
            <input 
              v-model="$v.repassword.$model"
              type="password"
              class="form-control"
              placeholder="Şifrenizi tekrar giriniz"
              >
            <small class="form-text text-danger" v-if="!$v.repassword.required">Gerekli</small>
            <small class="form-text text-danger" v-if="!$v.repassword.minLength">Minimum {{ $v.repassword.$params.minLength.min}} karakter</small>
            <small class="form-text text-danger" v-if="!$v.repassword.maxLength">Maximum {{ $v.repassword.$params.maxLength.max}} karakter</small>
            <small class="form-text text-danger" v-if="!$v.repassword.numeric">Numerik Olmalıdır!</small>
            <small class="form-text text-danger" v-if="!$v.repassword.sameAs">Parola Eşit Değil!</small>
          </div>
          <div class="form-group">
            <label>Kayıt olmak istediğiniz kategori</label>
            <select v-model="$v.selectedCategory.$model" class="form-control">
              <option v-for="(category, index) in categories" :value="category" :key="index">{{ category }}</option>
            </select>
            
            <small class="form-text text-danger" v-if="!$v.selectedCategory.checked">Sadece Yazılım Seçebilirsin</small>
          </div>

          <a @click="newHobby" class="text-white btn btn-secondary rounded-0 btn-sm">İlgi Alanı Ekle</a>
            <small class="form-text text-danger" v-if="!$v.hobbies.required">Gerekli</small>
            <small class="form-text text-danger" v-if="!$v.hobbies.minLength">Minimum {{ $v.hobbies.$params.minLength.min}} ilgi alanı</small>

          <ul class="list-group mt-3 mb-3 border-0">
            <li v-for="(hobby,index) in hobbies" class="list-group-item d-flex pl-2" :key="index">
              <input 
                  type="text" 
                  class="form-control mr-2" 
                  v-model="hobby.value"
                  @blur="$v.hobbies.$each[index].value.$touch()"
                  :class="{'is-invalid': $v.hobbies.$each[index].$error}"
                >
              <button class="btn btn-sm btn-danger rounded-0" @click="hobbies.splice(index, 1)">Sil</button>
            </li>
          </ul>

          <p>
            {{ $v.email }}
          </p>
         
          <button class="btn btn-outline-secondary rounded-0" :disabled="$v.$invalid">Kaydet</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

  import {required, email, numeric, minLength, maxLength, sameAs, between, checked} from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        email : null,
        password : null,
        repassword : null,
        selectedCategory : "Yazılım",
        categories : ["Yazılım", "Donanım", "Cloud", "Sunucular", "Unix", "Linux", "Mac OS", "Windows"],
        hobbies: [],
        age: ""
      }
    },
    validations: {
      email: {
        required, email,
        // customRule: value => { // value input içeriği
        //   // return false // hata devam eder
        //   // return true // hata kalmaz
        //   return value==="deneme@deneme.com" ? true : false;
        // },
        customRuleAsync: value => { 
          return new Promise((resolve, reject)=> {
            setTimeout(() => {
              resolve(false)
            }, 1000);
          })
        }
      },
      password: {
        required, numeric,
        minLength: minLength(6),
        maxLength: maxLength(10)
      },
      repassword: {
        required, numeric,
        minLength: minLength(6),
        maxLength: maxLength(10),
        // sameAs: sameAs('password'),
        sameAs: sameAs(vm => {
          return vm.password + "99" // repassword = password alanı + sonunda 99 olmalıdır...
        })
      },
      age: {
        required, numeric,
        between: between(18, 60)
      },
      selectedCategory: {
        checked(val, vm) {
          return vm.selectedCategory==="Yazılım" ? true : false;
        }
      },
      hobbies: {
        required,
        minLength: minLength(2), // array icin indis sayisi...
        $each: {
          value: {
            required,
            minLength: minLength(8)
          }
        }
      }
    },
    methods: {
      onSubmit(){
        let form = {
          email : this.email,
          password : this.password,
          category : this.category,
          hobbies : this.hobbies,
        }
        console.log(form)
      },
      newHobby(){
        let hobby = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        }
        this.hobbies.push(hobby)
      }
    }
  }
</script>
