import { ParticipantsService } from "./../../../../global/services/participants/participants.service";
import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "participants-window",
  templateUrl: "./participants-window.component.html",
  styleUrls: ["./participants-window.component.css"],
})
export class ParticipantsWindowComponent implements OnInit {
  @ViewChild("participants", { read: ElementRef, static: false })
  public participants: ElementRef<any>;
  @Input() participantSelected: boolean;
  @Input() selectedParticipantName: string;
  @Input() display: boolean;
  @Output() displayEvent = new EventEmitter<boolean>();

  participantOptions: boolean;

  constructor(private participantService: ParticipantsService) {}

  ngOnInit(): void {}

  public scrollDown(): void {
    this.participants.nativeElement.scrollTop += 106;
  }

  public scrollUp(): void {
    this.participants.nativeElement.scrollTop -= 106;
  }

  participantClicked(name: string) {
    if (this.selectedParticipantName == name) {
      this.participantSelected = false;
      this.selectedParticipantName = undefined;
    } else {
      this.selectedParticipantName = name;
      this.participantSelected = true;
    }
  }

  emitDisplayEvent() {
    this.display = false;
    this.displayEvent.emit(this.display);
  }

  muteSelected() {
    this.participantService.mute(this.selectedParticipantName);
    this.participantSelected = false;
    this.selectedParticipantName = undefined;
  }
}
