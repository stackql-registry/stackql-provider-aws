"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["809157"],{511823(e,t,a){a.r(t),a.d(t,{metadata:()=>s,default:()=>b,frontMatter:()=>o,contentTitle:()=>h,toc:()=>u,assets:()=>x});var s=JSON.parse('{"id":"services/glue/tables/index","title":"tables","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/glue/tables/index.md","sourceDirName":"services/glue/tables","slug":"/services/glue/tables/","permalink":"/services/glue/tables/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"tables","hide_title":false,"hide_table_of_contents":false,"keywords":["tables","glue","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"table_versions","permalink":"/services/glue/table_versions/"},"next":{"title":"tags","permalink":"/services/glue/tags/"}}'),n=a(474848),i=a(28453),r=a(97362),d=a(897272),l=a(413554),c=a(541647);let o={title:"tables",hide_title:!1,hide_table_of_contents:!1,keywords:["tables","glue","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,x={},u=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function j(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"tables"})," resource."]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"tables"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"aws.glue.tables"})})]})]})}),"\n",(0,n.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.p,{children:["The following fields are returned by ",(0,n.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"get_table",values:[{label:"get_table",value:"get_table"},{label:"search_tables",value:"search_tables"}],children:[(0,n.jsx)(c.A,{value:"get_table",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"CatalogId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The ID of the Data Catalog in which the table resides. (pattern: <code>[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"CreateTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The time when the table definition was created in the Data Catalog."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"CreatedBy"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The person or entity who created the table. (pattern: <code>[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"DatabaseName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the database where the table metadata resides. For Hive compatibility, this must be all lowercase. (pattern: <code>[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"Description"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"A description of the table. (pattern: <code>[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"FederatedTable"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"A FederatedTable structure that references an entity outside the Glue Data Catalog."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"IsMaterializedView"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"boolean"})}),(0,n.jsx)("td",{children:"Indicates a table is a MaterializedView."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"IsMultiDialectView"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"boolean"})}),(0,n.jsx)("td",{children:"Specifies whether the view supports the SQL dialects of one or more different query engines and can therefore be read by those engines."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"IsRegisteredWithLakeFormation"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"boolean"})}),(0,n.jsx)("td",{children:"Indicates whether the table has been registered with Lake Formation."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"LastAccessTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The last time that the table was accessed. This is usually taken from HDFS, and might not be reliable."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"LastAnalyzedTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The last time that column statistics were computed for this table."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The table name. For Hive compatibility, this must be entirely lowercase. (pattern: <code>[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"Owner"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The owner of the table. (pattern: <code>[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"Parameters"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"These key-value pairs define properties associated with the table."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"PartitionKeys"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:'A list of columns by which the table is partitioned. Only primitive types are supported as partition keys. When you create a table used by Amazon Athena, and you do not specify any partitionKeys, you must at least set the value of partitionKeys to an empty list. For example: "PartitionKeys": []'})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"Retention"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer"})}),(0,n.jsx)("td",{children:"The retention time for this table."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"Status"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Indicates the the state of an asynchronous change to a table."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"StorageDescriptor"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"A storage descriptor containing information about the physical storage of this table."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"TableType"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The type of this table. Glue will create tables with the EXTERNAL_TABLE type. Other services, such as Athena, may create tables with additional table types. Glue related table types: EXTERNAL_TABLE Hive compatible attribute - indicates a non-Hive managed table. GOVERNED Used by Lake Formation. The Glue Data Catalog understands GOVERNED."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"TargetTable"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"A TableIdentifier structure that describes a target table for resource linking."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"UpdateTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The last time that the table was updated."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"VersionId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The ID of the table version. (pattern: <code>[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ViewDefinition"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"A structure that contains all the information that defines the view, including the dialect or dialects for the view, and the query."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ViewExpandedText"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Included for Apache Hive compatibility. Not used in the normal course of Glue operations."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ViewOriginalText"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Included for Apache Hive compatibility. Not used in the normal course of Glue operations. If the table is a VIRTUAL_VIEW, certain Athena configuration encoded in base64."})]})]})]})}),(0,n.jsx)(c.A,{value:"search_tables",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"NextToken"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"A continuation token, present if the current list segment is not the last."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"TableList"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"A list of the requested Table objects. The SearchTables response returns only the tables that you have access to."})]})]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#get_table",children:(0,n.jsx)(r.A,{code:"get_table"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Retrieves the Table definition in a Data Catalog for a specified table."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#search_tables",children:(0,n.jsx)(r.A,{code:"search_tables"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_table",children:(0,n.jsx)(r.A,{code:"create_table"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-DatabaseName",children:(0,n.jsx)("code",{children:"DatabaseName"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates a new table definition in the Data Catalog."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_table",children:(0,n.jsx)(r.A,{code:"update_table"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-DatabaseName",children:(0,n.jsx)("code",{children:"DatabaseName"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Updates a metadata table in the Data Catalog."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_table",children:(0,n.jsx)(r.A,{code:"delete_table"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"delete"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:'Removes a table definition from the Data Catalog. After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling DeleteTable, use DeleteTableVersion or BatchDeleteTableVersion, and DeletePartition or BatchDeletePartition, to delete any resources that belong to the table.'})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#get_tables",children:(0,n.jsx)(r.A,{code:"get_tables"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"exec"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-DatabaseName",children:(0,n.jsx)("code",{children:"DatabaseName"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Retrieves the definitions of some or all of the tables in a given Database."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,n.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,n.jsxs)(t.h2,{id:"select-examples",children:[(0,n.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"get_table",values:[{label:"get_table",value:"get_table"},{label:"search_tables",value:"search_tables"}],children:[(0,n.jsxs)(c.A,{value:"get_table",children:[(0,n.jsx)(t.p,{children:"Retrieves the Table definition in a Data Catalog for a specified table."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\nCatalogId,\nCreateTime,\nCreatedBy,\nDatabaseName,\nDescription,\nFederatedTable,\nIsMaterializedView,\nIsMultiDialectView,\nIsRegisteredWithLakeFormation,\nLastAccessTime,\nLastAnalyzedTime,\nName,\nOwner,\nParameters,\nPartitionKeys,\nRetention,\nStatus,\nStorageDescriptor,\nTableType,\nTargetTable,\nUpdateTime,\nVersionId,\nViewDefinition,\nViewExpandedText,\nViewOriginalText\nFROM aws.glue.tables\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,n.jsxs)(c.A,{value:"search_tables",children:[(0,n.jsx)(t.p,{children:"Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\nNextToken,\nTableList\nFROM aws.glue.tables\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,n.jsxs)(t.h2,{id:"insert-examples",children:[(0,n.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"create_table",values:[{label:"create_table",value:"create_table"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(c.A,{value:"create_table",children:[(0,n.jsx)(t.p,{children:"Creates a new table definition in the Data Catalog."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.glue.tables (\nCatalogId,\nDatabaseName,\nName,\nTableInput,\nPartitionIndexes,\nTransactionId,\nOpenTableFormatInput,\nregion\n)\nSELECT \n'{{ CatalogId }}',\n'{{ DatabaseName }}' /* required */,\n'{{ Name }}',\n'{{ TableInput }}',\n'{{ PartitionIndexes }}',\n'{{ TransactionId }}',\n'{{ OpenTableFormatInput }}',\n'{{ region }}'\n;\n"})})]}),(0,n.jsx)(c.A,{value:"manifest",children:(0,n.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: tables
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the tables resource.
  - name: CatalogId
    value: "{{ CatalogId }}"
    description: |
      The ID of the Data Catalog in which to create the Table. If none is supplied, the Amazon Web Services account ID is used by default.
  - name: DatabaseName
    value: "{{ DatabaseName }}"
    description: |
      The catalog database in which to create the new table. For Hive compatibility, this name is entirely lowercase.
  - name: Name
    value: "{{ Name }}"
    description: |
      The unique identifier for the table within the specified database that will be created in the Glue Data Catalog.
  - name: TableInput
    description: |
      The TableInput object that defines the metadata table to create in the catalog.
    value:
      Name: "{{ Name }}"
      Description: "{{ Description }}"
      Owner: "{{ Owner }}"
      LastAccessTime: "{{ LastAccessTime }}"
      LastAnalyzedTime: "{{ LastAnalyzedTime }}"
      Retention: {{ Retention }}
      StorageDescriptor:
        Columns:
          - Name: "{{ Name }}"
            Type: "{{ Type }}"
            Comment: "{{ Comment }}"
            Parameters: "{{ Parameters }}"
        Location: "{{ Location }}"
        AdditionalLocations:
          - "{{ AdditionalLocations }}"
        InputFormat: "{{ InputFormat }}"
        OutputFormat: "{{ OutputFormat }}"
        Compressed: {{ Compressed }}
        NumberOfBuckets: {{ NumberOfBuckets }}
        SerdeInfo:
          Name: "{{ Name }}"
          SerializationLibrary: "{{ SerializationLibrary }}"
          Parameters: "{{ Parameters }}"
        BucketColumns:
          - "{{ BucketColumns }}"
        SortColumns:
          - Column: "{{ Column }}"
            SortOrder: {{ SortOrder }}
        Parameters: "{{ Parameters }}"
        SkewedInfo:
          SkewedColumnNames:
            - "{{ SkewedColumnNames }}"
          SkewedColumnValues:
            - "{{ SkewedColumnValues }}"
          SkewedColumnValueLocationMaps: "{{ SkewedColumnValueLocationMaps }}"
        StoredAsSubDirectories: {{ StoredAsSubDirectories }}
        SchemaReference:
          SchemaId:
            SchemaArn: "{{ SchemaArn }}"
            SchemaName: "{{ SchemaName }}"
            RegistryName: "{{ RegistryName }}"
          SchemaVersionId: "{{ SchemaVersionId }}"
          SchemaVersionNumber: {{ SchemaVersionNumber }}
      PartitionKeys:
        - Name: "{{ Name }}"
          Type: "{{ Type }}"
          Comment: "{{ Comment }}"
          Parameters: "{{ Parameters }}"
      ViewOriginalText: "{{ ViewOriginalText }}"
      ViewExpandedText: "{{ ViewExpandedText }}"
      TableType: "{{ TableType }}"
      Parameters: "{{ Parameters }}"
      TargetTable:
        CatalogId: "{{ CatalogId }}"
        DatabaseName: "{{ DatabaseName }}"
        Name: "{{ Name }}"
        Region: "{{ Region }}"
      ViewDefinition:
        IsProtected: {{ IsProtected }}
        Definer: "{{ Definer }}"
        Representations:
          - Dialect: "{{ Dialect }}"
            DialectVersion: "{{ DialectVersion }}"
            ViewOriginalText: "{{ ViewOriginalText }}"
            ValidationConnection: "{{ ValidationConnection }}"
            ViewExpandedText: "{{ ViewExpandedText }}"
        ViewVersionId: {{ ViewVersionId }}
        ViewVersionToken: "{{ ViewVersionToken }}"
        RefreshSeconds: {{ RefreshSeconds }}
        LastRefreshType: "{{ LastRefreshType }}"
        SubObjects:
          - "{{ SubObjects }}"
        SubObjectVersionIds:
          - {{ SubObjectVersionIds }}
  - name: PartitionIndexes
    description: |
      A list of partition indexes, PartitionIndex structures, to create in the table.
    value:
      - Keys: "{{ Keys }}"
        IndexName: "{{ IndexName }}"
  - name: TransactionId
    value: "{{ TransactionId }}"
    description: |
      The ID of the transaction.
  - name: OpenTableFormatInput
    description: |
      Specifies an OpenTableFormatInput structure when creating an open format table.
    value:
      IcebergInput:
        MetadataOperation: "{{ MetadataOperation }}"
        Version: "{{ Version }}"
        CreateIcebergTableInput:
          Location: "{{ Location }}"
          Schema:
            SchemaId: {{ SchemaId }}
            IdentifierFieldIds:
              - {{ IdentifierFieldIds }}
            Type: "{{ Type }}"
            Fields:
              - Id: {{ Id }}
                Name: "{{ Name }}"
                Type: "{{ Type }}"
                Required: {{ Required }}
                Doc: "{{ Doc }}"
                InitialDefault: "{{ InitialDefault }}"
                WriteDefault: "{{ WriteDefault }}"
          PartitionSpec:
            Fields:
              - SourceId: {{ SourceId }}
                Transform: "{{ Transform }}"
                Name: "{{ Name }}"
                FieldId: {{ FieldId }}
            SpecId: {{ SpecId }}
          WriteOrder:
            OrderId: {{ OrderId }}
            Fields:
              - SourceId: {{ SourceId }}
                Transform: "{{ Transform }}"
                Direction: "{{ Direction }}"
                NullOrder: "{{ NullOrder }}"
          Properties: "{{ Properties }}"
