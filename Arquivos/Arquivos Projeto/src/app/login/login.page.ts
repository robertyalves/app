import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario : string;
  senha : string;
 
  constructor(
    private router:Router,
    private provider:PostProvider,
    private storage: NativeStorage,
    public toast: ToastController

  ) { }

  ngOnInit() {
  }

  async login(){
    if(this.usuario == "" ){

          const toast = await this.toast.create({
          message: 'Preencha o Usuário',
          duration: 2000,
          color: 'warning'
        });
        
        toast.present();
        return;
      }

      if(this.senha == "" ){

        const toast = await this.toast.create({
        message: 'Preencha a Senha',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }


    let dados = {
      requisicao : 'login',
      usuario: this.usuario,
      senha: this.senha,
     
    };

    this.provider.inserirApi(dados, 'inserirCliente.php').subscribe(async data => {
     var alert = data['msg'];
     if(data['success']){
       this.storage.setItem('session_storage', data['result']);
       this.router.navigate(['/home']);
       const toast = await this.toast.create({
         message: ' Logado',
         duration: 2000,
         color: 'dark'
       });
       toast.present();
       this.usuario = "";
       this.senha = "";
       console.log(data);
     }else{
      const toast = await this.toast.create({
        message: alert,
        duration: 2000,
        color: 'danger'
      });
      toast.present();
     }
      
    });

    }
  

}
