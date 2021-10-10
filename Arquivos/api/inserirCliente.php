<?php


include('conexao.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
header('Content-Type: application/json; charset=utf-8');   



$postjson = json_decode(file_get_contents('php://input'), true);

//INSERINDO OS CLIENTES

 if($postjson['requisicao'] == 'add'){
 	$query = mysqli_query($mysqli, "INSERT INTO clientes SET nome = '$postjson[nome]', telefone = '$postjson[telefone]', email = '$postjson[email]', data = curDate()");

 	$id = mysqli_insert_id($mysqli);
 	if($query){
 		$result = json_encode(array('success'=>true, 'id'=>$id));

 	}else{
 		$result = json_encode(array('success'=>false));

 	}
	 echo $result;
	 

	 //A PARTE DE BAIXO FAZ A LISTAGEM DOS CLIENTES

 }elseif($postjson['requisicao'] == 'getdata'){
 	$query = mysqli_query($mysqli, "select * from clientes order by id desc limit $postjson[start], $postjson[limit]");

 	while($row = mysqli_fetch_array($query)){ 
 		$dados[] = array(
 			'id' => $row['id'], 
 			'nome' => $row['nome'],
			 'telefone' => $row['telefone'],
			 'email' => $row['email'],
 			'data' => $row['data']


 		);

 }

if($query){
 		$result = json_encode(array('success'=>true, 'result'=>$dados));

 	}else{
 		$result = json_encode(array('success'=>false));

 	}
 	echo $result;



 //A PARTE DE BAIXO FAZ A EDICAO DOS CLIENTES

}elseif($postjson['requisicao'] == 'editar'){
	$query = mysqli_query($mysqli, "update clientes set nome='$postjson[nome]', telefone='$postjson[telefone]', email='$postjson[email]' where id='$postjson[id]' ");

	if($query){
		$result = json_encode(array('success'=>true, 'result'=>'success'));

	}else{
		$result = json_encode(array('success'=>false, 'result'=>'error'));

	}
	echo $result;


//A PARTE DE BAIXO FAZ A EXCLUSÃO DOS CLIENTES	

}elseif($postjson['requisicao'] == 'excluir'){
	$query = mysqli_query($mysqli, "DELETE FROM clientes where id='$postjson[id]' ");

	if($query){
		$result = json_encode(array('success'=>true, 'result'=>'success'));

	}else{
		$result = json_encode(array('success'=>false, 'result'=>'error'));

	}
	echo $result;


	

 //A PARTE DE BAIXO FAZ A BUSCA DOS CLIENTES PELO NOME

}elseif($postjson['requisicao'] == 'buscar'){
	$nome = $postjson['nome'].'%';
	$query = mysqli_query($mysqli, "select * from clientes where nome like '$nome' order by nome asc");

	while($row = mysqli_fetch_array($query)){ 
		$dados[] = array(
			'id' => $row['id'], 
			'nome' => $row['nome'],
			'telefone' => $row['telefone'],
			'email' => $row['email'],
			'data' => $row['data']


		);

}

if($query){
		$result = json_encode(array('success'=>true, 'result'=>$dados));

	}else{
		$result = json_encode(array('success'=>false));

	}
	echo $result;

}

//LOGIN ABAIXO

elseif($postjson['requisicao'] == 'login'){
	$query = mysqli_query($mysqli, "select * from usuarios where usuario = '$postjson[usuario]' and senha = '$postjson[senha]'");
	$row = mysqli_num_rows($query);
	if($row>0){
		$data = mysqli_fetch_array($query);
		$datauser = array(
			'id' => $data['id'],
			'nome' => $data['nome'],
			'usuario' => $data['usuario'],
			'senha' => $data['senha'],
		);

		if($data['nivel'] == 'admin'){
			$result = json_encode(array('success'=>true, 'result'=>$datauser));
		}else{
			$result = json_encode(array('success'=>false, 'msg'=>'Usuário sem Permissão'));
		}
	}else{
		$result = json_encode(array('success'=>false, 'msg'=>'Dados Incorretos!'));
	}

	echo $result;
}
	
?>