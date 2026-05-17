import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { createClient } from '../utils/supabase/client';

const SupabaseTodos = () => {
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase.from('todos').select();

        if (error) {
          throw error;
        }

        setTodos(data ?? []);
      } catch (error) {
        setErrorMessage(error.message || 'Failed to load todos.');
      } finally {
        setIsLoading(false);
      }
    };

    loadTodos();
  }, []);

  return (
    <>
      <SEO
        title="Supabase Todo Preview | Project Dignity Hobbs"
        description="Preview data loaded from Supabase."
        path="/todos-preview"
      />
      <section className="min-h-[60vh] bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
            <h1 className="mb-4 text-3xl font-black text-primary">Supabase Todo Preview</h1>
            <p className="mb-6 text-gray-600">
              This is the Vite equivalent of the Next.js example you pasted. It loads rows from the
              <strong> todos </strong>
              table in the browser.
            </p>

            {isLoading ? <p className="text-gray-600">Loading todos...</p> : null}
            {errorMessage ? <p className="text-red-700">{errorMessage}</p> : null}

            {!isLoading && !errorMessage ? (
              <ul className="space-y-3">
                {todos.map((todo) => (
                  <li key={todo.id} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-charcoal">
                    {todo.name}
                  </li>
                ))}
                {todos.length === 0 ? (
                  <li className="rounded-xl border border-dashed border-gray-300 px-4 py-3 text-gray-500">
                    No todos found.
                  </li>
                ) : null}
              </ul>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default SupabaseTodos;
