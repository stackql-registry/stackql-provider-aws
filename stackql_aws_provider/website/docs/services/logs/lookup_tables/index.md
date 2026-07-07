--- 
title: lookup_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - lookup_tables
  - logs
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

Creates, updates, deletes, gets or lists a <code>lookup_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lookup_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.lookup_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lookup_table"
    values={[
        { label: 'get_lookup_table', value: 'get_lookup_table' },
        { label: 'describe_lookup_tables', value: 'describe_lookup_tables' }
    ]}
>
<TabItem value="get_lookup_table">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the lookup table.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ARN of the KMS key used to encrypt the lookup table data, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time when the lookup table was last updated, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="lookupTableArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the lookup table.</td>
</tr>
<tr>
    <td><CopyableCode code="lookupTableName" /></td>
    <td><code>string</code></td>
    <td>The name of the lookup table. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the lookup table in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="tableBody" /></td>
    <td><code>string</code></td>
    <td>The full CSV content of the lookup table.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_lookup_tables">

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
    <td><CopyableCode code="lookupTables" /></td>
    <td><code>array</code></td>
    <td>An array of structures, where each structure contains metadata about one lookup table.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. The token expires after 24 hours.</td>
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
    <td><a href="#get_lookup_table"><CopyableCode code="get_lookup_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the full content of a lookup table, including the CSV data.</td>
</tr>
<tr>
    <td><a href="#describe_lookup_tables"><CopyableCode code="describe_lookup_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metadata about lookup tables in your account. You can optionally filter the results by table name prefix. Results are sorted by table name in ascending order.</td>
</tr>
<tr>
    <td><a href="#create_lookup_table"><CopyableCode code="create_lookup_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-lookupTableName"><code>lookupTableName</code></a>, <a href="#parameter-tableBody"><code>tableBody</code></a></td>
    <td></td>
    <td>Creates a lookup table by uploading CSV data. You can use lookup tables to enrich log data in CloudWatch Logs Insights queries with reference data such as user details, application names, or error descriptions. The table name must be unique within your account and Region. The CSV content must include a header row with column names, use UTF-8 encoding, and not exceed 10 MB.</td>
</tr>
<tr>
    <td><a href="#update_lookup_table"><CopyableCode code="update_lookup_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-lookupTableArn"><code>lookupTableArn</code></a>, <a href="#parameter-tableBody"><code>tableBody</code></a></td>
    <td></td>
    <td>Updates an existing lookup table by replacing all of its CSV content. After the update completes, queries that use this table will use the new data. This is a full replacement operation. All existing content is replaced with the new CSV data.</td>
</tr>
<tr>
    <td><a href="#delete_lookup_table"><CopyableCode code="delete_lookup_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a lookup table permanently. This operation cannot be undone. Queries that reference a deleted table will return an error. Before deleting a lookup table, review any saved queries or dashboards that may reference it.</td>
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
    defaultValue="get_lookup_table"
    values={[
        { label: 'get_lookup_table', value: 'get_lookup_table' },
        { label: 'describe_lookup_tables', value: 'describe_lookup_tables' }
    ]}
>
<TabItem value="get_lookup_table">

Retrieves the full content of a lookup table, including the CSV data.

```sql
SELECT
description,
kmsKeyId,
lastUpdatedTime,
lookupTableArn,
lookupTableName,
sizeBytes,
tableBody
FROM aws.logs.lookup_tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_lookup_tables">

Retrieves metadata about lookup tables in your account. You can optionally filter the results by table name prefix. Results are sorted by table name in ascending order.

```sql
SELECT
lookupTables,
nextToken
FROM aws.logs.lookup_tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_lookup_table"
    values={[
        { label: 'create_lookup_table', value: 'create_lookup_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_lookup_table">

Creates a lookup table by uploading CSV data. You can use lookup tables to enrich log data in CloudWatch Logs Insights queries with reference data such as user details, application names, or error descriptions. The table name must be unique within your account and Region. The CSV content must include a header row with column names, use UTF-8 encoding, and not exceed 10 MB.

```sql
INSERT INTO aws.logs.lookup_tables (
lookupTableName,
description,
tableBody,
kmsKeyId,
tags,
region
)
SELECT 
'{{ lookupTableName }}' /* required */,
'{{ description }}',
'{{ tableBody }}' /* required */,
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ region }}'
RETURNING
createdAt,
lookupTableArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: lookup_tables
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the lookup_tables resource.
    - name: lookupTableName
      value: "{{ lookupTableName }}"
      description: |
        The name of the lookup table. The name must be unique within your account and Region. The name can contain only alphanumeric characters and underscores, and can be up to 256 characters long.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the lookup table. The description can be up to 1024 characters long.
    - name: tableBody
      value: "{{ tableBody }}"
      description: |
        The CSV content of the lookup table. The first row must be a header row with column names. The content must use UTF-8 encoding and not exceed 10 MB.
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        The ARN of the KMS key to use to encrypt the lookup table data. If you don't specify a key, the data is encrypted with an Amazon Web Services-owned key.
    - name: tags
      value: "{{ tags }}"
      description: |
        A list of key-value pairs to associate with the lookup table. You can associate as many as 50 tags with a lookup table. Tags can help you organize and categorize your resources.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_lookup_table"
    values={[
        { label: 'update_lookup_table', value: 'update_lookup_table' }
    ]}
>
<TabItem value="update_lookup_table">

Updates an existing lookup table by replacing all of its CSV content. After the update completes, queries that use this table will use the new data. This is a full replacement operation. All existing content is replaced with the new CSV data.

```sql
UPDATE aws.logs.lookup_tables
SET 
lookupTableArn = '{{ lookupTableArn }}',
description = '{{ description }}',
tableBody = '{{ tableBody }}',
kmsKeyId = '{{ kmsKeyId }}'
WHERE 
region = '{{ region }}' --required
AND lookupTableArn = '{{ lookupTableArn }}' --required
AND tableBody = '{{ tableBody }}' --required
RETURNING
lastUpdatedTime,
lookupTableArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lookup_table"
    values={[
        { label: 'delete_lookup_table', value: 'delete_lookup_table' }
    ]}
>
<TabItem value="delete_lookup_table">

Deletes a lookup table permanently. This operation cannot be undone. Queries that reference a deleted table will return an error. Before deleting a lookup table, review any saved queries or dashboards that may reference it.

```sql
DELETE FROM aws.logs.lookup_tables
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
