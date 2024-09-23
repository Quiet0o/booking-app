import { User } from '@prisma/client';

export interface currentUserInterface {
  currentUser?: User | null;
}
