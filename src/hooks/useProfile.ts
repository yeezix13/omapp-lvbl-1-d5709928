
import { useState, useEffect } from 'react'
import { supabase, isDemoMode } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import { Database } from '../types/database'

type Profile = Database['public']['Tables']['profiles']['Row']
type ProfileUpdate = Database['public']['Tables']['profiles']['Update']

export const useProfile = () => {
  const { user } = useAuth()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (user) {
      if (isDemoMode) {
        // Demo mode: simulate profile data
        const demoProfile: Profile = {
          id: user.id,
          email: user.email!,
          first_name: 'Demo',
          last_name: 'User',
          birth_date: '2000-01-01',
          phone: null,
          address: null,
          city: null,
          postal_code: null,
          current_level: null,
          institution: null,
          specialization: null,
          interests: null,
          languages: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
        setProfile(demoProfile)
        setLoading(false)
      } else {
        fetchProfile()
      }
    } else {
      setProfile(null)
      setLoading(false)
    }
  }, [user])

  const fetchProfile = async () => {
    if (isDemoMode) return
    
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
    if (isDemoMode) return
    
    const { data, error } = await supabase
      .from('profiles')
      .insert([
        {
          id: user!.id,
          email: user!.email!,
        },
      ])
      .select()
      .single()

    if (error) throw error
    setProfile(data)
  }

  const updateProfile = async (updates: ProfileUpdate) => {
    if (isDemoMode) {
      console.log('Demo mode: Profile update simulation', updates)
      if (profile) {
        setProfile({ ...profile, ...updates })
      }
      return { data: profile, error: null }
    }
    
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
