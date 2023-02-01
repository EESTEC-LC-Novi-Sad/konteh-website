export class Offer {
  constructor(
    public id: string = '',
    public company: any = null,
    public offerType: string = '',
    public positionName: string = '',
    public location: string = '',
    public remoteOption: boolean = true,
    public positionDescription: any = null,
    public requiredKnowledge: any = null,
    public startingTime: string = '',
    public workingHours: number = 8,
    public tags: string[] = [],
    public uniDepartments: string[] = [],
    public picture: any = null,
    public callToActionUrl: string = '',
    public howToApply: any = null,
    public visibleUntil: any = Date()
  ) {}
}
