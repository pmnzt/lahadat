import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://avixicmtntfmrguexupw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2aXhpY210bnRmbXJndWV4dXB3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxODkwMTMwMSwiZXhwIjoyMDM0NDc3MzAxfQ.ydnx7W2NytWjJKXyHrYdrwLGlj2K8Cc54Gdt-080Uto')


export default defineEventHandler(async (event) => {
    const body = JSON.parse(await readBody(event))

    const doc = {
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        message: body.message
    }


    const { error } = await supabase
    .from('doc')
    .insert(doc)

    if (!error) {
        return {
          ok: true 
        }      
    }

    return {
        ok: false
    };
});