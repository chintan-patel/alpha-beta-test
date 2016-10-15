(function () {
    angular.module('alphaBeta.modal')
        .config(configuration);

    configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function configuration($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('modal', {
                url: '/',
                templateUrl: 'public/scripts/features/modal/modal.html',
                controller: 'ModalController',
                controllerAs: 'vm'
            })

        $urlRouterProvider.otherwise('/index');
        $locationProvider.html5Mode(true);
    }
})();