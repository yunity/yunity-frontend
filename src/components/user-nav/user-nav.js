import angular from 'angular';

import templateUrl from 'ngtemplate!./user-nav.html';

angular.module('yunity').directive('userNav', () => {

    return  {
        restrict: 'A',
        templateUrl: templateUrl,
        controller: ($scope) => {

            let state = {
                showSubnav: false
            }

            $scope.state = state;
            $scope.toggleSubnav = () => {
                state.showSubnav = !state.showSubnav;
            }
        }
    }
});
