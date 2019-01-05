import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from "../views/Login"
import Rc from "../views/app/Rc"
import Stateful from "../views/app/Stateful";
import DaemonSet from "../views/app/DaemonSet";
import Pvc from "../views/app/Pvc";
import Rs from "../views/app/Rs";
import Job from "../views/app/Job";
import CronJob from "../views/app/CronJob";
import Deployment from "../views/app/Deployment";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rc/index',
      name: 'Rc',
      component: Rc,
    },
    {
      path: '/stateful/index',
      name: 'Stateful',
      component: Stateful,
    },
    {
      path: '/daemon/index',
      name: 'DaemonSet',
      component: DaemonSet,
    },
    {
      path: '/pvc/index',
      name: 'Pvc',
      component: Pvc,
    },
    {
      path: '/rs/index',
      name: 'Rs',
      component: Rs,
    },
    {
      path: '/job/index',
      name: 'Job',
      component: Job,
    },
    {
      path: '/cronjob/index',
      name: 'CronJob',
      component: CronJob,
    },
    {
      path: '/deployment/index',
      name: 'Deployment',
      component: Deployment,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
