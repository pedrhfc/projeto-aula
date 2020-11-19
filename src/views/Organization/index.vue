<template>
  <div>
    <div>
      <button @click="active = !active">
        {{ active ? "Desativar" : "Ativar" }}
      </button>
      <!-- <h1 :style="color ? styles : changedStyles">MOSTRANDO ESTILIZAÇÃO</h1> -->
      <h1 :class="classNames">MOSTRANDO ESTILIZAÇÃO</h1>
      <!-- <h1 :class="{ active: true, color: true }">MOSTRANDO CLASSES INLINE</h1> -->
      <h1 :style="{ 'background-color': 'red', color: 'blue' }">
        MOSTRANDO ESTILIZAÇÃO INLINE
      </h1>

      <button @click="color = !color">MUDAR A COR</button>
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
      <button variant="danger">Erro</button>
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
    <div>
      <custom-event
        :organizations="organizations"
        @remove:organization="removeOrganization"
      />
      <button @click="parentEvent">ENGATILHAR EVENTO</button>
    </div>
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
import CustomEvent from "../CustomEvent";

export default {
  // name: "organization-example",
  components: {
    CustomEvent,
  },
  data() {
    return {
      count: 0,
      id: this.$route.params.id,
      organization: {
        name: "",
        description: "",
      },
      styles: {
        color: "blue",
        backgroundColor: "yellow",
      },
      changedStyles: {
        color: "red",
        backgroundColor: "green",
      },
      classObject: {
        active: true,
        color: true,
      },
      active: false,
      color: false,
      question: "",
      answer: "write something",
      organizations: [],
      numbers: [],
      array: [],
    };
  },
  mounted() {
    this.getOrganization();
  },
  methods: {
    parentEvent() {
      // this.$emit("trigger-child", { message: "Olá" });
    },
    removeOrganization(key) {
      this.organizations.splice(key, 1);
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
    getOrganization() {
      console.log(this.id);
    },
    // addCount() {
    //   this.count++;
    // },
    // removeCount() {
    //   this.count--;
    // },
  },
  computed: {
    classNames() {
      return {
        active: this.active,
        color: this.color,
      };
    },
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
<style>
.active {
  background-color: red;
}
.color {
  color: blue;
}
</style>
