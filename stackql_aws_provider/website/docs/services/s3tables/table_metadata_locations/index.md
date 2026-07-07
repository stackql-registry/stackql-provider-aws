--- 
title: table_metadata_locations
hide_title: false
hide_table_of_contents: false
keywords:
  - table_metadata_locations
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

Creates, updates, deletes, gets or lists a <code>table_metadata_locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_metadata_locations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.table_metadata_locations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_metadata_location"
    values={[
        { label: 'get_table_metadata_location', value: 'get_table_metadata_location' }
    ]}
>
<TabItem value="get_table_metadata_location">

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
    <td><CopyableCode code="metadataLocation" /></td>
    <td><code>string</code></td>
    <td>The metadata location.</td>
</tr>
<tr>
    <td><CopyableCode code="versionToken" /></td>
    <td><code>string</code></td>
    <td>The version token.</td>
</tr>
<tr>
    <td><CopyableCode code="warehouseLocation" /></td>
    <td><code>string</code></td>
    <td>The warehouse location.</td>
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
    <td><a href="#get_table_metadata_location"><CopyableCode code="get_table_metadata_location" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the location of the table metadata. Permissions You must have the s3tables:GetTableMetadataLocation permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#update_table_metadata_location"><CopyableCode code="update_table_metadata_location" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-versionToken"><code>versionToken</code></a>, <a href="#parameter-metadataLocation"><code>metadataLocation</code></a></td>
    <td></td>
    <td>Updates the metadata location for a table. The metadata location of a table must be an S3 URI that begins with the table's warehouse location. The metadata location for an Apache Iceberg table must end with .metadata.json, or if the metadata file is Gzip-compressed, .metadata.json.gz. Permissions You must have the s3tables:UpdateTableMetadataLocation permission to use this operation.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the table.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the table.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-table_bucket_arn">
    <td><CopyableCode code="table_bucket_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table bucket.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_table_metadata_location"
    values={[
        { label: 'get_table_metadata_location', value: 'get_table_metadata_location' }
    ]}
>
<TabItem value="get_table_metadata_location">

Gets the location of the table metadata. Permissions You must have the s3tables:GetTableMetadataLocation permission to use this operation.

```sql
SELECT
metadataLocation,
versionToken,
warehouseLocation
FROM aws.s3tables.table_metadata_locations
WHERE table_bucket_arn = '{{ table_bucket_arn }}' -- required
AND namespace = '{{ namespace }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_table_metadata_location"
    values={[
        { label: 'update_table_metadata_location', value: 'update_table_metadata_location' }
    ]}
>
<TabItem value="update_table_metadata_location">

Updates the metadata location for a table. The metadata location of a table must be an S3 URI that begins with the table's warehouse location. The metadata location for an Apache Iceberg table must end with .metadata.json, or if the metadata file is Gzip-compressed, .metadata.json.gz. Permissions You must have the s3tables:UpdateTableMetadataLocation permission to use this operation.

```sql
UPDATE aws.s3tables.table_metadata_locations
SET 
versionToken = '{{ versionToken }}',
metadataLocation = '{{ metadataLocation }}'
WHERE 
table_bucket_arn = '{{ table_bucket_arn }}' --required
AND namespace = '{{ namespace }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND versionToken = '{{ versionToken }}' --required
AND metadataLocation = '{{ metadataLocation }}' --required
RETURNING
name,
metadataLocation,
namespace,
tableARN,
versionToken;
```
</TabItem>
</Tabs>
