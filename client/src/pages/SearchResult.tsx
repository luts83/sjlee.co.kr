import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { projects } from '../data/projects';

interface LogItem {
  src: string;
  date: string | null;
  country: string;
  city: string;
  camera?: string;
}

interface Result {
  type: 'project' | 'log';
  title: string;
  description?: string;
  image: string;
  date?: string;
  link?: string;
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResult: React.FC = () => {
  const query = useQuery().get('query')?.toLowerCase() || '';
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const matchedResults: Result[] = [];

    // ✅ 프로젝트 검색
    for (const p of projects) {
      const haystack = `${p.title} ${p.description ?? ''} ${p.descriptionText ?? ''}`.toLowerCase();
      if (haystack.includes(query)) {
        matchedResults.push({
          type: 'project',
          title: p.title,
          description: p.description,
          image: p.image,
          date: p.date,
          link: `/portfolio/${p.id}`,
        });
      }
    }

    // ✅ 로그 검색
    fetch('/assets/logsData.json')
      .then((res) => res.json())
      .then((logs: LogItem[]) => {
        const filtered = logs.filter((log) => {
          const searchText = `${log.country} ${log.city} ${log.camera ?? ''}`.toLowerCase();
          return searchText.includes(query);
        });

        matchedResults.push(
          ...filtered.map((log) => {
            const slug = log.country.toLowerCase().replace(/ /g, '-');
            return {
              type: 'log' as const,
              title: `${log.city}, ${log.country}`,
              image: `/assets/logs/images/${log.src}`,
              date: log.date?.split('T')[0],
              link: `/logs/${slug}`, // 로그는 나라 단위로 연결
            };
          })
        );

        setResults(matchedResults);
      });
  }, [query]);

  return (
    <div className="pt-20 px-6 min-h-screen bg-white text-gray-700">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">
          Search Results for: <span className="text-black">"{query}"</span>
        </h1>

        {results.length === 0 ? (
          <p className="text-gray-500">No matching content found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {results.map((item, idx) => (
              item.link ? (
                <Link
                  key={idx}
                  to={item.link}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition block group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:opacity-90 transition"
                  />
                  <div className="p-4">
                    <p className="text-xs uppercase text-gray-400 mb-1">{item.type}</p>
                    <h2 className="text-lg font-bold mb-1">{item.title}</h2>
                    {item.date && <p className="text-sm text-gray-500">{item.date}</p>}
                    {item.description && (
                      <p className="text-sm text-gray-600 mt-2 leading-snug line-clamp-3">
                        {item.description}
                      </p>
                    )}
                  </div>
                </Link>
              ) : (
                <div key={idx} className="border rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-1">{item.title}</h2>
                    {item.date && <p className="text-sm text-gray-500">{item.date}</p>}
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
