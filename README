# wilsonLibrary

* Last Updated on 1/15/2022 *

Description:
The University of La Verne uses a platform called LibGuides to give librarians an easy way to create basic webpages, however they are limited in functionality and design. Therefore, I was extremely proud to develop a fully custom front-end that is dynamically applied to every LibGuide to improve user experience, and give it a more modern design; all while maintaining the ease of usability for librarians to create webpages. This project is meant to replicate the header, hero, & footer from library.laverne.edu in order to implement these sections into all University of La Verne LibGuides while maintaining librarian generated content in between the header and footer.

Instructions on how to get to code to make changes the group:
1. Log onto libguides
2. Click LibGuides at the top left, then admin, and groups
3. Head and footer HTML code is under the header/footer tab
4. All CSS and JavaScript code is under the Custom JS/CSS tab
5. Individual users must be given access to the group, so under the User access tab make sure to click 'add users' > 'select all' and grant access to make sure all users can edit the guides housed in this group.

Example can be seen here: https://laverne.libguides.com/c.php?g=1129844





* In case of any errors you can revert back to the 3 sections of code below - please make sure to update after any new changes to live site(s) (last updated by david Raygoza on 01/10/2022) *

Custom CSS/JS Code:

<style>

    * {box-sizing: border-box;}
    
    #s-lib-bc{
      display: none;
    }
    
    #s-lg-guide-header-info{
       padding-top: 10px;
       padding-bottom: 10px;
    }

h1#s-lg-guide-name{
   font-size: 200%;
}

.s-lib-box-std .s-lib-box-title{
font-size: 16px;
}
    
    #s-lg-guide-search-form{
       display: none;
    }
    
    #s-lib-footer-public{
        
    }
    
    </style>
    
    
    <style>
           
    body{
       margin:0;
       padding: 0;
       font-size: 16px;
    }
    
    :root {
        --color-dark-green: hsl(133, 30%, 25%);
        --color-orange: hsl(31, 100%, 50%);
        --color-gold: hsl(41, 87%, 57%);
        --color-gray: hsl(0, 0%, 20%);
        --color-white: hsl(0, 100%, 100%);
    
        --dimen-top-height: 47px;
        --dimen-header-nav-height: 13vh;
        --dimen-wrapper-width: 1200px;
    }
    
    a:hover svg path{
       fill: var(--color-orange);
    }
    
    a {
        text-decoration: none;
    }
    
    .searchSvg{
        width: 1.5vw; 
        margin: auto;
    }
    
    #top {
        display: flex;
        justify-content: center;
    
        top: 0;
        margin: 0;
    
        width: 100%;
        height: var(--dimen-top-height);
        font-family: "arial, sans-serif";
        font-weight: bold;
        background: var(--color-gray);
    }
    
    #top-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    
        width: var(--dimen-wrapper-width);
        height: 100%;
    }
    
    #top-wrapper > ul > li > a {
        display: flex;
        justify-content: cenbody
