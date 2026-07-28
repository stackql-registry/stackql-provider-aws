"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["150659"],{263779(e,t,r){r.r(t),r.d(t,{metadata:()=>i,default:()=>u,frontMatter:()=>o,contentTitle:()=>h,toc:()=>m,assets:()=>p});var i=JSON.parse('{"id":"services/pca_connector_ad/templates/index","title":"templates","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/pca_connector_ad/templates/index.md","sourceDirName":"services/pca_connector_ad/templates","slug":"/services/pca_connector_ad/templates/","permalink":"/services/pca_connector_ad/templates/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"templates","hide_title":false,"hide_table_of_contents":false,"keywords":["templates","pca_connector_ad","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"template_group_access_control_entries","permalink":"/services/pca_connector_ad/template_group_access_control_entries/"},"next":{"title":"pca_connector_scep","permalink":"/services/pca_connector_scep/"}}'),n=r(474848),a=r(28453),s=r(97362),l=r(897272),d=r(413554),c=r(541647);let o={title:"templates",hide_title:!1,hide_table_of_contents:!1,keywords:["templates","pca_connector_ad","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,p={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function x(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"templates"})," resource."]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"templates"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"aws.pca_connector_ad.templates"})})]})]})}),"\n",(0,n.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.p,{children:["The following fields are returned by ",(0,n.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"list_templates",values:[{label:"list_templates",value:"list_templates"},{label:"get_template",value:"get_template"}],children:[(0,n.jsx)(c.A,{value:"list_templates",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"Arn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) that was returned when you called CreateTemplate. (pattern: <code>^arn:[\\w-]+:pca-connector-ad:[\\w-]+:[0-9]+",":connector","/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/template/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"ConnectorArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) that was returned when you called CreateConnector. (pattern: <code>^arn:[\\w-]+:pca-connector-ad:[\\w-]+:[0-9]+",":connector","/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"CreatedAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The date and time that the template was created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"Definition"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Name of the template. The template name must be unique. (pattern: <code>^(?!^\\s+$)((?![\\x5c'\\x2b,;<=>#\\x22])([\\x20-\\x7E]))+$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"ObjectIdentifier"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Object identifier of a template. (pattern: <code>^([0-2]).([0-9]|([0-3][0-9]))(.([0-9]+)){0,126}$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"PolicySchema"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer"})}),(0,n.jsx)("td",{children:"The template schema version. Template schema versions can be v2, v3, or v4. The template configuration options change based on the template schema version."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"Revision"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The revision version of the template. Template updates will increment the minor revision. Re-enrolling all certificate holders will increment the major revision."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"Status"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Status of the template. Status can be creating, active, deleting, or failed. (ACTIVE, DELETING)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"UpdatedAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The date and time that the template was updated."})]})]})]})}),(0,n.jsx)(c.A,{value:"get_template",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"Arn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) that was returned when you called CreateTemplate. (pattern: <code>^arn:[\\w-]+:pca-connector-ad:[\\w-]+:[0-9]+",":connector","/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/template/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"ConnectorArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) that was returned when you called CreateConnector. (pattern: <code>^arn:[\\w-]+:pca-connector-ad:[\\w-]+:[0-9]+",":connector","/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"CreatedAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The date and time that the template was created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"Definition"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Name of the templates. Template names must be unique. (pattern: <code>^(?!^\\s+$)((?![\\x5c'\\x2b,;<=>#\\x22])([\\x20-\\x7E]))+$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"ObjectIdentifier"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Object identifier of a template. (pattern: <code>^([0-2]).([0-9]|([0-3][0-9]))(.([0-9]+)){0,126}$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"PolicySchema"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer"})}),(0,n.jsx)("td",{children:"The template schema version. Template schema versions can be v2, v3, or v4. The template configuration options change based on the template schema version."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"Revision"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The version of the template. Template updates will increment the minor revision. Re-enrolling all certificate holders will increment the major revision."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"Status"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Status of the template. Status can be creating, active, deleting, or failed. (ACTIVE, DELETING)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"UpdatedAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The date and time that the template was updated."})]})]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#list_templates",children:(0,n.jsx)(s.A,{code:"list_templates"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"select"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-ConnectorArn",children:(0,n.jsx)("code",{children:"ConnectorArn"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-MaxResults",children:(0,n.jsx)("code",{children:"MaxResults"})}),", ",(0,n.jsx)("a",{href:"#parameter-NextToken",children:(0,n.jsx)("code",{children:"NextToken"})})]}),(0,n.jsx)("td",{children:"Lists the templates, if any, that are associated with a connector."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#get_template",children:(0,n.jsx)(s.A,{code:"get_template"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"select"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-template_arn",children:(0,n.jsx)("code",{children:"template_arn"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Retrieves a certificate template that the connector uses to issue certificates from a private CA."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_template",children:(0,n.jsx)(s.A,{code:"create_template"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-ConnectorArn",children:(0,n.jsx)("code",{children:"ConnectorArn"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates an Active Directory compatible certificate template. The connectors issues certificates using these templates based on the requester\u2019s Active Directory group membership."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_template",children:(0,n.jsx)(s.A,{code:"update_template"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-template_arn",children:(0,n.jsx)("code",{children:"template_arn"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Update template configuration to define the information included in certificates."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_template",children:(0,n.jsx)(s.A,{code:"delete_template"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"delete"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-template_arn",children:(0,n.jsx)("code",{children:"template_arn"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes a template. Certificates issued using the template are still valid until they are revoked or expired."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,n.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{id:"parameter-ConnectorArn",children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"ConnectorArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Resource Name (ARN) that was returned when you called CreateConnector."})]}),(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,n.jsxs)("tr",{id:"parameter-template_arn",children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"template_arn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Resource Name (ARN) that was returned when you called CreateTemplate."})]}),(0,n.jsxs)("tr",{id:"parameter-MaxResults",children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"MaxResults"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer"})}),(0,n.jsx)("td",{children:"Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this NextToken value in a subsequent request to retrieve additional items."})]}),(0,n.jsxs)("tr",{id:"parameter-NextToken",children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.A,{code:"NextToken"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the NextToken parameter from the response you just received."})]})]})]}),"\n",(0,n.jsxs)(t.h2,{id:"select-examples",children:[(0,n.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"list_templates",values:[{label:"list_templates",value:"list_templates"},{label:"get_template",value:"get_template"}],children:[(0,n.jsxs)(c.A,{value:"list_templates",children:[(0,n.jsx)(t.p,{children:"Lists the templates, if any, that are associated with a connector."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\nArn,\nConnectorArn,\nCreatedAt,\nDefinition,\nName,\nObjectIdentifier,\nPolicySchema,\nRevision,\nStatus,\nUpdatedAt\nFROM aws.pca_connector_ad.templates\nWHERE ConnectorArn = '{{ ConnectorArn }}' -- required\nAND region = '{{ region }}' -- required\nAND MaxResults = '{{ MaxResults }}'\nAND NextToken = '{{ NextToken }}'\n;\n"})})]}),(0,n.jsxs)(c.A,{value:"get_template",children:[(0,n.jsx)(t.p,{children:"Retrieves a certificate template that the connector uses to issue certificates from a private CA."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\nArn,\nConnectorArn,\nCreatedAt,\nDefinition,\nName,\nObjectIdentifier,\nPolicySchema,\nRevision,\nStatus,\nUpdatedAt\nFROM aws.pca_connector_ad.templates\nWHERE template_arn = '{{ template_arn }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,n.jsxs)(t.h2,{id:"insert-examples",children:[(0,n.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"create_template",values:[{label:"create_template",value:"create_template"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(c.A,{value:"create_template",children:[(0,n.jsx)(t.p,{children:"Creates an Active Directory compatible certificate template. The connectors issues certificates using these templates based on the requester\u2019s Active Directory group membership."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.pca_connector_ad.templates (\nClientToken,\nConnectorArn,\nDefinition,\nName,\nTags,\nregion\n)\nSELECT \n'{{ ClientToken }}',\n'{{ ConnectorArn }}' /* required */,\n'{{ Definition }}',\n'{{ Name }}',\n'{{ Tags }}',\n'{{ region }}'\nRETURNING\nTemplateArn\n;\n"})})]}),(0,n.jsx)(c.A,{value:"manifest",children:(0,n.jsx)(l.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: templates
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the templates resource.
  - name: ClientToken
    value: "{{ ClientToken }}"
  - name: ConnectorArn
    value: "{{ ConnectorArn }}"
  - name: Definition
    description: |
      Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
    value:
      TemplateV2:
        CertificateValidity:
          RenewalPeriod:
            Period: {{ Period }}
            PeriodType: "{{ PeriodType }}"
          ValidityPeriod:
            Period: {{ Period }}
            PeriodType: "{{ PeriodType }}"
        EnrollmentFlags:
          EnableKeyReuseOnNtTokenKeysetStorageFull: {{ EnableKeyReuseOnNtTokenKeysetStorageFull }}
          IncludeSymmetricAlgorithms: {{ IncludeSymmetricAlgorithms }}
          NoSecurityExtension: {{ NoSecurityExtension }}
          RemoveInvalidCertificateFromPersonalStore: {{ RemoveInvalidCertificateFromPersonalStore }}
          UserInteractionRequired: {{ UserInteractionRequired }}
        Extensions:
          ApplicationPolicies:
            Critical: {{ Critical }}
            Policies:
              - PolicyObjectIdentifier: "{{ PolicyObjectIdentifier }}"
                PolicyType: "{{ PolicyType }}"
          KeyUsage:
            Critical: {{ Critical }}
            UsageFlags:
              DataEncipherment: {{ DataEncipherment }}
              DigitalSignature: {{ DigitalSignature }}
              KeyAgreement: {{ KeyAgreement }}
              KeyEncipherment: {{ KeyEncipherment }}
              NonRepudiation: {{ NonRepudiation }}
        GeneralFlags:
          AutoEnrollment: {{ AutoEnrollment }}
          MachineType: {{ MachineType }}
        PrivateKeyAttributes:
          CryptoProviders:
            - "{{ CryptoProviders }}"
          KeySpec: "{{ KeySpec }}"
          MinimalKeyLength: {{ MinimalKeyLength }}
        PrivateKeyFlags:
          ClientVersion: "{{ ClientVersion }}"
          ExportableKey: {{ ExportableKey }}
          StrongKeyProtectionRequired: {{ StrongKeyProtectionRequired }}
        SubjectNameFlags:
          RequireCommonName: {{ RequireCommonName }}
          RequireDirectoryPath: {{ RequireDirectoryPath }}
          RequireDnsAsCn: {{ RequireDnsAsCn }}
          RequireEmail: {{ RequireEmail }}
          SanRequireDirectoryGuid: {{ SanRequireDirectoryGuid }}
          SanRequireDns: {{ SanRequireDns }}
          SanRequireDomainDns: {{ SanRequireDomainDns }}
          SanRequireEmail: {{ SanRequireEmail }}
          SanRequireSpn: {{ SanRequireSpn }}
          SanRequireUpn: {{ SanRequireUpn }}
        SupersededTemplates:
          - "{{ SupersededTemplates }}"
      TemplateV3:
        CertificateValidity:
          RenewalPeriod:
            Period: {{ Period }}
            PeriodType: "{{ PeriodType }}"
          ValidityPeriod:
            Period: {{ Period }}
            PeriodType: "{{ PeriodType }}"
        EnrollmentFlags:
          EnableKeyReuseOnNtTokenKeysetStorageFull: {{ EnableKeyReuseOnNtTokenKeysetStorageFull }}
          IncludeSymmetricAlgorithms: {{ IncludeSymmetricAlgorithms }}
          NoSecurityExtension: {{ NoSecurityExtension }}
          RemoveInvalidCertificateFromPersonalStore: {{ RemoveInvalidCertificateFromPersonalStore }}
          UserInteractionRequired: {{ UserInteractionRequired }}
        Extensions:
          ApplicationPolicies:
            Critical: {{ Critical }}
            Policies:
              - PolicyObjectIdentifier: "{{ PolicyObjectIdentifier }}"
                PolicyType: "{{ PolicyType }}"
          KeyUsage:
            Critical: {{ Critical }}
            UsageFlags:
              DataEncipherment: {{ DataEncipherment }}
              DigitalSignature: {{ DigitalSignature }}
              KeyAgreement: {{ KeyAgreement }}
              KeyEncipherment: {{ KeyEncipherment }}
              NonRepudiation: {{ NonRepudiation }}
        GeneralFlags:
          AutoEnrollment: {{ AutoEnrollment }}
          MachineType: {{ MachineType }}
        HashAlgorithm: "{{ HashAlgorithm }}"
        PrivateKeyAttributes:
          Algorithm: "{{ Algorithm }}"
          CryptoProviders:
            - "{{ CryptoProviders }}"
          KeySpec: "{{ KeySpec }}"
          KeyUsageProperty:
            PropertyFlags:
              Decrypt: {{ Decrypt }}
              KeyAgreement: {{ KeyAgreement }}
              Sign: {{ Sign }}
            PropertyType: "{{ PropertyType }}"
          MinimalKeyLength: {{ MinimalKeyLength }}
        PrivateKeyFlags:
          ClientVersion: "{{ ClientVersion }}"
          ExportableKey: {{ ExportableKey }}
          RequireAlternateSignatureAlgorithm: {{ RequireAlternateSignatureAlgorithm }}
          StrongKeyProtectionRequired: {{ StrongKeyProtectionRequired }}
        SubjectNameFlags:
          RequireCommonName: {{ RequireCommonName }}
          RequireDirectoryPath: {{ RequireDirectoryPath }}
          RequireDnsAsCn: {{ RequireDnsAsCn }}
          RequireEmail: {{ RequireEmail }}
          SanRequireDirectoryGuid: {{ SanRequireDirectoryGuid }}
          SanRequireDns: {{ SanRequireDns }}
          SanRequireDomainDns: {{ SanRequireDomainDns }}
          SanRequireEmail: {{ SanRequireEmail }}
          SanRequireSpn: {{ SanRequireSpn }}
          SanRequireUpn: {{ SanRequireUpn }}
        SupersededTemplates:
          - "{{ SupersededTemplates }}"
      TemplateV4:
        CertificateValidity:
          RenewalPeriod:
            Period: {{ Period }}
            PeriodType: "{{ PeriodType }}"
          ValidityPeriod:
            Period: {{ Period }}
            PeriodType: "{{ PeriodType }}"
        EnrollmentFlags:
          EnableKeyReuseOnNtTokenKeysetStorageFull: {{ EnableKeyReuseOnNtTokenKeysetStorageFull }}
          IncludeSymmetricAlgorithms: {{ IncludeSymmetricAlgorithms }}
          NoSecurityExtension: {{ NoSecurityExtension }}
          RemoveInvalidCertificateFromPersonalStore: {{ RemoveInvalidCertificateFromPersonalStore }}
          UserInteractionRequired: {{ UserInteractionRequired }}
        Extensions:
          ApplicationPolicies:
            Critical: {{ Critical }}
            Policies:
              - PolicyObjectIdentifier: "{{ PolicyObjectIdentifier }}"
                PolicyType: "{{ PolicyType }}"
          KeyUsage:
            Critical: {{ Critical }}
            UsageFlags:
              DataEncipherment: {{ DataEncipherment }}
              DigitalSignature: {{ DigitalSignature }}
              KeyAgreement: {{ KeyAgreement }}
              KeyEncipherment: {{ KeyEncipherment }}
              NonRepudiation: {{ NonRepudiation }}
        GeneralFlags:
          AutoEnrollment: {{ AutoEnrollment }}
          MachineType: {{ MachineType }}
        HashAlgorithm: "{{ HashAlgorithm }}"
        PrivateKeyAttributes:
          Algorithm: "{{ Algorithm }}"
          CryptoProviders:
            - "{{ CryptoProviders }}"
          KeySpec: "{{ KeySpec }}"
          KeyUsageProperty:
            PropertyFlags:
              Decrypt: {{ Decrypt }}
              KeyAgreement: {{ KeyAgreement }}
              Sign: {{ Sign }}
            PropertyType: "{{ PropertyType }}"
          MinimalKeyLength: {{ MinimalKeyLength }}
        PrivateKeyFlags:
          ClientVersion: "{{ ClientVersion }}"
          ExportableKey: {{ ExportableKey }}
          RequireAlternateSignatureAlgorithm: {{ RequireAlternateSignatureAlgorithm }}
          RequireSameKeyRenewal: {{ RequireSameKeyRenewal }}
          StrongKeyProtectionRequired: {{ StrongKeyProtectionRequired }}
          UseLegacyProvider: {{ UseLegacyProvider }}
        SubjectNameFlags:
          RequireCommonName: {{ RequireCommonName }}
          RequireDirectoryPath: {{ RequireDirectoryPath }}
          RequireDnsAsCn: {{ RequireDnsAsCn }}
          RequireEmail: {{ RequireEmail }}
          SanRequireDirectoryGuid: {{ SanRequireDirectoryGuid }}
          SanRequireDns: {{ SanRequireDns }}
          SanRequireDomainDns: {{ SanRequireDomainDns }}
          SanRequireEmail: {{ SanRequireEmail }}
          SanRequireSpn: {{ SanRequireSpn }}
          SanRequireUpn: {{ SanRequireUpn }}
        SupersededTemplates:
          - "{{ SupersededTemplates }}"
  - name: Name
    value: "{{ Name }}"
  - name: Tags
    value: "{{ Tags }}"
`})})]}),"\n",(0,n.jsxs)(t.h2,{id:"update-examples",children:[(0,n.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsx)(d.A,{defaultValue:"update_template",values:[{label:"update_template",value:"update_template"}],children:(0,n.jsxs)(c.A,{value:"update_template",children:[(0,n.jsx)(t.p,{children:"Update template configuration to define the information included in certificates."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.pca_connector_ad.templates\nSET \nDefinition = '{{ Definition }}',\nReenrollAllCertificateHolders = {{ ReenrollAllCertificateHolders }}\nWHERE \ntemplate_arn = '{{ template_arn }}' --required\nAND region = '{{ region }}' --required;\n"})})]})}),"\n",(0,n.jsxs)(t.h2,{id:"delete-examples",children:[(0,n.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(d.A,{defaultValue:"delete_template",values:[{label:"delete_template",value:"delete_template"}],children:(0,n.jsxs)(c.A,{value:"delete_template",children:[(0,n.jsx)(t.p,{children:"Deletes a template. Certificates issued using the template are still valid until they are revoked or expired."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.pca_connector_ad.templates\nWHERE template_arn = '{{ template_arn }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function u(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);