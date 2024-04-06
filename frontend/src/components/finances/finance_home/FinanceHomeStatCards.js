import React, {useState} from "react";
import { Carousel, Radio } from "antd";
import FinanceHomeStatBar from "./FinanceHomeStatBar";
import FinanceTransactionsStatBar from "../finance_transactions/FinanceTransactionsStatBar";
import TransactionsInfoCard from "./home_transactions/TransactionsInfoCard";
import ProfitGraph from "./home_transactions/ProfitInfoCard";



export default function FinanceHomeStatCards() {

    const [dotPosition, setDotPosition] = useState('top');


    return (
        <div className="pt-8">
            <style>
                {`
          /* Normal dot */
          .ant-carousel .slick-dots li button {
            background-color: #9ca3af; /* Change the normal dot color here */
            height: 5px; /* Change the normal dot height here */
          }
          
          /* Active dot */
          .ant-carousel .slick-dots li.slick-active button {
            background-color: #84cc16; /* Change the active dot color here */
            height: 5px; /* Change the active dot height here */
          }
          
          .ant-carousel .slick-slide > div {
            font-family: 'Circular Std', sans-serif; /* Change the font family here */
          }
        `}
            </style>
            <div className="pt-8 h-96 align-middle justify-center content-center">
                <Carousel dotPosition={"bottom"}>
                    <div className="">
                        <TransactionsInfoCard/>
                    </div>
                    <div>
                        <TransactionsInfoCard/>
                    </div>
                    <div>
                        <TransactionsInfoCard/>
                    </div>
                    <div>
                        <TransactionsInfoCard/>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

