githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;

  // self.doSearch = function (){
  //   self.searchResult = searchResource.get(
  //     { q: self.searchTerm, access_token: github_token }
  //   );
  // };

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      })
  };

}]);
