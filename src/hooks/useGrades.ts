
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import { Database } from '../types/database'

type Grade = Database['public']['Tables']['grades']['Row']
type GradeInsert = Database['public']['Tables']['grades']['Insert']

export const useGrades = () => {
  const { user } = useAuth()
  const [grades, setGrades] = useState<Grade[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (user) {
      fetchGrades()
    }
  }, [user])

  const fetchGrades = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('grades')
        .select('*')
        .eq('user_id', user!.id)
        .order('year', { ascending: false })
        .order('semester', { ascending: true })

      if (error) throw error
      setGrades(data || [])
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const addGrade = async (grade: Omit<GradeInsert, 'user_id'>) => {
    try {
      const { data, error } = await supabase
        .from('grades')
        .insert([
          {
            ...grade,
            user_id: user!.id,
          },
        ])
        .select()
        .single()

      if (error) throw error
      setGrades(prev => [...prev, data])
      return { data, error: null }
    } catch (error: any) {
      setError(error.message)
      return { data: null, error: error.message }
    }
  }

  const updateGrade = async (id: string, updates: Partial<Grade>) => {
    try {
      const { data, error } = await supabase
        .from('grades')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      setGrades(prev => prev.map(grade => grade.id === id ? data : grade))
      return { data, error: null }
    } catch (error: any) {
      setError(error.message)
      return { data: null, error: error.message }
    }
  }

  const deleteGrade = async (id: string) => {
    try {
      const { error } = await supabase
        .from('grades')
        .delete()
        .eq('id', id)

      if (error) throw error
      setGrades(prev => prev.filter(grade => grade.id !== id))
      return { error: null }
    } catch (error: any) {
      setError(error.message)
      return { error: error.message }
    }
  }

  return {
    grades,
    loading,
    error,
    addGrade,
    updateGrade,
    deleteGrade,
    refetch: fetchGrades,
  }
}
