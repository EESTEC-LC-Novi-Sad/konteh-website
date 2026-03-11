export class ActivityGroup {
  constructor(
    public id: string = '',
    public name: string = '',
    public type: string = '',
    public activity: any[] = [],
    public description: string = ''
  ) {}
}