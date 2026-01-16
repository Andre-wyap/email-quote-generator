export enum Gender {
  Male = 'Male',
  Female = 'Female'
}

export enum SmokerStatus {
  Smoker = 'Smoker',
  NonSmoker = 'Non-Smoker'
}

export interface PlanDetails {
  name: string;
  annualLimit: string;
  roomAndBoard: string;
  deductible: string;
  copayment: string;
  premium: string;
}

export interface ClientDetails {
  name: string;
  age: string;
  gender: string;
  smoker: string;
}

export interface EmailContent {
  welcomeMessage: string;
  deductibleExplanationTitle: string;
  deductibleExplanation: string;
  // Button Configurations
  whatsappButtonText: string;
  whatsappLink: string;
  downloadButtonText: string;
  downloadLink: string;
  // About Section
  aboutSectionTitle: string;
  aboutSectionContent: string;
}

export interface QuoteData {
  client: ClientDetails;
  plan1: PlanDetails;
  plan2: PlanDetails;
  content: EmailContent;
}