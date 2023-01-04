export const paginate = (array, pageSize, pageNumber) => {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  console.log((pageNumber - 1) * pageSize);

  const initialPageIndex = (pageNumber - 1) * pageSize;
  const finalPageIndex = pageNumber * pageSize;

  return array.slice(initialPageIndex, finalPageIndex);
};
