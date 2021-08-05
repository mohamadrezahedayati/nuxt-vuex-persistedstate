<template>
  <div id="app">
	<p>{{ counter }}</p>
	<p>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
	</p>
    <br />
  <p>{{ myText }}</p>
	<p>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
	</p>
	<small>
    Check out your localStorage to see the updates.
  </small>
</div>

</template>

<script>
export default {
  name: "App",
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    myText() {
console.log(this.$store.state);
      return this.$store.state;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
};
</script>