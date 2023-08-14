import { Component, OnInit } from '@angular/core';
import { Reference } from 'src/app/interfaces/reference.interface';
import { ReferencesService } from 'src/app/services/references.service';

@Component({
  selector: 'list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent implements OnInit {
  public references: Reference[] = [];
  constructor(private refencesService: ReferencesService) {}
  ngOnInit(): void {
    this.refencesService
      .getReferences()
      .subscribe((references) => (this.references = references));
    }

}
