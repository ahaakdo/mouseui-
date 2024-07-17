import { generateVueConfig } from '../build/build.config';

export default async () => {
    const Unocss = (await import('unocss/vite')).default

    return generateVueConfig({}, {
        plugins: [
            Unocss(),
        ],
    });
}
