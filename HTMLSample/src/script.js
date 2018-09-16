

$(document).ready(function(){
          //alert("sf");
          $("#signupContent").hide();
          $("#btnsignUp").click(function(){          	
          	$("#loginContent").hide();
			$("#signupContent").show();
          });

          var JSONObject= {"email":"g13", "password":"ssf","userName":"g13" };
var jsonData = JSON.stringify( JSONObject ); 
var postData;

$("#btnPost").click(function(){
	$.ajax({
	   url: 'http://localhost:9090/authn/accounts/register',
	   contentType: 'application/json',
	   data: jsonData,
	   headers: {'access-control-allow-origin': '*'},
	   error: function(responsetext, xhr) {
	   	alert("error 1: " + xhr.responsetext + xhr.status);
	   	//alert("error 2: " + xhr.statusTxt);
	      $("#postDataResponse").text("error: postData");
	   },
	   async: true,
	   dataType: 'json',
	   crossDomain:true,
	   success: function(Data) {	   	
	   	postData = JSON.stringify(Data);
	   	var obj = JSON.parse(postData);
	   	f1(obj.userName);
	   	alert(postData);
	   },
	   type: 'POST'
	});
});

function f1(x)
{
$("#postDataResponse").text(x);
}

});
