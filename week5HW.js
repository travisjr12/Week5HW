//i created a player class that has a name and position//
class Player {
  constructor(name, position) {
this.name = name;
this.position = position;
  }
//describes a player
  describe() {
    return `${this.name} plays ${this.position}.`;
  }
}
//collects all the players on a team depending on the team name 
  class Team {
    constructor(name) {
      this.name = name;
      this.players = [];
    }
//showing that if the player was selected to push the information 
//and without it, it would display this message

    addPlayer(player) {
      if (player instanceof Player) {
        this.players.push(player);
      } else{
        throw new Error(`You can only add an instance of a Player. Argument is not a player: ${player}`);


    }
  }
  //describes the team name and number of players //
  describe() {
    return `${this.name} has ${this.players.length} players.`;
  }
}
//class created for Menu to grab array of teams 
class Menu {
  constructor() {
    this.teams = [];
    this.selectedTeam = null;
//shows main menu options that switches between each option and if 0 is selected it will alert goodbye to close the window
  }
  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.createTeam();
          break;
          case '2':
            this.viewTeam();
            break;
            case '3':
              this.deleteTeam();
              break;
              case '4':
                this.displayTeams();
                break;
                default:
                selection = 0;
              } 
      selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
  }
  //what appears on the main menu for each case //
  showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create new team
    2) view team
    3) delete team
    4) display all teams
    `);
  
}
//what appears on sub menu//
showTeamMenuOptions(teamInfo) {
  return prompt(`
  0) back
  1) create player
  2) delete player
  ----------------
  ${teamInfo}
  `);
}
//this is to display string of the teams to itterate the name lengths 
//depending on the team name it is displayed on a new line  
  displayTeams() {
    let teamString = '';
    for (let i = 0; i < this.teams.length; i++) {
      teamString += i + ') ' + this.teams[i].name + '\n';
    }
    alert(teamString);
  }
  //this promps name to be made for new teams
  createTeam() {
    let name = prompt('Enter name of new team:');
    this.teams.push(new Team(name));
  }
  //prompts to view team from team class to select from the index of teams made by
  //the useer and describe whats the teams nname is on a new line 
  viewTeam() {
    let index = prompt('Enter the index of team you want to view:');
    if (index > -1 && index < this.teams.length) {
      this.selectedTeam = this.teams[index];
      let description = 'Team Name: ' + this.selectedTeam.name + '\n';
//based on the selected team and the lengths of the ittereation 
//based on their name and position will be displayed
      for (let i = 0; i < this.selectedTeam.players.length; i++) {
        description += i + ') ' + this.selectedTeam.players[i].name + ' - '
         + this.selectedTeam.players[i].position + '\n';
      }
      //lets each case to be chosen 1 or 2
      let selection = this.showTeamMenuOptions(description);
      switch (selection) {
        case '1':
          this.createPlayer();
          break;
          case '2':
            this.deletePlayer();
      }
    }
  }
//wanting to delete a team indicates all teams above -1 and depending on the team chosen the teams in the index is spliced to remove it by 1 team
  deleteTeam() {
    let index = prompt('Enter the index of the team you wish to delete:');
    if(index > -1 && index < this.teams.length) {
      this.teams.splice(index, 1);
    }
  }
  //we want to enter each player and position and push that to the team
  createPlayer() {
    let name = prompt('Enter name for new player:');
    let position = prompt('Enter position for new player:');
    this.selectedTeam.players.push(new Player(name, position));
  }
  //i want to select a team >-1 amd want to select the player and take them away by 1 
  deletePlayer() {
    let index = prompt('Enter the index of the player you want to delete:');
    if (index > -1 && index < this.selectedTeam.players.length) {
      this.selectedTeam.players.splice(index, 1);
    }
  }
}
//initiates the menu app
 let menu = new Menu();
 menu.start();
{
 
}