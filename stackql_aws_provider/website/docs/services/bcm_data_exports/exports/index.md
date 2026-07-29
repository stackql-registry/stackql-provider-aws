--- 
title: exports
hide_title: false
hide_table_of_contents: false
keywords:
  - exports
  - bcm_data_exports
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

Creates, updates, deletes, gets or lists an <code>exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bcm_data_exports.exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_export"
    values={[
        { label: 'get_export', value: 'get_export' },
        { label: 'list_exports', value: 'list_exports' }
    ]}
>
<TabItem value="get_export">

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
    <td><CopyableCode code="export" /></td>
    <td><code>object</code></td>
    <td>The data for this specific export.</td>
</tr>
<tr>
    <td><CopyableCode code="export_status" /></td>
    <td><code>object</code></td>
    <td>The status of this specific export.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_exports">

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
    <td><CopyableCode code="export_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for this export. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:(bcm-data-exports):&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;-a-zA-Z0-9/:_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="export_name" /></td>
    <td><code>string</code></td>
    <td>The name of this specific data export. (pattern: &lt;code&gt;&#91;0-9A-Za-z\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="export_status" /></td>
    <td><code>object</code></td>
    <td>The status of this specific data export.</td>
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
    <td><a href="#get_export"><CopyableCode code="get_export" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Views the definition of an existing data export.</td>
</tr>
<tr>
    <td><a href="#list_exports"><CopyableCode code="list_exports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all data export definitions.</td>
</tr>
<tr>
    <td><a href="#create_export"><CopyableCode code="create_export" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a data export and specifies the data query, the delivery preference, and any optional resource tags. A DataQuery consists of both a QueryStatement and TableConfigurations. The QueryStatement is an SQL statement. Data Exports only supports a limited subset of the SQL syntax. For more information on the SQL syntax that is supported, see Data query. To view the available tables and columns, see the Data Exports table dictionary. The TableConfigurations is a collection of specified TableProperties for the table being queried in the QueryStatement. TableProperties are additional configurations you can provide to change the data and schema of a table. Each table can have different TableProperties. However, tables are not required to have any TableProperties. Each table property has a default value that it assumes if not specified. For more information on table configurations, see Data query. To view the table properties available for each table, see the Data Exports table dictionary or use the ListTables API to get a response of all tables and their available properties.</td>
</tr>
<tr>
    <td><a href="#update_export"><CopyableCode code="update_export" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExportArn"><code>ExportArn</code></a></td>
    <td></td>
    <td>Updates an existing data export by overwriting all export parameters. All export parameters must be provided in the UpdateExport request.</td>
</tr>
<tr>
    <td><a href="#delete_export"><CopyableCode code="delete_export" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing data export.</td>
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
    defaultValue="get_export"
    values={[
        { label: 'get_export', value: 'get_export' },
        { label: 'list_exports', value: 'list_exports' }
    ]}
>
<TabItem value="get_export">

Views the definition of an existing data export.

```sql
SELECT
export,
export_status
FROM aws.bcm_data_exports.exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_exports">

Lists all data export definitions.

```sql
SELECT
export_arn,
export_name,
export_status
FROM aws.bcm_data_exports.exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_export"
    values={[
        { label: 'create_export', value: 'create_export' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_export">

Creates a data export and specifies the data query, the delivery preference, and any optional resource tags. A DataQuery consists of both a QueryStatement and TableConfigurations. The QueryStatement is an SQL statement. Data Exports only supports a limited subset of the SQL syntax. For more information on the SQL syntax that is supported, see Data query. To view the available tables and columns, see the Data Exports table dictionary. The TableConfigurations is a collection of specified TableProperties for the table being queried in the QueryStatement. TableProperties are additional configurations you can provide to change the data and schema of a table. Each table can have different TableProperties. However, tables are not required to have any TableProperties. Each table property has a default value that it assumes if not specified. For more information on table configurations, see Data query. To view the table properties available for each table, see the Data Exports table dictionary or use the ListTables API to get a response of all tables and their available properties.

```sql
INSERT INTO aws.bcm_data_exports.exports (
Export,
ResourceTags,
region
)
SELECT 
'{{ Export }}',
'{{ ResourceTags }}',
'{{ region }}'
RETURNING
export_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: exports
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the exports resource.
    - name: Export
      description: |
        The details of the export, including data query, name, description, and destination configuration.
      value:
        ExportArn: "{{ ExportArn }}"
        Name: "{{ Name }}"
        Description: "{{ Description }}"
        DataQuery:
          QueryStatement: "{{ QueryStatement }}"
          TableConfigurations: "{{ TableConfigurations }}"
        DestinationConfigurations:
          S3Destination:
            S3Bucket: "{{ S3Bucket }}"
            S3BucketOwner: "{{ S3BucketOwner }}"
            S3Prefix: "{{ S3Prefix }}"
            S3Region: "{{ S3Region }}"
            S3OutputConfigurations:
              OutputType: "{{ OutputType }}"
              Format: "{{ Format }}"
              Compression: "{{ Compression }}"
              Overwrite: "{{ Overwrite }}"
        RefreshCadence:
          Frequency: "{{ Frequency }}"
    - name: ResourceTags
      description: |
        An optional list of tags to associate with the specified export. Each tag consists of a key and a value, and each key must be unique for the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_export"
    values={[
        { label: 'update_export', value: 'update_export' }
    ]}
>
<TabItem value="update_export">

Updates an existing data export by overwriting all export parameters. All export parameters must be provided in the UpdateExport request.

```sql
UPDATE aws.bcm_data_exports.exports
SET 
ExportArn = '{{ ExportArn }}',
Export = '{{ Export }}'
WHERE 
region = '{{ region }}' --required
AND ExportArn = '{{ ExportArn }}' --required
RETURNING
export_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_export"
    values={[
        { label: 'delete_export', value: 'delete_export' }
    ]}
>
<TabItem value="delete_export">

Deletes an existing data export.

```sql
DELETE FROM aws.bcm_data_exports.exports
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
