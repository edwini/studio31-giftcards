import { Request, Response } from "https://deno.land/x/oak@v10.6.0/mod.ts";

export const dummyResponse = ({ response }: { response: Response }) => {
  response.body = {
    gcClaimCode: "W3GU-YD4NGH-88C8",
    cardInfo: {
      value: {
        currencyCode: "USD",
        ammount: 1.00,
      },
    },
    cardStatus: "Fulfilled",
    gcId: "A3B6AC387ESRIX",
    creationRequestId: "AwssbTSpecTest001",
    gcExpirationDate: new Date().toUTCString(),
    status: "SUCCESS",
  };
};

export const dummyRequest = ({ response }: { response: Response }) => {
  response.body = {
    amount: 20,
    currencyCode: "USD",
    partnerId: "yourPartnerId",
    accessKey: "yourAccessKey",
    secretKey: "yourSecretKey",
    environment: "sandbox",
    endpoint: "NA",
  };
};

export const createGiftCard = async (
  { request, response }: { request: Request; response: Response },
) => {
  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      message: "body is requited",
    };
  } else {
    const body: GiftCard = await request.body().value;
    response.status = 200;
    response.headers.set("Content-Type", "application/JSON");
    console.log(body.accessKey);
    response.body = {
      gcClaimCode: "W3GU-YD4NGH-88C8",
      cardInfo: {
        value: {
          currencyCode: "USD",
          ammount: 1.00,
        },
      },
      cardStatus: "Fulfilled",
      gcId: "A3B6AC387ESRIX",
      creationRequestId: "AwssbTSpecTest001",
      gcExpirationDate: new Date().toUTCString(),
      status: "SUCCESS",
    };
  }
};

type GiftCard = {
  amount: number;
  currencyCode: string;
  partnerId: string;
  accessKey: string;
  secretKey: string;
  environment: string;
  endpoint: string;
};

type CreateGiftCardResponse = {
  gcClaimCode: string;
  cardInfo: cardInfo;
  cardStatus: string;
  gcId: string;
  creationRequestId: string;
  gcExpirationDate: string;
  status: string;
};
type cardInfo = {
  value: value;
};
type value = {
  currencyCode: string;
  ammount: number;
};
