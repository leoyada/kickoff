<?php
    //$limit = 0;
    if(isset($_POST['limit'])) {
        $limit = $_POST['limit'];
        
    } else {
        
    }
    echo "Top $limit";
    //Sort table

    require '../db/connect.php';
    if(isset($_POST['direction'])) {
        if ($_POST['direction'] == 'f') {
            $stmt = $conn->prepare("SELECT @rn:=@rn+1 AS rang, userName, age, soccer, handball, basketball, Total
                FROM (
                    SELECT userName, age, soccer, handball, basketball, SUM(Total) AS Total
                    FROM leaderboard
                    GROUP BY userName
                    ORDER BY soccer DESC LIMIT $limit
                ) t1, (SELECT @rn:=0) t2;");
            $stmt->execute();    
        }
        elseif ($_POST['direction'] == 'h') {
            $stmt = $conn->prepare("SELECT @rn:=@rn+1 AS rang, userName, age, soccer, handball, basketball, Total
                FROM (
                    SELECT userName, age, soccer, handball, basketball, SUM(Total) AS Total
                    FROM leaderboard
                    GROUP BY userName
                    ORDER BY handball DESC LIMIT $limit
                ) t1, (SELECT @rn:=0) t2;");
            $stmt->execute();
        }
        elseif ($_POST['direction'] == 'b') {
            $stmt = $conn->prepare("SELECT @rn:=@rn+1 AS rang, userName, age, soccer, handball, basketball, Total
                FROM (
                    SELECT userName, age, soccer, handball, basketball, SUM(Total) AS Total
                    FROM leaderboard
                    GROUP BY userName
                    ORDER BY basketball DESC LIMIT $limit
                ) t1, (SELECT @rn:=0) t2;");
            $stmt->execute();
        } 
        elseif ($_POST['direction'] == 'o') {
            $stmt = $conn->prepare("SELECT @rn:=@rn+1 AS rang, userName, age, soccer, handball, basketball, Total
                FROM (
                    SELECT userName, age, soccer, handball, basketball, SUM(Total) AS Total
                    FROM leaderboard
                    GROUP BY userName
                    ORDER BY total DESC LIMIT $limit
                ) t1, (SELECT @rn:=0) t2;");
            $stmt->execute();
        } else {
            return;
        }


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


        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
        foreach(new TableRows(new   RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) { 
            echo $v;
        }
    }


    
    //load more
    if(isset($_POST['active'])) {
        $active = $_POST['active'];
        if ($_POST['active'] == '1') {
            $stmt = $conn->prepare("SELECT @rn:=@rn+1 AS rang, userName, age, soccer, handball, basketball, Total
                FROM (
                    SELECT userName, age, soccer, handball, basketball, SUM(Total) AS Total
                    FROM leaderboard
                    GROUP BY userName
                    ORDER BY soccer DESC LIMIT $limit
                ) t1, (SELECT @rn:=0) t2;");
            $stmt->execute();
        }
        elseif ($_POST['active'] == '2') {
            $stmt = $conn->prepare("SELECT @rn:=@rn+1 AS rang, userName, age, soccer, handball, basketball, Total
                FROM (
                    SELECT userName, age, soccer, handball, basketball, SUM(Total) AS Total
                    FROM leaderboard
                    GROUP BY userName
                    ORDER BY handball DESC LIMIT $limit
                ) t1, (SELECT @rn:=0) t2;");
            $stmt->execute();
        }
        elseif ($_POST['active'] == '3') {
            $stmt = $conn->prepare("SELECT @rn:=@rn+1 AS rang, userName, age, soccer, handball, basketball, Total
                FROM (
                    SELECT userName, age, soccer, handball, basketball, SUM(Total) AS Total
                    FROM leaderboard
                    GROUP BY userName
                    ORDER BY basketball DESC LIMIT $limit
                ) t1, (SELECT @rn:=0) t2;");
            $stmt->execute();
        } 
        elseif ($_POST['active'] == '4') {
            $stmt = $conn->prepare("SELECT @rn:=@rn+1 AS rang, userName, age, soccer, handball, basketball, Total
                FROM (
                    SELECT userName, age, soccer, handball, basketball, SUM(Total) AS Total
                    FROM leaderboard
                    GROUP BY userName
                    ORDER BY total DESC LIMIT $limit
                ) t1, (SELECT @rn:=0) t2;");
            $stmt->execute();
        } else {
            return;
        }
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


        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
        foreach(new TableRows(new   RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) { 
            echo $v;
        }
    }
    
    
?>