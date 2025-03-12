import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { MemoryRouter, Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
import DynamicForm from "../pages/DynamicForm.jsx";
import formConfig from "../data/form.json";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    create: jest.fn(),
    request: jest.fn(),
  },
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

const Wrapper = ({ children }) => (
  <MemoryRouter initialEntries={["/form/company-master"]}>
    <IntlProvider locale="en" messages={{}}>
      <Routes>
        <Route path="/form/:formType" element={children} />
      </Routes>
    </IntlProvider>
  </MemoryRouter>
);

const renderForm = (formType) => {
  useParams.mockReturnValue({ formType });
  return render(<DynamicForm />, { wrapper: Wrapper });
};

describe("DynamicForm Component", () => {
  beforeEach(() => {
    axios.mockClear();
  });

  describe("Company Master Form", () => {
    test("renders all form fields", () => {
      renderForm("company-master");

      expect(screen.getByLabelText(/Name of Company/i)).toBeInTheDocument();
      expect(
        screen.getByLabelText(/Communication Address/i)
      ).toBeInTheDocument();
      expect(screen.getByLabelText(/ERP Go-Live Date/i)).toBeInTheDocument();
      expect(screen.getByText(/Balance Sheet Stock/i)).toBeInTheDocument();
      expect(screen.getByDisplayValue("Auto")).toBeInTheDocument();
    });

    test("shows validation errors for required fields", async () => {
      renderForm("company-master");

      fireEvent.click(screen.getByText(/Save/i));

      await waitFor(() => {
        expect(
          screen.getByText(/Company Name is required/i)
        ).toBeInTheDocument();
        expect(
          screen.getByText(/Company Code is required/i)
        ).toBeInTheDocument();
        expect(
          screen.getByText(/ERP Go-Live Date is required/i)
        ).toBeInTheDocument();
      });
    });

    test("renders select options correctly", () => {
      renderForm("company-master");

      const select = screen.getByLabelText(/Balance Sheet Stock/i);
      fireEvent.mouseDown(select);

      expect(screen.getByRole("option", { name: /Yes/i })).toBeInTheDocument();
      expect(screen.getByRole("option", { name: /No/i })).toBeInTheDocument();
    });

    test("renders and filters data table", async () => {
      renderForm("company-master");

      expect(screen.getByText("HoABL PVT LTD")).toBeInTheDocument();

      const searchInput = screen.getByPlaceholderText(
        /Search by Company Name/i
      );
      fireEvent.change(searchInput, { target: { value: "HoABL" } });

      await waitFor(() => {
        expect(screen.queryByText("Pritam Test")).not.toBeInTheDocument();
        expect(screen.getByText("HoABL PVT LTD")).toBeInTheDocument();
      });
    });
  });

  describe("Project Master Form", () => {
    test("renders all form fields", () => {
      renderForm("project-master");

      expect(screen.getByLabelText(/Project Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Project Start Date/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Project Address/i)).toBeInTheDocument();
      expect(screen.getByText(/Budget Applicable/i)).toBeInTheDocument();
    });

    test("validates required fields", async () => {
      renderForm("project-master");

      fireEvent.click(screen.getByText(/Save/i));

      await waitFor(() => {
        expect(
          screen.getByText(/Project Name is required/i)
        ).toBeInTheDocument();
        expect(
          screen.getByText(/Project Code is required/i)
        ).toBeInTheDocument();
        expect(screen.getByText(/Country is required/i)).toBeInTheDocument();
      });
    });

    test("renders complex select dropdowns", () => {
      renderForm("project-master");

      const countrySelect = screen.getByLabelText(/Country/i);
      fireEvent.mouseDown(countrySelect);

      expect(
        screen.getByRole("option", { name: /India/i })
      ).toBeInTheDocument();
      expect(screen.getByRole("option", { name: /USA/i })).toBeInTheDocument();
    });
  });
});
