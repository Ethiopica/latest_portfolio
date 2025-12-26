import { useState, useEffect } from 'react';
import { supabase, fetchAll, fetchById, insert } from '../lib/supabase';

/**
 * Hook to fetch data from a Supabase table
 * @param {string} table - Table name
 * @param {object} options - Query options
 */
export function useSupabaseQuery(table, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const result = await fetchAll(table, options);
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [table, JSON.stringify(options)]);

  const refetch = async () => {
    try {
      setLoading(true);
      const result = await fetchAll(table, options);
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
}

/**
 * Hook to fetch a single record by ID
 * @param {string} table - Table name
 * @param {string} id - Record ID
 */
export function useSupabaseRecord(table, id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    async function loadData() {
      try {
        setLoading(true);
        const result = await fetchById(table, id);
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [table, id]);

  return { data, loading, error };
}

/**
 * Hook for real-time subscriptions
 * @param {string} table - Table name
 * @param {function} callback - Callback for changes
 */
export function useSupabaseRealtime(table, callback) {
  useEffect(() => {
    const subscription = supabase
      .channel(`${table}_changes`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table },
        (payload) => {
          callback(payload);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [table, callback]);
}

/**
 * Hook for form submission to Supabase
 * @param {string} table - Table name
 */
export function useSupabaseInsert(table) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitData = async (data) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      const result = await insert(table, data);
      setSuccess(true);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setError(null);
    setSuccess(false);
  };

  return { submitData, loading, error, success, reset };
}



