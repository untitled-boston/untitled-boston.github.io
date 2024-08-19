declare module "react-infinite-ticker" {
  import React from "react";

  interface TickerProps {
    duration?: number; // Duration in milliseconds for a complete scroll
    reverse?: boolean; // Whether to reverse the scroll direction
    children: React.ReactNode;
  }

  // Define the VerticalTicker component
  export const VerticalTicker: React.FC<TickerProps>;

  // Define the HorizontalTicker component
  export const HorizontalTicker: React.FC<TickerProps>;
}
