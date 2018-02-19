import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./message/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";

const APP_ROUTES: Routes = [
      { path: '', redirectTo: '/messages', pathMatch: 'full' }, // Use the domain and append /messages
   { path: 'messages', component: MessagesComponent },
   { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
