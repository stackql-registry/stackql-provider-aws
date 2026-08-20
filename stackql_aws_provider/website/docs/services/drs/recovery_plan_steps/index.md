--- 
title: recovery_plan_steps
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_plan_steps
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

Creates, updates, deletes, gets or lists a <code>recovery_plan_steps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_plan_steps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.recovery_plan_steps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recovery_plan_step"
    values={[
        { label: 'get_recovery_plan_step', value: 'get_recovery_plan_step' },
        { label: 'list_recovery_plan_steps', value: 'list_recovery_plan_steps' }
    ]}
>
<TabItem value="get_recovery_plan_step">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Type-specific configuration for a recovery plan step. Exactly one member must be set.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the step was created. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_plan_step_arn" /></td>
    <td><code>string</code></td>
    <td>Strict ARN type for Recovery Plan resources. Only allows safe characters in the resource portion — rejects HTML/script injection characters (&lt;, &gt;, ", ', etc.) per AWS API input validation standards. Resource portion allows: &#91;A-Za-z0-9_/.-&#93; which covers all DRS recovery plan resource identifiers (plan-xxx, st-xxx, exec-xxx, step-xxx). (pattern: &lt;code&gt;arn:aws(-&#91;a-z0-9&#93;+)*:drs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9_/.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="step_name" /></td>
    <td><code>string</code></td>
    <td>The name of a Recovery Plan Step. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9 _-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="step_order" /></td>
    <td><code>integer</code></td>
    <td>The order of a step within a Recovery Plan (1-based).</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the step was last updated. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recovery_plan_steps">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Type-specific configuration for a recovery plan step. Exactly one member must be set.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the step was created. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_plan_step_arn" /></td>
    <td><code>string</code></td>
    <td>Strict ARN type for Recovery Plan resources. Only allows safe characters in the resource portion — rejects HTML/script injection characters (&lt;, &gt;, ", ', etc.) per AWS API input validation standards. Resource portion allows: &#91;A-Za-z0-9_/.-&#93; which covers all DRS recovery plan resource identifiers (plan-xxx, st-xxx, exec-xxx, step-xxx). (pattern: &lt;code&gt;arn:aws(-&#91;a-z0-9&#93;+)*:drs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9_/.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="step_name" /></td>
    <td><code>string</code></td>
    <td>The name of a Recovery Plan Step. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9 _-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="step_order" /></td>
    <td><code>integer</code></td>
    <td>The order of a step within a Recovery Plan (1-based).</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the step was last updated. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
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
    <td><a href="#get_recovery_plan_step"><CopyableCode code="get_recovery_plan_step" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a Recovery Plan step by ARN.</td>
</tr>
<tr>
    <td><a href="#list_recovery_plan_steps"><CopyableCode code="list_recovery_plan_steps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all steps in a Recovery Plan.</td>
</tr>
<tr>
    <td><a href="#create_recovery_plan_step"><CopyableCode code="create_recovery_plan_step" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recoveryPlanArn"><code>recoveryPlanArn</code></a>, <a href="#parameter-stepName"><code>stepName</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Creates a step in a Recovery Plan. A step is either SERVER type (servers to recover in parallel) or WAIT type (timed pause between steps).</td>
</tr>
<tr>
    <td><a href="#update_recovery_plan_step"><CopyableCode code="update_recovery_plan_step" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recoveryPlanStepArn"><code>recoveryPlanStepArn</code></a></td>
    <td></td>
    <td>Updates a Recovery Plan step's name or configuration. Step type is immutable.</td>
</tr>
<tr>
    <td><a href="#delete_recovery_plan_step"><CopyableCode code="delete_recovery_plan_step" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a step from a Recovery Plan.</td>
</tr>
<tr>
    <td><a href="#reorder_recovery_plan_steps"><CopyableCode code="reorder_recovery_plan_steps" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recoveryPlanArn"><code>recoveryPlanArn</code></a>, <a href="#parameter-orderedStepArns"><code>orderedStepArns</code></a></td>
    <td></td>
    <td>Reorders steps in a Recovery Plan. Accepts a complete ordered list of step ARNs.</td>
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
    defaultValue="get_recovery_plan_step"
    values={[
        { label: 'get_recovery_plan_step', value: 'get_recovery_plan_step' },
        { label: 'list_recovery_plan_steps', value: 'list_recovery_plan_steps' }
    ]}
>
<TabItem value="get_recovery_plan_step">

Gets a Recovery Plan step by ARN.

```sql
SELECT
configuration,
created_at,
recovery_plan_step_arn,
step_name,
step_order,
updated_at
FROM aws.drs.recovery_plan_steps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_recovery_plan_steps">

Lists all steps in a Recovery Plan.

```sql
SELECT
configuration,
created_at,
recovery_plan_step_arn,
step_name,
step_order,
updated_at
FROM aws.drs.recovery_plan_steps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_recovery_plan_step"
    values={[
        { label: 'create_recovery_plan_step', value: 'create_recovery_plan_step' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_recovery_plan_step">

Creates a step in a Recovery Plan. A step is either SERVER type (servers to recover in parallel) or WAIT type (timed pause between steps).

```sql
INSERT INTO aws.drs.recovery_plan_steps (
recoveryPlanArn,
stepName,
stepOrder,
configuration,
clientToken,
region
)
SELECT 
'{{ recoveryPlanArn }}' /* required */,
'{{ stepName }}' /* required */,
{{ stepOrder }},
'{{ configuration }}' /* required */,
'{{ clientToken }}',
'{{ region }}'
RETURNING
recovery_plan_step
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: recovery_plan_steps
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the recovery_plan_steps resource.
    - name: recoveryPlanArn
      value: "{{ recoveryPlanArn }}"
      description: |
        Strict ARN type for Recovery Plan resources. Only allows safe characters in the resource portion — rejects HTML/script injection characters (<, >, ", ', etc.) per AWS API input validation standards. Resource portion allows: [A-Za-z0-9_/.-] which covers all DRS recovery plan resource identifiers (plan-xxx, st-xxx, exec-xxx, step-xxx).
    - name: stepName
      value: "{{ stepName }}"
      description: |
        The name of a Recovery Plan Step.
    - name: stepOrder
      value: {{ stepOrder }}
      description: |
        The order of a step within a Recovery Plan (1-based).
    - name: configuration
      description: |
        Type-specific configuration for a recovery plan step. Exactly one member must be set.
      value:
        serverStepConfiguration:
          servers:
            - serverArn: "{{ serverArn }}"
              impactLevel: "{{ impactLevel }}"
        waitStepConfiguration:
          waitDurationMinutes: {{ waitDurationMinutes }}
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_recovery_plan_step"
    values={[
        { label: 'update_recovery_plan_step', value: 'update_recovery_plan_step' }
    ]}
>
<TabItem value="update_recovery_plan_step">

Updates a Recovery Plan step's name or configuration. Step type is immutable.

```sql
UPDATE aws.drs.recovery_plan_steps
SET 
recoveryPlanStepArn = '{{ recoveryPlanStepArn }}',
stepName = '{{ stepName }}',
configuration = '{{ configuration }}'
WHERE 
region = '{{ region }}' --required
AND recoveryPlanStepArn = '{{ recoveryPlanStepArn }}' --required
RETURNING
recovery_plan_step;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recovery_plan_step"
    values={[
        { label: 'delete_recovery_plan_step', value: 'delete_recovery_plan_step' }
    ]}
>
<TabItem value="delete_recovery_plan_step">

Deletes a step from a Recovery Plan.

```sql
DELETE FROM aws.drs.recovery_plan_steps
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reorder_recovery_plan_steps"
    values={[
        { label: 'reorder_recovery_plan_steps', value: 'reorder_recovery_plan_steps' }
    ]}
>
<TabItem value="reorder_recovery_plan_steps">

Reorders steps in a Recovery Plan. Accepts a complete ordered list of step ARNs.

```sql
EXEC aws.drs.recovery_plan_steps.reorder_recovery_plan_steps 
@region='{{ region }}' --required 
@@json=
'{
"recoveryPlanArn": "{{ recoveryPlanArn }}", 
"orderedStepArns": "{{ orderedStepArns }}"
}'
;
```
</TabItem>
</Tabs>
