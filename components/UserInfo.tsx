"use client";

import { signOut } from "next-auth/react";
// @flow
import * as React from "react";
type Props = {};
export const UserInfo = (props: Props) => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        <div>
          Name:<span className="font-bold">John</span>
        </div>
        <div>
          Email:<span className="font-bold">jogn@gmail.com</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
