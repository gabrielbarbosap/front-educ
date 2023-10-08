import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, initTE } from 'tw-elements';
import { FormControl, Validators } from '@angular/forms';
import { AllServicesService } from 'src/app/request.service';
@Component({
  selector: 'app-study-schedule',
  templateUrl: './study-schedule.component.html',
  styleUrls: ['./study-schedule.component.scss'],
})
export class StudyScheduleComponent implements OnInit {
  subject = new FormControl('', Validators.required);
  theme = new FormControl('', Validators.required);  
  days = new FormControl('', Validators.required);  
  hours = new FormControl('', Validators.required);  

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
      hours: this.hours.value,
      days: this.days.value

    };
    this.service.getCronogramaAluno(body).subscribe((res) => {
      this.history = res.text;
      this.view = true;
    });
  }
}
