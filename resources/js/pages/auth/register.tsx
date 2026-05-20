import { Form, Head, Link } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { store } from '@/routes/register';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useToggle } from '@/hooks/use-toggle';

export default function Register() {
    const passwordToggle = useToggle();
    const confirmPasswordToggle = useToggle();

    return (
        <AuthLayout
            title="Create an account"
            description="Enter your details below to create your account"
        >
            <Head title="Register" />
            <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    name="name"
                                    placeholder="Full name"
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    name="email"
                                    placeholder="email@example.com"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="relative grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type={
                                        passwordToggle.isOpen
                                            ? 'text'
                                            : 'password'
                                    }
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <Button
                                    type="button"
                                    size="icon"
                                    variant="ghost"
                                    onClick={passwordToggle.toggle}
                                    className="absolute top-1/2 right-2 h-7 w-7 -translate-y-1/5"
                                >
                                    {passwordToggle.isOpen ? (
                                        <EyeOff className="h-8 w-8" />
                                    ) : (
                                        <Eye className="h-8 w-8" />
                                    )}
                                </Button>

                                <InputError message={errors.password} />
                            </div>

                            <div className="relative grid gap-2">
                                <Label htmlFor="password_confirmation">
                                    Confirm password
                                </Label>
                                <Input
                                    id="password_confirmation"
                                    type={
                                        confirmPasswordToggle.isOpen
                                            ? 'text'
                                            : 'password'
                                    }
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    name="password_confirmation"
                                    placeholder="Confirm password"
                                />

                                <Button
                                    type="button"
                                    size="icon"
                                    variant="ghost"
                                    onClick={confirmPasswordToggle.toggle}
                                    className="absolute top-1/2 right-2 h-7 w-7 -translate-y-1/5"
                                >
                                    {confirmPasswordToggle.isOpen ? (
                                        <EyeOff className="h-8 w-8" />
                                    ) : (
                                        <Eye className="h-8 w-8" />
                                    )}
                                </Button>
                                <InputError
                                    message={errors.password_confirmation}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="mt-2 w-full"
                                tabIndex={5}
                                data-test="register-user-button"
                            >
                                {processing && <Spinner />}
                                Create account
                            </Button>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <div className="flex w-full items-center gap-3 text-xs text-muted-foreground">
                                <div className="h-px flex-1 bg-border" />
                                <span className="whitespace-nowrap">
                                    Already have an account?
                                </span>
                                <div className="h-px flex-1 bg-border" />
                            </div>
                            <Button
                                asChild
                                variant="outline"
                                className="group flex w-full items-center justify-center gap-2"
                            >
                                <Link href={login()}>
                                    Sign in instead
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
