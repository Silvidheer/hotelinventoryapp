import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit{

  @ContentChild(EmployeeComponent)
  employee!: EmployeeComponent;

  constructor(){}
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Rick';
  }

}
