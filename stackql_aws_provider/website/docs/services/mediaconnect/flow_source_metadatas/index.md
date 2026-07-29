--- 
title: flow_source_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_source_metadatas
  - mediaconnect
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

Creates, updates, deletes, gets or lists a <code>flow_source_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_source_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconnect.flow_source_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_flow_source_metadata"
    values={[
        { label: 'describe_flow_source_metadata', value: 'describe_flow_source_metadata' }
    ]}
>
<TabItem value="describe_flow_source_metadata">

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
    <td><CopyableCode code="flow_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the flow that DescribeFlowSourceMetadata was performed on.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Provides a status code and message regarding issues found with the flow source metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="ndi_info" /></td>
    <td><code>object</code></td>
    <td>The NDI® specific information about the flow's source. This includes the current active NDI sender, a list of all discovered NDI senders, the associated media streams for the active NDI sender, and any relevant status messages.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the most recent change in metadata for this flow’s source.</td>
</tr>
<tr>
    <td><CopyableCode code="transport_media_info" /></td>
    <td><code>object</code></td>
    <td>Information about the flow's transport media.</td>
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
    <td><a href="#describe_flow_source_metadata"><CopyableCode code="describe_flow_source_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The DescribeFlowSourceMetadata API is used to view information about the flow's source transport stream and programs. This API displays status messages about the flow's source as well as details about the program's video, audio, and other data.</td>
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
<tr id="parameter-flow_arn">
    <td><CopyableCode code="flow_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow.</td>
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
    defaultValue="describe_flow_source_metadata"
    values={[
        { label: 'describe_flow_source_metadata', value: 'describe_flow_source_metadata' }
    ]}
>
<TabItem value="describe_flow_source_metadata">

The DescribeFlowSourceMetadata API is used to view information about the flow's source transport stream and programs. This API displays status messages about the flow's source as well as details about the program's video, audio, and other data.

```sql
SELECT
flow_arn,
messages,
ndi_info,
timestamp,
transport_media_info
FROM aws.mediaconnect.flow_source_metadatas
WHERE flow_arn = '{{ flow_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
