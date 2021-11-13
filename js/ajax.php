<?php
    
    if(isset($_FILES['file'])){
        move_uploaded_file($_FILES['file']['tmp_name'], 'C:\xampp\htdocs\Curso\Projeto\CreateWebsite\assets\\'.$_FILES['file']['name']);
        echo $_FILES["file"]["name"];
    }

    if(isset($_POST['save'])){
        $content = [
            $_POST['content'], 
            '<style>'.$_POST['styles'].'</style>'
            ];
        file_put_contents('../pages/'.$_POST['name_file'].'.html', $content);

        include('../Firebase.php');
        new Firebase;
        Firebase::connect()->getReference('pages/'.uniqid())->set(array('content'=>$_POST['content'],'title'=>$_POST['name_file']));
    }

?>