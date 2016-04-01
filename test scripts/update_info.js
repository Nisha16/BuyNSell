var request = require('supertest'),
    should = require('should');


describe("checking for signin", function ()
		{
		 
		          it("should log in to the account", function(done){
		             var user = { email : 'vinaygs@outlook.com', password:'abcd1234'};
		 
		             request("http://localhost:3000")
		             .get("/login")
		             .send(user)
		             .expect(200)
		             .end(function (err,res) {
		              res.status.should.equal(200);
		              done();
		              });
		          });
		 it("Update the account", function(done){
		              var updateData = { firstname : 'Nishaa', lastname:'Anill' , email:'NishaAnil@gmail.com',pass2:'abcd1234',address:'Jayanagr',zipCode:'94089',city:'Bangalore',state:'karnataka',accountdetails:'abc1234',sss:'123-45-2430'};
		     
		              request("http://localhost:3000")
		             .post("/updateAccount")
		             .send(updateData)
		             .expect(200)
		             .end(function (err,res) {
		              res.status.should.equal(200);
		              done();
		              }); 
		          });




		});

describe("checking for signin", function ()
		{
		 
	it("should create an account", function (done){
		var user = { firstname: 'Anu', lastname: 'shanm',email : 'anu@outlook.com', ssn: '123-98-4657',password:'abcd1234',confirm_password: 'abcd1234',time: '05 Dec 2014 15:14'};
		request("http://localhost:3000")
		.post("/register")
		.send(user)
		.expect(200)
		.end (function (err,res)
		{
			res.status.should.equal(200);
			done();
		});
		
	});
		          it("should log in to the account", function(done){
		             var user = { email : 'anu@gmail.com', password:'abcd1234'};
		 
		             request("http://localhost:3000")
		             .get("/login")
		             .send(user)
		             .expect(200)
		             .end(function (err,res) {
		              res.status.should.equal(200);
		              done();
		              });
		          });
		 it("Delete the account", function(done){
		              var deleteAccount = {ssn:'123-98-4657'};
		     
		              request("http://localhost:3000")
		             .post("/deleteAccount")
		             .send(deleteAccount)
		             .expect(200)
		             .end(function (err,res) {
		              res.status.should.equal(200);
		              done();
		              }); 
		          });

		});

describe("checking for signin", function ()
		{
		 
		          it("should log in to the account", function(done){
		             var user = { email : 'vinaygs@outlook.com', password:'abcd1234'};
		 
		             request("http://localhost:3000")
		             .get("/login")
		             .send(user)
		             .expect(200)
		             .end(function (err,res) {
		              res.status.should.equal(200);
		              done();
		              });
		          });
		          it("Provide the review", function(done){
		              var addReview = {userId:'123-45-2431',rangeinput:'3',reviewsinput:'Good',};
		     
		              request("http://localhost:3000")
		             .post("/addReviews")
		             .send(addReview)
		             .expect(200)
		             .end(function (err,res) {
		              res.status.should.equal(200);
		              done();
		              }); 
		          });

		});