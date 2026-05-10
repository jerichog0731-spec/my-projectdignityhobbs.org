import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';

const BlogPost = () => {
  const { t } = useTranslation();
  const { postId } = useParams();

  // Validate ID
  const id = ['1', '2', '3', '4', '5'].includes(postId) ? postId : '1';

  const title = t(`blog.post${id}.title`);
  const summary = t(`blog.post${id}.summary`);
  const body = t(`blog.post${id}.body`);
  const date = t(`blog.post${id}.date`);
  const author = t(`blog.post${id}.author`);

  return (
    <>
      <SEO 
        title={`${title} | Blog`} 
        description={summary} 
        path={`/blog/${id}`}
        type="article"
        article={{ datePublished: date }}
        breadcrumbs={[
          { name: 'News', path: '/blog' },
          { name: title, path: `/blog/${id}` }
        ]}
      />
      
      <div className="bg-gray-50 py-12 md:py-20 min-h-screen">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/blog" className="inline-flex items-center text-primary font-bold hover:text-blue-800 transition-colors mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            {t('blog.back')}
          </Link>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Featured Image */}
            <div className="h-64 md:h-96 w-full bg-gray-200 relative">
              <img 
                src={`https://images.unsplash.com/photo-${id === '1' ? '1593113563332-6a848ff78096' : id === '2' ? '1582213782179-e0d53f98f2ca' : id === '3' ? '1560518884-ce588fd447e4' : id === '4' ? '1511632765486-a963cd019169' : '1551847812-f17cb6e147da'}?auto=format&fit=crop&w=1200&q=80`}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Post Header */}
            <div className="p-8 md:p-12 lg:px-16 pt-12 border-b border-gray-100">
              <div className="flex items-center gap-4 text-sm font-bold text-accent uppercase tracking-wider mb-4">
                <span>{date}</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-500">{t('blog.author')} {author}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-charcoal leading-tight mb-6">
                {title}
              </h1>
              <p className="text-xl text-gray-500 font-medium italic border-l-4 border-gray-200 pl-4">
                {summary}
              </p>
            </div>

            {/* Post Body */}
            <div className="p-8 md:p-12 lg:px-16 prose prose-lg prose-blue max-w-none text-gray-700">
              <p>{body}</p>
              {/* Additional generic paragraphs to simulate length */}
              <p>
                Our community's resilience is built on the active participation of its members. 
                By working together, we can overcome systemic barriers and create a thriving environment for all residents of Hobbs. 
                This initiative is just one part of our broader strategy to empower marginalized voices and ensure equitable access to resources.
              </p>
              <p>
                We invite you to join us in this effort. Whether through volunteering your time, making a donation, or simply sharing this story, 
                your support makes a tangible difference. Let's continue to build a foundation of dignity and opportunity for every family.
              </p>
            </div>

            {/* Author Bio Box */}
            <div className="bg-gray-50 p-8 md:px-16 border-t border-gray-100 flex items-center gap-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xl">{author.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-charcoal">{author}</h3>
                <p className="text-sm text-gray-500 mt-1">Staff Writer at Project Dignity Hobbs, passionate about community advocacy and systemic change.</p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-8">{t('blog.related')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[id === '1' ? 2 : 1, id === '3' ? 4 : 3].map(relId => (
                <Link to={`/blog/${relId}`} key={relId} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow group focus:outline-none focus-visible:ring-4 focus-visible:ring-accent">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">{t(`blog.post${relId}.date`)}</span>
                  <h3 className="text-xl font-bold text-charcoal group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {t(`blog.post${relId}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{t(`blog.post${relId}.summary`)}</p>
                </Link>
              ))}
            </div>
          </div>

        </article>
      </div>
    </>
  );
};

export default BlogPost;
