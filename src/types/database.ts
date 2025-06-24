
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          first_name: string | null
          last_name: string | null
          birth_date: string | null
          phone: string | null
          address: string | null
          city: string | null
          postal_code: string | null
          current_level: string | null
          institution: string | null
          specialization: string | null
          interests: string | null
          languages: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          first_name?: string | null
          last_name?: string | null
          birth_date?: string | null
          phone?: string | null
          address?: string | null
          city?: string | null
          postal_code?: string | null
          current_level?: string | null
          institution?: string | null
          specialization?: string | null
          interests?: string | null
          languages?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string | null
          last_name?: string | null
          birth_date?: string | null
          phone?: string | null
          address?: string | null
          city?: string | null
          postal_code?: string | null
          current_level?: string | null
          institution?: string | null
          specialization?: string | null
          interests?: string | null
          languages?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      grades: {
        Row: {
          id: string
          user_id: string
          semester: string
          year: number
          subject: string
          grade: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          semester: string
          year: number
          subject: string
          grade: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          semester?: string
          year?: number
          subject?: string
          grade?: number
          created_at?: string
        }
      }
      skills: {
        Row: {
          id: string
          user_id: string
          skill_type: 'hard' | 'soft'
          skill_name: string
          level: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          skill_type: 'hard' | 'soft'
          skill_name: string
          level: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          skill_type?: 'hard' | 'soft'
          skill_name?: string
          level?: number
          created_at?: string
        }
      }
      motivations: {
        Row: {
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
        Insert: {
          id?: string
          user_id: string
          professional_goals?: string | null
          work_values?: string[] | null
          interest_sectors?: string[] | null
          motivations?: string | null
          preferences?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          professional_goals?: string | null
          work_values?: string[] | null
          interest_sectors?: string[] | null
          motivations?: string | null
          preferences?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
