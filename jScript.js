// JavaScript source code


function myFunction() {


    document.getElementById("mymenu").classList.toggle("show");


    window.onclick = function (event) {
        if (!event.target.matches('.pullbtn')) {

            var pullups = document.getElementsByClassName("showcontent");
            var i;
            for (i = 0; i < pullups.length; i++) {
                var openPullup = pullups[i];
                if (openPullup.classList.contains('show')) {
                    openPullup.classList.remove('show');
                }
            }
        }
    }
}