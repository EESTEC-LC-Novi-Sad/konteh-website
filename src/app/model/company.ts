export class Company {
  constructor(
    public name: string = '',
    public id: string = '',
    public tier: string = '',
    public website: string = '',
    public linkedInUrl: string = '',
    public instagramUrl: string = '',
    public facebookUrl: string = '',
    public logo: any = null,
    public technologies: string[] = [],
    public description: any = null,
    public studentOpportunities: any = null,
    public gallery: any[] = []
  ) {}
}
