"use client";

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b6a5bc7c-c26a-4556-a863-b3e86d185bd3");
  }, []);

  return null;
};

export default CrispChat;
