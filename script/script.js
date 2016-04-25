


/* users photo */
/* users photo add photo part */
$('#usersphoto').hide();
$("#inputphoto").click(function() {
    $("#usersphoto").show();
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#usersphoto').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#inputphoto").change(function() {
    readURL(this);
});
/* users photo add photo part */

/* add note */

 
    
function addAnother(obj) {
        
 	
    li = obj.closest("li");
    obj.hide();
    
    $(document).ready(function(){
	li = obj.closest("li");
          obj.hide();	
	myPoos = li.find('#selectnumber:enabled').val();
          li.find('#value').val(myPoos);
     });	 
   
   
   $(document).ready(function() {
	   var errors= false;
	   li = obj.closest("li");
             obj.hide();
	   if(li.find('#value').val().length == 1) {
		   li.find(".value1").css("width" , "8px");
		   errors= true;
	   }
	   if(li.find('#value').val().length == 2) {
		   li.find(".value1").css("width" , "15px");
		   errors= true;
	   }
	    
	   if(errors == true){
		   return false;
	   }else{
		   return true;
	   }
	   
	    
});

      $(document).ready(function() {
	   var errors= false;
	   li = obj.closest("li");
             obj.hide();
	   if(li.find('#value').val().length == 1) {
		   li.find(".value").css("width" , "9px");
		   errors= true;
	   }
	   if(li.find('#value').val().length == 2) {
		   li.find(".value").css("width" , "16px");
		   errors= true;
	   }
	    
	   if(errors == true){
		   return false;
	   }else{
		   return true;
	   }
	   
	    
});
    
    
	
    li.prepend('<div class="square"></div>');
    li.append('<a class="edit" onclick="editCurrent($(this))">Edit</a>');
    li.append(
        '<a class="save" style="display:none" onclick="saveCurrent($(this))">Save</a>'
    );
	li.append(
        '<a class="remover" style="display:none" >X</a>'
    );
    li.append(
        '<p class="dots" style="display:none">..</p>'
    );
    
	li.find(".arrow-up").hide();
	
	
	
	
	li.find('#selectnumber').hide();
	li.find("#selectnumber").attr("disabled", true);
	li.find("#notebefore").attr("disabled", true);
	li.find("#number").show();
	
    
	
	
   
	
    listItem =
        '<li><span  id="tagwrong">!</span><input type="text" id="notebefore" class="" placeholder="ex. Berista" name="add" onchange="SetDefault();" onpaste="this.onchange();" oninput="this.onchange();"/><a  class="add"  >+</a><span id="number" >(<input type="number" id="value" class="value" disabled>)</span><input type="number" id="selectnumber" class="selectnumber" value="1" maxlength="10"><div class="arrow-up"></div></li>';  
		  
	
    $('ul.taglist').append(listItem);
    $('ul.taglist li').each(function(index, element) {
    $(this).find("input").attr("name", "note" + (index + 1));
	});
  
	   
   $(document).ready(function() {
	   var errors= false;
	   li = obj.closest("li");
             obj.hide();
	   if(li.find('#notebefore').val() == "") {
		   li.find("#tagwrong").show(0);
		   li.find('#number').hide(0);
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 1) {
		   li.find("#number").css("left" , "70px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 2) {
		   li.find("#number").css("left" , "77px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 3) {
		   li.find("#number").css("left" , "86px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 4) {
		   li.find("#number").css("left" , "95px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 5) {
		   li.find("#number").css("left" , "102px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 6) {
		   li.find("#number").css("left" , "111px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 7) {
		   li.find("#number").css("left" , "119px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 8) {
		   li.find("#number").css("left" , "131px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 9) {
		   li.find("#number").css("left" , "136px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 10) {
		   li.find("#number").css("left" , "144px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 11) {
		   li.find("#number").css("left" , "152px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 12) {
		   li.find("#number").css("left" , "160px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 13) {
		   li.find("#number").css("left" , "168px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 14) {
		   li.find("#number").css("left" , "176px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length >= 15) {
		   li.find("#number").css("left" , "184px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 16) {
		   li.find("#number").css("left" , "192px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length >= 17) {
		   li.find("#number").css("left" , "208px");
		   li.find('.dots').show('slow');
		   errors= true;
	   }
	 
	   
	 
	 
	  
	   
	   
	   
	   if(errors == true){
		   return false;
	   }else{
		   return true;
	   }
	   
	    
});
}



function editCurrent(obj) {
	
    li = obj.closest("li");
    obj.hide();
	//li.find("#number").css("left", "33%");
	li.find('.dots').hide();
	li.find(".arrow-up").show();
	li.find('#selectnumber').show();
    li.find(".save").show();
	li.find(".remover").show();
    li.find(".square").hide();
	li.find("#number").hide();
    obj.closest("li").find("#selectnumber").removeAttr("disabled");
    obj.closest("li").find("#notebefore").removeAttr("disabled");
	
	li.find(".remover").click(function(e){
		obj.closest("li").fadeOut("slow");
	 });
         li.css("top", "-5px");

      
}



function saveCurrent(obj) {
	li = obj.closest("li");
          obj.hide();
	$(document).ready(function(){
	li = obj.closest("li");
          obj.hide();	
	myPoos = li.find('#selectnumber').val();
          li.find('#value').val(myPoos);
     });	 
	li.find("#notebefore").css("max-width", "100%");
	//li.find("#number").css("left", "36%");
	
	li.find('#selectnumber').hide();
	li.find(".arrow-up").hide();
	li.find("#number").show();
	li.find(".remover").hide();    	
        li.find(".edit").show();
        li.find(".square").show();
        li.find("#notebefore").attr("disabled", true);
        li.find("#selectnumber").attr("disabled", true)
        li.css("top", "0px");
        
           $(document).ready(function() {
	   var errors= false;
	   li = obj.closest("li");
             obj.hide();
	   if(li.find('#value').val().length == 1) {
		   li.find(".value1").css("width" , "8px");
		   errors= true;
	   }
	   if(li.find('#value').val().length == 2) {
		   li.find(".value1").css("width" , "15px");
		   errors= true;
	   }
	    
	   if(errors == true){
		   return false;
	   }else{
		   return true;
	   }
	   
	    
});

      $(document).ready(function() {
	   var errors= false;
	   li = obj.closest("li");
             obj.hide();
	   if(li.find('#value').val().length == 1) {
		   li.find(".value").css("width" , "9px");
		   errors= true;
	   }
	   if(li.find('#value').val().length == 2) {
		   li.find(".value").css("width" , "16px");
		   errors= true;
	   }
	    
	   if(errors == true){
		   return false;
	   }else{
		   return true;
	   }
	   
	    
});
   
 	 
   
   	 
        
 
     $(document).ready(function() {
	   var errors= false;
	   li = obj.closest("li");
             obj.hide();
	   if(li.find('#notebefore').val() == "") {
		   li.find("#tagwrong").show(0);
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 1) {
		   li.find("#number").css("left" , "70px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 2) {
		   li.find("#number").css("left" , "77px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 3) {
		   li.find("#number").css("left" , "86px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 4) {
		   li.find("#number").css("left" , "95px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 5) {
		   li.find("#number").css("left" , "102px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 6) {
		   li.find("#number").css("left" , "111px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 7) {
		   li.find("#number").css("left" , "119px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 8) {
		   li.find("#number").css("left" , "131px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 9) {
		   li.find("#number").css("left" , "136px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 10) {
		   li.find("#number").css("left" , "144px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 11) {
		   li.find("#number").css("left" , "152px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 12) {
		   li.find("#number").css("left" , "160px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 13) {
		   li.find("#number").css("left" , "168px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 14) {
		   li.find("#number").css("left" , "176px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 15) {
		   li.find("#number").css("left" , "184px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length == 16) {
		   li.find("#number").css("left" , "192px");
		   errors= true;
	   }
	   if(li.find('#notebefore').val().length >= 17) {
		   li.find("#number").css("left" , "208px");
		   li.find('.dots').show('slow');
		   errors= true;
	   }
	 
	   
	   
	   
	   
	   if(errors == true){
		   return false;
	   }else{
		   return true;
	   }
	   
	    
});
    
    
    
    }
	

	
	
    /* add note */
    // This example displays an address form, using the autocomplete feature
    // of the Google Places API to help users fill in the information.
var placeSearch, autocomplete;
var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
};

function initialize() {
        // Create the autocomplete object, restricting the search
        // to geographical location types.
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {HTMLInputElement} */
            (document.getElementById('autocomplete')), {
                types: ['geocode']
            });
        // When the user selects an address from the dropdown,
        // populate the address fields in the form.
        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            fillInAddress();
        });
    }
    // [START region_fillform]

function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();
        for (var component in componentForm) {
            document.getElementById(component).value = '';
            document.getElementById(component).disabled = false;
        }
        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
                var val = place.address_components[i][componentForm[addressType]];
                document.getElementById(addressType).value = val;
            }
        }
    }
    // [END region_fillform]
    // [START region_geolocation]
    // Bias the autocomplete object to the user's geographical location,
    // as supplied by the browser's 'navigator.geolocation' object.

function geolocate() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var geolocation = new google.maps.LatLng(position.coords
                    .latitude, position.coords.longitude);
                var circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy
                });
                autocomplete.setBounds(circle.getBounds());
            });
        }
    }
    // [END region_geolocation]
    //enable disable location//
$('#checkbox').click(function() {
	
    $('#autocomplete').attr('disabled', this.checked)
	$('#locationwrong').fadeOut("slow");
});




$("#checkbox2").click(function(){
	 $('#date-input').attr('disabled', this.checked)
	 $('#datewrong').fadeOut("slow");
});

function valueChanged()
{
    if($('#checkbox2').is(":checked"))   
        
		$("#date-picker").hide();
		
    else
        $("#date-picker").show();
}




//$( "#title" ).focus();//



$(document).ready(function() {
    $(".border").hide();

    var elements = $(".border");
    var elementCount = elements.size();
    var elementsToShow = 1;
    var alreadyChoosen = ",";
    var i = 0;
    while (i < elementsToShow) {
        var rand = Math.floor(Math.random() * elementCount);
        if (alreadyChoosen.indexOf("," + rand + ",") < 0) {
            alreadyChoosen += rand + ",";
            elements.eq(rand).show();
            ++i;
        }
    }
});


 $(document).ready(function(){
$(".change").click(function(){
    $("#chose").toggle("slow");
});
});
	

	$(document).ready(function(){
$("#dropdown").click(function(){
    $("#chose").toggle("slow");
});
});


	$('#save').hide(0);
	$(document).ready(function(){
    $('#edit').click(function(){
		$('#edit').hide(0);
		$( "#jobs" ).prop( "disabled", false );
		$( ':input[type="number"]' ).prop( "disabled", false );
		$('#save').show(0);
	});
	});
	
	$(document).ready(function(){
    $('#save').click(function(){
		$('#save').hide(0);
		$( "#jobs" ).prop( "disabled", true );
		$( ':input[type="number"]' ).prop( "disabled", true );
		$('#edit').show(0);
	});
	});
		
	$(document).ready(function(){
		$('#atend').click(function(){
		$('#joinus').html("Attend as");
		$('#joinus').css("width","105px");
		$('#dropdown').css("left","53%");
		$("#dropdown").click();
		
		});
	    });
		
	$(document).ready(function(){
		$('#why').click(function(){
		$('#joinus').html("Why not work?");
		$('#joinus').css("width","140px");
		$('#dropdown').css("left","63%");
		$("#dropdown").click();
		});
	    });
		
		$(document).ready(function(){
		$('#lookfor').click(function(){
		$('#joinus').html("Join us as");
		$('#joinus').css("width","105px");
		$('#dropdown').css("left","53%");
		$("#dropdown").click();
		});
	    });
		
		
	    

        $(document).ready(function(){
			$('.addphotoicon , .logo').click(function(){
			$('#msg').css("position","absolute");
			$('#msg').css("display","none");	
			$('#inputphoto').click();
			$('.arrow-left').hide();
			$('.logo').hide('slow');
			});
		});
		
		$(function(){
    $('#changephoto').click(function(e){
        e.preventDefault();
        $('.addphotoicon').click();}
    );
});
		
		$(document).ready(function(){
		$('#backarrow img').css("max-width","30%");
		});
		
		
		
	
		function SetDefault(){
      $(".add").css("color" , "#56c5ee" );
	  $('.add').attr('onclick', 'addAnother($(this))');
	 
	

    }

 
	




//error msg
function checkForm(obj) {
             
	   var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})7&/;	
	   var errors= false;
	   if($('#title').val() == "") {
		   $('#titlewrong').show(0);
		   errors= true;
	   }
	   
	   if($('#description').val() == "") {
		   $('#descriptionwrong').show(0);
		   errors= true;
	   }
	   
	   if($('#date-input').val() == "") {
		   $('#datewrong').show(0);
		   errors= true;
	   }
	   if($('#autocomplete').val() == "") {
		   $('#locationwrong').show(0);
		   errors= true;
	   }
 
	   if ($('#checkbox').is(':checked')) {
		   $('#locationwrong').hide(0);
		   errors= false;
	   }
	   if ($('#checkbox2').is(':checked')) {
		   $('#datewrong').hide(0);
		   errors= false;
	   }
	   
	   
           if(errors == true){
		   $(".errormsg").show("slow");	 
		   return false;
	   }
	    if(errors == false){
		   $(".errormsg").fadeOut("slow");	 
		   return false;
	   }
	   else{
	  
      $('#titlewrong').hide(0);
	 return true;
		   
	   }   	  
    }
	
	 
	
	$(document).ready(function(){
    $("#title").change(function(){
        $('#titlewrong').fadeOut("slow");
    });
	 $("#description").change(function(){
        $('#descriptionwrong').fadeOut("slow");
    });
	$("#date-input").change(function(){
        $('#datewrong').fadeOut("slow");
    });
	$("#autocomplete").change(function(){
        $('#locationwrong').fadeOut("slow");
    });
	
	
});


//$('#title').change(function() {
    //var errors= false;
    //if($('#title').val().length >= 19) {
		   //$("#title").css("margin-bottom" , "-20px");
		   //errors= true;
	   //}
	   
	    //else{
	  
           //$('#title').css('margin-bottom' , '10px');
            //return true;
		   
	   //}
//});


//title auto-grow

$(function() {
    //  changes mouse cursor when highlighting loawer right of box
    $("#title").mousemove(function(e) {
        var myPos = $(this).offset();
        myPos.bottom = $(this).offset().top + $(this).outerHeight();
        myPos.right = $(this).offset().left + $(this).outerWidth();
        
        if (myPos.bottom > e.pageY && e.pageY > myPos.bottom - 16 && myPos.right > e.pageX && e.pageX > myPos.right - 16) {
            $(this).css({ cursor: "nw-resize" });
        }
        else {
            $(this).css({ cursor: "" });
        }
    })
    //  the following simple make the textbox "Auto-Expand" as it is typed in
    .keyup(function(e) {
        //  this if statement checks to see if backspace or delete was pressed, if so, it resets the height of the box so it can be resized properly
        if (e.which == 8 || e.which == 46) {
            $(this).height(parseFloat($(this).css("min-height")) != 0 ? parseFloat($(this).css("min-height")) : parseFloat($(this).css("font-size")));
        }
        //  the following will help the text expand as typing takes place
        while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
            $(this).height($(this).height()+1);
        };
    });
});



		
		
		$(function() {
    //  changes mouse cursor when highlighting loawer right of box
    $("#description").mousemove(function(e) {
        var myPos = $(this).offset();
        myPos.bottom = $(this).offset().top + $(this).outerHeight();
        myPos.right = $(this).offset().left + $(this).outerWidth();
        
        if (myPos.bottom > e.pageY && e.pageY > myPos.bottom - 16 && myPos.right > e.pageX && e.pageX > myPos.right - 16) {
            $(this).css({ cursor: "nw-resize" });
        }
        else {
            $(this).css({ cursor: "" });
        }
    })
    //  the following simple make the textbox "Auto-Expand" as it is typed in
    .keyup(function(e) {
        //  this if statement checks to see if backspace or delete was pressed, if so, it resets the height of the box so it can be resized properly
        if (e.which == 8 || e.which == 46) {
            $(this).height(parseFloat($(this).css("min-height")) != 0 ? parseFloat($(this).css("min-height")) : parseFloat($(this).css("font-size")));
        }
        //  the following will help the text expand as typing takes place
        while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
            $(this).height($(this).height()+1);
        };
    });
});


