import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../service/pessoa.service';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule], // Adicione o HttpClientModule aqui
  providers: [PessoaService],
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  pessoa: Pessoa = {
    id: '',
    nome: '',
    sobrenome: '',
    idade: ''
  }

  constructor(private pessoaService: PessoaService) { }

  cadastrarPessoa(pessoa: Pessoa) {
    this.pessoaService.cadastrarPessoa(pessoa).subscribe(() => {
      console.log('Cadastro realizado com sucesso!');
    });
  }
}

