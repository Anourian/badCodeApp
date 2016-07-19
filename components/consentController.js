angular.module('badCodeApp.consent',[])
  .controller('consentController',function($scope, dataFactory){
    $scope.headers = {heads:['Title','Owner','Mandatory', '','']};
    $scope.data = dataFactory.getData();
    $scope.saveConsentForm = function (title, url,isMandatory){
      //Delete next two lines for dataFactory implementation along with uncommenting out return function in dataFactory
      alert("The title is: " + title +  "\nThe url is: " + url + "\nIs it Mandatory? " + isMandatory);
      return //added so there are no unneccessary calls for the data/promise object
      dataFactory.getData(title, url,isMandatory)
        .then(function(data){
          if (data.success){
            /*Hide siblings
            This part is blank as hiding may change layout
            Lacking information on what should actually be shown and hidden on sucess*/
            alert('Success');
        } else {
            alert('Your last update failed. Please reload and try again');
        }
      }).catch(function(err){
        alert("Your last update failed. Please reload and try again.")
      });
    };
    $scope.titleBtnClick = function(){
      //This button here is odd, but even if it were a text input or something else it is odd
      //Need more of an explanation on the view to determine if this should have
      //a function or be refactored into something else entirely
      alert('I\'m not sure what this is supposed to do');
    };
  });