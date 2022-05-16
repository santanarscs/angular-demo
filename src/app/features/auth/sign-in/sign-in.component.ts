import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { fadeIn } from 'src/app/shared/utils/animations/fade-in';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'slx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: [fadeIn],
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.authService.currentUserValue) {
      console.log(this.authService.currentUserValue);
      this.router.navigate(['/']);
    }

    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.router.navigate(['/']);
    this.authService
      .login(this.form.value.username, this.form.value.password)
      .pipe(first())
      .subscribe(() => this.router.navigate(['/']));
  }
}
