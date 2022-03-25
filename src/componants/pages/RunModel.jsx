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

    var results = "["
    for (var i = 0; i < yearsInList.length-1; i++) 
    {
        results = results + "{" + '"id":' + i + "," +'"year":' + yearsInList[i+1] + ","
        for (var j = 0; j < completeMaterialList.length; j++)
        {
            let temp = TotalMaterialFlowInFromVirgin[i][j]/1000
            results = results + '"' + completeMaterialList[j] + '":' + (Math.round(temp*100)/100)
            if (j < completeMaterialList.length - 1)
            {
                results = results + ","
            }
        }
        if (i < yearsInList.length-2)
        {
            results = results + "},"
        } else {
            results = results + "}"
        }
    }
    results = results + "]"

    return (
        
        <div className="background">
            <h1>Total Demand for Numerous Minerals</h1>
            <div className="chart-background">
                <DemandChart value = {JSON.parse(results)} />
            </div>
            
            <div className="table-container">
                <DemandData value = {JSON.parse(results)} />
            </div>
            
        </div>
    )

}

export default RunModel;