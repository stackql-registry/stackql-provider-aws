--- 
title: recovery_plan_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_plan_executions
  - drs
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

Creates, updates, deletes, gets or lists a <code>recovery_plan_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_plan_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.recovery_plan_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recovery_plan_execution"
    values={[
        { label: 'get_recovery_plan_execution', value: 'get_recovery_plan_execution' },
        { label: 'list_recovery_plan_executions', value: 'list_recovery_plan_executions' }
    ]}
>
<TabItem value="get_recovery_plan_execution">

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
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the execution completed. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_detail" /></td>
    <td><code>object</code></td>
    <td>Error details if the execution failed.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The execution mode. (DRILL, RECOVERY)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_plan_arn" /></td>
    <td><code>string</code></td>
    <td>Strict ARN type for Recovery Plan resources. Only allows safe characters in the resource portion — rejects HTML/script injection characters (&lt;, &gt;, ", ', etc.) per AWS API input validation standards. Resource portion allows: &#91;A-Za-z0-9_/.-&#93; which covers all DRS recovery plan resource identifiers (plan-xxx, st-xxx, exec-xxx, step-xxx). (pattern: &lt;code&gt;arn:aws(-&#91;a-z0-9&#93;+)*:drs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9_/.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_plan_execution_arn" /></td>
    <td><code>string</code></td>
    <td>Strict ARN type for Recovery Plan resources. Only allows safe characters in the resource portion — rejects HTML/script injection characters (&lt;, &gt;, ", ', etc.) per AWS API input validation standards. Resource portion allows: &#91;A-Za-z0-9_/.-&#93; which covers all DRS recovery plan resource identifiers (plan-xxx, st-xxx, exec-xxx, step-xxx). (pattern: &lt;code&gt;arn:aws(-&#91;a-z0-9&#93;+)*:drs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9_/.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the execution started. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The execution status. (CREATED, IN_PROGRESS, COMPLETED, FAILED, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the Recovery Plan execution.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recovery_plan_executions">

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
    <td><CopyableCode code="error_detail" /></td>
    <td><code>object</code></td>
    <td>Error details if the execution failed.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The execution mode. (DRILL, RECOVERY)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_plan_arn" /></td>
    <td><code>string</code></td>
    <td>Strict ARN type for Recovery Plan resources. Only allows safe characters in the resource portion — rejects HTML/script injection characters (&lt;, &gt;, ", ', etc.) per AWS API input validation standards. Resource portion allows: &#91;A-Za-z0-9_/.-&#93; which covers all DRS recovery plan resource identifiers (plan-xxx, st-xxx, exec-xxx, step-xxx). (pattern: &lt;code&gt;arn:aws(-&#91;a-z0-9&#93;+)*:drs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9_/.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_plan_execution_arn" /></td>
    <td><code>string</code></td>
    <td>Strict ARN type for Recovery Plan resources. Only allows safe characters in the resource portion — rejects HTML/script injection characters (&lt;, &gt;, ", ', etc.) per AWS API input validation standards. Resource portion allows: &#91;A-Za-z0-9_/.-&#93; which covers all DRS recovery plan resource identifiers (plan-xxx, st-xxx, exec-xxx, step-xxx). (pattern: &lt;code&gt;arn:aws(-&#91;a-z0-9&#93;+)*:drs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9_/.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the execution started. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a Recovery Plan execution. (CREATED, IN_PROGRESS, COMPLETED, FAILED, CANCELLING, CANCELLED)</td>
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
    <td><a href="#get_recovery_plan_execution"><CopyableCode code="get_recovery_plan_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a Recovery Plan execution.</td>
</tr>
<tr>
    <td><a href="#list_recovery_plan_executions"><CopyableCode code="list_recovery_plan_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists executions of Recovery Plans, optionally filtered by plan or status.</td>
</tr>
<tr>
    <td><a href="#delete_recovery_plan_execution"><CopyableCode code="delete_recovery_plan_execution" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Recovery Plan execution record. Must be in a terminal status.</td>
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
    defaultValue="get_recovery_plan_execution"
    values={[
        { label: 'get_recovery_plan_execution', value: 'get_recovery_plan_execution' },
        { label: 'list_recovery_plan_executions', value: 'list_recovery_plan_executions' }
    ]}
>
<TabItem value="get_recovery_plan_execution">

Gets the details of a Recovery Plan execution.

```sql
SELECT
completed_at,
error_detail,
mode,
recovery_plan_arn,
recovery_plan_execution_arn,
started_at,
status,
tags
FROM aws.drs.recovery_plan_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_recovery_plan_executions">

Lists executions of Recovery Plans, optionally filtered by plan or status.

```sql
SELECT
error_detail,
mode,
recovery_plan_arn,
recovery_plan_execution_arn,
started_at,
status
FROM aws.drs.recovery_plan_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recovery_plan_execution"
    values={[
        { label: 'delete_recovery_plan_execution', value: 'delete_recovery_plan_execution' }
    ]}
>
<TabItem value="delete_recovery_plan_execution">

Deletes a Recovery Plan execution record. Must be in a terminal status.

```sql
DELETE FROM aws.drs.recovery_plan_executions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
