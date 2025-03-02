import React from "react";

const CompanyMaster = React.lazy(() =>
  import("../pages/modules/submodules/ERPAdmin/CompanyMaster/page")
);

const LegalEntityMaster = React.lazy(() =>
  import("../pages/modules/submodules/ERPAdmin/LegalEntityMaster/page")
);

const ProcessBarChart = React.lazy(() =>
  import("../pages/modules/submodules/ProcessManagement/ProcessBarChart/page")
);

const FormsRegistry = {
  ERPAdmin: {
    CompanyMaster,
    LegalEntityMaster,
  },
  ProcessManagement: {
    ProcessBarChart,
  },
};

export default FormsRegistry;
