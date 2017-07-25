angular.module('directivePractice').controller('lessonControl',function($scope) {
    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    $scope.test ='Two way data binding';
    $scope.announceDay = function(lesson, day) {
        if(day == undefined) {
            day = 'a later date';
        }
        alert(lesson + ' is active on ' + day + '.')
    }
    $scope.lessonDelete = function(lesson) {
        $scope.lessons.forEach(function(value, index) {
            if(value == lesson) {
                $scope.lessons.splice(index,1)
            }
        })
    }
 
});
