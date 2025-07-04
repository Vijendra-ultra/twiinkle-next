import { supabase } from "./SupabaseClient";

export async function fetchUserProfileInfo() {
  console.log("I ran to fetch user info");
  const { data, error } = await supabase
    .from("user_profile_info")
    .select("user_name,nick_name")
    .single();

  if (data) {
    return { data, error: undefined };
  }
  if (error) {
    return { data: null, error: error };
  }
}
