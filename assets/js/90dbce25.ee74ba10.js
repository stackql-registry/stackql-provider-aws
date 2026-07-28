"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["584042"],{749275(e,r,a){a.r(r),a.d(r,{metadata:()=>s,default:()=>v,frontMatter:()=>c,contentTitle:()=>h,toc:()=>m,assets:()=>p});var s=JSON.parse('{"id":"services/dms/data_providers/index","title":"data_providers","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/dms/data_providers/index.md","sourceDirName":"services/dms/data_providers","slug":"/services/dms/data_providers/","permalink":"/services/dms/data_providers/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"data_providers","hide_title":false,"hide_table_of_contents":false,"keywords":["data_providers","dms","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"data_migrations","permalink":"/services/dms/data_migrations/"},"next":{"title":"endpoint_settings","permalink":"/services/dms/endpoint_settings/"}}'),t=a(474848),i=a(28453),d=a(97362),n=a(897272),o=a(413554),l=a(541647);let c={title:"data_providers",hide_title:!1,hide_table_of_contents:!1,keywords:["data_providers","dms","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,p={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function u(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,t.jsx)("code",{children:"data_providers"})," resource."]}),"\n",(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Name"})}),(0,t.jsx)("td",{children:(0,t.jsx)(d.A,{code:"data_providers"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Type"})}),(0,t.jsx)("td",{children:"Resource"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Id"})}),(0,t.jsx)("td",{children:(0,t.jsx)(d.A,{code:"aws.dms.data_providers"})})]})]})}),"\n",(0,t.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.p,{children:["The following fields are returned by ",(0,t.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,t.jsx)(o.A,{defaultValue:"describe_data_providers",values:[{label:"describe_data_providers",value:"describe_data_providers"}],children:(0,t.jsx)(l.A,{value:"describe_data_providers",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(d.A,{code:"DataProviders"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"array"})}),(0,t.jsx)("td",{children:"A description of data providers."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(d.A,{code:"Marker"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged."})]})]})]})})}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Accessible by"}),(0,t.jsx)("th",{children:"Required Params"}),(0,t.jsx)("th",{children:"Optional Params"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#describe_data_providers",children:(0,t.jsx)(d.A,{code:"describe_data_providers"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(d.A,{code:"select"})}),(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Returns a paginated list of data providers for your account in the current region."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#create_data_provider",children:(0,t.jsx)(d.A,{code:"create_data_provider"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(d.A,{code:"insert"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-Engine",children:(0,t.jsx)("code",{children:"Engine"})}),", ",(0,t.jsx)("a",{href:"#parameter-Settings",children:(0,t.jsx)("code",{children:"Settings"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Creates a data provider using the provided settings. A data provider stores a data store type and location information about your database."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#modify_data_provider",children:(0,t.jsx)(d.A,{code:"modify_data_provider"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(d.A,{code:"update"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-DataProviderIdentifier",children:(0,t.jsx)("code",{children:"DataProviderIdentifier"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Modifies the specified data provider using the provided settings. You must remove the data provider from all migration projects before you can modify it."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#delete_data_provider",children:(0,t.jsx)(d.A,{code:"delete_data_provider"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(d.A,{code:"delete"})}),(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Deletes the specified data provider. All migration projects associated with the data provider must be deleted or modified before you can delete the data provider."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,t.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,t.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{id:"parameter-region",children:[(0,t.jsx)("td",{children:(0,t.jsx)(d.A,{code:"region"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,t.jsxs)(r.h2,{id:"select-examples",children:[(0,t.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,t.jsx)(o.A,{defaultValue:"describe_data_providers",values:[{label:"describe_data_providers",value:"describe_data_providers"}],children:(0,t.jsxs)(l.A,{value:"describe_data_providers",children:[(0,t.jsx)(r.p,{children:"Returns a paginated list of data providers for your account in the current region."}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"SELECT\nDataProviders,\nMarker\nFROM aws.dms.data_providers\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,t.jsxs)(r.h2,{id:"insert-examples",children:[(0,t.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,t.jsxs)(o.A,{defaultValue:"create_data_provider",values:[{label:"create_data_provider",value:"create_data_provider"},{label:"Manifest",value:"manifest"}],children:[(0,t.jsxs)(l.A,{value:"create_data_provider",children:[(0,t.jsx)(r.p,{children:"Creates a data provider using the provided settings. A data provider stores a data store type and location information about your database."}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.dms.data_providers (\nDataProviderName,\nDescription,\nEngine,\nVirtual,\nSettings,\nTags,\nregion\n)\nSELECT \n'{{ DataProviderName }}',\n'{{ Description }}',\n'{{ Engine }}' /* required */,\n{{ Virtual }},\n'{{ Settings }}' /* required */,\n'{{ Tags }}',\n'{{ region }}'\nRETURNING\nDataProvider\n;\n"})})]}),(0,t.jsx)(l.A,{value:"manifest",children:(0,t.jsx)(n.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: data_providers
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the data_providers resource.
  - name: DataProviderName
    value: "{{ DataProviderName }}"
    description: |
      A user-friendly name for the data provider.
  - name: Description
    value: "{{ Description }}"
    description: |
      A user-friendly description of the data provider.
  - name: Engine
    value: "{{ Engine }}"
    description: |
      The type of database engine for the data provider. Valid values include "aurora", "aurora-postgresql", "mysql", "oracle", "postgres", "sqlserver", redshift, mariadb, mongodb, db2, db2-zos, docdb, and sybase. A value of "aurora" represents Amazon Aurora MySQL-Compatible Edition.
  - name: Virtual
    value: {{ Virtual }}
    description: |
      Indicates whether the data provider is virtual.
  - name: Settings
    description: |
      The settings in JSON format for a data provider.
    value:
      RedshiftSettings:
        ServerName: "{{ ServerName }}"
        Port: {{ Port }}
        DatabaseName: "{{ DatabaseName }}"
        S3Path: "{{ S3Path }}"
        S3AccessRoleArn: "{{ S3AccessRoleArn }}"
      PostgreSqlSettings:
        ServerName: "{{ ServerName }}"
        Port: {{ Port }}
        DatabaseName: "{{ DatabaseName }}"
        SslMode: "{{ SslMode }}"
        CertificateArn: "{{ CertificateArn }}"
        S3Path: "{{ S3Path }}"
        S3AccessRoleArn: "{{ S3AccessRoleArn }}"
      MySqlSettings:
        ServerName: "{{ ServerName }}"
        Port: {{ Port }}
        SslMode: "{{ SslMode }}"
        CertificateArn: "{{ CertificateArn }}"
        S3Path: "{{ S3Path }}"
        S3AccessRoleArn: "{{ S3AccessRoleArn }}"
      OracleSettings:
        ServerName: "{{ ServerName }}"
        Port: {{ Port }}
        DatabaseName: "{{ DatabaseName }}"
        SslMode: "{{ SslMode }}"
        CertificateArn: "{{ CertificateArn }}"
        AsmServer: "{{ AsmServer }}"
        SecretsManagerOracleAsmSecretId: "{{ SecretsManagerOracleAsmSecretId }}"
        SecretsManagerOracleAsmAccessRoleArn: "{{ SecretsManagerOracleAsmAccessRoleArn }}"
        SecretsManagerSecurityDbEncryptionSecretId: "{{ SecretsManagerSecurityDbEncryptionSecretId }}"
        SecretsManagerSecurityDbEncryptionAccessRoleArn: "{{ SecretsManagerSecurityDbEncryptionAccessRoleArn }}"
        S3Path: "{{ S3Path }}"
        S3AccessRoleArn: "{{ S3AccessRoleArn }}"
      SybaseAseSettings:
        ServerName: "{{ ServerName }}"
        Port: {{ Port }}
        DatabaseName: "{{ DatabaseName }}"
        SslMode: "{{ SslMode }}"
        EncryptPassword: {{ EncryptPassword }}
        CertificateArn: "{{ CertificateArn }}"
      MicrosoftSqlServerSettings:
        ServerName: "{{ ServerName }}"
        Port: {{ Port }}
        DatabaseName: "{{ DatabaseName }}"
        SslMode: "{{ SslMode }}"
        CertificateArn: "{{ CertificateArn }}"
        S3Path: "{{ S3Path }}"
        S3AccessRoleArn: "{{ S3AccessRoleArn }}"
      DocDbSettings:
        ServerName: "{{ ServerName }}"
        Port: {{ Port }}
        DatabaseName: "{{ DatabaseName }}"
        SslMode: "{{ SslMode }}"
        CertificateArn: "{{ CertificateArn }}"
      MariaDbSettings:
        ServerName: "{{ ServerName }}"
        Port: {{ Port }}
        SslMode: "{{ SslMode }}"
        CertificateArn: "{{ CertificateArn }}"
        S3Path: "{{ S3Path }}"
        S3AccessRoleArn: "{{ S3AccessRoleArn }}"
      IbmDb2LuwSettings:
        ServerName: "{{ ServerName }}"
        Port: {{ Port }}
        DatabaseName: "{{ DatabaseName }}"
        SslMode: "{{ SslMode }}"
        CertificateArn: "{{ CertificateArn }}"
        EncryptionAlgorithm: {{ EncryptionAlgorithm }}
        SecurityMechanism: {{ SecurityMechanism }}
        S3Path: "{{ S3Path }}"
        S3AccessRoleArn: "{{ S3AccessRoleArn }}"
      IbmDb2zOsSettings:
        ServerName: "{{ ServerName }}"
        Port: {{ Port }}
        DatabaseName: "{{ DatabaseName }}"
        SslMode: "{{ SslMode }}"
        CertificateArn: "{{ CertificateArn }}"
        S3Path: "{{ S3Path }}"
        S3AccessRoleArn: "{{ S3AccessRoleArn }}"
      MongoDbSettings:
        ServerName: "{{ ServerName }}"
        Port: {{ Port }}
        DatabaseName: "{{ DatabaseName }}"
        SslMode: "{{ SslMode }}"
        CertificateArn: "{{ CertificateArn }}"
        AuthType: "{{ AuthType }}"
        AuthSource: "{{ AuthSource }}"
        AuthMechanism: "{{ AuthMechanism }}"
  - name: Tags
    description: |
      One or more tags to be assigned to the data provider.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
        ResourceArn: "{{ ResourceArn }}"
`})})]}),"\n",(0,t.jsxs)(r.h2,{id:"update-examples",children:[(0,t.jsx)(r.code,{children:"UPDATE"})," examples"]}),"\n",(0,t.jsx)(o.A,{defaultValue:"modify_data_provider",values:[{label:"modify_data_provider",value:"modify_data_provider"}],children:(0,t.jsxs)(l.A,{value:"modify_data_provider",children:[(0,t.jsx)(r.p,{children:"Modifies the specified data provider using the provided settings. You must remove the data provider from all migration projects before you can modify it."}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.dms.data_providers\nSET \nDataProviderIdentifier = '{{ DataProviderIdentifier }}',\nDataProviderName = '{{ DataProviderName }}',\nDescription = '{{ Description }}',\nEngine = '{{ Engine }}',\nVirtual = {{ Virtual }},\nExactSettings = {{ ExactSettings }},\nSettings = '{{ Settings }}'\nWHERE \nregion = '{{ region }}' --required\nAND DataProviderIdentifier = '{{ DataProviderIdentifier }}' --required\nRETURNING\nDataProvider;\n"})})]})}),"\n",(0,t.jsxs)(r.h2,{id:"delete-examples",children:[(0,t.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,t.jsx)(o.A,{defaultValue:"delete_data_provider",values:[{label:"delete_data_provider",value:"delete_data_provider"}],children:(0,t.jsxs)(l.A,{value:"delete_data_provider",children:[(0,t.jsx)(r.p,{children:"Deletes the specified data provider. All migration projects associated with the data provider must be deleted or modified before you can delete the data provider."}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.dms.data_providers\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function v(e={}){let{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);