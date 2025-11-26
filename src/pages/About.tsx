import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { quote, bio, timeline, killedByGokhul } from "../data/about";
import { tapAnimation, appleEase } from "../config/animations";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

const SUBSTACK_URL = "https://greathack.substack.com";
const RSS_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  SUBSTACK_URL + "/feed"
)}`;

const About = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(RSS_API);
        const data = await response.json();
        if (data.status === "ok" && data.items) {
          setPosts(data.items.slice(0, 3));
        }
      } catch (error) {
        console.error("Failed to fetch Substack posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="flex-1 flex flex-col gap-12 py-8">
      {/* Top Section: Photo + Quote/Bio */}
      <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: appleEase }}
          className="w-48 h-48 md:w-56 md:h-56 border-2 border-current overflow-hidden mx-auto md:mx-0"
        >
          <img
            src={bio.photo}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Quote + Bio */}
        <div className="flex flex-col gap-6">
          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: appleEase }}
            className="border-l-2 border-current pl-6 py-2"
          >
            <p className="text-lg italic m-0">"{quote.text}"</p>
            {quote.author && (
              <footer className="text-sm opacity-60 mt-2">— {quote.author}</footer>
            )}
          </motion.blockquote>

          {/* Bio Paragraphs */}
          <div className="flex flex-col gap-4">
            {bio.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: appleEase,
                }}
                className={`text-base leading-relaxed m-0 ${
                  paragraph.startsWith('"') ? "italic opacity-90" : ""
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Timeline + Social/Blog */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Timeline */}
        <div>
          <h2 className="text-lg font-bold mb-6 uppercase tracking-wide">
            Journey
          </h2>
          <div className="relative pl-6 border-l-2 border-current">
            {timeline.map((entry, index) => (
              <motion.div
                key={entry.startYear + entry.company}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: appleEase,
                }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[calc(1.5rem+5px)] top-1 w-2 h-2 bg-current rounded-full" />

                <div className="flex flex-col gap-1">
                  <span className="text-sm opacity-60">
                    {entry.startYear} — {entry.endYear || "Present"}
                  </span>
                  <h3 className="text-base font-semibold m-0">{entry.role}</h3>
                  <span className="text-sm opacity-80">{entry.company}</span>
                  <p className="text-sm opacity-70 m-0 mt-1">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Blog + Graveyard */}
        <div className="flex flex-col gap-8">
          {/* Substack Blog Posts */}
          <div>
            <h2 className="text-lg font-bold mb-6 uppercase tracking-wide">
              Latest Writings
            </h2>
            {loading ? (
              <p className="text-sm opacity-60">Loading posts...</p>
            ) : posts.length > 0 ? (
              <div className="flex flex-col gap-4">
                {posts.map((post, index) => (
                  <motion.a
                    key={post.link}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: appleEase,
                    }}
                    whileHover={{ x: 5 }}
                    className="no-underline group"
                  >
                    <span className="text-sm opacity-60 block">
                      {formatDate(post.pubDate)}
                    </span>
                    <span className="text-base group-hover:opacity-70 transition-opacity">
                      {post.title}
                    </span>
                  </motion.a>
                ))}
                <motion.a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4, ease: appleEase }}
                  whileHover={{ x: 5 }}
                  whileTap={tapAnimation}
                  className="text-sm no-underline opacity-70 hover:opacity-100 mt-2"
                >
                  read more →
                </motion.a>
              </div>
            ) : (
              <p className="text-sm opacity-60">No posts yet</p>
            )}
          </div>

          {/* Killed by Gokhul - Graveyard */}
          <div>
            <h2 className="text-lg font-bold mb-6 uppercase tracking-wide">
              Killed by Gokhul
            </h2>
            <p className="text-sm opacity-60 mb-4">
              Things I started but never finished. RIP.
            </p>
            <div className="flex flex-col gap-4">
              {killedByGokhul.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: appleEase,
                  }}
                  className="group"
                >
                  {item.link ? (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="no-underline block"
                    >
                      <span className="text-base group-hover:opacity-70 transition-opacity">
                        {item.name}
                      </span>
                      <span className="text-sm opacity-50 ml-2">
                        ({item.causeOfDeath})
                      </span>
                    </motion.a>
                  ) : (
                    <div>
                      <span className="text-base">{item.name}</span>
                      <span className="text-sm opacity-50 ml-2">
                        ({item.causeOfDeath})
                      </span>
                    </div>
                  )}
                  <p className="text-sm opacity-60 m-0 mt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
