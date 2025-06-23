import React, { useState, useMemo } from 'react';
import { Search, User, MessageCircle } from 'lucide-react';
import { animeDatabase, searchAnime, getAnimeByGenre, Anime } from './data/animeDatabase';
import AnimeCard from './components/AnimeCard';
import AnimeDetail from './components/AnimeDetail';
import GenreFilter from './components/GenreFilter';
import LoginModal from './components/LoginModal';
import CommentsSection from './components/CommentsSection';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);

  const filteredAnime = useMemo(() => {
    let result = animeDatabase;

    // Filter by search term
    if (searchTerm.trim()) {
      result = searchAnime(searchTerm);
    }

    // Filter by genre
    if (selectedGenre) {
      result = result.filter(anime => 
        anime.genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );
    }

    return result;
  }, [searchTerm, selectedGenre]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleLogin = (username: string, email: string) => {
    setUser({ username, email });
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-white">AnimeVerse</h1>
              <span className="text-purple-300 text-sm">50+ Anime Collection</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search anime..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={() => setShowComments(!showComments)}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">Comments</span>
              </button>

              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-white">Welcome, {user.username}!</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowLogin(true)}
                  className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/10 sticky top-24">
              <GenreFilter 
                selectedGenre={selectedGenre}
                onGenreChange={setSelectedGenre}
              />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {selectedAnime ? (
              <AnimeDetail 
                anime={selectedAnime} 
                onBack={() => setSelectedAnime(null)} 
              />
            ) : (
              <div>
                {/* Mobile Genre Filter */}
                <div className="lg:hidden mb-6">
                  <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <GenreFilter 
                      selectedGenre={selectedGenre}
                      onGenreChange={setSelectedGenre}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {searchTerm 
                      ? `Search Results for "${searchTerm}"` 
                      : selectedGenre 
                      ? `${selectedGenre} Anime`
                      : 'All Anime Collection'
                    }
                  </h2>
                  <p className="text-gray-400">
                    {filteredAnime.length} anime found
                  </p>
                </div>

                {filteredAnime.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-gray-400 text-xl mb-4">No anime found</div>
                    <p className="text-gray-500">Try searching with different keywords or select a different genre</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredAnime.map((anime) => (
                      <AnimeCard
                        key={anime.id}
                        anime={anime}
                        onClick={() => setSelectedAnime(anime)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-8">
            <CommentsSection user={user} />
          </div>
        )}
      </main>

      {/* Login Modal */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;