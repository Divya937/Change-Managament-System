import {Component, OnInit, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import {UpdateService} from '../update.service';
import {Update} from '../update';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updates: Update[];
  statusMessage: string;
  update = new Update();

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
            (error: any) => {
                console.log(error);
                this.statusMessage = 'Problem with service. Please try again later!';
            }
        );
    }

    addUpdate(): void{
        console.log('Add Update');
        this._updateService.addUpdate(this.update)
            .subscribe((response: any) => {console.log(response); this.getUpdates(); this.reset(); },
            (error: any) => {
                console.log(error);
                this.statusMessage = 'Problem with service. Please try again later!';
            }
        );
    }

    private reset(){
        this.update.Type = 'null';
        this.update.Title = 'null';
        this.update.Content = 'null';
    }

    // tslint:disable-next-line:use-lifecycle-interface
    ngOnChanges(changes: any) {
        console.log('OnChanges');
    }

    deleteUpdate(updateId: string){
      console.log('Delete Update' + updateId);
      this._updateService.deleteUpdate(updateId)
          .subscribe((response) => {console.log(response); this.getUpdates(); },
          (error) => {
              console.log(error);
              this.statusMessage = 'Problem with service. Please try again later!';
          });
      this.reset();
  }

  getUpdate(updateId: string){
      console.log('Inside the updateBook()::::::Book id::::' + updateId);
      this._updateService.getUpdateById(updateId)
          .subscribe((updateData) => {this.update = updateData; this.getUpdates(); }),
          // tslint:disable-next-line:no-unused-expression
          (error: any) => {
              console.log(error);
              this.statusMessage = 'Problem with service. Please try again later!';
          };
      this.reset();
      console.log('end of updateBook()::::::');
  }

}
