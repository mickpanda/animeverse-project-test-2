import React from 'react';
import { Star, Calendar, Tv } from 'lucide-react';
import { Anime } from '../data/animeDatabase';

interface AnimeCardProps {
  anime: Anime;
  onClick: () => void;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl group"
    >
      <div className="relative overflow-hidden">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            anime.status === 'Completed' 
              ? 'bg-green-600/80 text-green-100'
              : anime.status === 'Ongoing'
              ? 'bg-blue-600/80 text-blue-100'
              : 'bg-orange-600/80 text-orange-100'
          }`}>
            {anime.status}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
          <button className="w-full bg-white/20 backdrop-blur-sm text-white py-2 rounded-lg font-semibold">
            View Details
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1">{anime.title}</h3>
        
        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
          <span>{anime.year}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{anime.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
          <div className="flex items-center space-x-1">
            <Tv className="w-4 h-4" />
            <span>{anime.episodes} eps</span>
          </div>
          <span className="text-xs text-purple-300">{anime.studio}</span>
        </div>
        
        <p className="text-gray-500 text-sm line-clamp-2 mb-3">{anime.description}</p>
        
        <div className="flex flex-wrap gap-1">
          {anime.genre.split(', ').slice(0, 2).map((genre, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs"
            >
              {genre}
            </span>
          ))}
          {anime.genre.split(', ').length > 2 && (
            <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded text-xs">
              +{anime.genre.split(', ').length - 2}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;