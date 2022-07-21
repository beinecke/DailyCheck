<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>
