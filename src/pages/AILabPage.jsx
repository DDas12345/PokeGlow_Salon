import { Link } from 'react-router-dom'
import { useState } from 'react'

const pipeline = [
  {
    step: '01',
    title: 'Ingestion',
    text: 'Collect salon policies, service notes, product ingredients, and client style history into a unified knowledge source.',
  },
  {
    step: '02',
    title: 'Embedding',
    text: 'Convert each document into vector embeddings so retrieval can match intent, brand values, and beauty preferences.',
  },
  {
    step: '03',
    title: 'Retrieval',
    text: 'Search context by similarity, then rank the most relevant service recommendations and product guidance.',
  },
  {
    step: '04',
    title: 'Generation',
    text: 'Use the LLM to synthesize personalized beauty plans with citations and safe recommendations for each client.',
  },
]

const stack = [
  { label: 'Vector database', value: 'Pinecone / Qdrant' },
  { label: 'Embedding model', value: 'text-embedding-3-large' },
  { label: 'LLM', value: 'GPT-4o / Claude 3.5' },
  { label: 'Retrieval layer', value: 'Hybrid BM25 + semantic search' },
  { label: 'Evaluation', value: 'RAGAS + human feedback loops' },
]

const sourceFiles = [
  'Service catalog',
  'Ingredient library',
  'Customer profile notes',
  'Trend reports',
  'Stylist playbooks',
]

const samplePrompt = `Recommend a glow-up plan for a client with dry skin, soft pastel preferences, and an upcoming event in 2 weeks.`

const sampleResponse = `Based on the client’s skin profile and event timing, the best fit is a Bulbasaur Bloom facial, a soft pink hair gloss, and a pastel manicure. This plan prioritizes hydration, gentle brightness, and a long-lasting satin finish with minimal irritation.`

function AILabPage() {
  const [prompt, setPrompt] = useState(samplePrompt)
  const [answer, setAnswer] = useState(sampleResponse)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/beauty-advice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setAnswer(data.answer)
    } catch (err) {
      setError(err.message || 'Could not generate an AI recommendation.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-shell ai-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">⚡</span>
          <span>PokeGlow Salon</span>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/ai-lab">AI Lab</Link>
        </nav>

        <Link to="/booking" className="primary-btn">
          Book with AI
        </Link>
      </header>

      <main>
        <section className="ai-hero">
          <div className="ai-hero-card">
            <p className="eyebrow">AI / ML + RAG pipeline</p>
            <h1>Beauty intelligence for every appointment.</h1>
            <p className="ai-lead">
              PokeGlow AI combines salon knowledge, client intent, and beauty trend data into a retrieval-augmented
              experience that helps stylists deliver personalized, data-informed recommendations.
            </p>

            <div className="ai-metrics">
              <div className="ai-metric">
                <strong>92%</strong>
                <span>service fit confidence</span>
              </div>
              <div className="ai-metric">
                <strong>1.8x</strong>
                <span>faster recommendations</span>
              </div>
              <div className="ai-metric">
                <strong>34k</strong>
                <span>knowledge chunks indexed</span>
              </div>
              <div className="ai-metric">
                <strong>4.9/5</strong>
                <span>client satisfaction</span>
              </div>
            </div>
          </div>

          <div className="ai-panel">
            <h3>AI capabilities</h3>
            <ul>
              <li>Client-specific beauty recommendations</li>
              <li>Skin, hair, and nail care matching</li>
              <li>Style and trend forecasting</li>
              <li>Service upsell suggestions with explainability</li>
            </ul>
          </div>
        </section>

        <section className="ai-section">
          <div className="section-heading">
            <p className="eyebrow">Pipeline architecture</p>
            <h2>From knowledge sources to personalized beauty answers.</h2>
          </div>

          <div className="ai-grid">
            {pipeline.map((item) => (
              <article key={item.step} className="pipeline-card">
                <span className="step-index">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ai-stack">
          <div className="ai-stack-card">
            <h3>Data sources</h3>
            <ul className="stack-list">
              {sourceFiles.map((source) => (
                <li key={source}><span>{source}</span><strong>Live</strong></li>
              ))}
            </ul>
          </div>

          <div className="ai-stack-card">
            <h3>Model stack</h3>
            <ul className="stack-list">
              {stack.map((item) => (
                <li key={item.label}><span>{item.label}</span><strong>{item.value}</strong></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ai-chat">
          <div className="response-card">
            <h3>Sample prompt</h3>
            <textarea
              className="prompt-box"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows="6"
            />
            <button type="button" className="primary-btn generate-btn" onClick={handleGenerate} disabled={loading}>
              {loading ? 'Generating...' : 'Generate recommendation'}
            </button>
            {error && <p className="error-text">{error}</p>}
          </div>

          <div className="response-card">
            <h3>Generated response</h3>
            <p className="answer">{answer}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>PokeGlow Salon</span>
        <span>AI-enhanced beauty intelligence</span>
      </footer>
    </div>
  )
}

export default AILabPage
