import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [revenue, setRevenue] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => Math.min(prev + Math.random() * 50, 10000));
      setActiveUsers(prev => Math.min(prev + Math.floor(Math.random() * 5), 247));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-16 space-y-20">
        
        <section className="text-center space-y-6 animate-fade-in">
          <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm font-medium">
            <Icon name="Zap" size={16} className="mr-2" />
            Система пассивного дохода 24/7
          </Badge>
          <h1 className="font-heading text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            ИИ-Автоматизация<br />Непрерывного Дохода
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Методичное исполнение без вложений. Генерация контента и консультаций через ChatGPT API работает пока вы спите.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Запустить систему
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:border-primary">
              <Icon name="FileText" size={20} className="mr-2" />
              Читать план
            </Button>
          </div>
        </section>

        <section id="results" className="space-y-8 animate-fade-in">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3">Результаты в реальном времени</h2>
            <p className="text-muted-foreground text-lg">Живые метрики автоматизированной системы</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all animate-scale-in">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon name="DollarSign" size={24} className="text-primary" />
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 animate-pulse-glow">
                  Live
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Доход сегодня</p>
              <p className="font-heading text-4xl font-bold text-primary">${revenue.toFixed(2)}</p>
              <p className="text-xs text-green-400 mt-2 flex items-center">
                <Icon name="TrendingUp" size={14} className="mr-1" />
                +24.5% от вчера
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/40 transition-all animate-scale-in delay-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-secondary" />
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 animate-pulse-glow">
                  Live
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Активных пользователей</p>
              <p className="font-heading text-4xl font-bold text-secondary">{activeUsers}</p>
              <p className="text-xs text-green-400 mt-2 flex items-center">
                <Icon name="TrendingUp" size={14} className="mr-1" />
                +12 за последний час
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all animate-scale-in delay-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-accent" />
                </div>
                <Badge className="bg-accent/20 text-accent border-accent/30">
                  Auto
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">ИИ-запросов/день</p>
              <p className="font-heading text-4xl font-bold text-accent">1,847</p>
              <p className="text-xs text-muted-foreground mt-2">~77 запросов/час</p>
            </Card>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-2xl font-bold">График дохода (30 дней)</h3>
              <Badge className="bg-primary/20 text-primary border-primary/30">Прогноз: $15,000/мес</Badge>
            </div>
            <div className="space-y-4">
              {[
                { day: 'Пн', value: 85 },
                { day: 'Вт', value: 92 },
                { day: 'Ср', value: 78 },
                { day: 'Чт', value: 95 },
                { day: 'Пт', value: 88 },
                { day: 'Сб', value: 70 },
                { day: 'Вс', value: 65 }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground w-8">{item.day}</span>
                  <Progress value={item.value} className="flex-1" />
                  <span className="text-sm font-medium w-16 text-right">${(item.value * 10).toFixed(0)}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section id="automation" className="space-y-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3">Автоматизация процессов</h2>
            <p className="text-muted-foreground text-lg">Что работает без вашего участия</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Icon name="FileText" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Генерация контента</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Автоматическое создание статей, постов, описаний через ChatGPT API</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>SEO-оптимизация и публикация на платформах</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Адаптация под разные ниши и аудитории</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Монетизация через партнерки и рекламу</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30 hover:border-secondary/50 transition-all">
              <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <Icon name="MessageSquare" size={32} className="text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">ИИ-консультации</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Чат-бот консультант работает 24/7 без выходных</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Автоматический прием заявок и квалификация клиентов</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Персонализированные рекомендации и решения</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Прием платежей через интеграции</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section id="plan" className="space-y-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3">План без вложений</h2>
            <p className="text-muted-foreground text-lg">Пошаговая инструкция методичного исполнения</p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: 1,
                title: 'Подготовка (День 1-3)',
                items: [
                  'Регистрация на платформах: OpenAI, Telegram, Medium, Substack',
                  'Выбор ниши с высоким спросом (финансы, здоровье, бизнес)',
                  'Изучение ChatGPT API через бесплатные пробные кредиты',
                  'Создание базовых шаблонов для контента'
                ]
              },
              {
                step: 2,
                title: 'Запуск контента (День 4-10)',
                items: [
                  'Настройка автоматической генерации 3-5 статей/день',
                  'Публикация на Medium, Substack, личном блоге',
                  'Оптимизация SEO для органического трафика',
                  'Подключение партнерских программ (Amazon, ClickBank)'
                ]
              },
              {
                step: 3,
                title: 'ИИ-консультант (День 11-20)',
                items: [
                  'Создание Telegram-бота на базе ChatGPT API',
                  'Настройка сценариев консультаций и FAQ',
                  'Интеграция платежной системы (Stripe/PayPal)',
                  'Запуск рекламы через бесплатные каналы (форумы, соцсети)'
                ]
              },
              {
                step: 4,
                title: 'Масштабирование (День 21+)',
                items: [
                  'Анализ метрик и оптимизация конверсий',
                  'Расширение на новые платформы и ниши',
                  'Автоматизация рутины через Zapier/Make.com',
                  'Реинвестирование первых доходов в рекламу'
                ]
              }
            ].map((phase) => (
              <Card key={phase.step} className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 font-heading text-2xl font-bold">
                    {phase.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-bold mb-4">{phase.title}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <Icon name="ArrowRight" size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="tools" className="space-y-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3">Инструменты и интеграции</h2>
            <p className="text-muted-foreground text-lg">Технологический стек для автоматизации</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'ChatGPT API',
                icon: 'Bot',
                desc: 'Генерация контента и консультации',
                color: 'primary'
              },
              {
                name: 'Telegram Bot API',
                icon: 'Send',
                desc: 'Автоматический прием клиентов',
                color: 'accent'
              },
              {
                name: 'Stripe/PayPal',
                icon: 'CreditCard',
                desc: 'Прием платежей онлайн',
                color: 'secondary'
              },
              {
                name: 'Zapier/Make',
                icon: 'Workflow',
                desc: 'Автоматизация процессов',
                color: 'primary'
              },
              {
                name: 'Google Analytics',
                icon: 'BarChart3',
                desc: 'Аналитика и метрики',
                color: 'accent'
              },
              {
                name: 'Supabase',
                icon: 'Database',
                desc: 'Хранение данных клиентов',
                color: 'secondary'
              }
            ].map((tool, idx) => (
              <Card key={idx} className="p-6 bg-card/50 backdrop-blur border-muted hover:border-primary/40 transition-all hover:scale-105">
                <div className={`w-14 h-14 rounded-lg bg-${tool.color}/20 flex items-center justify-center mb-4`}>
                  <Icon name={tool.icon as any} size={28} className={`text-${tool.color}`} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30 text-center">
            <Icon name="Rocket" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="font-heading text-3xl font-bold mb-3">Готовы запустить систему?</h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Следуйте плану методично, один шаг за другим. Первые результаты появятся через 7-14 дней.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-10">
              <Icon name="Play" size={20} className="mr-2" />
              Начать прямо сейчас
            </Button>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default Index;
