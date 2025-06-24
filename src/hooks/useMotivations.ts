
import { useState, useEffect } from 'react'
import { supabase } from '../integrations/supabase/client'
import { useAuth } from '../contexts/AuthContext'

type Motivation = {
  id: string
  user_id: string
  professional_goals: string | null
  work_values: string[] | null
  interest_sectors: string[] | null
  motivations: string | null
  preferences: string | null
  created_at: string
  updated_at: string
}

type MotivationUpdate = {
  professional_goals?: string | null
  work_values?: string[] | null
  interest_sectors?: string[] | null
  motivations?: string | null
  preferences?: string | null
}

export const useMotivations = () => {
  const { user } = useAuth()
  const [motivation, setMotivation] = useState<Motivation | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (user) {
      fetchMotivation()
    } else {
      setMotivation(null)
      setLoading(false)
    }
  }, [user])

  const fetchMotivation = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('motivations')
        .select('*')
        .eq('user_id', user!.id)
        .single()

      if (error) {
        // If no motivation exists, create one
        if (error.code === 'PGRST116') {
          await createMotivation()
        } else {
          throw error
        }
      } else {
        setMotivation(data)
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const createMotivation = async () => {
    const { data, error } = await supabase
      .from('motivations')
      .insert([
        {
          user_id: user!.id,
          professional_goals: null,
          work_values: null,
          interest_sectors: null,
          motivations: null,
          preferences: null,
        },
      ])
      .select()
      .single()

    if (error) throw error
    setMotivation(data)
  }

  const updateMotivation = async (updates: MotivationUpdate) => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('motivations')
        .update({
          ...updates,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', user!.id)
        .select()
        .single()

      if (error) throw error
      setMotivation(data)
      return { data, error: null }
    } catch (error: any) {
      setError(error.message)
      return { data: null, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  return {
    motivation,
    loading,
    error,
    updateMotivation,
    refetch: fetchMotivation,
  }
}
