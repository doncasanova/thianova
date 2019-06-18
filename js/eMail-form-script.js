$("#eMailForm").validator().on("submit", function (event) {    
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitEmail();
    }
});


function submitEmail(){
    // Initiate Variables With Form Content
    var nameSub = $("#nameSub").val();
    var emailSub = $("#emailSub").val();


    $.ajax({
        type: "POST",
        url: "php/eMail-form-process.php",
        data: "nameSub=" + nameSub + "&emailSub=" + emailSub,
        success : function(text){
            if (text === "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#eMailForm")[0].reset();
    submitMSG(true, "Message Submitted!");
}

function formError(){
    $("#eMailForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#emailSubmit").removeClass().addClass(msgClasses).text(msg);
}