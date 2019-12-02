import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.scss']
})
export class AdminComponent {
    public cards = [];
    public closeResult: string;

    constructor(private modalService: NgbModal) {
    }

    public open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
    }
}
