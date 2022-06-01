import axios from 'axios';
import fs from 'fs';
import moment from 'moment';
import { TMegasena } from '../types/TMegasena';
moment.suppressDeprecationWarnings = true;

export default class Megasena {
  private gamePath = 'src/data/megasena';

  private async saveGame() {
    const response = await axios.get(
      'https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena/'
    );
    fs.writeFileSync(
      `./src/data/megasena/concurso-${response.data.numero}.json`,
      JSON.stringify(response.data)
    );
  }

  public lastGame(): TMegasena {
    const storedGames = fs.readdirSync(this.gamePath);
    const lastGame: TMegasena = JSON.parse(
      fs.readFileSync(`${this.gamePath}/${storedGames[storedGames.length - 1]}`, {
        encoding: 'utf-8',
      })
    );
    return lastGame;
  }

  public allGames(): TMegasena[] {
    const storedGames = fs.readdirSync(this.gamePath);
    const games: TMegasena[] = storedGames.map((game) =>
      JSON.parse(
        fs.readFileSync(`${this.gamePath}/${game}`, {
          encoding: 'utf-8',
        })
      )
    );
    return games;
  }

  public async getNewGame(): Promise<void> {
    const storedGames = fs.readdirSync(this.gamePath);
    if(storedGames.length === 0) return this.saveGame()
    const lastSavedGameDate = moment(this.lastGame().dataProximoConcurso).format(
      'DD/MM/YYYY'
    );
    const oldGame = moment().isAfter(lastSavedGameDate);
    if (oldGame) this.saveGame()
  }
}
