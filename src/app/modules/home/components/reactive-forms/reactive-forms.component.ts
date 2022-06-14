import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  public newInput: FormGroup = this.formBuilder.group({
    firstInput: ['', Validators.required],
    lastName: ['bem vindo', [Validators.maxLength(10)]],
    email: ['bem vindo', [Validators.maxLength(15), Validators.email]],
    checkboxBB: []
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  imprimindoDados(values: FormGroup) {
    console.log(values.value)
  }
}
