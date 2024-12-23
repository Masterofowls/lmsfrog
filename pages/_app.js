// pages/_app.js
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/common.js';

function MyApp({ Component, pageProps, router }) {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <Layout>
            <AnimatePresence mode="wait">
                <motion.div
                    key={router.route}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </Layout>
    );
}

export default MyApp;
