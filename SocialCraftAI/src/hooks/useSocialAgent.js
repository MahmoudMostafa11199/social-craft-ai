import { useEffect, useRef, useState } from 'react';
import { API_URL } from '../utils/constants';

export function useSocialAgent() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (error) setError('');
  }, [error, topic]);

  async function handleSubmit(e) {
    e?.preventDefault();
    if (!topic.trim()) {
      setError('Please enter a topic first.');
      inputRef.current?.focus();
      return;
    }
    setLoading(true);
    setResult(null);
    setError('');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic.trim() }),
      });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const data = await res.json();
      setResult({
        linkedin: data.linkedin || '',
        instagram: data.instagram || '',
      });
    } catch {
      setError('Failed to generate content. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return { topic, setTopic, loading, error, result, inputRef, handleSubmit };
}
