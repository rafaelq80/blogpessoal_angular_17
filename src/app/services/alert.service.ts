import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toast: ToastrService) { }

  sucesso(title: any, message: any){
    this.toast.success(message, title)
  }

  erro(title: any, message: any){
    this.toast.error(message, title)
  }

  info(title: any, message: any){
    this.toast.info(message, title)
  }
}
