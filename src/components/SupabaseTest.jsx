import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const SupabaseTest = () => {
  const [status, setStatus] = useState('checking');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    runTests();
  }, []);

  const runTests = async () => {
    const testResults = [];
    
    // Test 1: Check credentials
    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

    testResults.push({
      name: 'Supabase URL',
      status: url && url !== 'https://your-project-id.supabase.co' ? 'pass' : 'fail',
      message: url ? (url.includes('your-project-id') ? 'Using placeholder URL' : 'Configured') : 'Missing in .env'
    });

    testResults.push({
      name: 'Supabase Anon Key',
      status: key && key !== 'your-anon-key-here' ? 'pass' : 'fail',
      message: key ? (key === 'your-anon-key-here' ? 'Using placeholder key' : 'Configured') : 'Missing in .env'
    });

    if (!url || !key || url.includes('your-project-id') || key === 'your-anon-key-here') {
      setStatus('error');
      setError('Please configure your Supabase credentials in the .env file');
      setResults(testResults);
      return;
    }

    // Test 2: Connection test
    try {
      const startTime = Date.now();
      const { error: connError } = await supabase.from('_test_connection').select('*').limit(1);
      const responseTime = Date.now() - startTime;
      
      // Even a 404 error means connection works
      testResults.push({
        name: 'Connection',
        status: 'pass',
        message: `Connected (${responseTime}ms)`
      });
    } catch (err) {
      testResults.push({
        name: 'Connection',
        status: 'fail',
        message: err.message
      });
      setStatus('error');
      setError('Failed to connect to Supabase');
      setResults(testResults);
      return;
    }

    // Test 3: Check tables
    const tables = ['contacts', 'projects', 'skills', 'experience', 'blog_posts', 'testimonials'];
    
    for (const table of tables) {
      try {
        const { data, error: tableError } = await supabase.from(table).select('*').limit(1);
        
        if (tableError) {
          if (tableError.code === '42P01') {
            testResults.push({
              name: `Table: ${table}`,
              status: 'warn',
              message: 'Table does not exist'
            });
          } else {
            testResults.push({
              name: `Table: ${table}`,
              status: 'fail',
              message: tableError.message
            });
          }
        } else {
          testResults.push({
            name: `Table: ${table}`,
            status: 'pass',
            message: `Exists (${data?.length || 0} rows)`
          });
        }
      } catch (err) {
        testResults.push({
          name: `Table: ${table}`,
          status: 'fail',
          message: err.message
        });
      }
    }

    const hasFailures = testResults.some(r => r.status === 'fail');
    const hasWarnings = testResults.some(r => r.status === 'warn');
    
    setStatus(hasFailures ? 'error' : hasWarnings ? 'warning' : 'success');
    setResults(testResults);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pass': return '✅';
      case 'fail': return '❌';
      case 'warn': return '⚠️';
      default: return '⏳';
    }
  };

  const getOverallStatusIcon = () => {
    switch (status) {
      case 'success': return '🎉';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      default: return '🔄';
    }
  };

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '600px',
      margin: '2rem auto',
      background: 'var(--bg-card, #1a1a2e)',
      borderRadius: '12px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h2 style={{ 
        marginBottom: '1.5rem', 
        color: 'var(--text-primary, #fff)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        {getOverallStatusIcon()} Supabase Connection Test
      </h2>

      {status === 'checking' && (
        <p style={{ color: 'var(--text-secondary, #888)' }}>
          Running tests...
        </p>
      )}

      {error && (
        <div style={{
          padding: '1rem',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '8px',
          marginBottom: '1rem',
          color: '#ef4444'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {results.map((result, index) => (
          <div 
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.75rem 1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              borderLeft: `3px solid ${
                result.status === 'pass' ? '#10b981' :
                result.status === 'fail' ? '#ef4444' : '#f59e0b'
              }`
            }}
          >
            <span style={{ 
              color: 'var(--text-primary, #fff)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              {getStatusIcon(result.status)} {result.name}
            </span>
            <span style={{ 
              color: 'var(--text-secondary, #888)',
              fontSize: '0.875rem'
            }}>
              {result.message}
            </span>
          </div>
        ))}
      </div>

      {status === 'success' && (
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '8px',
          color: '#10b981'
        }}>
          <strong>All tests passed!</strong> Your Supabase is connected and ready.
        </div>
      )}

      {status === 'warning' && (
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          background: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '8px',
          color: '#f59e0b'
        }}>
          <strong>Connected with warnings.</strong> Some tables are missing. Run the SQL schema to create them.
        </div>
      )}

      <button
        onClick={runTests}
        style={{
          marginTop: '1.5rem',
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '600'
        }}
      >
        🔄 Run Tests Again
      </button>
    </div>
  );
};

export default SupabaseTest;


