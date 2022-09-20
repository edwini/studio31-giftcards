import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import router from "./routes/index.routes.ts";

const app: Application = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3200 });
