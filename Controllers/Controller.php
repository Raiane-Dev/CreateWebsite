<?php

    namespace Controllers;

    class Controller{
        public function index(){
            $url = isset($_GET['url']) ? $_GET['url'] : 'home';
            $slug = explode('/', $url)[0];

            if(file_exists('Views/'.$slug.'.php')){
                include('Views/templates/header.php');
                include('Views/'.$slug.'.php');
                include('Views/templates/footer.php');
            }else if(file_exists('pages/'.$slug.'.html')){
                include('Views/templates/header.php');
                include('pages/'.$slug.'.html');
                include('Views/templates/footer.php');
            }else{
                die('No Exists');
            }
        }
    }

?>