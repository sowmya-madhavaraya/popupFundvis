import { Component, Input } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { AccordionComponent } from '../../Accordion/accordion/accordion.component';

@Component({
  selector: 'nav-tabs',
  imports: [TabComponent, NgFor, AccordionComponent, NgSwitch, NgSwitchCase],
  templateUrl: './nav-tabs.component.html',
  styleUrl: './nav-tabs.component.css'
})
export class NavTabsComponent {
  tabs = ['Details', 'Systems', 'References'];
  selectedTab = this.tabs[0];

  // TODO: This data can be received from the BE, adding dummy for now

  // items:AccordionItem[] = [];

  // constructor(private restService: RestServices) {}

  // ngOnInit() {
  //   this.restService.getAccordionItems().subscribe((data: AccordionItem[]) => {
  //     this.items = data;
  //   });
  // }

  items = [
    {
      title: 'Tasks',
      count: 2,
      columns: ['Name', 'Action'],
      data: [
        { Name: 'Function a', Action: 'Preview' },
        { Name: 'Function b', Action: 'Preview' },
      ]
    },
    {
      title: 'Assets',
      count: 0,
      columns: ['Name', 'Action'],
      data: [
      ]
    },
    {
      title: 'Business Functions',
      count: 2,
      columns: ['Name', 'Action'],
      data: [
        { Name: 'Function 1', Action: 'Preview' },
        { Name: 'Function 2', Action: 'Preview' }
      ]
    },
    {
      title: 'Contracts',
      count: 1,
      columns: ['Name', 'Action'],
      data: [
        { Name: 'Function 0', Action: 'Preview' },
      ]
    }
  ];

  /**
   * set selected tab
   * @param tab 
   */
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
