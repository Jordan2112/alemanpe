<?php

    $dbserver = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $dbname = "bd";


    $conn = mysqli_connect($dbserver, $dbuser,$dbpass,$dbname);


    if(!$conn)
    {

        die("Sin conexion: " .mysqli_connect_error());

    }

    $Nombre = $_POST["Login"];
    $Pass = $_POST["Contraseña"];

    $query = mysqli_query($conn, "select * from usuario where Nombre =  '".$Nombre."'  and Contraseña = '".$Pass."'");
    $nr = mysqli_num_rows($query);

    if($nr == 1)
    {

        echo "Bievenido" .$Nombre;



    }
    else if($nr == 0)
    {

        echo "No ha ingresado";

    }

?>