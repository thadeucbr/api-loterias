import Megasena from './Megasena';

export default class Database {
  private static getMegasena() {
    const megasena = new Megasena();
    megasena.getNewGame()
  }

  static update() {
    setTimeout(() => this.getMegasena(), 5000)
  }
}