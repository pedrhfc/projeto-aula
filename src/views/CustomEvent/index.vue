<template>
  <div>
    <h2 style="color: lightgreen;">CUSTOM EVENT</h2>
    <ul>
      <li v-for="(org, key) in organizations" :key="key">
        <p>Nome da organização: {{ org.name }}</p>
        <p>Descrição: {{ org.description }}</p>
        <button @click="getOrgs(org)">informações</button>
        <button @click="removeOrganization(key)">x</button>
      </li>
    </ul>
  </div>
</template>
<script>
import mixin from "@/mixins";

export default {
  name: "custom-event",
  mixins: [mixin],
  props: {
    organizations: {
      type: Array,
    },
  },
  created() {
    this.getParentProps();
    this.$parent.$on("trigger-child", (message) => {
      console.log(message);
    });
  },
  methods: {
    getOrgs(org) {
      console.log(org);
    },
    removeOrganization(key) {
      this.$emit("remove:organization", key);
    },
    getParentProps() {
      // console.log(this.$parent);
    },
  },
};
</script>
<style></style>
