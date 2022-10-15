

function urlvalidator(url){
    var res=url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/ /=]*)/);
    return (res !=null);
}

function grabbing(){
    var mysize=document.getElementById("mysize").value;
    var myurl=document.getElementById("myurl").value;

    if (myurl == "")
    {
        alert("Please Enter The URL ");
    }

    else if(myurl !="" && urlvalidator(myurl)==true)
    {
        apicall();
    }

    else{
        alert("OOPs!!! \n Wrong URL Entered");
    }
}


function apicall(){
    var classa=document.getElementById("displayimagebox");
    var mysize=document.getElementById("mysize").value;
    var myurl=document.getElementById("myurl").value;
    var displayimg=document.getElementById("displayimg");
    var duckapi = "https://icons.duckduckgo.com/ip3/";
    var googleapi="https://s2.googleusercontent.com/s2/favicons?domain=";

    if (mysize=="title"){
        alert("Please Select The Size Of Icon ....")
    }

    else if (mysize=="default")
    {
        var api=duckapi+myurl+".ico";
        classa.setAttribute("style","padding:1.5em;");
        displayimg.src=api;
        displayimg.alt=myurl;

    }

    else if (mysize=="16")
    {
        var h1="www.";
        var api2=myurl.replace(h1,"");
        var api=googleapi+"www."+api2+"&sz=16";
        classa.setAttribute("style","padding:1.5em;");
        displayimg.src=api;
        displayimg.alt=myurl;
        // try{

        //     displayimg.src=api;
        // }
        // catch(url_404){
        //     alert("wrong");
        // }

    }

    else if (mysize=="32")
    {
        var h1="www.";
        var api2=myurl.replace(h1,"");
        var api=googleapi+"www."+api2+"&sz=32";
        classa.setAttribute("style","padding:1.5em;");
        displayimg.src=api;
        displayimg.alt=myurl;

    }

    else if (mysize=="48")
    {
        var h1="www.";
        var api2=myurl.replace(h1,"");
        var api=googleapi+"www."+api2+"&sz=48";
        classa.setAttribute("style","padding:1.5em;");
        displayimg.src=api;
        displayimg.alt=myurl;
    }

    else if (mysize=="64")
    {
        var h1="www.";
        var api2=myurl.replace(h1,"");
        var api=googleapi+"www."+api2+"&sz=64";
        classa.setAttribute("style","padding:1.5em;");
        displayimg.src=api;
        displayimg.alt=myurl;

    }

    else if (mysize=="128")
    {
        var h1="www.";
        var api2=myurl.replace(h1,"");
        var api=googleapi+"www."+api2+"&sz=128";
        classa.setAttribute("style","padding:1.5em;");
        displayimg.src=api;
        displayimg.alt=myurl;

    }
}



// ------------------------------- Animation Of button --------------------------------------

function normalfn(btn){
    document.getElementById(btn).setAttribute("style","");
}

function animatefn(btn){
    document.getElementById(btn).setAttribute("style","background-color: rgba(0, 204, 136, 0.488);");
}