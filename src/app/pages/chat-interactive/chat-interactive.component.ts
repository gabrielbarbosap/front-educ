import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../../request.service';
import { Collapse, Ripple, initTE } from 'tw-elements';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-interactive',
  templateUrl: './chat-interactive.component.html',
  styleUrls: ['./chat-interactive.component.scss'],
})
export class ChatInteractiveComponent implements OnInit {
  text = '';
  loading = false;
  chat = new FormControl('');

  constructor(private service: AllServicesService) {}
  ngOnInit(): void {
    initTE({ Ripple, Collapse });
  }

  resposta(event: any, chat: any) {
    if (event.keyCode === 13) {
      this.text = ''
      this.loading = true;
      const body = {
        prompt: this.chat.value,
      };
      console.log(body);

      this.service.chat(body).subscribe((res) => {
        this.chat.setValue('');
        this.loading = false;
        console.log(res);
        this.text = res.text;
      });
    }
  }
}
