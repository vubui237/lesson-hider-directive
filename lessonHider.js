angular.module('directivePractice').directive('lessonHider', function() {
  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
        lesson: '=',
        dayAlert: '&',
        deleteLesson: '&',
        toggleLesson: '='
    },
    controller: function($scope, lessonSrv) {
      $scope.getSchedule = lessonSrv.getSchedule();
    },
    link: function(scope, elements, attributes) {
      scope.toggleLesson = function(lesson, lessonSpan){
        if (scope.value == false) {
          elements.css({'text-decoration' : ''});
        }  
        else {
          elements.css({'text-decoration' : 'line-through'});
        }
      }
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;

          //This is where we mark off lists not in the schedule
          scope.schedule.forEach(function( sDay ) {
          if (sDay.lesson === scope.lesson) {
            scope.lessonDay = sDay.weekday;
            elements.css({'text-decoration' : 'line-through'});
            scope.value = true
            return;
          }
        });
          
      })
    }
  }
});