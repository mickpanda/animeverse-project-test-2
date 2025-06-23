import React from 'react';
import { Star, Calendar, Play, Download, ArrowLeft, Tv, Building } from 'lucide-react';
import { Anime } from '../data/animeDatabase';

interface AnimeDetailProps {
  anime: Anime;
  onBack: () => void;
}

const AnimeDetail: React.FC<AnimeDetailProps> = ({ anime, onBack }) => {
  const handleDownload = () => {
    // Open animepahe.ru with the specific anime
    const animepaheUrl = `https://animepahe.ru/anime/${anime.animepaheSlug}`;
    window.open(animepaheUrl, '_blank');
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/10">
      <button
        onClick={onBack}
        className="mb-6 flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Browse</span>
      </button>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={anime.image}
            alt={anime.title}
            className="w-full h-96 object-cover rounded-xl shadow-2xl"
          />
        </div>
        
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">{anime.title}</h2>
          
          <div className="flex items-center space-x-6 text-gray-300">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold">{anime.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-5 h-5" />
              <span>{anime.year}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Tv className="w-5 h-5" />
              <span>{anime.episodes} episodes</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-gray-300">
            <Building className="w-5 h-5" />
            <span className="font-medium">{anime.studio}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              anime.status === 'Completed' 
                ? 'bg-green-600/30 text-green-200 border border-green-500/30'
                : anime.status === 'Ongoing'
                ? 'bg-blue-600/30 text-blue-200 border border-blue-500/30'
                : 'bg-orange-600/30 text-orange-200 border border-orange-500/30'
            }`}>
              {anime.status}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {anime.genre.split(', ').map((genre, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm border border-purple-500/30"
              >
                {genre}
              </span>
            ))}
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed">{anime.description}</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              <Play className="w-5 h-5" />
              <span>Watch Now</span>
            </button>
            
            <button
              onClick={handleDownload}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>Download from AnimePahe</span>
            </button>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <p className="text-gray-400 text-sm">
              <strong>Download Info:</strong> Click the download button to visit AnimePahe.ru where you can find high-quality downloads for this anime. AnimePahe offers various quality options and fast download speeds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;