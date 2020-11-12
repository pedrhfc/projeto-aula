<script>
export default {
  methods: {
    getOrgs(organization) {
      alert(
        `nome: ${organization.name}\ndescrição: ${organization.description}`
      );
    },
  },
};
</script>
