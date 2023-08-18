<template>
  <div class="prop-route">
    <h1>This is a prop route page</h1>
    <p>{{ this.$route.params }}</p>
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "PropRouteView",
  props: {
    id: Number,
  },
};
</script>
