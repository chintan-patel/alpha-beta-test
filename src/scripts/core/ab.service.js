
(function(){
    angular.module('alphaBeta.core')
        .factory('abService', abService);

    abService.$inject = ['cookiesService'];
    function abService(cookiesService) {
        var service = {
            get: get
        };

        return service;

        function get() {
            var sessionId = cookiesService.get('session_id');
            return sessionId % 2 == 0;
        }
    }
})();
