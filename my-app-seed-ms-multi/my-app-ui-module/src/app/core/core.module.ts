import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { MatCheckboxModule, MatTabsModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [CoreComponent, HomeComponent, FirstComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    MatTabsModule
  ]
})
export class CoreModule { }
