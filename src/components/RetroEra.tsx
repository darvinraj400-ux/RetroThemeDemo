import { useState } from 'react';
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { products, collections } from '../data';
import { useStore } from '../store';

interface QuizAnswer {
  question: number;
  answer: number;
}

const questions = [
  {
    question: 'What catches your eye?',
    options: [
      'Warm, rounded forms',
      'Bold graphic prints',
      'Colorful audio objects',
      'Simple geometric design',
    ],
  },
  {
    question: 'What are you shopping for?',
    options: [
      'Home and lighting',
      'Posters and paper',
      'Sound and culture',
      'Everyday objects',
    ],
  },
  {
    question: 'Which palette feels right?',
    options: [
      'Earthy and warm',
      'Mustard and orange',
      'Olive and cream',
      'Blue and brick red',
    ],
  },
  {
    question: 'What matters most?',
    options: [
      'Everyday usefulness',
      'Distinctive design',
      'Collectible character',
      'A thoughtful gift',
    ],
  },
];

const results = [
  {
    title: 'The Warm Collector',
    description: 'You\'re drawn to objects that feel like home — warm tones, organic forms, and pieces that bring comfort to everyday rituals.',
    collection: 'home-objects',
    color: '#C65C36',
  },
  {
    title: 'The Graphic Mind',
    description: 'Bold compositions and striking visual language speak to you. You appreciate objects that make a statement on a wall or a desk.',
    collection: 'print-paper',
    color: '#D5A832',
  },
  {
    title: 'The Analog Soul',
    description: 'You value the tangible — vinyl, wood, and warm sound. Objects with a connection to music and listening culture call to you.',
    collection: 'sound-culture',
    color: '#626A43',
  },
  {
    title: 'The Everyday Poet',
    description: 'You find beauty in the functional. A well-made mug, a considered desk object, a bag that ages gracefully — these are your treasures.',
    collection: 'everyday-classics',
    color: '#718A98',
  },
];

function getRecommendedProducts(answers: QuizAnswer[]) {
  const primaryAnswer = answers[1]?.answer ?? 0;
  const categoryMap = ['Home Objects', 'Print & Paper', 'Sound & Culture', 'Kitchen & Tabletop'];
  const targetCategory = categoryMap[primaryAnswer];
  
  return products
    .filter(p => p.category === targetCategory || p.tags.some(t => t.includes(targetCategory.toLowerCase().split(' ')[0])))
    .slice(0, 3);
}

