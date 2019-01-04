<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>登录 PaaS容器管理平台</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field prepend-icon="person" name="email" label="邮箱" type="text"></v-text-field>
                    <v-text-field prepend-icon="lock" name="password" label="密码" id="password" type="password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary">登录</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
          drawer: null,
          email: "",
          password: "",
        }),
        props: {
            source: String
        }
    }
</script>

<style scoped>

</style>
