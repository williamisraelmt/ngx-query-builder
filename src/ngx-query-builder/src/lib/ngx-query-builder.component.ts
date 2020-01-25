import {Component, Input, OnInit} from '@angular/core';
import {Field, QueryBuilderFieldMap, Rule, RuleSet, QueryBuilderSettings} from './interfaces/ngx-query-builder.interfaces';
import {OperatorsService} from './services/operators.service';

@Component({
  selector: 'ngx-query-builder',
  templateUrl: './ngx-query-builder.component.html',
  styleUrls: ['./ngx-query-builder.component.scss']
})
export class NgxQueryBuilderComponent implements OnInit {

  @Input() fieldMap: QueryBuilderFieldMap = {};
  @Input() settings: QueryBuilderSettings = {};

  @Input() data: RuleSet = this.getEmptyRuleSetData();
  @Input() parent: RuleSet;
  @Input() index: number;

  constructor(
    public operatorsService: OperatorsService
  ) { }

  ngOnInit() {
    if (typeof this.fieldMap !== 'object') {
      throw new Error('fieldMap must be an object');
    }

    if (typeof this.settings !== 'object') {
      throw new Error('settings must be an object');
    }
  }


  addRule(): void {
    this.data.rules.push({
      field: this.getFields()[0].value,
      type: this.getFields()[0].type,
      operator: this.operatorsService.getDefaultOperator()
    });
  }

  removeRule(index: number): void {
    this.data.rules.splice(index, 1);
  }

  addRuleSet(): void {
    this.data.rules.push(this.getEmptyRuleSetData());
  }

  removeRuleSet(index: number): void {
    if (this.hasParentRuleSet()) {
      this.parent.rules.splice(index, 1);
    }
  }

  changeCondition(value: string): void {
    this.data.condition = value;
  }

  hasParentRuleSet(): boolean {
    return !!this.parent;
  }

  getEmptyRuleSetData(): RuleSet {
    return { condition: 'and', rules: [] };
  }

  getFields(): Field[] {
    return Object.keys(this.fieldMap).map((value) => {
      const field = this.fieldMap[value];
      field.value = value;
      return field;
    });
  }

  getInputType(rule: Rule) {

    if (!this.fieldMap[rule.field]) {
      throw new Error(`No configuration for field '${rule.field}' was found!`);
    }

    const type = this.fieldMap[rule.field].type;

    if (this.operatorsService.getOperatorsWithoutInput().includes(rule.operator)) {
      return null; // No displayed input
    }

    if (this.operatorsService.MULTI_SELECT_OPERATORS.includes(rule.operator)) {
      return (type === this.operatorsService.INPUT_TYPE_SELECT) ? this.operatorsService.INPUT_TYPE_MULTI_SELECT : type;
    }

    return type;
  }

  getRuleOptions(rule: Rule) {
    return this.fieldMap[rule.field].options ? this.fieldMap[rule.field].options : [];
  }

  changeField(rule: Rule, index: number) {
    (this.data.rules[index] as Rule).type = this.fieldMap[rule.field].type;
    (this.data.rules[index] as Rule).operator = this.operatorsService.getDefaultOperator();
    (this.data.rules[index] as Rule).value = undefined;
  }

}
