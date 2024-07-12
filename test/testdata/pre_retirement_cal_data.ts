
export type age = {
    current_age: string,
    retirement_age: string,
}

export type income_saving = {
    current_annual_income: string,
    spouses_annual_income: string,
    current_retirement_savings: string,
    current_retirement_contribution: string,
    annual_retirement_contribution_increase: string,
}

export type social_security_income = {
    social_security_income: string,
    relationship_status: string,
    social_security_override: string,
}

export type default_calculator_values = {
    additional_other_income: string,
    number_of_years_retirement_needs_to_last: string,
    post_retirement_income_increase_with_inflation: string,
    percent_of_final_annual_income_desired: string,
    pre_retirement_investment_return: string,
    post_retirement_investment_return: string
}

export type pre_retirement_data = {
    age: age;
    income_saving: income_saving;
    social_security_income: social_security_income;
    default_calculator_values?: default_calculator_values;
}

const age:age= {
    "current_age": "40",
    "retirement_age": "68",
}

const income_saving:income_saving= {
    "current_annual_income": "100000",
    "spouses_annual_income": "75000",
    "current_retirement_savings": "500000",
    "current_retirement_contribution": "10",
    "annual_retirement_contribution_increase": ".25",
}

const social_security_income:social_security_income= {
    "social_security_income": "yes",
    "relationship_status": "married",
    "social_security_override": "4000",
}

const default_calculator_values:default_calculator_values= {
    "additional_other_income": "500",
    "number_of_years_retirement_needs_to_last": "20",
    "post_retirement_income_increase_with_inflation": "yes",
    "percent_of_final_annual_income_desired": "75",
    "pre_retirement_investment_return": "8",
    "post_retirement_investment_return": "5"
}


export const pre_retirement_cal_data_all: pre_retirement_data = {
    age,
    income_saving,
    social_security_income,
    default_calculator_values
}

export const pre_retirement_cal_data_defaultonly: pre_retirement_data = {
    age,
    income_saving,
    social_security_income,
}