export interface Term {
  id: string;
  name: { [key: string]: string };
  description: { [key: string]: string };
  image?: string;
}

export interface Category {
  id: string;
  title: { [key: string]: string };
  terms: Term[];
}

export const languages = ['en', 'ru', 'zh'] as const;
export type Language = typeof languages[number];

export const translations = {
  en: {
    heroTitle: "Trading Terminology",
    heroSub: "The comprehensive dictionary for modern trading systems, algorithms, and market microstructure.",
    searchPlaceholder: "Search terms...",
    backToTop: "Back to top",
    allSystems: "All Systems",
    imagesNotice: "Images generated for conceptual visualization."
  },
  ru: {
    heroTitle: "Словарь Трейдинга",
    heroSub: "Полное руководство по торговым системам, алгоритмам и микроструктуре рынка.",
    searchPlaceholder: "Поиск терминов...",
    backToTop: "Наверх",
    allSystems: "Все системы",
    imagesNotice: "Изображения созданы для визуализации концепций."
  },
  zh: {
    heroTitle: "交易术语词典",
    heroSub: "现代交易系统、算法和市场微观结构的综合词典。",
    searchPlaceholder: "搜索术语...",
    backToTop: "回到顶部",
    allSystems: "所有系统",
    imagesNotice: "为概念可视化生成的图像。"
  }
};

