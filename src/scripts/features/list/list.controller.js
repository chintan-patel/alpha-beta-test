(function () {
    angular.module('alphaBeta.list')
        .controller('ListController', ListController);

    ListController.$inject = ['$uibModal', 'cookiesService', 'moment'];

    function ListController($uibModal, cookiesService, moment) {
        var vm = this;

        vm.modal;

        vm.showPrice = showPrice;
        vm.clearSession = clearSession;
        vm.forceOriginal = forceOriginal;
        vm.forceVariant = forceVariant;

        init();

        function init() {
            initializeList();
        }

        function initializeList() {
            vm.productList = [
                {
                    name: 'via Cab',
                    id: 1234,
                    image: 'fa-cab',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sapien at ante dapibus accumsan. Nulla interdum gravida felis, et cursus ipsum mattis sit amet.'
                },
                {
                    name: 'via Car',
                    id: 2345,
                    image: 'fa-car',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
                },
                {
                    name: 'via Ferry',
                    id: 3456,
                    image: 'fa-ship',
                    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.'
                },
                {
                    name: 'via Bus',
                    id: 4567,
                    image: 'fa-bus',
                    description: ' consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'
                }
            ];
        }

        function clearSession() {
            cookiesService.remove('session_id');
        }

        function showPrice(product) {
            var session_id = cookiesService.get('session_id');
            if (!session_id) {
                var timestamp = moment().format('X');
                console.log('Session ID: ' + timestamp);
                cookiesService.set('session_id', timestamp);
            }

            vm.modal = $uibModal.open({
                controller: 'ModalController',
                controllerAs: 'vm',
                templateUrl: '/public/scripts/features/modal/modal.html'
            });
        }

        function forceOriginal() {
            cookiesService.set('session_id', 2);
        }

        function forceVariant() {
            cookiesService.set('session_id', 1);
        }

        function close() {
            vm.modal.close();
        }
    }
})();