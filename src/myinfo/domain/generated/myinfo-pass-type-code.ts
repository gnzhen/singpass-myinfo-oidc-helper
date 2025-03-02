// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2022-09-16
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
import { EnumUtils } from "../../../util/EnumUtils";

export enum MyInfoPassTypeCode {
	"WORK_PERMIT" = "RPass",
	"S_PASS" = "SPass",
	"EMPLOYMENT_PASS" = "P1Pass",
	"EMPLOYMENT_PASS_2" = "P2Pass",
	"EMPLOYMENT_PASS_3" = "QPass",
	"PERSONALISED_EMPLOYMENT_PASS" = "PEP",
	"WORK_HOLIDAY_PASS" = "WHP",
	"TRAINING_EMPLOYMENT_PASS" = "TEP",
	"ENTRE_PASS" = "Entre",
	"DEPENDENT_PASS" = "DP",
	"LONG_TERM_VISIT_PASS" = "LTVP",
	"LETTER_OF_CONSENT" = "LOC",
	"MISCELLANEOUS_WORK_PASS" = "MWP",
	"STUDENT_PASS" = "STP",
	"LONG_TERM_VISIT_PASS_2" = "LTVP+",
	"IMMIGRATION_EXEMPTION_ORDER" = "IEO",
}

enum MyInfoPassTypeCodeMapping {
	"WORK_PERMIT" = "WORK PERMIT",
	"S_PASS" = "S PASS",
	"EMPLOYMENT_PASS" = "EMPLOYMENT PASS",
	"EMPLOYMENT_PASS_2" = "EMPLOYMENT PASS",
	"EMPLOYMENT_PASS_3" = "EMPLOYMENT PASS",
	"PERSONALISED_EMPLOYMENT_PASS" = "PERSONALISED EMPLOYMENT PASS",
	"WORK_HOLIDAY_PASS" = "WORK HOLIDAY PASS",
	"TRAINING_EMPLOYMENT_PASS" = "TRAINING EMPLOYMENT PASS",
	"ENTRE_PASS" = "ENTREPASS",
	"DEPENDENT_PASS" = "DEPENDENT PASS",
	"LONG_TERM_VISIT_PASS" = "LONG TERM VISIT PASS",
	"LETTER_OF_CONSENT" = "LETTER OF CONSENT",
	"MISCELLANEOUS_WORK_PASS" = "MISCELLANEOUS WORK PASS",
	"STUDENT_PASS" = "STUDENT PASS",
	"LONG_TERM_VISIT_PASS_2" = "LONG TERM VISIT PASS +",
	"IMMIGRATION_EXEMPTION_ORDER" = "IMMIGRATION EXEMPTION ORDER",
}

type MyInfoPassTypeCodeDesc = `${ MyInfoPassTypeCodeMapping }`;

export namespace MyInfoPassTypeCode {
	export const fn = {
		keys: EnumUtils.keysFunc<MyInfoPassTypeCode>(MyInfoPassTypeCode),
		values: EnumUtils.valuesFunc<MyInfoPassTypeCode>(MyInfoPassTypeCode),
		toEnumKey: EnumUtils.toEnumKeyFunc<MyInfoPassTypeCode>(MyInfoPassTypeCode),
		toEnumValue: EnumUtils.toEnumValueFunc<MyInfoPassTypeCode>(MyInfoPassTypeCode),
		toEnumDesc: EnumUtils.toEnumDescFunc<MyInfoPassTypeCode, MyInfoPassTypeCodeDesc>(MyInfoPassTypeCode, MyInfoPassTypeCodeMapping),
	};
}
