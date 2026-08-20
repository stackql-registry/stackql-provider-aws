--- 
title: recovery_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_plans
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

Creates, updates, deletes, gets or lists a <code>recovery_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.recovery_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recovery_plan"
    values={[
        { label: 'get_recovery_plan', value: 'get_recovery_plan' },
        { label: 'list_recovery_plans', value: 'list_recovery_plans' }
    ]}
>
<TabItem value="get_recovery_plan">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a Recovery Plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9 _-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the Recovery Plan was created. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a Recovery Plan.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_plan_arn" /></td>
    <td><code>string</code></td>
    <td>Strict ARN type for Recovery Plan resources. Only allows safe characters in the resource portion — rejects HTML/script injection characters (&lt;, &gt;, ", ', etc.) per AWS API input validation standards. Resource portion allows: &#91;A-Za-z0-9_/.-&#93; which covers all DRS recovery plan resource identifiers (plan-xxx, st-xxx, exec-xxx, step-xxx). (pattern: &lt;code&gt;arn:aws(-&#91;a-z0-9&#93;+)*:drs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9_/.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Recovery Plan. (ACTIVE, INVALID)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the Recovery Plan.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the Recovery Plan was last updated. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recovery_plans">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a Recovery Plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9 _-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the Recovery Plan was created. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_plan_arn" /></td>
    <td><code>string</code></td>
    <td>Strict ARN type for Recovery Plan resources. Only allows safe characters in the resource portion — rejects HTML/script injection characters (&lt;, &gt;, ", ', etc.) per AWS API input validation standards. Resource portion allows: &#91;A-Za-z0-9_/.-&#93; which covers all DRS recovery plan resource identifiers (plan-xxx, st-xxx, exec-xxx, step-xxx). (pattern: &lt;code&gt;arn:aws(-&#91;a-z0-9&#93;+)*:drs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9_/.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Recovery Plan. (ACTIVE, INVALID)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the Recovery Plan was last updated. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
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
    <td><a href="#get_recovery_plan"><CopyableCode code="get_recovery_plan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a Recovery Plan by ARN.</td>
</tr>
<tr>
    <td><a href="#list_recovery_plans"><CopyableCode code="list_recovery_plans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Recovery Plans in the account.</td>
</tr>
<tr>
    <td><a href="#create_recovery_plan"><CopyableCode code="create_recovery_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a Recovery Plan to orchestrate multi-server disaster recovery.</td>
</tr>
<tr>
    <td><a href="#update_recovery_plan"><CopyableCode code="update_recovery_plan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recoveryPlanArn"><code>recoveryPlanArn</code></a></td>
    <td></td>
    <td>Updates a Recovery Plan's name or description.</td>
</tr>
<tr>
    <td><a href="#delete_recovery_plan"><CopyableCode code="delete_recovery_plan" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Recovery Plan. Cannot delete a plan that has an execution in a non-terminal status (CREATED, IN_PROGRESS).</td>
</tr>
<tr>
    <td><a href="#cancel_recovery_plan_execution"><CopyableCode code="cancel_recovery_plan_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recoveryPlanExecutionArn"><code>recoveryPlanExecutionArn</code></a></td>
    <td></td>
    <td>Cancels an in-progress Recovery Plan execution. Remaining steps are skipped.</td>
</tr>
<tr>
    <td><a href="#start_recovery_plan_execution"><CopyableCode code="start_recovery_plan_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recoveryPlanArn"><code>recoveryPlanArn</code></a>, <a href="#parameter-mode"><code>mode</code></a></td>
    <td></td>
    <td>Starts executing a Recovery Plan in DRILL or RECOVERY mode. A plan cannot have more than one execution in a non-terminal status at a time.</td>
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
    defaultValue="get_recovery_plan"
    values={[
        { label: 'get_recovery_plan', value: 'get_recovery_plan' },
        { label: 'list_recovery_plans', value: 'list_recovery_plans' }
    ]}
>
<TabItem value="get_recovery_plan">

Gets a Recovery Plan by ARN.

```sql
SELECT
name,
created_at,
description,
recovery_plan_arn,
status,
tags,
updated_at
FROM aws.drs.recovery_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_recovery_plans">

Lists all Recovery Plans in the account.

```sql
SELECT
name,
created_at,
recovery_plan_arn,
status,
updated_at
FROM aws.drs.recovery_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_recovery_plan"
    values={[
        { label: 'create_recovery_plan', value: 'create_recovery_plan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_recovery_plan">

Creates a Recovery Plan to orchestrate multi-server disaster recovery.

```sql
INSERT INTO aws.drs.recovery_plans (
name,
description,
clientToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
recovery_plan
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: recovery_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the recovery_plans resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of a Recovery Plan.
    - name: description
      value: "{{ description }}"
      description: |
        The description of a Recovery Plan.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_recovery_plan"
    values={[
        { label: 'update_recovery_plan', value: 'update_recovery_plan' }
    ]}
>
<TabItem value="update_recovery_plan">

Updates a Recovery Plan's name or description.

```sql
UPDATE aws.drs.recovery_plans
SET 
recoveryPlanArn = '{{ recoveryPlanArn }}',
name = '{{ name }}',
description = '{{ description }}'
WHERE 
region = '{{ region }}' --required
AND recoveryPlanArn = '{{ recoveryPlanArn }}' --required
RETURNING
recovery_plan;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recovery_plan"
    values={[
        { label: 'delete_recovery_plan', value: 'delete_recovery_plan' }
    ]}
>
<TabItem value="delete_recovery_plan">

Deletes a Recovery Plan. Cannot delete a plan that has an execution in a non-terminal status (CREATED, IN_PROGRESS).

```sql
DELETE FROM aws.drs.recovery_plans
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_recovery_plan_execution"
    values={[
        { label: 'cancel_recovery_plan_execution', value: 'cancel_recovery_plan_execution' },
        { label: 'start_recovery_plan_execution', value: 'start_recovery_plan_execution' }
    ]}
>
<TabItem value="cancel_recovery_plan_execution">

Cancels an in-progress Recovery Plan execution. Remaining steps are skipped.

```sql
EXEC aws.drs.recovery_plans.cancel_recovery_plan_execution 
@region='{{ region }}' --required 
@@json=
'{
"recoveryPlanExecutionArn": "{{ recoveryPlanExecutionArn }}"
}'
;
```
</TabItem>
<TabItem value="start_recovery_plan_execution">

Starts executing a Recovery Plan in DRILL or RECOVERY mode. A plan cannot have more than one execution in a non-terminal status at a time.

```sql
EXEC aws.drs.recovery_plans.start_recovery_plan_execution 
@region='{{ region }}' --required 
@@json=
'{
"recoveryPlanArn": "{{ recoveryPlanArn }}", 
"mode": "{{ mode }}", 
"clientToken": "{{ clientToken }}", 
"sourceServers": "{{ sourceServers }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
</Tabs>
