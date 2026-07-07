--- 
title: event_types
hide_title: false
hide_table_of_contents: false
keywords:
  - event_types
  - health
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

Creates, updates, deletes, gets or lists an <code>event_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.health.event_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_event_types"
    values={[
        { label: 'describe_event_types', value: 'describe_event_types' }
    ]}
>
<TabItem value="describe_event_types">

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
    <td><CopyableCode code="actionability" /></td>
    <td><code>string</code></td>
    <td>The actionability classification of the event. Possible values are ACTION_REQUIRED, ACTION_MAY_BE_REQUIRED and INFORMATIONAL. Events with ACTION_REQUIRED actionability require customer action to resolve or mitigate the event. Events with ACTION_MAY_BE_REQUIRED actionability indicates that the current status is unknown or conditional and inspection is needed to determine if action is required. Events with INFORMATIONAL actionability are provided for awareness and do not require immediate action. (ACTION_REQUIRED, ACTION_MAY_BE_REQUIRED, INFORMATIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>A list of event type category codes. Possible values are issue, accountNotification, or scheduledChange. Currently, the investigation value isn't supported at this time. (issue, accountNotification, scheduledChange, investigation)</td>
</tr>
<tr>
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the event type. The format is AWS_SERVICE_DESCRIPTION ; for example, AWS_EC2_SYSTEM_MAINTENANCE_EVENT. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\_\-&#93;&#123;3,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="personas" /></td>
    <td><code>array</code></td>
    <td>A list of persona classifications that indicate the target audience for the event. Possible values are OPERATIONS, SECURITY, and BILLING. Events can be associated with multiple personas to indicate relevance to different teams or roles within an organization.</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service that is affected by the event. For example, EC2, RDS. (pattern: &lt;code&gt;&#91;^:/&#93;&#123;2,30&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_event_types"><CopyableCode code="describe_event_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the event types that meet the specified filter criteria. You can use this API operation to find information about the Health event, such as the category, Amazon Web Services service, and event code. The metadata for each event appears in the EventType object. If you don't specify a filter criteria, the API operation returns all event types, in no particular order. This API operation uses pagination. Specify the nextToken parameter in the next request to return more results.</td>
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
    defaultValue="describe_event_types"
    values={[
        { label: 'describe_event_types', value: 'describe_event_types' }
    ]}
>
<TabItem value="describe_event_types">

Returns the event types that meet the specified filter criteria. You can use this API operation to find information about the Health event, such as the category, Amazon Web Services service, and event code. The metadata for each event appears in the EventType object. If you don't specify a filter criteria, the API operation returns all event types, in no particular order. This API operation uses pagination. Specify the nextToken parameter in the next request to return more results.

```sql
SELECT
actionability,
category,
code,
personas,
service
FROM aws.health.event_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
