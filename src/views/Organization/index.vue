<template>
  <div>
    <!-- @ é o shorthand(sugar syntax) de v-on
         : é o shorthand de v-bind -->
    <form @submit.prevent="onSubmit">
      <!-- <p>Nome invertido: {{ reverseName }}</p> -->
      <label for="name">Nome da organização</label>
      <input
        type="text"
        name="name"
        v-model="organization.name"
        autocomplete="off"
      />
      <br />
      <label for="description">Descrição da organização</label>
      <input
        type="text"
        name="description"
        v-model="organization.description"
        autocomplete="off"
      />
      <br />
      <button type="submit" :disabled="!organization.name">
        Enviar formulário
      </button>
    </form>
    <b-button variant="danger">Erro</b-button>
    <button @click="getOrganizations">organizações</button>
    <ul>
      <li v-for="(org, key) in organizations" :key="key">
        <p>Nome da organização: {{ org.name }}</p>
        <p>Descrição: {{ org.description }}</p>
        <button @click="getOrgs(org)">informações</button>
      </li>
    </ul>
    <input type="text" v-model="question" />
    Resposta: {{ answer }}<br />
    <input type="text" v-model="numbers" autocomplete="off" />
    <ol>
      <h6>Números pares</h6>
      <li v-for="(arr, index) in evenNumbers" :key="index">
        {{ arr }}
      </li>
      <h6>Números impares</h6>
      <li v-for="(arr, index) in oddNumbers" :key="index">
        {{ arr }}
      </li>
    </ol>
  </div>
  <!-- <div>
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
  </div> -->
</template>
<script>
import mixin from "@/mixins";
import { BButton } from "bootstrap-vue";
export default {
  // name: "organization-example",
  components: {
    BButton,
  },
  mixins: [mixin],
  data() {
    return {
      count: 0,
      organization: {
        name: "",
        description: "",
      },
      question: "",
      answer: "write something",
      organizations: [],
      numbers: [],
      array: [],
    };
  },
  methods: {
    getOrganizations() {
      console.log(this.organizations);
    },
    onSubmit() {
      this.organizations.push(this.organization);
      this.organization = {};
    },
    apiRequest() {
      setTimeout(() => {
        this.answer = "just changed again!";
      }, 5000);
    },
    // addCount() {
    //   this.count++;
    // },
    // removeCount() {
    //   this.count--;
    // },
  },
  computed: {
    // reverseName() {
    //   return this.organization.name
    //     .split("")
    //     .reverse()
    //     .join("");
    // },
    evenNumbers() {
      return this.array.filter((number) => {
        return number % 2 === 0;
      });
    },
    oddNumbers() {
      return this.array.filter((number) => {
        return number % 2 !== 0;
      });
    },
  },
  watch: {
    numbers() {
      this.array = this.numbers.split(" ");
    },
    question() {
      this.answer = "just changed my state!";
      this.apiRequest();
    },
  },
  // filters: {
  //   capitalize(value) {
  //     if (!value) return "";
  //     value = value.toString();
  //     return value.charAt(0).toUpperCase() + value.slice(1);
  //   },
  // },
};
</script>
<style></style>
