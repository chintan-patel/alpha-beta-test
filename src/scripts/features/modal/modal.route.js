(function () {
    angular.module('alphaBeta.modal')
        .config(configuration);

    configuration.$inject = ['$stateProvider']
    function configuration($stateProvider) {
        console.log($stateProvider)
        $stateProvider
            .state('modal', {
                url: '/',
                template: '<h1>Chintan</h1>'
            });
        console.log('I am in alphaBeta modal router');
    }
})();