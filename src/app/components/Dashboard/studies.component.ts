import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../../entities/project'

import { ProjectService } from '../../services/project.service'

@Component({
  selector: 'doletic-studies',
  templateUrl: '../../html/studies.component.html',
  styles: [`input[type=number]::-webkit-inner-spin-button, 
            input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            margin: 0; 
           }
           input[type=number] {-moz-appearance: textfield;}`],
  providers: [ProjectService]
})
export class StudiesComponent implements OnInit {

    @Input() consultantId : number ;

    ready: boolean = false;
	limits: number[] = [5, 10, 25, 50];
  limit: number = 5;
  page: number = 1;

	projects: Project[] = [];
	search_results: Project[] = [];

	searchNumber: number = null;
	searchName: string = null;
  searchStatus: string = null;
  searchRole: string = null;

  statusOptions: string[] = ['Status1', 'Status2', 'Status3'];
  roleOptions: string[] = ['Role1', 'Role2', 'Role3'];

  constructor(private projectService: ProjectService)
  { }

  ngOnInit() {
  	this.projectService.getAllByConsultant(this.consultantId)
      .then(projects => {
          this.projects = this.search_results = projects;
          this.ready = true;
      });
  }

  search(): void {
  	let search_buffer: Project[] = this.projects;
  	if(this.searchNumber != null) {
  		search_buffer = search_buffer.filter(project => project.number == this.searchNumber);
  	}
    if(this.searchName != null) {
      let regex : RegExp = new RegExp(this.searchName.trim().replace(/\s+/g,'|'), 'i');
      search_buffer = search_buffer.filter(project => project.name.search(regex) != -1);
    }
    /*if(this.searchStatus != null) {
      let regex : RegExp = new RegExp(this.searchStatus.trim().replace(/,+/g,'|'), 'i');
      search_buffer = search_buffer.filter(project => project.status.search(regex) != -1);
    }
    if(this.searchRole != null) {
      let regex : RegExp = new RegExp(this.searchRole.trim().replace(/,+/g,'|'), 'i');
      search_buffer = search_buffer.filter(project => project.role.search(regex) != -1);
    }*/
	this.search_results = search_buffer;	
  }

  ceil(x: number): number {
    return Math.ceil(x);
  }

  min(x: number, y: number): number {
    return Math.min(x, y);
  }

}
