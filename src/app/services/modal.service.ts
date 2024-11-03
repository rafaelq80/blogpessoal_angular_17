import {
  Injectable,
  inject
} from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { FormpostagemComponent } from '../components/postagem/formpostagem/formpostagem.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private dialog = inject(DialogService);

  show() {
    return this.dialog.open(FormpostagemComponent);
  }

}
