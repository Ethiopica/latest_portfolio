import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file');
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

// Helper functions for common operations

/**
 * Fetch all records from a table
 * @param {string} table - Table name
 * @param {object} options - Query options (select, order, limit)
 */
export async function fetchAll(table, options = {}) {
  let query = supabase.from(table).select(options.select || '*');
  
  if (options.order) {
    query = query.order(options.order.column, { ascending: options.order.ascending ?? false });
  }
  
  if (options.limit) {
    query = query.limit(options.limit);
  }
  
  const { data, error } = await query;
  
  if (error) {
    console.error(`Error fetching from ${table}:`, error);
    throw error;
  }
  
  return data;
}

/**
 * Fetch a single record by ID
 * @param {string} table - Table name
 * @param {string} id - Record ID
 */
export async function fetchById(table, id) {
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error(`Error fetching ${table} by ID:`, error);
    throw error;
  }
  
  return data;
}

/**
 * Insert a new record
 * @param {string} table - Table name
 * @param {object} record - Data to insert
 */
export async function insert(table, record) {
  const { data, error } = await supabase
    .from(table)
    .insert(record)
    .select()
    .single();
  
  if (error) {
    console.error(`Error inserting into ${table}:`, error);
    throw error;
  }
  
  return data;
}

/**
 * Update a record
 * @param {string} table - Table name
 * @param {string} id - Record ID
 * @param {object} updates - Fields to update
 */
export async function update(table, id, updates) {
  const { data, error } = await supabase
    .from(table)
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error(`Error updating ${table}:`, error);
    throw error;
  }
  
  return data;
}

/**
 * Delete a record
 * @param {string} table - Table name
 * @param {string} id - Record ID
 */
export async function remove(table, id) {
  const { error } = await supabase
    .from(table)
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error(`Error deleting from ${table}:`, error);
    throw error;
  }
  
  return true;
}



