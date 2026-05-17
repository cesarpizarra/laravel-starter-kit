import AppLogoIcon from '@/components/app-logo-icon';
import PageTransition from '@/components/page-transition';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="grid min-h-screen grid-cols-1 bg-background md:grid-cols-2">
            <div className="relative hidden flex-col justify-between border-r bg-muted/40 p-10 text-foreground md:flex">
                <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl border bg-background">
                        <AppLogoIcon className="size-6 text-foreground" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                        Template Laravel
                    </span>
                </div>

                <div className="space-y-4">
                    <h2 className="text-4xl leading-tight font-bold text-foreground">
                        Welcome back to Template Laravel
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        Manage your system, track activity, and access your
                        tools all in one clean and modern workspace.
                    </p>
                </div>

                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Template Laravel. All rights
                    reserved.
                </p>
            </div>

            <div className="flex items-center justify-center bg-background p-6 md:p-10">
                <PageTransition>
                    <div className="flex h-screen w-full items-center justify-center">
                        <div className="w-full max-w-md space-y-6">
                            <div className="space-y-2 text-center">
                                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-foreground text-background">
                                    <AppLogoIcon className="size-6 fill-current" />
                                </div>

                                <h1 className="text-2xl font-semibold text-foreground">
                                    {title}
                                </h1>

                                <p className="text-sm text-muted-foreground">
                                    {description}
                                </p>
                            </div>

                            {children}
                        </div>
                    </div>
                </PageTransition>
            </div>
        </div>
    );
}
