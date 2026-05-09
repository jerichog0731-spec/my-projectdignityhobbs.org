import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Blog = () => {
  const { t } = useTranslation();

  const posts = [1, 2, 3, 4, 5].map(id => ({
    id,
    title: t(`blog.post${id}.title`),
    summary: t(`blog.post${id}.summary`),
    date: t(`blog.post${id}.date`),
    author: t(`blog.post${id}.author`)
  }));

  return (
    <>
      <SEO title={t('seo.blog.title')} description={t('seo.blog.desc')} path="/blog" />
      
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t('blog.intro')}
          </p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          {/* Main Content: Post List */}
          <div className="lg:w-2/3 space-y-12">
            {posts.map(post => (
              <article key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col md:flex-row hover:shadow-xl transition-shadow focus-within:ring-4 focus-within:ring-accent">
                {/* Image Placeholder */}
                <div className="md:w-1/3 bg-gray-200 shrink-0 h-48 md:h-auto relative">
                  <div className="absolute inset-0 bg-primary/10"></div>
                  {/* Assuming image placeholders */}
                  <img 
                    src={`https://images.unsplash.com/photo-${post.id === 1 ? '1593113563332-6a848ff78096' : post.id === 2 ? '1582213782179-e0d53f98f2ca' : post.id === 3 ? '1560518884-ce588fd447e4' : post.id === 4 ? '1511632765486-a963cd019169' : '1551847812-f17cb6e147da'}?auto=format&fit=crop&w=600&q=80`} 
                    alt={post.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
                      {post.date}
                    </div>
                    <h2 className="text-2xl font-bold text-charcoal mb-4 line-clamp-2 hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`} className="focus:outline-none">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-gray-500 font-medium">
                      {t('blog.author')} {post.author}
                    </span>
                    <Link to={`/blog/${post.id}`} className="text-primary font-bold hover:text-blue-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1">
                      {t('blog.read_more')} &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-charcoal mb-4">{t('blog.categories')}</h3>
              <ul className="space-y-3">
                {['Community Impact', 'Advocacy', 'Events', 'Program Updates', 'Success Stories'].map(cat => (
                  <li key={cat}>
                    <a href="#" className="text-gray-600 hover:text-primary font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">{cat}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-charcoal mb-4">{t('blog.tags')}</h3>
              <div className="flex flex-wrap gap-2">
                {['Housing', 'Food Security', 'Youth', 'Mental Health', 'Volunteering', 'Jobs'].map(tag => (
                  <a key={tag} href="#" className="bg-gray-100 text-gray-600 hover:bg-accent hover:text-charcoal px-3 py-1 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </section>
    </>
  );
};

export default Blog;
