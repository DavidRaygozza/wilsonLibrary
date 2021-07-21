function hovered(x) {
  x.style.background = "#DDD";
}
        
function unhovered(x) {
    x.style.background = "white";
}

function searchPrimo() {
    document.getElementById("primoQuery").value = "any,contains," + document.getElementById("primoQueryTemp").value.replace(/[,]/g, " ");
    document.forms["searchForm"].submit();
}

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

function closeSesrchClick(){
    document.getElementById("closeSearchButton").style.display="none";
    document.getElementById("searchButton").style.display="block";
    document.getElementById("mega_search").style.display="none";
    $("header").css({"margin-right": "0"});
    $("#svgHeader").css({"width": "100%"});
}

function peopleClicked(){
    $('.desktop-search').css({"display":"none"});
    $('.first-name-search').css({"display":"flex"});
    $('.last-name-search').css({"display":"flex"});
    $('.mega_search').attr("action", "https://laverne.edu/directory/faculty-staff-search/");
}

function siteClicked(){
    $('.mega_search').attr("action", "https://library.laverne.edu");
    $('.desktop-search').css({"display":"flex"});
    $('.first-name-search').css({"display":"none"});
    $('.last-name-search').css({"display":"none"});
}

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