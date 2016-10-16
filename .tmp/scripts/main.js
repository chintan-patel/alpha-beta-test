(function(){
    angular.module('alphaBeta', [
    ]);

})();
(function(){
    angular.module('alphaBeta.core', [
        'ui-router'
    ]);
});
(function(){

    angular.module('alphaBeta.modal', [
        'alphaBeta.core'
    ]);
})();
(function(){
    angular.module('alphaBeta.modal')
        .controller('ModalController', ModalController);

        function ModalController() {
            console.log('i am in controller');
        }
})();
(function(){
    angular.module('alphaBeta.modal')
        .config(configuration);

        function configuration() {
            console.log('I am in alphaBeta modal router');
        }
})();