export const categories: Category[] = [
  {
    "id": "core-components",
    "title": {
      "en": "Core Components",
      "ru": "Основные компоненты",
      "zh": "核心组件"
    },
    "terms": [
      {
        "id": "exchange",
        "name": {
          "en": "Exchange",
          "ru": "Биржа (Exchange)",
          "zh": "交易所 (Exchange)"
        },
        "description": {
          "en": "a platform for trading cryptocurrencies (e.g., Binance, Kraken)",
          "ru": "площадка для торговли криптовалютами (например, Binance, Kraken)",
          "zh": "加密货币交易平台（例如：Binance、Kraken）"
        },
        "image": "/images/trading_exchange_premium_1770901266341.png"
      },
      {
        "id": "market",
        "name": {
          "en": "Market",
          "ru": "Рынок (Market)",
          "zh": "市场 (Market)"
        },
        "description": {
          "en": "a specific market on an exchange, such as futures or spot",
          "ru": "конкретный рынок на бирже, например фьючерсный или спотовый",
          "zh": "交易所的特定市场，如期货市场或现货市场"
        },
        "image": "/images/trading_market_concept_1770907523865.png"
      },
      {
        "id": "pair",
        "name": {
          "en": "Pair",
          "ru": "Пара (Pair)",
          "zh": "交易对 (Pair)"
        },
        "description": {
          "en": "an abstract pair of traded assets, e.g., BTC/USDT, not tied to a specific exchange",
          "ru": "абстрактная пара торгуемых активов, например BTC/USDT, не привязанная к конкретной бирже",
          "zh": "抽象的交易资产对，例如 BTC/USDT，不绑定到特定交易所"
        },
        "image": "/images/trading_pair_btc_usdt_1770907568297.png"
      },
      {
        "id": "instrument",
        "name": {
          "en": "Instrument",
          "ru": "Инструмент (Instrument)",
          "zh": "工具 (Instrument)"
        },
        "description": {
          "en": "a specific trading pair tied to a specific market (and therefore a specific exchange)",
          "ru": "конкретная торговая пара, привязанная к конкретному рынку (а значит и конкретной бирже)",
          "zh": "绑定到特定市场（因此绑定到特定交易所）的特定交易对"
        },
        "image": "/images/trading_instrument_terminal_focus_v2_premium_1770923462404.png"
      },
      {
        "id": "portfolio",
        "name": {
          "en": "Portfolio",
          "ru": "Портфолио (Portfolio)",
          "zh": "投资组合 (Portfolio)"
        },
        "description": {
          "en": "a virtual wallet with assets, tracks balance and positions",
          "ru": "виртуальный кошелек с активами, отслеживает баланс и позиции",
          "zh": "包含资产的虚拟钱包，跟踪余额和仓位"
        },
        "image": "/images/trading_portfolio_balanced_spheres_1770920312669.png"
      },
      {
        "id": "metric",
        "name": {
          "en": "Metric",
          "ru": "Метрика (Metric)",
          "zh": "指标 (Metric)"
        },
        "description": {
          "en": "a component for generating metrics. Example: difference between opening and closing prices",
          "ru": "компонент для генерации метрик. Пример: разница между ценой открытия и закрытия",
          "zh": "生成指标的组件。例如：开盘价和收盘价之间的差异"
        },
        "image": "/images/trading_metric_pulse_1770907760193.png"
      },
      {
        "id": "signal",
        "name": {
          "en": "Signal",
          "ru": "Сигнал (Signal)",
          "zh": "信号 (Signal)"
        },
        "description": {
          "en": "a component for generating signals based on metrics. Example: if open > close, then buy; if open < close, then sell",
          "ru": "компонент для генерации сигналов на основе метрик. Пример: если open > close, то buy, если open < close, то sell",
          "zh": "基于指标生成信号的组件。例如：如果开盘价 > 收盘价，则买入；如果开盘价 < 收盘价，则卖出"
        },
        "image": "/images/trading_signal_holographic_pulse_1770920340872.png"
      },
      {
        "id": "strategy",
        "name": {
          "en": "Strategy",
          "ru": "Стратегия (Strategy)",
          "zh": "策略 (Strategy)"
        },
        "description": {
          "en": "takes a signal as input and outputs instructions for the bot",
          "ru": "принимает на вход сигнал, на выходе дает инструкции для бота",
          "zh": "接受信号作为输入，输出机器人指令"
        },
        "image": "/images/trading_strategy_blueprint_1770907625395.png"
      },
      {
        "id": "bot",
        "name": {
          "en": "Bot",
          "ru": "Бот (Bot)",
          "zh": "机器人 (Bot)"
        },
        "description": {
          "en": "code that knows how to trade based on a signal or without one",
          "ru": "код, который знает как торговать по сигналу или без него",
          "zh": "知道如何基于信号或无信号进行交易的代码"
        },
        "image": "/images/trading_bot_automator_1770901311857.png"
      },
      {
        "id": "bot-instance",
        "name": {
          "en": "Bot Instance",
          "ru": "Экземпляр бота (Bot Instance)",
          "zh": "机器人实例 (Bot Instance)"
        },
        "description": {
          "en": "an instance of a bot that takes a strategy and portfolio as input and generates trading orders",
          "ru": "экземпляр бота, принимает на вход стратегию и портфолио, генерирует торговые ордера",
          "zh": "机器人的实例，接受策略和投资组合作为输入，生成交易订单"
        },
        "image": "/images/trading_bot_instance_live_execution_premium_1770923568312.png"
      }
    ]
  },
  {
    "id": "basic-definitions",
    "title": {
      "en": "Basic Definitions",
      "ru": "Основные определения",
      "zh": "基本定义"
    },
    "terms": []
  },
  {
    "id": "system-components--panel-dashboard-",
    "title": {
      "en": "System Components (Panel/Dashboard)",
      "ru": "Примечания",
      "zh": "系统组件（面板/仪表板）"
    },
    "terms": [
      {
        "id": "sp500---spy---spx-",
        "name": {
          "en": "SP500 ($SPY, $SPX)",
          "ru": "SP500 ($SPY, $SPX)",
          "zh": "SP500 ($SPY, $SPX)"
        },
        "description": {
          "en": "the main US stock market index reflecting the performance of 500 largest companies. Often used as a baseline reference for analyzing overall market direction.",
          "ru": "the main US stock market index reflecting the performance of 500 largest companies. Often used as a baseline reference for analyzing overall market direction.",
          "zh": "反映500家最大公司表现的美国主要股票市场指数。通常用作分析整体市场方向的基准参考。"
        },
        "image": "/images/trading_spy_sp500_index_1770918359811.png"
      },
      {
        "id": "nasdaq-100---qqq---ndx-",
        "name": {
          "en": "Nasdaq 100 ($QQQ, $NDX)",
          "ru": "Nasdaq 100 ($QQQ, $NDX)",
          "zh": "纳斯达克100 ($QQQ, $NDX)"
        },
        "description": {
          "en": "US technology sector index. Large technology companies have significant influence on the global market.",
          "ru": "US technology sector index. Large technology companies have significant influence on the global market.",
          "zh": "美国科技板块指数。大型科技公司对全球市场有重大影响。"
        },
        "image": "/images/trading_nasdaq_100_tech_tower_premium_1770930528621.png"
      },
      {
        "id": "vix",
        "name": {
          "en": "VIX",
          "ru": "VIX",
          "zh": "VIX"
        },
        "description": {
          "en": "volatility index, often called the \"fear index\". High values indicate growing panic and probability of market decline, low values indicate a calm phase.",
          "ru": "volatility index, often called the \"fear index\". High values indicate growing panic and probability of market decline, low values indicate a calm phase.",
          "zh": "波动率指数，通常称为\"恐惧指数\"。高值表示恐慌情绪增长和市场下跌概率，低值表示平静阶段。"
        },
        "image": "/images/trading_vix_fear_index_1770907722884.png"
      },
      {
        "id": "dow-jones-industrial-average---dia---dji-",
        "name": {
          "en": "Dow Jones Industrial Average ($DIA, $DJI)",
          "ru": "Dow Jones Industrial Average ($DIA, $DJI)",
          "zh": "道琼斯工业平均指数 ($DIA, $DJI)"
        },
        "description": {
          "en": "index reflecting the state of the US industrial sector.",
          "ru": "index reflecting the state of the US industrial sector.",
          "zh": "反映美国工业板块状态的指数。"
        },
        "image": "/images/trading_dow_jones_industrial_premium_1770921637780.png"
      },
      {
        "id": "russell-2000---iwm---rut-",
        "name": {
          "en": "Russell 2000 ($IWM, $RUT)",
          "ru": "Russell 2000 ($IWM, $RUT)",
          "zh": "罗素2000 ($IWM, $RUT)"
        },
        "description": {
          "en": "small-cap index, often used to analyze \"second-tier\" trends and economic rotation.",
          "ru": "small-cap index, often used to analyze \"second-tier\" trends and economic rotation.",
          "zh": "小盘股指数，通常用于分析\"二线\"趋势和经济轮动。"
        },
        "image": "/images/trading_russell_2000_small_cap_premium_1770921663463.png"
      },
      {
        "id": "semiconductor-etf---smh---soxx-",
        "name": {
          "en": "Semiconductor ETF ($SMH, $SOXX)",
          "ru": "Semiconductor ETF ($SMH, $SOXX)",
          "zh": "半导体ETF ($SMH, $SOXX)"
        },
        "description": {
          "en": "sector ETF for semiconductors, indicator of sentiment in the technology industry.",
          "ru": "sector ETF for semiconductors, indicator of sentiment in the technology industry.",
          "zh": "半导体行业ETF，科技行业情绪指标。"
        }
      },
      {
        "id": "vvix",
        "name": {
          "en": "VVIX",
          "ru": "VVIX",
          "zh": "VVIX"
        },
        "description": {
          "en": "volatility of VIX volatility.",
          "ru": "volatility of VIX volatility.",
          "zh": "VIX波动率的波动率。"
        },
        "image": "/images/trading_vvix_volatility_of_volatility_1770921684375.png"
      },
      {
        "id": "s5fi",
        "name": {
          "en": "S5Fi",
          "ru": "S5Fi",
          "zh": "S5Fi"
        },
        "description": {
          "en": "percentage of S&P500 stocks trading above their 50-day moving average; important indicator of market overbought/oversold conditions.",
          "ru": "percentage of S&P500 stocks trading above their 50-day moving average; important indicator of market overbought/oversold conditions.",
          "zh": "在50日移动平均线之上交易的标普500股票百分比；市场超买/超卖状况的重要指标。"
        },
        "image": "/images/trading_s5fi_market_breadth_v2_premium_1770923485685.png"
      },
      {
        "id": "s5th",
        "name": {
          "en": "S5TH",
          "ru": "S5TH",
          "zh": "S5TH"
        },
        "description": {
          "en": "percentage of S&P500 stocks above their 200-day moving average; indicator of long-term trend health.",
          "ru": "percentage of S&P500 stocks above their 200-day moving average; indicator of long-term trend health.",
          "zh": "在200日移动平均线之上的标普500股票百分比；长期趋势健康指标。"
        },
        "image": "/images/trading_s5th_long_term_breadth_premium_1770923588123.png"
      },
      {
        "id": "vxn",
        "name": {
          "en": "VXN",
          "ru": "VXN",
          "zh": "VXN"
        },
        "description": {
          "en": "Nasdaq volatility index.",
          "ru": "Nasdaq volatility index.",
          "zh": "纳斯达克波动率指数。"
        },
        "image": "/images/trading_vxn_nasdaq_fear_v2_premium_1770923509823.png"
      },
      {
        "id": "us10y---us02y",
        "name": {
          "en": "US10Y / US02Y",
          "ru": "US10Y / US02Y",
          "zh": "US10Y / US02Y"
        },
        "description": {
          "en": "US government bond yields, help assess market sentiment and risks.",
          "ru": "US government bond yields, help assess market sentiment and risks.",
          "zh": "美国政府债券收益率，帮助评估市场情绪和风险。"
        },
        "image": "/images/trading_yield_curve_spread_balance_v2_premium_1770923530823.png"
      },
      {
        "id": "dxy",
        "name": {
          "en": "DXY",
          "ru": "DXY",
          "zh": "DXY"
        },
        "description": {
          "en": "US Dollar Index. DXY growth amid declining stocks often indicates flight to \"quality\".",
          "ru": "US Dollar Index. DXY growth amid declining stocks often indicates flight to \"quality\".",
          "zh": "美元指数。在股票下跌时DXY增长通常表示资金流向\"避险\"资产。"
        },
        "image": "/images/trading_dxy_dollar_index_1770919227344.png"
      },
      {
        "id": "macd--rsi--ema--ma",
        "name": {
          "en": "MACD, RSI, EMA, MA",
          "ru": "MACD, RSI, EMA, MA",
          "zh": "MACD、RSI、EMA、MA"
        },
        "description": {
          "en": "most popular technical indicators for analyzing trends, momentum, overbought/oversold zones.",
          "ru": "most popular technical indicators for analyzing trends, momentum, overbought/oversold zones.",
          "zh": "最流行的技术指标，用于分析趋势、动量、超买/超卖区域。"
        }
      },
      {
        "id": "mcclellan-oscillator",
        "name": {
          "en": "McClellan Oscillator",
          "ru": "McClellan Oscillator",
          "zh": "麦克莱伦振荡器"
        },
        "description": {
          "en": "market breadth and short-term overbought conditions.",
          "ru": "market breadth and short-term overbought conditions.",
          "zh": "市场广度和短期超买状况。"
        }
      },
      {
        "id": "seasonality-and-key-events",
        "name": {
          "en": "Seasonality and Key Events",
          "ru": "Seasonality and Key Events",
          "zh": "季节性和关键事件"
        },
        "description": {
          "en": "seasonal return variations, \"witching Friday\" and other calendar effects.",
          "ru": "seasonal return variations, \"witching Friday\" and other calendar effects.",
          "zh": "季节性回报变化、\"巫婆星期五\"和其他日历效应。"
        },
        "image": "/images/trading_seasonality_calendar_cycle_premium_1770930548583.png"
      },
      {
        "id": "order-book-imbalance",
        "name": {
          "en": "Order Book Imbalance",
          "ru": "Order Book Imbalance",
          "zh": "订单簿不平衡"
        },
        "description": {
          "en": "disproportion between the volume of buy orders (bids) and sell orders (asks) in the order book. High imbalance (e.g., bids >> asks) may indicate upcoming demand or preparation for a level \"buyout\", while the opposite situation indicates selling pressure. In aggregated (cluster) analysis, imbalance is calculated as the relative excess of volume on one side of the order book at a specific price level, or across the entire order book:",
          "ru": "disproportion between the volume of buy orders (bids) and sell orders (asks) in the order book. High imbalance (e.g., bids >> asks) may indicate upcoming demand or preparation for a level \"buyout\", while the opposite situation indicates selling pressure. In aggregated (cluster) analysis, imbalance is calculated as the relative excess of volume on one side of the order book at a specific price level, or across the entire order book:",
          "zh": "订单簿中买单量（买价）和卖单量（卖价）之间的不成比例。高不平衡（例如，买单 >> 卖单）可能表示即将到来的需求或准备\"买断\"水平，而相反的情况表示卖压。在聚合（集群）分析中，不平衡计算为特定价格水平或整个订单簿中一侧体积的相对过剩："
        },
        "image": "/images/trading_order_book_imbalance_1770917362083.png"
      }
    ]
  },
  {
    "id": "notes",
    "title": {
      "en": "Notes",
      "ru": "Метрики и Сигналы в торговых системах",
      "zh": "注释"
    },
    "terms": []
  },
  {
    "id": "metrics-and-signals-in-trading-systems",
    "title": {
      "en": "Metrics and Signals in Trading Systems",
      "ru": "Торговые графики и анализ данных",
      "zh": "交易系统中的指标和信号"
    },
    "terms": []
  },
  {
    "id": "trading-charts-and-data-analysis",
    "title": {
      "en": "Trading Charts and Data Analysis",
      "ru": "Типы ордеров и позиции (Order Types and Positions)",
      "zh": "交易图表和数据分析"
    },
    "terms": [
      {
        "id": "o--open-",
        "name": {
          "en": "O (Open)",
          "ru": "Рыночный ордер (Market Order)",
          "zh": "O（开盘价）"
        },
        "description": {
          "en": "opening price of the period",
          "ru": "ордер на покупку или продажу актива по текущей рыночной цене, исполняется немедленно",
          "zh": "时期开盘价"
        }
      },
      {
        "id": "h--high-",
        "name": {
          "en": "H (High)",
          "ru": "Лимитный ордер (Limit Order)",
          "zh": "H（最高价）"
        },
        "description": {
          "en": "maximum price reached during the period",
          "ru": "ордер на покупку или продажу актива по указанной цене или лучше",
          "zh": "时期内达到的最高价"
        }
      },
      {
        "id": "l--low-",
        "name": {
          "en": "L (Low)",
          "ru": "Стоп-ордер (Stop Order)",
          "zh": "L（最低价）"
        },
        "description": {
          "en": "minimum price reached during the period",
          "ru": "ордер, который активируется при достижении определенной цены",
          "zh": "时期内达到的最低价"
        }
      },
      {
        "id": "c--close-",
        "name": {
          "en": "C (Close)",
          "ru": "Стоп-лимитный ордер (Stop-Limit Order)",
          "zh": "C（收盘价）"
        },
        "description": {
          "en": "closing price of the period",
          "ru": "комбинация стоп и лимитного ордеров",
          "zh": "时期收盘价"
        }
      },
      {
        "id": "v--volume-",
        "name": {
          "en": "V (Volume)",
          "ru": "Тейк-профит (Take Profit)",
          "zh": "V（成交量）"
        },
        "description": {
          "en": "total trading volume during the period",
          "ru": "ордер на закрытие позиции с прибылью при достижении определенной цены",
          "zh": "时期内总交易量"
        }
      },
      {
        "id": "candle-body",
        "name": {
          "en": "Candle body",
          "ru": "Стоп-лосс (Stop Loss)",
          "zh": "K线实体"
        },
        "description": {
          "en": "a rectangle showing the difference between opening and closing prices",
          "ru": "ордер на закрытие позиции с убытком для ограничения потенциальных потерь",
          "zh": "显示开盘价和收盘价差异的矩形"
        }
      },
      {
        "id": "color",
        "name": {
          "en": "Color",
          "ru": "Трейлинг-стоп (Trailing Stop)",
          "zh": "颜色"
        },
        "description": {
          "en": "typically green (or white) for bullish candles (close > open) and red for bearish candles (close < open)",
          "ru": "динамический стоп-лосс, который следует за ценой при движении в выгодном направлении",
          "zh": "通常绿色（或白色）表示看涨K线（收盘价 > 开盘价），红色表示看跌K线（收盘价 < 开盘价）"
        }
      },
      {
        "id": "shadows-wicks",
        "name": {
          "en": "Shadows/Wicks",
          "ru": "OCO (One Cancels Other)",
          "zh": "影线/灯芯"
        },
        "description": {
          "en": "lines extending above and below the body, showing maximum and minimum prices",
          "ru": "пара связанных ордеров, при исполнении одного второй автоматически отменяется",
          "zh": "延伸到实体上方和下方的线，显示最高价和最低价"
        }
      },
      {
        "id": "upper-shadow",
        "name": {
          "en": "Upper shadow",
          "ru": "Айсберг-ордер (Iceberg Order)",
          "zh": "上影线"
        },
        "description": {
          "en": "line from the top of the body to the maximum price",
          "ru": "крупный ордер, разбитый на серию меньших для минимизации влияния на рынок",
          "zh": "从实体顶部到最高价的线"
        }
      },
      {
        "id": "lower-shadow",
        "name": {
          "en": "Lower shadow",
          "ru": "Условные ордера (Conditional Orders)",
          "zh": "下影线"
        },
        "description": {
          "en": "line from the bottom of the body to the minimum price",
          "ru": "ордера, активирующиеся при выполнении определенных условий помимо достижения цены",
          "zh": "从实体底部到最低价的线"
        }
      },
      {
        "id": "m1--m5--m15--m30",
        "name": {
          "en": "m1, m5, m15, m30",
          "ru": "Скрытые ордера (Hidden Orders)",
          "zh": "m1、m5、m15、m30"
        },
        "description": {
          "en": "1, 5, 15, 30 minutes",
          "ru": "ордера, которые не отображаются в публичном стакане до момента исполнения или частичного исполнения. Используются для сокрытия крупных торговых намерений.",
          "zh": "1、5、15、30分钟"
        }
      },
      {
        "id": "h1--h4",
        "name": {
          "en": "h1, h4",
          "ru": "Привязанные ордера (Pegged Orders)",
          "zh": "h1、h4"
        },
        "description": {
          "en": "1, 4 hours",
          "ru": "ордера, цена которых автоматически привязывается к определённому рыночному ориентиру (например, лучшая цена покупки/продажи или средняя цена) и изменяется вместе с ним.",
          "zh": "1、4小时"
        }
      },
      {
        "id": "d1",
        "name": {
          "en": "d1",
          "ru": "Дискреционные ордера (Discretionary Orders)",
          "zh": "d1"
        },
        "description": {
          "en": "1 day",
          "ru": "ордера, позволяющие брокеру или торговой системе исполнять их по цене в заданном диапазоне или при определённых условиях, что даёт гибкость для достижения лучшей цены или времени исполнения.",
          "zh": "1天"
        }
      },
      {
        "id": "w1",
        "name": {
          "en": "w1",
          "ru": "Блочное исполнение ордеров (Block Order Execution)",
          "zh": "w1"
        },
        "description": {
          "en": "1 week",
          "ru": "процесс исполнения крупных ордеров (блок-ордеров), часто вне публичного стакана или через специальные механизмы для минимизации рыночного воздействия и проскальзывания.",
          "zh": "1周"
        }
      },
      {
        "id": "m1",
        "name": {
          "en": "M1",
          "ru": "Длинная позиция (Long Position)",
          "zh": "M1"
        },
        "description": {
          "en": "1 month",
          "ru": "покупка актива с ожиданием роста его цены",
          "zh": "1个月"
        }
      },
      {
        "id": "bullish-engulfing",
        "name": {
          "en": "Bullish Engulfing",
          "ru": "Короткая позиция (Short Position)",
          "zh": "看涨吞没"
        },
        "description": {
          "en": "a reversal pattern where a bullish candle completely engulfs the previous bearish candle",
          "ru": "продажа актива с ожиданием падения его цены",
          "zh": "反转形态，看涨K线完全吞没前一根看跌K线"
        },
        "image": "/images/trading_bullish_engulfing_candle_premium_1770926182102.png"
      },
      {
        "id": "hammer",
        "name": {
          "en": "Hammer",
          "ru": "Размер позиции (Position Size)",
          "zh": "锤子"
        },
        "description": {
          "en": "a potential signal for a downtrend reversal, characterized by a small body and a long lower shadow",
          "ru": "количество единиц актива в позиции",
          "zh": "下降趋势反转的潜在信号，特征是小实体和长下影线"
        },
        "image": "/images/trading_hammer_pattern_reversal_premium_1770926717868.png"
      },
      {
        "id": "doji",
        "name": {
          "en": "Doji",
          "ru": "Маржа (Margin)",
          "zh": "十字星"
        },
        "description": {
          "en": "a candle with a very small body, indicating market indecision",
          "ru": "залог, необходимый для открытия позиции с кредитным плечом",
          "zh": "实体极小的K线，表明市场犹豫不决"
        },
        "image": "/images/trading_doji_star_indecision_premium_1770926693687.png"
      }
    ]
  },
  {
    "id": "order-types-and-positions",
    "title": {
      "en": "Order Types and Positions",
      "ru": "Индикаторы технического анализа",
      "zh": "订单类型和仓位"
    },
    "terms": [
      {
        "id": "market-order",
        "name": {
          "en": "Market Order",
          "ru": "Скользящая средняя",
          "zh": "市场订单"
        },
        "description": {
          "en": "an order to buy or sell an asset at the current market price, executed immediately",
          "ru": "индикатор, сглаживающий ценовые колебания для определения трендов",
          "zh": "以当前市价买入或卖出资产的订单，立即执行"
        },
        "image": "/images/trading_market_order_lightning_v2_premium_1770921479686.png"
      },
      {
        "id": "limit-order",
        "name": {
          "en": "Limit Order",
          "ru": "RSI (Индекс относительной силы)",
          "zh": "限价订单"
        },
        "description": {
          "en": "an order to buy or sell an asset at a specified price or better",
          "ru": "осциллятор, измеряющий скорость и изменение ценовых движений",
          "zh": "以指定价格或更好价格买入或卖出资产的订单"
        },
        "image": "/images/trading_limit_order_target_v2_premium_1770921447011.png"
      },
      {
        "id": "stop-order",
        "name": {
          "en": "Stop Order",
          "ru": "MACD (Схождение/расхождение скользящих средних)",
          "zh": "止损订单"
        },
        "description": {
          "en": "an order that activates when a certain price is reached",
          "ru": "индикатор, показывающий взаимосвязь между двумя скользящими средними",
          "zh": "达到特定价格时激活的订单"
        },
        "image": "/images/trading_stop_order_digital_sign_premium_1770930566781.png"
      },
      {
        "id": "stop-limit-order",
        "name": {
          "en": "Stop-Limit Order",
          "ru": "Полосы Боллинджера",
          "zh": "止损限价订单"
        },
        "description": {
          "en": "a combination of stop and limit orders",
          "ru": "индикатор волатильности, состоящий из скользящей средней и двух стандартных отклонений",
          "zh": "止损和限价订单的组合"
        },
        "image": "/images/trading_stop_limit_order_gate_premium_1770927352685.png"
      },
      {
        "id": "take-profit",
        "name": {
          "en": "Take Profit",
          "ru": "Объемные индикаторы",
          "zh": "止盈"
        },
        "description": {
          "en": "an order to close a position with profit when a certain price is reached",
          "ru": "OBV (On-Balance Volume), Volume Profile, CVD (Cumulative Volume Delta)",
          "zh": "达到特定价格时以盈利平仓的订单"
        },
        "image": "/images/trading_take_profit_harvest_1770917518995.png"
      },
      {
        "id": "stop-loss",
        "name": {
          "en": "Stop Loss",
          "ru": "Кумулятивная дельта объёма (CVD)",
          "zh": "止损"
        },
        "description": {
          "en": "an order to close a position with a loss to limit potential losses",
          "ru": "показывает суммарное давление покупателей (Buy Market Orders) против продавцов (Sell Market Orders) за выбранный период, начиная с стартовой точки. Рассчитывается как накопительная сумма разности между объёмом покупок по Ask и объёмом продаж по Bid для каждого бара или тика:",
          "zh": "以亏损平仓以限制潜在损失的订单"
        },
        "image": "/images/trading_stop_loss_barrier_1770917629400.png"
      },
      {
        "id": "trailing-stop",
        "name": {
          "en": "Trailing Stop",
          "ru": "Индикаторы импульса",
          "zh": "追踪止损"
        },
        "description": {
          "en": "a dynamic stop loss that follows the price when it moves in a favorable direction",
          "ru": "Momentum, Rate of Change (ROC)",
          "zh": "价格朝有利方向移动时跟随的动态止损"
        },
        "image": "/images/trading_trailing_stop_barrier_laser_v2_premium_1770927298445.png"
      },
      {
        "id": "oco--one-cancels-other-",
        "name": {
          "en": "OCO (One Cancels Other)",
          "ru": "Уровни Фибоначчи",
          "zh": "OCO（一个取消另一个）"
        },
        "description": {
          "en": "a pair of linked orders where execution of one automatically cancels the other",
          "ru": "инструмент технического анализа, основанный на числах Фибоначчи",
          "zh": "一对链接订单，其中一个的执行自动取消另一个"
        },
        "image": "/images/trading_oco_order_linked_nexus_premium_1770927392079.png"
      },
      {
        "id": "iceberg-order",
        "name": {
          "en": "Iceberg Order",
          "ru": "Волны Эллиотта",
          "zh": "冰山订单"
        },
        "description": {
          "en": "a large order split into a series of smaller ones to minimize market impact",
          "ru": "теория анализа рыночных циклов через волновые паттерны",
          "zh": "分割成一系列较小订单的大订单，以最小化市场影响"
        },
        "image": "/images/trading_iceberg_order_hidden_depth_v2_premium_1770926218050.png"
      },
      {
        "id": "conditional-orders",
        "name": {
          "en": "Conditional Orders",
          "ru": "Гармонические паттерны",
          "zh": "条件订单"
        },
        "description": {
          "en": "orders that activate when certain conditions besides price are met",
          "ru": "геометрические ценовые паттерны, основанные на числах Фибоначчи",
          "zh": "除价格外满足特定条件时激活的订单"
        }
      },
      {
        "id": "hidden-orders",
        "name": {
          "en": "Hidden Orders",
          "ru": "Hidden Orders",
          "zh": "隐藏订单"
        },
        "description": {
          "en": "orders that are not displayed in the public order book until they are executed or partially executed. Used to conceal large trading intentions.",
          "ru": "orders that are not displayed in the public order book until they are executed or partially executed. Used to conceal large trading intentions.",
          "zh": "在执行或部分执行之前不在公共订单簿中显示的订单。用于隐藏大型交易意图。"
        }
      },
      {
        "id": "pegged-orders",
        "name": {
          "en": "Pegged Orders",
          "ru": "Pegged Orders",
          "zh": "挂钩订单"
        },
        "description": {
          "en": "orders whose price is tied to a specific market benchmark (e.g., best bid/offer or mid-price) and automatically adjusts as that benchmark changes.",
          "ru": "orders whose price is tied to a specific market benchmark (e.g., best bid/offer or mid-price) and automatically adjusts as that benchmark changes.",
          "zh": "价格绑定到特定市场基准（例如最佳买价/卖价或中间价）并随该基准变化自动调整的订单。"
        }
      },
      {
        "id": "discretionary-orders",
        "name": {
          "en": "Discretionary Orders",
          "ru": "Discretionary Orders",
          "zh": "自由裁量订单"
        },
        "description": {
          "en": "orders that allow a broker or trading system to execute at a price within a specified range or under certain conditions, giving some flexibility in execution to achieve a better price or timing.",
          "ru": "orders that allow a broker or trading system to execute at a price within a specified range or under certain conditions, giving some flexibility in execution to achieve a better price or timing.",
          "zh": "允许经纪人或交易系统在指定范围内或特定条件下执行的订单，在执行中给予一定灵活性以获得更好价格或时机。"
        }
      },
      {
        "id": "block-order-execution",
        "name": {
          "en": "Block Order Execution",
          "ru": "Block Order Execution",
          "zh": "大宗订单执行"
        },
        "description": {
          "en": "the process of executing large orders (block orders) often outside the public order book or through specialized mechanisms to minimize market impact and price slippage.",
          "ru": "the process of executing large orders (block orders) often outside the public order book or through specialized mechanisms to minimize market impact and price slippage.",
          "zh": "通常在公共订单簿外或通过专门机制执行大型订单（大宗订单）的过程，以最小化市场影响和价格滑点。"
        },
        "image": "/images/trading_block_order_solid_execution_premium_1770927439138.png"
      },
      {
        "id": "long-position",
        "name": {
          "en": "Long Position",
          "ru": "Long Position",
          "zh": "多头仓位"
        },
        "description": {
          "en": "buying an asset with the expectation of its price increasing",
          "ru": "buying an asset with the expectation of its price increasing",
          "zh": "预期资产价格上涨而买入资产"
        },
        "image": "/images/trading_long_position_upward_1770917400117.png"
      },
      {
        "id": "short-position",
        "name": {
          "en": "Short Position",
          "ru": "Short Position",
          "zh": "空头仓位"
        },
        "description": {
          "en": "selling an asset with the expectation of its price decreasing",
          "ru": "selling an asset with the expectation of its price decreasing",
          "zh": "预期资产价格下跌而卖出资产"
        },
        "image": "/images/trading_short_position_downward_1770917435821.png"
      },
      {
        "id": "position-size",
        "name": {
          "en": "Position Size",
          "ru": "Position Size",
          "zh": "仓位大小"
        },
        "description": {
          "en": "the number of units of an asset in a position",
          "ru": "the number of units of an asset in a position",
          "zh": "仓位中资产的单位数量"
        },
        "image": "/images/trading_position_sizing_precise_allocation_premium_1770926872751.png"
      },
      {
        "id": "margin",
        "name": {
          "en": "Margin",
          "ru": "Margin",
          "zh": "保证金"
        },
        "description": {
          "en": "collateral required to open a position with leverage",
          "ru": "collateral required to open a position with leverage",
          "zh": "开立杠杆仓位所需的抵押品"
        },
        "image": "/images/trading_margin_vault_1770917783505.png"
      },
      {
        "id": "leverage",
        "name": {
          "en": "Leverage",
          "ru": "Leverage",
          "zh": "杠杆"
        },
        "description": {
          "en": "the ratio between position size and a trader's own funds",
          "ru": "the ratio between position size and a trader's own funds",
          "zh": "仓位大小与交易者自有资金的比率"
        },
        "image": "/images/trading_leverage_multiplier_1770917688320.png"
      },
      {
        "id": "deal-id",
        "name": {
          "en": "Deal ID",
          "ru": "Deal ID",
          "zh": "交易ID"
        },
        "description": {
          "en": "unique identifier",
          "ru": "unique identifier",
          "zh": "唯一标识符"
        }
      },
      {
        "id": "open-time",
        "name": {
          "en": "Open Time",
          "ru": "Open Time",
          "zh": "开放时间"
        },
        "description": {
          "en": "date and time of the first trade within the deal",
          "ru": "date and time of the first trade within the deal",
          "zh": "交易内第一笔交易的日期和时间"
        }
      },
      {
        "id": "close-time",
        "name": {
          "en": "Close Time",
          "ru": "Close Time",
          "zh": "关闭时间"
        },
        "description": {
          "en": "date and time of the last trade within the deal (if the deal is closed)",
          "ru": "date and time of the last trade within the deal (if the deal is closed)",
          "zh": "交易内最后一笔交易的日期和时间（如果交易已关闭）"
        }
      },
      {
        "id": "holding-period",
        "name": {
          "en": "Holding Period",
          "ru": "Holding Period",
          "zh": "持有期"
        },
        "description": {
          "en": "duration of the deal (from opening to closing)",
          "ru": "duration of the deal (from opening to closing)",
          "zh": "交易持续时间（从开放到关闭）"
        }
      },
      {
        "id": "status",
        "name": {
          "en": "Status",
          "ru": "Status",
          "zh": "状态"
        },
        "description": {
          "en": "open / closed / partially closed / canceled",
          "ru": "open / closed / partially closed / canceled",
          "zh": "开放 / 关闭 / 部分关闭 / 取消"
        }
      },
      {
        "id": "deal-type",
        "name": {
          "en": "Deal Type",
          "ru": "Deal Type",
          "zh": "交易类型"
        },
        "description": {
          "en": "long / short / arbitrage / spread / other",
          "ru": "long / short / arbitrage / spread / other",
          "zh": "多头 / 空头 / 套利 / 价差 / 其他"
        }
      },
      {
        "id": "strategy",
        "name": {
          "en": "Strategy",
          "ru": "Strategy",
          "zh": "策略"
        },
        "description": {
          "en": "which bot initiated the deal",
          "ru": "which bot initiated the deal",
          "zh": "哪个机器人发起的交易"
        },
        "image": "/images/trading_strategy_blueprint_1770907625395.png"
      },
      {
        "id": "user",
        "name": {
          "en": "User",
          "ru": "User",
          "zh": "用户"
        },
        "description": {
          "en": "which user initiated the deal",
          "ru": "which user initiated the deal",
          "zh": "哪个用户发起的交易"
        }
      },
      {
        "id": "asset-s-",
        "name": {
          "en": "Asset(s)",
          "ru": "Asset(s)",
          "zh": "资产"
        },
        "description": {
          "en": "symbol(s) of traded instruments (e.g., BTC/USDT)",
          "ru": "symbol(s) of traded instruments (e.g., BTC/USDT)",
          "zh": "交易工具的符号（例如BTC/USDT）"
        }
      },
      {
        "id": "list-of-trades--positions--and-orders",
        "name": {
          "en": "List of trades, positions, and orders",
          "ru": "List of trades, positions, and orders",
          "zh": "交易、仓位和订单列表"
        },
        "description": {
          "en": "all trades, positions, and orders included in the deal (including canceled ones)",
          "ru": "all trades, positions, and orders included in the deal (including canceled ones)",
          "zh": "交易中包含的所有交易、仓位和订单（包括已取消的）"
        }
      },
      {
        "id": "input",
        "name": {
          "en": "Input",
          "ru": "Input",
          "zh": "投入"
        },
        "description": {
          "en": "amount of invested funds (in USDT and base currency)",
          "ru": "amount of invested funds (in USDT and base currency)",
          "zh": "投资资金金额（以USDT和基础货币计）"
        }
      },
      {
        "id": "output",
        "name": {
          "en": "Output",
          "ru": "Output",
          "zh": "产出"
        },
        "description": {
          "en": "amount of withdrawn funds (in USDT and base currency)",
          "ru": "amount of withdrawn funds (in USDT and base currency)",
          "zh": "提取资金金额（以USDT和基础货币计）"
        }
      },
      {
        "id": "comment",
        "name": {
          "en": "Comment",
          "ru": "Comment",
          "zh": "备注"
        },
        "description": {
          "en": "free-form notes",
          "ru": "free-form notes",
          "zh": "自由格式注释"
        }
      },
      {
        "id": "tags",
        "name": {
          "en": "Tags",
          "ru": "Tags",
          "zh": "标签"
        },
        "description": {
          "en": "for filtering and analytics",
          "ru": "for filtering and analytics",
          "zh": "用于过滤和分析"
        }
      },
      {
        "id": "related-deals",
        "name": {
          "en": "Related deals",
          "ru": "Related deals",
          "zh": "相关交易"
        },
        "description": {
          "en": "e.g., if part of a strategy or series of deals",
          "ru": "e.g., if part of a strategy or series of deals",
          "zh": "例如，如果是策略或一系列交易的一部分"
        }
      },
      {
        "id": "platform-broker",
        "name": {
          "en": "Platform/Broker",
          "ru": "Platform/Broker",
          "zh": "平台/经纪商"
        },
        "description": {
          "en": "where the deal was executed",
          "ru": "where the deal was executed",
          "zh": "交易执行的地方"
        }
      }
    ]
  },
  {
    "id": "technical-analysis-indicators",
    "title": {
      "en": "Technical Analysis Indicators",
      "ru": "Типы анализа рынка",
      "zh": "技术分析指标"
    },
    "terms": [
      {
        "id": "moving-average",
        "name": {
          "en": "Moving Average",
          "ru": "Технический анализ (Technical Analysis)",
          "zh": "移动平均线"
        },
        "description": {
          "en": "an indicator that smooths price fluctuations to identify trends",
          "ru": "метод прогнозирования будущего изменения цен на основе изучения прошлых изменений цен и объемов торгов. Использует графики, паттерны, индикаторы.",
          "zh": "平滑价格波动以识别趋势的指标"
        },
        "image": "/images/trading_moving_average_smooth_flow_premium_1770927117296.png"
      },
      {
        "id": "rsi--relative-strength-index-",
        "name": {
          "en": "RSI (Relative Strength Index)",
          "ru": "Фундаментальный анализ (Fundamental Analysis)",
          "zh": "RSI（相对强弱指数）"
        },
        "description": {
          "en": "an oscillator measuring the speed and change of price movements",
          "ru": "метод оценки внутренней (справедливой) стоимости актива путем изучения экономических, финансовых и других качественных и количественных факторов. В криптовалютах это может включать анализ проекта, команды, технологии, токеномики, сообщества и общей рыночной конъюнктуры.",
          "zh": "测量价格变动速度和变化的振荡器"
        },
        "image": "/images/trading_rsi_oscillator_boundaries_premium_1770927140853.png"
      },
      {
        "id": "macd--moving-average-convergence-divergence-",
        "name": {
          "en": "MACD (Moving Average Convergence/Divergence)",
          "ru": "Анализ настроений (Sentimental Analysis)",
          "zh": "MACD（移动平均收敛/背离）"
        },
        "description": {
          "en": "an indicator showing the relationship between two moving averages",
          "ru": "оценка общего настроения или отношения участников рынка к определенному активу или рынку в целом. Источниками могут служить социальные сети, новостные статьи, форумы, опросы. Помогает понять, является ли рынок \"бычьим\" или \"медвежьим\" с точки зрения психологии толпы.",
          "zh": "显示两个移动平均线关系的指标"
        },
        "image": "/images/trading_macd_indicator_cross_premium_1770929667565.png"
      },
      {
        "id": "bollinger-bands",
        "name": {
          "en": "Bollinger Bands",
          "ru": "Bollinger Bands",
          "zh": "布林带"
        },
        "description": {
          "en": "a volatility indicator consisting of a moving average and two standard deviations",
          "ru": "a volatility indicator consisting of a moving average and two standard deviations",
          "zh": "由移动平均线和两个标准差组成的波动率指标"
        },
        "image": "/images/trading_bollinger_bands_volatility_envelope_premium_1770925592703.png"
      },
      {
        "id": "volume-indicators",
        "name": {
          "en": "Volume Indicators",
          "ru": "Volume Indicators",
          "zh": "成交量指标"
        },
        "description": {
          "en": "OBV (On-Balance Volume), Volume Profile, CVD (Cumulative Volume Delta)",
          "ru": "OBV (On-Balance Volume), Volume Profile, CVD (Cumulative Volume Delta)",
          "zh": "OBV（能量潮）、成交量分布、CVD（累积成交量差）"
        },
        "image": "/images/trading_volume_indicators_energy_skyscrapers_premium_1770930661867.png"
      },
      {
        "id": "cumulative-volume-delta--cvd-",
        "name": {
          "en": "Cumulative Volume Delta (CVD)",
          "ru": "Cumulative Volume Delta (CVD)",
          "zh": "累积成交量差（CVD）"
        },
        "description": {
          "en": "shows the cumulative pressure of buyers (Buy Market Orders) versus sellers (Sell Market Orders) over a selected period, starting from a reference point. Calculated as the running sum of the difference between buy volume at ask prices and sell volume at bid prices for each bar or tick:",
          "ru": "shows the cumulative pressure of buyers (Buy Market Orders) versus sellers (Sell Market Orders) over a selected period, starting from a reference point. Calculated as the running sum of the difference between buy volume at ask prices and sell volume at bid prices for each bar or tick:",
          "zh": "显示选定时期内买方（买入市场订单）与卖方（卖出市场订单）的累积压力，从参考点开始。计算为每根K线或tick的买价成交量与卖价成交量差值的累计和："
        }
      },
      {
        "id": "momentum-indicators",
        "name": {
          "en": "Momentum Indicators",
          "ru": "Momentum Indicators",
          "zh": "动量指标"
        },
        "description": {
          "en": "Momentum, Rate of Change (ROC)",
          "ru": "Momentum, Rate of Change (ROC)",
          "zh": "动量、变化率（ROC）"
        },
        "image": "/images/trading_momentum_indicators_tachometer_premium_1770930677230.png"
      },
      {
        "id": "fibonacci-levels",
        "name": {
          "en": "Fibonacci Levels",
          "ru": "Fibonacci Levels",
          "zh": "斐波那契水平"
        },
        "description": {
          "en": "a technical analysis tool based on Fibonacci numbers",
          "ru": "a technical analysis tool based on Fibonacci numbers",
          "zh": "基于斐波那契数列的技术分析工具"
        },
        "image": "/images/trading_fibonacci_levels_golden_ratio_premium_1770925572306.png"
      },
      {
        "id": "elliott-waves",
        "name": {
          "en": "Elliott Waves",
          "ru": "Elliott Waves",
          "zh": "艾略特波浪"
        },
        "description": {
          "en": "a theory of market cycle analysis through wave patterns",
          "ru": "a theory of market cycle analysis through wave patterns",
          "zh": "通过波浪模式进行市场周期分析的理论"
        },
        "image": "/images/trading_elliott_waves_crystal_peaks_v2_premium_1770927188740.png"
      },
      {
        "id": "harmonic-patterns",
        "name": {
          "en": "Harmonic Patterns",
          "ru": "Harmonic Patterns",
          "zh": "谐波形态"
        },
        "description": {
          "en": "geometric price patterns based on Fibonacci numbers",
          "ru": "geometric price patterns based on Fibonacci numbers",
          "zh": "基于斐波那契数列的几何价格形态"
        },
        "image": "/images/trading_harmonic_patterns_geometry_premium_1770929710390.png"
      }
    ]
  },
  {
    "id": "market-analysis-types",
    "title": {
      "en": "Market Analysis Types",
      "ru": "Рыночные концепции",
      "zh": "市场分析类型"
    },
    "terms": [
      {
        "id": "technical-analysis",
        "name": {
          "en": "Technical Analysis",
          "ru": "Маркетмейкер",
          "zh": "技术分析"
        },
        "description": {
          "en": "a method of forecasting future price movements based on studying past price changes and trading volumes. Uses charts, patterns, indicators.",
          "ru": "участник рынка, обеспечивающий ликвидность путем выставления одновременно ордеров на покупку и продажу. Основные функции:",
          "zh": "基于研究过去价格变化和交易量预测未来价格变动的方法。使用图表、形态、指标。"
        }
      },
      {
        "id": "fundamental-analysis",
        "name": {
          "en": "Fundamental Analysis",
          "ru": "Манипулятор",
          "zh": "基本面分析"
        },
        "description": {
          "en": "a method of assessing an asset's intrinsic (fair) value by examining economic, financial, and other qualitative and quantitative factors. In cryptocurrencies, this may include analyzing the project, team, technology, tokenomics, community, and overall market conditions.",
          "ru": "участник рынка, целенаправленно воздействующий на цену актива для получения прибыли от изменения цены. Основные стратегии:",
          "zh": "通过检查经济、金融和其他定性和定量因素评估资产内在（公允）价值的方法。在加密货币中，这可能包括分析项目、团队、技术、代币经济学、社区和整体市场条件。"
        },
        "image": "/images/trading_fundamental_analysis_deep_dive_v3_premium_1770925660117.png"
      },
      {
        "id": "sentimental-analysis",
        "name": {
          "en": "Sentimental Analysis",
          "ru": "Maker",
          "zh": "情绪分析"
        },
        "description": {
          "en": "the assessment of the overall mood or attitude of market participants towards a specific asset or the market as a whole. Sources can include social media, news articles, forums, and surveys. Helps to understand if the market is \"bullish\" or \"bearish\" from a crowd psychology perspective.",
          "ru": "трейдер, который размещает лимитные ордера, тем самым добавляя ликвидность в ордербук. Обычно получает более низкие комиссии на биржах.",
          "zh": "评估市场参与者对特定资产或整个市场的总体情绪或态度。来源可能包括社交媒体、新闻文章、论坛和调查。有助于从群体心理学角度了解市场是\"看涨\"还是\"看跌\"。"
        },
        "image": "/images/trading_sentiment_analysis_brain_hologram_v3_premium_1770927487566.png"
      }
    ]
  },
  {
    "id": "market-concepts",
    "title": {
      "en": "Market Concepts",
      "ru": "Управление рисками (Risk Management)",
      "zh": "市场概念"
    },
    "terms": [
      {
        "id": "market-maker",
        "name": {
          "en": "Market Maker",
          "ru": "Соотношение риска и прибыли (Risk-Reward Ratio)",
          "zh": "做市商"
        },
        "description": {
          "en": "a market participant who provides liquidity by simultaneously placing buy and sell orders. Main functions:",
          "ru": "отношение потенциальной прибыли к потенциальному убытку в сделке",
          "zh": "通过同时下买单和卖单提供流动性的市场参与者。主要功能："
        },
        "image": "/images/trading_market_maker_v2_premium_1770921261543.png"
      },
      {
        "id": "liquidity-provider",
        "name": {
          "en": "Liquidity Provider",
          "ru": "Просадка (Drawdown)",
          "zh": "流动性提供者"
        },
        "description": {
          "en": "an individual or institution that supplies buy and sell orders to the market, enhancing liquidity and facilitating smoother trading; can include market makers, banks, or specialized firms.",
          "ru": "снижение стоимости портфеля от пикового значения до минимума перед новым пиком",
          "zh": "向市场提供买卖订单、增强流动性并促进更顺畅交易的个人或机构；可以包括做市商、银行或专业公司。"
        }
      },
      {
        "id": "market-manipulator",
        "name": {
          "en": "Market Manipulator",
          "ru": "Размер позиции (Position Sizing)",
          "zh": "市场操纵者"
        },
        "description": {
          "en": "a market participant who deliberately influences an asset's price to profit from price changes. Main strategies:",
          "ru": "определение оптимального количества единиц актива для торговли с учетом риска",
          "zh": "故意影响资产价格以从价格变化中获利的市场参与者。主要策略："
        }
      },
      {
        "id": "maker",
        "name": {
          "en": "Maker",
          "ru": "Диверсификация (Diversification)",
          "zh": "挂单者"
        },
        "description": {
          "en": "a trader who places limit orders, thereby adding liquidity to the orderbook. Usually receives lower fees on exchanges.",
          "ru": "распределение капитала между различными активами для снижения риска",
          "zh": "下限价订单的交易者，从而向订单簿增加流动性。通常在交易所享受较低费用。"
        },
        "image": "/images/trading_maker_taker_liquidity_balance_premium_1770926815464.png"
      },
      {
        "id": "taker",
        "name": {
          "en": "Taker",
          "ru": "Стоимость под риском (Value at Risk, VaR)",
          "zh": "吃单者"
        },
        "description": {
          "en": "a trader who executes existing orders in the book, thereby removing liquidity from the market. Usually pays higher fees.",
          "ru": "статистическая оценка максимальных потенциальных убытков портфеля в течение определенного периода времени с заданной доверительной вероятностью",
          "zh": "执行簿中现有订单的交易者，从而从市场中移除流动性。通常支付较高费用。"
        },
        "image": "/images/trading_maker_taker_liquidity_balance_premium_1770926815464.png"
      },
      {
        "id": "liquidity-taker",
        "name": {
          "en": "Liquidity Taker",
          "ru": "Хеджирование (Hedging)",
          "zh": "流动性消费者"
        },
        "description": {
          "en": "a market participant who removes liquidity from the market by executing against existing orders in the order book, typically through market orders or aggressive limit orders.",
          "ru": "использование финансовых инструментов или рыночных стратегий для снижения риска неблагоприятных ценовых движений актива",
          "zh": "通过对订单簿中现有订单执行（通常通过市价订单或激进限价订单）从市场中移除流动性的市场参与者。"
        }
      },
      {
        "id": "institutional-trader",
        "name": {
          "en": "Institutional Trader",
          "ru": "Стресс-тестирование (Stress Testing)",
          "zh": "机构交易者"
        },
        "description": {
          "en": "a financial organization (bank, hedge fund, investment fund) trading in large volumes. Has significant resources, information, and can influence the market.",
          "ru": "метод анализа, при котором портфель или стратегия оцениваются в гипотетических экстремальных, но правдоподобных рыночных сценариях",
          "zh": "大量交易的金融组织（银行、对冲基金、投资基金）。拥有重要资源、信息，可以影响市场。"
        },
        "image": "/images/trading_institutional_trader_tech_boardroom_v2_premium_1770925551939.png"
      },
      {
        "id": "retail-trader",
        "name": {
          "en": "Retail Trader",
          "ru": "Алгоритмические системы управления рисками (Algorithmic Risk Controls)",
          "zh": "散户交易者"
        },
        "description": {
          "en": "an individual investor trading in relatively small volumes. Usually has limited resources and information.",
          "ru": "автоматизированные системы и правила, встроенные в торговые алгоритмы или платформы для мониторинга и ограничения рисков в реальном времени",
          "zh": "相对小量交易的个人投资者。通常拥有有限的资源和信息。"
        }
      },
      {
        "id": "arbitrageur",
        "name": {
          "en": "Arbitrageur",
          "ru": "Предторговые проверки рисков (Pre-trade Risk Controls)",
          "zh": "套利者"
        },
        "description": {
          "en": "a market participant who profits from price differences of the same asset on different markets or exchanges. Contributes to price efficiency.",
          "ru": "меры управления рисками, применяемые до отправки ордера",
          "zh": "从同一资产在不同市场或交易所的价格差异中获利的市场参与者。有助于价格效率。"
        }
      },
      {
        "id": "scalper",
        "name": {
          "en": "Scalper",
          "ru": "Постторговые проверки рисков (Post-trade Risk Controls)",
          "zh": "刷单者"
        },
        "description": {
          "en": "a trader who makes many short-term trades to get small profits from minor price movements. Often uses technical analysis and automated systems.",
          "ru": "процессы и проверки после исполнения сделки для контроля соответствия",
          "zh": "进行许多短期交易以从微小价格变动中获得小额利润的交易者。通常使用技术分析和自动化系统。"
        }
      },
      {
        "id": "whale",
        "name": {
          "en": "Whale",
          "ru": "Мониторинг рынка (Market Surveillance)",
          "zh": "巨鲸"
        },
        "description": {
          "en": "a market participant with extremely large funds who can significantly influence the price of an asset with their operations.",
          "ru": "постоянный мониторинг торговой активности и поведения рынка для выявления и предотвращения манипуляций",
          "zh": "拥有极大资金的市场参与者，其操作可以显著影响资产价格。"
        },
        "image": "/images/trading_whale_market_giant_premium_1770925463837.png"
      },
      {
        "id": "liquidity",
        "name": {
          "en": "Liquidity",
          "ru": "Аварийное отключение (Kill Switch)",
          "zh": "流动性"
        },
        "description": {
          "en": "a measure of how easily an asset can be bought or sold without significantly affecting its price",
          "ru": "механизм экстренного отключения торговых систем или отмены всех открытых ордеров для предотвращения дальнейших убытков",
          "zh": "资产在不显著影响其价格情况下买卖容易程度的度量"
        },
        "image": "/images/trading_liquidity_river_1770920125007.png"
      },
      {
        "id": "volume",
        "name": {
          "en": "Volume",
          "ru": "Защита от ошибок ввода (Fat-Finger Error Prevention)",
          "zh": "成交量"
        },
        "description": {
          "en": "the number of units of an asset traded during a specific period",
          "ru": "системы и проверки, предотвращающие случайный ввод ордеров с ошибочными параметрами",
          "zh": "特定时期内交易的资产单位数量"
        }
      },
      {
        "id": "market-depth",
        "name": {
          "en": "Market Depth",
          "ru": "Проверки кредитного риска (Credit Risk Checks)",
          "zh": "市场深度"
        },
        "description": {
          "en": "the market's ability to absorb large orders without significant price changes",
          "ru": "процедуры и автоматические проверки платёжеспособности трейдера или компании до отправки ордера",
          "zh": "市场吸收大额订单而不发生重大价格变化的能力"
        },
        "image": "/images/trading_market_depth_order_mountains_premium_1770930586049.png"
      },
      {
        "id": "support",
        "name": {
          "en": "Support",
          "ru": "Лимит позиции (Position Limit)",
          "zh": "支撑"
        },
        "description": {
          "en": "a price level where demand is strong enough to prevent further price decline",
          "ru": "максимальный допустимый размер позиции по активу или рынку",
          "zh": "需求足够强劲以防止价格进一步下跌的价格水平"
        },
        "image": "/images/trading_support_resistance_barriers_premium_1770924773286.png"
      },
      {
        "id": "resistance",
        "name": {
          "en": "Resistance",
          "ru": "Лимит частоты ордеров (Order Frequency Limit)",
          "zh": "阻力"
        },
        "description": {
          "en": "a price level where supply is strong enough to prevent further price increases",
          "ru": "ограничение на количество ордеров, которые можно отправить за определённый период",
          "zh": "供应足够强劲以防止价格进一步上涨的价格水平"
        },
        "image": "/images/trading_support_resistance_barriers_premium_1770924773286.png"
      },
      {
        "id": "price-gap",
        "name": {
          "en": "Price Gap",
          "ru": "Лимит стоимости ордера (Order Value Limit)",
          "zh": "价格缺口"
        },
        "description": {
          "en": "a sharp price change between two consecutive periods when there is no trading between them",
          "ru": "максимальная допустимая стоимость одного ордера или группы ордеров",
          "zh": "两个连续时期之间没有交易时的急剧价格变化"
        },
        "image": "/images/trading_price_gap_shattered_flow_premium_1770929785192.png"
      },
      {
        "id": "volatility",
        "name": {
          "en": "Volatility",
          "ru": "Контроль доступа к рынку (Market Access Controls)",
          "zh": "波动性"
        },
        "description": {
          "en": "a measure of an asset's price fluctuations",
          "ru": "системы и процедуры, регулирующие, кто и как может отправлять ордера на торговые площадки",
          "zh": "资产价格波动的度量"
        },
        "image": "/images/trading_volatility_energy_line_1770920088911.png"
      },
      {
        "id": "trend",
        "name": {
          "en": "Trend",
          "ru": "Алгоритмическое ребалансирование портфеля (Algorithmic Portfolio Rebalancing)",
          "zh": "趋势"
        },
        "description": {
          "en": "the general direction of an asset's price movement:",
          "ru": "автоматизированный процесс корректировки состава и долей активов в портфеле с помощью алгоритмов",
          "zh": "资产价格变动的总体方向："
        },
        "image": "/images/trading_trendline_momentum_vector_v3_premium_1770924985734.png"
      },
      {
        "id": "bid",
        "name": {
          "en": "Bid",
          "ru": "Bid",
          "zh": "买价"
        },
        "description": {
          "en": "the maximum price at which a trader is willing to buy an asset",
          "ru": "the maximum price at which a trader is willing to buy an asset",
          "zh": "交易者愿意买入资产的最高价格"
        },
        "image": "/images/trading_bid_buyer_hand_demand_premium_1770930606316.png"
      },
      {
        "id": "ask-offer",
        "name": {
          "en": "Ask/Offer",
          "ru": "Ask/Offer",
          "zh": "卖价/要价"
        },
        "description": {
          "en": "the minimum price at which a trader is willing to sell an asset",
          "ru": "the minimum price at which a trader is willing to sell an asset",
          "zh": "交易者愿意卖出资产的最低价格"
        },
        "image": "/images/trading_ask_seller_hand_supply_premium_1770930625426.png"
      },
      {
        "id": "spread",
        "name": {
          "en": "Spread",
          "ru": "Spread",
          "zh": "价差"
        },
        "description": {
          "en": "the difference between bid and ask prices",
          "ru": "the difference between bid and ask prices",
          "zh": "买价和卖价之间的差异"
        },
        "image": "/images/trading_spread_gap_1770917878921.png"
      },
      {
        "id": "quote",
        "name": {
          "en": "Quote",
          "ru": "Quote",
          "zh": "报价"
        },
        "description": {
          "en": "the current price of an asset on an exchange",
          "ru": "the current price of an asset on an exchange",
          "zh": "交易所上资产的当前价格"
        }
      },
      {
        "id": "mid-price",
        "name": {
          "en": "Mid Price",
          "ru": "Mid Price",
          "zh": "中间价"
        },
        "description": {
          "en": "the average value between bid and ask prices",
          "ru": "the average value between bid and ask prices",
          "zh": "买价和卖价之间的平均值"
        }
      },
      {
        "id": "tick-size",
        "name": {
          "en": "Tick Size",
          "ru": "Tick Size",
          "zh": "最小价位"
        },
        "description": {
          "en": "the minimum price increment by which the price of a financial instrument can change on a trading venue, affecting bid-ask spreads and market liquidity.",
          "ru": "the minimum price increment by which the price of a financial instrument can change on a trading venue, affecting bid-ask spreads and market liquidity.",
          "zh": "金融工具价格在交易场所可以变化的最小价格增量，影响买卖价差和市场流动性。"
        },
        "image": "/images/trading_tick_size_granularity_premium_1770929764494.png"
      }
    ]
  },
  {
    "id": "risk-management",
    "title": {
      "en": "Risk Management",
      "ru": "Технические аспекты торговых систем (Technical Aspects of Trading Systems)",
      "zh": "风险管理"
    },
    "terms": [
      {
        "id": "risk-reward-ratio",
        "name": {
          "en": "Risk-Reward Ratio",
          "ru": "API (Application Programming Interface, Интерфейс программирования приложений)",
          "zh": "风险回报比"
        },
        "description": {
          "en": "the ratio of potential profit to potential loss in a trade",
          "ru": "интерфейс, позволяющий программно взаимодействовать с биржей",
          "zh": "交易中潜在利润与潜在损失的比率"
        },
        "image": "/images/trading_risk_shield_1770901456737.png"
      },
      {
        "id": "drawdown",
        "name": {
          "en": "Drawdown",
          "ru": "Websocket",
          "zh": "回撤"
        },
        "description": {
          "en": "the decline in portfolio value from peak to trough before a new peak",
          "ru": "протокол для получения данных в реальном времени с биржи",
          "zh": "投资组合价值从峰值到谷底的下降，然后再创新高"
        },
        "image": "/images/trading_drawdown_cracked_glass_v2_premium_1770926342862.png"
      },
      {
        "id": "position-sizing",
        "name": {
          "en": "Position Sizing",
          "ru": "Ограничение запросов (Rate Limit)",
          "zh": "仓位规模"
        },
        "description": {
          "en": "determining the optimal number of asset units to trade considering risk",
          "ru": "максимальное количество запросов к API биржи за определенный период времени",
          "zh": "考虑风险确定交易的最佳资产单位数量"
        }
      },
      {
        "id": "diversification",
        "name": {
          "en": "Diversification",
          "ru": "Бэктестинг (Backtesting)",
          "zh": "多元化"
        },
        "description": {
          "en": "distributing capital among various assets to reduce risk",
          "ru": "процесс тестирования торговой стратегии на исторических данных",
          "zh": "在各种资产中分配资本以降低风险"
        }
      },
      {
        "id": "value-at-risk--var-",
        "name": {
          "en": "Value at Risk (VaR)",
          "ru": "Оптимизация (Optimization)",
          "zh": "风险价值（VaR）"
        },
        "description": {
          "en": "a statistical measure of the maximum potential loss of a portfolio over a specific period with a given confidence level (e.g., a 95% VaR of $1000 over 1 day means there is a 95% confidence that losses will not exceed $1000 within one day).",
          "ru": "процесс настройки параметров стратегии для улучшения результатов",
          "zh": "在给定置信水平下特定时期内投资组合最大潜在损失的统计度量（例如，1天95% VaR为$1000意味着有95%的置信度损失在一天内不会超过$1000）。"
        }
      },
      {
        "id": "hedging",
        "name": {
          "en": "Hedging",
          "ru": "Переобучение (Overfitting)",
          "zh": "对冲"
        },
        "description": {
          "en": "using financial instruments or market strategies to reduce the risk of adverse price movements in an asset. An example is opening a short futures position to hedge a long spot asset position.",
          "ru": "чрезмерная оптимизация стратегии под исторические данные, что может привести к плохим результатам на реальном рынке",
          "zh": "使用金融工具或市场策略降低资产不利价格变动风险。例子是开立空头期货仓位以对冲多头现货资产仓位。"
        },
        "image": "/images/trading_hedging_offsetting_positions_v2_premium_1770926915964.png"
      },
      {
        "id": "stress-testing",
        "name": {
          "en": "Stress Testing",
          "ru": "Алгоритмическая торговля (Algorithmic Trading)",
          "zh": "压力测试"
        },
        "description": {
          "en": "an analysis method where a portfolio or strategy is evaluated under hypothetical extreme but plausible market scenarios (e.g., a sharp market crash, liquidity crisis) to understand potential losses and resilience.",
          "ru": "использование компьютерных алгоритмов для автоматического выполнения торговых операций",
          "zh": "在假设极端但合理的市场情景（例如急剧市场崩盘、流动性危机）下评估投资组合或策略以了解潜在损失和韧性的分析方法。"
        }
      },
      {
        "id": "algorithmic-risk-controls",
        "name": {
          "en": "Algorithmic Risk Controls",
          "ru": "Высокочастотная торговля (High-Frequency Trading)",
          "zh": "算法风险控制"
        },
        "description": {
          "en": "automated systems and rules embedded in trading algorithms or platforms to monitor and limit risks in real-time, such as position size limits, maximum loss thresholds, and order frequency controls.",
          "ru": "алгоритмическая торговля с очень высокой скоростью и большим количеством сделок",
          "zh": "嵌入交易算法或平台中的自动化系统和规则，实时监控和限制风险，如仓位大小限制、最大损失阈值和订单频率控制。"
        }
      },
      {
        "id": "pre-trade-risk-controls",
        "name": {
          "en": "Pre-trade Risk Controls",
          "ru": "Задержка (Latency)",
          "zh": "交易前风险控制"
        },
        "description": {
          "en": "risk management measures applied before order submission to prevent erroneous or risky trades, such as maximum order size limits, price collars, fat-finger checks, and credit checks.",
          "ru": "время между отправкой ордера и его исполнением на бирже",
          "zh": "在订单提交前应用的风险管理措施，防止错误或风险交易，如最大订单大小限制、价格限制、胖手指检查和信用检查。"
        }
      },
      {
        "id": "post-trade-risk-controls",
        "name": {
          "en": "Post-trade Risk Controls",
          "ru": "Арбитраж",
          "zh": "交易后风险控制"
        },
        "description": {
          "en": "risk management processes and checks performed after trade execution to monitor compliance, detect errors, manage settlement risk, and ensure regulatory reporting.",
          "ru": "стратегия, использующая ценовые различия одного актива на разных биржах или рынках для получения безрисковой прибыли",
          "zh": "交易执行后执行的风险管理流程和检查，监控合规性、检测错误、管理结算风险并确保监管报告。"
        }
      },
      {
        "id": "market-surveillance",
        "name": {
          "en": "Market Surveillance",
          "ru": "Скальпинг",
          "zh": "市场监控"
        },
        "description": {
          "en": "the ongoing monitoring of trading activity and market behavior to detect and prevent manipulation, fraud, insider trading, and other abusive practices, ensuring market integrity and compliance with regulations.",
          "ru": "краткосрочная торговая стратегия, нацеленная на получение множества небольших прибылей за короткие промежутки времени",
          "zh": "持续监控交易活动和市场行为以检测和防止操纵、欺诈、内幕交易和其他滥用行为，确保市场诚信和监管合规。"
        }
      },
      {
        "id": "kill-switch",
        "name": {
          "en": "Kill Switch",
          "ru": "Свинг-трейдинг",
          "zh": "紧急停止开关"
        },
        "description": {
          "en": "an emergency mechanism that allows for the immediate shutdown of trading systems or the cancellation of all open orders to prevent further losses or mitigate systemic risk during extreme market events or technical failures.",
          "ru": "среднесрочная стратегия, при которой позиции удерживаются от нескольких дней до нескольких недель",
          "zh": "允许立即关闭交易系统或取消所有开放订单的紧急机制，在极端市场事件或技术故障期间防止进一步损失或减轻系统性风险。"
        }
      },
      {
        "id": "fat-finger-error-prevention",
        "name": {
          "en": "Fat-Finger Error Prevention",
          "ru": "Позиционный трейдинг",
          "zh": "胖手指错误预防"
        },
        "description": {
          "en": "safeguards and system checks designed to prevent accidental entry of orders with incorrect prices, sizes, or other parameters, such as confirmation prompts, maximum order size limits, and price deviation warnings.",
          "ru": "долгосрочная стратегия, при которой позиции удерживаются от нескольких недель до нескольких месяцев или даже лет",
          "zh": "旨在防止意外输入错误价格、大小或其他参数订单的保护措施和系统检查，如确认提示、最大订单大小限制和价格偏差警告。"
        }
      },
      {
        "id": "credit-risk-checks",
        "name": {
          "en": "Credit Risk Checks",
          "ru": "Трендовый трейдинг",
          "zh": "信用风险检查"
        },
        "description": {
          "en": "procedures and automated controls to assess a trader's or firm's ability to meet financial obligations before allowing order submission or trade execution, helping to prevent defaults and limit counterparty risk.",
          "ru": "использование трендов и повторяющихся движений на ценовых графиках для анализа общего направления активов",
          "zh": "在允许订单提交或交易执行前评估交易者或公司履行财务义务能力的程序和自动控制，帮助防止违约和限制对手方风险。"
        }
      },
      {
        "id": "position-limit",
        "name": {
          "en": "Position Limit",
          "ru": "Дневной трейдинг",
          "zh": "仓位限制"
        },
        "description": {
          "en": "a maximum allowable size of a position in a particular asset or market, set by exchanges, regulators, or risk managers to prevent excessive risk exposure and maintain market stability.",
          "ru": "покупка и продажа активов в течение одного торгового дня, позиции не переносятся на следующий день",
          "zh": "特定资产或市场中可允许的最大仓位大小，由交易所、监管机构或风险管理者设定，以防止过度风险暴露并维持市场稳定。"
        }
      },
      {
        "id": "order-frequency-limit",
        "name": {
          "en": "Order Frequency Limit",
          "ru": "Алгоритмы исполнения",
          "zh": "订单频率限制"
        },
        "description": {
          "en": "a restriction on the number of orders that can be submitted within a specific time period, implemented to prevent excessive trading activity, reduce system load, and mitigate risks associated with high-frequency trading.",
          "ru": "специальные алгоритмы для оптимального исполнения крупных ордеров (TWAP, VWAP, Iceberg)",
          "zh": "对特定时间段内可提交订单数量的限制，实施以防止过度交易活动、减少系统负载并减轻与高频交易相关的风险。"
        }
      },
      {
        "id": "order-value-limit",
        "name": {
          "en": "Order Value Limit",
          "ru": "Order Value Limit",
          "zh": "订单价值限制"
        },
        "description": {
          "en": "a maximum allowable value for a single order or a group of orders, set to prevent excessive exposure or unintended large trades, often enforced by exchanges or risk management systems.",
          "ru": "a maximum allowable value for a single order or a group of orders, set to prevent excessive exposure or unintended large trades, often enforced by exchanges or risk management systems.",
          "zh": "单个订单或一组订单的最大允许价值，设定以防止过度暴露或意外大额交易，通常由交易所或风险管理系统执行。"
        }
      },
      {
        "id": "market-access-controls",
        "name": {
          "en": "Market Access Controls",
          "ru": "Market Access Controls",
          "zh": "市场准入控制"
        },
        "description": {
          "en": "systems and procedures that regulate and monitor who can access trading venues, what types of orders can be submitted, and under what conditions, to prevent unauthorized or risky trading activity.",
          "ru": "systems and procedures that regulate and monitor who can access trading venues, what types of orders can be submitted, and under what conditions, to prevent unauthorized or risky trading activity.",
          "zh": "规范和监控谁可以访问交易场所、可以提交什么类型的订单以及在什么条件下的系统和程序，以防止未经授权或风险交易活动。"
        }
      },
      {
        "id": "self-match-prevention",
        "name": {
          "en": "Self-Match Prevention",
          "ru": "Self-Match Prevention",
          "zh": "自我匹配预防"
        },
        "description": {
          "en": "mechanisms that prevent a trader's own buy and sell orders from matching with each other on an exchange, reducing the risk of wash trades and ensuring genuine market activity.",
          "ru": "mechanisms that prevent a trader's own buy and sell orders from matching with each other on an exchange, reducing the risk of wash trades and ensuring genuine market activity.",
          "zh": "防止交易者自己的买单和卖单在交易所相互匹配的机制，减少洗盘交易风险并确保真正的市场活动。"
        }
      },
      {
        "id": "market-integrity",
        "name": {
          "en": "Market Integrity",
          "ru": "Market Integrity",
          "zh": "市场诚信"
        },
        "description": {
          "en": "the overall soundness, fairness, and transparency of a financial market, maintained through regulations, surveillance, and enforcement to ensure that all participants operate on a level playing field and that prices reflect true supply and demand.",
          "ru": "the overall soundness, fairness, and transparency of a financial market, maintained through regulations, surveillance, and enforcement to ensure that all participants operate on a level playing field and that prices reflect true supply and demand.",
          "zh": "金融市场的整体健全性、公平性和透明度，通过法规、监督和执法维持，确保所有参与者在公平竞争环境中操作，价格反映真实供需。"
        }
      },
      {
        "id": "insider-trading",
        "name": {
          "en": "Insider Trading",
          "ru": "Insider Trading",
          "zh": "内幕交易"
        },
        "description": {
          "en": "the illegal practice of trading financial instruments based on material, non-public information, giving an unfair advantage and undermining market integrity.",
          "ru": "the illegal practice of trading financial instruments based on material, non-public information, giving an unfair advantage and undermining market integrity.",
          "zh": "基于重要非公开信息进行金融工具交易的非法行为，给予不公平优势并破坏市场诚信。"
        }
      },
      {
        "id": "front-running",
        "name": {
          "en": "Front Running",
          "ru": "Front Running",
          "zh": "抢先交易"
        },
        "description": {
          "en": "the unethical or illegal practice of executing orders on a security for one's own account while taking advantage of advance knowledge of pending orders from clients or the market, typically to profit from the anticipated price movement.",
          "ru": "the unethical or illegal practice of executing orders on a security for one's own account while taking advantage of advance knowledge of pending orders from clients or the market, typically to profit from the anticipated price movement.",
          "zh": "在知道客户或市场待处理订单的情况下为自己账户执行证券订单的不道德或非法行为，通常为了从预期价格变动中获利。"
        }
      },
      {
        "id": "algorithmic-portfolio-rebalancing",
        "name": {
          "en": "Algorithmic Portfolio Rebalancing",
          "ru": "Algorithmic Portfolio Rebalancing",
          "zh": "算法投资组合再平衡"
        },
        "description": {
          "en": "an automated process of adjusting the composition and weights of assets in a portfolio using algorithms to maintain a desired asset allocation or follow a specific investment strategy.",
          "ru": "an automated process of adjusting the composition and weights of assets in a portfolio using algorithms to maintain a desired asset allocation or follow a specific investment strategy.",
          "zh": "使用算法自动调整投资组合中资产组成和权重以维持期望资产配置或遵循特定投资策略的过程。"
        }
      }
    ]
  },
  {
    "id": "technical-aspects-of-trading-systems",
    "title": {
      "en": "Technical Aspects of Trading Systems",
      "ru": "Анализ рыночной микроструктуры",
      "zh": "交易系统技术方面"
    },
    "terms": [
      {
        "id": "api--application-programming-interface-",
        "name": {
          "en": "API (Application Programming Interface)",
          "ru": "Поток ордеров",
          "zh": "API（应用程序编程接口）"
        },
        "description": {
          "en": "an interface allowing programmatic interaction with an exchange",
          "ru": "анализ последовательности поступающих на рынок ордеров",
          "zh": "允许与交易所进行程序化交互的接口"
        }
      },
      {
        "id": "websocket",
        "name": {
          "en": "Websocket",
          "ru": "Дисбаланс ордербука",
          "zh": "Websocket"
        },
        "description": {
          "en": "a protocol for receiving real-time data from an exchange",
          "ru": "соотношение объемов на стороне покупки и продажи",
          "zh": "从交易所接收实时数据的协议"
        },
        "image": "/images/trading_websocket_realtime_pulse_v2_premium_1770929746129.png"
      },
      {
        "id": "rate-limit",
        "name": {
          "en": "Rate Limit",
          "ru": "Рыночное влияние",
          "zh": "速率限制"
        },
        "description": {
          "en": "the maximum number of API requests to an exchange over a specific period",
          "ru": "изменение цены в результате исполнения крупного ордера",
          "zh": "特定时期内对交易所的最大API请求数"
        }
      },
      {
        "id": "backtesting",
        "name": {
          "en": "Backtesting",
          "ru": "Кластерный анализ",
          "zh": "回测"
        },
        "description": {
          "en": "the process of testing a trading strategy on historical data",
          "ru": "изучение объемов торгов на разных ценовых уровнях",
          "zh": "在历史数据上测试交易策略的过程"
        },
        "image": "/images/trading_backtesting_simulation_nexus_premium_1770926761561.png"
      },
      {
        "id": "optimization",
        "name": {
          "en": "Optimization",
          "ru": "Optimization",
          "zh": "优化"
        },
        "description": {
          "en": "the process of adjusting strategy parameters to improve results",
          "ru": "the process of adjusting strategy parameters to improve results",
          "zh": "调整策略参数以改善结果的过程"
        }
      },
      {
        "id": "overfitting",
        "name": {
          "en": "Overfitting",
          "ru": "Overfitting",
          "zh": "过拟合"
        },
        "description": {
          "en": "excessive optimization of a strategy to historical data, which may lead to poor results in the real market",
          "ru": "excessive optimization of a strategy to historical data, which may lead to poor results in the real market",
          "zh": "对历史数据的过度优化，可能导致实际市场中的糟糕结果"
        }
      },
      {
        "id": "algorithmic-trading",
        "name": {
          "en": "Algorithmic Trading",
          "ru": "Algorithmic Trading",
          "zh": "算法交易"
        },
        "description": {
          "en": "using computer algorithms to automatically execute trading operations",
          "ru": "using computer algorithms to automatically execute trading operations",
          "zh": "使用计算机算法自动执行交易操作"
        }
      },
      {
        "id": "high-frequency-trading",
        "name": {
          "en": "High-Frequency Trading",
          "ru": "High-Frequency Trading",
          "zh": "高频交易"
        },
        "description": {
          "en": "algorithmic trading with very high speed and a large number of trades",
          "ru": "algorithmic trading with very high speed and a large number of trades",
          "zh": "以极高速度和大量交易进行的算法交易"
        },
        "image": "/images/trading_hft_light_speed_execution_premium_1770924797543.png"
      },
      {
        "id": "high-frequency-trading-circuit-breakers",
        "name": {
          "en": "High Frequency Trading Circuit Breakers",
          "ru": "High Frequency Trading Circuit Breakers",
          "zh": "高频交易熔断器"
        },
        "description": {
          "en": "mechanisms or rules designed to temporarily halt or slow down high-frequency trading activities during periods of extreme market volatility to prevent flash crashes or systemic disruptions.",
          "ru": "mechanisms or rules designed to temporarily halt or slow down high-frequency trading activities during periods of extreme market volatility to prevent flash crashes or systemic disruptions.",
          "zh": "在极端市场波动期间暂时停止或放慢高频交易活动的机制或规则，以防止闪崩或系统性干扰。"
        }
      },
      {
        "id": "hft-order-anticipation-strategies",
        "name": {
          "en": "HFT Order Anticipation Strategies",
          "ru": "HFT Order Anticipation Strategies",
          "zh": "HFT订单预期策略"
        },
        "description": {
          "en": "high-frequency trading strategies that attempt to predict and react to the order flow of other market participants, often by analyzing patterns in order submissions and cancellations.",
          "ru": "high-frequency trading strategies that attempt to predict and react to the order flow of other market participants, often by analyzing patterns in order submissions and cancellations.",
          "zh": "试图预测和反应其他市场参与者订单流的高频交易策略，通常通过分析订单提交和取消模式。"
        }
      },
      {
        "id": "hft-quote-stuffing",
        "name": {
          "en": "HFT Quote Stuffing",
          "ru": "HFT Quote Stuffing",
          "zh": "HFT报价填充"
        },
        "description": {
          "en": "a high-frequency trading tactic involving the rapid submission and cancellation of a large number of orders to create confusion or delay in the market, often to gain a competitive advantage.",
          "ru": "a high-frequency trading tactic involving the rapid submission and cancellation of a large number of orders to create confusion or delay in the market, often to gain a competitive advantage.",
          "zh": "涉及快速提交和取消大量订单以在市场中制造混乱或延迟的高频交易策略，通常为了获得竞争优势。"
        }
      },
      {
        "id": "hft-momentum-ignition",
        "name": {
          "en": "HFT Momentum Ignition",
          "ru": "HFT Momentum Ignition",
          "zh": "HFT动量点燃"
        },
        "description": {
          "en": "a high-frequency trading strategy that involves initiating a series of trades to trigger price movements in a specific direction, often to profit from the resulting momentum or to induce other traders to follow.",
          "ru": "a high-frequency trading strategy that involves initiating a series of trades to trigger price movements in a specific direction, often to profit from the resulting momentum or to induce other traders to follow.",
          "zh": "涉及发起一系列交易以触发特定方向价格变动的高频交易策略，通常为了从由此产生的动量中获利或诱导其他交易者跟随。"
        }
      },
      {
        "id": "hft-spoofing-and-layering",
        "name": {
          "en": "HFT Spoofing and Layering",
          "ru": "HFT Spoofing and Layering",
          "zh": "HFT欺骗和分层"
        },
        "description": {
          "en": "high-frequency trading tactics where traders place and quickly cancel large orders (spoofing) or place multiple orders at different price levels (layering) to mislead other market participants about supply and demand, often to manipulate prices.",
          "ru": "high-frequency trading tactics where traders place and quickly cancel large orders (spoofing) or place multiple orders at different price levels (layering) to mislead other market participants about supply and demand, often to manipulate prices.",
          "zh": "高频交易策略，交易者下达并快速取消大额订单（欺骗）或在不同价格水平下达多个订单（分层）以误导其他市场参与者对供需的判断，通常为了操纵价格。"
        }
      },
      {
        "id": "adaptive-trading-algorithms",
        "name": {
          "en": "Adaptive Trading Algorithms",
          "ru": "Adaptive Trading Algorithms",
          "zh": "自适应交易算法"
        },
        "description": {
          "en": "trading algorithms capable of adjusting their parameters or logic in response to changing market conditions in real-time.",
          "ru": "trading algorithms capable of adjusting their parameters or logic in response to changing market conditions in real-time.",
          "zh": "能够实时调整其参数或逻辑以响应不断变化的市场条件的交易算法。"
        }
      },
      {
        "id": "latency",
        "name": {
          "en": "Latency",
          "ru": "Latency",
          "zh": "延迟"
        },
        "description": {
          "en": "the time between sending an order and its execution on an exchange",
          "ru": "the time between sending an order and its execution on an exchange",
          "zh": "发送订单到在交易所执行之间的时间"
        },
        "image": "/images/trading_latency_microsecond_trail_premium_1770926302797.png"
      },
      {
        "id": "arbitrage",
        "name": {
          "en": "Arbitrage",
          "ru": "Arbitrage",
          "zh": "套利"
        },
        "description": {
          "en": "a strategy using price differences of the same asset on different exchanges or markets to obtain risk-free profit",
          "ru": "a strategy using price differences of the same asset on different exchanges or markets to obtain risk-free profit",
          "zh": "利用同一资产在不同交易所或市场的价格差异获得无风险利润的策略"
        },
        "image": "/images/trading_arbitrage_v2_premium_1770921124011.png"
      },
      {
        "id": "scalping",
        "name": {
          "en": "Scalping",
          "ru": "Scalping",
          "zh": "刷单"
        },
        "description": {
          "en": "a short-term trading strategy aimed at making multiple small profits over short time intervals",
          "ru": "a short-term trading strategy aimed at making multiple small profits over short time intervals",
          "zh": "旨在在短时间间隔内获得多个小额利润的短期交易策略"
        },
        "image": "/images/trading_scalping_ultra_fast_execution_v2_premium_1770924947989.png"
      },
      {
        "id": "swing-trading",
        "name": {
          "en": "Swing Trading",
          "ru": "Swing Trading",
          "zh": "波段交易"
        },
        "description": {
          "en": "a medium-term strategy where positions are held from several days to several weeks",
          "ru": "a medium-term strategy where positions are held from several days to several weeks",
          "zh": "持仓几天到几周的中期策略"
        },
        "image": "/images/trading_swing_trading_pendulum_momentum_premium_1770925009791.png"
      },
      {
        "id": "position-trading",
        "name": {
          "en": "Position Trading",
          "ru": "Position Trading",
          "zh": "仓位交易"
        },
        "description": {
          "en": "a long-term strategy where positions are held from several weeks to several months or even years",
          "ru": "a long-term strategy where positions are held from several weeks to several months or even years",
          "zh": "持仓几周到几个月甚至几年的长期策略"
        }
      },
      {
        "id": "trend-trading",
        "name": {
          "en": "Trend Trading",
          "ru": "Trend Trading",
          "zh": "趋势交易"
        },
        "description": {
          "en": "using trends and recurring movements on price charts to analyze the general direction of assets",
          "ru": "using trends and recurring movements on price charts to analyze the general direction of assets",
          "zh": "使用价格图表上的趋势和重复运动分析资产总体方向"
        }
      },
      {
        "id": "day-trading",
        "name": {
          "en": "Day Trading",
          "ru": "Day Trading",
          "zh": "日内交易"
        },
        "description": {
          "en": "buying and selling assets within one trading day, positions are not carried over to the next day",
          "ru": "buying and selling assets within one trading day, positions are not carried over to the next day",
          "zh": "在一个交易日内买卖资产，仓位不过夜"
        },
        "image": "/images/trading_day_trading_high_speed_clock_premium_1770926845012.png"
      },
      {
        "id": "execution-algorithms",
        "name": {
          "en": "Execution Algorithms",
          "ru": "Execution Algorithms",
          "zh": "执行算法"
        },
        "description": {
          "en": "special algorithms for optimal execution of large orders (TWAP, VWAP, Iceberg)",
          "ru": "special algorithms for optimal execution of large orders (TWAP, VWAP, Iceberg)",
          "zh": "用于最优执行大型订单的特殊算法（TWAP、VWAP、冰山）"
        }
      }
    ]
  },
  {
    "id": "derivatives-trading",
    "title": {
      "en": "Derivatives Trading",
      "ru": "Риск-менеджмент и психология трейдинга",
      "zh": "衍生品交易"
    },
    "terms": [
      {
        "id": "perpetual-futures",
        "name": {
          "en": "Perpetual Futures",
          "ru": "Ожидаемая доходность",
          "zh": "永续期货"
        },
        "description": {
          "en": "a type of futures contract without an expiration date, which mimics the spot market but with the possibility of using leverage. The price is pegged to the spot price index through a funding rate mechanism.",
          "ru": "математическое ожидание результата торговой стратегии",
          "zh": "没有到期日的期货合约类型，模拟现货市场但可以使用杠杆。价格通过资金费率机制与现货价格指数挂钩。"
        }
      },
      {
        "id": "funding-rate",
        "name": {
          "en": "Funding Rate",
          "ru": "Максимальная просадка",
          "zh": "资金费率"
        },
        "description": {
          "en": "regular payments between holders of long and short positions in perpetual futures. If the rate is positive, longs pay shorts; if negative, shorts pay longs. This helps keep the futures price close to the spot price.",
          "ru": "наибольшее процентное снижение капитала от пика до минимума",
          "zh": "永续期货中多头和空头仓位持有者之间的定期付款。如果费率为正，多头支付空头；如果为负，空头支付多头。这有助于保持期货价格接近现货价格。"
        },
        "image": "/images/trading_funding_rate_balance_exchange_premium_1770926281100.png"
      },
      {
        "id": "open-interest",
        "name": {
          "en": "Open Interest",
          "ru": "Коэффициент Шарпа",
          "zh": "未平仓合约"
        },
        "description": {
          "en": "represents the total number of open contracts (futures/options) that have not been closed or exercised. Calculated as the total number of active open positions:",
          "ru": "показатель эффективности инвестиций с учетом риска",
          "zh": "代表尚未平仓或行权的开放合约（期货/期权）总数。计算为活跃开放仓位的总数："
        },
        "image": "/images/trading_open_interest_glowing_contracts_premium_1770925098599.png"
      },
      {
        "id": "initial-margin",
        "name": {
          "en": "Initial Margin",
          "ru": "Коэффициент Сортино",
          "zh": "初始保证金"
        },
        "description": {
          "en": "the minimum amount of funds a trader must deposit to open a leveraged position. Calculated as a percentage of the total position size.",
          "ru": "отношение прибыли к риску, учитывающее просадки",
          "zh": "交易者必须存入以开立杠杆仓位的最小资金金额。计算为总仓位大小的百分比。"
        }
      },
      {
        "id": "maintenance-margin",
        "name": {
          "en": "Maintenance Margin",
          "ru": "Альфа показатель",
          "zh": "维持保证金"
        },
        "description": {
          "en": "the minimum margin level that must be maintained in an account after opening a position. If the account balance falls below this level, a margin call or liquidation occurs.",
          "ru": "показатель эффективности торговой стратегии",
          "zh": "开立仓位后账户中必须维持的最小保证金水平。如果账户余额低于此水平，则发生保证金追缴或清算。"
        }
      },
      {
        "id": "liquidation",
        "name": {
          "en": "Liquidation",
          "ru": "Бета показатель",
          "zh": "清算"
        },
        "description": {
          "en": "the forced closure of a trader's position by the exchange when their margin falls below the maintenance margin level. This is done to prevent further losses that could exceed the trader's account funds.",
          "ru": "показатель чувствительности торговой стратегии к рыночному индексу",
          "zh": "当交易者保证金低于维持保证金水平时交易所强制平仓。这样做是为了防止可能超过交易者账户资金的进一步损失。"
        },
        "image": "/images/trading_liquidation_implosion_1770917818346.png"
      },
      {
        "id": "call-option",
        "name": {
          "en": "Call Option",
          "ru": "Коэффициент Кальмара",
          "zh": "看涨期权"
        },
        "description": {
          "en": "a contract giving the buyer the right (but not the obligation) to buy the underlying asset at a specified price (strike price) within a certain period or on a specific date (expiration date).",
          "ru": "отношение прибыли к максимальной просадке",
          "zh": "给予买方在特定时期内或特定日期（到期日）以指定价格（执行价格）买入标的资产的权利（但非义务）的合约。"
        }
      },
      {
        "id": "put-option",
        "name": {
          "en": "Put Option",
          "ru": "Коэффициент Келли",
          "zh": "看跌期权"
        },
        "description": {
          "en": "a contract giving the buyer the right (but not the obligation) to sell the underlying asset at a specified price (strike price) within a certain period or on a specific date (expiration date).",
          "ru": "оптимальная доля капитала для торговли",
          "zh": "给予买方在特定时期内或特定日期（到期日）以指定价格（执行价格）卖出标的资产的权利（但非义务）的合约。"
        }
      },
      {
        "id": "strike-price",
        "name": {
          "en": "Strike Price",
          "ru": "Когнитивные искажения",
          "zh": "执行价格"
        },
        "description": {
          "en": "the price at which the option holder can buy (for a call option) or sell (for a put option) the underlying asset.",
          "ru": "психологические предубеждения, влияющие на принятие торговых решений. Примеры:",
          "zh": "期权持有者可以买入（看涨期权）或卖出（看跌期权）标的资产的价格。"
        }
      },
      {
        "id": "expiration-date",
        "name": {
          "en": "Expiration Date",
          "ru": "Торговый журнал",
          "zh": "到期日"
        },
        "description": {
          "en": "the date after which the option contract becomes invalid.",
          "ru": "систематическая запись всех сделок и их анализ",
          "zh": "期权合约失效的日期。"
        }
      },
      {
        "id": "greeks",
        "name": {
          "en": "Greeks",
          "ru": "Greeks",
          "zh": "希腊字母"
        },
        "description": {
          "en": "a set of metrics used to measure various aspects of an option position's risk:",
          "ru": "a set of metrics used to measure various aspects of an option position's risk:",
          "zh": "用于测量期权仓位风险各个方面的一套指标："
        }
      }
    ]
  },
  {
    "id": "market-microstructure-analysis",
    "title": {
      "en": "Market Microstructure Analysis",
      "ru": "Технические аспекты и инфраструктура",
      "zh": "市场微观结构分析"
    },
    "terms": [
      {
        "id": "market-microstructure",
        "name": {
          "en": "Market Microstructure",
          "ru": "Colocation",
          "zh": "市场微观结构"
        },
        "description": {
          "en": "the study of the process and outcomes of exchanging assets under explicit trading rules, focusing on how specific trading mechanisms affect price formation, liquidity, transaction costs, and market efficiency.",
          "ru": "размещение торговых серверов в непосредственной близости от биржевых",
          "zh": "研究在明确交易规则下交换资产的过程和结果，专注于特定交易机制如何影响价格形成、流动性、交易成本和市场效率。"
        },
        "image": "/images/trading_market_microstructure_data_crystals_v2_premium_1770925527114.png"
      },
      {
        "id": "order-flow",
        "name": {
          "en": "Order Flow",
          "ru": "Latency arbitrage",
          "zh": "订单流"
        },
        "description": {
          "en": "analysis of the sequence of orders entering the market",
          "ru": "использование разницы во времени получения рыночных данных",
          "zh": "进入市场的订单序列分析"
        },
        "image": "/images/trading_order_flow_energy_streams_v3_premium_1770927234302.png"
      },
      {
        "id": "orderbook-imbalance",
        "name": {
          "en": "Orderbook Imbalance",
          "ru": "Сетевая инфраструктура",
          "zh": "订单簿不平衡"
        },
        "description": {
          "en": "the ratio of volumes on the buy and sell sides",
          "ru": "оптимизация сетевых соединений для минимизации задержек",
          "zh": "买卖双方成交量的比率"
        }
      },
      {
        "id": "market-impact",
        "name": {
          "en": "Market Impact",
          "ru": "Системы мониторинга",
          "zh": "市场影响"
        },
        "description": {
          "en": "price change resulting from the execution of a large order",
          "ru": "инструменты для отслеживания работы торговых алгоритмов в реальном времени",
          "zh": "执行大额订单导致的价格变化"
        },
        "image": "/images/trading_market_impact_ripple_premium_1770929813167.png"
      },
      {
        "id": "dark-pools",
        "name": {
          "en": "Dark Pools",
          "ru": "Dark Pools",
          "zh": "暗池"
        },
        "description": {
          "en": "private exchanges or trading venues where financial instruments are traded without displaying quotes publicly, allowing large blocks of securities to be bought or sold anonymously to minimize market impact.",
          "ru": "private exchanges or trading venues where financial instruments are traded without displaying quotes publicly, allowing large blocks of securities to be bought or sold anonymously to minimize market impact.",
          "zh": "在不公开显示报价的情况下交易金融工具的私人交易所或交易场所，允许大宗证券匿名买卖以最小化市场影响。"
        },
        "image": "/images/trading_dark_pool_hidden_liquidity_premium_v2_1770924840215.png"
      },
      {
        "id": "liquidity-fragmentation",
        "name": {
          "en": "Liquidity Fragmentation",
          "ru": "Liquidity Fragmentation",
          "zh": "流动性分散"
        },
        "description": {
          "en": "the dispersion of trading volume across multiple trading venues, exchanges, or platforms, which can result in reduced liquidity in any single venue and potentially wider spreads.",
          "ru": "the dispersion of trading volume across multiple trading venues, exchanges, or platforms, which can result in reduced liquidity in any single venue and potentially wider spreads.",
          "zh": "交易量在多个交易场所、交易所或平台上的分散，可能导致任何单一场所流动性减少并可能扩大价差。"
        }
      },
      {
        "id": "market-making-strategies",
        "name": {
          "en": "Market Making Strategies",
          "ru": "Market Making Strategies",
          "zh": "做市策略"
        },
        "description": {
          "en": "systematic approaches used by market makers to provide liquidity while managing risk and generating profit, typically involving simultaneous placement of buy and sell orders at different price levels with the goal of capturing the spread.",
          "ru": "systematic approaches used by market makers to provide liquidity while managing risk and generating profit, typically involving simultaneous placement of buy and sell orders at different price levels with the goal of capturing the spread.",
          "zh": "做市商用于在管理风险和产生利润的同时提供流动性的系统性方法，通常涉及在不同价格水平同时下买单和卖单，目标是获取价差。"
        }
      },
      {
        "id": "order-book-depth",
        "name": {
          "en": "Order Book Depth",
          "ru": "Order Book Depth",
          "zh": "订单簿深度"
        },
        "description": {
          "en": "a measure of the volume of orders at different price levels in the order book, indicating the market's ability to absorb large trades without significant price impact; deeper order books generally suggest higher liquidity.",
          "ru": "a measure of the volume of orders at different price levels in the order book, indicating the market's ability to absorb large trades without significant price impact; deeper order books generally suggest higher liquidity.",
          "zh": "订单簿中不同价格水平订单量的度量，表明市场吸收大额交易而不发生重大价格影响的能力；更深的订单簿通常表明更高的流动性。"
        }
      },
      {
        "id": "liquidity-aggregation",
        "name": {
          "en": "Liquidity Aggregation",
          "ru": "Liquidity Aggregation",
          "zh": "流动性聚合"
        },
        "description": {
          "en": "the process of combining liquidity from multiple sources, such as different exchanges or trading venues, to provide traders with better pricing, deeper order books, and improved execution quality.",
          "ru": "the process of combining liquidity from multiple sources, such as different exchanges or trading venues, to provide traders with better pricing, deeper order books, and improved execution quality.",
          "zh": "结合来自多个来源（如不同交易所或交易场所）的流动性的过程，为交易者提供更好的定价、更深的订单簿和改进的执行质量。"
        }
      },
      {
        "id": "order-matching-engine",
        "name": {
          "en": "Order Matching Engine",
          "ru": "Order Matching Engine",
          "zh": "订单匹配引擎"
        },
        "description": {
          "en": "the core system of a trading venue or exchange that automatically matches buy and sell orders based on price, time, and other criteria, ensuring fair and efficient trade execution.",
          "ru": "the core system of a trading venue or exchange that automatically matches buy and sell orders based on price, time, and other criteria, ensuring fair and efficient trade execution.",
          "zh": "交易场所或交易所的核心系统，根据价格、时间和其他标准自动匹配买卖订单，确保公平高效的交易执行。"
        },
        "image": "/images/trading_order_matching_engine_clockwork_v2_premium_1770926245903.png"
      },
      {
        "id": "cluster-analysis",
        "name": {
          "en": "Cluster Analysis",
          "ru": "Cluster Analysis",
          "zh": "集群分析"
        },
        "description": {
          "en": "studying trading volumes at different price levels",
          "ru": "studying trading volumes at different price levels",
          "zh": "研究不同价格水平的交易量"
        }
      }
    ]
  },
  {
    "id": "risk-management-and-trading-psychology",
    "title": {
      "en": "Risk Management and Trading Psychology",
      "ru": "Протоколы передачи торговых и рыночных данных (Trading and Market Data Protocols)",
      "zh": "风险管理和交易心理学"
    },
    "terms": [
      {
        "id": "expected-return",
        "name": {
          "en": "Expected Return",
          "ru": "FIX Protocol (Financial Information eXchange Protocol)",
          "zh": "预期回报"
        },
        "description": {
          "en": "the mathematical expectation of a trading strategy's result",
          "ru": "широко используемый протокол электронного обмена сообщениями для передачи торговых поручений и рыночных данных между финансовыми организациями в реальном времени",
          "zh": "交易策略结果的数学期望"
        }
      },
      {
        "id": "maximum-drawdown",
        "name": {
          "en": "Maximum Drawdown",
          "ru": "FIX/Fast",
          "zh": "最大回撤"
        },
        "description": {
          "en": "the largest percentage decrease in capital from peak to trough",
          "ru": "высокопроизводительный бинарный протокол, разработанный как расширение FIX для снижения задержек и экономии пропускной способности",
          "zh": "资本从峰值到谷底的最大百分比下降"
        }
      },
      {
        "id": "sharpe-ratio",
        "name": {
          "en": "Sharpe Ratio",
          "ru": "Plaza2",
          "zh": "夏普比率"
        },
        "description": {
          "en": "a measure of investment efficiency considering risk",
          "ru": "проприетарный высокоскоростной протокол торгов и рыночных данных, используемый Московской биржей",
          "zh": "考虑风险的投资效率度量"
        },
        "image": "/images/trading_sharpe_ratio_risk_adjusted_premium_1770926160413.png"
      },
      {
        "id": "sortino-ratio",
        "name": {
          "en": "Sortino Ratio",
          "ru": "Sortino Ratio",
          "zh": "索提诺比率"
        },
        "description": {
          "en": "a risk-adjusted return ratio that considers drawdowns",
          "ru": "a risk-adjusted return ratio that considers drawdowns",
          "zh": "考虑回撤的风险调整回报比率"
        }
      },
      {
        "id": "alpha-indicator",
        "name": {
          "en": "Alpha Indicator",
          "ru": "Alpha Indicator",
          "zh": "阿尔法指标"
        },
        "description": {
          "en": "a measure of trading strategy effectiveness",
          "ru": "a measure of trading strategy effectiveness",
          "zh": "交易策略有效性的度量"
        }
      },
      {
        "id": "beta-indicator",
        "name": {
          "en": "Beta Indicator",
          "ru": "Beta Indicator",
          "zh": "贝塔指标"
        },
        "description": {
          "en": "a measure of trading strategy sensitivity to a market index",
          "ru": "a measure of trading strategy sensitivity to a market index",
          "zh": "交易策略对市场指数敏感性的度量"
        }
      },
      {
        "id": "calmar-ratio",
        "name": {
          "en": "Calmar Ratio",
          "ru": "Calmar Ratio",
          "zh": "卡尔马比率"
        },
        "description": {
          "en": "the ratio of profit to maximum drawdown",
          "ru": "the ratio of profit to maximum drawdown",
          "zh": "利润与最大回撤的比率"
        }
      },
      {
        "id": "kelly-criterion",
        "name": {
          "en": "Kelly Criterion",
          "ru": "Kelly Criterion",
          "zh": "凯利准则"
        },
        "description": {
          "en": "the optimal proportion of capital for trading",
          "ru": "the optimal proportion of capital for trading",
          "zh": "交易的最优资本比例"
        },
        "image": "/images/trading_kelly_criterion_optimal_bet_v2_premium_1770926368677.png"
      },
      {
        "id": "cognitive-biases",
        "name": {
          "en": "Cognitive Biases",
          "ru": "Cognitive Biases",
          "zh": "认知偏差"
        },
        "description": {
          "en": "psychological biases affecting trading decisions. Examples:",
          "ru": "psychological biases affecting trading decisions. Examples:",
          "zh": "影响交易决策的心理偏差。例子："
        }
      },
      {
        "id": "trading-journal",
        "name": {
          "en": "Trading Journal",
          "ru": "Trading Journal",
          "zh": "交易日志"
        },
        "description": {
          "en": "a systematic record of all trades and their analysis",
          "ru": "a systematic record of all trades and their analysis",
          "zh": "所有交易及其分析的系统记录"
        }
      }
    ]
  },
  {
    "id": "technical-aspects-and-infrastructure",
    "title": {
      "en": "Technical Aspects and Infrastructure",
      "ru": "Криптовалютные термины (Cryptocurrency Terms)",
      "zh": "技术方面和基础设施"
    },
    "terms": [
      {
        "id": "colocation",
        "name": {
          "en": "Colocation",
          "ru": "Децентрализованная биржа (DEX, Decentralized Exchange)",
          "zh": "托管"
        },
        "description": {
          "en": "placing trading servers in close proximity to exchange servers",
          "ru": "децентрализованная биржа, работающая без центрального посредника",
          "zh": "将交易服务器放置在靠近交易所服务器的位置"
        }
      },
      {
        "id": "latency-arbitrage",
        "name": {
          "en": "Latency Arbitrage",
          "ru": "Автоматизированный маркет-мейкер (AMM, Automated Market Maker)",
          "zh": "延迟套利"
        },
        "description": {
          "en": "utilizing the time difference in receiving market data",
          "ru": "автоматизированный маркет-мейкер, используемый в DEX",
          "zh": "利用接收市场数据的时间差异"
        }
      },
      {
        "id": "hft-latency-arbitrage",
        "name": {
          "en": "HFT Latency Arbitrage",
          "ru": "Пул ликвидности (Liquidity Pool)",
          "zh": "HFT延迟套利"
        },
        "description": {
          "en": "a high-frequency trading strategy that exploits tiny time differences in market data transmission across exchanges or venues to profit from price discrepancies before they are corrected.",
          "ru": "пул ликвидности в децентрализованных протоколах",
          "zh": "利用交易所或场所间市场数据传输的微小时间差异从价格差异中获利的高频交易策略，在它们被纠正之前。"
        }
      },
      {
        "id": "network-infrastructure",
        "name": {
          "en": "Network Infrastructure",
          "ru": "Временная потеря (Impermanent Loss)",
          "zh": "网络基础设施"
        },
        "description": {
          "en": "optimizing network connections to minimize delays",
          "ru": "временная потеря стоимости при предоставлении ликвидности в AMM",
          "zh": "优化网络连接以最小化延迟"
        }
      },
      {
        "id": "monitoring-systems",
        "name": {
          "en": "Monitoring Systems",
          "ru": "Фарминг доходности (Yield Farming)",
          "zh": "监控系统"
        },
        "description": {
          "en": "tools for tracking the operation of trading algorithms in real-time",
          "ru": "процесс получения вознаграждения (часто в виде дополнительных токенов) за предоставление ликвидности или стейкинг криптовалют в DeFi протоколах",
          "zh": "实时跟踪交易算法运行的工具"
        }
      },
      {
        "id": "smart-order-router--sor-",
        "name": {
          "en": "Smart Order Router (SOR)",
          "ru": "Стейкинг (Staking)",
          "zh": "智能订单路由器（SOR）"
        },
        "description": {
          "en": "a system that automatically routes orders to various trading venues (exchanges, dark pools, etc.) to achieve the best execution based on price, speed, or other criteria. Also known as Smart Order Routing.",
          "ru": "процесс удержания криптовалюты в кошельке или на специальной платформе для поддержки операций блокчейна и получения вознаграждения",
          "zh": "自动将订单路由到各种交易场所（交易所、暗池等）的系统，基于价格、速度或其他标准实现最佳执行。也称为智能订单路由。"
        }
      },
      {
        "id": "order-routing",
        "name": {
          "en": "Order Routing",
          "ru": "Майнинг ликвидности (Liquidity Mining)",
          "zh": "订单路由"
        },
        "description": {
          "en": "the process of directing orders to different trading venues, exchanges, or liquidity providers to achieve optimal execution based on factors such as price, speed, and available liquidity.",
          "ru": "разновидность фарминга доходности, где пользователи получают токены управления протокола в обмен на предоставление ликвидности",
          "zh": "将订单定向到不同交易场所、交易所或流动性提供者的过程，基于价格、速度和可用流动性等因素实现最优执行。"
        }
      },
      {
        "id": "order-protection-rule",
        "name": {
          "en": "Order Protection Rule",
          "ru": "Обернутые активы (Wrapped Assets)",
          "zh": "订单保护规则"
        },
        "description": {
          "en": "a regulatory requirement or system feature designed to prevent orders from being executed at inferior prices when better prices are available on other trading venues, ensuring best execution for traders.",
          "ru": "токены, которые представляют собой актив из другого блокчейна",
          "zh": "设计用于防止订单在其他交易场所有更好价格时以较差价格执行的监管要求或系统功能，确保交易者的最佳执行。"
        }
      },
      {
        "id": "best-execution",
        "name": {
          "en": "Best Execution",
          "ru": "Оракулы (Oracles)",
          "zh": "最佳执行"
        },
        "description": {
          "en": "the obligation of brokers and trading systems to execute client orders on the most favorable terms available, considering factors such as price, speed, likelihood of execution, and overall cost.",
          "ru": "сервисы, которые поставляют смарт-контрактам данные из реального мира",
          "zh": "经纪商和交易系统在可用的最有利条件下执行客户订单的义务，考虑价格、速度、执行可能性和总成本等因素。"
        }
      },
      {
        "id": "transaction-cost-analysis--tca-",
        "name": {
          "en": "Transaction Cost Analysis (TCA)",
          "ru": "Мгновенные займы (Flash Loans)",
          "zh": "交易成本分析（TCA）"
        },
        "description": {
          "en": "a process of evaluating and measuring the costs associated with trading activities, including explicit costs (commissions, fees) and implicit costs (slippage, market impact), to assess execution quality and optimize trading strategies.",
          "ru": "особый тип незалоговых займов в DeFi, которые должны быть взяты и погашены в рамках одной блокчейн-транзакции",
          "zh": "评估和测量与交易活动相关成本的过程，包括显性成本（佣金、费用）和隐性成本（滑点、市场影响），以评估执行质量并优化交易策略。"
        }
      },
      {
        "id": "slippage-control",
        "name": {
          "en": "Slippage Control",
          "ru": "MEV (Miner Extractable Value / Maximum Extractable Value)",
          "zh": "滑点控制"
        },
        "description": {
          "en": "techniques and tools used to minimize the difference between the expected and actual execution price of a trade, such as setting slippage limits, using limit orders, or employing advanced execution algorithms.",
          "ru": "максимальная ценность, которую майнеры или валидаторы могут извлечь из производства блоков сверх стандартной награды за блок и комиссий за транзакции",
          "zh": "用于最小化交易预期和实际执行价格差异的技术和工具，如设置滑点限制、使用限价订单或采用高级执行算法。"
        },
        "image": "/images/trading_slippage_control_shield_premium_1770926739600.png"
      },
      {
        "id": "quote-matching",
        "name": {
          "en": "Quote Matching",
          "ru": "Эмиссия/Чеканка (Minting)",
          "zh": "报价匹配"
        },
        "description": {
          "en": "the process by which a trading system or exchange compares and pairs buy and sell quotes/orders based on price, time, and other criteria to facilitate trade execution.",
          "ru": "процесс создания новых токенов",
          "zh": "交易系统或交易所基于价格、时间和其他标准比较和配对买卖报价/订单以促进交易执行的过程。"
        }
      },
      {
        "id": "order-throttling",
        "name": {
          "en": "Order Throttling",
          "ru": "Вестинг (Vesting)",
          "zh": "订单限制"
        },
        "description": {
          "en": "the practice of limiting the rate at which orders can be submitted to a trading system or exchange, typically to prevent system overload, reduce risk, and ensure fair access for all participants.",
          "ru": "процесс постепенной разблокировки токенов, распределённых среди команды проекта, советников или ранних инвесторов",
          "zh": "限制可向交易系统或交易所提交订单速率的做法，通常用于防止系统过载、降低风险并确保所有参与者的公平访问。"
        }
      },
      {
        "id": "order-acknowledgement",
        "name": {
          "en": "Order Acknowledgement",
          "ru": "Сжигание токенов (Token Burn)",
          "zh": "订单确认"
        },
        "description": {
          "en": "a confirmation message sent by a trading system or exchange to notify the sender that an order has been received and accepted for processing, providing assurance of order status.",
          "ru": "процесс необратимого удаления определённого количества токенов из обращения",
          "zh": "交易系统或交易所发送的确认消息，通知发送者订单已被接收并接受处理，提供订单状态保证。"
        }
      },
      {
        "id": "order-fill-confirmation",
        "name": {
          "en": "Order Fill Confirmation",
          "ru": "Order Fill Confirmation",
          "zh": "订单成交确认"
        },
        "description": {
          "en": "a notification sent by a trading system or exchange to inform the trader that an order, or part of it, has been executed, including details such as price, quantity, and time of execution.",
          "ru": "a notification sent by a trading system or exchange to inform the trader that an order, or part of it, has been executed, including details such as price, quantity, and time of execution.",
          "zh": "交易系统或交易所发送的通知，告知交易者订单或其部分已被执行，包括价格、数量和执行时间等详细信息。"
        }
      },
      {
        "id": "drop-copy",
        "name": {
          "en": "Drop Copy",
          "ru": "Drop Copy",
          "zh": "副本拷贝"
        },
        "description": {
          "en": "a real-time copy of trade and order messages sent to a third-party system (such as risk management or compliance) for monitoring, auditing, or backup purposes.",
          "ru": "a real-time copy of trade and order messages sent to a third-party system (such as risk management or compliance) for monitoring, auditing, or backup purposes.",
          "zh": "发送给第三方系统（如风险管理或合规）的交易和订单消息实时副本，用于监控、审计或备份目的。"
        }
      },
      {
        "id": "heartbeat-message",
        "name": {
          "en": "Heartbeat Message",
          "ru": "Heartbeat Message",
          "zh": "心跳消息"
        },
        "description": {
          "en": "a periodic message exchanged between systems to confirm connectivity and session health, ensuring that communication channels remain active and responsive.",
          "ru": "a periodic message exchanged between systems to confirm connectivity and session health, ensuring that communication channels remain active and responsive.",
          "zh": "系统间交换的定期消息，确认连接性和会话健康，确保通信渠道保持活跃和响应。"
        }
      },
      {
        "id": "session-management",
        "name": {
          "en": "Session Management",
          "ru": "Session Management",
          "zh": "会话管理"
        },
        "description": {
          "en": "the processes and controls used to establish, maintain, and terminate communication sessions between trading systems, including authentication, authorization, and recovery from interruptions.",
          "ru": "the processes and controls used to establish, maintain, and terminate communication sessions between trading systems, including authentication, authorization, and recovery from interruptions.",
          "zh": "用于建立、维持和终止交易系统间通信会话的流程和控制，包括认证、授权和从中断中恢复。"
        }
      },
      {
        "id": "disaster-recovery",
        "name": {
          "en": "Disaster Recovery",
          "ru": "Disaster Recovery",
          "zh": "灾难恢复"
        },
        "description": {
          "en": "strategies and procedures for restoring trading operations and data after a major system failure, cyberattack, or other catastrophic event, ensuring business continuity and regulatory compliance.",
          "ru": "strategies and procedures for restoring trading operations and data after a major system failure, cyberattack, or other catastrophic event, ensuring business continuity and regulatory compliance.",
          "zh": "在重大系统故障、网络攻击或其他灾难性事件后恢复交易操作和数据的策略和程序，确保业务连续性和监管合规。"
        }
      },
      {
        "id": "udp-multicast",
        "name": {
          "en": "UDP Multicast",
          "ru": "UDP Multicast",
          "zh": "UDP组播"
        },
        "description": {
          "en": "a network communication method that allows data to be sent from one source to multiple recipients simultaneously, commonly used for distributing market data feeds with low latency.",
          "ru": "a network communication method that allows data to be sent from one source to multiple recipients simultaneously, commonly used for distributing market data feeds with low latency.",
          "zh": "允许数据从一个源同时发送到多个接收者的网络通信方法，通常用于低延迟分发市场数据源。"
        }
      },
      {
        "id": "tcp-ip",
        "name": {
          "en": "TCP/IP",
          "ru": "TCP/IP",
          "zh": "TCP/IP"
        },
        "description": {
          "en": "the foundational suite of communication protocols used for interconnecting network devices on the internet, providing reliable, ordered, and error-checked delivery of data.",
          "ru": "the foundational suite of communication protocols used for interconnecting network devices on the internet, providing reliable, ordered, and error-checked delivery of data.",
          "zh": "用于在互联网上互连网络设备的基础通信协议套件，提供可靠、有序和错误检查的数据传输。"
        }
      },
      {
        "id": "websocket",
        "name": {
          "en": "WebSocket",
          "ru": "WebSocket",
          "zh": "WebSocket"
        },
        "description": {
          "en": "a protocol providing full-duplex communication channels over a single TCP connection, widely used for real-time data streaming in trading platforms and exchanges.",
          "ru": "a protocol providing full-duplex communication channels over a single TCP connection, widely used for real-time data streaming in trading platforms and exchanges.",
          "zh": "在单个TCP连接上提供全双工通信渠道的协议，广泛用于交易平台和交易所的实时数据流。"
        },
        "image": "/images/trading_websocket_realtime_pulse_v2_premium_1770929746129.png"
      },
      {
        "id": "rest-api",
        "name": {
          "en": "REST API",
          "ru": "REST API",
          "zh": "REST API"
        },
        "description": {
          "en": "a web service interface based on Representational State Transfer principles, enabling programmatic access to trading and market data using standard HTTP methods.",
          "ru": "a web service interface based on Representational State Transfer principles, enabling programmatic access to trading and market data using standard HTTP methods.",
          "zh": "基于表述性状态转移原则的网络服务接口，使用标准HTTP方法启用对交易和市场数据的程序化访问。"
        },
        "image": "/images/trading_rest_api_endpoint_premium_1770925486840.png"
      },
      {
        "id": "grpc",
        "name": {
          "en": "gRPC",
          "ru": "gRPC",
          "zh": "gRPC"
        },
        "description": {
          "en": "a high-performance, open-source remote procedure call (RPC) framework that uses HTTP/2 for transport and Protocol Buffers for efficient serialization, suitable for low-latency trading system integration.",
          "ru": "a high-performance, open-source remote procedure call (RPC) framework that uses HTTP/2 for transport and Protocol Buffers for efficient serialization, suitable for low-latency trading system integration.",
          "zh": "使用HTTP/2进行传输和Protocol Buffers进行高效序列化的高性能开源远程过程调用（RPC）框架，适用于低延迟交易系统集成。"
        },
        "image": "/images/trading_grpc_efficient_nexus_premium_1770929688332.png"
      },
      {
        "id": "dma--direct-market-access-",
        "name": {
          "en": "DMA (Direct Market Access)",
          "ru": "DMA (Direct Market Access)",
          "zh": "DMA（直接市场访问）"
        },
        "description": {
          "en": "a technology that enables traders to place orders directly into the order books of exchanges, bypassing intermediaries and allowing for faster execution, lower latency, and greater control over trading strategies.",
          "ru": "a technology that enables traders to place orders directly into the order books of exchanges, bypassing intermediaries and allowing for faster execution, lower latency, and greater control over trading strategies.",
          "zh": "使交易者能够直接将订单放入交易所订单簿的技术，绕过中介机构，允许更快执行、更低延迟和对交易策略的更大控制。"
        }
      }
    ]
  },
  {
    "id": "trading-and-market-data-protocols",
    "title": {
      "en": "Trading and Market Data Protocols",
      "ru": "Торговля деривативами (Derivatives Trading)",
      "zh": "交易和市场数据协议"
    },
    "terms": [
      {
        "id": "fix-protocol",
        "name": {
          "en": "FIX Protocol",
          "ru": "Бессрочные фьючерсы (Perpetual Futures)",
          "zh": "FIX协议"
        },
        "description": {
          "en": "the Financial Information eXchange protocol, a widely used electronic communications protocol for real-time exchange of securities transactions and market data between financial institutions.",
          "ru": "тип фьючерсных контрактов без даты истечения срока действия",
          "zh": "金融信息交换协议，金融机构间实时交换证券交易和市场数据的广泛使用的电子通信协议。"
        },
        "image": "/images/trading_fix_protocol_data_bridge_premium_1770923303143.png"
      },
      {
        "id": "fix-fast",
        "name": {
          "en": "FIX/Fast",
          "ru": "Ставка финансирования (Funding Rate)",
          "zh": "FIX/Fast"
        },
        "description": {
          "en": "a high-performance binary encoding protocol developed as an extension to FIX, designed to reduce bandwidth and latency for market data and trading messages.",
          "ru": "регулярные платежи между держателями длинных и коротких позиций по бессрочным фьючерсам",
          "zh": "作为FIX扩展开发的高性能二进制编码协议，旨在减少市场数据和交易消息的带宽和延迟。"
        },
        "image": "/images/trading_fix_fast_high_performance_premium_v2_1770923345442.png"
      },
      {
        "id": "plaza2",
        "name": {
          "en": "Plaza2",
          "ru": "Открытый интерес",
          "zh": "Plaza2"
        },
        "description": {
          "en": "a proprietary high-speed trading and market data protocol used by the Moscow Exchange, optimized for low-latency electronic trading environments.",
          "ru": "отражает общее число открытых контрактов (фьючерсов/опционов), которые не были закрыты или исполнены. Рассчитывается как общее количество действующих открытых позиций:",
          "zh": "莫斯科交易所使用的专有高速交易和市场数据协议，针对低延迟电子交易环境优化。"
        },
        "image": "/images/trading_plaza2_exchange_protocol_premium_v2_1770923364375.png"
      }
    ]
  },
  {
    "id": "cryptocurrency-specific-terms",
    "title": {
      "en": "Cryptocurrency-Specific Terms",
      "ru": "Компоненты системы (Panel/Панель приборов)",
      "zh": "加密货币特定术语"
    },
    "terms": [
      {
        "id": "dex--decentralized-exchange-",
        "name": {
          "en": "DEX (Decentralized Exchange)",
          "ru": "SP500 ($SPY, $SPX)",
          "zh": "DEX（去中心化交易所）"
        },
        "description": {
          "en": "a decentralized exchange operating without a central intermediary",
          "ru": "основной индекс фондового рынка США, отражающий динамику 500 крупнейших компаний. Часто используется как базовый ориентир для анализа общего направления рынка.",
          "zh": "在没有中央中介的情况下运营的去中心化交易所"
        },
        "image": "/images/trading_dex_premium_v2_1770921976391.png"
      },
      {
        "id": "amm--automated-market-maker-",
        "name": {
          "en": "AMM (Automated Market Maker)",
          "ru": "Nasdaq 100 ($QQQ, $NDX)",
          "zh": "AMM（自动做市商）"
        },
        "description": {
          "en": "an automated market maker used in DEXs",
          "ru": "индекс технологического сектора США. Крупные технологические компании оказывают значительное влияние на общемировой рынок.",
          "zh": "DEX中使用的自动做市商"
        },
        "image": "/images/trading_amm_premium_v3_fixed_1770922988706.png"
      },
      {
        "id": "liquidity-pool",
        "name": {
          "en": "Liquidity Pool",
          "ru": "VIX",
          "zh": "流动性池"
        },
        "description": {
          "en": "a pool of liquidity in decentralized protocols",
          "ru": "индекс волатильности, часто называемый «индексом страха». Высокие значения указывают на растущую панику и вероятность снижения рынка, низкие — на спокойную фазу.",
          "zh": "去中心化协议中的流动性池"
        },
        "image": "/images/trading_liquidity_pool_glass_v3_1770922916237.png"
      },
      {
        "id": "impermanent-loss",
        "name": {
          "en": "Impermanent Loss",
          "ru": "Dow Jones Industrial Average ($DIA, $DJI)",
          "zh": "无常损失"
        },
        "description": {
          "en": "temporary value loss when providing liquidity in AMMs",
          "ru": "индекс, отражающий состояние промышленного сектора США.",
          "zh": "在AMM中提供流动性时的临时价值损失"
        },
        "image": "/images/trading_impermanent_loss_v3_premium_1770923012126.png"
      },
      {
        "id": "yield-farming",
        "name": {
          "en": "Yield Farming",
          "ru": "Russell 2000 ($IWM, $RUT)",
          "zh": "收益农场"
        },
        "description": {
          "en": "the process of earning rewards (often in the form of additional tokens) for providing liquidity or staking cryptocurrencies in DeFi protocols.",
          "ru": "индекс малых компаний, часто используется для анализа трендов \"второго эшелона\" и ротации в экономике.",
          "zh": "为在DeFi协议中提供流动性或质押加密货币而赚取奖励（通常以额外代币形式）的过程。"
        },
        "image": "/images/trading_yield_farming_harvest_v3_1770922942130.png"
      },
      {
        "id": "staking",
        "name": {
          "en": "Staking",
          "ru": "Semiconductor ETF ($SMH, $SOXX)",
          "zh": "质押"
        },
        "description": {
          "en": "the process of holding cryptocurrency in a wallet or on a special platform to support blockchain operations (e.g., validating transactions in Proof-of-Stake networks) and earn rewards.",
          "ru": "сектор ETF для полупроводников, индикатор настроений в технологической индустрии.",
          "zh": "在钱包或特殊平台上持有加密货币以支持区块链操作（例如在权益证明网络中验证交易）并赚取奖励的过程。"
        },
        "image": "/images/trading_staking_premium_v3_1770921900701.png"
      },
      {
        "id": "liquidity-mining",
        "name": {
          "en": "Liquidity Mining",
          "ru": "VVIX",
          "zh": "流动性挖矿"
        },
        "description": {
          "en": "a type of yield farming where users receive protocol governance tokens in exchange for providing liquidity.",
          "ru": "волатильность на волатильность VIX.",
          "zh": "一种收益农场类型，用户因提供流动性而获得协议治理代币。"
        },
        "image": "/images/trading_liquidity_mining_reward_premium_v3_retry_1770923397696.png"
      },
      {
        "id": "wrapped-assets",
        "name": {
          "en": "Wrapped Assets",
          "ru": "S5Fi",
          "zh": "包装资产"
        },
        "description": {
          "en": "tokens that represent an asset from another blockchain. For example, Wrapped Bitcoin (wBTC) is an ERC-20 token whose value is pegged to Bitcoin, allowing BTC to be used in the Ethereum DeFi ecosystem.",
          "ru": "доля акций S&P500, торгующихся выше своей 50-дневной скользящей средней; важный индикатор перекупленности/перепроданности рынка.",
          "zh": "代表另一个区块链资产的代币。例如，包装比特币（wBTC）是一个价值与比特币挂钩的ERC-20代币，允许BTC在以太坊DeFi生态系统中使用。"
        },
        "image": "/images/trading_wrapped_assets_bridged_premium_v4_retry_1770923219348.png"
      },
      {
        "id": "oracles",
        "name": {
          "en": "Oracles",
          "ru": "S5TH",
          "zh": "预言机"
        },
        "description": {
          "en": "services that supply smart contracts with real-world data (e.g., currency exchange rates, sports event outcomes) necessary for their correct operation.",
          "ru": "доля акций S&P500 выше своей 200-дневной скользящей средней; показатель состояния долгосрочного тренда.",
          "zh": "为智能合约提供现实世界数据（例如货币汇率、体育赛事结果）的服务，这些数据对其正确运行是必要的。"
        },
        "image": "/images/trading_oracles_data_bridge_premium_1770923035292.png"
      },
      {
        "id": "flash-loans",
        "name": {
          "en": "Flash Loans",
          "ru": "VXN",
          "zh": "闪电贷"
        },
        "description": {
          "en": "a special type of uncollateralized loans in DeFi that must be borrowed and repaid within a single blockchain transaction. Used for arbitrage, refinancing, and other complex operations.",
          "ru": "индекс волатильности на Nasdaq.",
          "zh": "DeFi中特殊类型的无抵押贷款，必须在单个区块链交易内借入和偿还。用于套利、再融资和其他复杂操作。"
        },
        "image": "/images/trading_flash_loans_instant_burst_premium_1770923058450.png"
      },
      {
        "id": "mev--miner-extractable-value---maximum-extractable-value-",
        "name": {
          "en": "MEV (Miner Extractable Value / Maximum Extractable Value)",
          "ru": "US10Y / US02Y",
          "zh": "MEV（矿工可提取价值/最大可提取价值）"
        },
        "description": {
          "en": "the maximum value that miners (in Proof-of-Work networks) or validators (in Proof-of-Stake networks) can extract from block production beyond the standard block reward and transaction fees, by including, excluding, or reordering transactions within a block.",
          "ru": "доходности государственных облигаций США, помогают оценить настроения и риски на рынке.",
          "zh": "矿工（在工作量证明网络中）或验证者（在权益证明网络中）通过在区块内包含、排除或重新排序交易，除了标准区块奖励和交易费用之外，可以从区块生产中提取的最大价值。"
        },
        "image": "/images/trading_mev_extraction_premium_v3_1770923166602.png"
      },
      {
        "id": "minting",
        "name": {
          "en": "Minting",
          "ru": "DXY",
          "zh": "铸造"
        },
        "description": {
          "en": "the process of creating new tokens. This can occur according to a predefined algorithm (e.g., in Proof-of-Stake during staking) or by the decision of the project team.",
          "ru": "индекс доллара США. Рост DXY на фоне снижения акций часто указывает на бегство в \"качество\".",
          "zh": "创建新代币的过程。这可以根据预定义算法（例如在权益证明中质押期间）或项目团队决定发生。"
        },
        "image": "/images/trading_minting_new_tokens_premium_v2_1770923101089.png"
      },
      {
        "id": "vesting",
        "name": {
          "en": "Vesting",
          "ru": "MACD, RSI, EMA, MA",
          "zh": "锁仓"
        },
        "description": {
          "en": "the process of gradually unlocking tokens distributed to the project team, advisors, or early investors. Usually occurs on a specific schedule to prevent a sharp drop in token price.",
          "ru": "наиболее популярные технические индикаторы для анализа трендов, силы движения, зон перекупленности/перепроданности.",
          "zh": "逐步解锁分发给项目团队、顾问或早期投资者的代币的过程。通常按特定时间表进行以防止代币价格急剧下跌。"
        },
        "image": "/images/trading_vesting_unlock_schedule_premium_1770923125655.png"
      },
      {
        "id": "token-burn",
        "name": {
          "en": "Token Burn",
          "ru": "McClellan Oscillator",
          "zh": "代币销毁"
        },
        "description": {
          "en": "the process of permanently removing a certain number of tokens from circulation. Used to reduce the total supply of tokens, which can potentially increase their value.",
          "ru": "ширина рынка и короткосрочная перекупленность.",
          "zh": "永久从流通中移除一定数量代币的过程。用于减少代币总供应量，可能增加其价值。"
        },
        "image": "/images/trading_token_burn_incinerator_premium_1770921848644.png"
      }
    ]
  }
];