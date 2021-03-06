
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';




@Component({
  selector: 'app-logistic',
  templateUrl: './logistic.component.html',
  styleUrls: ['./logistic.component.css']
})
export class LogisticComponent implements OnInit {

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
          select:['',[Validators.required]],
          split:['',[Validators.required]],
          learning_rate:['',[Validators.required]],
          num_iterations:['',[Validators.required]],
          
      }
    )
  }

  onSubmit()
  {
  

  // console.log(this.form);    
    
  if(this.progressBar != true)
    {
      
      this.progressBar = true;

      this._api.logistic(this.form.value).subscribe({
        next:res =>{
          this.progressBar = false; 
          console.log(res);
          // this.examForm.clearValidators();
          this.result = res;
          
          
        },
        error:res => {
          this.progressBar = false;
          this.error = res.error.message;
          console.log(res);
        },
      })



    }
  }

}
