import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PessoaService } from './service/pessoa.service';
import { TableUsuariosComponent } from './components/table-usuarios/table-usuarios.component';
import { RouterLink } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HomeComponent,
        CadastroUsuarioComponent,
        TableUsuariosComponent,
        CommonModule,
        HttpClientModule, // Importe o HttpClientModule aqui
        FormsModule,
        RouterLink

    ],
    exports: [
        HomeComponent,
        CadastroUsuarioComponent,
        TableUsuariosComponent,
        RouterLink
    ],
    providers: [PessoaService]
})
export class PagesModule { }