<template>
  <div>
    <v-breadcrumbs :crumbs="crumbs">
      <template slot="crumb" slot-scope="props">
        <a :href="props.crumbs.href" :class="[props.crumbs.disabled && 'disabled']">{{ props.crumbs.text.toUpperCase() }}</a>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
    export default {
        name: "BreadCrumb",
      data: () => ({
        crumbs: [
          {
            text: 'Home',
            disabled: false,
            href: '/home'
          },
        ],
      }),
      mounted(){
        // 面包屑处理
        let _url = this.$router.currentRoute.path;
        let urls = _url.split('/');
        let payload = {module: 'home', action: "index"};
        if(urls[0]){
          payload.module = urls[0]
          this.crumbs.push({text:urls[0], disabled: false, href: "/" + urls[0]})
        }
        if(urls[1]){
          payload.action = urls[1];
          this.crumbs.push({text:urls[1], disabled: false, href: "/" + urls[0] + "/" + urls[1]})
        }
        this.$store.commit('breadCrumb/UPDATE_BREAD_CRUMB', payload);
        console.log("crumbs:"+this.crumbs);
      }
    }
</script>

<style lang="stylus" scoped>
  .disabled
    color: grey
    pointer-events: none
</style>
