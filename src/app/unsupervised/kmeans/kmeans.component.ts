import { Component, OnInit ,ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-kmeans',
  templateUrl: './kmeans.component.html',
  styleUrls: ['./kmeans.component.css']
})
export class KmeansComponent implements OnInit {
 
  form:any;
  progressBar:boolean;
  error:any;
  result:any;

  constructor(private _fb:FormBuilder,private _api:ApiService )  {
    this.progressBar = false;
    this.result = undefined;
    
    
  
   }

  ngOnInit(): void {

    this.form = this._fb.group(

      {
          dist_type:['',[Validators.required]],
          num_iterations:['',[Validators.required]],
          k:['',[Validators.required]],
          
      }
    )
  }

  onSubmit()
  {
  

  // console.log(this.form);    
    
  if(this.progressBar != true)
    {
      
      this.progressBar = true;

      this._api.kmeans(this.form.value).subscribe({
        next:res =>{
          this.progressBar = false; 

         console.log(res);
          //  this.result = res;
           this.result = environment.outputImg+res;      
          
        },
        error:res => {
          this.progressBar = false;
          
          console.log(res);
        },
      })



    }
  }

}
