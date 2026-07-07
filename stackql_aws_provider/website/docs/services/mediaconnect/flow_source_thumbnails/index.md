--- 
title: flow_source_thumbnails
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_source_thumbnails
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

Creates, updates, deletes, gets or lists a <code>flow_source_thumbnails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_source_thumbnails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconnect.flow_source_thumbnails" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_flow_source_thumbnail"
    values={[
        { label: 'describe_flow_source_thumbnail', value: 'describe_flow_source_thumbnail' }
    ]}
>
<TabItem value="describe_flow_source_thumbnail">

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
    <td><CopyableCode code="FlowArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the flow that DescribeFlowSourceThumbnail was performed on.</td>
</tr>
<tr>
    <td><CopyableCode code="Thumbnail" /></td>
    <td><code>string</code></td>
    <td>Thumbnail Base64 string.</td>
</tr>
<tr>
    <td><CopyableCode code="ThumbnailMessages" /></td>
    <td><code>array</code></td>
    <td>Status code and messages about the flow source thumbnail.</td>
</tr>
<tr>
    <td><CopyableCode code="Timecode" /></td>
    <td><code>string</code></td>
    <td>Timecode of thumbnail.</td>
</tr>
<tr>
    <td><CopyableCode code="Timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when thumbnail was generated.</td>
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
    <td><a href="#describe_flow_source_thumbnail"><CopyableCode code="describe_flow_source_thumbnail" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the thumbnail for the flow source.</td>
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
    defaultValue="describe_flow_source_thumbnail"
    values={[
        { label: 'describe_flow_source_thumbnail', value: 'describe_flow_source_thumbnail' }
    ]}
>
<TabItem value="describe_flow_source_thumbnail">

Describes the thumbnail for the flow source.

```sql
SELECT
FlowArn,
Thumbnail,
ThumbnailMessages,
Timecode,
Timestamp
FROM aws.mediaconnect.flow_source_thumbnails
WHERE flow_arn = '{{ flow_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
