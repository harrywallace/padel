import { Heart, MessageCircle, CheckCircle2, Plus, Send, X, Video, Image as ImageIcon, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MOCK_POSTS as INITIAL_POSTS } from '../constants';

export function Feed() {
  const [posts, setPosts] = useState(INITIAL_POSTS.map(p => ({
    ...p,
    isLiked: false,
    showComments: false,
    commentList: [
      { id: 'c1', user: 'Juan Lebrón', text: 'Great match guys!', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop' },
      { id: 'c2', user: 'Arturo Coello', text: 'That bandeja in the 2nd set was insane.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop' },
    ]
  })));
  const [newComment, setNewComment] = useState('');
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [postType, setPostType] = useState<'photo' | 'video'>('photo');
  const [caption, setCaption] = useState('');

  const toggleLike = (id: string) => {
    setPosts(prev => prev.map(p => 
      p.id === id ? { ...p, isLiked: !p.isLiked, likes: p.isLiked ? p.likes - 1 : p.likes + 1 } : p
    ));
  };

  const toggleComments = (id: string) => {
    setPosts(prev => prev.map(p => 
      p.id === id ? { ...p, showComments: !p.showComments } : p
    ));
  };

  const addComment = (id: string) => {
    if (!newComment.trim()) return;
    setPosts(prev => prev.map(p => {
      if (p.id === id) {
        return {
          ...p,
          commentList: [
            ...p.commentList,
            {
              id: Date.now().toString(),
              user: 'Alejandro Galán',
              text: newComment,
              avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm4Q4XBmYWBid7Ab4J1UooTpst6KkgXCovh4X1ug3zhi8fnE9c3rBiAMZPk2YPome-855t3LPKtBkAg7XEdwuNTJGNahcFpDGvE6Fbswh1C5_AIZfSnaxkKY0_IFgvM0OgGpWJYusHE8WEcYjEpmERQyoBO-Pv4jLE8jZkQ_LGWt7BZOeXORbnZk_SIICjsCmd1gFMe_E3NbYgV9bAzQ83Y5UE_xwEHOsSDogGJ3L_0A-GmprLwDXLXeSsNQB_VR9IrghThGtcke2j',
            }
          ],
          comments: p.comments + 1
        };
      }
      return p;
    }));
    setNewComment('');
  };

  const handleCreatePost = () => {
    const newPost = {
      id: Date.now().toString(),
      type: postType,
      author: {
        name: 'James Sterling',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDezJcctCVTFmy3zO9jOif1WzfwNPcv1ePiLOBcLVQ6Dj5oE1hOAsRRf5244e4UQQXr5PNHPC4PQLr3EeC-Scpw_MSMnMiBo_E6fOUXdcLOimApUTWbZlCQOgesCPTYWyZuFqWYIBdX_qMVu-3y-XF34FaO2ps162RplMvA_M28Y4ShNXwHCrPCvW6IuwGBZxAccC48nFMsn2kPMoPZsz3j5OLTaBVL9cVeQm90K4pfEaDoV9I-Mx9FEf_ONMAOTFiVD3wyr6R_dE_o',
      },
      time: 'Just now',
      likes: 0,
      comments: 0,
      content: postType === 'video' 
        ? 'https://videos.pexels.com/video-files/5644667/5644667-sd_360_640_25fps.mp4'
        : 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop',
      poster: postType === 'video' 
        ? 'https://images.pexels.com/photos/5644667/pexels-photo-5644667.jpeg?auto=compress&cs=tinysrgb&w=800'
        : undefined,
      caption: caption,
      isLiked: false,
      showComments: false,
      commentList: []
    };
    setPosts([newPost, ...posts]);
    setShowCreatePost(false);
    setCaption('');
  };

  return (
    <main className="max-w-2xl mx-auto pb-32 pt-8 px-4 md:px-0">
      <div className="flex flex-col gap-12">
        {posts.map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          >
            {/* Post Header */}
            {post.type !== 'video' && (
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-headline font-bold text-sm">{post.author.name}</h3>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">{post.time}</p>
                  </div>
                </div>
                {post.type === 'match' && post.matchData?.isConfirmed && (
                  <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 fill-on-secondary-container/20" />
                    <span className="font-headline text-[10px] font-bold uppercase tracking-tight">Confirmed</span>
                  </div>
                )}
              </div>
            )}

            {/* Post Content */}
            <div className={`relative w-full bg-black ${post.type === 'video' ? 'aspect-[9/16]' : 'aspect-[4/3]'}`}>
              {post.type === 'video' ? (
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  playsInline
                  muted
                  loop
                  poster={post.poster}
                  preload="auto"
                >
                  <source src={post.content} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  alt="Post content"
                  className="w-full h-full object-cover"
                  src={post.content}
                  referrerPolicy="no-referrer"
                />
              )}
              
              {post.type === 'video' && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
              )}

              {post.type === 'video' && (
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full">
                  <Video className="w-4 h-4 text-white" />
                </div>
              )}

              {post.type === 'video' && (
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full border-2 border-white/50"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-headline font-bold text-sm shadow-sm">{post.author.name}</span>
                  </div>
                  {post.caption && (
                    <p className="text-sm font-medium line-clamp-2 shadow-sm">{post.caption}</p>
                  )}
                </div>
              )}
            </div>
            
            <div className={`p-8 space-y-6 ${post.type === 'video' ? 'bg-surface-container-lowest' : ''}`}>
              {/* Match Specific Data */}
              {post.type === 'match' && post.matchData && (
                <div className="flex justify-between items-center gap-4 mb-4">
                  <div className="flex-1 text-center">
                    <p className="font-headline text-lg font-bold leading-tight">{post.matchData.team1[0]}</p>
                    <p className="font-headline text-lg font-bold leading-tight text-on-surface-variant">{post.matchData.team1[1]}</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <span className="font-headline text-4xl font-extrabold text-primary tracking-tighter leading-none mb-1">
                      {post.matchData.score}
                    </span>
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-bold text-on-surface-variant font-headline tracking-wide uppercase">
                        {post.matchData.venue}
                      </span>
                      <span className="text-[9px] text-outline font-medium">{post.matchData.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center">
                    <p className="font-headline text-lg font-bold leading-tight">{post.matchData.team2[0]}</p>
                    <p className="font-headline text-lg font-bold leading-tight text-on-surface-variant">{post.matchData.team2[1]}</p>
                  </div>
                </div>
              )}

              {/* Caption */}
              {post.caption && post.type !== 'video' && (
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  <span className="font-bold text-on-surface mr-2">{post.author.name}</span>
                  {post.caption}
                </p>
              )}
              
              <div className="flex items-center justify-between pt-4 border-t border-surface-variant/30">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-1.5 transition-colors ${post.isLiked ? 'text-error' : 'text-on-surface-variant hover:text-primary'}`}
                  >
                    <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
                    <span className="text-xs font-bold font-headline">{post.likes}</span>
                  </button>
                  <button 
                    onClick={() => toggleComments(post.id)}
                    className={`flex items-center gap-1.5 transition-colors ${post.showComments ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-xs font-bold font-headline">{post.comments}</span>
                  </button>
                </div>
              </div>

              {/* Comments Section */}
              <AnimatePresence>
                {post.showComments && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-surface-variant/30 space-y-6">
                      {post.commentList.map((comment) => (
                        <div key={comment.id} className="flex gap-4">
                          <img 
                            src={comment.avatar} 
                            alt={comment.user}
                            className="w-8 h-8 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 bg-surface-container-low p-4 rounded-2xl">
                            <p className="text-[10px] font-bold mb-1 uppercase tracking-wider text-on-surface-variant">{comment.user}</p>
                            <p className="text-sm text-on-surface">{comment.text}</p>
                          </div>
                        </div>
                      ))}
                      <div className="flex gap-3 pt-2">
                        <input 
                          type="text" 
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          placeholder="Add a comment..."
                          className="flex-1 bg-surface-container-low rounded-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          onKeyDown={(e) => e.key === 'Enter' && addComment(post.id)}
                        />
                        <button 
                          onClick={() => addComment(post.id)}
                          className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/10 active:scale-90 transition-transform"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.article>
        ))}
      </div>
      
      {/* Create Post FAB */}
      <button 
        onClick={() => setShowCreatePost(true)}
        className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center transition-transform active:scale-90 z-40 hover:shadow-xl hover:brightness-110"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Create Post Modal */}
      <AnimatePresence>
        {showCreatePost && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCreatePost(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="relative w-full max-w-lg bg-surface-container-lowest rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-outline-variant/10 flex items-center justify-between">
                <h2 className="font-headline font-bold text-xl">Create Post</h2>
                <button onClick={() => setShowCreatePost(false)} className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Post Type Selector */}
                <div className="flex gap-4">
                  <button 
                    onClick={() => setPostType('photo')}
                    className={`flex-1 p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${postType === 'photo' ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant/10 text-on-surface-variant'}`}
                  >
                    <ImageIcon className="w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-wider">Photo</span>
                  </button>
                  <button 
                    onClick={() => setPostType('video')}
                    className={`flex-1 p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${postType === 'video' ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant/10 text-on-surface-variant'}`}
                  >
                    <Video className="w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-wider">Video</span>
                  </button>
                </div>

                {/* Caption Input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Caption</label>
                  <textarea 
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full bg-surface-container-low rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all min-h-[120px] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  onClick={handleCreatePost}
                  className="w-full bg-primary text-white py-4 rounded-2xl font-headline font-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  Post to Feed
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
