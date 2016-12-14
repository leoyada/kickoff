<html>
<head>
    <link REL="STYLESHEET" TYPE="text/css" HREF="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    
    <title> leaderboard </title>
</head>
<body>

   <div id="lBoardCont">

        <h1>FUCK YOU</h1>
        <p>Her kan du se leaderboard</p>
        
        <img src="images/modal_pil-10.svg" id="downArrow" onclick="showBoard()">
        
        <div class="sortByHead">
          <p>Se scoren for</p>
           <img src="images/modal_pil-10.svg" id="leftArrow" onclick="lbHeadline('left')">
            <p class="score_small" id="score_f" onclick="lbHeadline('f')">FODBOLD</p>
            <p class="score_small" id="score_h" onclick="lbHeadline('h')">HÅNDBOLD</p>
            <p class="score_small" id="score_b" onclick="lbHeadline('b')">BASKETBALL</p>
            <p class="score_big" id="score_o" onclick="lbHeadline('o')">OVERALL</p>
            <img src="images/modal_pil-10.svg"  id="rightArrow" onclick="lbHeadline('right')">
        </div>
        <div id="table">
    </div> <!-- /#table-->
    <img src="images/modal_pil-10.svg" id="loadMore" onclick="fiveMore('test')"></img>
</div> <!-- /#lBoardCont-->

</body>
<footer>
    <script src="js/script.js"></script>
</footer>
</html>