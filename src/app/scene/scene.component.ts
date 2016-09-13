import { Component, OnInit } from '@angular/core';
import { ConvoService } from '../core/convo.service';
import { Observable } from 'rxjs/Observable';

@Component({
  // selector: 'app-scene', // unnecessary because via router
  template: `
    <app-npc [aTurn]="npcTurns"></app-npc>
    <app-player [pTurn]="playerTurns"
                [pThought]="playerThought"
                [pOptions]="playerOptions"
                [opOption]="opOption"
                [vkOption]="vkOption"
                [unOption]="unOption">
                </app-player>
    <footer>
      <p>sceneMeta: {{sceneMeta}}</p>
      <hr color="grey">
      {{ convoTurns$ | async | json }}
    </footer>
  `,
  styleUrls: ['scene.component.css']
})
export class SceneComponent implements OnInit {
  errorMessage: string;
  convoTurns$: Observable<any>;
  npcTurns;
  playerTurns;
  playerThought;
  playerOptions;
  opOption;
  vkOption;
  unOption;
  sceneMeta; // just testing for now

  constructor(private convoService: ConvoService) { }

  ngOnInit() {
    this.getSceneConvo();
    this.getNpcTurns();
    this.getPlayerTurns();
    this.getPlayerThoughts();
    this.getPlayerOptions();
    this.getTitle(); // just testing for now
  }

  getSceneConvo() {
    this.convoTurns$ = this.convoService.getSceneConvo();
  }

  getNpcTurns() {
    this.npcTurns = this.convoService.getNpcTurns();
  }

  getPlayerTurns() {
    this.playerTurns = this.convoService.getPlayerTurns();
  }

  getPlayerThoughts() {
    this.playerThought = this.convoService.getPlayerThoughts();
  }

  getPlayerOptions() {
    this.playerOptions = this.convoService.getPlayerOptions();
  }

// just testing for now:
  getTitle() {
    this.sceneMeta = this.convoService.getTitle();
  }

}
