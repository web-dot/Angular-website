import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-forg-pass',
  templateUrl: './forg-pass.component.html',
  styleUrls: ['./forg-pass.component.css']
})
export class ForgPassComponent implements OnInit {



  forgot = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    pass: ['', Validators.pattern(/^[\w@-]{6,20}$/)]
  })
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
