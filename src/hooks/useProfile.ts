
import { useState, useEffect } from 'react'
import { supabase } from '../integrations/supabase/client'
import { useAuth } from '../contexts/AuthContext'

type Profile = {
  id: string
  first_name: string | null
  last_name: string | null
  birth_date: string | null
  phone: string | null
  address: string | null
  city: string | null
  postal_code: string | null
  current_level: string | null
  institution: string | null
  specializations: string | null
  interests: string | null
  languages: string | null
  created_at: string
  updated_at: string
}

type ProfileUpdate = Partial<Omit<Profile, 'id' | 'created_at' | 'updated_at'>>

export const useProfile = () => {
  const { user } = useAuth()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (user) {
      fetchProfile()
    } else {
      setProfile(null)
      setLoading(false)
    }
  }, [user])

  const fetchProfile = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user!.id)
        .single()

      if (error) {
        // If profile doesn't exist, create one
        if (error.code === 'PGRST116') {
          await createProfile()
        } else {
          throw error
        }
      } else {
        setProfile(data)
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const createProfile = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .insert([
        {
          id: user!.id,
          first_name: user!.user_metadata?.first_name || null,
          last_name: user!.user_metadata?.last_name || null,
          birth_date: user!.user_metadata?.birth_date || null,
        },
      ])
      .select()
      .single()

    if (error) throw error
    setProfile(data)
  }

  const updateProfile = async (updates: ProfileUpdate) => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user!.id)
        .select()
        .single()

      if (error) throw error
      setProfile(data)
      return { data, error: null }
    } catch (error: any) {
      setError(error.message)
      return { data: null, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  return {
    profile,
    loading,
    error,
    updateProfile,
    refetch: fetchProfile,
  }
}
