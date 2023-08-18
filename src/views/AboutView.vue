<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Demo with programatic routing</h2>
    <h3>With ID</h3>
    <div v-for="x in users" :key="x.id">
      <div :data-clickid="x.id" @click="handleCustomRouteId(x.id)">
        {{ x.name }}
      </div>
    </div>
    <h3>With Event</h3>
    <div v-for="x in users" :key="x.id">
      <div :data-clickid="x.id" @click="handleCustomRouteEvent">
        {{ x.name }}
      </div>
    </div>
    <h2>Demo with users list</h2>
    <div v-for="x in users" :key="x.id">
      <router-link :to="'/demo/' + x.id">User {{ x.id }}</router-link>
    </div>
    <h2>Demo with just numbers array</h2>
    <div v-for="x in [1, 2, 3, 4, 5, 6, 7]" :key="x">
      <router-link :to="'/demo/' + x">User {{ x }}</router-link>
    </div>
  </div>
  <h1>Router Push</h1>
  <div class="test" v-for="user in users" :key="user.id">
    <div :data-iddd="user.id" @click="handleClick(user.id)">
      {{ user.username }}
    </div>
  </div>

  <h1>User Array</h1>
  <div class="test" v-for="user in users" :key="user.id">
    <router-link :to="'/user/' + user.id">
      <h3>User: {{ user.id }}</h3>
      <h3>{{ user.username }}</h3>
    </router-link>
  </div>

  <h1>Number Array</h1>
  <div v-for="x in [1, 2, 3, 4]" :key="x">
    <router-link :to="'/user/' + x">
      <h3>User: {{ x }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      users: [
        {
<<<<<<< HEAD
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
=======
          id: 1,
          name: "John Doe",
        },
        {
          id: 2,
          name: "Jane Doe",
        },
        {
          id: 3,
          name: "Juan Dela Cruz",
>>>>>>> f959e090849d2addfec35312ef66ec5c6305bc15
        },
      ],
    };
  },
  methods: {
<<<<<<< HEAD
    handleClick(x) {
      this.$router.push("/user/" + x);
    },

    handleClickEvent(event) {
      console.log(event.target);
      this.$router.push({ path: `/user/${event.target.dataset.iddd}` });
=======
    handleCustomRouteId(id) {
      this.$router.push("/demo/" + id);
    },
    handleCustomRouteEvent(event) {
      console.log(event.target);
      const id = event.target.dataset.clickid;
      // this.$router.push("/demo/" + id);
      for (let x of this.users) {
        if (x.id == id) {
          this.$router.push({ name: "demo", params: { id, name: x.name } });
          return;
        }
      }
>>>>>>> f959e090849d2addfec35312ef66ec5c6305bc15
    },
  },
};
</script>
