
describe("Sample Test Suite", function() {
  
	var contactsList,
    	 $controller;
   beforeEach(function(){
	   angular.mock.module('cisionOutlet');
   })
   
   beforeEach(angular.mock.inject(function(_$controller_) {
	   
	   $controller = _$controller_;
	   $scope = {
	   	
	   };
	    $scope.contacts =[ {
    		"id": 4415401,
   			 "outletId": 1374048,
   			 "firstName": "Kathleen",
    		"lastName": "Mickey",
    		"title": "Managing Editor",
    		"profile": "Mickey is the Managing Editor for Educational Marketer and Electronic Education Report and covers Print and Electronic Educational Publishing. Do not send photographs or article submissions as they only accept story ideas and press releases. She can be contacted via e-mail.  Mickey has served as the managing editor for Educational Marketer and Electronic Education Report since 2000."
 	   		},
  		  {
  			"id": 6650197,
    		  "outletId": 1379273,
    		  "firstName": "Jon",
    		  "lastName": "Regardie",
    		  "title": "Executive Editor",
    		  "profile": "Regardie is the Executive Editor of Downtown News in Los Angeles, also serving as Web Editor for the online edition. Contact him via e-mail ONLY."
  			}];
			
		$scope.outlets = [ {
   		 						"id": 1374048,
   		 						"name": "Educational Marketer"
  	  						},
 						   {
   								"id": 1379273,
   								"name": "Downtown News"
  							}
						]
	   
	   var myController = $controller('myCisionController', { $scope: $scope });
	   contactsList = myController.getContacts();
	  
   })
   
  );
   it("Checking length of contacts",inject(["myCisionService", function(myCisionService) {
	
		expect(contactsList[1].outletName).toEqual("Downtown News");
       
    }])
  );
 
});