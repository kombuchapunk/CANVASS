export class Poll {
  constructor(
    public question: string,
    public choice1: string,
    public choice2: string,
    public choice1Counter: number,
    public choice2Counter: number,
    public userId: string
  ) {}
}
