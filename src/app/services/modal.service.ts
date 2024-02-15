import {
  Injectable,
  inject
} from '@angular/core';
import { DialogRef, DialogService } from '@ngneat/dialog';
import { FormpostagemComponent } from '../components/postagem/formpostagem/formpostagem.component';

@Injectable()
export class ModalService {

  private dialog = inject(DialogService);

  show() {
    this.dialog.open(FormpostagemComponent);
  }

}
