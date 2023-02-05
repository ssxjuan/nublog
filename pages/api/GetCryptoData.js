import fetch from 'node-fetch';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const response = await Promise.all([
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=MATICUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT'),
    ]);
    
    const data = await Promise.all(response.map(res => res.json()));
  
    res.status(200).json(data);
}
  
  
