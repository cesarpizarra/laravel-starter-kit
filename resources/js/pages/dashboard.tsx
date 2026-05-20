import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import StatsCard from '@/components/stats-card';
import { Clock3, FileText, GraduationCap, Users } from 'lucide-react';
import UsersChart from '@/components/dashboard/users-chart';
import RequestsChart from '@/components/dashboard/requests-chart';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatsCard
                        title="Total Users"
                        value="1,245"
                        icon={Users}
                        description="Registered users"
                        trend="+12% this month"
                    />

                    <StatsCard
                        title="Graduates"
                        value="328"
                        icon={GraduationCap}
                        description="Approved graduates"
                        trend="+5% this semester"
                    />

                    <StatsCard
                        title="Document Requests"
                        value="89"
                        icon={FileText}
                        description="Pending requests"
                        trend="23 awaiting review"
                    />

                    <StatsCard
                        title="Active Sessions"
                        value="54"
                        icon={Clock3}
                        description="Users online"
                        trend="Live activity"
                    />
                </div>

                <div className="grid gap-6 p-6 md:grid-cols-2">
                    <UsersChart />
                    <RequestsChart />
                </div>
            </div>
        </AppLayout>
    );
}
