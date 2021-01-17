
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';




@Component({
  selector: 'app-neural',
  templateUrl: './neural.component.html',
  styleUrls: ['./neural.component.css']
})
export class NeuralComponent implements OnInit {

  form:any;
  progressBar:boolean;
  error:any;
  result:any;
  hiddenLayer: number[];

  constructor(private _fb:FormBuilder,private _api:ApiService )  {
    this.progressBar = false;
    this.result = undefined;
    this.hiddenLayer =[10];
   }

  ngOnInit(): void {

    this.form = this._fb.group(

      {
          select:['',[Validators.required]],
          split:['',[Validators.required]],
          learning_rate:['',[Validators.required]],
          num_iterations:['',[Validators.required]],
          hidden_layer:[],
          
      }
    )
  }

  addHiddenLayer()
  {

    const hiddenUnit = parseInt(this.form.controls['hidden_layer'].value);
    if(hiddenUnit >0)
      {
        this.hiddenLayer.push(hiddenUnit);
        this.form.patchValue({
          hidden_layer: 0,
        });
        // this.form.controls['hidden_layer'].clear();
      }
    console.log(this.hiddenLayer)

  }

  removeLayer()
  {

    // this.hiddenLayer.remove(index);
    if(this.hiddenLayer.length>0)
      this.hiddenLayer.pop();

  }
  onSubmit()
  {
  

  // console.log(this.form);    
    
  if(this.progressBar != true)
    {
      
      this.progressBar = true;

      this._api.neural(this.form.value,this.hiddenLayer).subscribe({
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
