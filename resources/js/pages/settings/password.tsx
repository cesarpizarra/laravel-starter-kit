import { Transition } from '@headlessui/react';
import { Form, Head } from '@inertiajs/react';
import { useRef } from 'react';
import PasswordController from '@/actions/App/Http/Controllers/Settings/PasswordController';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { edit } from '@/routes/user-password';
import type { BreadcrumbItem } from '@/types';
import { useToggle } from '@/hooks/use-toggle';
import { Eye, EyeOff } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Password settings',
        href: edit().url,
    },
];

export default function Password() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);
    const currentPasswordToggle = useToggle();
    const newPasswordToggle = useToggle();
    const confirmPasswordToggle = useToggle();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Password settings" />

            <h1 className="sr-only">Password Settings</h1>

            <SettingsLayout>
                <div className="space-y-6">
                    <Heading
                        variant="small"
                        title="Update password"
                        description="Ensure your account is using a long, random password to stay secure"
                    />

                    <Form
                        {...PasswordController.update.form()}
                        options={{
                            preserveScroll: true,
                        }}
                        resetOnError={[
                            'password',
                            'password_confirmation',
                            'current_password',
                        ]}
                        resetOnSuccess
                        onError={(errors) => {
                            if (errors.password) {
                                passwordInput.current?.focus();
                            }

                            if (errors.current_password) {
                                currentPasswordInput.current?.focus();
                            }
                        }}
                        className="space-y-6"
                    >
                        {({ errors, processing, recentlySuccessful }) => (
                            <>
                                <div className="relative grid gap-2">
                                    <Label htmlFor="current_password">
                                        Current password
                                    </Label>

                                    <Input
                                        id="current_password"
                                        ref={currentPasswordInput}
                                        name="current_password"
                                        type={
                                            currentPasswordToggle.isOpen
                                                ? 'text'
                                                : 'password'
                                        }
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        placeholder="Current password"
                                    />

                                    <Button
                                        type="button"
                                        size="icon"
                                        variant="ghost"
                                        onClick={currentPasswordToggle.toggle}
                                        className="absolute top-1/2 right-2 h-7 w-7 -translate-y-1/12"
                                    >
                                        {currentPasswordToggle.isOpen ? (
                                            <EyeOff className="h-8 w-8" />
                                        ) : (
                                            <Eye className="h-8 w-8" />
                                        )}
                                    </Button>

                                    <InputError
                                        message={errors.current_password}
                                    />
                                </div>

                                <div className="relative grid gap-2">
                                    <Label htmlFor="password">
                                        New password
                                    </Label>

                                    <Input
                                        id="password"
                                        ref={passwordInput}
                                        name="password"
                                        type={
                                            newPasswordToggle.isOpen
                                                ? 'text'
                                                : 'password'
                                        }
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        placeholder="New password"
                                    />

                                    <Button
                                        type="button"
                                        size="icon"
                                        variant="ghost"
                                        onClick={newPasswordToggle.toggle}
                                        className="absolute top-1/2 right-2 h-7 w-7 -translate-y-1/12"
                                    >
                                        {newPasswordToggle.isOpen ? (
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
                                        name="password_confirmation"
                                        type={
                                            confirmPasswordToggle.isOpen
                                                ? 'text'
                                                : 'password'
                                        }
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        placeholder="Confirm password"
                                    />

                                    <Button
                                        type="button"
                                        size="icon"
                                        variant="ghost"
                                        onClick={confirmPasswordToggle.toggle}
                                        className="absolute top-1/2 right-2 h-7 w-7 -translate-y-1/12"
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

                                <div className="flex items-center gap-4">
                                    <Button
                                        disabled={processing}
                                        data-test="update-password-button"
                                    >
                                        Save password
                                    </Button>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-neutral-600">
                                            Saved
                                        </p>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
