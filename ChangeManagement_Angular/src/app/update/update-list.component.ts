import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';
import { Update } from '../update';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {

  update = new Update();
    statusMessage: string;
    updates: Update[];
    // tslint:disable-next-line:variable-name
    constructor(private _updateService: UpdateService, private _router: Router){}

    ngOnInit(): void {
        console.log('Fetching updates');
        this.getUpdates();
    }

    getUpdates(): void{
        console.log('Get Updates');
        this._updateService.getAllUpdates()
            .subscribe((updateData) => this.updates = updateData,
            (error) => {
                console.log(error);
                this.statusMessage = 'Problem with service. Please try again later!';
            }
        );
        console.log('end of getBooks():::::');
    }

}
