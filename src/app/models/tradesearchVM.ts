export interface TradeSearchVM {
  id: string;
  tradeDate: Date;
  commodity: string;
  tradeSide: string;
  quantity: number;
  price: number;
  counterparty: string;
  location: string;
  isSelected?: boolean;
  fromdate?: Date;
  todate?: Date;
  buy?: boolean;
  sell?: boolean;

}
