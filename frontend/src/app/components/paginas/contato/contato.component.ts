import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  constructor(
    private service: AppService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  data: any;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    pNo: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    tipoEvento: new FormControl('', [Validators.required]),
    dataEvento: new FormControl('', [Validators.required]),
    qtdConvidados: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      const dataFormatada = this.datePipe.transform(
        this.form.get('dataEvento')?.value,
        'dd/MM/yyyy'
      );

      if (this.form.get('dataEvento')) {
        this.form.get('dataEvento')?.setValue(dataFormatada);
      }

      this.data = this.form.value;
      console.log(this.data);

      this.service.adduser(this.data).subscribe((data) => {
        console.log(data);
      });

      this.router.navigate(['contato']);
    }
  }
}
