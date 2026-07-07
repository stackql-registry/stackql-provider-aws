--- 
title: association_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - association_executions
  - ssm
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

Creates, updates, deletes, gets or lists an <code>association_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="association_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.association_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_association_executions"
    values={[
        { label: 'describe_association_executions', value: 'describe_association_executions' }
    ]}
>
<TabItem value="describe_association_executions">

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
    <td><CopyableCode code="AlarmConfiguration" /></td>
    <td><code>object</code></td>
    <td>The details for the CloudWatch alarm you want to apply to an automation or command.</td>
</tr>
<tr>
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>string</code></td>
    <td>The association ID. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AssociationVersion" /></td>
    <td><code>string</code></td>
    <td>The association version. (pattern: &lt;code&gt;(&#91;$&#93;LATEST)|(&#91;1-9&#93;&#91;0-9&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="DetailedStatus" /></td>
    <td><code>string</code></td>
    <td>Detailed status information about the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionId" /></td>
    <td><code>string</code></td>
    <td>The execution ID for the association. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastExecutionDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date of the last execution.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceCountByStatus" /></td>
    <td><code>string</code></td>
    <td>An aggregate status of the resources in the execution based on the status type.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the association execution.</td>
</tr>
<tr>
    <td><CopyableCode code="TriggeredAlarms" /></td>
    <td><code>array</code></td>
    <td>The CloudWatch alarms that were invoked by the association.</td>
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
    <td><a href="#describe_association_executions"><CopyableCode code="describe_association_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Views all executions for a specific association ID.</td>
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
    defaultValue="describe_association_executions"
    values={[
        { label: 'describe_association_executions', value: 'describe_association_executions' }
    ]}
>
<TabItem value="describe_association_executions">

Views all executions for a specific association ID.

```sql
SELECT
AlarmConfiguration,
AssociationId,
AssociationVersion,
CreatedTime,
DetailedStatus,
ExecutionId,
LastExecutionDate,
ResourceCountByStatus,
Status,
TriggeredAlarms
FROM aws.ssm.association_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
