<template>
  <v-container>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
      <v-datetime-picker
        label="Select Datetime"
        v-model="datetime">
      </v-datetime-picker>
      <div v-for="item in checklist" v-bind:key="item.event_id" class="check-list-item">
        <v-checkbox
          v-model="item.checked"
          :label="item.event_name"
          :color="item.color"
          hide-details="auto"
        ></v-checkbox>
        <v-textarea
          class="event_comment"
          v-model="item.comment"
          auto-grow
          rows="1"
          hide-details="auto"
        ></v-textarea>
      </div>
      <div style="text-align: center;margin-top: 20px">
        <v-btn
          color="success"
          icon="mdi-format-list-bulleted-square"
          size="x-large"
          @click="fAddCheck"
        ></v-btn>
      </div>
      </v-form>
  </v-container>
</template>

<script lang='ts'>

import { defineComponent } from 'vue'
import axios from 'axios';


export default defineComponent({
  name: 'CheckList',
  data (){
    return {
      checklist: [],
      datetime: new Date(),
      colors: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3']
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData() {
      axios.get('/checklist').then((res: any) => {
        console.log('res.data.data.items', res.data.data.items)
        this.checklist = res.data.data.items
      })
    },
    fAddCheck() {
      var obj = {
        event_id: "",
        event_name: "",
        checked: false,
        comment: "",
        color: "indigo",
      }
      this.checklist.push(obj)
    }
  }
})
</script>
<style>
  /*.check-list-item .event_comment{*/
    /*margin-left: 30px;*/
  /*}*/
  /*.check-list-item .event_comment .v-field{*/
    /*font-size: 14px;*/
  /*}*/
  /*.check-list-item .event_comment .v-field__field{*/
    /*padding-top: 0;*/
    /*min-height: 30px;*/
  /*}*/
</style>