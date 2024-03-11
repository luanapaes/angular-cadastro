import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PessoaService {

    private url = environment.api

    constructor(private httpClient: HttpClient) {
    }

    obterPessoas() {
        return this.httpClient.get<Pessoa[]>(this.url);
    }

    obterUmaPessoa(id: string | number){
        return this.httpClient.get<Pessoa[]>(`${this.url}/${id}`)
    }

    cadastrarPessoa(pessoa: Pessoa): Observable<Pessoa> {
        console.log('chegou', pessoa);
        return this.httpClient.post<Pessoa>(this.url, pessoa);
    }

    editarPessoa(id: string, pessoa: Pessoa) {
        return this.httpClient.put<Pessoa>(`${this.url}/${id}`, pessoa); // Inclua 'pessoa' como segundo argumento
    }

    excluirPessoa(id: string) {
        return this.httpClient.delete<void>(`${this.url}/${id}`);
    }

}