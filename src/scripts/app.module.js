(function(){
    angular.module('alphaBeta', [
        'alphaBeta.core',
        'alphaBeta.list',
        'alphaBeta.modal'
    ]);

    angular.module('alphaBeta')
        .config(configuration);

    configuration.$inject = ['$urlRouterProvider', '$locationProvider'];
    function configuration($urlRouterProvider, $locationProvider){
        $urlRouterProvider.otherwise('/index');
        $locationProvider.html5Mode(true);
    }
})();