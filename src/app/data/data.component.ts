import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PagerService} from '../pager.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  pager: any;
  tab: string;
  initialTab = {
    index: 0
  }
  activeTab: string = 'pending';
  allData: [];
  constructor(public restApi: ApiService, private pagerService: PagerService) { }

  ngOnInit() {
    this.getData(this.initialTab);
  }
  getData(tabIndex) {
    console.log(tabIndex.index);
    if(tabIndex.index == 0) {
      this.tab = 'pending';
      this.activeTab = 'pending';
    }else if(tabIndex.index == 1) {
      this.tab = 'approved';
      this.activeTab = 'approved';
    }else if(tabIndex.index ==2) {
      this.tab = 'rejected';
      this.activeTab = 'rejected';
    }
    console.log(this.tab);
    this.restApi.getData(this.tab).subscribe(data=> {
      console.log(data);
      this.allData = data.data;
      this.allData.forEach(function(value:any) {
        value.filename = "http://localhost:3000/public/" + value.fileName;
      });
      //this.pager = this.pagerService.getPager(allData.length, data.currentPage, data.recordLimit);
    })
  }
  onHandler(status,id) {
    console.log(status,id);
    const data = {
      id:  id,
      status: status
    }
    this.restApi.changeStatus(data).subscribe(res => {
        const response = res;
        if(response.status ==200) {
          this.getData(this.initialTab);
        }
    });
  }
  filterData(searchValue) {
    console.log(searchValue);
    const data = {
      status : this.activeTab,
      search: searchValue
    }
    this.restApi.searchData(data).subscribe(res=> {
      console.log(res);
      this.allData = res.data;
      this.allData.forEach(function(value:any) {
        value.filename = "http://localhost:3000/public/" + value.fileName;
      });
    });

  }

}
