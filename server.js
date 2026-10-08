import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const rawApiKey = process.env.OPENAI_API_KEY || ''
const hasValidOpenAIKey = rawApiKey.trim() !== '' && rawApiKey.trim() !== 'your_openai_api_key_here'
const openai = hasValidOpenAIKey ? new OpenAI({ apiKey: rawApiKey }) : null

const fallbackBeautyAdvice = (prompt) => {
  const lower = prompt.toLowerCase()
  const focus = lower.includes('dry') ? 'deep hydration' : lower.includes('oily') ? 'oil control and glow balancing' : 'balanced radiance'
  const style = lower.includes('pastel') ? 'soft pastel tones' : lower.includes('bold') ? 'statement color' : 'fresh modern styling'
  const service = lower.includes('hair') ? 'a glossy color treatment and smoothing ritual' : lower.includes('nails') ? 'a glossy manicure with a soft, polished finish' : 'a luxe facial and nourishing treatment'

  return `For this beauty brief, I’d recommend a ${focus} plan built around ${style}. Start with ${service}, then add a low-stress finishing ritual like a gentle scalp massage or a hydrating mask to keep the look fresh and long-lasting. This approach keeps the result elegant, camera-ready, and easy to maintain for your event.`
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'PokeGlow AI backend is running.' })
})

app.post('/api/beauty-advice', async (req, res) => {
  try {
    const { prompt } = req.body || {}

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'A valid prompt is required.' })
    }

    if (!openai) {
      return res.json({
        answer: fallbackBeautyAdvice(prompt),
        mode: 'demo',
      })
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are a beauty and styling assistant for a Pokémon-inspired luxury salon. Give practical, safe, and personalized beauty advice. Keep answers concise but helpful, and mention services, skin type, and salon ritual suggestions when relevant.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 400,
    })

    const answer = completion.choices?.[0]?.message?.content || 'No response generated.'

    return res.json({ answer, mode: 'live' })
  } catch (error) {
    console.error('Beauty advice error:', error)
    return res.status(500).json({
      error: 'The AI service is unavailable right now. Please try again later.',
    })
  }
})

app.listen(port, () => {
  console.log(`PokeGlow AI backend listening on http://localhost:${port}`)
})
