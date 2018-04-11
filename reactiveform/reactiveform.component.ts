import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  private reg : FormGroup;
  private products : any[]=[];

  constructor() { }

  ngOnInit() {
    this.reg = new FormGroup({
    name : new FormControl(null,[Validators.required]),
    pic : new FormControl(null,[Validators.required]),
    cost : new FormControl(null,[Validators.required,  Validators.pattern('^[0-9]+$')]),
    vendor : new FormControl(null,[Validators.required]),
    qty : new FormControl(null,[Validators.required, Validators.pattern('^[0-9]+$')])

    });
  }

  saverec(){
    //console.log('the record is ',this.reg.value);
   this.products.push(this.reg.value);
    //console.log(this.products);
    this.reg.patchValue({name : ''});
    /*.setvalue menthod is used to reset the value of form fields in reactive based form approach 
     demerit of setvalue is that we need to reset all values of form
     alternative option(for setValue) is patchValue({}); with this we can reset the form fields which u want to do.
    */
  }

}
