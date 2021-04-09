import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { ChildrenRecords } from "./childbirthRecords";
import { aliasName } from "../profiles/common";
import { MyinfoCountryCode, MyinfoDrivingLicenceValidityCode, MyinfoHDBTypeCode, MyinfoMaritialStatusCode, MyinfoNationalityCode, MyinfoResidentialCode, MyinfoSexCode } from "../../domain";

const id = "T2446959F";
const name = ProfileArchetype.MRS_PR_HDB_OWNER_WORKING_ADULT_MID_CAREER_PMETS;
/**
 * ArcheType:
 * Age Range 1979-05-16
 * Residential Status	P
 * Sex	F
 * Marital Status	2
 * Local Registered Birth Records	3
 * HDB Ownership	Yes
 * Type of Housing for Registered Address	null
 * Driving License	Yes
 * Vehicle Ownership	Yes
 */
export const mrsPRHdbOwnerWorkingAdult: FakeProfile = {
	id,
	name,
	// tslint:disable-next-line: no-big-function
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);

		profile.aliasname = {
			lastupdated: "2021-03-19",
			source: "1",
			classification: "C",
			value: aliasName.LEE_XIU,
			unavailable: false,
		};
		profile.dob = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			value: `${new Date().getFullYear() - 41}-05-16`,
			unavailable: false,
		};
		profile.residentialstatus = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyinfoResidentialCode.PR,
			desc: MyinfoResidentialCode.fn.toEnumDesc(MyinfoResidentialCode.PR),
			unavailable: false,
		};
		profile.nationality = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyinfoNationalityCode.MALAYSIAN,
			unavailable: false,
		};
		profile.birthcountry = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyinfoCountryCode.MALAYSIA,
			desc: MyinfoCountryCode.fn.toEnumDesc(MyinfoCountryCode.MALAYSIA),
			unavailable: false,
		};
		profile.sex = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyinfoSexCode.FEMALE,
			desc: MyinfoSexCode.fn.toEnumDesc(MyinfoSexCode.FEMALE),
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
		profile.childrenbirthrecords = [ChildrenRecords.child1MonthOld, ChildrenRecords.child6YearsOld, ChildrenRecords.childMiddle1];
		profile.hdbtype = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: MyinfoHDBTypeCode["2_ROOM_FLAT_HDB"],
			desc: MyinfoHDBTypeCode.fn.toEnumDesc(MyinfoHDBTypeCode["2_ROOM_FLAT_HDB"]),
			unavailable: false,
		};
		profile.housingtype = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			code: null,
			desc: null,
			unavailable: false,
		};
		profile.drivinglicence = {
			lastupdated: "2020-01-01",
			source: "1",
			classification: "C",
			qdl: {
				validity: {
					code: MyinfoDrivingLicenceValidityCode.VALID,
					desc: MyinfoDrivingLicenceValidityCode.fn.toEnumDesc(MyinfoDrivingLicenceValidityCode.VALID),
				},
			},
			unavailable: false,
		};
		profile.vehicles =
		{
			roadtaxexpirydate: {
				value: "2020-06-06",
			},
			engineno: {
				value: "4G13NU1453",
			},
			attachment3: {
				value: "",
			},
			effectiveownership: {
				value: "2010-06-06T12:09:05",
			},
			scheme: {
				value: "OPC - OFF PEAK CAR",
			},
			powerrate: {
				value: 1.7,
			},
			source: "1",
			primarycolour: {
				value: "MAROON",
			},
			type: {
				value: "STATION WAGON/JEEP/LAND ROVER",
			},
			vehicleno: {
				value: "SBP1818T",
			},
			coeexpirydate: {
				value: "2020-06-06",
			},
			chassisno: {
				value: "TUU28391334KL189",
			},
			noxemission: {
				value: 0.013456,
			},
			model: {
				value: "FORESTER",
			},
			openmarketvalue: {
				value: 23485.3,
			},
			coemission: {
				value: 0.153209,
			},
			attachment2: {
				value: "",
			},
			attachment1: {
				value: "CONTINENTAL TIRE",
			},
			make: {
				value: "SUBARU",
			},
			pmemission: {
				value: 0.199,
			},
			originalregistrationdate: {
				value: "2009-12-06",
			},
			yearofmanufacture: {
				value: "2010",
			},
			vpc: {
				value: "",
			},
			enginecapacity: {
				value: 1600,
			},
			classification: "C",
			nooftransfers: {
				value: 1,
			},
			propellant: {
				value: "Petrol",
			},
			co2emission: {
				value: 145,
			},
			motorno: {
				value: "",
			},
			minimumparfbenefit: {
				value: 2500,
			},
			thcemission: {
				value: 0.187765,
			},
			firstregistrationdate: {
				value: "2010-06-06",
			},
			lastupdated: "2020-08-26",
			maximumunladenweight: {
				value: 1500,
			},
			coecategory: {
				value: "A - CAR UP TO 1600CC & 97KW (130BHP)",
			},
			maximumladenweight: {
				value: 2000,
			},
			secondarycolour: {
				value: "",
			},
			iulabelno: {
				value: "",
			},
			quotapremium: {
				value: 0,
			},
			status: {
				code: "1",
				desc: "LIVE",
			},
			unavailable: false,
		};
		return profile;
	},
};
