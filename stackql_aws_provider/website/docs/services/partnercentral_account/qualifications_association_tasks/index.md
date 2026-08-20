--- 
title: qualifications_association_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - qualifications_association_tasks
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

Creates, updates, deletes, gets or lists a <code>qualifications_association_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="qualifications_association_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_account.qualifications_association_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_qualifications_association_task"
    values={[
        { label: 'get_qualifications_association_task', value: 'get_qualifications_association_task' }
    ]}
>
<TabItem value="get_qualifications_association_task">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies your partner resource. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;+:partnercentral:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:catalog/&#91;A-Za-z-_&#93;+/partner/partner-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier echoed from the request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the qualifications association task ended, in ISO 8601 format. This field is present only when the status is SUCCEEDED.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Your unique partner identifier in the AWS Partner Network. (pattern: &lt;code&gt;partner-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_partner" /></td>
    <td><code>object</code></td>
    <td>Identifies a partner in a qualifications association group. Contains the partner's profile identifier and AWS account identifier. In requests, provide at least one of ProfileId or AccountId. In responses, both fields are populated.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the qualifications association task started, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the qualifications association task. Valid values: IN_PROGRESS, SUCCEEDED. (IN_PROGRESS, SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the qualifications association task, in the format pqatask-&#91;a-z2-7&#93;&#123;13&#125;. (pattern: &lt;code&gt;pqatask-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_qualifications_association_task"><CopyableCode code="get_qualifications_association_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status and details of the most recent qualifications association task for your partner account. Use this operation to poll the progress of an association task initiated by StartQualificationsAssociationTask.</td>
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
    defaultValue="get_qualifications_association_task"
    values={[
        { label: 'get_qualifications_association_task', value: 'get_qualifications_association_task' }
    ]}
>
<TabItem value="get_qualifications_association_task">

Retrieves the status and details of the most recent qualifications association task for your partner account. Use this operation to poll the progress of an association task initiated by StartQualificationsAssociationTask.

```sql
SELECT
arn,
catalog,
ended_at,
id,
primary_partner,
started_at,
status,
task_id
FROM aws.partnercentral_account.qualifications_association_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
