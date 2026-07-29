--- 
title: automation_rule_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - automation_rule_v2s
  - securityhub
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

Creates, updates, deletes, gets or lists an <code>automation_rule_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automation_rule_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.automation_rule_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automation_rule_v2"
    values={[
        { label: 'get_automation_rule_v2', value: 'get_automation_rule_v2' }
    ]}
>
<TabItem value="get_automation_rule_v2">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>A list of actions performed when the rule criteria is met.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the V2 automation rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="criteria" /></td>
    <td><code>object</code></td>
    <td>The filtering type and configuration of the V2 automation rule.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the automation rule. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the V2 automation rule. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the V2 automation rule. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>The name of the V2 automation rule. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_order" /></td>
    <td><code>number (float)</code></td>
    <td>The value for the rule priority.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_status" /></td>
    <td><code>string</code></td>
    <td>The status of the V2 automation automation rule. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the V2 automation rule was updated.</td>
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
    <td><a href="#get_automation_rule_v2"><CopyableCode code="get_automation_rule_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an automation rule for the V2 service.</td>
</tr>
<tr>
    <td><a href="#create_automation_rule_v2"><CopyableCode code="create_automation_rule_v2" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleName"><code>RuleName</code></a>, <a href="#parameter-RuleOrder"><code>RuleOrder</code></a></td>
    <td></td>
    <td>Creates a V2 automation rule.</td>
</tr>
<tr>
    <td><a href="#update_automation_rule_v2"><CopyableCode code="update_automation_rule_v2" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a V2 automation rule.</td>
</tr>
<tr>
    <td><a href="#delete_automation_rule_v2"><CopyableCode code="delete_automation_rule_v2" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a V2 automation rule.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of the V2 automation rule.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_automation_rule_v2"
    values={[
        { label: 'get_automation_rule_v2', value: 'get_automation_rule_v2' }
    ]}
>
<TabItem value="get_automation_rule_v2">

Returns an automation rule for the V2 service.

```sql
SELECT
actions,
created_at,
criteria,
description,
rule_arn,
rule_id,
rule_name,
rule_order,
rule_status,
updated_at
FROM aws.securityhub.automation_rule_v2s
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_automation_rule_v2"
    values={[
        { label: 'create_automation_rule_v2', value: 'create_automation_rule_v2' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_automation_rule_v2">

Creates a V2 automation rule.

```sql
INSERT INTO aws.securityhub.automation_rule_v2s (
RuleName,
RuleStatus,
Description,
RuleOrder,
Criteria,
Actions,
Tags,
ClientToken,
region
)
SELECT 
'{{ RuleName }}' /* required */,
'{{ RuleStatus }}',
'{{ Description }}',
{{ RuleOrder }} /* required */,
'{{ Criteria }}',
'{{ Actions }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
rule_arn,
rule_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: automation_rule_v2s
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the automation_rule_v2s resource.
    - name: RuleName
      value: "{{ RuleName }}"
    - name: RuleStatus
      value: "{{ RuleStatus }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: Description
      value: "{{ Description }}"
    - name: RuleOrder
      value: {{ RuleOrder }}
    - name: Criteria
      description: |
        Defines the parameters and conditions used to evaluate and filter security findings.
      value:
        OcsfFindingCriteria:
          CompositeFilters:
            - StringFilters: "{{ StringFilters }}"
              DateFilters: "{{ DateFilters }}"
              BooleanFilters: "{{ BooleanFilters }}"
              NumberFilters: "{{ NumberFilters }}"
              MapFilters: "{{ MapFilters }}"
              IpFilters: "{{ IpFilters }}"
              NestedCompositeFilters: "{{ NestedCompositeFilters }}"
              Operator: "{{ Operator }}"
          CompositeOperator: "{{ CompositeOperator }}"
    - name: Actions
      value:
        - Type: "{{ Type }}"
          FindingFieldsUpdate:
            SeverityId: {{ SeverityId }}
            Comment: "{{ Comment }}"
            StatusId: {{ StatusId }}
          ExternalIntegrationConfiguration:
            ConnectorArn: "{{ ConnectorArn }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_automation_rule_v2"
    values={[
        { label: 'update_automation_rule_v2', value: 'update_automation_rule_v2' }
    ]}
>
<TabItem value="update_automation_rule_v2">

Updates a V2 automation rule.

```sql
UPDATE aws.securityhub.automation_rule_v2s
SET 
RuleStatus = '{{ RuleStatus }}',
RuleOrder = {{ RuleOrder }},
Description = '{{ Description }}',
RuleName = '{{ RuleName }}',
Criteria = '{{ Criteria }}',
Actions = '{{ Actions }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_automation_rule_v2"
    values={[
        { label: 'delete_automation_rule_v2', value: 'delete_automation_rule_v2' }
    ]}
>
<TabItem value="delete_automation_rule_v2">

Deletes a V2 automation rule.

```sql
DELETE FROM aws.securityhub.automation_rule_v2s
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
