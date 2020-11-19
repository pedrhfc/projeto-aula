<template>
  <div>
    <table>
      <td>
        <router-link to="/organizations" v-slot="{ href, route, navigate }">
          <a :href="href" @click="navigate" target="_blank">{{
            route.fullPath
          }}</a>
        </router-link>
      </td>
      <td>
        <router-link to="/company" v-slot="{ href, route, navigate }">
          <a :href="href" @click="navigate" target="_blank">{{
            route.fullPath
          }}</a>
        </router-link>
      </td>
    </table>
  </div>
</template>
<script></script>
<style></style>
