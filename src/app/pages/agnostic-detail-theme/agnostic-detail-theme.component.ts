import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from 'src/app/request.service';
import { Collapse, Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-agnostic-detail-theme',
  templateUrl: './agnostic-detail-theme.component.html',
  styleUrls: ['./agnostic-detail-theme.component.scss'],
})
export class AgnosticDetailThemeComponent {
  resumo: string = 'teste';
  view = false;
  viewCorrect = false;
  respostasQuestions: any;
  topic = localStorage.getItem('topic');
  themeSession = localStorage.getItem('theme-select') as any;
  themeSelect: any;
  mensagem = window.speechSynthesis.cancel();

  constructor(private router: Router, private service: AllServicesService) {}

  ngOnInit(): void {
    initTE({ Collapse, Ripple });
    this.themeSelect = JSON.parse(this.themeSession);

    switch (this.topic) {
      case 'resume':
        this.resume();
        break;
      case 'topics':
        this.topics();
        break;
      case 'cause':
        this.causes();
        break;
      case 'conseq':
        this.conseq();
        break;
      case 'curious':
        this.curious();
        break;
      case 'relate':
        this.report();
        break;
      case 'indications':
        this.studySource();
        break;
      case 'questions':
        this.questions();
        break;
    }
  }

  resume() {
    console.log(this.themeSelect);
    this.service.getResumo(this.themeSelect).subscribe((res) => {
      this.view = true;

      this.resumo = res.text;
    });
  }

  questions() {
    this.service.getExercicio(this.themeSelect).subscribe((res) => {
      this.view = true;
      this.viewCorrect = true;
      this.resumo = res.text;
    });
  }

  respostas() {
    const body = {
      prompt: this.resumo,
    };

    this.service.getRespostas(body).subscribe((res) => {
      this.view = true;
      this.viewCorrect = true;
      this.respostasQuestions = res.text;
    });
  }

  topics() {
    this.service.getTopicos(this.themeSelect).subscribe((res) => {
      this.view = true;
      this.resumo = res.text;
    });
  }

  causes() {
    this.service.getCausa(this.themeSelect).subscribe((res) => {
      this.view = true;
      this.resumo = res.text;
    });
  }

  curious() {
    this.service.getCurious(this.themeSelect).subscribe((res) => {
      this.view = true;
      this.resumo = res.text;
    });
  }

  report() {
    this.service.getRelato(this.themeSelect).subscribe((res) => {
      this.view = true;
      this.resumo = res.text;
    });
  }

  conseq() {
    this.service.getConseq(this.themeSelect).subscribe((res) => {
      this.view = true;
      this.resumo = res.text;
    });
  }

  studySource() {
    this.service.getFontesEstudo(this.themeSelect).subscribe((res) => {
      this.view = true;
      this.resumo = res.text;
    });
  }

  goToTheme() {
    this.router.navigateByUrl('theme');
  }

  lerTexto() {
    var vozes = speechSynthesis.getVoices();

    const utterThis = new SpeechSynthesisUtterance(this.resumo);
    utterThis.voice = vozes[1];
    speechSynthesis.speak(utterThis);
  }
}