ter;
        align-items: center;
        text-decoration: none;
        height: 100%;
    
        padding: 0 10px;
        /*position: relative;*/
        
        color: var(--color-white);
        font-size: 0.8em;
    
        transition: color 0.3s;
    }
    
    #top-wrapper a:hover {
        color: var(--color-gold);
    }
    
    #top-wrapper > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
       margin:0;
        height: 100%;
    }
    
    .dynamicDropdown {
        display: none;
    }
    
    #top-wrapper > ul > li {
        display: flex;
        align-self: center;
        align-items: center;
        height: 100%;
    }
    
    #top-wrapper ul {
        height: 100%;
        align-self: center;
        align-items: center;
        list-style: none;
    
    }
    
    #top-wrapper ul li:hover .dynamicDropdown {
        display: block;
        position: absolute;
        z-index: 4;
    
        top: var(--dimen-top-height);
    
        color: var(--color-gray);
        background: var(--color-white);
        box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
    }
    
    #top-wrapper ul li:hover .dynamicDropdown > ul li {
        align-items: left;
        text-align: left;
        transition: background 0.2s;
        display: block;
        font-weight: 500;
    }
    
    #top-wrapper ul li:hover .dynamicDropdown > ul li a {
        display: block;
        width: inherit;
        height: inherit;
    
        padding: 6px 20px;
    }
    
    #top-wrapper ul li:hover .dynamicDropdown > ul li:hover {
        background: #f1f1f1;
    }
    
    .dynamicDropdown ul {
        display: block;
       padding: 0;
    }
    
    .dynamicDropdown a {
        margin: 0;
        padding: auto;
        width: 100%;
    }
    
    .dynamicDropdown li {
        color: #333;
    }
    
    #mobileTopNav, #mobileBottomNav {
        display: none;
    }
    
    #header-nav {
        display: flex;
        justify-content: center;
    
        top: var(--dimen-top-height);
        margin: 0;
    
        width: 100%;
        height: var(--dimen-header-nav-height);
    
        background-color: #FFF;
    }
    
    #header-nav-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        justify-items: center;
        justify-self: center;
    
        max-width: var(--dimen-wrapper-width);
        height: 100%;
    }
    
    #header-nav-content a {
        text-decoration: none;
    }
    
    header {
        padding-right: 200px;
    }
    
    #hero{
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-flex-direction: column;
        width:100%;
        height: 40vh;
        background-image: url("https://library.laverne.edu/wp-content/uploads/sites/6/2018/08/20180130_Campus_Setups_WV_0004-1200x853.jpg");
        background-size: cover;
        background-position:center
    }
    
    #learningCommonsSpan{
        color: white;
        font-size: 175%;
         font-weight: 300;
         text-align: center;
    }
    
    #headerText {
        color: white;
        font-size: 5em;
        font-weight: bold;
        line-height: 1em;
        text-align: center;
        text-shadow: 1px 1px 7px rgba(0,0,0,.5);
    }
    
    .search-box{
        text-align:center;
        margin-bottom: auto;
        margin-top: auto;
    }
    
    form#simple{
       width: 50vw;
    }
    
    .form-control {
       display: inline;
        margin-top: 1.75em;
        margin-right: 1.5vw;
       width: 400px;;
        height: 2em;
        padding: 6px 12px;
        font-size: 16px;
        line-height: 1.428571429;
        color: #302c29;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
    
    #go{
        background-color: #ff8200;
        border-color: #ff8200;
        height: 2.1em;
        color:white;
        padding: 6px 12px;
        font-size: 16px;
        font-weight:bold;
        border-radius: 4px;
        box-shadow: none;
        border:0;
    
    }
    
    #go:hover{
        background-color: #0093b2;
    }
    
    #go:active{
        background-color: #2c5234;
    }
    
    .scholarly-article {
        margin-left: 4vw;
        margin-top: 1.5vh;
        color:white;
        text-align:left;
    }
    
    #mobileNav, #mobileNavHeader {
        display: none;
    }
    
    
    nav {
        width: 100%;
        height: 100%;
        align-items: center;
        font-family: "arial, sans-serif";
    }
    
    nav ul {
        list-style-type: none;
    
        display: flex;
        justify-content: space-between;
        align-self: center;
       padding: 0;
        height: 100%;
    }
    
    nav ul li {
        color: var(--color-dark-green);
        position: relative;
        /* margin: 0 32px; Had to remove this because the new navigation items would not display on a single line */
        height: 100%;
    
        display: flex;
        align-items: center;
    }
    
    nav ul li a {
        color: var(--color-dark-green);
        font-size: 0.9em;
        font-weight: bold;
        width: 100%;
    }
    
    nav ul li a:hover {
        color: var(--color-orange);
    }
    
    .dynamicDropdown {
        display: none;
        z-index: 999;
    }
    
    nav ul li:hover .dynamicDropdown.dd2 {
        display: block;
        position: absolute;
        left: 0%;
        top: 100%;
        background: var(--color-white);
    }
    
    nav ul li:hover .dynamicDropdown.dd3 {
        display: block;
        position: absolute;
        right: -10%;
        top: 100%;
        background: var(--color-white);
    }
    
    .dynamicDropdown ul {
        display: block;
    }
    
    #header-nav-wrapper .dynamicDropdown ul li {
        margin: 0;
        padding: 10px;
        border-bottom: #cacaca solid 1px;
    
        border-left: #FFF solid 4px;
    }
    
    #header-nav-wrapper .dynamicDropdown ul a {
        margin:0;
        color: #666;
        font-size: 0.8em;
        width: 265px;
        white-space: nowrap;
    
        transition: color 0.2s;
    }
    
    #header-nav-wrapper .dynamicDropdown ul li:hover{
        border-left: var(--color-dark-green) solid 4px;
    }
    
    #header-nav-wrapper .dynamicDropdown ul a:hover {
        color: var(--color-dark-green);
    }
    
    
    
    #searchButtonItem {
        margin: 0;
        padding: 0;
    }
    
    .closedSearchForm {
        width: 4vw;
        height: 100%;
        background: var(--color-dark-green);
    }
    
    .mega_search{
        display: none;
        width: 70vw;
        position: relative;
        right: 66vw;
        height: var(--dimen-header-nav-height);
        background-color: var(--color-dark-green);
    }
    
    .desktop-search{
        margin: 0;
    }
    
    fieldset{
        color: white;
        border: 0;
    }
    
    .input-group.cse{
        display: flex;
        flex-direction: row;
        align-content: center;
        margin-top: 1%;
        margin-left: 2vw;
    }
    
    .input-group.cse input{
        border-radius: 0;
    }
    
    .input-group.cse .desktop-search {
        width: 56vw;
    }
    
    #first-name-search, #last-name-search {
       display: none;
        border-radius: 0;
        width: 27vw;
        margin: 0;
    }
    
    #nameInputs{
        display: none;
    }
    
    #searchButton{
        color: white;
        position: relative;
        left: 1.25vw;
        top: 5.25vh;
    }
    
    #closeSearchButton{
        color: white;
        font-weight: bold;
        display:none;
        width: 1vw;
        height: 1vh;
        position: absolute;
        left: 1.5vw;
        top: 4.5vh;
        z-index: 999;
        cursor:default;
    }
    
    .input-group-addon-button {
        display: inline;
        width: 3em;
        background-color: var(--color-orange);
        margin: 0;
        padding: 0;
        box-shadow: 0;
        outline: 0;
        border: 0;
        border: 1px solid white;
        border-left: 0;
        border-radius: 0;
    }
    
    #site-people-radios{
        float: right;
        margin-right: 8vw;
        margin-top: 1%;
    }
    
    
    
    main {
        align-content: center;
        z-index: 2;
    }
    
    footer {
        max-width: 100%;
        padding: 25px 5%;
        background: var(--color-dark-green);
        display: flex;
        flex-direction: column wrap;
        justify-content: space-between;
        color: #FFF;
        font-size: 0.9em;
    }
    
    #footerColumn2-3 {
        display: none;
    }
    
    #footerImage {
        margin-bottom: 10%;
    }
    
    footer a {
        color: #FFF;
        transition: color 0.3s;
    }
    
    footer a:hover {
        color: var(--color-gold);
    }
    
    footer div ul {
        list-style-type: none;
    }
    
    footer div ul li {
        margin-bottom: 10px;
    }
    
    #footerText{
        color:#CACACA;
    }
    
    #footerTextMobile{
        display: none;
    }
    
    ul#iconList {
        width: 80%;
    }
    
    ul#iconList a{
        display:inline-block;
    }
    
    ul#iconList a{
        display:inline-block;
        margin: 10px 10px 0 0;
        width: 3vw;
        height: 3vw;
        border: 2px solid white;
        border-radius: 10000px;
    }
    
    ul#iconList a img{
            border-radius: 10000px;
    }
    
    ul#iconList a svg{
        width: 1.5vw;
        height: 1.5vw;
        margin: 0.6vw;
    }
    
    ul#iconList a:hover{
        border: 2px solid orange;
        color: white;
    }
    
    #footerInformationFor{
       margin-top: 0;
    }
    
    #connectWithUs{
       margin-top: 0;
    }
    
    @media only screen and (max-width: 1200px) and (min-width: 769px) {
        :root {
            --dimen-top-height: 47px;
            --dimen-header-nav-height: 8vw;
        }
        
        header {
            padding-right: 0;
        }
    
        #svgHeader{
            width: 100%;
        }
        
        #header-nav-wrapper {
            width: 97%;
            justify-self: center;
            justify-content: center;
        }
    
        nav {
            width: 100%;
        }
    
        nav ul {
            justify-content: space-between;
        }
    
        nav ul li a {
            font-size: 0.75em;
        }
    
        .dynamicDropdown{
            width: 20vw;
            font-size: 0.85em;
        }
    
        .dynamicDropdownInfoFor{
            width: auto;
            font-size: 0.9em;
        }
    
        #header-nav-wrapper .dynamicDropdown ul a {
            white-space: normal;
        }
    
        .mega_search{
            width: 80vw;
            right: 76vw;
        }
    
      
    
        .input-group.cse input {
            padding: 0.1em 0;
        }
    
        .input-group.cse .desktop-search {
            width: 70vw;
        }
    
       .form-control {
          width: 75%;
       }
        
        #closeSearchButton{
            top: 3vw;
        }
    
        #searchButton{
            top: 3.25vw;
        }
        
        #first-name-search, #last-name-search{
            width: 35vw;
        }
    
        ul#iconList a{
            margin: 10px 0 0 0;
    
        }
    }
    
    @media only screen and (max-width: 900px) and (min-width: 769px) {
        #footerImage{
            width: 80%;
        }
    }
    
    
    @media only screen and (max-width: 768px) {
    
        #header-nav{
            display: none;
        }
    
        #top {
            display: none;
        }
    
        .searchSvg{
            width: 3vw; 
            margin: auto;
        }
    
        #mobileNavHeader {
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content: space-between;
            width: auto;
            background-color: #FFF;
            height: 8.5vh;
            padding: .5em 1em 0 1em;
        }
    
        #mobileNavHeader div:first-child {
            display: flex;
            align-items: center;
        }
    
        .mega_search {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100vw;
            position: static;
            background-color: var(--color-dark-green);
            height: 12vh;
        }
    
        .input-group.cse {
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content: center;
            margin: auto;
        }
    
        .input-group.cse .desktop-search {
            border-radius: 0;
            margin: 0;
            width: 85vw;
        }
    
       form#simple{
          width: 100vw;
       }
    
       .form-control{
          width: 75%;
       }
    
        #first-name-search2, #last-name-search2 {
            width: 40vw;
            display: none;
            margin: 0;
        }
    
        #site-people-radios{
            margin-right: 4vw;
        }
    
        .hamburgerContainer {
            display: inline-block;
            cursor: pointer;
            height: 4vh;
            position: absolute;
            right: 5%;
            top: 3.5vh;
        }
    
        .bar1, .bar2, .bar3 {
            width: 20px;
            height: 4px;
            background-color: var(--color-dark-green);
            margin: 4px 0;
            transition: 0.4s;
        }
    
        .change .bar1 {
            -webkit-transform: rotate(-405deg) translate(-6px, 4px);
            transform: rotate(-405deg) translate(-6px, 4px);
        }
    
        .change .bar2 {
            opacity: 0;
        }
    
        .change .bar3 {
            -webkit-transform: rotate(405deg) translate(-7px, -6px);
            transform: rotate(405deg) translate(-7px, -6px);
        }
    
        #mobileNav form {
            max-width: 100%;
        }
    
    
        #mobileTopNav {
            display: block;
            background-color: #FFF;
        }
    
        #mobileTopNav ul {
            display: flex;
            flex-direction: column;
            height: 100%;
            list-style: none;
    padding:0;
        }
        #mobileTopNav > ul > li {
            align-items: center;
            border-bottom: 2px solid #dfdfdf;
        }
        .topLinks {
            display: block;
            max-width: 100%;
            max-height: 100%;
            padding: 12px;
            background-color: #EFEFEF;
            color: var(--color-dark-green);
            font-weight: bolder;
        }
    
        #mobileTopNav ul > li:last-child {
            border-bottom: none;
        }
    
        .mdropdown-top > div:first-child {
            display: grid;
            grid-template-columns: 1fr 53.33px;
        }
    
        .mdropdown-top > div div:last-child {
            background-color: #4A7729;
            height: 100%;
            
            display: flex;
            justify-content: center;
            align-items: center;
    
            color: white;
            cursor: pointer;
        }
    
        .mdropdown-a > ul {
            width: 95%;
            margin: auto;
            background-color: #f5f5f5;
        }
    
        .mdropdown-a > ul > li {
            border-top: 1px solid #fff;
            padding: 10px;
            border-left: 4px solid #f5f5f5;
        }
    
        .mdropdown-a > ul > li:hover {
            border-left: 4px solid var(--color-dark-green);
        }
    
        .mdropdown-a > ul > li > a {
            color: #565656;
            font-weight: 675;
        }
    
        .toggleMobileDropUp {
        }
    
        .toggleMobileDropDown {
        }
    
        .up {
            transition-duration: 0.25s;
        }
    
        .down {
            transform: scale(-1, -1);
            transition-duration: 0.25s;
        }
    
        #mobileDrop1, #mobileDrop2, #mobileDrop3 {
            display: none;
        }
    
        #mobileBottomNav {
            display: block;
            background-color: #ebebeb;
            padding: 12px;
        }
        
        #mobileBottomNav > div > ul {
            display: flex;
            flex-direction: column;
            height: 100%;
            color: var(--color-white);
    padding:0;
        }
    
        #mobileBottomNav > div > ul > li {
            list-style: none;
            text-transform: uppercase;
            background: var(--color-dark-green);
            border-bottom: 2px solid #ebebeb;
    
            text-align: center;
        }
    
        #mobileBottomNav ul li:last-child {
            border-bottom: none;
        }
    
        #mobileBottomNav > div > ul > li > a {
            font-weight: bolder;
            color: var(--color-white);
            padding: 12px 0;
    
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    
        #mobileBottomNav > div > ul > li > a {
            transition: color 0.25s;
        }
    
        #mobileBottomNav > div > ul > li > a:hover {
            color:hsl(41, 87%, 57%);
        }
    
        .mdropdown-b {
            display: none;
            position: static;
        }
    
        .mdropdown-b > ul {
            display: block;
            background-color: white;
            border: 1px solid black;
            border-top: none;
        }
    
        .mdropdown-b > ul > li {
            background: white;
            text-transform: none;
            text-align: left;
            width: 100%;
            display: flex;
            transition: background 0.2s;
        }
    
        .mdropdown-b > ul > li:hover {
            background: #F1F1F1;
        }
    
        .mdropdown-b > ul > li > a {
            color: black;
            font-weight: 500;
            width: inherit;
            padding: 5px 20px;
        }
    
        #informationForToggler {
            position: absolute;
            right: 5%;
            display: inline;
        }
    
        #informationForDiv{
            display: inline;
        }
    
        /*Daniel stop working on nav's herey*/
        /*nav changes end here*/
        #headerText {
            font-size: 3em;
            text-align: left;
            margin-left: 3vw;
        }
    
    #learningCommonsSpan{
         font-size: 125%;
         text-align: left;
         margin-left: 3vw;
    }
    
        #hero div {
            max-width: 100%;
        }
        
        .search-box{
           width: 100vw;
        }
    
        .form-control {
           width: 70%;
        }
    
        #go{
            width: 20%;
        }
        
        footer{
            display: inline-block;
            width: 100vw;
            text-align: center;
            padding: 0;
            padding-bottom: 5%;
            footer: 0.85em;
        }
        
        #footerImage{
            width: 30%;
            margin-bottom: 5%;
        }
    
        #footerText{
            display: none;
        }
    
        #footerTextMobile{
            display: block;
            color: #cacaca;
        }
        
        #footerColumn1, #footerColum4{
            margin: 5% auto;
        }
    
        #footerColumn2, #footerColumn3 {
            display: none;
        }
        
        #footerColumn2-3{
            max-width: 100vw;
            margin: 5%;
            display: flex;
            flex-direction: row;
            align-items: center;
            align-content: center;
            justify-content: space-between;
        }
        
        ul#iconList {
            width: 100%;
        }
    
        ul#iconList a{
            margin: 5% 0;
            width: 6vw;
            height: 6vw;
        }
        
    
        ul#iconList a svg{
            width: 3vw;
            height: 3vw;
            margin: 1.15vw;
        }
    
    }
    
            </style>
    
    
    <link rel="icon" href="https://library.laverne.edu/wp-content/themes/laverne2017/img/favicon.ico">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script type="text/javascript">
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
    
            </script>











































Header HTML Code


<div id="top">
    <div id="top-wrapper">
        <ul>
            <li style="margin-right: 30px">
                <a href="#">Information For:</a>

                <div class="dynamicDropdown dropdownInfoFor">
                    <ul>
                        <li><a href="https://library.laverne.edu/faculty/" style="color: #333">Faculty</a></li>
                        <li><a href="https://library.laverne.edu/regional-online-students/" style="color: #333">Regional and Online Students</a></li>
                        <li><a href="https://laverne.libguides.com/alumni" style="color: #333">Alumni</a></li>
                        <li><a href="https://library.laverne.edu/visitors/" style="color: #333">Visitors</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="https://library.laverne.edu/ask-us/">Ask Us</a></li>
            <li><a href="https://laverne.primo.exlibrisgroup.com/discovery/account?vid=01UOLV_INST:01UOLV&section=overview&lang=en">Books</a></li>
            <li><a href="https://299.account.worldcat.org/account">Interlibrary Loan Login</a></li>
            <li><a href="https://library.laverne.edu/support-your-library/">Support Your Library</a></li>
        </ul>
    </div>
</div>

