// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.search', {
      url: '/search',
      views: {
        'tab-search': {
          templateUrl: 'templates/tab-search.html',
          controller: 'SearchCtrl'
        }
      }
    })

    .state('tab.login', {
      url: '/login',
      views: {
        'tab-login': {
          templateUrl: 'templates/tab-login.html',
          controller: 'LoginCtrl'
        }
      }
    })

    .state('tab.profile', {
      url: '/profile/:username',
      views: {
        'tab-login': {
          templateUrl: 'templates/tab-profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

  .state('tab.item', {
    url: '/item/:artName',
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-item.html',
        controller: 'ItemCtrl'
      }
    }
  })

//   .state('tab.item', {
//   url: '/item',
//   views: {
//   'tab-profile': {
//   templateUrl: 'templates/tab-item.html',
//   controller: 'ItemCtrl'
//     }
//   }
// })

.state('tab.registerp1', {
  url: '/registerp1',
  views: {
    'tab-login': {
      templateUrl: 'templates/tab-registerp1.html',
      controller: 'Registerp1Ctrl'
    }
  }
  })

  .state('tab.registerp2', {
    url: '/registerp2/:artname',
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-registerp2.html',
        controller: 'Registerp2Ctrl'
      }
    }
    })
  // .state('tab.profile.item', {
  //   url: '/item',
  //   views: {
  //     'tab-item': {
  //       templateUrl: 'templates/tab-item.html',
  //       controller: 'ItemCtrl'
  //     }
  //   }
  // })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');



})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

   $ionicConfigProvider.tabs.position('bottom'); // other values: top

}]);
