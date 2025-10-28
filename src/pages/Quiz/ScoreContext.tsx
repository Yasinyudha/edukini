import { createContext, useState, useContext } from "react"
import type { ReactNode } from "react"  // 👈 type-only import

type ScoreContextType = {
  score: number
  addScore: () => void
  resetScore: () => void
}

const ScoreContext = createContext<ScoreContextType | undefined>(undefined)

export function ScoreProvider({ children }: { children: ReactNode }) {
  const [score, setScore] = useState(0)

  const addScore = () => setScore((prev) => prev + 1)
  const resetScore = () => setScore(0)

  return (
    <ScoreContext.Provider value={{ score, addScore, resetScore }}>
      {children}
    </ScoreContext.Provider>
  )
}

export function useScore() {
  const context = useContext(ScoreContext)
  if (!context) {
    throw new Error("useScore must be used within a ScoreProvider")
  }
  return context
}