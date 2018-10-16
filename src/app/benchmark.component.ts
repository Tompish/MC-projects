import { Form } from '@angular/forms';
import { Component } from '@angular/core';
import { PercentDirective } from './percent.directive';

@Component({
    selector: 'Benchmark',
    templateUrl: 'benchmark.component.html',
})
export class BenchmarkComponent{

  private index: Index;
  private benchmark: Array<Index>;

    constructor(){
        this.index = new Index(null, null);
        this.benchmark = [];
    }

    private addIndex(): void{
        this.benchmark.push(this.index);
        this.index = new Index('', 100 - this.index.weight);
    }
}

export class Index{
  constructor(public name: string, public weight: number)
  {}
}