import { Component, ChangeDetectorRef } from '@angular/core';
import { NodeComponent, NodeService } from 'rete-angular-render-plugin';

@Component({
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.sass'],
  providers: [NodeService]
})
export class MyNodeComponent extends NodeComponent {
  constructor(protected service: NodeService, protected cdr: ChangeDetectorRef) {
    super(service, cdr);
  }
}
