<?php

    include "conectar.php";

    $QuerySql = "select * from Acceso";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_NUM);

    var_dump($resultado);
    
    printf("<b>nombre    = </b> %s <br>",$resultado[0]);
    printf("<b>apellidop= </b> %s <br>",$resultado[1]);
    printf("<b>apellidom = </b> %s <br>",$resultado[2]);
    printf("<b>Usuario     = </b> %s <br>",$resultado[3]);
    
?>