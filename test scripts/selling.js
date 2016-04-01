var request = require('supertest'),
    should = require('should');

describe ("checking for sign up",function ()
{
	it("should create an account", function (done){
		var user = { firstname: 'Sowmya', lastname: 'Prakash',email : 'sowmya@outlook.com', ssn: '123-45-2431',password:'abcd1234',confirm_password: 'abcd1234',time: '05 Dec 2014 15:14'};
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
          it("Sell a product", function(done){
              var sell = { product : 'Jeans', productType:'attire',category:'Clothes',quantity:'2',brand:'Levis',state:'USed',model:'L12',description:'blue color',price:'25'};
     
              request("http://localhost:3000")
             .post("/addSelling")
             .send(sell)
             .expect(200)
             .end(function (err,res) {
              res.status.should.equal(200);
              done();
              }); 
          });
});
