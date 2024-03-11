import { Component, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { PessoaService } from '../../service/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';

import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EdicaoUsuarioComponent } from '../edicao-usuario/edicao-usuario.component';

@Component({
  selector: 'app-table-usuarios',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive, 
    HttpClientModule, CommonModule, RouterOutlet, EdicaoUsuarioComponent
  ],
  providers: [PessoaService],
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.css']
})
export class TableUsuariosComponent {
  isListarUsuarios = true;

  pessoas$ = new Observable<Pessoa[]>();
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute) { 
    this.obterPessoasCadastradas();
  }


  obterPessoasCadastradas() {
    this.pessoas$ = this.pessoaService.obterPessoas();
  }

  deletarPessoa(id: string) {
    this.pessoaService.excluirPessoa(id)
      .subscribe(() => this.obterPessoasCadastradas()); 
  }

  obterPessoa(id: string){
    console.log(this.pessoaService.obterUmaPessoa(id));
  }
}
