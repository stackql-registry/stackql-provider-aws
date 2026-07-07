--- 
title: table_record_expiration_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - table_record_expiration_configurations
  - s3tables
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

Creates, updates, deletes, gets or lists a <code>table_record_expiration_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_record_expiration_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.table_record_expiration_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_record_expiration_configuration"
    values={[
        { label: 'get_table_record_expiration_configuration', value: 'get_table_record_expiration_configuration' }
    ]}
>
<TabItem value="get_table_record_expiration_configuration">

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
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>The expiration settings for records in the table.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the expiration settings for records in the table. (enabled, disabled)</td>
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
    <td><a href="#get_table_record_expiration_configuration"><CopyableCode code="get_table_record_expiration_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tableArn"><code>tableArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the expiration configuration settings for records in a table, and the status of the configuration. If the status of the configuration is enabled, records expire and are automatically removed from the table after the specified number of days. Permissions You must have the s3tables:GetTableRecordExpirationConfiguration permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#put_table_record_expiration_configuration"><CopyableCode code="put_table_record_expiration_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-tableArn"><code>tableArn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Creates or updates the expiration configuration settings for records in a table, including the status of the configuration. If you enable record expiration for a table, records expire and are automatically removed from the table after the number of days that you specify. Permissions You must have the s3tables:PutTableRecordExpirationConfiguration permission to use this operation.</td>
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
<tr id="parameter-tableArn">
    <td><CopyableCode code="tableArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_table_record_expiration_configuration"
    values={[
        { label: 'get_table_record_expiration_configuration', value: 'get_table_record_expiration_configuration' }
    ]}
>
<TabItem value="get_table_record_expiration_configuration">

Retrieves the expiration configuration settings for records in a table, and the status of the configuration. If the status of the configuration is enabled, records expire and are automatically removed from the table after the specified number of days. Permissions You must have the s3tables:GetTableRecordExpirationConfiguration permission to use this operation.

```sql
SELECT
settings,
status
FROM aws.s3tables.table_record_expiration_configurations
WHERE tableArn = '{{ tableArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_table_record_expiration_configuration"
    values={[
        { label: 'put_table_record_expiration_configuration', value: 'put_table_record_expiration_configuration' }
    ]}
>
<TabItem value="put_table_record_expiration_configuration">

Creates or updates the expiration configuration settings for records in a table, including the status of the configuration. If you enable record expiration for a table, records expire and are automatically removed from the table after the number of days that you specify. Permissions You must have the s3tables:PutTableRecordExpirationConfiguration permission to use this operation.

```sql
REPLACE aws.s3tables.table_record_expiration_configurations
SET 
value = '{{ value }}'
WHERE 
tableArn = '{{ tableArn }}' --required
AND region = '{{ region }}' --required
AND value = '{{ value }}' --required;
```
</TabItem>
</Tabs>
