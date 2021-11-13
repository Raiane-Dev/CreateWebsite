<?php
    require 'vendor/autoload.php';
    use Kreait\Firebase\Factory;
    use Kreait\Firebase\ServiceAccount;

    class Firebase{
        private static $factory;

        public function __construct(){
            self::$factory = (new Factory())->withServiceAccount(__DIR__.'/firebaseconfig.json')->withDatabaseUri('https://createwebsite-5e9a2-default-rtdb.firebaseio.com/');
        }

        public static function connect(){
            $database = self::$factory->createDatabase();
            return $database;
        }

        public static function auth(){
            $database = self::$factory->createAuth();
            return $database;
        }
    }

    // Firebase::connect()->getReference('table')->getSnapshot(); PARA PEGAR DADOS DE UMA TABELA
    // Firebase::connect()->getReference('table/date')->getSnapshot(); PARA PEGAR UM DADO

    // Firebase::connect()->getReference('table/'.uniqid())->set(array(dados)); PARA CADASTRAR PRECISAR PASSAR UM ARRAY DOS DADOS NO ARRAY

    // Firebase::auth()->createUserWithEmailAndPassword('raianeao.dev@gmail.com','senhaa'); CRIAR CLIENTE

?>