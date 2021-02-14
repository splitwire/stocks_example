const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const http = require("axios").default;
const { apikey, url } = require("./config");

const db = require("./data/db");

const queryStock = async (stock) => {
  try {
    const query = {
      apikey,
      function: 'TIME_SERIES_INTRADAY',
      symbol: stock,
      interval: '5min'
    };
    
    const queryStr = Object.keys(query)
      .map(i => `${i}=${query[i]}`)
      .join('&');
    
    return await http.get(`${url}?${queryStr}`);
  }
  catch (error) {
    throw error;
  }
}

const writeStockData = async (data) => {
  try {
    return await db("stocks")
      .insert({
        meta: JSON.stringify(data['Meta Data']),
        timeseries: JSON.stringify(data['Time Series (5min)'])
      })
      .returning("*");
  }
  catch (error) {
    throw error;
  }
}

const parseArgs = async () => {
  try {
    if (argv.stock) {
      const info = await queryStock(argv.stock);
      
      const result = await writeStockData(info.data);

      console.log(result);
    }
  }
  catch (error) {
    console.error(error);
  }
  finally {
    process.exit();
  }
}

parseArgs();
