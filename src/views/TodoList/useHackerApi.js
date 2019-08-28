import { useState, useEffect } from 'react'
import { getTodos } from '../../services';

const useHackerApi = () => {
  const [tips] = useState('事项列表1');
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await getTodos().then(res => res.data)
        setList(data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, [])
  return {tips, list, setList, isLoading, isError}
}

export default useHackerApi;