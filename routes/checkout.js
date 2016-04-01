/**
 * New node file
 */
var ejs=require("ejs");
var mysql=require("./mysql");
function checkOut(req,res)
{
	var ssn=req.session.ssn;

	var getUser="select * from shoppingCart where buyerId='"+ssn+"'";
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){
				var productName=[];
				var price=[];
				var quantity=[];
				var total=[];
				var finalTotal=[];
				var finalValue=0;
				for(var i=0;i<results.length;i++)
				{
					productName[i]=results[i].productName;
					price[i]=results[i].price;
					quantity[i]=results[i].quantity;
					total[i]=price[i]*quantity[i];
					finalTotal[i] = parseInt(total[i]);
					finalValue += finalTotal[i];


				}


				console.log("Total"+finalValue);
				//console.log(one);
				console.log("valid Seller");
				ejs.renderFile('./views/payment.ejs',{productName:productName,price:price,quantity:quantity,total:total,finalValue:finalValue},function(err, result) {

					// render on success
					if (!err) {
						res.end(result);
					}
					// render or error
					else {
						res.end('An error occurred');
						console.log(err);
					}
				});
			}
			else {    
				console.log("Invalid Seller");
				ejs.renderFile('./views/fail.ejs',{msg:"No Ratings are ther please add your ratings"},function(err, result) {
					// render on success
					if (!err) {
						res.end(result);
					}
					// render or error
					else {
						res.end('An error occurred');
						console.log(err);
					}
				});
			}
		}  
	},getUser);

}
function toPay(req,res)
{
	var count=0;
	var ssn=req.session.ssn;
	var getUser="select * from shoppingCart where buyerId='"+ssn+"'";
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{

			if(results.length > 0){
				var productId=[];
				var productType=[];
				var state=[];
				var productName=[];
				var price=[];
				var quantity=[];
				var total=[];
				var finalTotal=[];
				var finalValue=0;

				for(var i=0;i<results.length;i++)
				{
					productId[i]=results[i].productId;

					productType[i]=results[i].productType;
					state[i]=results[i].state;
					productName[i]=results[i].productName;
					price[i]=results[i].price;

					quantity[i]=results[i].quantity;
					total[i]=price[i]*quantity[i];
					finalTotal[i] = parseInt(total[i]);
					finalValue += finalTotal[i];

					var productId1=productId[i];
					var quantity1=results[i].quantity;


					/*quantity=parseInt(quantity[i]);
					 productId=parseInt(productId[i]);
					 */
					console.log(productId+"ID");
					console.log("results"+JSON.stringify(results));

					console.log("results"+results[i].productId);

					var getUser="select * from product where productId='"+productId1+"'";
					mysql.fetchData(function(err,results1){
						if(err){
							throw err;
						}
						else 
						{
							if(results1.length > 0){
								var quantity2=[];
								var total=[];

								for(var i=0;i<results1.length;i++)
								{

									quantity2[i]=results1[i].quantity;
									console.log("inside the update insert"+quantity2[0]);

									if(quantity2[0]>0)
									{
										console.log("inside the update insert"+quantity2[0]);

										var updateData="update product set quantity='"+quantity1+"'"+"where productId='"+productId1+"'";

										res.render('error',{ title:
											'Success !! ' ,message: 'Thanks for the payment',back:'valid'});
		
									}






								}
								i=i+1;
								console.log("counter"+i);


							}
							else {    
								console.log("Invalid Seller");
								ejs.renderFile('./views/fail.ejs',{msg:"No Ratings are ther please add your ratings"},function(err, result) {
									// render on success
									if (!err) {
										res.end(result);
									}
									// render or error
									else {
										res.end('An error occurred');
										console.log(err);
									}
								});
							}
						}  
					},getUser);

				}


				console.log("Total"+finalValue);

				ejs.renderFile('./views/toPay.ejs',{productName:productName,price:price,quantity:quantity,total:total,finalValue:finalValue},function(err, result) {

					// render on success
					if (!err) {
						res.end(result);
					}
					// render or error
					else {
						res.end('An error occurred');
						console.log(err);
					}
				});
			}
			else {    
				console.log("Invalid Seller");
				ejs.renderFile('./views/fail.ejs',{msg:"No Ratings are ther please add your ratings"},function(err, result) {
					// render on success
					if (!err) {
						res.end(result);
					}
					// render or error
					else {
						res.end('An error occurred');
						console.log(err);
					}
				});
			}
		}  
	},getUser);




}
exports.checkOut=checkOut;
exports.toPay=toPay;
