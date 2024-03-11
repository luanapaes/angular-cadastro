import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { TableUsuariosComponent } from './components/table-usuarios/table-usuarios.component';
import { EdicaoUsuarioComponent } from './components/edicao-usuario/edicao-usuario.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, 
    {
        path:'cadastrar-usuario',
        component: CadastroUsuarioComponent
    },
    {
        path: 'listar-usuarios',
        component: TableUsuariosComponent,
        children: [
            {
                path: 'edit/:id',
                component: EdicaoUsuarioComponent
            },
            {
                path: 'informacao-user/:id',
                component: ContentComponent,
            },
        ]
    },
    
];
