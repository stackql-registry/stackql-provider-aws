--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
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

Creates, updates, deletes, gets or lists a <code>schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schemas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_data.schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_schemas"
    values={[
        { label: 'list_schemas', value: 'list_schemas' }
    ]}
>
<TabItem value="list_schemas">

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
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>The schemas that match the request pattern.</td>
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
    <td><a href="#list_schemas"><CopyableCode code="list_schemas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the schemas in a database. A token is returned to page through the schema list. Depending on the authorization method, use one of the following combinations of request parameters: Secrets Manager - when connecting to a cluster, provide the secret-arn of a secret stored in Secrets Manager which has username and password. The specified secret contains credentials to connect to the database you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (dbClusterIdentifier), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name. Temporary credentials - when connecting to your data warehouse, choose one of the following options: When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, arn:iam::123456789012:user:foo has the database user name IAM:foo. Also, permission to call the redshift-serverless:GetCredentials operation is required. When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, arn:iam::123456789012:user:foo has the database user name IAM:foo. Also, permission to call the redshift:GetClusterCredentialsWithIAM operation is required. When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the redshift:GetClusterCredentials operation is required. For more information about the Amazon Redshift Data API and CLI usage examples, see Using the Amazon Redshift Data API in the Amazon Redshift Management Guide.</td>
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
    defaultValue="list_schemas"
    values={[
        { label: 'list_schemas', value: 'list_schemas' }
    ]}
>
<TabItem value="list_schemas">

Lists the schemas in a database. A token is returned to page through the schema list. Depending on the authorization method, use one of the following combinations of request parameters: Secrets Manager - when connecting to a cluster, provide the secret-arn of a secret stored in Secrets Manager which has username and password. The specified secret contains credentials to connect to the database you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (dbClusterIdentifier), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name. Temporary credentials - when connecting to your data warehouse, choose one of the following options: When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, arn:iam::123456789012:user:foo has the database user name IAM:foo. Also, permission to call the redshift-serverless:GetCredentials operation is required. When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, arn:iam::123456789012:user:foo has the database user name IAM:foo. Also, permission to call the redshift:GetClusterCredentialsWithIAM operation is required. When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the redshift:GetClusterCredentials operation is required. For more information about the Amazon Redshift Data API and CLI usage examples, see Using the Amazon Redshift Data API in the Amazon Redshift Management Guide.

```sql
SELECT
schema
FROM aws.redshift_data.schemas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