export function RetroEraQuiz() {
  const { dispatch } = useStore();
  const [currentStep, setCurrentStep] = useState(-1); // -1 = intro, 0-3 = questions, 4 = result
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionIdx: number, answerIdx: number) => {
    const newAnswers = [...answers.filter(a => a.question !== questionIdx), { question: questionIdx, answer: answerIdx }];
    setAnswers(newAnswers);

    if (questionIdx < questions.length - 1) {
      setCurrentStep(questionIdx + 1);
    } else {
      setShowResult(true);
      setCurrentStep(4);
    }
  };

  const getResult = () => {
    if (answers.length < 2) return results[0];
    // Use primary shopping answer (question 2) to determine result
    const shoppingAnswer = answers.find(a => a.question === 1)?.answer ?? 0;
    return results[shoppingAnswer];
  };

  const reset = () => {
    setCurrentStep(-1);
    setAnswers([]);
    setShowResult(false);
  };

  const result = getResult();
  const recommendedProducts = getRecommendedProducts(answers);
  const matchedCollection = collections.find(c => c.id === result.collection);

  return (
    <section id="quiz" className="py-16 lg:py-24 bg-warm-cream border-y-2 border-ink-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-burnt-orange" />
            <span className="cat-number text-burnt-orange">FIND YOUR RETRO ERA</span>
            <div className="h-[2px] w-8 bg-burnt-orange" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            Discover Your<br />Vintage Style.
          </h2>
          <p className="text-ink-black/60 max-w-md mx-auto">
            Four quick questions to find the collection that matches your taste.
          </p>
        </div>

        {/* Quiz content */}
        <div className="max-w-2xl mx-auto">
          {currentStep === -1 && (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-burnt-orange/10 border-2 border-burnt-orange flex items-center justify-center">
                <Sparkles size={32} className="text-burnt-orange" />
              </div>
              <p className="text-lg mb-8">
                Ready to explore? Answer four questions and we'll point you toward your perfect collection.
              </p>
              <button
                onClick={() => setCurrentStep(0)}
                className="btn-retro"
              >
                START THE QUIZ →
              </button>
            </div>
          )}

          {currentStep >= 0 && currentStep < 4 && !showResult && (
            <div>
              {/* Progress */}
              <div className="flex gap-2 mb-8">
                {questions.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 flex-1 ${idx <= currentStep ? 'bg-burnt-orange' : 'bg-ink-black/10'}`}
                  />
                ))}
              </div>

              {/* Question */}
              <div className="mb-8">
                <span className="cat-number text-burnt-orange block mb-2">
                  QUESTION {currentStep + 1} OF {questions.length}
                </span>
                <h3 className="font-display text-2xl lg:text-3xl">
                  {questions[currentStep].question}
                </h3>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(currentStep, idx)}
                    className="p-4 text-left border-2 border-ink-black/20 hover:border-ink-black hover:bg-warm-cream transition-all group"
                  >
                    <span className="cat-number text-ink-black/30 block mb-1">0{idx + 1}</span>
                    <span className="font-semibold group-hover:text-burnt-orange transition-colors">
                      {option}
                    </span>
                  </button>
                ))}
              </div>

              {/* Back button */}
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="mt-6 text-sm font-semibold text-ink-black/50 hover:text-ink-black transition-colors"
                >
                  ← Previous question
                </button>
              )}
            </div>
          )}

          {showResult && (
            <div className="text-center">
              {/* Result card */}
              <div className="border-2 border-ink-black bg-aged-paper p-8 mb-8">
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-ink-black flex items-center justify-center"
                  style={{ backgroundColor: result.color + '20' }}
                >
                  <Sparkles size={28} style={{ color: result.color }} />
                </div>
                <span className="cat-number text-burnt-orange block mb-2">YOUR RETRO ERA</span>
                <h3 className="font-display text-2xl lg:text-3xl mb-4">{result.title}</h3>
                <p className="text-ink-black/70 mb-6 max-w-md mx-auto">{result.description}</p>

                {/* Recommended products */}
                {recommendedProducts.length > 0 && (
                  <div className="mb-6">
                    <span className="cat-number text-ink-black/40 block mb-3">RECOMMENDED FOR YOU</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {recommendedProducts.map(product => (
                        <button
                          key={product.id}
                          onClick={() => {
                            dispatch({ type: 'SET_SELECTED_PRODUCT', product });
                          }}
                          className="p-3 border border-ink-black/10 hover:border-ink-black text-left transition-colors"
                        >
                          <div className="w-full aspect-square mb-2 border border-ink-black/10 overflow-hidden bg-aged-paper">
                            {product.image.startsWith('http') ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div
                                className="w-full h-full"
                                style={{ background: product.image }}
                              />
                            )}
                          </div>
                          <span className="text-sm font-semibold truncate block">{product.name}</span>
                          <span className="font-mono text-xs">${product.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Collection link */}
                {matchedCollection && (
                  <button
                    onClick={() => {
                      dispatch({ type: 'SET_ACTIVE_CATEGORY', category: matchedCollection.categories[0] });
                      document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-retro inline-flex items-center gap-2"
                  >
                    EXPLORE {matchedCollection.name.toUpperCase()} <ArrowRight size={16} />
                  </button>
                )}
              </div>

              <button
                onClick={reset}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-black/60 hover:text-ink-black transition-colors"
              >
                <RotateCcw size={14} />
                START AGAIN
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