<div id="header-nav">
    <div id="header-nav-wrapper">
        <nav>
            <ul>
                <li>
                    <header>
                        <div>
                            <a class="hdr-logo-link" href="https://library.laverne.edu" rel="home" aria-label="University of La Verne" aria-describedby="home-logo-link-desc">
                                <svg id="svgHeader" version="1.1" id="Artwork" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100.8 36" width="152" height="56" style="enable-background:new 0 0 100.8 36;" xml:space="preserve">
                                    <style type="text/css">
                                        .st0{fill:#2D4734;}
                                    </style>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path class="st0" d="M91.4,9.8c0,1.9-1.5,3.6-3.2,3.6c-1.4,0-2.3-1-2.3-2.4c0-1.9,1.5-3.6,3.2-3.6C90.6,7.4,91.4,8.4,91.4,9.8z
                                                         M89.2,8c-1.2,0-2,2.1-2,3.5c0,0.8,0.4,1.3,1,1.3c1.2,0,2-2.1,2-3.5C90.2,8.4,89.9,8,89.2,8z"></path>
                                                    <path class="st0" d="M90.9,14.6c0-0.4,0.3-0.8,0.8-0.8c0.4,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.2,0.5c0.4,0,0.6-0.2,1-2.1
                                                        l0.9-4.4h-1.2L93,7.6h1.2c0.4-2.1,1.6-3.1,2.9-3.1c1,0,1.4,0.6,1.4,1.1c0,0.6-0.4,1.1-0.9,1.1C97.3,6.6,97,6.4,97,6
                                                        c0-0.2,0.1-0.6,0.4-0.8c-0.1-0.1-0.2-0.1-0.3-0.1c-0.9,0-1.2,0.7-1.5,2.2l-0.1,0.4h1.7l-0.2,0.7h-1.6l-0.9,4.1
                                                        c-0.5,2.3-1.6,3-2.5,3C91.2,15.4,90.9,15.1,90.9,14.6z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path class="st0" d="M3.1,9.7V2.6H1.4V1.4h5.4v1.2H5v6.5c0,2.3,1.2,3.2,3.4,3.2c1,0,1.6-0.3,2.2-0.8c0.6-0.6,0.7-1.4,0.7-2.8
                                                        V2.6H9.3V1.4h4.9v1.2h-1.7v7.1c0,2-1.7,3.9-4.8,3.9C4.7,13.6,3.1,12,3.1,9.7z"></path>
                                                    <path class="st0" d="M14.4,12.1h1.3V6.2h-1.3V5h3v2.1c0.9-1.6,1.9-2.2,3.1-2.2c1.3,0,2.2,1,2.2,2.6v4.6H24v1.2h-4.2v-1.2H21v-4
                                                        c0-0.6-0.1-1.1-0.5-1.4c-0.2-0.2-0.6-0.4-1-0.4c-1,0-2.2,1-2.2,2.7v3.1h1.2v1.2h-4.2V12.1z"></path>
                                                    <path class="st0" d="M25,12.1h1.5V6.2H25V5h3.2v7.1h1.5v1.2H25V12.1z M26.1,2.1c0-0.7,0.5-1.2,1.2-1.2c0.7,0,1.2,0.5,1.2,1.2
                                                        c0,0.7-0.5,1.2-1.2,1.2C26.5,3.3,26.1,2.8,26.1,2.1z"></path>
                                                    <path class="st0" d="M30.8,6.2h-1.2V5H34v1.2h-1.4l2,5.5h0.1l2-5.5h-1.2V5h3.5v1.2h-1l-2.8,7.2h-1.6L30.8,6.2z"></path>
                                                    <path class="st0" d="M41.1,9.3c0.1,2,0.9,3.1,2.5,3.1c1,0,1.8-0.4,2.3-1.5h0.9c-0.5,1.8-1.8,2.7-3.6,2.7c-2.5,0-4-1.8-4-4.2
                                                        c0-2.5,1.7-4.4,4.1-4.4c2.5,0,3.6,2.2,3.5,4.4H41.1z M41.1,8.4h4c-0.1-1.5-0.7-2.6-1.9-2.6C42,5.8,41.2,6.6,41.1,8.4z"></path>
                                                    <path class="st0" d="M47.8,12.1h1.3V6.2h-1.3V5h3v1.9c0.4-1.4,1.5-2,2.4-2c0.9,0,1.4,0.6,1.4,1.4c0,0.6-0.5,1.2-1.1,1.2
                                                        c-0.6,0-1.1-0.4-1.1-1.1c0-0.1,0-0.2,0-0.3c-0.8,0-1.4,0.9-1.7,2v4h1.6v1.2h-4.6V12.1z"></path>
                                                    <path class="st0" d="M55.6,10.3h1.1c0.5,1.3,1.5,2.2,2.6,2.2c1,0,1.4-0.5,1.4-1.2c0-0.7-0.6-1.1-2.2-1.5c-2-0.6-2.8-1.2-2.8-2.6
                                                        c0-1.3,1.2-2.5,2.9-2.5c0.8,0,1.6,0.3,2,1l0.2-1h1.1v2.8h-1.1c-0.6-1.2-1.1-2-2.2-2c-0.6,0-1.3,0.4-1.3,1c0,0.7,0.6,1.1,2.1,1.5
                                                        c1.9,0.5,2.8,1.1,2.8,2.5c0,1.2-1.1,2.6-3,2.6c-1,0-1.9-0.4-2.4-1.1l-0.2,1.1h-1V10.3z"></path>
                                                    <path class="st0" d="M63.5,12.1H65V6.2h-1.5V5h3.2v7.1h1.5v1.2h-4.7V12.1z M64.6,2.1c0-0.7,0.5-1.2,1.2-1.2
                                                        c0.7,0,1.2,0.5,1.2,1.2c0,0.7-0.5,1.2-1.2,1.2C65.1,3.3,64.6,2.8,64.6,2.1z"></path>
                                                    <path class="st0" d="M71.8,2.9v2.2h2.7v1.1h-2.7v4.9c0,0.8,0.2,1.2,1,1.2c0.5,0,0.9-0.5,1.3-1.4l0.8,0.3
                                                        c-0.5,1.6-1.4,2.2-2.6,2.2c-1.4,0-2.2-0.8-2.2-2.2v-5h-1.6V5.1h1.6V3.1L71.8,2.9z"></path>
                                                    <path class="st0" d="M77.7,14.8c0,0.2-0.1,0.5-0.1,0.6c0.7-0.2,1.2-0.5,1.7-2.1l-2.9-7h-1.2V5h4.4v1.2h-1.4l1.9,5.2l2-5.2H81V5
                                                        h3.5v1.2h-1.1l-2.9,6.9c-1.1,2.6-2.2,3.2-3.4,3.2c-1.1,0-1.7-0.6-1.7-1.4c0-0.6,0.5-1.2,1.1-1.2C77.3,13.7,77.7,14.2,77.7,14.8z
                                                        "></path>
                                                </g>
                                            </g>
                                            <g>
                                                <path class="st0" d="M10.3,17.2v1.8h-3v14.1H11c2.2,0,2.6-0.5,3.9-4.8h1.3v6.6H1.6v-1.8h3V18.9h-3v-1.8H10.3z"></path>
                                                <path class="st0" d="M18.3,31.8c0-0.9,0.3-1.6,0.9-2.3c1-1,2.3-1.3,4.6-1.6c1.6-0.2,1.9-0.3,1.9-0.8v-1.3c0-1.6-0.8-2.2-2.4-2.2
                                                    c-0.8,0-1.4,0.2-2.1,0.5c0.5,0.2,0.8,0.8,0.8,1.3c0,0.8-0.6,1.5-1.6,1.5c-1,0-1.6-0.8-1.6-1.6c0-2,2.3-3.1,5.1-3.1
                                                    c2.8,0,4.4,1.2,4.4,3.7v6.2c0,0.6,0.2,0.9,0.8,0.9c0.4,0,0.7-0.4,1-1l0.9,0.6c-0.6,1.5-1.6,2.1-2.8,2.1c-1.1,0-2.2-0.6-2.2-2.2
                                                    h-0.1c-0.7,1.3-2.4,2.2-4,2.2C19.6,35,18.3,33.7,18.3,31.8z M25.7,30.8v-2.1c-0.2,0.1-0.5,0.2-1.2,0.3c-2.6,0.4-3.4,0.7-3.4,2.3
                                                    c0,1.2,0.6,2,2,2C24.3,33.3,25.7,32.2,25.7,30.8z"></path>
                                                <path class="st0" d="M34.8,18.9h-2.4v-1.8h8.3v1.8h-2.8l4.5,12.9h0.2l4.8-12.9h-2.2v-1.8h6.2v1.8h-1.9l-6.2,16h-2.5L34.8,18.9z"></path>
                                                <path class="st0" d="M51.7,28.9c0.1,3,1.4,4.5,3.8,4.5c1.5,0,2.6-0.6,3.4-2.3h1.3c-0.7,2.6-2.6,4-5.4,4c-3.8,0-5.9-2.7-5.9-6.3
                                                    c0-3.7,2.6-6.5,6.1-6.5c3.7,0,5.3,3.3,5.2,6.5H51.7z M51.7,27.6h5.9c-0.2-2.3-1-3.8-2.8-3.8C53,23.8,51.9,24.8,51.7,27.6z"></path>
                                                <path class="st0" d="M62,33.1h2v-8.8h-2v-1.8h4.4v2.8c0.6-2.1,2.2-3,3.6-3c1.4,0,2.2,0.9,2.2,2.1c0,0.9-0.7,1.8-1.6,1.8
                                                    c-0.9,0-1.7-0.6-1.7-1.6c0-0.1,0-0.3,0.1-0.5c-1.2-0.1-2,1.3-2.5,2.9v6h2.3v1.8H62V33.1z"></path>
                                                <path class="st0" d="M73,33.1h2v-8.8h-2v-1.8h4.4v3.1c1.4-2.3,2.9-3.3,4.6-3.3c2,0,3.3,1.4,3.3,3.8v6.9h2v1.8H81v-1.8h1.8v-5.9
                                                    c0-0.9-0.2-1.7-0.7-2.2c-0.4-0.3-0.8-0.5-1.5-0.5c-1.5,0-3.2,1.5-3.2,4v4.7h1.8v1.8H73V33.1z"></path>
                                                <path class="st0" d="M90.9,28.9c0.1,3,1.4,4.5,3.8,4.5c1.5,0,2.6-0.6,3.4-2.3h1.3c-0.7,2.6-2.6,4-5.3,4c-3.8,0-5.9-2.7-5.9-6.3
                                                    c0-3.7,2.6-6.5,6.1-6.5c3.7,0,5.3,3.3,5.2,6.5H90.9z M91,27.6h5.9c-0.2-2.3-1-3.8-2.8-3.8C92.3,23.8,91.2,24.8,91,27.6z"></path>
                                            </g>
                                        </g>
                                    </g>
                                    </svg>
                            </a>
                        </div>
                    </header>
                </li>
                <li>
                    <a href="#">Study and Learn</a>
                    <div class="dynamicDropdown dd2">
                        <ul>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/asc/academiccoaching">Academic Coaching</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/?b=t">Course Guides</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.primo.exlibrisgroup.com/discovery/search?tab=All&search_scope=CourseReserves&vid=01UOLV_INST:01UOLV">Course Reserves</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/?b=g&d=p">Guides and Tutorials</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/places-to-study/">Study Spaces</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.mywconline.com/">Tutor Appointments</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#">Write and Research</a>
                    <div class="dynamicDropdown dd2">
                        <ul>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/c.php?g=1067009&p=7764488">Writing Help/Support</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.mywconline.com/">Tutor Appointments</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/subject-librarian/">Librarian Appointments</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/chatwithus">Chat with Librarian</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/citations">Citing Sources</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#">Technology</a>
                    <div class="dynamicDropdown dd2">
                        <ul>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/friendly.php?s=technology-request-form">Technology Request Form</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/academictechnology">Technology Support</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/compute-print-copy-scan/">Compute, Scan, Print, Copy</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/c.php?g=1086815&p=7924273">Zoom/Webex Help</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/c.php?g=1086815&p=7924274">Blackboard Help</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/c.php?g=1086815&p=7924275">Qualtrics Help</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/librarymakerspace/3dprinting">3D Printing and Scanning</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/c.php?g=721547&p=6438947">Poster Printing</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#">Services</a>
                    <div class="dynamicDropdown dd2">
                        <ul>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libcal.com/calendar?cid=1683&t=m&d=0000-00-00&cal=1683&inc=0">Workshops</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/asc/academiccoaching">Academic Coaching</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/alumni">Alumni</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/archives">Archives and Special Collections</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/borrow-from-other-libraries/">Borrowing from Other Libraries</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.primo.exlibrisgroup.com/discovery/login?vid=01UOLV_INST:01UOLV&lang=en">Library Account</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libcal.com/reserve/160">Reserve a Room</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/regional-online-students/">ROC Students</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/c.php?g=1067009&p=8333659">Tutoring</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#">Faculty Resources</a>
                    <div class="dynamicDropdown dd3">
                        <ul>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/faculty-resources/fair-use">Copyright</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/oer">Open Education Resources</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/faculty-resources/digication">Promotion and Tenure</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/c.php?g=1086815&p=7924275">Qualtrics Help</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/faculty/instruction/">Request Library Instruction</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/c.php?g=1067009&p=8334477">Request Student Learning Assistants</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/facultyresearchsupport">Research and Publication</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/faculty/suggest-a-purchase/">Suggest and Purchase</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libguides.com/c.php?g=1086815&p=7924273">Zoom/Webex Help</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#">About</a>
                    <div class="dynamicDropdown dd3">
                        <ul>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/about-us/library-a-z/">A-Z Site Index</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/ask-us/">Ask Us</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/about-us/employment/">Employment</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/wp-content/uploads/sites/74/2020/01/librarymap_final.pdf">Floor Maps</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://laverne.libcal.com/hours/">Hours of Operation</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/about-learning-commons/">Libraries and Learning Commons</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/about-us/policies/">Library Use Policies</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/about-wilson-library/library-newsletters/">Newletters</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/a-z-staff-directory/">Staff and Department Directory</a></li>
                            <li onmouseover="hovered(this)" onmouseout="unhovered(this)"><a href="https://library.laverne.edu/visitors/">Visitors</a></li>
                        </ul>
                    </div>
                </li>
                <li id="searchButtonItem">
                    <div id="searchButtonDiv" class="closedSearchForm">
                        <p id="searchButton" onclick="searchClick()">
                            <svg class= "searchSvg"version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4096.000000 4096.000000"
preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,4096.000000) scale(0.100000,-0.100000)"
fill="white" stroke="none">
<path d="M17385 35829 c-2294 -99 -4470 -791 -6395 -2032 -1942 -1252 -3525
-3027 -4550 -5102 -654 -1324 -1063 -2708 -1234 -4175 -61 -525 -80 -873 -80
-1475 -1 -498 7 -692 40 -1085 174 -2060 836 -4022 1952 -5780 742 -1169 1717
-2256 2799 -3122 1447 -1156 3069 -1968 4843 -2422 1725 -442 3558 -514 5326
-211 1663 286 3253 902 4697 1822 98 62 183 113 190 113 6 0 1508 -1496 3337
-3324 2670 -2668 3345 -3338 3425 -3398 371 -275 765 -434 1235 -500 156 -21
516 -16 685 10 576 90 1054 336 1460 753 325 334 543 727 650 1174 55 228 69
351 69 605 0 254 -14 377 -69 605 -80 335 -231 653 -443 940 -60 80 -730 755
-3398 3425 -1828 1829 -3324 3331 -3324 3338 0 7 41 77 91 154 369 570 714
1220 994 1868 890 2065 1214 4337 939 6590 -144 1191 -465 2379 -939 3480
-798 1852 -2023 3493 -3570 4785 -1958 1634 -4337 2643 -6850 2904 -601 63
-1301 85 -1880 60z m946 -3839 c1025 -51 1964 -253 2895 -623 2569 -1021 4547
-3205 5308 -5860 330 -1152 426 -2398 275 -3587 -318 -2509 -1679 -4762 -3759
-6221 -1887 -1324 -4209 -1864 -6500 -1513 -1689 259 -3248 993 -4565 2148
-356 312 -745 722 -1061 1116 -1079 1346 -1749 2985 -1918 4690 -33 331 -40
487 -40 900 0 413 7 569 40 900 236 2385 1436 4584 3331 6102 942 755 2072
1330 3238 1646 884 240 1858 346 2756 302z"/>
</g>
</svg>
                        <p id="closeSearchButton" onclick="closeSesrchClick()">X</p>
                        <form action="https://library.laverne.edu" method="get" id="mega_search" class="mega_search" role="search">
                            <input type="hidden" name="cx" value="009285304065246230251:zwfshjeknsi">
                            <input type="hidden" name="cof" value="FORID:11">
                            <input type="hidden" name="ie" value="UTF-8">
                            <input type="hidden" name="sa" value="Search">

                            <fieldset>
                                <div class="input-group cse" role="group" aria-labelledby="cse-search-desc">
                                    <input type="text" class="form-control desktop-search" placeholder="Enter search terms" id="desktop-search" name="q" aria-labelledby="mega-search-query-label" aria-required="true">
                                    <input type="text" class="form-control first-name-search" placeholder="First Name" id="first-name-search" name="first_name">
                                    <input type="text" class="form-control last-name-search" placeholder="Last Name" id="last-name-search" name="last_name">
                                    <button type="submit" class="input-group-addon-button" aria-label="Submit" tabindex="-1">
                                        <svg class = "searchSvg" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4096.000000 4096.000000"
                                        preserveAspectRatio="xMidYMid meet">
                                       
                                       <g transform="translate(0.000000,4096.000000) scale(0.100000,-0.100000)"
                                       fill="white" stroke="none">
                                       <path d="M17385 35829 c-2294 -99 -4470 -791 -6395 -2032 -1942 -1252 -3525
                                       -3027 -4550 -5102 -654 -1324 -1063 -2708 -1234 -4175 -61 -525 -80 -873 -80
                                       -1475 -1 -498 7 -692 40 -1085 174 -2060 836 -4022 1952 -5780 742 -1169 1717
                                       -2256 2799 -3122 1447 -1156 3069 -1968 4843 -2422 1725 -442 3558 -514 5326
                                       -211 1663 286 3253 902 4697 1822 98 62 183 113 190 113 6 0 1508 -1496 3337
                                       -3324 2670 -2668 3345 -3338 3425 -3398 371 -275 765 -434 1235 -500 156 -21
                                       516 -16 685 10 576 90 1054 336 1460 753 325 334 543 727 650 1174 55 228 69
                                       351 69 605 0 254 -14 377 -69 605 -80 335 -231 653 -443 940 -60 80 -730 755
                                       -3398 3425 -1828 1829 -3324 3331 -3324 3338 0 7 41 77 91 154 369 570 714
                                       1220 994 1868 890 2065 1214 4337 939 6590 -144 1191 -465 2379 -939 3480
                                       -798 1852 -2023 3493 -3570 4785 -1958 1634 -4337 2643 -6850 2904 -601 63
                                       -1301 85 -1880 60z m946 -3839 c1025 -51 1964 -253 2895 -623 2569 -1021 4547
                                       -3205 5308 -5860 330 -1152 426 -2398 275 -3587 -318 -2509 -1679 -4762 -3759
                                       -6221 -1887 -1324 -4209 -1864 -6500 -1513 -1689 259 -3248 993 -4565 2148
                                       -356 312 -745 722 -1061 1116 -1079 1346 -1749 2985 -1918 4690 -33 331 -40
                                       487 -40 900 0 413 7 569 40 900 236 2385 1436 4584 3331 6102 942 755 2072
                                       1330 3238 1646 884 240 1858 346 2756 302z"/>
                                       </g>
                                       </svg>
                                    </button>
                                </div>

                                <div id="site-people-radios" role="group" aria-labelledby="switch-mega-search-type">
                                    <label class="radio-inline"><input type="radio" name="search-target" id="search-target-site" value="site" onclick="siteClicked()" checked="checked">&nbsp;Site</label>
                                    <label class="radio-inline"><input type="radio" name="search-target" id="search-target-people" value="people" onclick="peopleClicked()">&nbsp;People</label>
                                </div>


                            </fieldset>
                        </form>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</div>


