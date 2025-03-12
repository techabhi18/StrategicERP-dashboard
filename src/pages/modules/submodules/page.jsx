import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import FormsRegistry from "../../../config/FormsRegistry";
import { findCaseInsensitiveKey } from "../../../utils/StringManipulation";
import Loader from "../../../components/common/Loader";
import { useFormsQuery } from "../../../store/formSlice";

const DynamicForm = () => {
    const { module, form } = useParams();

    const moduleKey = findCaseInsensitiveKey(FormsRegistry, module);
    const moduleObj = moduleKey ? FormsRegistry[moduleKey] : null;

    const formKey = moduleObj ? findCaseInsensitiveKey(moduleObj, form) : null;
    const FormComponent = formKey ? moduleObj[formKey] : null;

    if (!FormComponent) {
        return <div>Form not found.</div>;
    }

    const { data, isLoading, error, isError, isFetching, isSuccess } = useFormsQuery(form);

    return (
        <Suspense fallback={<Loader />}>
            <FormComponent />
        </Suspense>
    );
};

export default DynamicForm;
