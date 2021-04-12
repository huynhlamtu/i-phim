import _ from "lodash";

export default function getPaginatedItems(items, page, pageSize) {
  const offset = (page - 1) * pageSize;
  const pagedItems = _.drop(items, offset).slice(0, pageSize);
  return pagedItems;
}
