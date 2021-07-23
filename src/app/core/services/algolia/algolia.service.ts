import { Injectable } from '@angular/core';

import algoliasearch from "algoliasearch";

import { ItemModel } from 'src/app/models/item.model';

import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class AlgoliaService {

  static ITEMS_INDEX: string = "items_index";

  private client;

  constructor() {
    this.client = algoliasearch(
      environment.algoliaConfig.appId,
      environment.algoliaConfig.apiKey
    );
  }

  public createItemIndex(item: ItemModel) {
    const index = this.client.initIndex(AlgoliaService.ITEMS_INDEX);
    return index.saveObject(item);
  }

  public searchResearchGroup() {
    const index = this.client.initIndex("Items");
  }
}
