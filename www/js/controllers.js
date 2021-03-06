angular.module('starter.controllers', [])


.controller('HomeCtrl', function($scope, $state, $timeout) {
  $scope.item = function(){
    $state.go("tab.item");
  }

  $scope.items = [
    '../img/art1.jpeg',
    '../img/art2.jpg',
    '../img/art3.jpeg',
    '../img/art4.jpg',
    '../img/art5.jpg',
    '../img/art6.jpg',
    '../img/art7.jpg',
    '../img/banner1.jpeg',
    '../img/flower.jpg',
    '../img/perry.png'
  ]

  $scope.doRefresh = function() {
    $timeout( function() {
      $scope.$broadcast('scroll.refreshComplete');
    }, 3000);
  }
})

.controller('SearchCtrl', function($scope) {
  $scope.items = [
    '../img/art1.jpeg',
    '../img/art2.jpg',
    '../img/art3.jpeg',
    '../img/art4.jpg',
    '../img/art5.jpg',
    '../img/art6.jpg',
    '../img/art7.jpg',
    '../img/banner1.jpeg',
    '../img/flower.jpg',
    '../img/perry.png'
  ]
})

.controller('LoginCtrl', function($scope, $state, $http, Sessao) {
  $scope.data = {};

  $scope.logar = function() {

    $http.post('http://104.131.166.166:3000/login', $scope.data).then(function(resposta){
      if(!resposta.data){
        alert('Login invalido' );
        return;
      }
      Sessao.inicializar(resposta.data);

      $state.go("tab.profile", {username: resposta.data.username});
    })

  };

  $scope.registrar = function() {
    $state.go("tab.registerp1");
  }
})

.controller('Registerp1Ctrl', function($scope, $state, $http, Sessao) {
    $scope.data = {};

    $scope.register = function(){
        $http.post('http://104.131.166.166:3000/registerp1', $scope.data).then(function(resposta){
          Sessao.inicializar(resposta.data);
          $state.go('tab.profile', {username: resposta.data.username});
        })
      }
})

.controller('Registerp2Ctrl', function($scope, $state, $http, Sessao) {
   $scope.data = {};
   var usuario = Sessao.obter();

   $scope.registerart = function(){
       $http.post('http://104.131.166.166:3000/'+usuario.username+'/registerp2', $scope.data).then(function(resposta){
         $state.go('tab.item', {artName: resposta.data.artName});
       })
     }
})

.controller('ProfileCtrl', function($scope, $state, $stateParams, $http, Sessao) {
  var usuario = Sessao.obter();
  $scope.item = function(){
    $state.go("tab.item");
  }

  $scope.newpost = function(){
   $state.go('tab.registerp2');
 }

  $http.get('http://104.131.166.166:3000/profile/'+$stateParams.username +'/list').then(function(resposta){
    $scope.data = resposta.data[0];
  });

  $scope.items = [
    '../img/art1.jpeg',
    '../img/art2.jpg',
    '../img/art3.jpeg',
    '../img/art4.jpg',
    '../img/art5.jpg',
    '../img/art6.jpg',
    '../img/art7.jpg',
    '../img/banner1.jpeg',
    '../img/flower.jpg',
    '../img/perry.png'
  ]
})

.controller('ItemCtrl', function($scope, $state, $stateParams, $http, Sessao) {
  $scope.usuario = Sessao.obter();

  $http.get('http://104.131.166.166:3000/profile/'+ $scope.usuario.username).then(function(resposta){
    $scope.data = resposta.data[0];
  });

  $scope.backButton = function(){
    $state.go("tab.profile");
  }
})
