// background color chnage functions for nav links
function hovered(x) {
  x.style.background = "#DDD";
}
        
function unhovered(x) {
    x.style.background = "white";
}

// submits main search form
function searchPrimo() {
    document.getElementById("primoQuery").value = "any,contains," + document.getElementById("primoQueryTemp").value.replace(/[,]/g, " ");
    document.forms["searchForm"].submit();
}

// opens dynamic nav search form
function searchClick(){
    document.getElementById("searchButton").style.display="none";
    document.getElementById("closeSearchButton").style.display="block";
    document.getElementById("mega_search").style.display="block";
    $("header").css({"margin-right": "15vw"});
    
    function responsive(maxWidth) {
      if (maxWidth.matches) {
          $("#svgHeader").css({"width": "60%"});
      } else {
          $("#svgHeader").css({"width": "125%"});
      }
    }
    var maxWidth = window.matchMedia("(max-width: 1200px)");
    responsive(maxWidth);
    maxWidth.addListener(responsive);
}

// closes dynamic nav search form
function closeSesrchClick(){
    document.getElementById("closeSearchButton").style.display="none";
    document.getElementById("searchButton").style.display="block";
    document.getElementById("mega_search").style.display="none";
    $("header").css({"margin-right": "0"});
    $("#svgHeader").css({"width": "100%"});
}

// switches input fields in nav search form to query for people
function peopleClicked(){
    $('.desktop-search').css({"display":"none"});
    $('.first-name-search').css({"display":"flex"});
    $('.last-name-search').css({"display":"flex"});
    $('.mega_search').attr("action", "https://laverne.edu/directory/faculty-staff-search/");
}

// switches input fields in nav search form to query for books/library items
function siteClicked(){
    $('.mega_search').attr("action", "https://library.laverne.edu");
    $('.desktop-search').css({"display":"flex"});
    $('.first-name-search').css({"display":"none"});
    $('.last-name-search').css({"display":"none"});
}

// toggles mobile nav and hamburger icon
function toggleMobileNav() {
    var icon = document.getElementById("hamburgerContainer");
    if (icon.classList.contains('change')) {
        $('#mobileNav').css({ "display": "block"});
    }else {
        $('#mobileNav').css({ "display": "none" });
    }
}

function hamburger(x) {
    x.classList.toggle("change");
    toggleMobileNav();
}






function toggleMobileTopDrops(x) {
    let idName = x.parentElement.nextElementSibling;
    if (x.classList.contains('toggleMobileDropDown')) {
        idName.style.display = "block";
    } else {
        idName.style.display = "none";
    }
}

function toggleMobileDrop(x) {
    x.classList.toggle("toggleMobileDropDown");
    x.classList.toggle("toggleMobileDropUp");

    var content = x.firstElementChild;
    content.classList.toggle("up");
    content.classList.toggle("down");

    toggleMobileTopDrops(x);
}




function toggleMobileBottomDrops(x) {
    let idName = x.nextElementSibling;
    if (x.classList.contains('toggleMobileDropDown')) {
        idName.style.display = "block";
    } else {
        idName.style.display = "none";
    }
}

function toggleMobileBottomNav(x) {
    x.classList.toggle("toggleMobileDropDown");
    x.classList.toggle("toggleMobileDropUp");

    toggleMobileBottomDrops(x);
}
