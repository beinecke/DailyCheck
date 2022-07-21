<template>
  <check-list />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import CheckList from '../components/CheckList.vue';

export default defineComponent({
  name: 'DayView',

  components: {
    CheckList,
  },
});
</script>
