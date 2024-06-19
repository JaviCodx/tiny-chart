export const ANALYSIS_TIME_KEYS = {
  HOURLY: "HOURLY",
  DAILY: "DAILY",
  WEEKLY: "WEEKLY",
  MONTHLY: "MONTHLY",
};

export const ANALYSIS_TIME_QUERY = {
  [ANALYSIS_TIME_KEYS.HOURLY]: {
    aggregateFunc: "toHour",
    aggregatedName: "pickup_hour",
  },
  [ANALYSIS_TIME_KEYS.DAILY]: {
    aggregateFunc: "toDayOfYear",
    aggregatedName: "pickup_day",
  },
  [ANALYSIS_TIME_KEYS.WEEKLY]: {
    aggregateFunc: "toWeek",
    aggregatedName: "pickup_week",
  },
  [ANALYSIS_TIME_KEYS.MONTHLY]: {
    aggregateFunc: "toMonth",
    aggregatedName: "pickup_month",
  },
};