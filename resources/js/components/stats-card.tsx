import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type StatsCardProps = {
    title: string;
    value: string | number;
    icon: LucideIcon;
    description?: string;
    trend?: string;
    className?: string;
};

export default function StatsCard({
    title,
    value,
    icon: Icon,
    description,
    trend,
    className,
}: StatsCardProps) {
    return (
        <div
            className={cn(
                'group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
                className,
            )}
        >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-muted opacity-50 blur-3xl transition-all duration-500 group-hover:scale-125" />

            <div className="relative flex items-start justify-between gap-4">
                <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground">
                        {title}
                    </p>

                    <div className="space-y-1">
                        <h3 className="text-3xl font-bold tracking-tight text-foreground">
                            {value}
                        </h3>

                        {description && (
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </div>

                    {trend && (
                        <div className="inline-flex items-center rounded-full border bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
                            {trend}
                        </div>
                    )}
                </div>

                {/* ICON */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border bg-muted/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" />
                </div>
            </div>
        </div>
    );
}
