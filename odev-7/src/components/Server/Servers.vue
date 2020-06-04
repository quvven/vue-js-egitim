<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="index in servers" :key="index">
        Sunucu #{{ index.id }}
        / {{ index.name }}
        - Durum : {{ index.status }}

        <button @click="setNormal(index.id)">Normale Çek</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data : function () {
      return {
        servers: [
          {id: 1, name:"Dell R730", status: "Uyarı"},
          {id: 2, name:"Dell R710", status: "Pasif"},
          {id: 3, name:"HP Gen8", status: "Kritik"},
          {id: 4, name:"HP Gen9", status: "Problem"}
        ]
      }
    },
    methods: {
      setNormal(serverId) { 
        this.servers = this.servers.map((item, key)=>{
          if(item.id===serverId) { item.status="Normal"; }
          return item;
        });
      }
    }
  }
</script>