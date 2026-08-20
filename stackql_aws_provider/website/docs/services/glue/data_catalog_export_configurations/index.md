--- 
title: data_catalog_export_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - data_catalog_export_configurations
  - glue
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

Creates, updates, deletes, gets or lists a <code>data_catalog_export_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_catalog_export_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.data_catalog_export_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_catalog_export_configuration"
    values={[
        { label: 'get_data_catalog_export_configuration', value: 'get_data_catalog_export_configuration' }
    ]}
>
<TabItem value="get_data_catalog_export_configuration">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the export configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration for the exported data.</td>
</tr>
<tr>
    <td><CopyableCode code="export_setting" /></td>
    <td><code>string</code></td>
    <td>The export setting for the data catalog. Valid values are ENABLED and DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_table_bucket_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the S3 Tables bucket where catalog metadata is exported.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the export. Valid values are ENABLING, ENABLED, DISABLING, DISABLED, and FAILED. (ENABLING, ENABLED, DISABLING, DISABLED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the export configuration was last updated.</td>
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
    <td><a href="#get_data_catalog_export_configuration"><CopyableCode code="get_data_catalog_export_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current export configuration for the Glue Data Catalog. The export configuration controls whether catalog metadata is exported to S3 Tables.</td>
</tr>
<tr>
    <td><a href="#put_data_catalog_export_configuration"><CopyableCode code="put_data_catalog_export_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExportSetting"><code>ExportSetting</code></a></td>
    <td></td>
    <td>Creates or updates the export configuration for the Glue Data Catalog. Use this operation to enable or disable the export of catalog metadata to S3 Tables.</td>
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
    defaultValue="get_data_catalog_export_configuration"
    values={[
        { label: 'get_data_catalog_export_configuration', value: 'get_data_catalog_export_configuration' }
    ]}
>
<TabItem value="get_data_catalog_export_configuration">

Retrieves the current export configuration for the Glue Data Catalog. The export configuration controls whether catalog metadata is exported to S3 Tables.

```sql
SELECT
created_at,
encryption_configuration,
export_setting,
s3_table_bucket_arn,
status,
updated_at
FROM aws.glue.data_catalog_export_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_data_catalog_export_configuration"
    values={[
        { label: 'put_data_catalog_export_configuration', value: 'put_data_catalog_export_configuration' }
    ]}
>
<TabItem value="put_data_catalog_export_configuration">

Creates or updates the export configuration for the Glue Data Catalog. Use this operation to enable or disable the export of catalog metadata to S3 Tables.

```sql
REPLACE aws.glue.data_catalog_export_configurations
SET 
ExportSetting = '{{ ExportSetting }}',
EncryptionConfiguration = '{{ EncryptionConfiguration }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
AND ExportSetting = '{{ ExportSetting }}' --required
RETURNING
encryption_configuration,
export_setting;
```
</TabItem>
</Tabs>
