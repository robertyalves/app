<?PHP	

date_default_timezone_set('America/Sao_Paulo');

define('BD', 'ionic');
define('USER', 'root');
define('SENHA', '');
define('HOST', 'localhost');

$mysqli = new mysqli(HOST, USER, SENHA, BD);


?>