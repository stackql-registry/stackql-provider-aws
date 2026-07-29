--- 
title: stream_storage_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_storage_configurations
  - kinesisvideo
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

Creates, updates, deletes, gets or lists a <code>stream_storage_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stream_storage_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisvideo.stream_storage_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stream_storage_configuration"
    values={[
        { label: 'describe_stream_storage_configuration', value: 'describe_stream_storage_configuration' }
    ]}
>
<TabItem value="describe_stream_storage_configuration">

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
    <td><CopyableCode code="stream_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the stream. (pattern: &lt;code&gt;arn:&#91;a-z\d-&#93;+:kinesisvideo:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:&#91;a-z&#93;+/&#91;a-zA-Z0-9_.-&#93;+/&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_name" /></td>
    <td><code>string</code></td>
    <td>The name of the stream. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_storage_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for stream storage, including the default storage tier for stream data. This configuration determines how stream data is stored and accessed, with different tiers offering varying levels of performance and cost optimization.</td>
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
    <td><a href="#describe_stream_storage_configuration"><CopyableCode code="describe_stream_storage_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current storage configuration for the specified Kinesis video stream. In the request, you must specify either the StreamName or the StreamARN. You must have permissions for the KinesisVideo:DescribeStreamStorageConfiguration action.</td>
</tr>
<tr>
    <td><a href="#update_stream_storage_configuration"><CopyableCode code="update_stream_storage_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a>, <a href="#parameter-StreamStorageConfiguration"><code>StreamStorageConfiguration</code></a></td>
    <td></td>
    <td>Updates the storage configuration for an existing Kinesis video stream. This operation allows you to modify the storage tier settings for a stream, enabling you to optimize storage costs and performance based on your access patterns. UpdateStreamStorageConfiguration is an asynchronous operation. You must have permissions for the KinesisVideo:UpdateStreamStorageConfiguration action.</td>
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
    defaultValue="describe_stream_storage_configuration"
    values={[
        { label: 'describe_stream_storage_configuration', value: 'describe_stream_storage_configuration' }
    ]}
>
<TabItem value="describe_stream_storage_configuration">

Retrieves the current storage configuration for the specified Kinesis video stream. In the request, you must specify either the StreamName or the StreamARN. You must have permissions for the KinesisVideo:DescribeStreamStorageConfiguration action.

```sql
SELECT
stream_arn,
stream_name,
stream_storage_configuration
FROM aws.kinesisvideo.stream_storage_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_stream_storage_configuration"
    values={[
        { label: 'update_stream_storage_configuration', value: 'update_stream_storage_configuration' }
    ]}
>
<TabItem value="update_stream_storage_configuration">

Updates the storage configuration for an existing Kinesis video stream. This operation allows you to modify the storage tier settings for a stream, enabling you to optimize storage costs and performance based on your access patterns. UpdateStreamStorageConfiguration is an asynchronous operation. You must have permissions for the KinesisVideo:UpdateStreamStorageConfiguration action.

```sql
UPDATE aws.kinesisvideo.stream_storage_configurations
SET 
StreamName = '{{ StreamName }}',
StreamARN = '{{ StreamARN }}',
CurrentVersion = '{{ CurrentVersion }}',
StreamStorageConfiguration = '{{ StreamStorageConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND CurrentVersion = '{{ CurrentVersion }}' --required
AND StreamStorageConfiguration = '{{ StreamStorageConfiguration }}' --required;
```
</TabItem>
</Tabs>
