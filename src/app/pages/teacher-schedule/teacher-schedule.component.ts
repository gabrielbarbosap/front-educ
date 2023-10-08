import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, initTE } from 'tw-elements';
import { FormControl, Validators } from '@angular/forms';
import { AllServicesService } from 'src/app/request.service';
@Component({
  selector: 'app-teacher-schedule',
  templateUrl: './teacher-schedule.component.html',
  styleUrls: ['./teacher-schedule.component.scss'],
})
export class TeacherScheduleComponent implements OnInit {
  subject = new FormControl('', Validators.required);
  theme = new FormControl('', Validators.required);  
  days = new FormControl('', Validators.required);  

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
      days: this.days.value

    };
    this.service.getCronogramaProfessor(body).subscribe((res) => {
      this.history = res.text;
      this.view = true;
    });
  }
}
