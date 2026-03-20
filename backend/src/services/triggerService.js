import { triggerCatalog } from "../data/mockData.js";

export const getAllTriggers = () => {
  return triggerCatalog;
};

export const getTriggerByType = (type) => {
  return triggerCatalog.find(
    (item) => item.type.toLowerCase() === type.toLowerCase()
  );
};