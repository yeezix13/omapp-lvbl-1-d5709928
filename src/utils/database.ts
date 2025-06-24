
import { supabase } from '../lib/supabase'

// Utility functions for database operations
export const dbUtils = {
  // Check if tables exist
  async checkTablesExist() {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .limit(1)
      
      return !error
    } catch {
      return false
    }
  },

  // Get user completion percentage
  async getUserCompletion(userId: string) {
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      const { data: grades } = await supabase
        .from('grades')
        .select('id')
        .eq('user_id', userId)

      const { data: skills } = await supabase
        .from('skills')
        .select('id')
        .eq('user_id', userId)

      const { data: motivations } = await supabase
        .from('motivations')
        .select('id')
        .eq('user_id', userId)

      // Calculate completion percentage based on filled fields
      let completion = 0
      const totalSections = 4

      // Profile completion (25%)
      if (profile && profile.first_name && profile.last_name && profile.birth_date) {
        completion += 25
      }

      // Grades completion (25%)
      if (grades && grades.length > 0) {
        completion += 25
      }

      // Skills completion (25%)
      if (skills && skills.length > 0) {
        completion += 25
      }

      // Motivations completion (25%)
      if (motivations && motivations.length > 0) {
        completion += 25
      }

      return completion
    } catch (error) {
      console.error('Error calculating completion:', error)
      return 0
    }
  },
}
