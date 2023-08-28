import { Component, OnInit } from '@angular/core';
import { AllServicesService } from './request.service';
import { Collapse, Ripple, initTE } from 'tw-elements';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'front-educ';
  resumo = '';
  topicos = '';
  prova1 = '';
  prova2 = '';
  prova3: any;
  respostas = '';
  url = '';
  loading = false;
  chat = new FormControl('');

  constructor(private service: AllServicesService) {}
  ngOnInit(): void {
    initTE({ Ripple, Collapse });

    // this.service.getResumo().subscribe((res) => {
    //   console.log(res);
    //   this.resumo = res.text;
    // });

    // this.service.getTopicos().subscribe((res) => {
    //   console.log(res);
    //   this.topicos = res.text;
    // });

    // this.service.getProva1().subscribe((res) => {
    //   console.log(res);
    //   this.prova1 = res.text;
    // });

    // this.service.getProva2().subscribe((res) => {
    //   console.log(res);
    //   this.prova2 = res.text;
    // });

    // this.service.getProva3().subscribe((res) => {
    //   console.log(res);
    //   this.prova3 = res.text;
    // });

    // this.service.getImage().subscribe((res) => {
    //   console.log(res);
    //   this.url = res.text;
    // });
  }

  

  resposta(event: any, chat: any) {
    if (event.keyCode === 13) {
      this.loading = true
      const body = {
        prompt: this.chat.value,
      };
      console.log(body);

      this.service.chat(body).subscribe((res) => {
        this.chat.setValue('');
        this.loading = false
        console.log(res);
        this.prova3 = res.text;

      });
    }
  }
}
