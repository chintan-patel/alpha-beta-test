(function () {
    angular.module('alphaBeta.list')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$uibModalStack', 'abService'];

    function ModalController($uibModalStack, abService) {
        var vm = this;
        vm.variation = false;
        vm.modal;

        vm.closeModal = closeModal;

        init();

        function init() {
            vm.variation = abService.get('session_id');
            console.log('i am in modal controller: ' + vm.variation);
        }

        function closeModal() {
            $uibModalStack.dismissAll('closed by user');
        }
    }
})();