<!-- begginning of mobile nav-->
<div id="mobileNavHeader">
    <div>
        <a class="hdr-logo-link" href="https://laverne.edu" rel="home" aria-label="University of La Verne" aria-describedby="home-logo-link-desc">
            <svg id="svgHeader" version="1.1" id="Artwork" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100.8 36" width="152" height="56" style="enable-background:new 0 0 100.8 36;" xml:space="preserve">
        <style type="text/css">
            .st0{fill:#2D4734;}
        </style>
<g>
<g>
<g>
    <g>
        <path class="st0" d="M91.4,9.8c0,1.9-1.5,3.6-3.2,3.6c-1.4,0-2.3-1-2.3-2.4c0-1.9,1.5-3.6,3.2-3.6C90.6,7.4,91.4,8.4,91.4,9.8z
             M89.2,8c-1.2,0-2,2.1-2,3.5c0,0.8,0.4,1.3,1,1.3c1.2,0,2-2.1,2-3.5C90.2,8.4,89.9,8,89.2,8z"></path>
        <path class="st0" d="M90.9,14.6c0-0.4,0.3-0.8,0.8-0.8c0.4,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.2,0.5c0.4,0,0.6-0.2,1-2.1
            l0.9-4.4h-1.2L93,7.6h1.2c0.4-2.1,1.6-3.1,2.9-3.1c1,0,1.4,0.6,1.4,1.1c0,0.6-0.4,1.1-0.9,1.1C97.3,6.6,97,6.4,97,6
            c0-0.2,0.1-0.6,0.4-0.8c-0.1-0.1-0.2-0.1-0.3-0.1c-0.9,0-1.2,0.7-1.5,2.2l-0.1,0.4h1.7l-0.2,0.7h-1.6l-0.9,4.1
            c-0.5,2.3-1.6,3-2.5,3C91.2,15.4,90.9,15.1,90.9,14.6z"></path>
    </g>
</g>
<g>
    <g>
        <path class="st0" d="M3.1,9.7V2.6H1.4V1.4h5.4v1.2H5v6.5c0,2.3,1.2,3.2,3.4,3.2c1,0,1.6-0.3,2.2-0.8c0.6-0.6,0.7-1.4,0.7-2.8
            V2.6H9.3V1.4h4.9v1.2h-1.7v7.1c0,2-1.7,3.9-4.8,3.9C4.7,13.6,3.1,12,3.1,9.7z"></path>
        <path class="st0" d="M14.4,12.1h1.3V6.2h-1.3V5h3v2.1c0.9-1.6,1.9-2.2,3.1-2.2c1.3,0,2.2,1,2.2,2.6v4.6H24v1.2h-4.2v-1.2H21v-4
            c0-0.6-0.1-1.1-0.5-1.4c-0.2-0.2-0.6-0.4-1-0.4c-1,0-2.2,1-2.2,2.7v3.1h1.2v1.2h-4.2V12.1z"></path>
        <path class="st0" d="M25,12.1h1.5V6.2H25V5h3.2v7.1h1.5v1.2H25V12.1z M26.1,2.1c0-0.7,0.5-1.2,1.2-1.2c0.7,0,1.2,0.5,1.2,1.2
            c0,0.7-0.5,1.2-1.2,1.2C26.5,3.3,26.1,2.8,26.1,2.1z"></path>
        <path class="st0" d="M30.8,6.2h-1.2V5H34v1.2h-1.4l2,5.5h0.1l2-5.5h-1.2V5h3.5v1.2h-1l-2.8,7.2h-1.6L30.8,6.2z"></path>
        <path class="st0" d="M41.1,9.3c0.1,2,0.9,3.1,2.5,3.1c1,0,1.8-0.4,2.3-1.5h0.9c-0.5,1.8-1.8,2.7-3.6,2.7c-2.5,0-4-1.8-4-4.2
            c0-2.5,1.7-4.4,4.1-4.4c2.5,0,3.6,2.2,3.5,4.4H41.1z M41.1,8.4h4c-0.1-1.5-0.7-2.6-1.9-2.6C42,5.8,41.2,6.6,41.1,8.4z"></path>
        <path class="st0" d="M47.8,12.1h1.3V6.2h-1.3V5h3v1.9c0.4-1.4,1.5-2,2.4-2c0.9,0,1.4,0.6,1.4,1.4c0,0.6-0.5,1.2-1.1,1.2
            c-0.6,0-1.1-0.4-1.1-1.1c0-0.1,0-0.2,0-0.3c-0.8,0-1.4,0.9-1.7,2v4h1.6v1.2h-4.6V12.1z"></path>
        <path class="st0" d="M55.6,10.3h1.1c0.5,1.3,1.5,2.2,2.6,2.2c1,0,1.4-0.5,1.4-1.2c0-0.7-0.6-1.1-2.2-1.5c-2-0.6-2.8-1.2-2.8-2.6
            c0-1.3,1.2-2.5,2.9-2.5c0.8,0,1.6,0.3,2,1l0.2-1h1.1v2.8h-1.1c-0.6-1.2-1.1-2-2.2-2c-0.6,0-1.3,0.4-1.3,1c0,0.7,0.6,1.1,2.1,1.5
            c1.9,0.5,2.8,1.1,2.8,2.5c0,1.2-1.1,2.6-3,2.6c-1,0-1.9-0.4-2.4-1.1l-0.2,1.1h-1V10.3z"></path>
        <path class="st0" d="M63.5,12.1H65V6.2h-1.5V5h3.2v7.1h1.5v1.2h-4.7V12.1z M64.6,2.1c0-0.7,0.5-1.2,1.2-1.2
            c0.7,0,1.2,0.5,1.2,1.2c0,0.7-0.5,1.2-1.2,1.2C65.1,3.3,64.6,2.8,64.6,2.1z"></path>
        <path class="st0" d="M71.8,2.9v2.2h2.7v1.1h-2.7v4.9c0,0.8,0.2,1.2,1,1.2c0.5,0,0.9-0.5,1.3-1.4l0.8,0.3
            c-0.5,1.6-1.4,2.2-2.6,2.2c-1.4,0-2.2-0.8-2.2-2.2v-5h-1.6V5.1h1.6V3.1L71.8,2.9z"></path>
        <path class="st0" d="M77.7,14.8c0,0.2-0.1,0.5-0.1,0.6c0.7-0.2,1.2-0.5,1.7-2.1l-2.9-7h-1.2V5h4.4v1.2h-1.4l1.9,5.2l2-5.2H81V5
            h3.5v1.2h-1.1l-2.9,6.9c-1.1,2.6-2.2,3.2-3.4,3.2c-1.1,0-1.7-0.6-1.7-1.4c0-0.6,0.5-1.2,1.1-1.2C77.3,13.7,77.7,14.2,77.7,14.8z
            "></path>
    </g>
</g>
<g>
    <path class="st0" d="M10.3,17.2v1.8h-3v14.1H11c2.2,0,2.6-0.5,3.9-4.8h1.3v6.6H1.6v-1.8h3V18.9h-3v-1.8H10.3z"></path>
    <path class="st0" d="M18.3,31.8c0-0.9,0.3-1.6,0.9-2.3c1-1,2.3-1.3,4.6-1.6c1.6-0.2,1.9-0.3,1.9-0.8v-1.3c0-1.6-0.8-2.2-2.4-2.2
        c-0.8,0-1.4,0.2-2.1,0.5c0.5,0.2,0.8,0.8,0.8,1.3c0,0.8-0.6,1.5-1.6,1.5c-1,0-1.6-0.8-1.6-1.6c0-2,2.3-3.1,5.1-3.1
        c2.8,0,4.4,1.2,4.4,3.7v6.2c0,0.6,0.2,0.9,0.8,0.9c0.4,0,0.7-0.4,1-1l0.9,0.6c-0.6,1.5-1.6,2.1-2.8,2.1c-1.1,0-2.2-0.6-2.2-2.2
        h-0.1c-0.7,1.3-2.4,2.2-4,2.2C19.6,35,18.3,33.7,18.3,31.8z M25.7,30.8v-2.1c-0.2,0.1-0.5,0.2-1.2,0.3c-2.6,0.4-3.4,0.7-3.4,2.3
        c0,1.2,0.6,2,2,2C24.3,33.3,25.7,32.2,25.7,30.8z"></path>
    <path class="st0" d="M34.8,18.9h-2.4v-1.8h8.3v1.8h-2.8l4.5,12.9h0.2l4.8-12.9h-2.2v-1.8h6.2v1.8h-1.9l-6.2,16h-2.5L34.8,18.9z"></path>
    <path class="st0" d="M51.7,28.9c0.1,3,1.4,4.5,3.8,4.5c1.5,0,2.6-0.6,3.4-2.3h1.3c-0.7,2.6-2.6,4-5.4,4c-3.8,0-5.9-2.7-5.9-6.3
        c0-3.7,2.6-6.5,6.1-6.5c3.7,0,5.3,3.3,5.2,6.5H51.7z M51.7,27.6h5.9c-0.2-2.3-1-3.8-2.8-3.8C53,23.8,51.9,24.8,51.7,27.6z"></path>
    <path class="st0" d="M62,33.1h2v-8.8h-2v-1.8h4.4v2.8c0.6-2.1,2.2-3,3.6-3c1.4,0,2.2,0.9,2.2,2.1c0,0.9-0.7,1.8-1.6,1.8
        c-0.9,0-1.7-0.6-1.7-1.6c0-0.1,0-0.3,0.1-0.5c-1.2-0.1-2,1.3-2.5,2.9v6h2.3v1.8H62V33.1z"></path>
    <path class="st0" d="M73,33.1h2v-8.8h-2v-1.8h4.4v3.1c1.4-2.3,2.9-3.3,4.6-3.3c2,0,3.3,1.4,3.3,3.8v6.9h2v1.8H81v-1.8h1.8v-5.9
        c0-0.9-0.2-1.7-0.7-2.2c-0.4-0.3-0.8-0.5-1.5-0.5c-1.5,0-3.2,1.5-3.2,4v4.7h1.8v1.8H73V33.1z"></path>
    <path class="st0" d="M90.9,28.9c0.1,3,1.4,4.5,3.8,4.5c1.5,0,2.6-0.6,3.4-2.3h1.3c-0.7,2.6-2.6,4-5.3,4c-3.8,0-5.9-2.7-5.9-6.3
        c0-3.7,2.6-6.5,6.1-6.5c3.7,0,5.3,3.3,5.2,6.5H90.9z M91,27.6h5.9c-0.2-2.3-1-3.8-2.8-3.8C92.3,23.8,91.2,24.8,91,27.6z"></path>
</g>
</g>
</g>
</svg>
        </a>
    </div>

    <div class="hamburgerContainer" id ="hamburgerContainer" onclick="hamburger(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
</div>

<div id="mobileNav">
    <form action="https://library.laverne.edu" method="get" id="mega_search2" class="mega_search" role="search">
        <input type="hidden" name="cx" value="009285304065246230251:zwfshjeknsi">
        <input type="hidden" name="cof" value="FORID:11">
        <input type="hidden" name="ie" value="UTF-8">
        <input type="hidden" name="sa" value="Search">

        <fieldset>
            <div class="input-group cse" role="group" aria-labelledby="cse-search-desc">
                <input type="text" class="form-control desktop-search" placeholder="Enter search terms" id="desktop-search2" name="q" aria-labelledby="mega-search-query-label" aria-required="true">
                <input type="text" class="form-control first-name-search" placeholder="First Name" id="first-name-search2" name="first_name">
                <input type="text" class="form-control last-name-search" placeholder="Last Name" id="last-name-search2" name="last_name">
                <button type="submit" class="input-group-addon-button" aria-label="Submit" tabindex="-1">
                    <svg class = "searchSvg" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4096.000000 4096.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,4096.000000) scale(0.100000,-0.100000)"
