import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, initTE, Input } from 'tw-elements';
import { FormControl, Validators } from '@angular/forms';
import { AllServicesService } from 'src/app/request.service';
import { min } from 'rxjs';
@Component({
  selector: 'app-teacher-schedule-detail',
  templateUrl: './teacher-schedule-detail.component.html',
  styleUrls: ['./teacher-schedule-detail.component.scss'],
})
export class TeacherScheduleDetailComponent implements OnInit {
  subject = new FormControl('', Validators.required);
  theme = new FormControl('', Validators.required);
  hours = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);
  materias = new FormControl(
    'com apresentação do conteudo de forma oral e com um quadro',
    Validators.required
  );
  idea = new FormControl('nenhum', Validators.required);

  minIdea = new FormControl('');
  minVideo = new FormControl('');

  history = '';
  view = true;
  mensagem = window.speechSynthesis.cancel();

  constructor(private service: AllServicesService) {}

  ngOnInit(): void {
    initTE({ Select, Input });
  }

  goToShedule() {
    let prompt = '';
    if(this.idea.value === 'nenhum') {
      this.minIdea.setValue('')
    }
    if (this.minIdea.value && !this.minVideo.value) {
      prompt = `Crie uma aula de ${this.hours.value} horas para alunos do ${this.category.value}, abordando os temas: ${this.theme.value}. Divida a aula da seguinte forma: ${this.materias.value} e o restante ${this.minIdea.value} minutos para ${this.idea.value}. a apresentação deve ser a melhor possível.`;
    }

    if (this.minIdea.value && this.minVideo.value) {
      prompt = `Crie uma aula de ${this.hours.value} horas para alunos do ${this.category.value}, abordando os temas: ${this.theme.value}. Divida a aula da seguinte forma: ${this.materias.value} ${this.minVideo.value} e o restante ${this.minIdea.value} minutos para ${this.idea.value}. a apresentação deve ser a melhor possível.`;
    }

    if (!this.minIdea.value && this.minVideo.value) {
      prompt = `Crie uma aula de ${this.hours.value} horas para alunos do ${this.category.value}, abordando os temas: ${this.theme.value}. Divida a aula da seguinte forma:  ${this.materias.value} ${this.minVideo.value} minutos e o restante preciso saber quais conteudos apresentar para os aulos, não teremos atividades, apenas apresentação de conteudo. a apresentação deve ser a melhor possível.`;
    }

     if (!this.minIdea.value && !this.minVideo.value) {
      prompt = `Crie uma aula de ${this.hours.value} horas para alunos do ${this.category.value}, abordando os temas: ${this.theme.value} a aula não terá nenhuma atividade, apenas apresentação de conteúdo. Divida a aula da seguinte forma: ${this.materias.value} a aula não terá exercicios, apenas apresentação de conteudo. a apresentação deve ser a melhor possível.`;
    }

    console.log(prompt);

    this.view = false;
    this.mensagem = window.speechSynthesis.cancel();

    const body = {
      aula: prompt
    };
    this.service.getCronogramaProfessorDetalhado(body).subscribe((res) => {
      this.history = res.text;
      this.view = true;
    });
  }
}
