angular.module("cisionOutlet",['ngRoute','angularUtils.directives.dirPagination']).config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "index.html",
            controller: "myCisionController"
        })
})
.service("myCisionService",function($http){
	
    this.getContacts = function() {
         return $http.get("data/Contacts.json").then(function (response) {
            return response;
        }, function (response) {
            alert("Error finding contacts.");
        });//Retrieving contacts data.
    }
    this.getOutlets = function () {
             return $http.get("data/Outlets.json").then(function (response) {
                return response;
            }, function (response) {
                alert("Error finding contacts.")
            });// retrieving outlets data.
     }
	 this.getValue = function(){
		 return "hello";
	 }
	
})
 .controller("myCisionController",function ($scope,$http,myCisionService) {

     var self =this;
    
	 myCisionService.getContacts().then(function(response){
	 	
		 $scope.contacts = response.data;
		 
		  myCisionService.getOutlets().then(function(outletResponse){
		  	
			  $scope.outlets =  outletResponse.data;
			  $scope.contacts = self.getContacts();
			
		  })
		
	 });
	
	  self.getContacts = function () {
          var outletContList=[];
          angular.forEach($scope.contacts, function (eachContact) {
                        var outletCont={};
                        outletCont.name=eachContact.firstName+" "+eachContact.lastName;
                        outletCont.title=eachContact.title;
                        outletCont.profile=eachContact.profile;
                        angular.forEach($scope.outlets,function(eachOutlet)
                        {
                           if(eachOutlet.id == eachContact.outletId)
                           {
                               outletCont.outletName=eachOutlet.name;
							   console.log(eachOutlet.name);
                           }
                        });
						
              outletContList.push(outletCont);
          });

         return outletContList;
     }
     $scope.sort = function(sortKeyName){
         $scope.sortKey = sortKeyName;  
 		$scope.reverse = !$scope.reverse; 
 	}//Setting key for sorting
	 
})


