--- 
title: tables
hide_title: false
hide_table_of_contents: false
keywords:
  - tables
  - redshift_data
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

Creates, updates, deletes, gets or lists a <code>tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_data.tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_table"
    values={[
        { label: 'describe_table', value: 'describe_table' }
    ]}
>
<TabItem value="describe_table">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the column.</td>
</tr>
<tr>
    <td><CopyableCode code="columnDefault" /></td>
    <td><code>string</code></td>
    <td>The default value of the column.</td>
</tr>
<tr>
    <td><CopyableCode code="isCaseSensitive" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether the column is case-sensitive.</td>
</tr>
<tr>
    <td><CopyableCode code="isCurrency" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether the column contains currency values.</td>
</tr>
<tr>
    <td><CopyableCode code="isSigned" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates whether an integer column is signed.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label for the column.</td>
</tr>
<tr>
    <td><CopyableCode code="length" /></td>
    <td><code>integer</code></td>
    <td>The length of the column.</td>
</tr>
<tr>
    <td><CopyableCode code="nullable_" /></td>
    <td><code>integer</code></td>
    <td>A value that indicates whether the column is nullable.</td>
</tr>
<tr>
    <td><CopyableCode code="precision" /></td>
    <td><code>integer</code></td>
    <td>The precision value of a decimal number column, or the column length for a non-numeric column.</td>
</tr>
<tr>
    <td><CopyableCode code="scale" /></td>
    <td><code>integer</code></td>
    <td>The scale value of a decimal number column.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaName" /></td>
    <td><code>string</code></td>
    <td>The name of the schema that contains the table that includes the column.</td>
</tr>
<tr>
    <td><CopyableCode code="tableName" /></td>
    <td><code>string</code></td>
    <td>The name of the table that includes the column.</td>
</tr>
<tr>
    <td><CopyableCode code="typeName" /></td>
    <td><code>string</code></td>
    <td>The database-specific data type of the column.</td>
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
    <td><a href="#describe_table"><CopyableCode code="describe_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the detailed information about a table from metadata in the cluster. The information includes its columns. A token is returned to page through the column list. Depending on the authorization method, use one of the following combinations of request parameters: Secrets Manager - when connecting to a cluster, provide the secret-arn of a secret stored in Secrets Manager which has username and password. The specified secret contains credentials to connect to the database you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (dbClusterIdentifier), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name. Temporary credentials - when connecting to your data warehouse, choose one of the following options: When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, arn:iam::123456789012:user:foo has the database user name IAM:foo. Also, permission to call the redshift-serverless:GetCredentials operation is required. When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, arn:iam::123456789012:user:foo has the database user name IAM:foo. Also, permission to call the redshift:GetClusterCredentialsWithIAM operation is required. When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the redshift:GetClusterCredentials operation is required. For more information about the Amazon Redshift Data API and CLI usage examples, see Using the Amazon Redshift Data API in the Amazon Redshift Management Guide.</td>
</tr>
<tr>
    <td><a href="#list_tables"><CopyableCode code="list_tables" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Database"><code>Database</code></a></td>
    <td></td>
    <td>List the tables in a database. If neither SchemaPattern nor TablePattern are specified, then all tables in the database are returned. A token is returned to page through the table list. Depending on the authorization method, use one of the following combinations of request parameters: Secrets Manager - when connecting to a cluster, provide the secret-arn of a secret stored in Secrets Manager which has username and password. The specified secret contains credentials to connect to the database you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (dbClusterIdentifier), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name. Temporary credentials - when connecting to your data warehouse, choose one of the following options: When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, arn:iam::123456789012:user:foo has the database user name IAM:foo. Also, permission to call the redshift-serverless:GetCredentials operation is required. When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, arn:iam::123456789012:user:foo has the database user name IAM:foo. Also, permission to call the redshift:GetClusterCredentialsWithIAM operation is required. When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the redshift:GetClusterCredentials operation is required. For more information about the Amazon Redshift Data API and CLI usage examples, see Using the Amazon Redshift Data API in the Amazon Redshift Management Guide.</td>
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
    defaultValue="describe_table"
    values={[
        { label: 'describe_table', value: 'describe_table' }
    ]}
>
<TabItem value="describe_table">

Describes the detailed information about a table from metadata in the cluster. The information includes its columns. A token is returned to page through the column list. Depending on the authorization method, use one of the following combinations of request parameters: Secrets Manager - when connecting to a cluster, provide the secret-arn of a secret stored in Secrets Manager which has username and password. The specified secret contains credentials to connect to the database you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (dbClusterIdentifier), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name. Temporary credentials - when connecting to your data warehouse, choose one of the following options: When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, arn:iam::123456789012:user:foo has the database user name IAM:foo. Also, permission to call the redshift-serverless:GetCredentials operation is required. When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, arn:iam::123456789012:user:foo has the database user name IAM:foo. Also, permission to call the redshift:GetClusterCredentialsWithIAM operation is required. When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the redshift:GetClusterCredentials operation is required. For more information about the Amazon Redshift Data API and CLI usage examples, see Using the Amazon Redshift Data API in the Amazon Redshift Management Guide.

```sql
SELECT
name,
columnDefault,
isCaseSensitive,
isCurrency,
isSigned,
label,
length,
nullable_,
precision,
scale,
schemaName,
tableName,
typeName
FROM aws.redshift_data.tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_tables"
    values={[
        { label: 'list_tables', value: 'list_tables' }
    ]}
>
<TabItem value="list_tables">

List the tables in a database. If neither SchemaPattern nor TablePattern are specified, then all tables in the database are returned. A token is returned to page through the table list. Depending on the authorization method, use one of the following combinations of request parameters: Secrets Manager - when connecting to a cluster, provide the secret-arn of a secret stored in Secrets Manager which has username and password. The specified secret contains credentials to connect to the database you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (dbClusterIdentifier), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name. Temporary credentials - when connecting to your data warehouse, choose one of the following options: When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, arn:iam::123456789012:user:foo has the database user name IAM:foo. Also, permission to call the redshift-serverless:GetCredentials operation is required. When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, arn:iam::123456789012:user:foo has the database user name IAM:foo. Also, permission to call the redshift:GetClusterCredentialsWithIAM operation is required. When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the redshift:GetClusterCredentials operation is required. For more information about the Amazon Redshift Data API and CLI usage examples, see Using the Amazon Redshift Data API in the Amazon Redshift Management Guide.

```sql
EXEC aws.redshift_data.tables.list_tables 
@region='{{ region }}' --required 
@@json=
'{
"ClusterIdentifier": "{{ ClusterIdentifier }}", 
"SecretArn": "{{ SecretArn }}", 
"DbUser": "{{ DbUser }}", 
"Database": "{{ Database }}", 
"ConnectedDatabase": "{{ ConnectedDatabase }}", 
"SchemaPattern": "{{ SchemaPattern }}", 
"TablePattern": "{{ TablePattern }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"WorkgroupName": "{{ WorkgroupName }}"
}'
;
```
</TabItem>
</Tabs>
