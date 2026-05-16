import Footer from './components/Footer';
import Header from './components/Header';
import TopicForm from './components/TopicForm';
import ResultsSection from './components/ResultsSection';

import { useSocialAgent } from './hooks/useSocialAgent';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { topic, setTopic, loading, error, result, inputRef, handleSubmit } =
    useSocialAgent();

  return (
    <div className="app">
      {/* Background orbs */}
      <div className="bg-orb bg-orb--1" aria-hidden="true" />
      <div className="bg-orb bg-orb--2" aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <Header theme={theme} onToggle={toggleTheme} />

        {/* Input */}
        <TopicForm
          topic={topic}
          setTopic={setTopic}
          loading={loading}
          error={error}
          inputRef={inputRef}
          onSubmit={handleSubmit}
        />

        {/* Results */}
        <ResultsSection loading={loading} result={result} />

        <Footer />
      </div>
    </div>
  );
}
