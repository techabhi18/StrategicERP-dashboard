import React, { useState } from "react";
import { Field, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import DataTable from "react-data-table-component";

import CustomInput from "../../../../components/forms/CustomInput";
import CustomTextarea from "../../../../components/forms/CustomTextarea";

const validationSchema = Yup.object().shape({
    CompanyName: Yup.string().required("Company Name is required"),
    LegalEntityName: Yup.string(),
    CompanyCode: Yup.number("Company Code Should be a number").required("Company Code is required"),
    City: Yup.string().required("City is required"),
    Country: Yup.string().required("Country is required"),
    Pincode: Yup.number().required("Pincode is required"),
    MobileNo: Yup.number(),
    PhoneNo: Yup.number(),
    RegisteredAddress: Yup.string().required("Registered Address is required"),
    CommunicationAddress: Yup.string().required("Communication Address is required"),
    MSME: Yup.string(),
    FinancialYear: Yup.number(),
    Timezone: Yup.string(),
    BooksBeginningFrom: Yup.date(),
    AmountFormat: Yup.string(),
    ERPGoLiveDate: Yup.date().required("ERP Go-Live Date is required"),
    VendorMainLedger: Yup.string(),
    EmployeeMainLedger: Yup.string(),
    ClientMainLedger: Yup.string(),
    PAN: Yup.string(),
    TAN: Yup.string(),
    CIN: Yup.string(),
    GSTType: Yup.string(),
    CessNo: Yup.string(),
    CompanyStatus: Yup.string().required("Company Status is required"),
    TotalShares: Yup.number(),
    SharePrice: Yup.number(),
    BalanceSheetStock: Yup.string(),
    CompanyAddress: Yup.string(),
    Remarks: Yup.string(),
    MinGoLiveDate: Yup.date(),
    Status: Yup.string()
});

const companyData = [
    { id: 1, CompanyName: "HoABL PVT LTD", ERPGoLiveDate: "01/04/2024", BooksBeginningFrom: "01/04/2012", MinGoLiveDate: "01/01/2000" },
    { id: 2, CompanyName: "Pritam Test", ERPGoLiveDate: "01/09/2015", BooksBeginningFrom: "01/04/2012", MinGoLiveDate: "01/01/2000" },
    { id: 3, CompanyName: "Prathmesh Test", ERPGoLiveDate: "14/08/2024", BooksBeginningFrom: "14/08/2024", MinGoLiveDate: "01/01/2000" },
    { id: 4, CompanyName: "New Company", ERPGoLiveDate: "09/08/2024", BooksBeginningFrom: "09/08/2024", MinGoLiveDate: "01/01/2000" },
];

const columns = [
    { name: "Sr", selector: (row) => row.id, sortable: true },
    { name: "Name of Company", selector: (row) => row.CompanyName, sortable: true },
    { name: "ERP Go-Live Date", selector: (row) => row.ERPGoLiveDate, sortable: true },
    { name: "Books Beginning From", selector: (row) => row.BooksBeginningFrom, sortable: true },
    { name: "Min Go Live Date", selector: (row) => row.MinGoLiveDate, sortable: true },
];

const CompanyMaster = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(companyData);

    const handleSubmit = async (values) => {
        console.log("data", values);
    };

    const formik = useFormik({
        initialValues: {
            CompanyName: "",
            LegalEntityName: "",
            CompanyCode: "",
            City: "",
            Country: "",
            Pincode: "",
            RegisteredAddress: "",
            CommunicationAddress: "",
            MSME: "",
            FinancialYear: "",
            Timezone: "",
            BooksBeginningFrom: "",
            AmountFormat: "",
            ERPGoLiveDate: "",
            VendorMainLedger: "",
            EmployeeMainLedger: "",
            ClientMainLedger: "",
            PAN: "",
            TAN: "",
            CIN: "",
            GSTType: "",
            CessNo: "",
            CompanyStatus: "",
            TotalShares: "0",
            SharePrice: "0",
            BalanceSheetStock: "No",
            CompanyAddress: "",
            Remarks: "",
            MinGoLiveDate: "",
            Status: "Auto"
        },
        validationSchema,
        onSubmit: (values) => handleSubmit(values),
    });

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = companyData.filter((item) =>
            item.CompanyName.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };

    return (
        <div className="bg-lightblue overflow-auto h-[87vh] hide-scrollbar">
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <div className="bg-white rounded-lg p-2">
                        <Field name="CompanyName" label="Name of Company" component={CustomInput} className="input-full-width pl-8 pt-2" required />

                        <h2 className="text-xs my-1.5 bg-[#b0e9f5] w-full py-1.5 px-4 rounded-md">Company Details</h2>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-7 pl-8">
                            <Field name="LegalEntityName" label="Legal Entity Name" component={CustomInput} className="input-full-width col-span-2" />
                            <Field name="CompanyCode" label="Company Code" component={CustomInput} required />
                            <Field name="CommunicationAddress" label="Communication Address" component={CustomTextarea} required className="row-span-2" rows="3" />
                            <Field name="City" label="City" component={CustomInput} required />
                            <Field name="State" label="State" component={CustomInput} required />
                            <Field name="Country" label="Country" component={CustomInput} required />
                            <Field name="Pincode" label="Pincode" component={CustomInput} required />
                            <Field name="MobileNo" label="Mobile No" component={CustomInput} />
                            <Field name="PhoneNo" label="Phone No" component={CustomInput} />
                            <Field type="email" name="Email" label="Email" component={CustomInput} />
                            <Field name="RegisteredAddress" label="Registered Address" component={CustomInput} required className="input-full-width col-span-2" />
                            <Field name="MSME" label="MSME" component={CustomInput} />
                            <Field className="invisible" />
                            <Field name="FinancialYear" label="Financial Year" component={CustomInput} />
                            <Field name="AmountFormat" label="Amount Format" component={CustomInput} />
                            <Field name="Timezone" label="Timezone" component={CustomInput} />
                            <Field type="date" name="ERPGoLiveDate" label="ERP Go-Live Date" component={CustomInput} />
                            <Field type="date" name="BooksBeginningFrom" label="Books Beginning From" component={CustomInput} />
                            <Field name="EmployeeMainLedger" label="Employee Main Ledger" component={CustomInput} />
                            <Field name="VendorMainLedger" label="Vendor Main Ledger" component={CustomInput} />
                            <Field name="ClientMainLedger" label="Client Main Ledger" component={CustomInput} />
                        </div>

                        <h2 className="text-xs my-1.5 bg-[#b0e9f5] w-full py-1.5 px-4 rounded-md">Tax Information</h2>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-7 pl-8">
                            <Field name="PAN" label="PAN / IT No" component={CustomInput} />
                            <Field name="GSTType" label="GST Type" component={CustomInput} />
                            <Field name="TAN" label="TAN No." component={CustomInput} />
                            <Field name="CessNo" label="Cess No." component={CustomInput} />
                            <Field name="CIN" label="CIN No." component={CustomInput} />
                            <Field name="CompanyStatus" label="Company Status" component={CustomInput} required />
                            <Field name="TotalShares" label="Total No. of Shares" component={CustomInput} />
                            <Field name="SharePrice" label="Share Price" component={CustomInput} />
                            <Field name="BalanceSheetStock" label="Show Closing Stock in Balance Sheet" component={CustomInput} />
                            <Field name="CompanyAddress" label="Company Address" component={CustomInput} className="input-full-width col-span-2" />
                            <Field name="Remarks" label="Remarks" component={CustomInput} className="input-full-width col-span-2" />
                            <Field type="date" name="MinGoLiveDate" label="Min Go Live Date" component={CustomInput} />
                            <div className="flex items-center space-x-2">
                                <Field name="Status" label="Status" component={CustomInput} />
                                <span className="text-blue-600 cursor-pointer">HISTORY</span>
                            </div>
                        </div>

                    </div>
                    <div className="flex gap-2 items-center my-3 bg-gray-200 p-3 rounded-lg">
                        <button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className="cursor-pointer w-fit rounded-md text-sm font-semibold text-white bg-primary py-1 px-5 shadow-sm"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="cursor-pointer w-fit rounded-md text-sm font-semibold text-white bg-primary py-1 px-5 shadow-sm"
                        >
                            Search
                        </button>
                        <button
                            type="button"
                            className="cursor-pointer w-fit rounded-md text-sm font-semibold text-white bg-primary py-1 px-5 shadow-sm"
                        >
                            Print(1)
                        </button>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                        <div className="mb-3 flex items-center gap-2 justify-end text-sm">
                            <label htmlFor="search">Search:</label>
                            <input
                                type="search"
                                name="search"
                                value={searchTerm}
                                onChange={handleSearch}
                                className="shadow-inner bg-blue-100 px-2 py-1 rounded-md text-sm w-1/4"
                            />
                        </div>
                        <DataTable
                            columns={columns}
                            data={filteredData}
                            pagination
                            selectableRows
                            highlightOnHover
                        />
                    </div>
                </form>
            </FormikProvider>
        </div>
    )
};

export default CompanyMaster;
