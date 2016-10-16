(function () {
    angular.module('alphaBeta.list')
        .config(configuration);

    configuration.$inject = ['$stateProvider'];

    function configuration($stateProvider) {
        $stateProvider
            .state('modal', {
                url: '/modal',
                templateUrl: '/public/scripts/features/modal/modal.html',
                controller: 'ModalController as vm',
                controllerAs: 'vm'
            });
    }
})();