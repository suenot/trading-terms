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
    "market-order": "/images/trading_market_order_lightning_v2_premium_1770921479686.png",
    "dow-jones-industrial-average---dia---dji-": "/images/trading_dow_jones_industrial_premium_1770921637780.png",
    "russell-2000---iwm---rut-": "/images/trading_russell_2000_small_cap_premium_1770921663463.png",
    "vvix": "/images/trading_vvix_volatility_of_volatility_1770921684375.png",
    "staking": "/images/trading_staking_premium_v3_1770921900701.png",
    "token-burn": "/images/trading_token_burn_incinerator_premium_1770921848644.png",
    "dex--decentralized-exchange-": "/images/trading_dex_premium_v2_1770921976391.png",
    "amm--automated-market-maker-": "/images/trading_amm_premium_v3_fixed_1770922988706.png",
    "liquidity-pool": "/images/trading_liquidity_pool_glass_v3_1770922916237.png",
    "yield-farming": "/images/trading_yield_farming_harvest_v3_1770922942130.png",
    "impermanent-loss": "/images/trading_impermanent_loss_v3_premium_1770923012126.png",
    "oracles": "/images/trading_oracles_data_bridge_premium_1770923035292.png",
    "flash-loans": "/images/trading_flash_loans_instant_burst_premium_1770923058450.png",
    "minting": "/images/trading_minting_new_tokens_premium_v2_1770923101089.png",
    "vesting": "/images/trading_vesting_unlock_schedule_premium_1770923125655.png",
    "mev--miner-extractable-value---maximum-extractable-value-": "/images/trading_mev_extraction_premium_v3_1770923166602.png",
    "wrapped-assets": "/images/trading_wrapped_assets_bridged_premium_v4_retry_1770923219348.png",
    "fix-protocol": "/images/trading_fix_protocol_data_bridge_premium_1770923303143.png",
    "fix-fast": "/images/trading_fix_fast_high_performance_premium_v2_1770923345442.png",
    "plaza2": "/images/trading_plaza2_exchange_protocol_premium_v2_1770923364375.png",
    "liquidity-mining": "/images/trading_liquidity_mining_reward_premium_v3_retry_1770923397696.png",
    "instrument": "/images/trading_instrument_terminal_focus_v2_premium_1770923462404.png",
    "s5fi": "/images/trading_s5fi_market_breadth_v2_premium_1770923485685.png",
    "s5th": "/images/trading_s5th_long_term_breadth_premium_1770923588123.png",
    "vxn": "/images/trading_vxn_nasdaq_fear_v2_premium_1770923509823.png",
    "us10y---us02y": "/images/trading_yield_curve_spread_balance_v2_premium_1770923530823.png",
    "bot-instance": "/images/trading_bot_instance_live_execution_premium_1770923568312.png",
    "support": "/images/trading_support_resistance_barriers_premium_1770924773286.png",
    "resistance": "/images/trading_support_resistance_barriers_premium_1770924773286.png",
    "high-frequency-trading": "/images/trading_hft_light_speed_execution_premium_1770924797543.png",
    "dark-pools": "/images/trading_dark_pool_hidden_liquidity_premium_v2_1770924840215.png",
    "scalping": "/images/trading_scalping_ultra_fast_execution_v2_premium_1770924947989.png",
    "swing-trading": "/images/trading_swing_trading_pendulum_momentum_premium_1770925009791.png",
    "open-interest": "/images/trading_open_interest_glowing_contracts_premium_1770925098599.png",
    "fundamental-analysis": "/images/trading_fundamental_analysis_deep_dive_v3_premium_1770925660117.png",
    "trend": "/images/trading_trendline_momentum_vector_v3_premium_1770924985734.png",
    "whale": "/images/trading_whale_market_giant_premium_1770925463837.png",
    "rest-api": "/images/trading_rest_api_endpoint_premium_1770925486840.png",
    "market-microstructure": "/images/trading_market_microstructure_data_crystals_v2_premium_1770925527114.png",
    "institutional-trader": "/images/trading_institutional_trader_tech_boardroom_v2_premium_1770925551939.png",
    "fibonacci-levels": "/images/trading_fibonacci_levels_golden_ratio_premium_1770925572306.png",
    "bollinger-bands": "/images/trading_bollinger_bands_volatility_envelope_premium_1770925592703.png",
    "sharpe-ratio": "/images/trading_sharpe_ratio_risk_adjusted_premium_1770926160413.png",
    "bullish-engulfing": "/images/trading_bullish_engulfing_candle_premium_1770926182102.png",
    "iceberg-order": "/images/trading_iceberg_order_hidden_depth_v2_premium_1770926218050.png",
    "order-matching-engine": "/images/trading_order_matching_engine_clockwork_v2_premium_1770926245903.png",
    "funding-rate": "/images/trading_funding_rate_balance_exchange_premium_1770926281100.png",
    "latency": "/images/trading_latency_microsecond_trail_premium_1770926302797.png",
    "drawdown": "/images/trading_drawdown_cracked_glass_v2_premium_1770926342862.png",
    "kelly-criterion": "/images/trading_kelly_criterion_optimal_bet_v2_premium_1770926368677.png",
    "doji": "/images/trading_doji_star_indecision_premium_1770926693687.png",
    "hammer": "/images/trading_hammer_pattern_reversal_premium_1770926717868.png",
    "slippage-control": "/images/trading_slippage_control_shield_premium_1770926739600.png",
    "backtesting": "/images/trading_backtesting_simulation_nexus_premium_1770926761561.png",
    "maker": "/images/trading_maker_taker_liquidity_balance_premium_1770926815464.png",
    "taker": "/images/trading_maker_taker_liquidity_balance_premium_1770926815464.png",
    "day-trading": "/images/trading_day_trading_high_speed_clock_premium_1770926845012.png",
    "position-size": "/images/trading_position_sizing_precise_allocation_premium_1770926872751.png",
    "position-size": "/images/trading_position_sizing_precise_allocation_premium_1770926872751.png",
    "hedging": "/images/trading_hedging_offsetting_positions_v2_premium_1770926915964.png",
    "moving-average": "/images/trading_moving_average_smooth_flow_premium_1770927117296.png",
    "rsi--relative-strength-index-": "/images/trading_rsi_oscillator_boundaries_premium_1770927140853.png",
    "elliott-waves": "/images/trading_elliott_waves_crystal_peaks_v2_premium_1770927188740.png",
    "order-flow": "/images/trading_order_flow_energy_streams_v3_premium_1770927234302.png",
    "trailing-stop": "/images/trading_trailing_stop_barrier_laser_v2_premium_1770927298445.png",
    "stop-limit-order": "/images/trading_stop_limit_order_gate_premium_1770927352685.png",
    "oco--one-cancels-other-": "/images/trading_oco_order_linked_nexus_premium_1770927392079.png",
    "block-order-execution": "/images/trading_block_order_solid_execution_premium_1770927439138.png",
    "sentimental-analysis": "/images/trading_sentiment_analysis_brain_hologram_v3_premium_1770927487566.png",
    "macd--moving-average-convergence-divergence-": "/images/trading_macd_indicator_cross_premium_1770929667565.png",
    "websocket": "/images/trading_websocket_realtime_pulse_v2_premium_1770929746129.png",
    "grpc": "/images/trading_grpc_efficient_nexus_premium_1770929688332.png",
    "harmonic-patterns": "/images/trading_harmonic_patterns_geometry_premium_1770929710390.png",
    "tick-size": "/images/trading_tick_size_granularity_premium_1770929764494.png",
    "price-gap": "/images/trading_price_gap_shattered_flow_premium_1770929785192.png",
    "market-impact": "/images/trading_market_impact_ripple_premium_1770929813167.png"
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
