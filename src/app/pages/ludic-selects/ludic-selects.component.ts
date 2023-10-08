import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, initTE } from 'tw-elements';
import { FormControl, Validators } from '@angular/forms';
import { AllServicesService } from 'src/app/request.service';
@Component({
  selector: 'app-ludic-selects',
  templateUrl: './ludic-selects.component.html',
  styleUrls: ['./ludic-selects.component.scss'],
})
export class LudicSelectsComponent implements OnInit {
  subject = new FormControl('', Validators.required);
  ludic = new FormControl('', Validators.required);
  theme = new FormControl('', Validators.required);
  history = '';
  view = true;
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
      ludic: this.ludic.value
    };
    this.service.getLudico(body).subscribe((res) => {
      this.history = res.text;
      this.view = true;
    });
  }

  lerTexto() {
    var vozes = speechSynthesis.getVoices();

    const utterThis = new SpeechSynthesisUtterance(this.history);
    utterThis.voice = vozes[1];
    speechSynthesis.speak(utterThis);
  }
}
