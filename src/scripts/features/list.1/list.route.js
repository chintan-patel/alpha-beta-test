(function () {
    angular.module('alphaBeta.list')
        .config(configuration);

    configuration.$inject = ['$stateProvider'];

    function configuration($stateProvider) {
        $stateProvider
            .state('list', {
                url: '/',
                templateUrl: '/public/scripts/features/list/list.html',
                controller: 'ListController as vm',
                controllerAs: 'vm'
            });
    }
})();