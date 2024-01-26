<template>
    <section class="jumbotron text-center">
        
        <img src="/img/foto.png" alt="Indra Budi Darma" width="200" class="rounded-circle img-thumbnail"></img>
        <h1 id="section">{{namaDepan}} {{ namaBelakang }}</h1>
        <p class="lead">VueJS Programmer</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1"
                d="M0,256L34.3,229.3C68.6,203,137,149,206,144C274.3,139,343,181,411,197.3C480,213,549,203,617,197.3C685.7,192,754,192,823,208C891.4,224,960,256,1029,272C1097.1,288,1166,288,1234,266.7C1302.9,245,1371,203,1406,181.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
            </path>
        </svg>

    </section>
    <input v-on:input="ubahNamaDepan" v-bind:value="inputValueNamaDepan" placeholder="nama depan" />
    <input v-on:input="ubahNamaBelakang" v-bind:value="inputValueNamaBelakang"placeholder="nama belakang" />
    <button v-on:click="klikSubmit">Submit</button>
    
</template>

<script>
export default{
    data() {
        return{
          namaDepan: "Badenk",
        namaBelakang: "Darma",
        inputValueNamaDepan:"",
        inputValueNamaBelakang: ""
        }
    },
    methods: {
        ubahNamaDepan(event) {
          this.inputValueNamaDepan = event.target.value
        //console.log(event.target.value)  
        },
        ubahNamaBelakang(event) {
          this.inputValueNamaBelakang = event.target.value
        },
        klikSubmit(event) {
            this.namaDepan = this.inputValueNamaDepan
            this.namaBelakang = this.inputValueNamaBelakang
        }
 }
}
</script>
