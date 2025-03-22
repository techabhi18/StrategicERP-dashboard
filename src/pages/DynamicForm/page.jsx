import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { NavLink, useParams } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useIntl } from "react-intl";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useLocale } from "../../i18n";

import CustomInput from "../../components/forms/CustomInput";
import CustomTextarea from "../../components/forms/CustomTextarea";

import formConfig from "../../data/form.json";

const Page = () => {
    const { formType } = useParams();
    const { locale } = useLocale();
    const intl = useIntl();
    const [formDetails, setFormDetails] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const safeFormatMessage = ({ id, defaultMessage }) => {
        try {
            return intl.formatMessage({ id, defaultMessage });
        } catch (error) {
            return defaultMessage;
        }
    };

    useEffect(() => {
        setLoading(true);
        if (formConfig[formType]) {
            setFormDetails(formConfig[formType]);
            setFilteredData(formConfig[formType].table?.data || []);
        } else {
            setFormDetails(null);
        }
        setLoading(false);
    }, [formType, locale]);

    if (loading)
        return (
            <div>
                {safeFormatMessage({ id: "loading", defaultMessage: "Loading..." })}
            </div>
        );

    if (!formDetails) {
        return (
            <div>
                {safeFormatMessage({ id: "No Form Found", defaultMessage: "No Form Found" })}
            </div>
        );
    }

    const { fields, api, table, search } = formDetails;

    const initialValues = fields.reduce((acc, field) => {
        acc[field.name] = field.default || "";
        return acc;
    }, {});

    const validationSchema = Yup.object().shape(
        fields.reduce((schema, field) => {
            if (field.required) {
                let validator = Yup.string();
                if (field.type === "number") validator = Yup.number();
                if (field.type === "date") validator = Yup.date();

                schema[field.name] = validator.required(
                    safeFormatMessage({
                        id: field.validationMessage,
                        defaultMessage: field.validationMessage,
                    })
                );
            }
            return schema;
        }, {})
    );

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log(values);

        try {
            const response = await axios({
                method: api.method,
                url: api.url,
                headers: api.headers,
                data: values,
            });
            console.log("API Response:", response);
            console.log("API Response Data:", response?.data);
        } catch (error) {
            console.error("API Error:", error);
        } finally {
            setSubmitting(false);
        }
    };

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        setFilteredData(
            table.data.filter((item) =>
                item[search.field].toLowerCase().includes(value)
            )
        );
    };

    return (
        <div className="bg-container overflow-auto h-[87vh] hide-scrollbar">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange, handleBlur, isSubmitting }) => (
                    <Form>
                        <div>
                            <div className="bg-white text-[#76839a] py-2 px-3 text-sm font-semibold">
                                <NavLink to="/" className="cursor-pointer px-1 hover:text-[#2962cb]">Home</NavLink> / <NavLink to="/erp-admin" className="cursor-pointer px-1 hover:text-primaryText">Admin</NavLink> / <span className="px-1 text-primaryText cursor-pointer">{formDetails.title}</span>
                            </div>
                            <div className="bg-white grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-7 p-4 rounded-lg m-4">
                                {fields.map((field) => (
                                    <div key={field.name} className={field.className || ""}>
                                        {field.type === "textarea" ? (
                                            <Field
                                                name={field.name}
                                                label={safeFormatMessage({
                                                    id: field.label,
                                                    defaultMessage: field.label,
                                                })}
                                                component={CustomTextarea}
                                                rows="3"
                                                required={field.required}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values[field.name]}
                                            />
                                        ) : field.type === "select" ? (
                                            <div className="w-full">
                                                <label
                                                    htmlFor={field.name}
                                                    className="text-sm w-full text-primaryText mb-1"
                                                >
                                                    {safeFormatMessage({
                                                        id: field.label,
                                                        defaultMessage: field.label,
                                                    })}
                                                </label>
                                                <Field
                                                    name={field.name}
                                                    as="select"
                                                    id={field.name}
                                                    onChange={handleChange}
                                                    value={values[field.name]}
                                                    onBlur={handleBlur}
                                                    className="w-full bg-container border border-[#BDC2D0] rounded-md focus:outline-none px-2 py-1 text-sm ml-1"
                                                >
                                                    <option value="">
                                                        {safeFormatMessage({
                                                            id: "select",
                                                            defaultMessage: "Select",
                                                        })}{" "}
                                                        {safeFormatMessage({
                                                            id: field.label,
                                                            defaultMessage: field.label,
                                                        })}
                                                    </option>
                                                    {field.options.map((option) => (
                                                        <option key={option} value={option}>
                                                            {safeFormatMessage({
                                                                id: option,
                                                                defaultMessage: option,
                                                            })}
                                                        </option>
                                                    ))}
                                                </Field>
                                            </div>
                                        ) : (
                                            <Field
                                                type={field.type}
                                                name={field.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values[field.name]}
                                                label={safeFormatMessage({
                                                    id: field.label,
                                                    defaultMessage: field.label,
                                                })}
                                                component={CustomInput}
                                                required={field.required}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-2 items-center bg-white p-4 rounded-lg m-4">
                                {formDetails.actions.map((action) => (
                                    <button
                                        key={action.name}
                                        type={action.type === "submit" ? "submit" : "button"}
                                        className={`btn-hover cursor-pointer w-fit rounded-md text-sm font-semibold border border-primary text-primary bg-white  py-1 px-5 shadow-sm ${action.className}`}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting && action.type === "submit"
                                            ? safeFormatMessage({
                                                id: "saving",
                                                defaultMessage: "Saving...",
                                            })
                                            : safeFormatMessage({
                                                id: action.label,
                                                defaultMessage: action.label,
                                            })}
                                    </button>
                                ))}
                                <div className="flex gap-2 items-center" onMouseLeave={() => setTooltipVisible(false)}>
                                    <p className="text-sm text-black">Rows:</p>
                                    <input type="number" className="w-1/4 outline-none border border-primary rounded-md px-2 py-1 text-sm" value={10} />
                                    <div className="relative">
                                        <BsThreeDotsVertical
                                            className="text-primary text-2xl cursor-pointer"
                                            onClick={() => setTooltipVisible(!tooltipVisible)}
                                            onMouseEnter={() => setTooltipVisible(true)} />
                                        {tooltipVisible && (
                                            <div
                                                className="absolute left-2.5 bottom-7 bg-white border border-primary shadow-lg rounded-lg text-sm flex gap-2 p-2"
                                                onMouseEnter={() => setTooltipVisible(true)}
                                                onMouseLeave={() => setTooltipVisible(false)}
                                            >
                                                <button
                                                    type="button"
                                                    className={`btn-hover cursor-pointer w-fit rounded-md text-sm font-semibold border border-primary text-primary bg-white py-1 px-5 shadow-sm`}
                                                >
                                                    {safeFormatMessage({
                                                        id: "export",
                                                        defaultMessage: "Export",
                                                    })}
                                                </button>
                                                <button
                                                    type="button"
                                                    className={`btn-hover cursor-pointer w-fit rounded-md text-sm font-semibold border border-primary text-primary bg-white py-1 px-5 shadow-sm`}
                                                >
                                                    {safeFormatMessage({
                                                        id: "import",
                                                        defaultMessage: "Import",
                                                    })}
                                                </button>
                                                <button
                                                    type="button"
                                                    className={`btn-hover cursor-pointer w-fit rounded-md text-sm font-semibold border border-primary text-primary bg-white py-1 px-5 shadow-sm`}
                                                >
                                                    {safeFormatMessage({
                                                        id: "clear",
                                                        defaultMessage: "Clear",
                                                    })}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {search?.enabled && (
                            <div className="bg-white p-4 rounded-lg m-4">
                                <div className="mb-3 flex items-center gap-2 justify-end text-sm">
                                    <label htmlFor="search">
                                        {safeFormatMessage({
                                            id: "search",
                                            defaultMessage: "Search:",
                                        })}
                                    </label>
                                    <input
                                        type="search"
                                        name="search"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                        className="bg-[#f9fafe] border border-primary px-2 py-1 outline-none rounded-md text-sm w-1/4"
                                        placeholder={safeFormatMessage({
                                            id: search.placeholder,
                                            defaultMessage: search.placeholder,
                                        })}
                                    />
                                </div>

                                <div className="overflow-auto hide-scrollbar w-[calc(100vw-165px)]">
                                    <DataTable
                                        columns={table?.columns.map((col) => ({
                                            name: safeFormatMessage({
                                                id: col.name,
                                                defaultMessage: col.name,
                                            }),
                                            selector: (row) => row[col.selector],
                                            sortable: col.sortable,
                                        }))}
                                        data={filteredData}
                                        pagination
                                        selectableRows
                                        highlightOnHover
                                    />
                                </div>
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </div >
    );
};

export default Page;
