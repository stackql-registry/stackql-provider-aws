--- 
title: realtime_contact_analysis_segments_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - realtime_contact_analysis_segments_v2s
  - connect
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

Creates, updates, deletes, gets or lists a <code>realtime_contact_analysis_segments_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="realtime_contact_analysis_segments_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.realtime_contact_analysis_segments_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_realtime_contact_analysis_segments_v2"
    values={[
        { label: 'list_realtime_contact_analysis_segments_v2', value: 'list_realtime_contact_analysis_segments_v2' }
    ]}
>
<TabItem value="list_realtime_contact_analysis_segments_v2">

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
    <td><CopyableCode code="Channel" /></td>
    <td><code>string</code></td>
    <td>The channel of the contact. Only CHAT is supported. This API does not support VOICE. If you attempt to use it for the VOICE channel, an InvalidRequestException error occurs. (VOICE, CHAT)</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, this is the token for the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="Segments" /></td>
    <td><code>array</code></td>
    <td>An analyzed transcript or category.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status of real-time contact analysis. (IN_PROGRESS, FAILED, COMPLETED)</td>
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
    <td><a href="#list_realtime_contact_analysis_segments_v2"><CopyableCode code="list_realtime_contact_analysis_segments_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of analysis segments for a real-time chat analysis session. This API supports CHAT channels only. This API does not support VOICE. If you attempt to use it for VOICE, an InvalidRequestException occurs.</td>
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
<tr id="parameter-contact_id">
    <td><CopyableCode code="contact_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the contact in this instance of Amazon Connect.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
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
    defaultValue="list_realtime_contact_analysis_segments_v2"
    values={[
        { label: 'list_realtime_contact_analysis_segments_v2', value: 'list_realtime_contact_analysis_segments_v2' }
    ]}
>
<TabItem value="list_realtime_contact_analysis_segments_v2">

Provides a list of analysis segments for a real-time chat analysis session. This API supports CHAT channels only. This API does not support VOICE. If you attempt to use it for VOICE, an InvalidRequestException occurs.

```sql
SELECT
Channel,
NextToken,
Segments,
Status
FROM aws.connect.realtime_contact_analysis_segments_v2s
WHERE instance_id = '{{ instance_id }}' -- required
AND contact_id = '{{ contact_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
