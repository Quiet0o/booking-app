import { Modal } from '@/components/ui/modals/modal';
import { signIn } from 'next-auth/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface LoginModalProps {
  isOpen: boolean;
  isModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onSwitchToRegister: () => void;
}

export function LoginModal({
  isOpen,
  isModalVisible,
  onSwitchToRegister,
}: LoginModalProps): JSX.Element {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        toast.success('Logged in');
        router.refresh();
        isModalVisible(false);
      }

      if (callback?.error) {
        console.log(callback.error);
      }
    });
  };

  useEffect(() => {
    if (isOpen) {
      reset({
        email: '',
        password: '',
      });
    }
  }, [isOpen, reset]);

  return (
    <Modal isOpen={isOpen} isModalVisible={isModalVisible} title="">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="email@example.com"
                  {...register('email', {
                    required: 'Email is required',
                  })}
                />
                {errors.email?.message && (
                  <span className="text-red-500 text-sm">
                    {String(errors.email.message)}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  placeholder=""
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />
                {errors.password?.message && (
                  <span className="text-red-500 text-sm">
                    {String(errors.password.message)}
                  </span>
                )}
              </div>
              <Button type="submit" variant="destructive" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Button variant="link" onClick={onSwitchToRegister}>
              Sign up
            </Button>
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
}
