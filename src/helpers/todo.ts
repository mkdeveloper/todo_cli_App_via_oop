class Todo {
  private static staticId = 0;
  private Id = 0;
  private Name: string;
  private Discription: string;
  private Status: string;

  constructor(Name: string, Discription: string, Status: string) {
    this.Id = ++Todo.staticId;
    this.Name = Name;
    this.Discription = Discription;
    this.Status = Status;
  }

  get getId() {
    return this.Id;
  }

  set setId(value: number) {
    this.Id = value;
  }

  get getName() {
    return this.Name;
  }

  set setName(value: string) {
    this.Name = value;
  }

  get getDis() {
    return this.Discription;
  }

  set setDis(value: string) {
    this.Discription = value;
  }

  get getStat() {
    return this.Status;
  }

  set setStat(newStatus: string) {
    this.Status = newStatus;
  }
}

export default Todo;
