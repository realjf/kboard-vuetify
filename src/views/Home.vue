<template>
  <Layout>
    <!-- <EditTable slot="content"></EditTable> -->
  </Layout>
</template>

<script>
import Layout from "../components/Layout2";
import EditTable from "../components/table/EditTable";
export default {
  name: "Home",
  components: {
    EditTable,
    Layout,
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
