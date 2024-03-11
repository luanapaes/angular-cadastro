import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../../service/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  id: string | any = '';
  nome: string = '';
  sobrenome: string = '';
  idade: string = '';

  constructor(private pessoaService: PessoaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
    })
    this.setValuesToComponent(this.id)
  }

  editarPessoa(id: string, pessoa: Pessoa) {
    id = this.id
    console.log(id, pessoa)
    this.pessoaService.editarPessoa(id, pessoa).subscribe(() => {
      this.router.navigateByUrl('listar-usuarios')
      // console.log("chegou")
    });
  }

  setValuesToComponent(id: string | number) {
    this.pessoaService.obterPessoas().subscribe(pessoas => {
      if (pessoas) {
        pessoas.forEach(pessoa => {
          this.nome = pessoa.nome;
          this.sobrenome = pessoa.sobrenome;
          this.idade = pessoa.idade;
        });
      } else {
        console.error("Pessoa não encontrada com o ID", id);
      }
    });
  }

}