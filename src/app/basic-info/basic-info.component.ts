import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  /////////////////////////////////////////////////////////////
  // public name = new FormControl("RINOLD");                //
  // public stdname = new FormControl();                    //
  ///////////////////////////////////////////////////////////
public stdForm: FormGroup;

constructor(private fb:FormBuilder){
  this.createForm();
}

  
  ngOnInit() {
  }

  public createForm(){
    this.stdForm = this.fb.group({
      name:[''],
      contactNo:"",
      email: "",
      oneLineAddress:"",
      aboutU:"",
      aoi:"",
      edu:"",
      skills:"",
      workHistory:"",
      willing:"",
      location:"",
      projects:"",
      contacts: ""

    });
  }
}


