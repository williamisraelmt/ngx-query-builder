import { Component } from '@angular/core';
import {QueryBuilderFieldMap, RuleSet} from '../../../ngx-query-builder/src/lib/interfaces/ngx-query-builder.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo';

  query: RuleSet = {
    condition: 'and',
    rules: [
      {
        field: 'occupation',
        type: 'select',
        operator: 'equal',
        value: ['student']
      }
    ]
  };

  fieldMap: QueryBuilderFieldMap = {
    firstName: {
      name: 'First Name',
      type: 'string',
      settings: {
        nullableOperators: true
      }
    },
    lastName: {
      name: 'Last Name',
      type: 'string',
      settings: {
        nullableOperators: true,
        emptyOperators: true
      }
    },
    age: {
      name: 'Age',
      type: 'integer'
    },
    gender: {
      name: 'Gender',
      type: 'string'
    },
    inStock: {
      name: 'In Stock',
      type: 'boolean'
    },
    occupation: {
      name: 'Occupation',
      type: 'select',
      options: [
        {name: 'Teacher', value: 'teacher'},
        {name: 'Student', value: 'student'}
      ]
    }
  };

}
