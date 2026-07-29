--- 
title: account_activities
hide_title: false
hide_table_of_contents: false
keywords:
  - account_activities
  - freetier
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

Creates, updates, deletes, gets or lists an <code>account_activities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_activities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.freetier.account_activities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_activity"
    values={[
        { label: 'get_account_activity', value: 'get_account_activity' },
        { label: 'list_account_activities', value: 'list_account_activities' }
    ]}
>
<TabItem value="get_account_activity">

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
    <td><CopyableCode code="activity_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that identifies the activity. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the activity is completed. This field appears only for activities in the COMPLETED state.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Provides detailed information about the activity and its expected outcomes. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_time_to_complete_in_minutes" /></td>
    <td><code>integer</code></td>
    <td>The estimated time to complete the activity. This is the duration in minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time by which the activity must be completed to receive a reward.</td>
</tr>
<tr>
    <td><CopyableCode code="instructions_url" /></td>
    <td><code>string</code></td>
    <td>The URL resource that provides guidance on activity requirements and completion. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="reward" /></td>
    <td><code>object</code></td>
    <td>A reward granted upon activity completion.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the activity started. This field appears only for activities in the IN_PROGRESS or COMPLETED states.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current activity status. (NOT_STARTED, IN_PROGRESS, COMPLETED, EXPIRING)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>A short activity title. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_account_activities">

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
    <td><CopyableCode code="activity_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that identifies the activity. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="reward" /></td>
    <td><code>object</code></td>
    <td>The reward for the activity.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the activity. (NOT_STARTED, IN_PROGRESS, COMPLETED, EXPIRING)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the activity. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_account_activity"><CopyableCode code="get_account_activity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a specific activity record that is available to the customer.</td>
</tr>
<tr>
    <td><a href="#list_account_activities"><CopyableCode code="list_account_activities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of activities that are available. This operation supports pagination and filtering by status.</td>
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
    defaultValue="get_account_activity"
    values={[
        { label: 'get_account_activity', value: 'get_account_activity' },
        { label: 'list_account_activities', value: 'list_account_activities' }
    ]}
>
<TabItem value="get_account_activity">

Returns a specific activity record that is available to the customer.

```sql
SELECT
activity_id,
completed_at,
description,
estimated_time_to_complete_in_minutes,
expires_at,
instructions_url,
reward,
started_at,
status,
title_
FROM aws.freetier.account_activities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_account_activities">

Returns a list of activities that are available. This operation supports pagination and filtering by status.

```sql
SELECT
activity_id,
reward,
status,
title_
FROM aws.freetier.account_activities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
