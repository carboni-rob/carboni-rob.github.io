//* Author: ROBERTO CARBONI

//* Assignment: Assessment 2 -  Recreate a Technology Web Page

//* Student ID: STU-00001225

//* Date: 2017/02/06

//* Ref: see inline comments


// Look at userAgent to test for IE (COPIED FROM http://stackoverflow.com/questions/21825157/internet-explorer-11-detection)
    if (isIE11 = !!window.MSInputMethodContext && !!document.documentMode) {

        var divs = document.getElementsByTagName("section");
        for (var i = 0; i < divs.length; i++) {

             if (divs[i].className == "text_flex") {
                 divs[i].className = "hide_overflow";
            }
        }

        var divs = document.getElementsByTagName("article");
        for (var i = 0; i < divs.length; i++) {

             if (divs[i].className == "art_flex") {
                 divs[i].className = "hide_overflow";
            }
        }
    }