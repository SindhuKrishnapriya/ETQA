import { age, default_calculator_values, income_saving, pre_retirement_data, social_security_income } from '../testdata/pre_retirement_cal_data.ts';
import Page from './page.js'

class PreRetirementCalculatorPage extends Page {
    readonly path = 'retirement-calculator.html'

    get inputCurrentAge() {
        return $('#current-age');
    }

    get inputRetirementAge() {
        return $('#retirement-age');
    }

    get inputCurrentAnnualIncome() {
        return $('#current-income');
    }

    get inputSpouseAnnualIncome() {
        return $('#spouse-income');
    }

    get inputCurrentretirementsavings() {
        return $('#current-total-savings');

    }
    get inputCurrentRetirementContribution() {
        return $('#current-annual-savings')
    }
    get inputAnnualRetirementContributionIncrease() {
        return $('#savings-increase-rate')
    }

    get labelIncludeSocialSecurityIncome() {
        return $(`#include-social-label`)
    }

    get labelMaritalStatus() {
        return $(`#marital-status-label`)
    }

    get labelSocialSecurityOverrideAmt() {
        return $(`#social-security-override-container`)
    }

    get labelDefaultCalculatorValues() {
        return $('#assumption-label')
    }

    get lableInflationLabel() {
        return $('#inflation-label')
    }

    get headerInvestmentExpectations() {
        return $(`//h2[text()='Investment expectations']`)
    }

    get checkboxSocialBenefits_no() {
        return $(`//*[@aria-labelledby='include-social-label']/li[2]/label`)
    }


    get checkboxSocialBenefits_yes() {
        return $(`//*[@aria-labelledby='include-social-label']/li[1]/label`)
    }

    get checkboxMaritalStatus_single() {
        return $(`//*[@id='single']/following-sibling::label[1]`)

    }

    get checkboxMaritalStatus_married() {
        return $(`//*[@id='married']/following-sibling::label[1]`)
    }

    get inputSocialSecurityOverride() {
        return $('#social-security-override')
    }

    get linkAdjustDefaultValues() {
        return $(`//a[text()='Adjust default values']`)
    }

    get inputAdditionalIncome() {
        return $(`#additional-income`)
    }

    get inputRetirementDuration() {
        return $(`#retirement-duration`)
    }

    get checkboxIncreaseWithInflation_Yes() {
        return $(`//*[@id='include-inflation']/following-sibling::label[1]`)
    }

    get checkboxIncreaseWithInflation_No() {
        return $(`//*[@id='exclude-inflation']/following-sibling::label[1]`)
    }

    get inputExpectedInflationRate() {
        return $(`#expected-inflation-rate`)
    }

    get inputRetirementAnnualIncome() {
        return $(`#retirement-annual-income`)
    }

    get inputPreRetirementInvestmentReturn() {
        return $(`#pre-retirement-roi`)
    }

    get inputPostRetirementInvestmentReturninput() {
        return $(`#post-retirement-roi`)
    }

    get buttonSaveChanges() {
        return $(`//button[text()='Save changes']`)
    }

    get buttonCalculate() {
        return $(`//button[text()='Calculate']`)
    }

    open() {
        return super.open(this.path)
    }

    async enterPreRetirementCalData(data: pre_retirement_data) {
        await this.enterAge(data.age);
        await this.enterIncomes_Saving(data.income_saving);
        await this.enterSocialSecurityIncome(data.social_security_income);
        await this.adjustDefaultCalValues(data);
        await (await this.buttonCalculate).click();
        await driver.pause(2000);


    }
    async adjustDefaultCalValues(data: pre_retirement_data) {
        if (data.default_calculator_values) {
            await this.enterDefaultCalculatorValues(data.default_calculator_values);
            await (await this.buttonSaveChanges).click();
            await driver.pause(3000);
        }
    }

    async enterDefaultCalculatorValues(default_calculator_values: default_calculator_values) {
        await (await this.labelDefaultCalculatorValues).scrollIntoView();
        await (await this.linkAdjustDefaultValues).click();
        await browser.pause(2000);

        if (default_calculator_values.additional_other_income) {
            await this.enterAdditionalIncome(default_calculator_values.additional_other_income);
        }

        if (default_calculator_values.number_of_years_retirement_needs_to_last) {
            await this.enterRetirementDuration(default_calculator_values.number_of_years_retirement_needs_to_last);
        }

        if (default_calculator_values.post_retirement_income_increase_with_inflation) {
            await this.selectIncomeIncreaseWithInflation(default_calculator_values.post_retirement_income_increase_with_inflation);
        }

        if (default_calculator_values.percent_of_final_annual_income_desired) {
            await this.enterRetirementAnnualIncome(default_calculator_values.percent_of_final_annual_income_desired);
        }

        if (default_calculator_values.pre_retirement_investment_return) {
            await (await this.headerInvestmentExpectations).scrollIntoView();
            await this.enterPreRetirementInvestmentReturn(default_calculator_values.pre_retirement_investment_return);
        }

        if (default_calculator_values.post_retirement_investment_return) {
            await (await this.headerInvestmentExpectations).scrollIntoView();
            await this.enterPostRetirementInvestmentReturn(default_calculator_values.pre_retirement_investment_return);
        }
    }
    async selectIncomeIncreaseWithInflation(val: string) {
        if (val.toUpperCase() == 'YES') {
            await (await this.lableInflationLabel).scrollIntoView();
            await (await this.checkboxIncreaseWithInflation_Yes).click();
            // await (await this.inputExpectedInflationRate).click();
            // await (await this.inputExpectedInflationRate).setValue(val);
        } else {
            await (await this.checkboxIncreaseWithInflation_No).click();
        }
    }
    async enterRetirementAnnualIncome(val: string) {
        await (await this.lableInflationLabel).scrollIntoView();

        await (await this.inputRetirementAnnualIncome).click();
        await (await this.inputRetirementAnnualIncome).setValue(val);

    }

