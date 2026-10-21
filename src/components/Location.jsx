import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TornEdge from './TornEdge.jsx';

export default function Location() {
  const { t } = useTranslation();

  const mapsUrl =
    'https://www.google.com/maps?q=9.030339,38.836892&ll=9.030339,38.836892&z=19&output=embed';
  const mapsExternalUrl = 'https://maps.app.goo.gl/gRxsnn9caZCYmRGU8?g_st=ic';

  return (
    <section
      id="location"
      className="relative bg-white px-4 sm:px-6 pt-12 sm:pt-16 pb-12 sm:pb-16 text-center overflow-visible z-[20]"
    >
      <div className="relative z-[40] mx-auto w-full max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="font-script text-2xl sm:text-3xl lg:text-4xl text-gold relative z-[40]"
        >
          {t('location.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="mt-2 font-display text-base sm:text-lg leading-snug text-ink/90 relative z-[40]">
            {t('location.venueName')}
          </p>
          <p className="mt-0.5 font-body text-sm sm:text-base leading-snug text-ink/70 relative z-[40]">
            {t('location.address')}
          </p>
        </motion.div>

        {/* Small gold line-art church and decorative divider */}
        <motion.svg
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewBox="0 0 320 125"
          className="mx-auto mt-4 sm:mt-6 w-full max-w-[220px] text-gold relative z-[40]"
          role="img"
          aria-label={t('location.venueName')}
        >
          <path
            d="M160 12v15M154 18h12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M145 45l15-18 15 18v35h-30zM151 80V61a9 9 0 0118 0v19"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="160"
            cy="51"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M42 88h236"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M42 88l-7-3 7 3-7 3M278 88l7-3-7 3 7 3M78 88c-10-2-12-8-5-11 7-3 12 4 8 9-4 5-11 5-16 1M242 88c10-2 12-8 5-11-7-3-12 4-8 9 4 5 11 5 16 1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <iframe
            title={t('location.venueName')}
            src={mapsUrl}
            className="relative z-[30] mx-auto mt-4 w-full max-w-2xl h-[320px] sm:h-[400px] rounded-2xl border-2 border-gold/60 shadow-md"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="mt-4">
            <a
              href={mapsExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-gold bg-gold/10 hover:bg-gold hover:text-white text-gold font-body text-sm font-medium transition-all duration-300 shadow-sm relative z-[35]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#EA4335] shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t('location.openInMaps')}</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom TornEdge hanging downward over the next section ── */}
     {/* ── Bottom TornEdge hanging downward over the next section ── */}
<div
  aria-hidden="true"
  className="absolute bottom-0 left-0 right-0 translate-y-[95%] z-[48] pointer-events-none
             shadow-none [filter:none] [&_*]:!shadow-none [&_*]:![filter:none]"
  style={{ filter: 'none', boxShadow: 'none' }}
>
  <TornEdge color="#ffffff" inset={false} />
</div>
    </section>
  );
}