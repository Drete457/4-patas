import { plans, extras } from '../data/pricing';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function PriceTables() {
  return (
    <section id="precos" className="section bg-sand/60 dark:bg-neutral-950">
      <div className="container-section">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold title-gradient mb-4">Planos & Valores</h2>
          <p className="text-neutral-600 dark:text-neutral-300">Escolhe o formato ideal para a rotina do teu companheiro. Transparência e carinho em cada opção.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map(plan => (
            <div
              key={plan.id}
              className={
                'relative rounded-2xl border shadow-soft flex flex-col bg-white dark:bg-neutral-900 ' +
                (plan.highlight
                  ? 'border-brand-primary ring-2 ring-brand-primary/40'
                  : 'border-neutral-200 dark:border-neutral-700')
              }
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">Mais Popular</span>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-1 text-neutral-900 dark:text-white">{plan.name}</h3>
                <p className="text-3xl font-bold mb-2 text-brand-primary">{plan.price}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-200 mb-4 leading-relaxed">{plan.description}</p>
                <ul className="space-y-2 text-sm mb-6">
                  {plan.features.map(f => (
                    <li key={f.label} className="flex items-start gap-2">
                      {f.included ? (
                        <CheckIcon className="w-5 h-5 text-brand-primary shrink-0" />
                      ) : f.included === false ? (
                        <XMarkIcon className="w-5 h-5 text-neutral-300 dark:text-neutral-600 shrink-0" />
                      ) : (
                        <span className="w-5 h-5 shrink-0" />
                      )}
                      <span className={f.included ? 'text-neutral-700 dark:text-neutral-200' : 'text-neutral-500 dark:text-neutral-500 line-through'}>{f.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href="#contacto"
                    className={
                      'w-full inline-flex justify-center btn-primary text-sm ' +
                      (plan.highlight ? '' : '!bg-neutral-800 dark:!bg-neutral-200 dark:!text-neutral-900 hover:!bg-neutral-700 dark:hover:!bg-white')
                    }
                  >
                    {plan.ctaLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">Extras</h3>
            <ul className="grid sm:grid-cols-3 gap-4">
              {extras.map(extra => (
                <li key={extra.id} className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-neutral-800 dark:text-neutral-100">{extra.name}</span>
                    <span className="text-sm text-brand-primary font-semibold">{extra.price}</span>
                  </div>
                  {extra.description && <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{extra.description}</p>}
                </li>
              ))}
            </ul>
          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-6">* Valores indicativos — confirmar disponibilidade e condições no contacto.</p>
        </div>
      </div>
    </section>
  );
}
