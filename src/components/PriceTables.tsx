import { plans, extras, specialConditions } from '../data/pricing';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function PriceTables() {
  const [selectedAnimal, setSelectedAnimal] = useState<'Cão' | 'Gato'>('Gato');
  const [selectedDuration, setSelectedDuration] = useState<string>('');

  const getWhatsAppLink = (planId: string, planName: string) => {
    if (planId === 'exoticos') {
      return `https://wa.me/351919245067?text=${encodeURIComponent('Olá! Gostaria de saber os planos para os exóticos')}`;
    }
    if (planId === 'hotel' && selectedDuration) {
      return `https://wa.me/351919245067?text=${encodeURIComponent(`Olá! Gostaria de reservar o plano: Hotel - ${selectedAnimal} - ${selectedDuration}`)}`;
    }
    return `https://wa.me/351919245067?text=${encodeURIComponent(`Olá! Gostaria de reservar o plano: ${planName}`)}`;
  };

  return (
    <section id="precos" className="section bg-sand/60 dark:bg-neutral-950">
      <div className="container-section">
        <div className="text-center mb-12 max-w-2xl mx-auto animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold title-gradient mb-4">Planos & Valores</h2>
          <p className="text-neutral-600 dark:text-neutral-300">Escolhe o formato ideal para a rotina do teu companheiro. Transparência e carinho em cada opção.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map(plan => {
            const animalOptions = plan.pricingOptions?.filter(opt => opt.animal === selectedAnimal) || [];
            
            return (
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
                  
                  {/* Seleção de Animal para Hotel */}
                  {plan.pricingOptions && (
                    <div className="mb-4">
                      <div className="flex gap-2 mb-3">
                        <button
                          onClick={() => { setSelectedAnimal('Gato'); setSelectedDuration(''); }}
                          className={
                            'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition border ' +
                            (selectedAnimal === 'Gato'
                              ? 'bg-brand-primary text-white border-brand-primary'
                              : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:border-brand-primary')
                          }
                        >
                          🐱 Gato
                        </button>
                        <button
                          onClick={() => { setSelectedAnimal('Cão'); setSelectedDuration(''); }}
                          className={
                            'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition border ' +
                            (selectedAnimal === 'Cão'
                              ? 'bg-brand-primary text-white border-brand-primary'
                              : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:border-brand-primary')
                          }
                        >
                          🐶 Cão
                        </button>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Duração:</p>
                        {animalOptions.map((option, idx) => (
                          <label 
                            key={idx}
                            className="flex items-center gap-2 text-xs cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 p-2 rounded transition"
                          >
                            <input 
                              type="radio" 
                              name="duration-option" 
                              value={`${option.duration} (${option.price})`}
                              checked={selectedDuration === `${option.duration} (${option.price})`}
                              onChange={(e) => setSelectedDuration(e.target.value)}
                              className="text-brand-primary focus:ring-brand-primary"
                            />
                            <span className="text-neutral-700 dark:text-neutral-200">
                              <strong>{option.duration}</strong>: <span className="text-brand-primary font-semibold">{option.price}</span>
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

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
                      href={getWhatsAppLink(plan.id, plan.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (plan.id === 'hotel' && !selectedDuration) {
                          e.preventDefault();
                          alert('Por favor, selecione uma duração antes de reservar.');
                        }
                      }}
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
            );
          })}
        </div>
        
        {/* O que Trazer */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-neutral-800 dark:text-neutral-100 text-center">O que Trazer</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-5">
              <h4 className="font-semibold text-brand-primary mb-2 text-sm">🐶 Cães</h4>
              <ul className="text-xs text-neutral-600 dark:text-neutral-300 space-y-1 leading-relaxed">
                <li>• Boletim de vacinas</li>
                <li>• Taças para água e comida</li>
                <li>• Comida habitual do animal</li>
                <li>• Manta ou objeto com cheiro do dono</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-5">
              <h4 className="font-semibold text-brand-primary mb-2 text-sm">🐱 Gatos</h4>
              <ul className="text-xs text-neutral-600 dark:text-neutral-300 space-y-1 leading-relaxed">
                <li>• Taças para água e comida</li>
                <li>• Comida habitual do animal</li>
                <li>• Areia e pá</li>
                <li>• Objeto com cheiro do dono (opcional)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-5">
              <h4 className="font-semibold text-brand-primary mb-2 text-sm">🐾 Exóticos</h4>
              <ul className="text-xs text-neutral-600 dark:text-neutral-300 space-y-1 leading-relaxed">
                <li>• Gaiola ou terrário</li>
                <li>• Comida específica</li>
                <li>• Utensílios necessários</li>
                <li>• Instruções de cuidados</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-5">
              <h4 className="font-semibold text-brand-primary mb-2 text-sm">✅ Requisitos</h4>
              <ul className="text-xs text-neutral-600 dark:text-neutral-300 space-y-1 leading-relaxed">
                <li>• Vacinas em dia</li>
                <li>• Desparasitação</li>
                <li>• Sinal de €15 para reservar</li>
                <li>• Cães com problemas: treino ATAAC</li>
              </ul>
            </div>
          </div>
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

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">Condições Especiais</h3>
          <ul className="grid sm:grid-cols-3 gap-4">
            {specialConditions.map(condition => (
              <li key={condition.id} className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-4">
                <p className="font-medium text-neutral-800 dark:text-neutral-100 mb-1">{condition.title}</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{condition.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
