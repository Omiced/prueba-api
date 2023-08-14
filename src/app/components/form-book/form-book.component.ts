import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { delay } from 'rxjs';
import { ReferencesService } from 'src/app/services/references.service';

@Component({
  selector: 'form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css'],
})
export class FormBookComponent {
  constructor(
    private formBuilder: FormBuilder,
    private referencesService: ReferencesService
  ) {}

  public registerForm: FormGroup = this.formBuilder.group({
    authors: ['', [Validators.required]],
    title: ['', [Validators.required]],
    pages: [0, [Validators.required]],
    textReference: ['', [Validators.required]],
    username: ['', [Validators.required]],
  });

  public isInvalid = false;
  public isValid = false;
  public onSubmit() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) {
      this.isInvalid = true;
      return;
    }
    const reference = this.registerForm.value;
    this.isValid = true;
    this.referencesService
      .addBook(reference)
      .pipe(delay(2000))
      .subscribe((reference) => (this.isValid = false));
    this.registerForm.reset();
  }
}
