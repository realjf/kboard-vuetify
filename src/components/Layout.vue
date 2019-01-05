<template>
    <v-app id="inspire">
      <v-navigation-drawer
        fixed
        :clipped="$vuetify.breakpoint.mdAndUp"
        app
        v-model="drawer"
      >
        <v-list dense>
          <template v-for="menu in menus">
            <v-layout
              row
              v-if="menu.heading"
              align-center
              :key="menu.heading"
            >
              <v-flex xs6>
                <v-subheader v-if="menu.heading">
                  {{ menu.heading }}
                </v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-flex>
            </v-layout>
            <v-list-group
              v-else-if="menu.children"
              v-model="menu.model"
              :key="menu.text"
              :prepend-icon="menu.model ? menu.icon : menu['icon-alt']"
              append-icon=""
            >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ menu.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                v-for="(child, i) in menu.children"
                :key="i"
                @click=""
                :to="child.url"
              >
                <v-list-tile-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ child.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else @click="" :key="menu.text">
              <v-list-tile-action>
                <v-icon>{{ menu.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ menu.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        color="blue darken-3"
        dark
        app
        :clipped-left="$vuetify.breakpoint.mdAndUp"
        fixed
      >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">PaaS容器管理平台</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" tile>
            欢迎您，{{ username }}
          </v-avatar>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-hight>
            <BreadCrumb></BreadCrumb>
            <slot name="content"></slot>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
  import BreadCrumb from "./common/BreadCrumb";

  export default {
    name: "Layout",
    components: {BreadCrumb},
    props: {
      source: String
    },
    data: () => ({
      username: "",
      dialog: false,
      drawer: null,
      menus: [],
    }),
      methods: {
      },
    computed: {

    },
    mounted () {
      // 加载菜单
      this.$http.get('/static/data/menu.json').then(res => {
        if(res.body.menus.length > 0){
          this.menus = res.body.menus;
        }else{
          console.log("缺少menus数据");
        }
      });

      // 加载用户信息
      let _username = this.username;
      if (!_username){
        let params = {};
        this.$api.api_user.list(params).then(
          res => {
            if(res.code == 100){
              this.username = res.result.name
            }
            console.log(res);
          }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>

</style>
