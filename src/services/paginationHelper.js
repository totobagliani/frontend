const products = Array.from(new Array(50))
  .fill(0)
  .map((_, index) => index + 1);

const ELEMENTS_PER_PAGE = 6;

// let initialPageIndex = 0
// let finalPageIndex= 0

const currentPage = 1; // const [currentPage, setCurrentPage] = useState(1) => usePagination()

function paginate(array, page_size, page_number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  console.log((page_number - 1) * page_size);

  const initialPageIndex = (page_number - 1) * page_size;
  const finalPageIndex = page_number * page_size;

  return array.slice(initialPageIndex, finalPageIndex);
}

// ProductsList
// useEffect(() => { const partialProductsByCurrentPage = paginate(products, ELEMENTS_PER_PAGE, currentPage) }, [currentPage])
paginate(products, ELEMENTS_PER_PAGE, currentPage);
