"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import axios from "axios";

interface SubscriptionButtonProps {
  isPro: boolean;
}

const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      setLoading(false);
      console.log("BILLING_ERROR", error);
    }
  };
  return (
    <Button variant={isPro ? "default" : "premium"} onClick={onClick}>
      {isPro ? "Manage Subscription" : "Upgrade"}
      {isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};

export default SubscriptionButton;
