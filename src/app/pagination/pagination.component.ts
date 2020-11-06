import { Component, EventEmitter, Input, Output, OnInit, ChangeDetectionStrategy, OnChanges} from '@angular/core';
import { PagerService} from '../pager.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  @Input() loading: boolean; // check if content is being loaded
  @Input() totalRecords: number;
  @Input() recordLimit: number;
  @Input() data: any[];
  @Output() pageChange = new EventEmitter();
  @Input() dataInstance;
  @Input() url: any;

  pager: any = {};
  pagedItems: any[];
  page: number;
  constructor(private pagerService: PagerService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.page = +params.page ? +params.page : 1 ;
    });
  }
  // ngOnChanges() {
  //   // Check if the data exists before using it
  //   this.route.queryParams.subscribe(params => {
  //     this.page = +params.page ? +params.page : 1 ;
  //     if (params.limit) {
  //       this.recordLimit = +params.limit;
  //     } else {
  //       this.recordLimit = 25;
  //     }
  //   });
  //   this.pager = this.pagerService.getPager(this.totalRecords, this.page, this.recordLimit);
  // }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.totalRecords, page, this.recordLimit);
    this.pagedItems = this.data;
    this.pageChange.emit(page);
  }

}
