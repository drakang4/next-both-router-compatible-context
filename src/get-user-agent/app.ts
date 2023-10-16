import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

export function getUserAgent() {
  const headersList = headers();

  const parser = new UAParser(headersList.get("user-agent") ?? undefined);

  return parser.getResult();
}
