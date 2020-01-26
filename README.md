# NgxQueryBuilder

Angular Query Builder component. Easy to integrate and use.

## Installation

```
npm install ngx-query-builder
```

Import NgxQueryBuilderModule (see [app.module.ts](https://github.com/vladify/ngx-query-builder/blob/master/src/demo/src/app/app.module.ts)):

```ts
import {NgxQueryBuilderModule} from 'ngx-query-builder';
// ...

@NgModule({
  imports: [
    NgxQueryBuilderModule
    // ...
  ]
  // ...
})
export class AppModule {}
```

## Usage

```ts
import { Component } from '@angular/core';
import {QueryBuilderFieldMap, RuleSet} from 'ngx-query-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  query: RuleSet = {
    condition: 'and',
    rules: [
      {
        field: 'category',
        type: 'select',
        operator: 'equal',
        value: ['wallets']
      },
      {
        field: 'price',
        type: 'double',
        operator: 'greater',
        value: 45.5
      },
      {
        field: 'inStock',
        type: 'boolean',
        operator: 'equal',
        value: true
      },
      {
        field: 'createdOn',
        type: 'date',
        operator: 'equal',
        value: '2020-01-20'
      }
    ]
  };

  fieldMap: QueryBuilderFieldMap = {
    name: {
      name: 'Name',
      type: 'string',
      settings: {
        nullableOperators: true,
        emptyOperators: true
      }
    },
    price: {
      name: 'Price',
      type: 'double'
    },
    createdOn: {
      name: 'Created On',
      type: 'date'
    },
    inStock: {
      name: 'In Stock',
      type: 'boolean'
    },
    category: {
      name: 'Category',
      type: 'select',
      options: [
        {name: 'Jackets', value: 'jackets'},
        {name: 'Hats', value: 'hats'},
        {name: 'Sandals', value: 'sandals'},
        {name: 'Wallets', value: 'wallets'},
        {name: 'Belts', value: 'belts'},
        {name: 'T-Shirts', value: 't-shirts'},
        {name: 'Toys', value: 'toys'},
        {name: 'Jumpers', value: 'jumpers'},
        {name: 'Jewellery', value: 'jewellery'},
      ]
    }
  };

}
```

```html
<ngx-query-builder [(ngModel)]="query" 
                   [fieldMap]="fieldMap">
</ngx-query-builder>
```
