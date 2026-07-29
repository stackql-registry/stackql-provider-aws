--- 
title: data_catalogs
hide_title: false
hide_table_of_contents: false
keywords:
  - data_catalogs
  - athena
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>data_catalogs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_catalogs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.athena.data_catalogs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_catalog"
    values={[
        { label: 'get_data_catalog', value: 'get_data_catalog' },
        { label: 'list_data_catalogs', value: 'list_data_catalogs' }
    ]}
>
<TabItem value="get_data_catalog">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="connection_type" /></td>
    <td><code>string</code></td>
    <td>The type of connection for a FEDERATED data catalog (for example, REDSHIFT, MYSQL, or SQLSERVER). For information about individual connectors, see Available data source connectors. (DYNAMODB, MYSQL, POSTGRESQL, REDSHIFT, ORACLE, SYNAPSE, SQLSERVER, DB2, OPENSEARCH, BIGQUERY, GOOGLECLOUDSTORAGE, HBASE, DOCUMENTDB, CMDB, TPCDS, TIMESTREAM, SAPHANA, SNOWFLAKE, DATALAKEGEN2, DB2AS400)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the data catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>Text of the error that occurred during data catalog creation or deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data catalog. The catalog name must be unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign, or hyphen characters. The remainder of the length constraint of 256 is reserved for use by Athena. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>Specifies the Lambda function or functions to use for the data catalog. This is a mapping whose values depend on the catalog type. For the HIVE data catalog type, use the following syntax. The metadata-function parameter is required. The sdk-version parameter is optional and defaults to the currently supported version. metadata-function=lambda_arn, sdk-version=version_number For the LAMBDA data catalog type, use one of the following sets of required parameters, but not both. If you have one Lambda function that processes metadata and another for reading the actual data, use the following syntax. Both parameters are required. metadata-function=lambda_arn, record-function=lambda_arn If you have a composite Lambda function that processes both metadata and data, use the following syntax to specify your Lambda function. function=lambda_arn The GLUE type takes a catalog ID parameter and is required. The catalog_id is the account ID of the Amazon Web Services account to which the Glue catalog belongs. catalog-id=catalog_id The GLUE data catalog type also applies to the default AwsDataCatalog that already exists in your account, of which you can have only one and cannot modify. The FEDERATED data catalog type uses one of the following parameters, but not both. Use connection-arn for an existing Glue connection. Use connection-type and connection-properties to specify the configuration setting for a new connection. connection-arn:<code>&lt;glue_connection_arn_to_reuse&gt;</code> connection-type:MYSQL|REDSHIFT|...., connection-properties:"<code>&lt;json_string&gt;</code>" For <code>&lt;json_string&gt;</code> , use escaped JSON text, as in the following example. "&#123;\"spill_bucket\":\"my_spill\",\"spill_prefix\":\"athena-spill\",\"host\":\"abc12345.snowflakecomputing.com\",\"port\":\"1234\",\"warehouse\":\"DEV_WH\",\"database\":\"TEST\",\"schema\":\"PUBLIC\",\"SecretArn\":\"arn:aws:secretsmanager:ap-south-1:111122223333:secret:snowflake-XHb67j\"&#125;"</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the creation or deletion of the data catalog. The LAMBDA, GLUE, and HIVE data catalog types are created synchronously. Their status is either CREATE_COMPLETE or CREATE_FAILED. The FEDERATED data catalog type is created asynchronously. Data catalog creation status: CREATE_IN_PROGRESS: Federated data catalog creation in progress. CREATE_COMPLETE: Data catalog creation complete. CREATE_FAILED: Data catalog could not be created. CREATE_FAILED_CLEANUP_IN_PROGRESS: Federated data catalog creation failed and is being removed. CREATE_FAILED_CLEANUP_COMPLETE: Federated data catalog creation failed and was removed. CREATE_FAILED_CLEANUP_FAILED: Federated data catalog creation failed but could not be removed. Data catalog deletion status: DELETE_IN_PROGRESS: Federated data catalog deletion in progress. DELETE_COMPLETE: Federated data catalog deleted. DELETE_FAILED: Federated data catalog could not be deleted. (CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED, CREATE_FAILED_CLEANUP_IN_PROGRESS, CREATE_FAILED_CLEANUP_COMPLETE, CREATE_FAILED_CLEANUP_FAILED, DELETE_IN_PROGRESS, DELETE_COMPLETE, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of data catalog to create: LAMBDA for a federated catalog, GLUE for an Glue Data Catalog, and HIVE for an external Apache Hive metastore. FEDERATED is a federated catalog for which Athena creates the connection and the Lambda function for you based on the parameters that you pass. (LAMBDA, GLUE, HIVE, FEDERATED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_catalogs">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="catalog_name" /></td>
    <td><code>string</code></td>
    <td>The name of the data catalog. The catalog name is unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign, or hyphen characters. The remainder of the length constraint of 256 is reserved for use by Athena. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_type" /></td>
    <td><code>string</code></td>
    <td>The type of connection for a FEDERATED data catalog (for example, REDSHIFT, MYSQL, or SQLSERVER). For information about individual connectors, see Available data source connectors. (DYNAMODB, MYSQL, POSTGRESQL, REDSHIFT, ORACLE, SYNAPSE, SQLSERVER, DB2, OPENSEARCH, BIGQUERY, GOOGLECLOUDSTORAGE, HBASE, DOCUMENTDB, CMDB, TPCDS, TIMESTREAM, SAPHANA, SNOWFLAKE, DATALAKEGEN2, DB2AS400)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>Text of the error that occurred during data catalog creation or deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the creation or deletion of the data catalog. The LAMBDA, GLUE, and HIVE data catalog types are created synchronously. Their status is either CREATE_COMPLETE or CREATE_FAILED. The FEDERATED data catalog type is created asynchronously. Data catalog creation status: CREATE_IN_PROGRESS: Federated data catalog creation in progress. CREATE_COMPLETE: Data catalog creation complete. CREATE_FAILED: Data catalog could not be created. CREATE_FAILED_CLEANUP_IN_PROGRESS: Federated data catalog creation failed and is being removed. CREATE_FAILED_CLEANUP_COMPLETE: Federated data catalog creation failed and was removed. CREATE_FAILED_CLEANUP_FAILED: Federated data catalog creation failed but could not be removed. Data catalog deletion status: DELETE_IN_PROGRESS: Federated data catalog deletion in progress. DELETE_COMPLETE: Federated data catalog deleted. DELETE_FAILED: Federated data catalog could not be deleted. (CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED, CREATE_FAILED_CLEANUP_IN_PROGRESS, CREATE_FAILED_CLEANUP_COMPLETE, CREATE_FAILED_CLEANUP_FAILED, DELETE_IN_PROGRESS, DELETE_COMPLETE, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The data catalog type. (LAMBDA, GLUE, HIVE, FEDERATED)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_data_catalog"><CopyableCode code="get_data_catalog" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the specified data catalog.</td>
</tr>
<tr>
    <td><a href="#list_data_catalogs"><CopyableCode code="list_data_catalogs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the data catalogs in the current Amazon Web Services account. In the Athena console, data catalogs are listed as "data sources" on the Data sources page under the Data source name column.</td>
</tr>
<tr>
    <td><a href="#create_data_catalog"><CopyableCode code="create_data_catalog" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account. For a FEDERATED catalog, this API operation creates the following resources. CFN Stack Name with a maximum length of 128 characters and prefix athenafederatedcatalog-CATALOG_NAME_SANITIZED with length 23 characters. Lambda Function Name with a maximum length of 64 characters and prefix athenafederatedcatalog_CATALOG_NAME_SANITIZED with length 23 characters. Glue Connection Name with a maximum length of 255 characters and a prefix athenafederatedcatalog_CATALOG_NAME_SANITIZED with length 23 characters.</td>
</tr>
<tr>
    <td><a href="#update_data_catalog"><CopyableCode code="update_data_catalog" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Updates the data catalog that has the specified name.</td>
</tr>
<tr>
    <td><a href="#delete_data_catalog"><CopyableCode code="delete_data_catalog" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a data catalog.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_catalog"
    values={[
        { label: 'get_data_catalog', value: 'get_data_catalog' },
        { label: 'list_data_catalogs', value: 'list_data_catalogs' }
    ]}
>
<TabItem value="get_data_catalog">

Returns the specified data catalog.

```sql
SELECT
connection_type,
description,
error,
name,
parameters,
status,
type
FROM aws.athena.data_catalogs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_catalogs">

Lists the data catalogs in the current Amazon Web Services account. In the Athena console, data catalogs are listed as "data sources" on the Data sources page under the Data source name column.

```sql
SELECT
catalog_name,
connection_type,
error,
status,
type
FROM aws.athena.data_catalogs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_catalog"
    values={[
        { label: 'create_data_catalog', value: 'create_data_catalog' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_catalog">

Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account. For a FEDERATED catalog, this API operation creates the following resources. CFN Stack Name with a maximum length of 128 characters and prefix athenafederatedcatalog-CATALOG_NAME_SANITIZED with length 23 characters. Lambda Function Name with a maximum length of 64 characters and prefix athenafederatedcatalog_CATALOG_NAME_SANITIZED with length 23 characters. Glue Connection Name with a maximum length of 255 characters and a prefix athenafederatedcatalog_CATALOG_NAME_SANITIZED with length 23 characters.

```sql
INSERT INTO aws.athena.data_catalogs (
Name,
Type,
Description,
Parameters,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Type }}',
'{{ Description }}',
'{{ Parameters }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
data_catalog
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_catalogs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_catalogs resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the data catalog to create. The catalog name must be unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign, or hyphen characters. The remainder of the length constraint of 256 is reserved for use by Athena. For FEDERATED type the catalog name has following considerations and limits: The catalog name allows special characters such as _ , @ , \ , - . These characters are replaced with a hyphen (-) when creating the CFN Stack Name and with an underscore (_) when creating the Lambda Function and Glue Connection Name. The catalog name has a theoretical limit of 128 characters. However, since we use it to create other resources that allow less characters and we prepend a prefix to it, the actual catalog name limit for FEDERATED catalog is 64 - 23 = 41 characters.
    - name: Type
      value: "{{ Type }}"
      description: |
        The type of data catalog to create: LAMBDA for a federated catalog, GLUE for an Glue Data Catalog, and HIVE for an external Apache Hive metastore. FEDERATED is a federated catalog for which Athena creates the connection and the Lambda function for you based on the parameters that you pass. For FEDERATED type, we do not support IAM identity center.
      valid_values: ['LAMBDA', 'GLUE', 'HIVE', 'FEDERATED']
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the data catalog to be created.
    - name: Parameters
      value: "{{ Parameters }}"
      description: |
        Specifies the Lambda function or functions to use for creating the data catalog. This is a mapping whose values depend on the catalog type. For the HIVE data catalog type, use the following syntax. The metadata-function parameter is required. The sdk-version parameter is optional and defaults to the currently supported version. metadata-function=lambda_arn, sdk-version=version_number For the LAMBDA data catalog type, use one of the following sets of required parameters, but not both. If you have one Lambda function that processes metadata and another for reading the actual data, use the following syntax. Both parameters are required. metadata-function=lambda_arn, record-function=lambda_arn If you have a composite Lambda function that processes both metadata and data, use the following syntax to specify your Lambda function. function=lambda_arn The GLUE type takes a catalog ID parameter and is required. The catalog_id is the account ID of the Amazon Web Services account to which the Glue Data Catalog belongs. catalog-id=catalog_id The GLUE data catalog type also applies to the default AwsDataCatalog that already exists in your account, of which you can have only one and cannot modify. The FEDERATED data catalog type uses one of the following parameters, but not both. Use connection-arn for an existing Glue connection. Use connection-type and connection-properties to specify the configuration setting for a new connection. connection-arn:\`<glue_connection_arn_to_reuse>\` lambda-role-arn (optional): The execution role to use for the Lambda function. If not provided, one is created. connection-type:MYSQL|REDSHIFT|...., connection-properties:"\`<json_string>\`" For \`<json_string>\` , use escaped JSON text, as in the following example. "{\"spill_bucket\":\"my_spill\",\"spill_prefix\":\"athena-spill\",\"host\":\"abc12345.snowflakecomputing.com\",\"port\":\"1234\",\"warehouse\":\"DEV_WH\",\"database\":\"TEST\",\"schema\":\"PUBLIC\",\"SecretArn\":\"arn:aws:secretsmanager:ap-south-1:111122223333:secret:snowflake-XHb67j\"}"
    - name: Tags
      description: |
        A list of comma separated tags to add to the data catalog that is created. All the resources that are created by the CreateDataCatalog API operation with FEDERATED type will have the tag federated_athena_datacatalog="true". This includes the CFN Stack, Glue Connection, Athena DataCatalog, and all the resources created as part of the CFN Stack (Lambda Function, IAM policies/roles).
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_catalog"
    values={[
        { label: 'update_data_catalog', value: 'update_data_catalog' }
    ]}
>
<TabItem value="update_data_catalog">

Updates the data catalog that has the specified name.

```sql
UPDATE aws.athena.data_catalogs
SET 
Name = '{{ Name }}',
Type = '{{ Type }}',
Description = '{{ Description }}',
Parameters = '{{ Parameters }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_catalog"
    values={[
        { label: 'delete_data_catalog', value: 'delete_data_catalog' }
    ]}
>
<TabItem value="delete_data_catalog">

Deletes a data catalog.

```sql
DELETE FROM aws.athena.data_catalogs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
