    function myFunction() {

       var element = document.getElementById("icon");
       element.classList.toggle("fa-x")
       
      }


      
      function openmenu() {
        var element = document.getElementById("menu");
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
      }

      function opensearch() {
        var element = document.getElementById("search");

        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";

        }
      }

      function hide() {

        var element =document.getElementById("iconSearch");

        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";

        }
      }