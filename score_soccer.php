<html>
<head>
    <link REL="STYLESHEET" TYPE="text/css" HREF="css/style.css">
    <title> indsæt fodbold score </title>
</head>
<body>

    <div>
        <h1>Fodbold</h1>
        <p>Her kan du indsætte score i fodbold</p>
        <div>
            <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <label>ID</label>
            <input type="number" name="ID" min="1"/>
            <br />
            <label>Point</label>
            <input type="number" name="point" min="0" max="1024"/>
            <br />
            <input type="submit" value="Indfør score">
            </form>
        </div>
    </div>

<?php
    echo "<table>";
    echo "<tr><th>ID</th><th>Type</th><th>Points</th></tr>";
    
    class TableRows extends RecursiveIteratorIterator { 
        function __construct($it) { 
            parent::__construct($it, self::LEAVES_ONLY); 
        }

        function current() {
            return "<td style='width:150px;border:1px solid black;'>" . parent::current(). "</td>";
        }

        function beginChildren() { 
            echo "<tr>"; 
        } 

        function endChildren() { 
            echo "</tr>" . "\n";
        } 
    }
    
    $usersTable = "users";
    $scoreTable = "score";
    
    
    if(isset($_POST['ID'])){ 
        $scoreID = $_POST['ID'];
    }
    
    if(isset($_POST['point'])){ 
        $scorePoint = $_POST['point']; 
    }
    
    include_once "db/connect.php";
    
    
    //indsæt i tabel
    if(isset($_POST['ID'])) {

        $sql = "INSERT INTO $scoreTable (uID, type, point) VALUES('$scoreID', '1', '$scorePoint') ON DUPLICATE KEY UPDATE point='$scorePoint'";
        $conn->exec($sql);

        //prøve at vise sidst indført        
        $stmt = $conn->prepare("SELECT uID, type, point FROM score WHERE uID = '$scoreID' AND type = 1"); 
        $stmt->execute();

        echo "<br>Sidste score indført<br>";

        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
        foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) { 
            echo $v;
        }
    }
    
?>

</body>
</html>
