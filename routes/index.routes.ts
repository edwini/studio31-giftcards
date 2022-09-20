import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import {
  createGiftCard,
  dummyRequest,
  dummyResponse,
} from "../controllers/giftcard.controller.ts";
import {
  createUser,
  getUser,
  getUsers,
} from "../controllers/index.controllers.ts";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = `Endpoint grift-cards is up on port 3200 
    Routes: 
      GET/ -> base URL
      GET/dummyrequest -> return a dummy request object
      GET/dummyresponse -> return a dummy response object
      POST/giftcards -> generate a new gift card
      endpoint time: ${new Date()}`;
});

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("/users", createUser);

router.get("/dummyrequest", dummyRequest);
router.get("/dummyresponse", dummyResponse);

router.post("/giftcards", createGiftCard);

export default router;