fill="white" stroke="none">
<path d="M17385 35829 c-2294 -99 -4470 -791 -6395 -2032 -1942 -1252 -3525
-3027 -4550 -5102 -654 -1324 -1063 -2708 -1234 -4175 -61 -525 -80 -873 -80
-1475 -1 -498 7 -692 40 -1085 174 -2060 836 -4022 1952 -5780 742 -1169 1717
-2256 2799 -3122 1447 -1156 3069 -1968 4843 -2422 1725 -442 3558 -514 5326
-211 1663 286 3253 902 4697 1822 98 62 183 113 190 113 6 0 1508 -1496 3337
-3324 2670 -2668 3345 -3338 3425 -3398 371 -275 765 -434 1235 -500 156 -21
516 -16 685 10 576 90 1054 336 1460 753 325 334 543 727 650 1174 55 228 69
351 69 605 0 254 -14 377 -69 605 -80 335 -231 653 -443 940 -60 80 -730 755
-3398 3425 -1828 1829 -3324 3331 -3324 3338 0 7 41 77 91 154 369 570 714
1220 994 1868 890 2065 1214 4337 939 6590 -144 1191 -465 2379 -939 3480
-798 1852 -2023 3493 -3570 4785 -1958 1634 -4337 2643 -6850 2904 -601 63
-1301 85 -1880 60z m946 -3839 c1025 -51 1964 -253 2895 -623 2569 -1021 4547
-3205 5308 -5860 330 -1152 426 -2398 275 -3587 -318 -2509 -1679 -4762 -3759
-6221 -1887 -1324 -4209 -1864 -6500 -1513 -1689 259 -3248 993 -4565 2148
-356 312 -745 722 -1061 1116 -1079 1346 -1749 2985 -1918 4690 -33 331 -40
487 -40 900 0 413 7 569 40 900 236 2385 1436 4584 3331 6102 942 755 2072
1330 3238 1646 884 240 1858 346 2756 302z"/>
</g>
</svg>
                </button>
            </div>

            <div id="site-people-radios" role="group" aria-labelledby="switch-mega-search-type">
                <label class="radio-inline"><input type="radio" name="search-target" id="search-target-site" value="site" onclick="siteClicked()" checked="checked">&nbsp;Site</label>
                <label class="radio-inline"><input type="radio" name="search-target" id="search-target-people" value="people" onclick="peopleClicked()">&nbsp;People</label>
            </div>


        </fieldset>
    </form>

    <!--Daniel start working on nav's here, change id & class names accordingly-->
    <div id="mobileTopNav">
        <ul>
            <li class="mdropdown-top">
                <div>
                    <div>
                        <a href="#" class="topLinks">Study and Learn</a>
                    </div>
                    <div class = "toggleMobileDropUp" onclick="toggleMobileDrop(this)">
                        <p id="content1" class="down">^</p>
                    </div>
                </div>
                <div class="mdropdown-a drop1" id="mobileDrop1">
                    <ul>
                        <li><a href="https://laverne.libguides.com/asc/academiccoaching">Academic Coaching</a></li>
                        <li><a href="https://laverne.libguides.com/?b=t">Course Guides</a></li>
                        <li><a href="https://laverne.primo.exlibrisgroup.com/discovery/search?tab=All&search_scope=CourseReserves&vid=01UOLV_INST:01UOLV&lang=en">Course Reserves</a></li>
                        <li><a href="https://laverne.libguides.com/?b=g&d=p">Guides and Tutorials</a></li>
                        <li><a href="https://library.laverne.edu/places-to-study/">Study Spaces</a></li>
                        <li><a href="https://laverne.mywconline.com/">Tutor Appointments</a></li>
                    </ul>
                </div>
            </li>
            <li class="mdropdown-top">
                <div>
                    <div>
                        <a href="#" class="topLinks">Write and Research</a>
                    </div>
                    <div class = "toggleMobileDropUp" onclick="toggleMobileDrop(this)">
                        <p id="content1" class="down">^</p>
                    </div>
                </div>
                <div class="mdropdown-a drop1" id="mobileDrop1">
                    <ul>
                        <li><a href="https://laverne.libguides.com/c.php?g=1067009&p=7764488">Writing Help/Support</a></li>
                        <li><a href="https://laverne.mywconline.com/">Tutor Appointments</a></li>
                        <li><a href="https://library.laverne.edu/subject-librarian/">Librarian Appointments</a></li>
                        <li><a href="https://laverne.libguides.com/chatwithus">Chat with Librarian</a></li>
                        <li><a href="https://laverne.libguides.com/citations">Citing Sources</a></li>
                    </ul>
                </div>
            </li>
            <li class="mdropdown-top">
                <div>
                    <div>
                        <a href="#" class="topLinks">Technology</a>
                    </div>
                    <div class="toggleMobileDropUp" onclick="toggleMobileDrop(this)">
                        <p id="content2" class="down">^</p>
                    </div>
                </div>
                <div class="mdropdown-a drop2" id="mobileDrop2">
                    <ul>
                        <li><a href="https://laverne.libguides.com/technology-request-form">Technology Request Form</a></li>
                        <li><a href="https://laverne.libguides.com/academictechnology">Technology Support</a></li>
                        <li><a href="https://library.laverne.edu/compute-print-copy-scan/">Compute, Scan, Print, Copy</a></li>
                        <li><a href="https://laverne.libguides.com/c.php?g=1086815&p=7924273">Zoom/Webex Help</a></li>
                        <li><a href="https://laverne.libguides.com/c.php?g=1086815&p=7924274">Blackboard Help</a></li>
                        <li><a href="https://laverne.libguides.com/c.php?g=1086815&p=7924275">Qualtrics Help</a></li>
                        <li><a href="https://laverne.libguides.com/librarymakerspace/3dprinting">3D Printing and Scanning</a></li>
                        <li><a href="https://laverne.libguides.com/c.php?g=721547&p=6438947">Poster Printing</a></li>
                    </ul>
                </div>
            </li>
            <li class="mdropdown-top">
                <div>
                    <div>
                        <a href="#" class="topLinks">Services</a>
                    </div>
                    <div class="toggleMobileDropUp" onclick="toggleMobileDrop(this)">
                        <p id="content3" class="down">^</p>
                    </div>
                </div>
                <div class="mdropdown-a drop3" id="mobileDrop3">
                    <ul>
                        <li><a href="https://laverne.libcal.com/calendar?cid=1683&t=m&d=0000-00-00&cal=1683&inc=0">Workshops</a></li>
                        <li><a href="https://laverne.libguides.com/asc/academiccoaching">Academic Coaching</a></li>
                        <li><a href="https://laverne.libguides.com/alumni">Alumni</a></li>
                        <li><a href="https://laverne.libguides.com/archives">Arhives and Special Collections</a></li>
                        <li><a href="https://library.laverne.edu/borrow-from-other-libraries/">Borrowing from Other Libraries</a></li>
                        <li><a href="https://laverne.primo.exlibrisgroup.com/discovery/login?vid=01UOLV_INST:01UOLV&lang=en">Library Account</a></li>
                        <li><a href="https://laverne.libcal.com/reserve/160">Reserve a Room</a></li>
                        <li><a href="https://library.laverne.edu/regional-online-students/">ROC Students</a></li>
                        <li><a href="https://laverne.libguides.com/c.php?g=1067009&p=8333659">Tutoring</a></li>
                    </ul>
                </div>
            </li>
            <li class="mdropdown-top">
                <div>
                    <div>
                        <a href="#" class="topLinks">Faculty Resources</a>
                    </div>
                    <div class = "toggleMobileDropUp" onclick="toggleMobileDrop(this)">
                        <p id="content1" class="down">^</p>
                    </div>
                </div>
                <div class="mdropdown-a drop1" id="mobileDrop1">
                    <ul>
                        <li><a href="https://laverne.libguides.com/faculty-resources/fair-use">Copyright</a></li>
                        <li><a href="https://laverne.libguides.com/oer">Open Education Resources</a></li>
                        <li><a href="https://laverne.libguides.com/faculty-resources/digication">Promotion and Tenure</a></li>
                        <li><a href="https://laverne.libguides.com/c.php?g=1086815&p=7924275">Qualtrics Help</a></li>
                        <li><a href="https://library.laverne.edu/faculty/instruction/">Request Library Instruction</a></li>
                        <li><a href="https://laverne.libguides.com/c.php?g=1067009&p=8334477">Request Student Learning Assistants</a></li>
                        <li><a href="https://laverne.libguides.com/facultyresearchsupport">Research and Publication</a></li>
                        <li><a href="https://library.laverne.edu/faculty/suggest-a-purchase/">Suggest a Purchase</a></li>
                        <li><a href="https://laverne.libguides.com/c.php?g=1086815&p=7924273">Zoom/Webex help</a></li>
                    </ul>
                </div>
            </li>
            <li class="mdropdown-top">
                <div>
                    <div>
                        <a href="#" class="topLinks">About</a>
                    </div>
                    <div class = "toggleMobileDropUp" onclick="toggleMobileDrop(this)">
                        <p id="content1" class="down">^</p>
                    </div>
                </div>
                <div class="mdropdown-a drop1" id="mobileDrop1">
                    <ul>
                        <li><a href="https://library.laverne.edu/about-us/library-a-z/">A-Z Site Index</a></li>
                        <li><a href="https://library.laverne.edu/ask-us/">Ask Us</a></li>
                        <li><a href="https://library.laverne.edu/about-us/employment/">Employment</a></li>
                        <li><a href="https://library.laverne.edu/wp-content/uploads/sites/74/2020/01/librarymap_final.pdf">Floor Maps</a></li>
                        <li><a href="https://laverne.libcal.com/hours/">Hours of Operation</a></li>
                        <li><a href="https://library.laverne.edu/about-learning-commons/">Libraries and Learning Commons</a></li>
                        <li><a href="https://library.laverne.edu/about-us/policies/">Library Use Policies</a></li>
                        <li><a href="https://library.laverne.edu/about-wilson-library/library-newsletters/">Newsletters</a></li>
                        <li><a href="https://library.laverne.edu/a-z-staff-directory/">Staff and Department Directory</a></li>
                        <li><a href="https://library.laverne.edu/visitors/">Visitors</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>

    <div id="mobileBottomNav">
        <div>
            <ul>
                <li>
                    <a href="#" class="toggleMobileDropUp" id ="informationForDiv" onclick="toggleMobileBottomNav(this)">
                        Information For:
                        <div id="informationForToggler">
                            <p class="down">^</p>
                        </div>
                    </a>
                    <div class="mdropdown-b">
                        <ul>
                            <li><a href="https://library.laverne.edu/faculty/">Faculty</a></li>
                            <li><a href="https://library.laverne.edu/regional-online-students/">Regional and Online Students</a></li>
                            <li><a href="https://laverne.libguides.com/alumni">Alumni</a></li>
                            <li><a href="https://library.laverne.edu/visitors/">Visitors</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="https://library.laverne.edu/ask-us/">Ask Us</a>
                </li>
                <li>
                    <a href="https://laverne.primo.exlibrisgroup.com/discovery/login?vid=01UOLV_INST:01UOLV&lang=en">Renew Books</a>
                </li>
                <li>
                    <a href="https://299.account.worldcat.org/account/requests">Interlibrary Loan Login</a>
                </li>
                <li>
                    <a href="https://library.laverne.edu/support-your-library/">Support Your Library</a>
                </li>
            </ul>
        </div>
    </div>
    <!--Daniel stop working on nav's here -->