    async enterPreRetirementInvestmentReturn(val: string) {
        await (await this.inputPreRetirementInvestmentReturn).click();
        await (await this.inputPreRetirementInvestmentReturn).setValue(val);
    }
    async enterPostRetirementInvestmentReturn(val: string) {
        await (await this.inputPostRetirementInvestmentReturninput).click();
        await (await this.inputPostRetirementInvestmentReturninput).setValue(val);
    }


    async enterRetirementDuration(val: string) {
        await (await this.inputRetirementDuration).click();
        await (await this.inputRetirementDuration).setValue(val);

    }

    async enterAdditionalIncome(val: string) {
        await (await this.inputAdditionalIncome).click();
        await (await this.inputAdditionalIncome).setValue(val);
    }

    async enterAge(age: age) {
        await (await this.inputCurrentAge).setValue(age.current_age);
        await (await this.inputRetirementAge).setValue(age.retirement_age);
    }
    async enterIncomes_Saving(income: income_saving) {
        await this.enterCurrentAnnualIncome(income.current_annual_income);
        await this.enterSpouseAnnualIncome(income.spouses_annual_income);
        await this.enterCurrentRetirementSavings(income.current_retirement_savings);
        await this.enterCurrentRetirementContribution(income.current_retirement_contribution);
        await this.enterAnnualRetirementContributionIncrease(income.annual_retirement_contribution_increase);
    }

    async enterSocialSecurityIncome(ssn_income: social_security_income) {
        if (ssn_income.social_security_income && ssn_income.social_security_income.toUpperCase() == 'YES') {
            await this.selectSocialSecurityBenefits_yes();
            await browser.pause(2000)
            await this.selectMaritalStatus(ssn_income.relationship_status)
            await browser.pause(1000)
            await this.enterSocialSecurityOverrideAmount(ssn_income.social_security_override)
        } else {
            await this.selectSocialSecurityBenefits_no();
        }
    }


    async enterCurrentAnnualIncome(val: string) {
        await (await this.inputCurrentAnnualIncome).click();
        await (await this.inputCurrentAnnualIncome).setValue(val);
    }

    async enterSpouseAnnualIncome(val: string) {
        await (await this.inputSpouseAnnualIncome).click();
        await (await this.inputSpouseAnnualIncome).setValue(val);
    }

    async enterCurrentRetirementSavings(val: string) {
        await (await this.inputCurrentretirementsavings).click();
        await (await this.inputCurrentretirementsavings).setValue(val);
    }

    async enterCurrentRetirementContribution(val: string) {
        await (await this.inputCurrentRetirementContribution).click();
        await (await this.inputCurrentRetirementContribution).setValue(val);
    }

    async enterAnnualRetirementContributionIncrease(val: string) {
        await (await this.inputAnnualRetirementContributionIncrease).click();
        await (await this.inputAnnualRetirementContributionIncrease).setValue(val);
    }

    async selectSocialSecurityBenefits_yes() {

        await (await this.labelIncludeSocialSecurityIncome).scrollIntoView();
        await (await this.labelIncludeSocialSecurityIncome).isDisplayed();
        await (await this.checkboxSocialBenefits_yes).click();
    }

    async selectSocialSecurityBenefits_no() {
        await (await this.labelIncludeSocialSecurityIncome).scrollIntoView();
        await (await this.labelIncludeSocialSecurityIncome).isDisplayed();
        await (await this.checkboxSocialBenefits_no).click();
    }

    async selectMaritalStatus(relationship_status: string) {
        await (await this.labelMaritalStatus).scrollIntoView();
        await (await this.labelMaritalStatus).isDisplayed();
        if (relationship_status.toUpperCase() == 'MARRIED') {
            await (await this.checkboxMaritalStatus_married).click();
        } else {
            await (await this.checkboxMaritalStatus_single).click();
        }
    }
    async enterSocialSecurityOverrideAmount(val: string) {
        await (await this.labelSocialSecurityOverrideAmt).scrollIntoView();
        await (await this.labelSocialSecurityOverrideAmt).isDisplayed();
        await (await this.inputSocialSecurityOverride).click();
        await (await this.inputSocialSecurityOverride).setValue(val);
    }

}

export default new PreRetirementCalculatorPage()
