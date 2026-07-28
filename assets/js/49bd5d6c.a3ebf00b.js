"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["5675"],{772965(e,r,n){n.r(r),n.d(r,{metadata:()=>o,default:()=>x,frontMatter:()=>d,contentTitle:()=>h,toc:()=>u,assets:()=>p});var o=JSON.parse('{"id":"services/appflow/connector_profiles/index","title":"connector_profiles","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/appflow/connector_profiles/index.md","sourceDirName":"services/appflow/connector_profiles","slug":"/services/appflow/connector_profiles/","permalink":"/services/appflow/connector_profiles/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"connector_profiles","hide_title":false,"hide_table_of_contents":false,"keywords":["connector_profiles","appflow","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"connector_entities","permalink":"/services/appflow/connector_entities/"},"next":{"title":"connectors","permalink":"/services/appflow/connectors/"}}'),t=n(474848),c=n(28453),i=n(97362),s=n(897272),a=n(413554),l=n(541647);let d={title:"connector_profiles",hide_title:!1,hide_table_of_contents:!1,keywords:["connector_profiles","appflow","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,p={},u=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function f(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,t.jsx)("code",{children:"connector_profiles"})," resource."]}),"\n",(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Name"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"connector_profiles"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Type"})}),(0,t.jsx)("td",{children:"Resource"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Id"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"aws.appflow.connector_profiles"})})]})]})}),"\n",(0,t.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.p,{children:["The following fields are returned by ",(0,t.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,t.jsx)(a.A,{defaultValue:"describe_connector_profiles",values:[{label:"describe_connector_profiles",value:"describe_connector_profiles"}],children:(0,t.jsx)(l.A,{value:"describe_connector_profiles",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"connectorProfileDetails"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"array"})}),(0,t.jsx)("td",{children:"Returns information about the connector profiles associated with the flow."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"nextToken"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The pagination token for the next page of data. If nextToken=null, this means that all records have been fetched. (pattern: <code>\\S+</code>)"})]})]})]})})}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Accessible by"}),(0,t.jsx)("th",{children:"Required Params"}),(0,t.jsx)("th",{children:"Optional Params"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#describe_connector_profiles",children:(0,t.jsx)(i.A,{code:"describe_connector_profiles"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"select"})}),(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Returns a list of connector-profile details matching the provided connector-profile names and connector-types. Both input lists are optional, and you can use them to filter the result. If no names or connector-types are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#create_connector_profile",children:(0,t.jsx)(i.A,{code:"create_connector_profile"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"insert"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-connectorProfileName",children:(0,t.jsx)("code",{children:"connectorProfileName"})}),", ",(0,t.jsx)("a",{href:"#parameter-connectorType",children:(0,t.jsx)("code",{children:"connectorType"})}),", ",(0,t.jsx)("a",{href:"#parameter-connectionMode",children:(0,t.jsx)("code",{children:"connectionMode"})}),", ",(0,t.jsx)("a",{href:"#parameter-connectorProfileConfig",children:(0,t.jsx)("code",{children:"connectorProfileConfig"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#update_connector_profile",children:(0,t.jsx)(i.A,{code:"update_connector_profile"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"update"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-connectorProfileName",children:(0,t.jsx)("code",{children:"connectorProfileName"})}),", ",(0,t.jsx)("a",{href:"#parameter-connectionMode",children:(0,t.jsx)("code",{children:"connectionMode"})}),", ",(0,t.jsx)("a",{href:"#parameter-connectorProfileConfig",children:(0,t.jsx)("code",{children:"connectorProfileConfig"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Updates a given connector profile associated with your account."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#delete_connector_profile",children:(0,t.jsx)(i.A,{code:"delete_connector_profile"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"delete"})}),(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Enables you to delete an existing connector profile."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,t.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,t.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{id:"parameter-region",children:[(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"region"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,t.jsxs)(r.h2,{id:"select-examples",children:[(0,t.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,t.jsx)(a.A,{defaultValue:"describe_connector_profiles",values:[{label:"describe_connector_profiles",value:"describe_connector_profiles"}],children:(0,t.jsxs)(l.A,{value:"describe_connector_profiles",children:[(0,t.jsx)(r.p,{children:"Returns a list of connector-profile details matching the provided connector-profile names and connector-types. Both input lists are optional, and you can use them to filter the result. If no names or connector-types are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list."}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT\nconnectorProfileDetails,\nnextToken\nFROM aws.appflow.connector_profiles\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,t.jsxs)(r.h2,{id:"insert-examples",children:[(0,t.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,t.jsxs)(a.A,{defaultValue:"create_connector_profile",values:[{label:"create_connector_profile",value:"create_connector_profile"},{label:"Manifest",value:"manifest"}],children:[(0,t.jsxs)(l.A,{value:"create_connector_profile",children:[(0,t.jsx)(r.p,{children:"Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector."}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.appflow.connector_profiles (\nconnectorProfileName,\nkmsArn,\nconnectorType,\nconnectorLabel,\nconnectionMode,\nconnectorProfileConfig,\nclientToken,\nregion\n)\nSELECT \n'{{ connectorProfileName }}' /* required */,\n'{{ kmsArn }}',\n'{{ connectorType }}' /* required */,\n'{{ connectorLabel }}',\n'{{ connectionMode }}' /* required */,\n'{{ connectorProfileConfig }}' /* required */,\n'{{ clientToken }}',\n'{{ region }}'\nRETURNING\nconnectorProfileArn\n;\n"})})]}),(0,t.jsx)(l.A,{value:"manifest",children:(0,t.jsx)(s.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: connector_profiles
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the connector_profiles resource.
  - name: connectorProfileName
    value: "{{ connectorProfileName }}"
  - name: kmsArn
    value: "{{ kmsArn }}"
  - name: connectorType
    value: "{{ connectorType }}"
    valid_values: ['Salesforce', 'Singular', 'Slack', 'Redshift', 'S3', 'Marketo', 'Googleanalytics', 'Zendesk', 'Servicenow', 'Datadog', 'Trendmicro', 'Snowflake', 'Dynatrace', 'Infornexus', 'Amplitude', 'Veeva', 'EventBridge', 'LookoutMetrics', 'Upsolver', 'Honeycode', 'CustomerProfiles', 'SAPOData', 'CustomConnector', 'Pardot']
  - name: connectorLabel
    value: "{{ connectorLabel }}"
  - name: connectionMode
    value: "{{ connectionMode }}"
    valid_values: ['Public', 'Private']
  - name: connectorProfileConfig
    description: |
      Defines the connector-specific configuration and credentials for the connector profile.
    value:
      connectorProfileProperties:
        Amplitude: "{{ Amplitude }}"
        Datadog:
          instanceUrl: "{{ instanceUrl }}"
        Dynatrace:
          instanceUrl: "{{ instanceUrl }}"
        GoogleAnalytics: "{{ GoogleAnalytics }}"
        Honeycode: "{{ Honeycode }}"
        InforNexus:
          instanceUrl: "{{ instanceUrl }}"
        Marketo:
          instanceUrl: "{{ instanceUrl }}"
        Redshift:
          databaseUrl: "{{ databaseUrl }}"
          bucketName: "{{ bucketName }}"
          bucketPrefix: "{{ bucketPrefix }}"
          roleArn: "{{ roleArn }}"
          dataApiRoleArn: "{{ dataApiRoleArn }}"
          isRedshiftServerless: {{ isRedshiftServerless }}
          clusterIdentifier: "{{ clusterIdentifier }}"
          workgroupName: "{{ workgroupName }}"
          databaseName: "{{ databaseName }}"
        Salesforce:
          instanceUrl: "{{ instanceUrl }}"
          isSandboxEnvironment: {{ isSandboxEnvironment }}
          usePrivateLinkForMetadataAndAuthorization: {{ usePrivateLinkForMetadataAndAuthorization }}
        ServiceNow:
          instanceUrl: "{{ instanceUrl }}"
        Singular: "{{ Singular }}"
        Slack:
          instanceUrl: "{{ instanceUrl }}"
        Snowflake:
          warehouse: "{{ warehouse }}"
          stage: "{{ stage }}"
          bucketName: "{{ bucketName }}"
          bucketPrefix: "{{ bucketPrefix }}"
          privateLinkServiceName: "{{ privateLinkServiceName }}"
          accountName: "{{ accountName }}"
          region: "{{ region }}"
        Trendmicro: "{{ Trendmicro }}"
        Veeva:
          instanceUrl: "{{ instanceUrl }}"
        Zendesk:
          instanceUrl: "{{ instanceUrl }}"
        SAPOData:
          applicationHostUrl: "{{ applicationHostUrl }}"
          applicationServicePath: "{{ applicationServicePath }}"
          portNumber: {{ portNumber }}
          clientNumber: "{{ clientNumber }}"
          logonLanguage: "{{ logonLanguage }}"
          privateLinkServiceName: "{{ privateLinkServiceName }}"
          oAuthProperties:
            tokenUrl: "{{ tokenUrl }}"
            authCodeUrl: "{{ authCodeUrl }}"
            oAuthScopes:
              - "{{ oAuthScopes }}"
          disableSSO: {{ disableSSO }}
        CustomConnector:
          profileProperties: "{{ profileProperties }}"
          oAuth2Properties:
            tokenUrl: "{{ tokenUrl }}"
            oAuth2GrantType: "{{ oAuth2GrantType }}"
            tokenUrlCustomProperties: "{{ tokenUrlCustomProperties }}"
        Pardot:
          instanceUrl: "{{ instanceUrl }}"
          isSandboxEnvironment: {{ isSandboxEnvironment }}
          businessUnitId: "{{ businessUnitId }}"
      connectorProfileCredentials:
        Amplitude:
          apiKey: "{{ apiKey }}"
          secretKey: "{{ secretKey }}"
        Datadog:
          apiKey: "{{ apiKey }}"
          applicationKey: "{{ applicationKey }}"
        Dynatrace:
          apiToken: "{{ apiToken }}"
        GoogleAnalytics:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          accessToken: "{{ accessToken }}"
          refreshToken: "{{ refreshToken }}"
          oAuthRequest:
            authCode: "{{ authCode }}"
            redirectUri: "{{ redirectUri }}"
        Honeycode:
          accessToken: "{{ accessToken }}"
          refreshToken: "{{ refreshToken }}"
          oAuthRequest:
            authCode: "{{ authCode }}"
            redirectUri: "{{ redirectUri }}"
        InforNexus:
          accessKeyId: "{{ accessKeyId }}"
          userId: "{{ userId }}"
          secretAccessKey: "{{ secretAccessKey }}"
          datakey: "{{ datakey }}"
        Marketo:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          accessToken: "{{ accessToken }}"
          oAuthRequest:
            authCode: "{{ authCode }}"
            redirectUri: "{{ redirectUri }}"
        Redshift:
          username: "{{ username }}"
          password: "{{ password }}"
        Salesforce:
          accessToken: "{{ accessToken }}"
          refreshToken: "{{ refreshToken }}"
          oAuthRequest:
            authCode: "{{ authCode }}"
            redirectUri: "{{ redirectUri }}"
          clientCredentialsArn: "{{ clientCredentialsArn }}"
          oAuth2GrantType: "{{ oAuth2GrantType }}"
          jwtToken: "{{ jwtToken }}"
        ServiceNow:
          username: "{{ username }}"
          password: "{{ password }}"
          oAuth2Credentials:
            clientId: "{{ clientId }}"
            clientSecret: "{{ clientSecret }}"
            accessToken: "{{ accessToken }}"
            refreshToken: "{{ refreshToken }}"
            oAuthRequest:
              authCode: "{{ authCode }}"
              redirectUri: "{{ redirectUri }}"
        Singular:
          apiKey: "{{ apiKey }}"
        Slack:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          accessToken: "{{ accessToken }}"
          oAuthRequest:
            authCode: "{{ authCode }}"
            redirectUri: "{{ redirectUri }}"
        Snowflake:
          username: "{{ username }}"
          password: "{{ password }}"
        Trendmicro:
          apiSecretKey: "{{ apiSecretKey }}"
        Veeva:
          username: "{{ username }}"
          password: "{{ password }}"
        Zendesk:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          accessToken: "{{ accessToken }}"
          oAuthRequest:
            authCode: "{{ authCode }}"
            redirectUri: "{{ redirectUri }}"
        SAPOData:
          basicAuthCredentials:
            username: "{{ username }}"
            password: "{{ password }}"
          oAuthCredentials:
            clientId: "{{ clientId }}"
            clientSecret: "{{ clientSecret }}"
            accessToken: "{{ accessToken }}"
            refreshToken: "{{ refreshToken }}"
            oAuthRequest:
              authCode: "{{ authCode }}"
              redirectUri: "{{ redirectUri }}"
        CustomConnector:
          authenticationType: "{{ authenticationType }}"
          basic:
            username: "{{ username }}"
            password: "{{ password }}"
          oauth2:
            clientId: "{{ clientId }}"
            clientSecret: "{{ clientSecret }}"
            accessToken: "{{ accessToken }}"
            refreshToken: "{{ refreshToken }}"
            oAuthRequest:
              authCode: "{{ authCode }}"
              redirectUri: "{{ redirectUri }}"
          apiKey:
            apiKey: "{{ apiKey }}"
            apiSecretKey: "{{ apiSecretKey }}"
          custom:
            customAuthenticationType: "{{ customAuthenticationType }}"
            credentialsMap: "{{ credentialsMap }}"
        Pardot:
          accessToken: "{{ accessToken }}"
          refreshToken: "{{ refreshToken }}"
          oAuthRequest:
            authCode: "{{ authCode }}"
            redirectUri: "{{ redirectUri }}"
          clientCredentialsArn: "{{ clientCredentialsArn }}"
  - name: clientToken
    value: "{{ clientToken }}"
`})})]}),"\n",(0,t.jsxs)(r.h2,{id:"update-examples",children:[(0,t.jsx)(r.code,{children:"UPDATE"})," examples"]}),"\n",(0,t.jsx)(a.A,{defaultValue:"update_connector_profile",values:[{label:"update_connector_profile",value:"update_connector_profile"}],children:(0,t.jsxs)(l.A,{value:"update_connector_profile",children:[(0,t.jsx)(r.p,{children:"Updates a given connector profile associated with your account."}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.appflow.connector_profiles\nSET \nconnectorProfileName = '{{ connectorProfileName }}',\nconnectionMode = '{{ connectionMode }}',\nconnectorProfileConfig = '{{ connectorProfileConfig }}',\nclientToken = '{{ clientToken }}'\nWHERE \nregion = '{{ region }}' --required\nAND connectorProfileName = '{{ connectorProfileName }}' --required\nAND connectionMode = '{{ connectionMode }}' --required\nAND connectorProfileConfig = '{{ connectorProfileConfig }}' --required\nRETURNING\nconnectorProfileArn;\n"})})]})}),"\n",(0,t.jsxs)(r.h2,{id:"delete-examples",children:[(0,t.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,t.jsx)(a.A,{defaultValue:"delete_connector_profile",values:[{label:"delete_connector_profile",value:"delete_connector_profile"}],children:(0,t.jsxs)(l.A,{value:"delete_connector_profile",children:[(0,t.jsx)(r.p,{children:"Enables you to delete an existing connector profile."}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.appflow.connector_profiles\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function x(e={}){let{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}}}]);