import { TextEncoder, TextDecoder } from "util";
if (!global.TextEncoder) global.TextEncoder = TextEncoder;
if (!global.TextDecoder) global.TextDecoder = TextDecoder;

import "@testing-library/jest-dom";
import React from "react";
global.React = React;
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Page from "../pages/DynamicForm/page";
import formConfig from "../data/form.json";

jest.mock("../i18n", () => ({ useLocale: () => ({ locale: "en" }) }));

describe("DynamicForm Component", () => {
  const renderWithRouter = (initialRoute) => {
    return render(
      <IntlProvider locale="en" messages={{}}>
        <MemoryRouter initialEntries={[initialRoute]}>
          <Routes>
            <Route path="/:formType" element={<Page />} />
          </Routes>
        </MemoryRouter>
      </IntlProvider>
    );
  };

  test("renders the correct form based on URL params (company-master)", async () => {
    const { container } = renderWithRouter("/company-master");
    const titleElement = await screen.findByText("Company Master");
    expect(titleElement).toBeInTheDocument();
    const companyNameField = container.querySelector(
      'input[name="CompanyName"]'
    );
    expect(companyNameField).toBeInTheDocument();
  });

  test('renders "No Form Found" for an invalid URL param', async () => {
    renderWithRouter("/nonexistent-form");
    const noFormText = await screen.findByText("No Form Found");
    expect(noFormText).toBeInTheDocument();
  });

  test("shows validation error message on form submission when required field is empty", async () => {
    renderWithRouter("/company-master");
    const saveButton = await screen.findByRole("button", { name: "Save" });
    await userEvent.click(saveButton);
    const errorMessage = await screen.findByText("Company Name is required");
    expect(errorMessage).toBeInTheDocument();
  });

  test("renders all fields defined in form.json for company-master", async () => {
    const { container } = renderWithRouter("/company-master");
    await screen.findByText("Company Master");
    const fields = formConfig["company-master"].fields;
    fields.forEach((field) => {
      const element = container.querySelector(`[name="${field.name}"]`);
      expect(element).toBeInTheDocument();
    });
  });

  test("shows validation error messages for all required fields on form submission", async () => {
    renderWithRouter("/company-master");
    await screen.findByText("Company Master");
    const saveButton = await screen.findByRole("button", { name: "Save" });
    await userEvent.click(saveButton);
    const requiredFields = formConfig["company-master"].fields.filter(
      (field) => field.required
    );
    for (let field of requiredFields) {
      const errorMessage = await screen.findByText(field.validationMessage);
      expect(errorMessage).toBeInTheDocument();
    }
  });
});
