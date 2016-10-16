(function(){
    angular.module('alphaBeta', [
        'alphaBeta.core',
        'alphaBeta.list',
        'alphaBeta.modal'
    ]);

    angular.module('alphaBeta')
        .config(configuration);

    configuration.$inject = ['$urlRouterProvider', '$locationProvider'];
    function configuration($urlRouterProvider, $locationProvider){
        $urlRouterProvider.otherwise('/index');
        $locationProvider.html5Mode(true);
    }
})();
(function(){
    angular.module('alphaBeta.core', [
        'ui.router',
        'ui.bootstrap',
        'ngCookies'
    ]);
     angular.module('alphaBeta.core')
        .constant('moment', moment);
})();

(function(){

    angular.module('alphaBeta.list', [
        'alphaBeta.core'
    ]);
})();

(function(){

    angular.module('alphaBeta.modal', [
        'alphaBeta.core'
    ]);
})();

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
(function () {
    angular.module('alphaBeta.list')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$scope', '$uibModalStack', 'abService'];

    function ModalController($scope, $uibModalStack, abService) {
        var vm = this;

        vm.variation = false;
        vm.developerDebug = false;
        vm.user = {};
        vm.states = {};
        vm.closeModal = closeModal;
        vm.submit = submit;
        vm.enterName = enterName;

        init();

        function init() {
            vm.user = {
                state: ''
            };
            vm.variation = abService.get('session_id');
            vm.user.variation = vm.variation;
        }

        function enterName() {
            if(vm.user && vm.user.name) {
                console.log(vm.user.name);
            }
        }

        function submit() {
            if ($scope.form.$valid) {
                console.log(vm.user);
            }
        }
        function closeModal() {
            $uibModalStack.dismissAll('closed by user');
        }

        vm.states = {
            "": 'State',
            AL: 'Alabama',
            AK: 'Alaska',
            AS: 'American Samoa',
            AZ: 'Arizona',
            AR: 'Arkansas',
            CA: 'California',
            CO: 'Colorado',
            CT: 'Connecticut',
            DE: 'Delaware',
            DC: 'District Of Columbia',
            FM: 'Federated States Of Micronesia',
            FL: 'Florida',
            GA: 'Georgia',
            GU: 'Guam',
            HI: 'Hawaii',
            ID: 'Idaho',
            IL: 'Illinois',
            IN: 'Indiana',
            IA: 'Iowa',
            KS: 'Kansas',
            KY: 'Kentucky',
            LA: 'Louisiana',
            ME: 'Maine',
            MH: 'Marshall Islands',
            MD: 'Maryland',
            MA: 'Massachusetts',
            MI: 'Michigan',
            MN: 'Minnesota',
            MS: 'Mississippi',
            MO: 'Missouri',
            MT: 'Montana',
            NE: 'Nebraska',
            NV: 'Nevada',
            NH: 'New Hampshire',
            NJ: 'New Jersey',
            NM: 'New Mexico',
            NY: 'New York',
            NC: 'North Carolina',
            ND: 'North Dakota',
            MP: 'Northern Mariana Islands',
            OH: 'Ohio',
            OK: 'Oklahoma',
            OR: 'Oregon',
            PW: 'Palau',
            PA: 'Pennsylvania',
            PR: 'Puerto Rico',
            RI: 'Rhode Island',
            SC: 'South Carolina',
            SD: 'South Dakota',
            TN: 'Tennessee',
            TX: 'Texas',
            UT: 'Utah',
            VT: 'Vermont',
            VI: 'Virgin Islands',
            VA: 'Virginia',
            WA: 'Washington',
            WV: 'West Virginia',
            WI: 'Wisconsin',
            WY: 'Wyoming'
        };

    }
})();
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