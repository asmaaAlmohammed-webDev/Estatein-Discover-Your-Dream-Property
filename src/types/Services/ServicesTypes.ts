export interface ServiceCards {
  cards: ServiceCard[];
  promotionalCard: PromotionalCard;
}

export interface ServiceCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface PromotionalCard {
  title: string;
  description: string;
  link: string;
}
