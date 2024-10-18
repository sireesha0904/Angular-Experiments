import { Component } from '@angular/core';
import { FormComponent } from '../app/form/form.component'; 
import { MenuComponent } from './menu/menu.component'; 
import { LoginComponent } from './login/login.component';
import { NumberCheckerComponent } from './number-checker/number-checker.component';
import { TextTogglerComponent } from './text-toggler/text-toggler.component';
import { StudentDetailsComponentComponent } from './student-details-component/student-details-component.component';
import { LoginCheckComponent } from "./login-check/login-check.component";
import { AdditionComponent } from "./addition/addition.component";
import { ParentComponent } from './parent/parent.component';
import { DirectivesComponent } from './directives/directives.component';
import { CricketerDetailComponent } from './cricketer-detail/cricketer-detail.component';
import { CricketerListComponent } from './cricketer-list/cricketer-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, MenuComponent, LoginComponent, NumberCheckerComponent,CricketerDetailComponent,CricketerListComponent, TextTogglerComponent, StudentDetailsComponentComponent, LoginCheckComponent, AdditionComponent,ParentComponent,DirectivesComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
