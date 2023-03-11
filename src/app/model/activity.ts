export class Activity {
  constructor(
    public id: string = '',
    public company: any = null,
    public name: string = '',
    public type: string = '',
    public location: string = '',
    public description: any = null,
    public photo: any = null,
    public date: any = Date(),
    public visibleUntil: any = Date()
  ) {}
}
