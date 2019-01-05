<template>
  <Layout>
    <EditTable slot="content"></EditTable>
  </Layout>
</template>

<script>
  import Layout from "../../components/Layout";
  import EditTable from "../../components/table/EditTable";
    export default {
        name: "Rc",
      components: {EditTable, Layout},
    }
</script>

<style scoped>

</style>
