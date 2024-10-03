import qs from "query-string"
import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { useDebounce } from "@/hooks/use-debounce";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate(); 
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('categoryId');

  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500); // 500ms delay

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    if (debouncedValue) {
      performSearch();
    }
  }, [debouncedValue]);

  const performSearch = () => {
    const query = {
      name: debouncedValue,
      categoryId: categoryId
    };

    const url = qs.stringifyUrl({
      url: window.location.pathname,
      query
    }, { skipEmptyString: true, skipNull: true });
    
    navigate(url);
  }

  return (
    <div className="mt-2 relative" >
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground"/>
      <Input
        value={value}
        onChange={onChange}
        placeholder="Search..."
        className="pl-10 bg-primary/10"
      />
    </div>
  )
}

export default SearchInput