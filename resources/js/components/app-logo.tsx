import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-white shadow-md">
                <AppLogoIcon className="size-8 fill-current text-primary" />
            </div>
        </div>
    );
}
