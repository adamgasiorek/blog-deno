import {NgModule, SecurityContext} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarkdownModule, MarkedOptions, MarkedRenderer} from "ngx-markdown";
import {NotesRoutingModule} from "./notes-routing.module";
import {NoteComponent} from "./pages/note.component";
import {NotesComponent} from "./pages/notes.component";
import {NoteEditorComponent} from "./pages/note-editor.component";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UiModule} from "@adamgasiorek/ui";
import {SharedModule} from "../../shared";
import {NoteThumbComponent} from "./components/note-thumb/note-thumb.component";
import {PrivateNotesComponent} from "./pages/notes-private.component";

function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.listitem = (text: string) => {
    return '<div class="body2">' + text + '</div>';
  };

  return {
    renderer: renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    NoteComponent,
    NoteEditorComponent,
    NotesComponent,
    PrivateNotesComponent,
    NoteThumbComponent
  ],
  imports: [
    NotesRoutingModule,
    CommonModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory
      },
      sanitize: SecurityContext.NONE
    }),
    SharedModule,
    FormsModule,
    UiModule
  ]
})
export class NotesModule { }
