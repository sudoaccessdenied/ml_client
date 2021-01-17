import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KnnComponent } from './supervised/knn/knn.component';
import { LinearComponent } from './supervised/linear/linear.component';
import { LogisticComponent } from './supervised/logistic/logistic.component';
import { NeuralComponent } from './supervised/neural/neural.component';
import { SupervisedComponent } from './supervised/supervised.component';
import { KmeansComponent } from './unsupervised/kmeans/kmeans.component';
import { UnsupervisedComponent } from './unsupervised/unsupervised.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  
  {path:'supervised',component:SupervisedComponent,
  children:[
    {path:'knn',component:KnnComponent},
    {path:'linear',component:LinearComponent},
    {path:'logistic',component:LogisticComponent},
    {path:'neural',component:NeuralComponent},
  ]},
  {path:'unsupervised',component:UnsupervisedComponent,
  children:[
    {path:'kmeans',component:KmeansComponent},
    
  ]},
  

  { path :'',redirectTo : '',pathMatch :'full' },
  // { path:"**",component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
