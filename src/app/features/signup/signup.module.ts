import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    MatInputModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SignupModule { }
