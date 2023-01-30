export class Company {
  constructor(
    public name: string = '',
    public companyUrl: string = '',
    public website: string = '',
    public logo: any = null,
    public technologies: string[] = [],
    public description: any = null,
    public studentOpportunities: any = null,
    public gallery: any[] = []
  ) {}
}
