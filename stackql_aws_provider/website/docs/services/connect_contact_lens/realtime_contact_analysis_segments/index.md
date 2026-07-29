--- 
title: realtime_contact_analysis_segments
hide_title: false
hide_table_of_contents: false
keywords:
  - realtime_contact_analysis_segments
  - connect_contact_lens
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

Creates, updates, deletes, gets or lists a <code>realtime_contact_analysis_segments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="realtime_contact_analysis_segments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect_contact_lens.realtime_contact_analysis_segments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_realtime_contact_analysis_segments"
    values={[
        { label: 'list_realtime_contact_analysis_segments', value: 'list_realtime_contact_analysis_segments' }
    ]}
>
<TabItem value="list_realtime_contact_analysis_segments">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, this is the token for the next set of results. If response includes nextToken there are two possible scenarios: There are more segments so another call is required to get them. There are no more segments at this time, but more may be available later (real-time analysis is in progress) so the client should call the operation again to get new segments. If response does not include nextToken, the analysis is completed (successfully or failed) and there are no more segments to retrieve. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="segments" /></td>
    <td><code>array</code></td>
    <td>An analyzed transcript or category.</td>
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
    <td><a href="#list_realtime_contact_analysis_segments"><CopyableCode code="list_realtime_contact_analysis_segments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of analysis segments for a real-time analysis session.</td>
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
    defaultValue="list_realtime_contact_analysis_segments"
    values={[
        { label: 'list_realtime_contact_analysis_segments', value: 'list_realtime_contact_analysis_segments' }
    ]}
>
<TabItem value="list_realtime_contact_analysis_segments">

Provides a list of analysis segments for a real-time analysis session.

```sql
SELECT
next_token,
segments
FROM aws.connect_contact_lens.realtime_contact_analysis_segments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
