angular.module('badCodeApp.data',[])
.factory('dataFactory', function($http){  
  var data = {
    "data":[{
      "title":"RealTitle",
      "id":"111",
      "isMandatory":false,
      "doctor":"Dr. House",
      "uri":{
        "url":"testurl/111"
      }
    },
    {
      "title":"FakeTitle",
      "id":"112",
      "isMandatory":true,
      "doctor":"Dr. Hawking",
      "uri":{
        "url":"testurl/112"
      }
    },
    {
      "title":"AwesomeTitle",
      "id":"113",
      "isMandatory":false,
      "doctor":"Dr. Doogie Howser",
      "uri":{
        "url":"testurl/113"
      }
    },
    {
      "title":"BestTitle",
      "id":"114",
      "isMandatory":true,
      "doctor":"Dr. Suess",
      "uri":{
        "url":"testurl/114"
      }
    }]
  };
  return {
    getData:function(){
      return data;
    }
  }
  /*
    //With API Calls delete above return lines and uncomment out this if api routes are valid
    var saveData= function(title, url, isMandatory) {
      return $http({
        method:'POST',
        url:url,
        data:{"title":title,"isMandatory":isMandatory }
      })
      .then(function(response){
        return response;
      }).catch(function(err){
        return err
      })
    };
    //returning function with dataFactory object
    return {
      getData:function(){
        return data;
      },
      saveData:saveData
    }*/
});