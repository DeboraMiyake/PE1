import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  colletion;

  constructor(
    private db: AngularFirestore
  ) { }

  registraConta(conta){
    conta.id = this.db.createId();
    this.colletion = this.db.collection('conta');
    return this.colletion.doc(conta.id).set(conta);
  }

  lista(tipo){
    this.colletion = this.db.collection('conta', ref => ref.where('tipo', '==', tipo));
    return this.colletion.valueChanges();
  }

  remove(conta){
    this.colletion = this.db.collection('conta');
    this.colletion.doc(conta.id).delete();
  }
}
