import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  // Forma corta
  /* routes = routes.map(({ title, path }) => ({
    title,
    path,
  })); */
  routesNav = routes.map((route) => ({
    title: route.title ?? '',
    path: route.path ?? '',
  }));
}
