export class BlogPost {
  constructor(
    public content: any = null,
    public dateCreated: Date = new Date(),
    public featuredImage: any = null,
    public tags: String[] = [],
    public title: String = '',
    public urlHandle: String = '',
    public gallery: any[] = [],
    public youTubeEmbed: String = ''
  ) {}
}
