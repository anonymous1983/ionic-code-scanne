angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $cordovaBarcodeScanner, CodesQR) {

    $scope.scannerClick = false;

    $scope.scanBarcode = function () {
      $scope.scannerClick = true;
      //$scope.code = CodesQR.get('55f4066ca64e3294d300392d');
      $cordovaBarcodeScanner.scan().then(function (imageData) {
        $scope.code = CodesQR.get(imageData.text);
      }, function (error) {
        console.log("An error happened -> " + error);

      });
    };

  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
