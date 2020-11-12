<template>
  <div>
    Home
    <organization-example />
  </div>
</template>

<script>
import { Organization } from "@/views";

export default {
  name: "App",
  components: {
    'organization-example':Organization,
  },
};
</script>

<style></style>
