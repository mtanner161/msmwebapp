import React, {Component} from 'react'
import StocksData from "../Data/StocksData.json";
import LifeTimeData from "../Data/CurrentProductionData.json";
import TechSharesData from "../Data/TechSharesData.json";
import TechIntensityData from "../Data/TechIntensityData.json";
import CurrentProductionData from "../Data/CurrentProductionData.json";
import MineralRecyclingRatesData from "../Data/MineralRecyclingRatesData.json";
import MetalMineralConversionData from "../Data/MetalMineralConversionData.json";
import MineralPricesData from "../Data/MineralPricesData.json";
import MineralModel from "../MineralModel";
import DemandData from "../DemandData";
import DemandChart from '../DemandChart';
import "../Run.css"

function RunModel() {

    const stock = StocksData;
    const lifeTime = LifeTimeData;
    const techShares = TechSharesData;
    const techIntensity = TechIntensityData;
    const currentProduction = CurrentProductionData;
    const mineralRecyclingRates = MineralRecyclingRatesData;
    const metalMineralConversion = MetalMineralConversionData;
    const mineralPrices = MineralPricesData;

    MineralModel(1, stock, lifeTime, techShares, techIntensity, currentProduction,
        mineralRecyclingRates, metalMineralConversion, mineralPrices)
    
    // Retrive saved data from Mineral Model

    var TotalMaterialFlowInFromRR = JSON.parse(sessionStorage.getItem('TotalMaterialFlowInFromRR'));

    var value = JSON.parse(sessionStorage.getItem('YearsAndMaterialList'));
    var yearsInList = value[0];
    var completeMaterialList = value[1];

    var TotalMaterialFlowInFromVirgin = JSON.parse(sessionStorage.getItem('TotalMaterialFlowInFromVirgin'));

    var resultsDemand = "["
    for (let i = 0; i < yearsInList.length-1; i++) 
    {
        resultsDemand = resultsDemand + "{" + '"id":' + i + "," +'"year":' + yearsInList[i+1] + ","
        for (let j = 0; j < completeMaterialList.length; j++)
        {
            let temp = TotalMaterialFlowInFromVirgin[i][j]/1000
            resultsDemand = resultsDemand + '"' + completeMaterialList[j] + '":' + (Math.round(temp*100)/100)
            if (j < completeMaterialList.length - 1)
            {
                resultsDemand = resultsDemand + ","
            }
        }
        if (i < yearsInList.length-2)
        {
            resultsDemand = resultsDemand + "},"
        } else {
            resultsDemand = resultsDemand + "}"
        }
    }

    var resultsDemand = resultsDemand + "]"


     // Recycle Material
    var resultsDemandRR = "["
    for (let i = 0; i < yearsInList.length-1; i++) 
    {
        resultsDemandRR = resultsDemandRR + "{" + '"id":' + i + "," +'"year":' + yearsInList[i+1] + ","
        for (let j = 0; j < completeMaterialList.length; j++)
        {
            let temp = TotalMaterialFlowInFromRR[i][j]/1000
            resultsDemandRR = resultsDemandRR + '"' + completeMaterialList[j] + '":' + (Math.round(temp*100)/100)
            if (j < completeMaterialList.length - 1)
            {
                resultsDemandRR = resultsDemandRR + ","
            }
        }
        if (i < yearsInList.length-2)
        {
            resultsDemandRR = resultsDemandRR + "},"
        } else {
            resultsDemandRR = resultsDemandRR + "}"
        }
    }
    resultsDemandRR = resultsDemandRR + "]"

    return (
        
        <div className="background">
            <h1>Total Demand for Minerals Given IEA Beyond Two Degree</h1>
            <h2 className='text-align-center'>Material </h2>
            <div className="chart-background">
                <DemandChart value = {JSON.parse(resultsDemand)} />
                <DemandChart value={JSON.parse(resultsDemandRR)} />
            </div>
            <div className='chart-background'>
            </div>
            <div className="table-container">
                <DemandData value = {JSON.parse(resultsDemand)} />
                <DemandData value={JSON.parse(resultsDemandRR)} />
            </div>
        </div>
    )

}

export default RunModel;