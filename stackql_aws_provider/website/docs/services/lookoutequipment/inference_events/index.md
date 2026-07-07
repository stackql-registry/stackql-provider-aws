--- 
title: inference_events
hide_title: false
hide_table_of_contents: false
keywords:
  - inference_events
  - lookoutequipment
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

Creates, updates, deletes, gets or lists an <code>inference_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inference_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lookoutequipment.inference_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_inference_events"
    values={[
        { label: 'list_inference_events', value: 'list_inference_events' }
    ]}
>
<TabItem value="list_inference_events">

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
    <td><CopyableCode code="InferenceEventSummaries" /></td>
    <td><code>array</code></td>
    <td>Provides an array of information about the individual inference events returned from the ListInferenceEvents operation, including scheduler used, event start time, event end time, diagnostics, and so on.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token indicating where to continue the listing of inference executions. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_inference_events"><CopyableCode code="list_inference_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all inference events that have been found for the specified inference scheduler.</td>
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
    defaultValue="list_inference_events"
    values={[
        { label: 'list_inference_events', value: 'list_inference_events' }
    ]}
>
<TabItem value="list_inference_events">

Lists all inference events that have been found for the specified inference scheduler.

```sql
SELECT
InferenceEventSummaries,
NextToken
FROM aws.lookoutequipment.inference_events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
