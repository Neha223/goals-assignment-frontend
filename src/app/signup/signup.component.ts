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
          logoSrc: file
        });
   
      };
   
    }
  }
  get f() { return this.signupForm.controls; }
  onSubmit() {
    const fileName = this.signupForm.value.logo;
    const userDetails = {
      name : this.signupForm.value.details.name,
      designation: this.signupForm.value.details.designation,
      phone: this.signupForm.value.details.phone,
      email: this.signupForm.value.details.email
    }
    const formData = new FormData();
    formData.append('file', this.signupForm.get('logoSrc').value,fileName);
    formData.set('fileName', this.signupForm.value.logo);
    formData.set('brandName', this.signupForm.value.name);
    formData.set('detailsName', this.signupForm.value.details.name);
    formData.set('detailsDesignation', this.signupForm.value.details.designation);
    formData.set('detailsPhone', this.signupForm.value.details.phone);
    formData.set('detailsEmail', this.signupForm.value.details.email);
    this.restApi.signup(formData)

      .subscribe(res => {

        console.log(res);

        alert('Uploaded Successfully.');
        this.signupForm.reset();
        this.imageSrc = '';

      })
  }
  checkPhone(phone) {
    this.restApi.checkPhone(phone).subscribe(res => {
      const data = res.data;
      if(data.length != 0) {
        alert("Phone should be unique");
        this.signupForm.patchValue({
          details: {
            phone: ''
          }
        });
      }
    })
  }
  checkEmail(email) {
    this.restApi.checkEmail(email).subscribe(res => {
      const data = res.data;
      if(data.length != 0) {
        alert("Email should be unique");
        this.signupForm.patchValue({
          details: {
            email: ''
          }
        });
      }
    })
  }

}
