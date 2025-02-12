/** @format */
import { signInWithGoogle } from '@/lib/authactions';
const LoginForm = () => {
  return (
    <form action={signInWithGoogle}>
      <button type='submit' name='action' value='google'>
        SignIn With Google
      </button>
    </form>
  );
};

export default LoginForm;
