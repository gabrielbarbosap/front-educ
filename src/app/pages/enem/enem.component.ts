import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, initTE } from 'tw-elements';
import { FormControl, Validators } from '@angular/forms';
import { AllServicesService } from 'src/app/request.service';

@Component({
  selector: 'app-enem',
  templateUrl: './enem.component.html',
  styleUrls: ['./enem.component.scss'],
})
export class EnemComponent {
  subject = new FormControl('', Validators.required);
  theme = new FormControl('', Validators.required);
  resp = new FormControl('', Validators.required);
  respostaCorreta = '';
  history = '';
  view = true;
  viewResp = true;
  mensagem = window.speechSynthesis.cancel();

  constructor(private service: AllServicesService) {}

  ngOnInit(): void {
    initTE({ Select });
  }

  goToHistory() {
    this.view = false;
    this.mensagem = window.speechSynthesis.cancel();

    const body = {
      subject: this.subject.value,
      theme: this.theme.value,
    };
    this.service.questaoEnem(body).subscribe((res) => {
      this.history = res.text;
      this.view = true;
    });
  }

  resposta() {
    this.viewResp = false;
    this.mensagem = window.speechSynthesis.cancel();

    const body = {
      question: this.history,
      resp: this.resp.value,
    };
    this.service.respEnem(body).subscribe((res) => {
      this.respostaCorreta = res.text;
      this.viewResp = true;
    });
  }
}
