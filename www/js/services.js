angular.module('mc.services', ['mc.config'])

.factory('MediaCloud', function($http, MC_API_INFO) {

  var service = {
    results: null,
    recentMentions: function(keyword){
      this.results = null;
      var path = 'sentences/count?q='+keyword+'&fq=media_sets_id:1&key='+MC_API_INFO.apiKey;
      var url = "https://api.mediacloud.org/api/v2/"+path
      console.log("MC Query to "+url);
      var that = this;
      $http.get(url)
        .success(function(res){
          console.log("MC results="+res);
          that.results = res;
        })
        .error(function(res){ // this will get run in the browser due to a cross-site permissions error
          data = {count: "-1"}; // return some fake data to test with
          console.log("MC failed="+data);
          that.results = data;
        });
    }
  };

  return service;

})

;