</div>





<main>
    <div id="hero">
        <div>
           <p id="learningCommonsSpan">Learning Commons at the</p> 
          <h1 id="headerText" style = "margin-top: 0;">
Wilson Library</h1>
            <div class="search-box">
                <form id="simple" name="searchForm" method="get" target="_self" action="https://laverne.primo.exlibrisgroup.com/discovery/search" enctype="application/x-www-form-urlencoded; charset=utf-8" onsubmit="searchPrimo()">
                    <!-- Customizable Parameters -->
                    <input type="hidden" name="vid" value="01UOLV_INST:01UOLV">
                    <input type="hidden" name="tab" value="All">
                    <input type="hidden" name="search_scope" value="MyInst_and_CI">
                    <input type="hidden" name="mode" value="basic">
                    <!-- Fixed parameters -->
                    <input type="hidden" name="displayMode" value="full">
                    <input type="hidden" name="bulkSize" value="10">
                    <input type="hidden" name="highlight" value="true">
                    <input type="hidden" name="dum" value="true">
                    <input type="hidden" name="query" id="primoQuery">
                    <input type="hidden" name="displayField" value="all">
                    <!-- Enable this if "Expand My Results" is enabled by default in Views Wizard -->
                    <input type="hidden" name="pcAvailabiltyMode" value="true">
                    <input type="text" id="primoQueryTemp" class="form-control" value="" placeholder="Search books, articles, course reserves and more">
                    <!-- Search Button -->
                    <button id="go" title="Search" onclick="searchPrimo()" type="submit" value="Search" alt="Search" class="btn btn-default">Search</button><br>
                    <!-- Scholarly Article Params -->
                    <div class="scholarly-article">
                        <input id="scholarlyarticle" type="checkbox" name="facet" value="tlevel,include,peer_reviewed">
                        <label for="scholarlyarticle">Scholarly Articles Only</label>
                    </div>
                </form>
                </a>
            </div>
        </div>
    </div>
