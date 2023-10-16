"use client";

import { PropsWithChildren, createContext, useContext } from "react";
import UAParser from "ua-parser-js";

export type UserAgent = UAParser.IResult;

export interface UserAgentContextValue {
  userAgent: UserAgent;
}

export const UserAgentContext = createContext<UserAgentContextValue | null>(
  null
);

export function useUserAgent() {
  const context = useContext(UserAgentContext);

  if (!context) {
    throw new Error("UserAgentProvider가 없습니다.");
  }

  return context;
}

export type UserAgentProviderProps = PropsWithChildren<UserAgentContextValue>;

export function UserAgentProvider({
  children,
  userAgent,
}: UserAgentProviderProps) {
  return (
    <UserAgentContext.Provider value={{ userAgent }}>
      {children}
    </UserAgentContext.Provider>
  );
}
