"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { CommencerCards } from "@/lib/data"
import Card from "../Cards"
import { motion } from "framer-motion"
import { FadeUp } from "@/lib/animations"

interface SixthPhaseProps {
  setScreenIndex: (index: number) => void
  setLeftText: (text: string) => void
  setOverflowVisible: (visible: boolean) => void
}

const SixthPhase = ({
  setScreenIndex,
  setLeftText,
  setOverflowVisible
}: SixthPhaseProps) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const t = useTranslations("commencer")

  const translatedCards = t.raw("commencerCards") as { leftText: string; cardText: string }[]

  const mergedCards = translatedCards.map((text, i) => ({
    ...text,
    icon: CommencerCards[i]?.icon
  }))

  console.log(mergedCards)

  useEffect(() => {
    const current = mergedCards[currentCardIndex]

    setLeftText(current.leftText || "")
    setOverflowVisible(true)

    const timer = setTimeout(() => {
      if (currentCardIndex < mergedCards.length - 1) {
        setCurrentCardIndex((prev) => prev + 1)
      } else {
        setOverflowVisible(false)
        setScreenIndex(7)
      }
    }, 15000)

    return () => clearTimeout(timer)
  }, [currentCardIndex])

  return (
    <motion.div
      key={currentCardIndex}
      variants={FadeUp(2)}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <Card cardData={mergedCards[currentCardIndex]} />
    </motion.div>
  )
}

export default SixthPhase
