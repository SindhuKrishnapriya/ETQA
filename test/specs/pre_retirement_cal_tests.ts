import CheckboxPage from '../pageobjects/pre_retirement.cal.page.ts'
import { pre_retirement_cal_data_all, pre_retirement_cal_data_defaultonly } from '../testdata/pre_retirement_cal_data.ts';

describe('Pre-retirement calculator', () => {
    it('fill all data to Pre-retirement calculator', async () => {
        await CheckboxPage.open()
        await CheckboxPage.enterPreRetirementCalData(pre_retirement_cal_data_all);
        
    })

    it('fill mandatory data to Pre-retirement calculator (exclude Default calculator values)', async () => {
        await CheckboxPage.open()
        await CheckboxPage.enterPreRetirementCalData(pre_retirement_cal_data_defaultonly);
        
    })


})
