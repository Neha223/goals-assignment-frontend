import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  imageSrc: string;
  constructor(private formBuilder: FormBuilder, public restApi: ApiService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: [''],
      logo: [''],
      logoSrc: [''],
      details: this.formBuilder.group({
        name: [''],
        designation: [''],
        phone: [''],
        email: ['']
      }),
    });
  }
  uploadLogo(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.signupForm.patchValue({
          logoSrc: reader.result
        });
   
      };
   
    }
  }
  onSubmit() {
    this.restApi.signup(this.signupForm.value)

      .subscribe(res => {

        console.log(res);

        alert('Uploaded Successfully.');

      })
  }

}
