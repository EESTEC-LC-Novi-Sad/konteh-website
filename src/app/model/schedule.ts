export class Schedule {
  constructor(
    public id: string = '',
    public title: string = '',
    public location: string = '',
    public startTime: any = Date(),
    public endTime: any = Date()
  ) {}
}