`})})]}),"\n",(0,n.jsxs)(t.h2,{id:"update-examples",children:[(0,n.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsx)(l.A,{defaultValue:"update_table",values:[{label:"update_table",value:"update_table"}],children:(0,n.jsxs)(c.A,{value:"update_table",children:[(0,n.jsx)(t.p,{children:"Updates a metadata table in the Data Catalog."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.glue.tables\nSET \nCatalogId = '{{ CatalogId }}',\nDatabaseName = '{{ DatabaseName }}',\nName = '{{ Name }}',\nTableInput = '{{ TableInput }}',\nSkipArchive = {{ SkipArchive }},\nTransactionId = '{{ TransactionId }}',\nVersionId = '{{ VersionId }}',\nViewUpdateAction = '{{ ViewUpdateAction }}',\nForce = {{ Force }},\nUpdateOpenTableFormatInput = '{{ UpdateOpenTableFormatInput }}'\nWHERE \nregion = '{{ region }}' --required\nAND DatabaseName = '{{ DatabaseName }}' --required;\n"})})]})}),"\n",(0,n.jsxs)(t.h2,{id:"delete-examples",children:[(0,n.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(l.A,{defaultValue:"delete_table",values:[{label:"delete_table",value:"delete_table"}],children:(0,n.jsxs)(c.A,{value:"delete_table",children:[(0,n.jsx)(t.p,{children:'Removes a table definition from the Data Catalog. After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling DeleteTable, use DeleteTableVersion or BatchDeleteTableVersion, and DeletePartition or BatchDeletePartition, to delete any resources that belong to the table.'}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.glue.tables\nWHERE region = '{{ region }}' --required\n;\n"})})]})}),"\n",(0,n.jsx)(t.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,n.jsx)(l.A,{defaultValue:"get_tables",values:[{label:"get_tables",value:"get_tables"}],children:(0,n.jsxs)(c.A,{value:"get_tables",children:[(0,n.jsx)(t.p,{children:"Retrieves the definitions of some or all of the tables in a given Database."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'EXEC aws.glue.tables.get_tables \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"CatalogId": "{{ CatalogId }}", \n"DatabaseName": "{{ DatabaseName }}", \n"Expression": "{{ Expression }}", \n"NextToken": "{{ NextToken }}", \n"MaxResults": {{ MaxResults }}, \n"TransactionId": "{{ TransactionId }}", \n"QueryAsOfTime": "{{ QueryAsOfTime }}", \n"AuditContext": "{{ AuditContext }}", \n"IncludeStatusDetails": {{ IncludeStatusDetails }}, \n"AttributesToGet": "{{ AttributesToGet }}"\n}\'\n;\n'})})]})})]})}function b(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}}}]);