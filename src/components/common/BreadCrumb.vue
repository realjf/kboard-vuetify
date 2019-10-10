<template>
  <div>
    <v-breadcrumbs :items="crumbs">
      <template slot="item" slot-scope="props">
        <a
          :style="{textDecoration: 'none'}"
          :href="props.item.href"
          :class="[props.item.disabled && 'disabled']"
        >{{ props.item.text.toUpperCase() }}</a>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: "k-breadcrumb",
  data: () => ({
    crumbs: [
      {
        text: "Home",
        disabled: false,
        href: "/home"
      }
    ]
  }),
  computed: {
    getCrumbs: function() {}
  },
  mounted() {
    // 面包屑处理
    let _url = this.$router.currentRoute.path;
    let urls = _url.substr(1).split("/");
    let payload = { module: "", action: "" };
    console.log("url：" + _url);
    if (urls[0]) {
      payload.module = urls[0];
      this.crumbs.push({
        text: urls[0],
        disabled: false,
        href: "/" + urls[0] + "/index"
      });
    }
    if (urls[1]) {
      payload.action = urls[1];
      this.crumbs.push({
        text: urls[1],
        disabled: false,
        href: "/" + urls[0] + "/" + urls[1]
      });
    }
    this.$store.commit("breadCrumb/UPDATE_BREAD_CRUMB", payload);
    console.log(this.crumbs);
  }
};
</script>

<style scoped>
</style>
