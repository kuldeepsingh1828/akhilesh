import { Component } from 'react'
import {
    ColumnViewHeadingEnum, NavEnum, NetAssetEnum, ColumnViewSectionKeysEnum, ColumnViewKeysEnum, MaxOfferEnum, MarketPriceEnum,
} from './enum'
export default class ColumnViewReact extends Component {
    columnviewdata;
    displayColumnView; isNetAssets;
    constructor(props) {
        super(props);
        this.state = { filteredData: null }
        if (props.netassetdata) {
            this.isNetAssets = true;
            this.isExpenseRatio = false;
            this.columnviewdata = this.mapNetAssetStructure(props.netassetdata)
        } else if (props.dailypricingdata) {
            this.isNetAssets = false;
            this.isExpenseRatio = false;
            this.columnviewdata = props.dailypricingdata.account.dailyPricing;
        } else if (props.expenseratiodata) {
            this.isNetAssets = false;
            this.isExpenseRatio = true;
            this.columnviewdata = this.mapExpenseRatioStructure(props.expenseratiodata)
        }
    }
    componentDidMount() {
        // console.log(this.props)
        this.setState({ filteredData: this.columnviewdata });
    }
    componentDidUpdate() { }

    render() {
        let columnHeading = this.getColumnHeading(this.props);
        let asOfDate = this.state.filteredData ? this.state.filteredData.asOf : null;
        this.displayColumnView = this.state.filteredData ? this.formatData(this.state.filteredData) : null;
        console.log(this.displayColumnView);
        return (<div className={"column-view-container"}>
            <div className={"heading-container"}>
                <h1>{columnHeading} {asOfDate && <span className={"as-of-text"}>(as of {asOfDate})</span>}</h1>
            </div>
            <div className={"data-container"}>
                <div className={"data-row"}> {this.displayColumnView} </div>
            </div>
        </div>)
    }
    filterData(classId, columnviewdata) {
        return columnviewdata.find(c => c.class.class_id === classId);
    }

    mapDailyPricingStructure(dailyPricingData) {
        let obj = dailyPricingData.map(data => ({ class: data.class, data: data.daily_pricing }));
        return obj;
    }

    mapNetAssetStructure(props) {
        let netAsset = this.getDecimalMatrix(props.total_net_assets.value);
        // console.log(netAsset,"DFGdf")
        let asset = { asOf: props.total_net_assets.asOf, value: netAsset };
        return asset;
    }
    mapExpenseRatioStructure(props) {
        console.log(props)
        return { net: props.account.net };
    }


    getDecimalMatrix(num) {
        let roundUptoDigits = 1;
        let textArray = [{ value: 1, text: "" },
        { value: 1E3, text: "thousand" },
        { value: 1E6, text: "million" },
        { value: 1E9, text: "billion" },
        { value: 1E12, text: "trillion" }];
        let reg = /\.0+$|(\.[0-9]*[1-9])0+$/;
        let index; for (index = textArray.length - 1; index > 0; index--) {
            if (num >= textArray[index].value) { break; }
        }
        let ex = '$' + ((num / textArray[index].value).toFixed(roundUptoDigits).replace(reg, "$1")) + ' ' + textArray[index].text; return ex;
    }
    getColumnHeading(props) {
        let columnHeading = '';
        if (props.netassetdata) {
            columnHeading = ColumnViewHeadingEnum.TOTAL_NET_ASSETS;
        }
        else if (props.dailypricingdata) {
            columnHeading = ColumnViewHeadingEnum.DAILY_PRICING;
        } else if (props.expenseratiodata) {
            columnHeading = ColumnViewHeadingEnum.EXPENSE_RATIO;
        }
        return columnHeading;
    }


    formatData(filteredData) {
        let sectionHeaders;
        let displayColumnView;
        if (filteredData) {
            displayColumnView = Object.entries(filteredData).map(sections => {
                console.log("SECTIONS", sections[0])
                if (sections[0] == 'asOf') return;
                sectionHeaders = this.getSectionHeaders(sections[0]);
                return <div className={"data-column"}>
                    {sectionHeaders && <div className={"data-heading"}>{sectionHeaders}</div>}
                    <div className={"data-value"}>{this.getValues((sections[1]), sectionHeaders)}</div>
                </div>
            })
        }
        return displayColumnView;
    }
    // formatData(filteredData) {
    //     let sectionHeaders;
    //     let displayColumnView;
    //     if (filteredData) {
    //         displayColumnView = Object.entries(filteredData).map(sections => {
    //             console.log(sections)
    //             if (sections[0] != 'asOf') sectionHeaders = this.getSectionHeaders(sections[0])
    //             return <div>{sections[1]}</div>
    //         });
    //         return displayColumnView;
    //     }
    // }
    getValues(value, sectionHeader) {
        if (this.isExpenseRatio) {
            return <span className={"negative-pricing"}>{value}%</span>;
        }
        else if (this.isNetAssets) {
            return <span>{value}</span>
        }
        else if (sectionHeader == NavEnum.NET_CHANGE) {
            let val = parseFloat(value);
            if (val < 0) {
                return <span className={"negative-pricing"}>{'$' + parseFloat(value).toFixed(2)}</span>;
            }
            else {
                return (parseFloat(value).toFixed(2) == '0.00' || parseFloat(value).toFixed(2) == '-0.00') ? <span className={"normal-pricing"}>No change</span> : <span className={"normal-pricing"}>{'$' + parseFloat(value).toFixed(2)}</span>;
            }
        }
        return <span>{'$' + parseFloat(value).toFixed(2)}</span>;
    }




    getSectionHeaders(parentHeader, childHeader = null) {

        var column = {
            'net': '',
            'value': '',
            "nav": MaxOfferEnum.NAV,
            "nav1Day": NavEnum.NET_CHANGE,
            "mktPrice": MarketPriceEnum.PRICE,
            "mktPrice1Day": MarketPriceEnum.PRICE_1_DAY
        }
        if (column[parentHeader] != null) {
            return column[parentHeader];
        }
        if (parentHeader == ColumnViewSectionKeysEnum.NAV) {
            switch (childHeader) {
                case ColumnViewKeysEnum.NET_CHANGE: return NavEnum.NET_CHANGE;
                case ColumnViewKeysEnum.PRICE: return NavEnum.PRICE;
            }
        }
        else if (parentHeader == ColumnViewSectionKeysEnum.MAX_OFFER_PRICE) {
            switch (childHeader) {
                case ColumnViewKeysEnum.PRICE: return MaxOfferEnum.PRICE;
            }
        }
        else if (parentHeader == ColumnViewSectionKeysEnum.NET_ASSET) {
            switch (childHeader) {
                case ColumnViewKeysEnum.VALUE: return NetAssetEnum.VALUE;
            }
        } else {
            return null;
        }
    }
}