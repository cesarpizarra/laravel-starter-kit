import { motion, AnimatePresence } from 'framer-motion';
import { usePage } from '@inertiajs/react';

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const { url } = usePage();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={url}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="h-full w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
