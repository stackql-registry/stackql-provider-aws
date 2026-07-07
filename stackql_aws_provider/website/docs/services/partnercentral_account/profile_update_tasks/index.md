--- 
title: profile_update_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_update_tasks
  - partnercentral_account
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

Creates, updates, deletes, gets or lists a <code>profile_update_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profile_update_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_account.profile_update_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_profile_update_task"
    values={[
        { label: 'get_profile_update_task', value: 'get_profile_update_task' }
    ]}
>
<TabItem value="get_profile_update_task">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the profile update task. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;+:partnercentral:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:catalog/&#91;A-Za-z-_&#93;+/partner/partner-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier for the partner account. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the profile update task was completed or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorDetailList" /></td>
    <td><code>array</code></td>
    <td>A list of error details if any errors occurred during the profile update task.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the partner account. (pattern: &lt;code&gt;partner-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the profile update task was started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the profile update task (in progress, completed, failed, etc.). (IN_PROGRESS, CANCELED, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskDetails" /></td>
    <td><code>object</code></td>
    <td>The details of the profile update task including what changes are being made.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the profile update task. (pattern: &lt;code&gt;pprofiletask-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_profile_update_task"><CopyableCode code="get_profile_update_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific profile update task.</td>
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
    defaultValue="get_profile_update_task"
    values={[
        { label: 'get_profile_update_task', value: 'get_profile_update_task' }
    ]}
>
<TabItem value="get_profile_update_task">

Retrieves information about a specific profile update task.

```sql
SELECT
Arn,
Catalog,
EndedAt,
ErrorDetailList,
Id,
StartedAt,
Status,
TaskDetails,
TaskId
FROM aws.partnercentral_account.profile_update_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
