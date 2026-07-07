--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
  - devops_guru
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_events"
    values={[
        { label: 'list_events', value: 'list_events' }
    ]}
>
<TabItem value="list_events">

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
    <td><CopyableCode code="DataSource" /></td>
    <td><code>string</code></td>
    <td>The source, AWS_CLOUD_TRAIL or AWS_CODE_DEPLOY, where DevOps Guru analysis found the event. (AWS_CLOUD_TRAIL, AWS_CODE_DEPLOY)</td>
</tr>
<tr>
    <td><CopyableCode code="EventClass" /></td>
    <td><code>string</code></td>
    <td>The class of the event. The class specifies what the event is related to, such as an infrastructure change, a deployment, or a schema change. (INFRASTRUCTURE, DEPLOYMENT, SECURITY_CHANGE, CONFIG_CHANGE, SCHEMA_CHANGE)</td>
</tr>
<tr>
    <td><CopyableCode code="EventSource" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services source that emitted the event. (pattern: &lt;code&gt;^&#91;a-z&#93;+&#91;a-z0-9&#93;*\.amazonaws\.com|aws\.events$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceCollection" /></td>
    <td><code>object</code></td>
    <td>A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.</td>
</tr>
<tr>
    <td><CopyableCode code="Resources" /></td>
    <td><code>array</code></td>
    <td>An EventResource object that contains information about the resource that emitted the event.</td>
</tr>
<tr>
    <td><CopyableCode code="Time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A Timestamp that specifies the time the event occurred.</td>
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
    <td><a href="#list_events"><CopyableCode code="list_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned.</td>
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
    defaultValue="list_events"
    values={[
        { label: 'list_events', value: 'list_events' }
    ]}
>
<TabItem value="list_events">

Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned.

```sql
SELECT
DataSource,
EventClass,
EventSource,
Id,
Name,
ResourceCollection,
Resources,
Time
FROM aws.devops_guru.events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
