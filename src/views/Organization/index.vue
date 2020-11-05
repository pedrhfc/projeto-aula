<template>
  <div>
    <h2>Contador: {{ count }}</h2>
    <button @click="removeCount">-</button>
    <button @click="addCount">+</button>

    <h3 v-if="count > 10">maior que 10</h3>
    <h3 v-else-if="count > 5">maior que 5</h3>
    <h3 v-else>tudo o resto</h3>
    <h3 v-show="count < 0">negativo ➖</h3>

    <div>
      <form @submit.prevent="onSubmit">
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          v-model="organization.name"
          autocomplete="off"
        />
        <br />
        <label for="description">Descrição</label>
        <input
          type="text"
          name="description"
          v-model="organization.description"
          autocomplete="off"
        />
        <button type="submit">submeter</button>
      </form>
      {{ organization.name | capitalize }}
    </div>
  </div>
</template>
<script>
export default {
  name: "organization-component",
  data() {
    return {
      count: 0,
      organization: {
        name: "",
        description: "",
      },
    };
  },
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {
    onSubmit() {},
    addCount() {
      this.count++;
    },
    removeCount() {
      this.count--;
    },
  },
};
</script>
<style></style>