</main>






























Footer HTML Code

<footer>
            <div id="footerColumn1">
                <svg id = "footerImage" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100.8 36" width="152" height="56" style="enable-background:new 0 0 100.8 36;" xml:space="preserve">
                    <style type="text/css">
                        .st1{fill:white;}
                    </style>
                    <g>
                        <g>
                            <g>
                                <g>
                                    <path class="st1" d="M91.4,9.8c0,1.9-1.5,3.6-3.2,3.6c-1.4,0-2.3-1-2.3-2.4c0-1.9,1.5-3.6,3.2-3.6C90.6,7.4,91.4,8.4,91.4,9.8z
                                         M89.2,8c-1.2,0-2,2.1-2,3.5c0,0.8,0.4,1.3,1,1.3c1.2,0,2-2.1,2-3.5C90.2,8.4,89.9,8,89.2,8z"></path>
                                    <path class="st1" d="M90.9,14.6c0-0.4,0.3-0.8,0.8-0.8c0.4,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.2,0.5c0.4,0,0.6-0.2,1-2.1
                                        l0.9-4.4h-1.2L93,7.6h1.2c0.4-2.1,1.6-3.1,2.9-3.1c1,0,1.4,0.6,1.4,1.1c0,0.6-0.4,1.1-0.9,1.1C97.3,6.6,97,6.4,97,6
                                        c0-0.2,0.1-0.6,0.4-0.8c-0.1-0.1-0.2-0.1-0.3-0.1c-0.9,0-1.2,0.7-1.5,2.2l-0.1,0.4h1.7l-0.2,0.7h-1.6l-0.9,4.1
                                        c-0.5,2.3-1.6,3-2.5,3C91.2,15.4,90.9,15.1,90.9,14.6z"></path>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path class="st1" d="M3.1,9.7V2.6H1.4V1.4h5.4v1.2H5v6.5c0,2.3,1.2,3.2,3.4,3.2c1,0,1.6-0.3,2.2-0.8c0.6-0.6,0.7-1.4,0.7-2.8
                                        V2.6H9.3V1.4h4.9v1.2h-1.7v7.1c0,2-1.7,3.9-4.8,3.9C4.7,13.6,3.1,12,3.1,9.7z"></path>
                                    <path class="st1" d="M14.4,12.1h1.3V6.2h-1.3V5h3v2.1c0.9-1.6,1.9-2.2,3.1-2.2c1.3,0,2.2,1,2.2,2.6v4.6H24v1.2h-4.2v-1.2H21v-4
                                        c0-0.6-0.1-1.1-0.5-1.4c-0.2-0.2-0.6-0.4-1-0.4c-1,0-2.2,1-2.2,2.7v3.1h1.2v1.2h-4.2V12.1z"></path>
                                    <path class="st1" d="M25,12.1h1.5V6.2H25V5h3.2v7.1h1.5v1.2H25V12.1z M26.1,2.1c0-0.7,0.5-1.2,1.2-1.2c0.7,0,1.2,0.5,1.2,1.2
                                        c0,0.7-0.5,1.2-1.2,1.2C26.5,3.3,26.1,2.8,26.1,2.1z"></path>
                                    <path class="st1" d="M30.8,6.2h-1.2V5H34v1.2h-1.4l2,5.5h0.1l2-5.5h-1.2V5h3.5v1.2h-1l-2.8,7.2h-1.6L30.8,6.2z"></path>
                                    <path class="st1" d="M41.1,9.3c0.1,2,0.9,3.1,2.5,3.1c1,0,1.8-0.4,2.3-1.5h0.9c-0.5,1.8-1.8,2.7-3.6,2.7c-2.5,0-4-1.8-4-4.2
                                        c0-2.5,1.7-4.4,4.1-4.4c2.5,0,3.6,2.2,3.5,4.4H41.1z M41.1,8.4h4c-0.1-1.5-0.7-2.6-1.9-2.6C42,5.8,41.2,6.6,41.1,8.4z"></path>
                                    <path class="st1" d="M47.8,12.1h1.3V6.2h-1.3V5h3v1.9c0.4-1.4,1.5-2,2.4-2c0.9,0,1.4,0.6,1.4,1.4c0,0.6-0.5,1.2-1.1,1.2
                                        c-0.6,0-1.1-0.4-1.1-1.1c0-0.1,0-0.2,0-0.3c-0.8,0-1.4,0.9-1.7,2v4h1.6v1.2h-4.6V12.1z"></path>
                                    <path class="st1" d="M55.6,10.3h1.1c0.5,1.3,1.5,2.2,2.6,2.2c1,0,1.4-0.5,1.4-1.2c0-0.7-0.6-1.1-2.2-1.5c-2-0.6-2.8-1.2-2.8-2.6
                                        c0-1.3,1.2-2.5,2.9-2.5c0.8,0,1.6,0.3,2,1l0.2-1h1.1v2.8h-1.1c-0.6-1.2-1.1-2-2.2-2c-0.6,0-1.3,0.4-1.3,1c0,0.7,0.6,1.1,2.1,1.5
                                        c1.9,0.5,2.8,1.1,2.8,2.5c0,1.2-1.1,2.6-3,2.6c-1,0-1.9-0.4-2.4-1.1l-0.2,1.1h-1V10.3z"></path>
                                    <path class="st1" d="M63.5,12.1H65V6.2h-1.5V5h3.2v7.1h1.5v1.2h-4.7V12.1z M64.6,2.1c0-0.7,0.5-1.2,1.2-1.2
                                        c0.7,0,1.2,0.5,1.2,1.2c0,0.7-0.5,1.2-1.2,1.2C65.1,3.3,64.6,2.8,64.6,2.1z"></path>
                                    <path class="st1" d="M71.8,2.9v2.2h2.7v1.1h-2.7v4.9c0,0.8,0.2,1.2,1,1.2c0.5,0,0.9-0.5,1.3-1.4l0.8,0.3
                                        c-0.5,1.6-1.4,2.2-2.6,2.2c-1.4,0-2.2-0.8-2.2-2.2v-5h-1.6V5.1h1.6V3.1L71.8,2.9z"></path>
                                    <path class="st1" d="M77.7,14.8c0,0.2-0.1,0.5-0.1,0.6c0.7-0.2,1.2-0.5,1.7-2.1l-2.9-7h-1.2V5h4.4v1.2h-1.4l1.9,5.2l2-5.2H81V5
                                        h3.5v1.2h-1.1l-2.9,6.9c-1.1,2.6-2.2,3.2-3.4,3.2c-1.1,0-1.7-0.6-1.7-1.4c0-0.6,0.5-1.2,1.1-1.2C77.3,13.7,77.7,14.2,77.7,14.8z
                                        "></path>
                                </g>
                            </g>
                            <g>
                                <path class="st1" d="M10.3,17.2v1.8h-3v14.1H11c2.2,0,2.6-0.5,3.9-4.8h1.3v6.6H1.6v-1.8h3V18.9h-3v-1.8H10.3z"></path>
                                <path class="st1" d="M18.3,31.8c0-0.9,0.3-1.6,0.9-2.3c1-1,2.3-1.3,4.6-1.6c1.6-0.2,1.9-0.3,1.9-0.8v-1.3c0-1.6-0.8-2.2-2.4-2.2
                                    c-0.8,0-1.4,0.2-2.1,0.5c0.5,0.2,0.8,0.8,0.8,1.3c0,0.8-0.6,1.5-1.6,1.5c-1,0-1.6-0.8-1.6-1.6c0-2,2.3-3.1,5.1-3.1
                                    c2.8,0,4.4,1.2,4.4,3.7v6.2c0,0.6,0.2,0.9,0.8,0.9c0.4,0,0.7-0.4,1-1l0.9,0.6c-0.6,1.5-1.6,2.1-2.8,2.1c-1.1,0-2.2-0.6-2.2-2.2
                                    h-0.1c-0.7,1.3-2.4,2.2-4,2.2C19.6,35,18.3,33.7,18.3,31.8z M25.7,30.8v-2.1c-0.2,0.1-0.5,0.2-1.2,0.3c-2.6,0.4-3.4,0.7-3.4,2.3
                                    c0,1.2,0.6,2,2,2C24.3,33.3,25.7,32.2,25.7,30.8z"></path>
                                <path class="st1" d="M34.8,18.9h-2.4v-1.8h8.3v1.8h-2.8l4.5,12.9h0.2l4.8-12.9h-2.2v-1.8h6.2v1.8h-1.9l-6.2,16h-2.5L34.8,18.9z"></path>
                                <path class="st1" d="M51.7,28.9c0.1,3,1.4,4.5,3.8,4.5c1.5,0,2.6-0.6,3.4-2.3h1.3c-0.7,2.6-2.6,4-5.4,4c-3.8,0-5.9-2.7-5.9-6.3
                                    c0-3.7,2.6-6.5,6.1-6.5c3.7,0,5.3,3.3,5.2,6.5H51.7z M51.7,27.6h5.9c-0.2-2.3-1-3.8-2.8-3.8C53,23.8,51.9,24.8,51.7,27.6z"></path>
                                <path class="st1" d="M62,33.1h2v-8.8h-2v-1.8h4.4v2.8c0.6-2.1,2.2-3,3.6-3c1.4,0,2.2,0.9,2.2,2.1c0,0.9-0.7,1.8-1.6,1.8
                                    c-0.9,0-1.7-0.6-1.7-1.6c0-0.1,0-0.3,0.1-0.5c-1.2-0.1-2,1.3-2.5,2.9v6h2.3v1.8H62V33.1z"></path>
                                <path class="st1" d="M73,33.1h2v-8.8h-2v-1.8h4.4v3.1c1.4-2.3,2.9-3.3,4.6-3.3c2,0,3.3,1.4,3.3,3.8v6.9h2v1.8H81v-1.8h1.8v-5.9
                                    c0-0.9-0.2-1.7-0.7-2.2c-0.4-0.3-0.8-0.5-1.5-0.5c-1.5,0-3.2,1.5-3.2,4v4.7h1.8v1.8H73V33.1z"></path>
                                <path class="st1" d="M90.9,28.9c0.1,3,1.4,4.5,3.8,4.5c1.5,0,2.6-0.6,3.4-2.3h1.3c-0.7,2.6-2.6,4-5.3,4c-3.8,0-5.9-2.7-5.9-6.3
                                    c0-3.7,2.6-6.5,6.1-6.5c3.7,0,5.3,3.3,5.2,6.5H90.9z M91,27.6h5.9c-0.2-2.3-1-3.8-2.8-3.8C92.3,23.8,91.2,24.8,91,27.6z"></path>
                            </g>
                        </g>
                    </g>
                    </svg>
                <p>
                    Wilson Library<br>
                    2040 3rd Street
                    <br>La Verne, CA 91750
                </p><br>
                <p>(909) 448-4301</p><br><br>
                <p id="footerText"><small>© University of La Verne</small></p>
            </div>

            <div id="footerColumn2">
                <ul>
                    <li><a href="https://library.laverne.edu/library-404-error/">Renew Books</a></li>
                    <li><a href="https://laverne.libguides.com/archives">Archives and Special Collections</a></li>
                    <li><a href="http://laverne.libguides.com/librarymakerspace">Makerspace</a></li>
                    <li><a href="https://library.laverne.edu/about-us/library-a-z/">Library A-Z</a></li>
                    <li><a href="https://laverne.libcal.com">Hours</a></li>
                </ul>
            </div>
            <div id="footerColumn3">
                <h4 id = "footerInformationFor">Information for:</h4><br>
                <ul>
                    <li><a href="https://library.laverne.edu/faculty/">Faculty</a></li>
                    <li><a href="https://library.laverne.edu/regional-online-students/">Regional and Online Students</a></li>
                    <li><a href="http://laverne.libguides.com/alumni">Alumni</a></li>
                    <li><a href="https://library.laverne.edu/visitors/">Visitors</a></li>
                </ul>
            </div>







            <div id="footerColumn2-3">
                <div>
                    <ul>
                        <li><a href="https://library.laverne.edu/library-404-error/">Renew Books</a></li>
                        <li><a href="https://laverne.libguides.com/archives">Archives and Special Collections</a></li>
                        <li><a href="http://laverne.libguides.com/librarymakerspace">Makerspace</a></li>
                        <li><a href="https://library.laverne.edu/about-us/library-a-z/">Library A-Z</a></li>
                        <li><a href="https://laverne.libcal.com">Hours</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Information for:</h4><br>
                    <ul>
                        <li><a href="https://library.laverne.edu/faculty/">Faculty</a></li>
                        <li><a href="https://library.laverne.edu/regional-online-students/">Regional and Online Students</a></li>
                        <li><a href="http://laverne.libguides.com/alumni">Alumni</a></li>
                        <li><a href="https://library.laverne.edu/visitors/">Visitors</a></li>
                    </ul>
                </div>
            </div>

            <div id="footerColumn4">
                <h3 id="connectWithUs">Connect with Wilson Library</h3>
                <ul id="iconList">
                    <a href="https://www.facebook.com/ulavernelibrary">
                    <li>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 4096.000000 4096.000000"
                        preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,4096.000000) scale(0.100000,-0.100000)"
                            fill="white" stroke="none">
                            <path d="M23505 36554 c-982 -26 -1828 -162 -2610 -420 -1293 -428 -2319
                            -1173 -3088 -2242 -696 -968 -1157 -2242 -1311 -3627 -52 -460 -50 -354 -55
                            -2760 l-6 -2250 -1722 -3 -1723 -2 0 -3080 0 -3080 1725 0 1725 0 0 -8720 0
                            -8720 3623 2 3622 3 3 8718 2 8717 2445 0 c1652 0 2445 3 2445 10 0 17 620
                            6062 626 6108 l6 42 -2761 0 -2761 0 0 1903 c0 2035 0 2019 49 2247 140 638
                            576 1043 1224 1135 86 12 411 15 2130 15 l2027 0 0 2989 0 2989 -62 6 c-35 3
                            -1141 8 -2458 11 -1317 3 -2525 7 -2685 9 -159 1 -344 2 -410 0z"/>
                            </g>
                        </svg>
                    </li>
                    </a>

                    <a href="https://twitter.com/ulavernelibrary">
                    <li>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4096.000000 4096.000000"
 preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,4096.000000) scale(0.100000,-0.100000)"
            fill="white" stroke="none">
            <path d="M27335 35829 c-1913 -101 -3709 -902 -5062 -2257 -804 -804 -1414
            -1758 -1804 -2822 -244 -667 -390 -1352 -451 -2115 -16 -207 -16 -909 0 -1115
            30 -376 87 -775 151 -1065 16 -71 28 -131 26 -133 -4 -5 -467 26 -740 49
            -3716 310 -7262 1551 -10360 3624 -1244 833 -2261 1669 -3336 2744 -579 580
            -1021 1064 -1443 1584 -44 53 -83 94 -87 90 -34 -35 -271 -496 -376 -733 -330
            -742 -546 -1550 -627 -2350 -54 -523 -54 -1074 0 -1605 223 -2216 1412 -4244
            3247 -5543 81 -57 146 -106 144 -108 -7 -7 -369 16 -567 37 -742 75 -1481 265
            -2179 561 -177 75 -532 246 -670 323 l-84 47 6 -268 c38 -1524 489 -2938 1335
            -4184 1103 -1626 2791 -2776 4706 -3208 l170 -39 -45 -11 c-1047 -279 -2207
            -335 -3229 -156 -80 14 -162 28 -183 31 l-37 6 51 -149 c713 -2077 2290 -3765
            4319 -4624 785 -332 1681 -543 2510 -591 102 -5 223 -13 270 -17 l84 -7 -199
            -151 c-1403 -1060 -2915 -1852 -4570 -2394 -2088 -683 -4343 -916 -6533 -674
            -79 9 -145 14 -147 12 -5 -4 318 -209 585 -371 823 -498 1751 -975 2640 -1357
            2297 -988 4717 -1566 7215 -1725 532 -33 739 -39 1415 -39 676 0 952 7 1495
            39 4187 251 8009 1568 11250 3877 2628 1872 4822 4357 6440 7293 1619 2939
            2595 6235 2809 9490 39 594 52 1419 33 2085 l-8 275 128 95 c651 484 1160 925
            1763 1529 569 570 1028 1097 1476 1696 210 280 487 675 480 682 -2 3 -78 -27
            -168 -65 -1147 -491 -2353 -842 -3591 -1047 -291 -48 -647 -99 -653 -92 -2 2
            42 32 98 67 1392 863 2506 2195 3111 3720 68 172 180 490 172 490 -3 0 -35
            -18 -72 -41 -273 -167 -957 -524 -1344 -702 -1082 -497 -2166 -856 -3293
            -1090 l-205 -43 -173 174 c-1554 1563 -3695 2388 -5893 2271z"/>
            </g>
            </svg>
                    </li>
                    </a>

                    <a href="https://www.instagram.com/ulavernelibrary/">
                    <li>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4096.000000 4096.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,4096.000000) scale(0.100000,-0.100000)"
