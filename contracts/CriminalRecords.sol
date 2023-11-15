// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CriminalRecords {
    address public owner;
    string[] public criminalIds;

    struct Criminal {
        string criminalId;
        PersonalInfo personalInfo;
        string[] mugshots;
        string[] caseIds;
    }

    struct PersonalInfo {
        string fullName;
        string gender;
        string dob;
        string mobileNumber;
        string aadharNumber;
        string addressx;
        string relativeName;
        string relativeMobileNumber;
    }

    struct CrimeDetails {
        string offence;
        string victimName;
        string doi;
        string ipc;
        string crimeLocation;
        string description;
    }

    struct OfficialDetails {
        string incharge;
        string officerId;
        string postIncharge;
        string doc;
        string stationAddress;
        string investigationDesc;
    }

    struct CourtDetails {
        string judge;
        string prosecuter;
        string defendant;
        string courtAddress;
        string judgement;
        string doh;
    }

    struct Case {
        string caseId;
        CrimeDetails crimeDetails;
        OfficialDetails officialDetails;
        CourtDetails courtDetails;
    }

    mapping(string => Criminal) public criminalRecords;
    mapping(string => mapping(string => Case)) public caseRecords;

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only the contract owner can perform this operation"
        );
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerCriminal(
        string memory _criminalId,
        string memory _fullName,
        string memory _gender,
        string memory _dob,
        string memory _mobileNumber,
        string memory _aadharNumber,
        string memory _addressx,
        string memory _relativeName,
        string memory _relativeMobileNumber,
        string[] memory _mugshots
    ) public onlyOwner {
        require(
            bytes(criminalRecords[_criminalId].criminalId).length == 0,
            "Criminal is already registered"
        );

        PersonalInfo memory personalInfo = PersonalInfo({
            fullName: _fullName,
            gender: _gender,
            dob: _dob,
            mobileNumber: _mobileNumber,
            aadharNumber: _aadharNumber,
            addressx: _addressx,
            relativeName: _relativeName,
            relativeMobileNumber: _relativeMobileNumber
        });

        criminalRecords[_criminalId] = Criminal({
            criminalId: _criminalId,
            personalInfo: personalInfo,
            mugshots: _mugshots,
            caseIds: new string[](0)
        });
        criminalIds.push(_criminalId);
    }

    function addCase(
        string memory _criminalId,
        string memory _caseId,
        CrimeDetails memory _crimeDetails,
        OfficialDetails memory _officialDetails,
        CourtDetails memory _courtDetails
    ) public onlyOwner {
        require(
            bytes(caseRecords[_criminalId][_caseId].caseId).length == 0,
            "This case is already registered"
        );

        // Create CrimeDetails struct
        CrimeDetails memory crimeDetails = CrimeDetails({
            offence: _crimeDetails.offence,
            victimName: _crimeDetails.victimName,
            doi: _crimeDetails.doi,
            ipc: _crimeDetails.ipc,
            crimeLocation: _crimeDetails.crimeLocation,
            description: _crimeDetails.description
        });

        // Create OfficialDetails struct
        OfficialDetails memory officialDetails = OfficialDetails({
            incharge: _officialDetails.incharge,
            officerId: _officialDetails.officerId,
            postIncharge: _officialDetails.postIncharge,
            doc: _officialDetails.doc,
            stationAddress: _officialDetails.stationAddress,
            investigationDesc: _officialDetails.investigationDesc
        });

        // Create CourtDetails struct
        CourtDetails memory courtDetails = CourtDetails({
            judge: _courtDetails.judge,
            prosecuter: _courtDetails.prosecuter,
            defendant: _courtDetails.defendant,
            courtAddress: _courtDetails.courtAddress,
            judgement: _courtDetails.judgement,
            doh: _courtDetails.doh
        });

        caseRecords[_criminalId][_caseId] = Case({
            caseId: _caseId,
            crimeDetails: crimeDetails,
            officialDetails: officialDetails,
            courtDetails: courtDetails
        });
        criminalRecords[_criminalId].caseIds.push(_caseId);
    }

    function viewCriminal(
        string memory _criminalId
    ) public view returns (Criminal memory) {
        Criminal memory selectedCriminal = criminalRecords[_criminalId];
        require(
            bytes(selectedCriminal.criminalId).length > 0,
            "Criminal not found"
        );
        return selectedCriminal;
    }

        function viewCases(
        string memory _criminalId,
        string memory _caseId
    ) public view returns (Case memory) {
        Case memory selectedCase = caseRecords[_criminalId][_caseId];
        require(
            bytes(selectedCase.caseId).length > 0,
            "Case doesn't exist"
        );
        return selectedCase;
    }

    function getCriminalIds() public view returns (string[] memory) {
        return criminalIds;
    }
}
