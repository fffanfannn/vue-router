<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>ssssssss</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  // name: "HomeView",
  // components: {
  //   HelloWorld,
  // },
  data() {
    return {
      users: [
        {
          id: "1",
          username: "aaa",
        },
        {
          id: "2",
          username: "bbb",
        },
        {
          id: "3",
          username: "ccc",
        },
        {
          id: "4",
          username: "ddd",
        },
      ],
    };
  },
};
</script>