fill="white" stroke="none">
<path d="M12410 37483 c-2196 -95 -4067 -663 -5663 -1720 -519 -344 -963 -708
-1417 -1162 -1750 -1751 -2736 -4161 -2860 -6991 -16 -364 -8 -16005 8 -16225
7 -88 21 -263 33 -390 260 -2900 1468 -5298 3529 -7006 1100 -911 2424 -1577
3875 -1950 862 -221 1686 -335 2658 -369 463 -16 15670 -8 15897 8 533 39 845
70 1140 113 2146 313 3946 1118 5440 2433 159 140 516 492 673 664 1451 1588
2313 3682 2516 6112 48 567 46 212 46 8575 0 8249 1 7972 -41 8495 -189 2357
-1019 4405 -2439 6025 -147 167 -462 494 -660 686 -877 845 -1948 1518 -3150
1979 -210 81 -615 216 -836 279 -882 252 -1763 392 -2774 441 -183 9 -15773
12 -15975 3z m16180 -3336 c883 -73 1564 -213 2248 -463 957 -350 1845 -932
2441 -1599 869 -973 1447 -2182 1695 -3545 47 -259 84 -552 118 -940 16 -188
24 -15433 8 -15815 -21 -514 -70 -925 -165 -1385 -353 -1709 -1251 -3128
-2586 -4083 -900 -643 -1989 -1060 -3229 -1237 -384 -55 -661 -77 -1120 -90
-441 -13 -14817 -13 -15260 0 -440 13 -760 39 -1125 91 -1371 197 -2538 680
-3500 1448 -266 213 -483 422 -703 678 -999 1166 -1535 2659 -1622 4523 -14
298 -14 15467 0 15755 88 1822 625 3295 1629 4469 978 1145 2395 1861 4191
2120 265 38 737 79 1020 89 47 2 3611 3 7920 2 7272 -1 7850 -2 8040 -18z"/>
<path d="M29830 31203 c-279 -21 -581 -108 -828 -239 -338 -178 -634 -461
-828 -791 -192 -325 -285 -673 -285 -1063 0 -344 70 -641 223 -942 206 -406
535 -732 943 -933 565 -279 1241 -287 1809 -21 567 265 993 780 1145 1385 81
322 83 689 4 1011 -169 696 -690 1262 -1370 1489 -254 85 -556 124 -813 104z"/>
<path d="M20135 28894 c-281 -8 -660 -38 -944 -75 -2832 -364 -5362 -2045
-6813 -4529 -777 -1329 -1209 -2845 -1246 -4372 -12 -483 7 -937 58 -1373 280
-2377 1466 -4544 3320 -6061 1895 -1551 4331 -2280 6795 -2034 1655 166 3242
784 4580 1785 389 291 641 510 1006 875 405 405 683 730 998 1169 741 1032
1268 2225 1530 3466 309 1464 256 2976 -155 4413 -315 1104 -863 2183 -1578
3107 -469 606 -1047 1188 -1651 1661 -1483 1162 -3269 1843 -5120 1953 -193
11 -616 19 -780 15z m810 -3348 c532 -58 999 -166 1470 -341 1178 -439 2205
-1257 2900 -2309 560 -849 888 -1813 965 -2831 23 -302 12 -777 -26 -1100
-199 -1721 -1170 -3288 -2639 -4260 -730 -483 -1556 -797 -2415 -919 -320 -46
-406 -51 -825 -51 -460 0 -658 16 -1025 81 -2288 408 -4143 2133 -4720 4389
-77 299 -124 577 -162 945 -20 192 -16 852 5 1055 77 710 239 1303 526 1923
388 843 1003 1611 1758 2200 935 728 2057 1153 3263 1236 142 9 783 -3 925
-18z"/>
</g>
</svg>
                    </li>
                    </a>

                    <a href="https://www.youtube.com/user/ulvwilsonlibrary">
                    <li>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4096.000000 4096.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,4096.000000) scale(0.100000,-0.100000)"
fill="white" stroke="none">
<path d="M19695 34813 c-585 -3 -2150 -21 -2895 -33 -5514 -92 -9552 -321
-11535 -656 -762 -129 -1234 -272 -1755 -534 -1048 -526 -1890 -1400 -2370
-2460 -149 -331 -240 -602 -345 -1033 -434 -1787 -711 -4863 -785 -8712 -13
-658 -13 -1152 0 -1810 74 -3852 351 -6925 786 -8715 63 -259 77 -309 146
-520 537 -1646 1910 -2927 3593 -3353 1255 -318 3861 -547 7955 -697 3126
-114 7287 -168 10235 -131 7401 93 12167 390 13831 862 1657 469 2967 1745
3488 3398 260 823 505 2368 661 4166 177 2055 278 4747 247 6628 -75 4531
-450 8125 -1003 9606 -177 474 -454 963 -771 1364 -734 926 -1740 1560 -2893
1826 -1588 365 -5180 617 -10565 741 -1817 42 -4589 71 -6025 63z m-955 -9549
c1285 -742 3673 -2121 5307 -3064 1635 -943 2972 -1717 2972 -1720 0 -5
-10609 -6132 -10629 -6138 -7 -3 -10 2030 -10 6138 0 4910 3 6141 13 6137 6
-3 1063 -612 2347 -1353z"/>
</g>
</svg>

                    </li>
                    </a>

                </ul>
            </div>
            <p id="footerTextMobile"><small>© University of La Verne</small></p>


        </footer>
