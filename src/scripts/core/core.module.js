(function(){
    angular.module('alphaBeta.core', [
        'ui.router',
        'ui.bootstrap',
        'ngCookies'
    ]);
     angular.module('alphaBeta.core')
        .constant('moment', moment);
})();
