interface Player {
  length(length: any): unknown;
  id: number,
  name: string,
  hp: number,
  mp: number,
  str: number,
  int: number,
  def: number,
  res: number,
  spd: number,
  luck: number,
  race: number,
  class: number,
  rarity: number
}

export default Player;
