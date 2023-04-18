import { CurrencyPipe } from "@angular/common";

export class AuthUser {
  constructor(
    private access_token: string,
    public expires_in: number,
    public g_settings: {
      id: string;
      company_name: string;
      company_type: string;
      email: string;
      currency: CurrencyPipe;
      phone: number;
      physical_address: string;
      postal_address: string;
      website_url: string;
      postal_code: number;
      logo: MediaImage;
      favicon: null;
      date_format: Date;
      amount_thousand_separator: string;
      amount_decimal_separator: string;
      amount_decimal: 2;
      theme: string;
      language: string;
      deleted_at: string;
      created_at: Date;
      updated_at: Date;
    },
    public first_name: string,
    public last_name: string,
    public scope: string
  ) {}

  get token() {
    return this.access_token;
  }
}
