"use server";

import { UserService } from "@/backend/user-service";

export async function getAllAccounts() {
  const accountService = UserService.getInstance();
  const accounts = accountService.getAllUsers();
  return accounts;
}

export async function isAdmin(userId: string) {
  const accountService = UserService.getInstance();

  return accountService.isAdmin(userId);
}
