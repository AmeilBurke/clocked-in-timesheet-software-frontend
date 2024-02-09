import { Trade } from "../types/typeIndex";

// make these for all needed

const getTradeNameFromId = (allTrades: Trade[], tradeId: number) => {
  return allTrades.map((trade: Trade) => {
    if (trade.trade_id === tradeId) {
      return trade.trade_name;
    }
  });
};

export default getTradeNameFromId;
