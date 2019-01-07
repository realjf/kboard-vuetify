<template>
    <v-app id="inspire">
      <v-content>
        <v-card><Snackbar></Snackbar></v-card>
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
                  <v-form ref="form"
                          v-model="valid"
                          lazy-validation>
                    <v-text-field prepend-icon="person" name="email" label="邮箱" type="text" @input="handleEmail" required
                                  :rules="emailRules" value=""></v-text-field>
                    <v-text-field prepend-icon="lock" name="password" label="密码" id="password" type="password" @input="handlePassword" required
                                  :rules="passwordRules" value=""></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="validate">登录</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>

    import Snackbar from "../components/common/Snackbar";
    export default {
        name: "Login",
      components: {Snackbar},
      data: () => ({
          drawer: null,
          email: "",
          password: "",
          valid: true,
          snackbar: false,
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
          ],
          passwordRules: [
            v => !!v || 'Password is required',
            v => /\w{6,}/.test(v) || 'Password must be valid'
          ],
        }),
        props: {
            source: String
        },
        computed: {

        },
        methods: {
          validate: function() {
            if (this.$refs.form.validate()) {
              this.snackbar = false
              this.login();
            }else{
              this.snackbar = true
            }
          },
          handleEmail: function(val){
            this.email = val;
          },
          handlePassword: function(val){
            this.password = val;
          },
            login: function () {
              this.$api.api_login.login({
                'email': this.email,
                "password": this.password,
              }).then(resp => {
                  if(resp.code == 100){
                    let payload = {username: resp.result.username, email: resp.result.email};
                    this.$store.commit('user/UPDATE_USER_INFO', payload);
                    // 设置cookie
                    window.location.href = "/home";
                  }else{
                    this.snackbar = true;
                  }
              }).catch(error => {
                this.snackbar = true;
                console.log(1);
              })
            }
        }
    }
</script>

<style scoped>

</style>
