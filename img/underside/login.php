<?php
    // 接收前端传过来的数据
    $username = $_POST["username"];
    $password = $_POST["password"];

    // 链接数据库
    $conn = mysqlli_connect("localhost","root", "root", "yuanshen" );
    //定义查询语句
    $selectSQL = "SELECT * FROM students WHERE username='$username' and password ='$password'";
    //是否查询到
    $result = mysqli_query($conn,$selectSQL);

    //获取结果集中的数据条数
    $num = mysqli_num_rows($result);

    echo $num;
?>