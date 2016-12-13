<!DOCTYPE html>
<html>
<head>
    <link REL="STYLESHEET" TYPE="text/css" HREF="css/style.css">
    <title> Opret bruger </title>
</head>
<body>

    <div>
        <h1>FUCK YOU</h1>
        <p>Her kan du oprette en bruger</p>
        <div>
            <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <label>Navn (Maks 12 bogstaver)</label>
            <input type="text" name="navn" maxlength="12">
            <br />
            <label>Alder</label>
            <input type="number" name="alder" min="0" max="100"/>
            <br />
            <input type="submit" value="add user">
            </form>
        </div>
    </div>

<?php
    echo "<table style='border: solid 1px black;'>";
    echo "<tr><th>Id</th><th>Navn</th><th>Alder</th></tr>";
    
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
    
    
    // define variables and set to empty values
    $userName = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $userName = test_input($_POST["navn"]);
    }

    function test_input($data) {
        $data = trim($data);
        $data = str_replace(' ', '', $data);
        $data = stripslashes($data);
        $data = strip_tags($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    
    if(isset($_POST['alder'])){ 
        $userAge = $_POST['alder']; 
    }
    
    include_once "db/connect.php";
    
    $usersTable = "users";
    $scoreTable = "score";
    
    //indsæt i tabel
    if(isset($_POST['navn']) 
       && isset($_POST['alder'])
       && ($_POST['navn'])!="" 
       && ($_POST['alder'])!= 0) 
    {
        echo "<br>$userName $userAge";

        $sql = "INSERT INTO $usersTable (userName, age) 
                    VALUES ('$userName', '$userAge')";
        $conn->exec($sql);
        echo "<br>Bruger oprettet<br>";
    } else {
        echo '<script language="javascript">';
        echo 'alert("Fejl. Check at både navn og alder er sat");';
        echo '</script>';
    }

    //prøve at vise sidst oprettet        
    $stmt = $conn->prepare("SELECT ID, userName, age FROM users ORDER BY ID DESC LIMIT 20"); 
    $stmt->execute();

    // set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) { 
        echo $v;
    }
        
?>

</body>
</html>
