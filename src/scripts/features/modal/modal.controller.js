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