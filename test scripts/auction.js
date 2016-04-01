var request = require('supertest'),
    should = require('should');

describe ("checking for sign up",function ()
{
	it("Should throw an error as mandatory data missing", function (done){
		var user = { lastname: 'Prakash', ssn: '123-45-2431',password:'abcd1234',confirm_password: 'abcd1234',time: '05 Dec 2014 15:14'};
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
	});
 
describe ("checking for sign up",function ()
		{
			it("Should throw when passwords does not match", function (done){
				var user = { firstname: 'Ramya', lastname: 'Patil',email : 'ramya@outlook.com', ssn: '123-45-2432',password:'abcd1234',confirm_password: 'asdf1234',time: '05 Dec 2014 15:14'};
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
          it("Auction the product", function(done){
              var sell = { product : 'Jeans', productType:'attire',category:'Clothes',quantity:'2',brand:'Levis',state:'Used',model:'L12',description:'blue color',basePrice:'25',increment:'2',endTime:'1 day'};
     
              request("http://localhost:3000")
             .post("/addAuction")
             .send(sell)
             .expect(200)
             .end(function (err,res) {
              res.status.should.equal(200);
              done();
              }); 
          });
});
