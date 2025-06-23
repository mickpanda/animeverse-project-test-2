import React from 'react';
import { getAllGenres } from '../data/animeDatabase';

interface GenreFilterProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ selectedGenre, onGenreChange }) => {
  const genres = getAllGenres();

  return (
    <div className="mb-6">
      <h3 className="text-white text-lg font-semibold mb-3">Filter by Genre</h3>
      <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
        <button
          onClick={() => onGenreChange('')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedGenre === ''
              ? 'bg-purple-600 text-white'
              : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
          }`}
        >
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreChange(genre)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedGenre === genre
                ? 'bg-purple-600 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;