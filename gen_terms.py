import json

with open('merged_terms.json', 'r') as f:
    data = json.load(f)

# Hardcoded image mappings for key terms
image_map = {
    "exchange": "/images/trading_exchange_premium_1770901266341.png",
    "portfolio": "/images/trading_portfolio_glass_1770901643048.png",
    "bot": "/images/trading_bot_automator_1770901311857.png",
    "candles": "/images/trading_candles_analysis_1770901367350.png",
    "risk-reward-ratio": "/images/trading_risk_shield_1770901456737.png",
    "market": "/images/trading_market_concept_1770907523865.png",
    "pair": "/images/trading_pair_btc_usdt_1770907568297.png",
    "signal": "/images/trading_signal_logic_1770907593658.png",
    "strategy": "/images/trading_strategy_blueprint_1770907625395.png",
    "instrument": "/images/trading_instrument_terminal_1770907737898.png",
    "metric": "/images/trading_metric_pulse_1770907760193.png",
    "vix": "/images/trading_vix_fear_index_1770907722884.png",
    "indicators": "/images/trading_indicator_macd_rsi_1770917295795.png",
    "order-book-imbalance": "/images/trading_order_book_imbalance_1770917362083.png",
    "long-position": "/images/trading_long_position_upward_1770917400117.png",
    "short-position": "/images/trading_short_position_downward_1770917435821.png",
    "take-profit": "/images/trading_take_profit_harvest_1770917518995.png",
    "stop-loss": "/images/trading_stop_loss_barrier_1770917629400.png",
    "leverage": "/images/trading_leverage_multiplier_1770917688320.png",
    "margin": "/images/trading_margin_vault_1770917783505.png",
    "liquidation": "/images/trading_liquidation_implosion_1770917818346.png",
    "spread": "/images/trading_spread_gap_1770917878921.png",
    "slippage": "/images/trading_slippage_execution_1770917962029.png",
    "sp500---spy---spx-": "/images/trading_spy_sp500_index_1770918359811.png",
    "dxy": "/images/trading_dxy_dollar_index_1770919227344.png",
    "nasdaq-100---qqq-": "/images/trading_nasdaq_tech_index_q2_1770920004375.png",
    "us10y-us-treasury-yield-": "/images/trading_us10y_bond_yield_q2_1770920026930.png",
    "order-book": "/images/trading_order_book_depth_1770920051662.png",
    "volatility": "/images/trading_volatility_energy_line_1770920088911.png",
    "liquidity": "/images/trading_liquidity_river_1770920125007.png",
    "risk-management": "/images/trading_risk_management_shield_v2_1770920287567.png",
    "portfolio": "/images/trading_portfolio_balanced_spheres_1770920312669.png",
    "signal": "/images/trading_signal_holographic_pulse_1770920340872.png",
    "exchange---trading-platform-": "/images/trading_exchange_global_hub_1770920364660.png",
    "arbitrage": "/images/trading_arbitrage_v2_premium_1770921124011.png",
    "short-squeeze": "/images/trading_short_squeeze_v2_premium_1770921203601.png",
    "market-maker": "/images/trading_market_maker_v2_premium_1770921261543.png",
    "hedge": "/images/trading_hedge_v2_premium_1770921312903.png",
    "order": "/images/trading_order_digital_contract_1770921360053.png",
    "asset": "/images/trading_asset_digital_gold_coin_1770921382542.png",
    "limit-order": "/images/trading_limit_order_target_v2_premium_1770921447011.png",
    "market-order": "/images/trading_market_order_lightning_v2_premium_1770921479686.png"
}

output = """export interface Term {
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

export const categories: Category[] = """

# Clean up data a bit
for cat in data:
    if not cat['terms']: continue
    for term in cat['terms']:
        if term['id'] in image_map:
            term['image'] = image_map[term['id']]

output += json.dumps(data, indent=2, ensure_ascii=False)
output += ";"

with open('website/src/data/terms.ts', 'w') as f:
    f.write(output)
