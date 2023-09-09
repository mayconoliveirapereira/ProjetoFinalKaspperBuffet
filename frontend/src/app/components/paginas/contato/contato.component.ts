import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit{
  constructor(private service: AppService, private router: Router) { }
  data: any
  
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    pNo: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    tipoEvento: new FormControl('', [Validators.required]),
    dataEvento: new FormControl('', [Validators.required]),
    qtdConvidados: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.adduser(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['contato']);
  }
}
