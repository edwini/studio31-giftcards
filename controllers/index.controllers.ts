import { Request, Response } from "https://deno.land/x/oak@v10.6.0/mod.ts";
// deno-lint-ignore no-unused-vars
import * as mod from "https://deno.land/std@0.147.0/uuid/mod.ts";

export const getUsers = ({ response }: { response: Response }) => {
  response.body = {
    message: "OK",
    users,
  };
};
export const getUser = (
  { params, response }: { params: { id: string }; response: Response },
) => {
  const user = users.find((u) => u.id == params.id);
  if (user) {
    response.body = {
      message: "1 User found",
      user: user,
    };
  } else {
    response.body = {
      message: "User not found",
    };
  }
};

export const updateUser = () => {};
export const createUser = async (
  { request, response }: { request: Request; response: Response },
) => {
  const body: BodyUser = await request.body().value;
  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      message: "Body is required",
    };
  } else {
    const nuevo = {
      id: crypto.randomUUID(),
      name: body.name,
    };
    users.push(nuevo);
    response.status = 200;
    response.body = {
      message: "Recibido",
      user: nuevo,
    };
  }
};

const users: User[] = [{
  id: "1",
  name: "Grace Hope",
}];

type User = {
  id: string;
  name: string;
};

type BodyUser = {
  name: string;
};
