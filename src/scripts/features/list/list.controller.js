(function () {
    angular.module('alphaBeta.list')
        .controller('ListController', ListController);

    ListController.$inject = ['$uibModal'];

    function ListController($uibModal) {
        var vm = this;

        vm.modal;

        vm.showPrice = showPrice;

        init();

        function init() {
            initializeList();
        }

        function initializeList() {
            vm.productList = [
                {
                    name: 'Product 1',
                    id: 1234
                },
                {
                    name: 'Product 2',
                    id: 2345
                },
                {
                    name: 'Product 3',
                    id: 3456
                },
                {
                    name: 'Product 4',
                    id: 4567
                }
            ];
        }

        function showPrice(product) {
            console.log(product);
            vm.modal = $uibModal.open({
                template: '<h1>Chintan</h1>'
            });
        }

        function close() {
            vm.modal.close();
        }
    }
})();