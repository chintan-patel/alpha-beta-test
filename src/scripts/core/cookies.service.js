
(function(){
    angular.module('alphaBeta.core')
        .factory('cookiesService', cookiesService);

    cookiesService.$inject = ['$cookies'];
    function cookiesService($cookies) {
        var service = {
            get: get,
            set: set,
            remove: remove
        };

        return service;

        function get(key) {
            return $cookies.get(key);
        }

        function set(key, value) {
            $cookies.put(key, value);
        }

        function remove(key) {
            $cookies.remove(key);
        }
    }
})();