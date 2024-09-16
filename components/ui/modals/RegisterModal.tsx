import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Modal } from '@/components/ui/modals/modal';
import axios from 'axios';
import { useEffect } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

interface RegisterModalProps {
  isOpen: boolean;
  isModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onSwitchToLogin: () => void;
}

export function RegisterModal({
  isOpen,
  isModalVisible,
  onSwitchToLogin,
}: RegisterModalProps): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    axios
      .post('/api/register', data)
      .then(() => {
        isModalVisible(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isOpen) {
      reset({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    }
  }, [isOpen, reset]);

  return (
    <Modal isOpen={isOpen} isModalVisible={isModalVisible} title="">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    placeholder="Max"
                    {...register('firstName', {
                      required: 'First name is required',
                    })}
                  />
                  {errors.firstName?.message && (
                    <span className="text-red-500 text-sm">
                      {String(errors.firstName.message)}
                    </span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    placeholder="Robinson"
                    {...register('lastName', {
                      required: 'Last name is required',
                    })}
                  />
                  {errors.lastName?.message && (
                    <span className="text-red-500 text-sm">
                      {String(errors.lastName.message)}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email?.message && (
                  <span className="text-red-500 text-sm">
                    {String(errors.email.message)}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {String(errors.password.message)}
                  </span>
                )}
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
              <Button variant="outline" className="w-full">
                Sign up with Google
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Button variant="link" onClick={onSwitchToLogin}>
              Sign in
            </Button>
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
}
