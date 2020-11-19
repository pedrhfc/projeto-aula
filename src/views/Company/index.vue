<template>
  <button @click="goToOrganization">IR PARA ORGANIZAÇÃO</button>
</template>
<script>
export default {
  methods: {
    goToOrganization() {
      this.$router.push("/organizations");
    },
  },
};
</script>
<style></style>
