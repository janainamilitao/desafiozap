import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <nav id="menu">
    <header class="major">
            <h2>Menu</h2>
        </header>
        <ul>
            <li><a href="index.html">Homepage</a></li>
            <li><a href="users">Usuários</a></li>
            <li><a href="docs">Documentos</a></li>
            <li><a href="companys">Instituições</a></li>
        </ul>
    </nav> 
  `,

})
export class MenuComponent {}