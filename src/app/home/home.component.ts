import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements  AfterViewInit{
    
    @ViewChild('content') content;

    constructor(private authService: AuthService,
                private modalService: NgbModal) {
    }
    //ngOnInit(): void {
        //this.authService.logout();
        //this.openModal(this.content);
    //}

    ngAfterViewInit() {
        this.authService.logout();
        this.openModal(this.content);
    }

    openModal(content) {
        this.modalService.open(content, { centered: true });
    }

}