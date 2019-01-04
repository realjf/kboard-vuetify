import * as api_login from './login'
import * as api_user from './user'

// login模块
// 调用使用this.$api.api_login.login().then(resp=>{}).catch(()=>{})
const apiMap = {
  api_login,
  api_user
};

// 封装成Vue插件
const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return apiMap
      }
    }
  })
};
export default install

