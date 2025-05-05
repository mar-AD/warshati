"use client"

import { Button } from "@nextui-org/react";
import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = ({ message, pending_message, className }: {
  message: string,
  pending_message: string
  className?: string
}) => {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" color="primary" className={`${className}`} isLoading={pending} >
      {
        pending ? pending_message : message
      }
    </Button>
  )
}

export default SubmitButton