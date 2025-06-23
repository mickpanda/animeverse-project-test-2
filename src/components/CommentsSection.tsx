import React, { useState } from 'react';
import { MessageCircle, Send, Heart, Reply } from 'lucide-react';

interface Comment {
  id: number;
  username: string;
  text: string;
  timestamp: string;
  likes: number;
  replies: Comment[];
}

interface CommentsSectionProps {
  user: { username: string; email: string } | null;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ user }) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      username: 'AnimeOtaku',
      text: 'This website has an amazing collection! Love the download links to AnimePahe.',
      timestamp: '2 hours ago',
      likes: 12,
      replies: [
        {
          id: 2,
          username: 'MangaReader',
          text: 'Totally agree! The interface is so clean and easy to navigate.',
          timestamp: '1 hour ago',
          likes: 5,
          replies: []
        }
      ]
    },
    {
      id: 3,
      username: 'WeebMaster',
      text: 'Finally found Attack on Titan in good quality. Thanks for the AnimePahe integration!',
      timestamp: '4 hours ago',
      likes: 8,
      replies: []
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      username: user.username,
      text: newComment,
      timestamp: 'Just now',
      likes: 0,
      replies: []
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleSubmitReply = (e: React.FormEvent, parentId: number) => {
    e.preventDefault();
    if (!user || !replyText.trim()) return;

    const reply: Comment = {
      id: Date.now(),
      username: user.username,
      text: replyText,
      timestamp: 'Just now',
      likes: 0,
      replies: []
    };

    setComments(comments.map(comment => 
      comment.id === parentId 
        ? { ...comment, replies: [...comment.replies, reply] }
        : comment
    ));

    setReplyText('');
    setReplyTo(null);
  };

  const handleLike = (commentId: number, isReply: boolean = false, parentId?: number) => {
    if (isReply && parentId) {
      setComments(comments.map(comment => 
        comment.id === parentId 
          ? {
              ...comment,
              replies: comment.replies.map(reply =>
                reply.id === commentId ? { ...reply, likes: reply.likes + 1 } : reply
              )
            }
          : comment
      ));
    } else {
      setComments(comments.map(comment => 
        comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
      ));
    }
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <div className="flex items-center space-x-2 mb-6">
        <MessageCircle className="w-6 h-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">Community Comments</h3>
      </div>

      {/* Comment Form */}
      {user ? (
        <form onSubmit={handleSubmitComment} className="mb-6">
          <div className="flex space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">
                {user.username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts about anime..."
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                rows={3}
              />
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Post Comment</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
          <p className="text-gray-400 text-center">Please login to post comments</p>
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-semibold">
                  {comment.username.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-white font-semibold">{comment.username}</span>
                  <span className="text-gray-400 text-sm">{comment.timestamp}</span>
                </div>
                <p className="text-gray-300 mb-2">{comment.text}</p>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleLike(comment.id)}
                    className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                    <span>{comment.likes}</span>
                  </button>
                  {user && (
                    <button
                      onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                      className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Reply className="w-4 h-4" />
                      <span>Reply</span>
                    </button>
                  )}
                </div>

                {/* Reply Form */}
                {replyTo === comment.id && user && (
                  <form onSubmit={(e) => handleSubmitReply(e, comment.id)} className="mt-3">
                    <div className="flex space-x-2">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write a reply..."
                        className="flex-1 p-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
                        rows={2}
                      />
                      <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded transition-colors"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="mt-3 space-y-2 pl-4 border-l-2 border-purple-600/30">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-white/5 rounded p-3">
                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-semibold">
                              {reply.username.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-white text-sm font-semibold">{reply.username}</span>
                              <span className="text-gray-400 text-xs">{reply.timestamp}</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-1">{reply.text}</p>
                            <button
                              onClick={() => handleLike(reply.id, true, comment.id)}
                              className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors"
                            >
                              <Heart className="w-3 h-3" />
                              <span className="text-xs">{reply.likes}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;