/**
 * Supabase Connection Test
 * Run this with: node --experimental-modules src/lib/testSupabase.js
 * Or import and call testConnection() from your app
 */

import { supabase } from './supabase.js';

export async function testConnection() {
  console.log('🔍 Testing Supabase connection...\n');

  // Check if credentials are set
  const url = import.meta.env?.VITE_SUPABASE_URL;
  const key = import.meta.env?.VITE_SUPABASE_ANON_KEY;

  console.log('📋 Configuration:');
  console.log(`   URL: ${url ? '✅ Set' : '❌ Missing'}`);
  console.log(`   Key: ${key ? '✅ Set' : '❌ Missing'}\n`);

  if (!url || !key) {
    console.log('⚠️  Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file');
    return { success: false, error: 'Missing credentials' };
  }

  try {
    // Test 1: Check if we can reach Supabase
    console.log('🔗 Test 1: Checking connection...');
    const { data, error } = await supabase.from('projects').select('count').limit(1);
    
    if (error && error.code === '42P01') {
      console.log('   ⚠️  Connection works, but "projects" table does not exist');
      console.log('   ℹ️  Run the SQL schema to create tables\n');
    } else if (error) {
      console.log(`   ❌ Error: ${error.message}\n`);
    } else {
      console.log('   ✅ Connection successful!\n');
    }

    // Test 2: List available tables
    console.log('📊 Test 2: Checking available tables...');
    const { data: tables, error: tablesError } = await supabase
      .rpc('get_tables')
      .catch(() => ({ data: null, error: { message: 'RPC not available' } }));

    if (tablesError) {
      // Try alternative method
      const testTables = ['projects', 'contacts', 'skills', 'experience', 'blog_posts'];
      console.log('   Checking common tables:');
      
      for (const table of testTables) {
        const { error: tableError } = await supabase.from(table).select('count').limit(1);
        const exists = !tableError || tableError.code !== '42P01';
        console.log(`   ${exists ? '✅' : '❌'} ${table}`);
      }
    }

    console.log('\n✨ Supabase test complete!');
    return { success: true };

  } catch (err) {
    console.log(`❌ Connection failed: ${err.message}`);
    return { success: false, error: err.message };
  }
}

// Export for use in components
export default testConnection;


