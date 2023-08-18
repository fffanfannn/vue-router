<template>
  <div class="about">
    <h1>This is an USER page</h1>
    <div>User params from path: {{ $route.params }}</div>
    <div>User params.id from path: {{ $route.params.id }}</div>

    <h2>{{ singleUser }}</h2>
    <h2>{{ singleUser.id }}</h2>
    <h2>{{ singleUser.username }}</h2>
    <!-- <h2>{{ user }}</h2> -->
  </div>
</template>

<script>
// import sourceData from "@/data.json";

const sourceData = {
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

export default {
  computed: {
    // singleUserID() {
    //   return this.$route.params.id;
    // },

    singleUser() {
      for (let user of sourceData.users) {
        if (user.id == this.$route.params.id) {
          return user;
        }
      }
      return { error: "user not found" };

      // console.log(sourceData.users);
      // console.log(sourceData.users[0]);
      // console.log(1);
      // return sourceData.users.find((user) => user.id === this.$route.params.id);
    },
  },
};
</script>
