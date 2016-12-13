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
        
        <img src="images/modal_pil-10.svg" id="downArrow" onclick="sort('o')">
        
        <div class="sortByHead">
          <p>Se scoren for</p>
           <img src="images/modal_pil-10.svg" id="leftArrow" onclick="lbHeadline('left')">
            <p class="score_small" id="score_f">FODBOLD</p>
            <p class="score_small" id="score_h">HÅNDBOLD</p>
            <p class="score_small" id="score_b">BASKETBALL</p>
            <p class="score_big" id="score_o">OVERALL</p>
            <img src="images/modal_pil-10.svg"  id="rightArrow" onclick="lbHeadline('right')">
        </div>
        <div id="table">
<?php
    echo "<table class='leaderboard'>";
    echo "<colgroup>
            <col/>
            <col/>
            <col/>
            <col class='bgCol4'/>
            <col class='bgCol5'/>
            <col class='bgCol6'/>
            <col class='bgCol7'/>
        </colgroup>
            <tr id='lBoardHead'><th>Rang</th><th>Navn</th><th>Alder</th><th>Fodbold</th><th>Håndbold</th><th>Basketball</th><th>Total</th></tr>";
    
    class TableRows extends RecursiveIteratorIterator { 
        function __construct($it) { 
            parent::__construct($it, self::LEAVES_ONLY); 
        }

        function current() {
            return "<td class='cell'>" . parent::current(). "</td>";
        }

        function beginChildren() { 
            echo "<tr>"; 
        } 

        function endChildren() { 
            echo "</tr>" . "\n";
        } 
    }
    
    $servername = "localhost";
    $username = "root";
    $password = "kickoff";
    $dbname = "kickoff";
    
    $usersTable = "users";
    $scoreTable = "score";
       
    try {
        
        $conn = new PDO("mysql:host=$servername;dbname=kickoff", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo "Connected successfully"; 
        
        /*
        //laver et extended scoreboard view
        $sql = "CREATE VIEW score_extended AS (
            SELECT
                score.*,
                CASE WHEN type = 'soccer' THEN point END AS soccer,
                CASE WHEN type = 'handball' THEN point END AS handball,
                CASE WHEN type = 'basketball' THEN point END AS basketball
            FROM score
            );" ;
        $conn->exec($sql);
        
        //grupperer efter uID, og laver view
        $sql = "CREATE VIEW score_pivot AS (
            SELECT
                uID,
                sum(soccer) AS soccer,
                sum(handball) AS handball,
                sum(basketball) AS basketball
            FROM score_extended
            GROUP BY uID
            );" ;
        
        //Gør tabellen pænere, erstatter NULLs med 0, i nyt view
        $sql = "CREATE VIEW score_pivot_pretty AS (
            SELECT 
                uID, 
                COALESCE(soccer, 0) AS soccer, 
                COALESCE(handball, 0) AS handball, 
                COALESCE(basketball, 0) AS basketball 
            FROM score_pivot 
            );" ;
        
        //Laver et view, der viser total
        $sql = "CREATE VIEW total AS (
            SELECT 
                uID, (SUM(soccer)+SUM(handball)+SUM(basketball)) AS Total
            FROM score_pivot_pretty
            GROUP BY uID );" ;
        
        //prøve at vise leaderboard
        $sql = "CREATE VIEW leaderboard AS (
            SELECT 
            a.userName, a.age, b.soccer, b.handball, b.basketball, c.Total 
                FROM 
                    users a 
                        JOIN score_pivot_pretty b 
                            ON a.ID = b.uID 
                        JOIN total c 
                            ON a.ID = c.uID 
                        ORDER BY 
                            c.Total DESC );";
        //$conn->exec($sql);
        */
        
        //bør lave dette om til et view også, det gør det lettere i min sort.php
        $stmt = $conn->prepare("SELECT @rn:=@rn+1 AS rang, userName, age, soccer, handball, basketball, Total
            FROM (
                SELECT userName, age, soccer, handball, basketball, SUM(Total) AS Total
                FROM leaderboard
                GROUP BY userName
                ORDER BY Total DESC LIMIT 10
            ) t1, (SELECT @rn:=0) t2;");
        $stmt->execute();

        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
        foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) { 
            echo $v;
        }
        
    }
    catch(PDOException $e)
        {
        echo "Connection failed: " . $e->getMessage();
    }
    
    ?>
    </div> <!-- /#table-->
</div> <!-- /#lBoardCont-->

<div id="sorted"></div>

</body>
<footer>
    <script src="js/script.js"></script>
</footer>
</html>
