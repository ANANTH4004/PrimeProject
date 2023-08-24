import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-adding',
  templateUrl: './dynamic-adding.component.html',
  styleUrls: ['./dynamic-adding.component.scss']
})
export class DynamicAddingComponent {
  // componentName: string = '';
  // subcomponentName: string = '';

  // addComponent() {
  //   // Handle adding component logic here
  //   console.log('Adding component:', this.componentName);
  //   this.componentName = ''; // Clear the input
  // }

  // addSubcomponent() {
  //   // Handle adding subcomponent logic here
  //   console.log('Adding subcomponent:', this.subcomponentName);
  //   this.subcomponentName = ''; // Clear the input
  // }
  // componentName: string = '';
  // subcomponentName: string = '';
  // componentList: { name: string, subcomponents: string[] }[] = [];

  // addComponent() {
  //   this.componentList.push({ name: this.componentName, subcomponents: [] });
  //   this.componentName = ''; // Clear the input
  // }

  // addSubcomponent() {
  //   if (this.componentList.length > 0) {
  //     this.componentList[this.componentList.length - 1].subcomponents.push(this.subcomponentName);
  //     this.subcomponentName = ''; // Clear the input
  //   }
  // }
  componentName: string = '';
  subcomponentName: string = '';
  componentList: { name: string, subcomponents: string[] }[] = [];

  addComponent() {
    this.componentList.push({ name: this.componentName, subcomponents: [] });
    this.componentName = ''; // Clear the input
  }

  addSubcomponent() {
    if (this.componentList.length > 0) {
      this.componentList[this.componentList.length - 1].subcomponents.push(this.subcomponentName);
      this.subcomponentName = ''; // Clear the input
    }
  }
}


