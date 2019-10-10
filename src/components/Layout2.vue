<template>
  <v-app>
    <k-nav-drawer app></k-nav-drawer>
    <v-app-bar app>
        <k-avatar></k-avatar>
    </v-app-bar>
    <v-content app>
      <v-container fluid fill-hight>
        <k-breadcrumb></k-breadcrumb>
      </v-container>
    </v-content>

    <k-footer app></k-footer>
  </v-app>
</template>

<script>
import NavDrawer from "./common/NavDrawer";
import Footer from "./common/Footer";
import BreadCrumb from "./common/BreadCrumb";
import Avatar from "./common/Avatar";

export default {
  name: "Layout2",
  components: {
    "k-nav-drawer": NavDrawer,
    "k-footer": Footer,
    "k-breadcrumb": BreadCrumb,
    "k-avatar": Avatar,
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
