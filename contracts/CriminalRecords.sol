// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CriminalRecords {
    address public owner;
    string[] public criminalIds;

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

    struct Criminal {
        string criminalId;
        PersonalInfo personalInfo;
        string[] mugshots;
    }

    mapping(string => Criminal) public criminalRecords;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this operation");
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
        require(bytes(criminalRecords[_criminalId].criminalId).length == 0, "Criminal is already registered");
        
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

        
        criminalRecords[_criminalId] = Criminal(_criminalId, personalInfo, _mugshots);
        criminalIds.push(_criminalId);
    }

    function viewCriminal(string memory _criminalId) public view returns (Criminal memory) {
        Criminal memory selectedCriminal = criminalRecords[_criminalId];
        require(bytes(selectedCriminal.criminalId).length > 0, "Criminal not found");
        return selectedCriminal;
    }

    function getCriminalIds() public view returns (string[] memory) {
        return criminalIds;
    }
}
