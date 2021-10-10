import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.page.html',
  styleUrls: ['./mostrar-cliente.page.scss'],
})
export class MostrarClientePage implements OnInit {

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

  ngOnInit() {
    this.actRoute.params.subscribe((data: any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.telefone = data.telefone;
      this.email = data.email;
      console.log(data);
    });
  }

}
