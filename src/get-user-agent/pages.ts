import { NextPageContext } from "next";
import UAParser from "ua-parser-js";

export function getUserAgent(ctx: NextPageContext) {
  const parser = new UAParser(ctx.req?.headers["user-agent"]);

  return parser.getResult();
}
