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
                  <v-form ref="form"
                          v-model="valid"
                          lazy-validation>
                    <v-text-field prepend-icon="person" name="email" label="邮箱" type="text" v-model="email" required
                                  :rules="emailRules"></v-text-field>
                    <v-text-field prepend-icon="lock" name="password" label="密码" id="password" type="password" v-model="password" required
                                  :rules="passwordRules"></v-text-field>
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
  </div>
</template>

<script>
    import Alert from "../components/common/Alert";
    export default {
        name: "Login",
        data: () => ({
          drawer: null,
          email: "",
          password: "",
          valid: true,
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
              this.snackbar = true
              this.login();
            }else{
              this.snackbar = false
            }
          },
            login: function () {
              this.$api.api_login.login({
                'email': this.email,
                "password": this.password,
              }).then(resp => {
                  console.log(resp);
                  if(resp.code == 100){
                    let payload = {username: resp.result.name, email: resp.result.email};
                    this.$store.commit('setUserInfo', payload);
                    this.$router.push("/home")
                  }else{
                    Alert.methods.errorAlert(resp.message);
                  }
              }).catch(error => {
                let err = JSON.stringify(error);
                console.log(err);
                Alert.methods.errorAlert(err);
              })
            }
        }
    }
</script>

<style scoped>

</style>
