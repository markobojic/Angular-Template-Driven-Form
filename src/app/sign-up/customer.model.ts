export class Customer {
  constructor(
    public firstname: string = '',
    public lastname: string = '',
    public email: string = '',
    public sendCatalog: boolean = false,
    public addressType: string = 'home',
    public state: string = '',
    public street1?: string,
    public street2?: string,
    public city?: string,
    public zip?: string
  ) {}
}
