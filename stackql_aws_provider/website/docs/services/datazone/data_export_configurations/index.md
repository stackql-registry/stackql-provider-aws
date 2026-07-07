--- 
title: data_export_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - data_export_configurations
  - datazone
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

Creates, updates, deletes, gets or lists a <code>data_export_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_export_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.data_export_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_export_configuration"
    values={[
        { label: 'get_data_export_configuration', value: 'get_data_export_configuration' }
    ]}
>
<TabItem value="get_data_export_configuration">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the data export configuration report was created.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration as part of the data export configuration details.</td>
</tr>
<tr>
    <td><CopyableCode code="isExportEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the export is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="s3TableBucketArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 table bucket ARN as part of the data export configuration details.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data export configuration. (COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the data export configuration report was updated.</td>
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
    <td><a href="#get_data_export_configuration"><CopyableCode code="get_data_export_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets data export configuration details.</td>
</tr>
<tr>
    <td><a href="#put_data_export_configuration"><CopyableCode code="put_data_export_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-enableExport"><code>enableExport</code></a></td>
    <td></td>
    <td>Creates data export configuration details. If you want to temporarily disable export and later re-enable it for the same domain, use the --no-enable-export flag to disable and the --enable-export flag to re-enable. This preserves the configuration and allows you to re-enable export without deleting S3 table. You can enable asset metadata export for only one domain per account per Region. To enable export for a different domain, complete the following steps: Delete the export configuration for the currently enabled domain using the DeleteDataExportConfiguration operation. Delete the asset S3 table under the aws-sagemaker-catalog S3 table bucket. We recommend backing up the S3 table before deletion. Call the PutDataExportConfiguration API to enable export for the new domain.</td>
</tr>
<tr>
    <td><a href="#delete_data_export_configuration"><CopyableCode code="delete_data_export_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes data export configuration for a domain. This operation does not delete the S3 table created by the PutDataExportConfiguration operation. To temporarily disable export without deleting the configuration, use the PutDataExportConfiguration operation with the --no-enable-export flag instead. This allows you to re-enable export for the same domain using the --enable-export flag without deleting S3 table.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The domain ID for which you want to delete the data export configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_export_configuration"
    values={[
        { label: 'get_data_export_configuration', value: 'get_data_export_configuration' }
    ]}
>
<TabItem value="get_data_export_configuration">

Gets data export configuration details.

```sql
SELECT
createdAt,
encryptionConfiguration,
isExportEnabled,
s3TableBucketArn,
status,
updatedAt
FROM aws.datazone.data_export_configurations
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_data_export_configuration"
    values={[
        { label: 'put_data_export_configuration', value: 'put_data_export_configuration' }
    ]}
>
<TabItem value="put_data_export_configuration">

Creates data export configuration details. If you want to temporarily disable export and later re-enable it for the same domain, use the --no-enable-export flag to disable and the --enable-export flag to re-enable. This preserves the configuration and allows you to re-enable export without deleting S3 table. You can enable asset metadata export for only one domain per account per Region. To enable export for a different domain, complete the following steps: Delete the export configuration for the currently enabled domain using the DeleteDataExportConfiguration operation. Delete the asset S3 table under the aws-sagemaker-catalog S3 table bucket. We recommend backing up the S3 table before deletion. Call the PutDataExportConfiguration API to enable export for the new domain.

```sql
REPLACE aws.datazone.data_export_configurations
SET 
enableExport = {{ enableExport }},
encryptionConfiguration = '{{ encryptionConfiguration }}',
clientToken = '{{ clientToken }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND region = '{{ region }}' --required
AND enableExport = {{ enableExport }} --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_export_configuration"
    values={[
        { label: 'delete_data_export_configuration', value: 'delete_data_export_configuration' }
    ]}
>
<TabItem value="delete_data_export_configuration">

Deletes data export configuration for a domain. This operation does not delete the S3 table created by the PutDataExportConfiguration operation. To temporarily disable export without deleting the configuration, use the PutDataExportConfiguration operation with the --no-enable-export flag instead. This allows you to re-enable export for the same domain using the --enable-export flag without deleting S3 table.

```sql
DELETE FROM aws.datazone.data_export_configurations
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
