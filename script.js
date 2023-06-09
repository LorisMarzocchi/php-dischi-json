const { createApp } = Vue;

createApp({
  data() {
    return {
      arrDischi: [],
    };
  },
  methods: {
    requestData() {
      axios
        .get("http://localhost:8888/php-dischi-json/data.php")
        .then((response) => (this.arrTodo = response.data));
    },
  },
  created() {
    this.requestData();
  },
}).mount("#app");
