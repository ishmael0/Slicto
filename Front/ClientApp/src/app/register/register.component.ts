import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  level = 1;
  ngOnInit(): void {
    this.form = this.fb.group({
      UserName: ["", [Validators.required]],
      Password: ["", [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
      Mobile: ['', [Validators.required]],
      Code: ['', [Validators.required]],
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Email: ['', [Validators.email]],
      SiteLaw: [false, [Validators.email]],
      NationalCode: ['', [Validators.required]],
    });
  }
  form!: FormGroup;
  submit() {
    if (this.level == 1) {
      this.level = 2;
    }
    if (this.level ==2) {
      this.level = 3;
    }
    console.log(this.form.value)
  }
}
