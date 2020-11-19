<template>
  <div>
    <table>
      <tbody>
        <tr v-for="(data, index) in games" :key="index" class="table-row">
          <div>ID: {{ data.id }}</div>
          <label for="name">Nome:</label>
          <input type="text" v-model="data.name" />
          <label for="name">Preço:</label>
          <input type="text" v-model="data.price" />
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import api from "@/services/api";

export default {
  data() {
    return {
      games: [],
    };
  },
  mounted() {
    this.getRecords();
  },
  methods: {
    async getRecords() {
      await api.get("games").then((response) => {
        const { data } = response;
        this.games = data;
      });
    },
  },
};
</script>
<style>
.table-row {
  display: inline-grid;
}
</style>
