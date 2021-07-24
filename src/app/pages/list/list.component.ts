import { Component, OnInit } from '@angular/core';

import { AlgoliaService } from 'src/app/core/services/algolia/algolia.service';
import { ItemModel } from 'src/app/models/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public items: ItemModel[] = [];

  constructor(private as: AlgoliaService) { }

  ngOnInit(): void {
    this.listItems();
  }

  public search(query: string): void {
    this.as.searchItems(query)
      .then(response => {
        this.items = [];
        for (const hit of response.hits) {
          // const it = JSON.parse(JSON.stringify(hit._highlightResult))['item']['value'];
          const json = JSON.parse(JSON.stringify(hit));
          const item: ItemModel = {
            objectID: json['objectID'],
            item: json['item'],
            createdAt: json['createdAt'],
          };

          this.items.push(item);
        }
      });
  }

  public listItems(): void {
    this.as.getItems(" ", 0)
      .then(response => {
        this.items = [];
        for (const hit of response.hits) {
          const json = JSON.parse(JSON.stringify(hit));
          const item: ItemModel = {
            objectID: json['objectID'],
            item: json['item'],
            createdAt: json['createdAt'],
          };

          this.items.push(item);
        }
      });
  }

}
