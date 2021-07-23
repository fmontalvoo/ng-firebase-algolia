import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { ItemModel } from 'src/app/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  static ITEMS: string = "items";

  constructor(private fs: AngularFirestore) {
  }

  public createItem(item: ItemModel) {
    return this.fs.collection(`/${FirestoreService.ITEMS}`)
      .add(item);
  }
}
