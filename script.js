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
}

function closeSesrchClick(){
    document.getElementById("closeSearchButton").style.display="none";
    document.getElementById("searchButton").style.display="block";
    document.getElementById("mega_search").style.display="none";
}

function peopleClicked(){
    $('#desktop-search').css({"display":"none"});
    $('#first-name-search').css({"display":"flex"});
    $('#last-name-search').css({"display":"flex"});
    $('#mega_search').attr("action", "https://laverne.edu/directory/faculty-staff-search/");
}

function siteClicked(){
    $('#mega_search').attr("action", "https://library.laverne.edu");
    $('#desktop-search').css({"display":"flex"});
    $('#first-name-search').css({"display":"none"});
    $('#last-name-search').css({"display":"none"});
}
