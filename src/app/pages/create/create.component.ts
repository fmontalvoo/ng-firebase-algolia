import { Component, OnInit } from '@angular/core';

import { ItemModel } from 'src/app/models/item.model';

import { AlgoliaService } from 'src/app/core/services/algolia/algolia.service';
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fs: FirestoreService, private as: AlgoliaService) { }

  ngOnInit(): void {
  }

  public save(input: string): void {
    if (!input || input.length <= 0) return;

    const item: ItemModel = {
      item: input,
      createdAt: new Date()
    };

    this.fs.createItem(item)
      .then(doc => {
        item.objectID = doc.id;
        console.log(`DocId: ${doc.id}`);
        this.as.createItemIndex(item)
        .then(index =>{
          console.log(`IndexId: ${index.objectID}`);
        })
      })
      .catch(error => console.error(error));
  }

}
