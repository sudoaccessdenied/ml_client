import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SupervisedComponent } from './supervised/supervised.component';
import { UnsupervisedComponent } from './unsupervised/unsupervised.component';
import { KnnComponent } from './supervised/knn/knn.component';
import { LogisticComponent } from './supervised/logistic/logistic.component';
import { LinearComponent } from './supervised/linear/linear.component';
import { NeuralComponent } from './supervised/neural/neural.component';
import { KmeansComponent } from './unsupervised/kmeans/kmeans.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SupervisedComponent,
    UnsupervisedComponent,
    KnnComponent,
    LogisticComponent,
    LinearComponent,
    NeuralComponent,
    KmeansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
