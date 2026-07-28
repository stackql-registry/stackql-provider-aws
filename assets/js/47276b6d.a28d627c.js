"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["876448"],{783378(e,t,n){n.r(t),n.d(t,{metadata:()=>o,default:()=>x,frontMatter:()=>d,contentTitle:()=>u,toc:()=>h,assets:()=>p});var o=JSON.parse('{"id":"services/glue/connection_types/index","title":"connection_types","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/glue/connection_types/index.md","sourceDirName":"services/glue/connection_types","slug":"/services/glue/connection_types/","permalink":"/services/glue/connection_types/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"connection_types","hide_title":false,"hide_table_of_contents":false,"keywords":["connection_types","glue","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"column_statistics_task_settings","permalink":"/services/glue/column_statistics_task_settings/"},"next":{"title":"connections","permalink":"/services/glue/connections/"}}'),r=n(474848),i=n(28453),s=n(97362),a=n(897272),c=n(413554),l=n(541647);let d={title:"connection_types",hide_title:!1,hide_table_of_contents:!1,keywords:["connection_types","glue","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,p={},h=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function y(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"connection_types"})," resource."]}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"connection_types"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"aws.glue.connection_types"})})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.p,{children:["The following fields are returned by ",(0,r.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsxs)(c.A,{defaultValue:"describe_connection_type",values:[{label:"describe_connection_type",value:"describe_connection_type"},{label:"list_connection_types",value:"list_connection_types"}],children:[(0,r.jsx)(l.A,{value:"describe_connection_type",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"AthenaConnectionProperties"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Connection properties specific to the Athena compute environment."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"AuthenticationConfiguration"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The type of authentication used for the connection."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Capabilities"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The supported authentication types, data interface types (compute environments), and data operations of the connector."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"ComputeEnvironmentConfigurations"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The compute environments that are supported by the connection."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"ConnectionOptions"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Returns properties that can be set when creating a connection in the ConnectionInput.ConnectionProperties. ConnectionOptions defines parameters that can be set in a Spark ETL script in the connection options map passed to a dataframe."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"ConnectionProperties"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Connection properties which are common across compute environments."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"ConnectionType"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The name of the connection type. (pattern: <code>[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Description"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A description of the connection type."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"PhysicalConnectionRequirements"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Physical requirements for a connection, such as VPC, Subnet and Security Group specifications."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"PythonConnectionProperties"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Connection properties specific to the Python compute environment."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"RestConfiguration"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"HTTP request and response configuration, validation endpoint, and entity configurations for REST based data source."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"SparkConnectionProperties"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Connection properties specific to the Spark compute environment."})]})]})]})}),(0,r.jsx)(l.A,{value:"list_connection_types",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Capabilities"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The supported authentication types, data interface types (compute environments), and data operations of the connector."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Categories"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"array"})}),(0,r.jsx)("td",{children:"A list of categories that this connection type belongs to. Categories help users filter and find appropriate connection types based on their use cases."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"ConnectionType"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The name of the connection type. (JDBC, SFTP, MONGODB, KAFKA, NETWORK, MARKETPLACE, CUSTOM, SALESFORCE, VIEW_VALIDATION_REDSHIFT, VIEW_VALIDATION_ATHENA, GOOGLEADS, GOOGLESHEETS, GOOGLEANALYTICS4, SERVICENOW, MARKETO, SAPODATA, ZENDESK, JIRACLOUD, NETSUITEERP, HUBSPOT, FACEBOOKADS, INSTAGRAMADS, ZOHOCRM, SALESFORCEPARDOT, SALESFORCEMARKETINGCLOUD, ADOBEANALYTICS, SLACK, LINKEDIN, MIXPANEL, ASANA, STRIPE, SMARTSHEET, DATADOG, WOOCOMMERCE, INTERCOM, SNAPCHATADS, PAYPAL, QUICKBOOKS, FACEBOOKPAGEINSIGHTS, FRESHDESK, TWILIO, DOCUSIGNMONITOR, FRESHSALES, ZOOM, GOOGLESEARCHCONSOLE, SALESFORCECOMMERCECLOUD, SAPCONCUR, DYNATRACE, MICROSOFTDYNAMIC365FINANCEANDOPS, MICROSOFTTEAMS, BLACKBAUDRAISEREDGENXT, MAILCHIMP, GITLAB, PENDO, PRODUCTBOARD, CIRCLECI, PIPEDIVE, SENDGRID, AZURECOSMOS, AZURESQL, BIGQUERY, BLACKBAUD, CLOUDERAHIVE, CLOUDERAIMPALA, CLOUDWATCH, CLOUDWATCHMETRICS, CMDB, DATALAKEGEN2, DB2, DB2AS400, DOCUMENTDB, DOMO, DYNAMODB, GOOGLECLOUDSTORAGE, HBASE, KUSTOMER, MICROSOFTDYNAMICS365CRM, MONDAY, MYSQL, OKTA, OPENSEARCH, ORACLE, PIPEDRIVE, POSTGRESQL, SAPHANA, SQLSERVER, SYNAPSE, TERADATA, TERADATANOS, TIMESTREAM, TPCDS, VERTICA)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"ConnectionTypeVariants"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"array"})}),(0,r.jsx)("td",{children:"A list of variants available for this connection type. Different variants may provide specialized configurations for specific use cases or implementations of the same general connection type."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Description"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A description of the connection type."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"DisplayName"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The human-readable name for the connection type that is displayed in the Glue console."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"LogoUrl"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The URL of the logo associated with a connection type."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Vendor"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The name of the vendor or provider that created or maintains this connection type."})]})]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#describe_connection_type",children:(0,r.jsx)(s.A,{code:"describe_connection_type"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"select"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"The DescribeConnectionType API provides full details of the supported options for a given connection type in Glue. The response includes authentication configuration details that show supported authentication types and properties, and RestConfiguration for custom REST-based connection types registered via RegisterConnectionType. See also: ListConnectionTypes, RegisterConnectionType, DeleteConnectionType"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#list_connection_types",children:(0,r.jsx)(s.A,{code:"list_connection_types"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"select"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"The ListConnectionTypes API provides a discovery mechanism to learn available connection types in Glue. The response contains a list of connection types with high-level details of what is supported for each connection type, including both built-in connection types and custom connection types registered via RegisterConnectionType. The connection types listed are the set of supported options for the ConnectionType value in the CreateConnection API. See also: DescribeConnectionType, RegisterConnectionType, DeleteConnectionType"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#register_connection_type",children:(0,r.jsx)(s.A,{code:"register_connection_type"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-ConnectionType",children:(0,r.jsx)("code",{children:"ConnectionType"})}),", ",(0,r.jsx)("a",{href:"#parameter-IntegrationType",children:(0,r.jsx)("code",{children:"IntegrationType"})}),", ",(0,r.jsx)("a",{href:"#parameter-ConnectionProperties",children:(0,r.jsx)("code",{children:"ConnectionProperties"})}),", ",(0,r.jsx)("a",{href:"#parameter-ConnectorAuthenticationConfiguration",children:(0,r.jsx)("code",{children:"ConnectorAuthenticationConfiguration"})}),", ",(0,r.jsx)("a",{href:"#parameter-RestConfiguration",children:(0,r.jsx)("code",{children:"RestConfiguration"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Registers a custom connection type in Glue based on the configuration provided. This operation enables customers to configure custom connectors for any data source with REST-based APIs, eliminating the need for building custom Lambda connectors. The registered connection type stores details about how requests and responses are interpreted by REST sources, including connection properties, authentication configuration, and REST configuration with entity definitions. Once registered, customers can create connections using this connection type and work with them the same way as natively supported Glue connectors. Supports multiple authentication types including Basic, OAuth2 (Client Credentials, JWT Bearer, Authorization Code), and Custom Auth configurations."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#delete_connection_type",children:(0,r.jsx)(s.A,{code:"delete_connection_type"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"delete"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Deletes a custom connection type in Glue. The connection type must exist and be registered before it can be deleted. This operation supports cleanup of connection type resources and helps maintain proper lifecycle management of custom connection types."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,r.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,r.jsxs)(t.h2,{id:"select-examples",children:[(0,r.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsxs)(c.A,{defaultValue:"describe_connection_type",values:[{label:"describe_connection_type",value:"describe_connection_type"},{label:"list_connection_types",value:"list_connection_types"}],children:[(0,r.jsxs)(l.A,{value:"describe_connection_type",children:[(0,r.jsx)(t.p,{children:"The DescribeConnectionType API provides full details of the supported options for a given connection type in Glue. The response includes authentication configuration details that show supported authentication types and properties, and RestConfiguration for custom REST-based connection types registered via RegisterConnectionType. See also: ListConnectionTypes, RegisterConnectionType, DeleteConnectionType"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\nAthenaConnectionProperties,\nAuthenticationConfiguration,\nCapabilities,\nComputeEnvironmentConfigurations,\nConnectionOptions,\nConnectionProperties,\nConnectionType,\nDescription,\nPhysicalConnectionRequirements,\nPythonConnectionProperties,\nRestConfiguration,\nSparkConnectionProperties\nFROM aws.glue.connection_types\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,r.jsxs)(l.A,{value:"list_connection_types",children:[(0,r.jsx)(t.p,{children:"The ListConnectionTypes API provides a discovery mechanism to learn available connection types in Glue. The response contains a list of connection types with high-level details of what is supported for each connection type, including both built-in connection types and custom connection types registered via RegisterConnectionType. The connection types listed are the set of supported options for the ConnectionType value in the CreateConnection API. See also: DescribeConnectionType, RegisterConnectionType, DeleteConnectionType"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\nCapabilities,\nCategories,\nConnectionType,\nConnectionTypeVariants,\nDescription,\nDisplayName,\nLogoUrl,\nVendor\nFROM aws.glue.connection_types\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"insert-examples",children:[(0,r.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(c.A,{defaultValue:"register_connection_type",values:[{label:"register_connection_type",value:"register_connection_type"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(l.A,{value:"register_connection_type",children:[(0,r.jsx)(t.p,{children:"Registers a custom connection type in Glue based on the configuration provided. This operation enables customers to configure custom connectors for any data source with REST-based APIs, eliminating the need for building custom Lambda connectors. The registered connection type stores details about how requests and responses are interpreted by REST sources, including connection properties, authentication configuration, and REST configuration with entity definitions. Once registered, customers can create connections using this connection type and work with them the same way as natively supported Glue connectors. Supports multiple authentication types including Basic, OAuth2 (Client Credentials, JWT Bearer, Authorization Code), and Custom Auth configurations."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.glue.connection_types (\nConnectionType,\nIntegrationType,\nDescription,\nConnectionProperties,\nConnectorAuthenticationConfiguration,\nRestConfiguration,\nTags,\nregion\n)\nSELECT \n'{{ ConnectionType }}' /* required */,\n'{{ IntegrationType }}' /* required */,\n'{{ Description }}',\n'{{ ConnectionProperties }}' /* required */,\n'{{ ConnectorAuthenticationConfiguration }}' /* required */,\n'{{ RestConfiguration }}' /* required */,\n'{{ Tags }}',\n'{{ region }}'\nRETURNING\nConnectionTypeArn\n;\n"})})]}),(0,r.jsx)(l.A,{value:"manifest",children:(0,r.jsx)(a.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: connection_types
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the connection_types resource.
  - name: ConnectionType
    value: "{{ ConnectionType }}"
    description: |
      The name of the connection type. Must be between 1 and 255 characters and must be prefixed with "REST-" to indicate it is a REST-based connector.
  - name: IntegrationType
    value: "{{ IntegrationType }}"
    description: |
      The integration type for the connection. Currently only "REST" protocol is supported.
    valid_values: ['REST']
  - name: Description
    value: "{{ Description }}"
    description: |
      A description of the connection type. Can be up to 2048 characters and provides details about the purpose and functionality of the connection type.
  - name: ConnectionProperties
    description: |
      Defines the base URL and additional request parameters needed during connection creation for this connection type.
    value:
      Url:
        Name: "{{ Name }}"
        KeyOverride: "{{ KeyOverride }}"
        Required: {{ Required }}
        DefaultValue: "{{ DefaultValue }}"
        AllowedValues:
          - "{{ AllowedValues }}"
        PropertyLocation: "{{ PropertyLocation }}"
        PropertyType: "{{ PropertyType }}"
      AdditionalRequestParameters:
        - Name: "{{ Name }}"
          KeyOverride: "{{ KeyOverride }}"
          Required: {{ Required }}
          DefaultValue: "{{ DefaultValue }}"
          AllowedValues: "{{ AllowedValues }}"
          PropertyLocation: "{{ PropertyLocation }}"
          PropertyType: "{{ PropertyType }}"
  - name: ConnectorAuthenticationConfiguration
    description: |
      Defines the supported authentication types and required properties for this connection type, including Basic, OAuth2, and Custom authentication methods.
    value:
      AuthenticationTypes:
        - "{{ AuthenticationTypes }}"
      OAuth2Properties:
        OAuth2GrantType: "{{ OAuth2GrantType }}"
        ClientCredentialsProperties:
          TokenUrl:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          RequestMethod: "{{ RequestMethod }}"
          ContentType: "{{ ContentType }}"
          ClientId:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          ClientSecret:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          Scope:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          TokenUrlParameters:
            - Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues: "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
        JWTBearerProperties:
          TokenUrl:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          RequestMethod: "{{ RequestMethod }}"
          ContentType: "{{ ContentType }}"
          JwtToken:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          TokenUrlParameters:
            - Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues: "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
        AuthorizationCodeProperties:
          AuthorizationCodeUrl:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          AuthorizationCode:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          RedirectUri:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          TokenUrl:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          RequestMethod: "{{ RequestMethod }}"
          ContentType: "{{ ContentType }}"
          ClientId:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          ClientSecret:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          Scope:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          Prompt:
            Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues:
              - "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
          TokenUrlParameters:
            - Name: "{{ Name }}"
              KeyOverride: "{{ KeyOverride }}"
              Required: {{ Required }}
              DefaultValue: "{{ DefaultValue }}"
              AllowedValues: "{{ AllowedValues }}"
              PropertyLocation: "{{ PropertyLocation }}"
              PropertyType: "{{ PropertyType }}"
      BasicAuthenticationProperties:
        Username:
          Name: "{{ Name }}"
          KeyOverride: "{{ KeyOverride }}"
          Required: {{ Required }}
          DefaultValue: "{{ DefaultValue }}"
          AllowedValues:
            - "{{ AllowedValues }}"
          PropertyLocation: "{{ PropertyLocation }}"
          PropertyType: "{{ PropertyType }}"
        Password:
          Name: "{{ Name }}"
          KeyOverride: "{{ KeyOverride }}"
          Required: {{ Required }}
          DefaultValue: "{{ DefaultValue }}"
          AllowedValues:
            - "{{ AllowedValues }}"
          PropertyLocation: "{{ PropertyLocation }}"
          PropertyType: "{{ PropertyType }}"
      CustomAuthenticationProperties:
        AuthenticationParameters:
          - Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues: "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
  - name: RestConfiguration
    description: |
      Defines the HTTP request and response configuration, validation endpoint, and entity configurations for REST API interactions.
    value:
      GlobalSourceConfiguration:
        RequestMethod: "{{ RequestMethod }}"
        RequestPath: "{{ RequestPath }}"
        RequestParameters:
          - Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues: "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
        ResponseConfiguration:
          ResultPath: "{{ ResultPath }}"
          ErrorPath: "{{ ErrorPath }}"
        PaginationConfiguration:
          CursorConfiguration:
            NextPage:
              Key: "{{ Key }}"
              DefaultValue: "{{ DefaultValue }}"
              PropertyLocation: "{{ PropertyLocation }}"
              Value: "{{ Value }}"
            LimitParameter:
              Key: "{{ Key }}"
              DefaultValue: "{{ DefaultValue }}"
              PropertyLocation: "{{ PropertyLocation }}"
              Value: "{{ Value }}"
          OffsetConfiguration:
            OffsetParameter:
              Key: "{{ Key }}"
              DefaultValue: "{{ DefaultValue }}"
              PropertyLocation: "{{ PropertyLocation }}"
              Value: "{{ Value }}"
            LimitParameter:
              Key: "{{ Key }}"
              DefaultValue: "{{ DefaultValue }}"
              PropertyLocation: "{{ PropertyLocation }}"
              Value: "{{ Value }}"
      ValidationEndpointConfiguration:
        RequestMethod: "{{ RequestMethod }}"
        RequestPath: "{{ RequestPath }}"
        RequestParameters:
          - Name: "{{ Name }}"
            KeyOverride: "{{ KeyOverride }}"
            Required: {{ Required }}
            DefaultValue: "{{ DefaultValue }}"
            AllowedValues: "{{ AllowedValues }}"
            PropertyLocation: "{{ PropertyLocation }}"
            PropertyType: "{{ PropertyType }}"
        ResponseConfiguration:
          ResultPath: "{{ ResultPath }}"
          ErrorPath: "{{ ErrorPath }}"
        PaginationConfiguration:
          CursorConfiguration:
            NextPage:
              Key: "{{ Key }}"
              DefaultValue: "{{ DefaultValue }}"
              PropertyLocation: "{{ PropertyLocation }}"
              Value: "{{ Value }}"
            LimitParameter:
              Key: "{{ Key }}"
              DefaultValue: "{{ DefaultValue }}"
              PropertyLocation: "{{ PropertyLocation }}"
              Value: "{{ Value }}"
          OffsetConfiguration:
            OffsetParameter:
              Key: "{{ Key }}"
              DefaultValue: "{{ DefaultValue }}"
              PropertyLocation: "{{ PropertyLocation }}"
              Value: "{{ Value }}"
            LimitParameter:
              Key: "{{ Key }}"
              DefaultValue: "{{ DefaultValue }}"
              PropertyLocation: "{{ PropertyLocation }}"
              Value: "{{ Value }}"
      EntityConfigurations: "{{ EntityConfigurations }}"
  - name: Tags
    value: "{{ Tags }}"
    description: |
      The tags you assign to the connection type.
`})})]}),"\n",(0,r.jsxs)(t.h2,{id:"delete-examples",children:[(0,r.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,r.jsx)(c.A,{defaultValue:"delete_connection_type",values:[{label:"delete_connection_type",value:"delete_connection_type"}],children:(0,r.jsxs)(l.A,{value:"delete_connection_type",children:[(0,r.jsx)(t.p,{children:"Deletes a custom connection type in Glue. The connection type must exist and be registered before it can be deleted. This operation supports cleanup of connection type resources and helps maintain proper lifecycle management of custom connection types."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.glue.connection_types\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function x(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}}}]);