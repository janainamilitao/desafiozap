import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/users">Usuários</a></li>
        <li><a routerLink="/docs">Documentos</a></li>
        <li><a routerLink="/companys">Companhias</a></li>
        <!-- Adicione mais links conforme necessário -->
      </ul>
    </nav>
  `,
  styles: [
    `
      nav {
        background: #333;
        padding: 10px;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      li {
        display: inline-block;
        margin-right: 20px;
      }

      a {
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
    `,
  ],
})
export class MenuComponent {}