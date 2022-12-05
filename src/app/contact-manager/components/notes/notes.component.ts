import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Note } from '../../models/note';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit, AfterViewInit {

    @Input() notes: Note[];

    public displayedColumns: string[] = ['position', 'title', 'date' ];
    public dataSource: MatTableDataSource<Note>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() { }

    public ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    public ngOnInit(): void {
        this.dataSource = new MatTableDataSource<Note>(this.notes);
    }

    public applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
