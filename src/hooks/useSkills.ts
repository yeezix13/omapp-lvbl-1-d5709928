
import { useState, useEffect } from 'react'
import { supabase } from '../integrations/supabase/client'
import { useAuth } from '../contexts/AuthContext'

type Skill = {
  id: string
  user_id: string
  skill_type: 'hard' | 'soft'
  skill_name: string
  level: number
  created_at: string
}

type SkillInsert = {
  skill_type: 'hard' | 'soft'
  skill_name: string
  level: number
}

export const useSkills = () => {
  const { user } = useAuth()
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (user) {
      fetchSkills()
    } else {
      setSkills([])
      setLoading(false)
    }
  }, [user])

  const fetchSkills = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .eq('user_id', user!.id)
        .order('skill_type', { ascending: true })
        .order('skill_name', { ascending: true })

      if (error) throw error
      setSkills(data || [])
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const addSkill = async (skill: SkillInsert) => {
    try {
      const { data, error } = await supabase
        .from('skills')
        .insert([
          {
            ...skill,
            user_id: user!.id,
          },
        ])
        .select()
        .single()

      if (error) throw error
      setSkills(prev => [...prev, data])
      return { data, error: null }
    } catch (error: any) {
      setError(error.message)
      return { data: null, error: error.message }
    }
  }

  const updateSkill = async (id: string, updates: Partial<Skill>) => {
    try {
      const { data, error } = await supabase
        .from('skills')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      setSkills(prev => prev.map(skill => skill.id === id ? data : skill))
      return { data, error: null }
    } catch (error: any) {
      setError(error.message)
      return { data: null, error: error.message }
    }
  }

  const deleteSkill = async (id: string) => {
    try {
      const { error } = await supabase
        .from('skills')
        .delete()
        .eq('id', id)

      if (error) throw error
      setSkills(prev => prev.filter(skill => skill.id !== id))
      return { error: null }
    } catch (error: any) {
      setError(error.message)
      return { error: error.message }
    }
  }

  return {
    skills,
    loading,
    error,
    addSkill,
    updateSkill,
    deleteSkill,
    refetch: fetchSkills,
  }
}
