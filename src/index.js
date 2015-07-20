const Vue = require('vue');
const VueResource = require('vue-resource');
const VueRouter = require('vue-router');

const App = require('./components/app.vue');

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

// // Set up routing and match routes to components
// router.map({
//   '/sync': {
//     component: Sync,
//   },
//   '/type': {
//     component: Type,
//   },
// });

// // Redirect to the type route if any routes are unmatched
// router.redirect({
//   '*': '/type',
// });

// Start the app on the #vue-app div
router.start(App, '#vue-app');
