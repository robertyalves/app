import { Component } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

dadosLogin: any;
usuario : string;

  constructor(
    private router:Router,
    private provider:PostProvider,
    private storage: NativeStorage,
    public toast: ToastController
  ) {}
  
 

  ionViewWillEnter(){
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.usuario = this.dadosLogin.usuario;
      console.log(res);
    });
  }


  async logout(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toast.create({
      message: 'Logout Efetuado',
      duration: 1000,
      color: 'success'
    });
  }

}
