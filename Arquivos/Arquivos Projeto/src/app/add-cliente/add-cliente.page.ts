import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {

  nome: string = "";
  telefone: string = "";
  email: string = "";
  id: number;

  constructor(
    private router: Router, 
    private provider: PostProvider, 
    public toastController: ToastController,
    private actRoute: ActivatedRoute
  ) { }

 
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Dados Salvo',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  
  
  ngOnInit() {
    this.actRoute.params.subscribe((data: any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.telefone = data.telefone;
      this.email = data.email;
      console.log(data);
    });
  }

  Cliente(){
    this.router.navigate(['/clientes'])
  }

  cadastrar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'add',
        nome: this.nome,
        telefone: this.telefone,
        email: this.email
      };
      this.provider.inserirApi(dados, 'inserirCliente.php')
      .subscribe(data => {
       
        this.router.navigate(['/clientes']);
        this.presentToast();
      });
     
     

    });
  }


  editar(){
    return new Promise(resolve => {
      let dados = {
        requisicao : 'editar',
        nome: this.nome,
        telefone: this.telefone,
        email: this.email,
        id: this.id
      };
      this.provider.inserirApi(dados, 'inserirCliente.php')
      .subscribe(data => {
       
        this.router.navigate(['/clientes']);
        this.presentToast();
      });
     
     

    });
  }



}
