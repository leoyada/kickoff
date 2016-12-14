<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Aarhus Kickoff 2017</title>
    <meta name="description" content="Aarhus Kickoff 2017">
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable='no'">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <LINK REL=StyleSheet HREF="css/style.css" TYPE="text/css">
</head>
<body>

    <header> <!-- slet den tossede navbar, den har ingen relevans? -->
        <div id="navbar">
            <div id="bonus"><p>Bonus</p></div>
            <ul>
                <li><a href="#row1">Info</a></li>
                <li><a href="#row2">Program</a></li>
                <li><a href="#row2">Mad</a></li>
                <li><a href="#row3">Partnere</a></li>
                <li><a href="#row3">Talent</a></li>
                <li><a href="#">Følg med</a></li>
            </ul>
        </div>
        <div id="logoCont">
            <img src="images/logo_big_white-outlined.svg" id="logo">
            <img src="images/modal_pil-10.svg" id="hideTopLogo" onclick="topLogo()">
        </div>
        <div id="sideLogo">
            <div><a href="#navbar"><img src="images/logo_rotated-30.svg" id="logoRotated"></a></div>
            <img src="images/modal_pil-10.svg" id="hideSideLogo" onclick="sideLogo()">
        </div>
    </header>
    <div id="container">
        <div id="video">
            <h1>I'm Mr Meeseeks,<br> look at me!</h1>
            <p>Existence is pain Jerry, and we will<br>do <span>anything</span> to alleviate that <span>pain!</span></p>
            <div id="play"><p>Play!</p><img src="images/play-22.svg"></div>
            
        </div>
        <div id="row1">
            <div id="boks1" class="boksSmall"><div class="overlaySmall">
                <p class="text">Lorem Ipsum is simply dummy text</p></div>
            </div><div id="boks2" class="boksBig"><div class="overlayBig">
                <p class="text">Lorem Ipsum is simply dummy text</p></div>
            </div>
        </div>
        <div id="row2">
            <div id="boks3" class="boksBig"><div class="overlayBig">
                <p class="text">Lorem Ipsum is simply dummy text</p></div>
            </div><div id="boks4" class="boksSmall"><div class="overlaySmall">
                <p class="text">Lorem Ipsum is simply dummy text</p></div>
            </div>
        </div>
        <div id="row3">
            <div id="boks5" class="boksSmall"><div class="overlaySmall">
                <p class="text">Lorem Ipsum is simply dummy text</p></div>
            </div><div id="boks6" class="boksBig"><div class="overlayBig">
                <p class="text">Lorem Ipsum is simply dummy text</p></div>
            </div>
        </div>
        
        <!-- Konkurrence section start -->
        <section id="row4">
            <article id="boks7" class="boksMax">
                <div class="overlayMax">
                    <h2>Konkurrence og aktiviteter</h2>
                    <p>Udfyld drømmen at være målscorer, Sæt dit aftryk på Aarhus kickoff, og mange andre ting!</p>
                </div>
            </article>
        </section>
        <!-- Konkurrence section slut -->
        <!-- leaderboard section start -->
        <section id="leaderboard">
            <div id="overlayLeaderboard">
               <header>
                   <img src="images/modal_pil-10.svg" id="downArrow"  onclick="showBoard()">
                
                    <p id="teaser"  onclick="showBoard()">Tryk her for at se pointtavlen!</p>
                </header>

                                
                <article id="lBoardCont">

                    <div class="sortByHead">
                        <img src="images/modal_pil-10.svg" id="leftArrow" onclick="lbHeadline('left')">
                        <p class="score_small" id="score_f" onclick="lbHeadline('f')">FODBOLD</p>
                        <p class="score_small" id="score_h" onclick="lbHeadline('h')">HÅNDBOLD</p>
                        <p class="score_small" id="score_b" onclick="lbHeadline('b')">BASKETBALL</p>
                        <p class="score_big" id="score_o" onclick="lbHeadline('o')">OVERALL</p>
                        <img src="images/modal_pil-10.svg"  id="rightArrow" onclick="lbHeadline('right')">
                    </div>
                    <p id="showLimit">Ser fra 1 til maks 5</p>
                    <div id="table">
                    </div> <!-- /#table-->
                    <div id="loadArrows">
                        <img src="images/modal_pil-10.svg" id="loadMore" onclick="fiveMore('test')"></img>        <img src="images/modal_pil-10.svg" id="loadFewer" onclick="fiveFewer('test')"></img>
                    </div>

                </article> <!-- /#lBoardCont-->
            </div>
        </section>
        <!-- leaderboard section slut -->
        
        
        <div id="socialfeed">
            <h1>Følg os!</h1>
        </div>
        
        <div id="modal">
            <img src="images/modal_kryds-09.svg" id="kryds">
            <div id="modalCont">
            <p class="text modalText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
        </div>
        
    </div>
<footer>
    <p>addresse</p>
    <p>komtesse</p>
    <p>baronesse</p>
    <p id="cr">&#169 Aarhus Kickoff 2017</p>
    
    <script src="js/script.js" type="text/javascript"></script>
</footer>
</body>

</html>
