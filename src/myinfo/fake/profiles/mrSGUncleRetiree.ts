import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { ChildrenRecords } from "./childbirthRecords";
import { MyinfoComStatusCode, MyinfoDrivingLicenceValidityCode, MyinfoEduLevelCode, MyinfoHousingTypeCode, MyinfoMaritialStatusCode, MyinfoResidentialCode, MyinfoSexCode } from "../../domain";

const id = "S8399420G";
const name = ProfileArchetype.MR_SG_UNCLE_RETIREE;
/**
 * ArcheType:
 * Age Range 1957-05-16
 * Residential Status	C
 * Sex	M
 * Marital Status	2
 * Local Registered Birth Records	2
 * HDB Ownership	No
 * Type of Housing for Registered Address	null
 * Driving License	Yes
 * Vehicle Ownership	No
 * Highest Education Level	4
 */
export const mrSGUncleRetiree: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `${new Date().getFullYear() - 63}-05-16`,
			unavailable: false,
		};

		profile.residentialstatus = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyinfoResidentialCode.CITIZEN,
			unavailable: false,
		};
		profile.sex = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyinfoSexCode.MALE,
			desc: MyinfoSexCode.fn.toEnumDesc(MyinfoSexCode.MALE),
			unavailable: false,
		};
		profile.marital = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyinfoMaritialStatusCode.MARRIED,
			desc: MyinfoMaritialStatusCode.fn.toEnumDesc(MyinfoMaritialStatusCode.MARRIED),
			unavailable: false,
		};
		profile.childrenbirthrecords = [ChildrenRecords.childMiddle1, ChildrenRecords.childMiddle2];
		profile.housingtype = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyinfoHousingTypeCode.DETACHED_HOUSE,
			desc: MyinfoHousingTypeCode.fn.toEnumDesc(MyinfoHousingTypeCode.DETACHED_HOUSE),
			unavailable: false,
		};
		profile.hdbtype = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: null,
			desc: null,
			unavailable: false,
		};
		profile.drivinglicence = {
			revocation: {
				startdate: {
					value: "",
				},
				enddate: {
					value: "",
				},
			},
			totaldemeritpoints: {
				value: 0,
			},
			disqualification: {
				startdate: {
					value: "",
				},
				enddate: {
					value: "",
				},
			},
			qdl: {
				expirydate: {
					value: "",
				},
				validity: {
					code: MyinfoDrivingLicenceValidityCode.VALID,
					desc: MyinfoDrivingLicenceValidityCode.fn.toEnumDesc(MyinfoDrivingLicenceValidityCode.VALID),
				},
				classes: [
					{
						class: {
							value: "3CA",
						},
						issuedate: {
							value: "2017-12-31",
						},
					},
				],
			},
			lastupdated: "2020-08-26",
			pdl: {
				expirydate: {
					value: "",
				},
				validity: {
					code: null,
					desc: null,
				},
				classes: [],
			},
			source: "1",
			classification: "C",
			comstatus: {
				code: MyinfoComStatusCode.ELIGIBLE,
				desc: MyinfoComStatusCode.fn.toEnumDesc(MyinfoComStatusCode.ELIGIBLE),
			},
			photocardserialno: {
				value: "",
			},
			suspension: {
				startdate: {
					value: "",
				},
				enddate: {
					value: "",
				},
			},
			unavailable: false,
		};
		profile.edulevel = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyinfoEduLevelCode.POST_SECONDARY_NON_TERTIARY_GENERAL_VOCATION,
			desc: MyinfoEduLevelCode.fn.toEnumDesc(MyinfoEduLevelCode.POST_SECONDARY_NON_TERTIARY_GENERAL_VOCATION),
			unavailable: false,
		};
		return profile;
	},
};
