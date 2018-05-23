class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
  }
  public complete() {
      this.completed = true;
  }
  getName():string {
      return this.name;
  }
  getCompleted () {
      return this.completed;
  }
}

export {Thing};
