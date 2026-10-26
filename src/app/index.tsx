import { Redirect } from 'expo-router';
import { hasAnyLocalAccount } from '../core/database/auth';

export default function Index() {
  // First-time installs go straight to registration.
  // A login gate will replace the dashboard redirect once login is implemented.
  let accountExists = false;

  try {
    accountExists = hasAnyLocalAccount();
  } catch {
    // If the local account table cannot be read, show registration rather than
    // leave the user on a blank route. Registration will display database errors.
  }

  return (
    <Redirect
      href={accountExists ? '/(tabs)/dashboard' : '/register'}
    />
  );
}
