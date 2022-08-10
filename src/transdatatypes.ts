// custom data type definitions here
export type TransType = {
    transactionId: number;
    senderName: string;
    senderAcnum: number;
    receiverName: string;
    receiverAcnum: number;
    transactionAmount: number;
    transactionDate: Date;
    transactionStatus: boolean;
  };