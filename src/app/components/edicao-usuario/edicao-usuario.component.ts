import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../service/pessoa.service';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao-usuario',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule], // Adicione o HttpClientModule aqui
  providers: [PessoaService],
  templateUrl: './edicao-usuario.component.html',
  styleUrls: ['./edicao-usuario.component.css']
})
export class EdicaoUsuarioComponent implements OnInit{

  pessoa: Pessoa = {
    id: '',
    nome: '',
    sobrenome: '',
    idade: ''
  };
  id: any;

  constructor(private pessoaService: PessoaService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
    })
  }

  editarPessoa(id: string, pessoa: Pessoa) {
    id = this.id
    console.log(id, pessoa)
    this.pessoaService.editarPessoa(id, pessoa).subscribe(() =>{
      this.router.navigateByUrl('listar-usuarios')
      // console.log("chegou")
    });
  }

}
