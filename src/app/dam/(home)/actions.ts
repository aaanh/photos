import { sessionService } from "@/backend/session-service";
import { createClient } from "@/utils/supabase/server";
import { UserService } from "@/backend/user-service";

export async function getSessions() {
  const supabase = await createClient();

  // Get the current user's session
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const userService = UserService.getInstance();
  const currentUser = await userService.getUserFromSupabase(user);

  try {
    const photoshootSessions = await sessionService.getAllSessionsByUser(
      currentUser
    );
    return { sessions: photoshootSessions };
  } catch (error) {
    console.error("Error fetching photoshoot sessions:", error);
    throw error;
  }
}
