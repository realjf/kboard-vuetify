<template>
  <v-app>
    <v-app-bar app class="blue">
      <k-avatar></k-avatar>
    </v-app-bar>
    <v-content app class="k-content">
      <k-breadcrumb class="k-breadcrumb"></k-breadcrumb>
      <v-container fluid></v-container>
    </v-content>
    <k-nav-drawer class="nav-bar"></k-nav-drawer>
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
    "k-avatar": Avatar
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  margin-top: 64px;
  width: auto;
  height: 100%;
}
.k-content {
  margin-left: 65px;
}
</style>
