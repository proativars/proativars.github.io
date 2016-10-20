//$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('http://connect.facebook.net/pt_BR/sdk.js', function(){
    FB.init({
      appId: '1723283804569686',
      version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
    });
    //FB.getLoginStatus(updateStatusCallback);

    FB.api(
  	  '/1471259506421478/feed?fields=id,message,created_time,permalink_url,full_picture,picture&limit=6',
  	  'GET',
      {
        access_token : '1723283804569686|iesZzsrhIA9efk30SBMWb5_o4NU'
      },
  	  function(response) {
  	      console.log(response)
          if(response.data.length > 0){
            $('.fbPosts').html("");
            for (objId in response.data) {
                includePostTemplate(response.data[objId], objId)
            }
          }
  	  }
  	);

  });


	//{created_time:'',full_picture:'',id,:'',message:'',permalink_url:'',picture:''}
	function includePostTemplate(obj, arrId) {
		var content = $($("template.post").html()).clone();
    if(arrId % 2 == 0)
      content.addClass('col-sm-offset-2');
		content.find('.image').attr('src',obj.full_picture);
    content.find('.linkMore').attr('href',obj.permalink_url);
    content.find('.text').html((obj.message.length > 100 ? (obj.message.substring(0, 100) + '...') : obj.message));

    $('.fbPosts').append(content);
  }

//});
