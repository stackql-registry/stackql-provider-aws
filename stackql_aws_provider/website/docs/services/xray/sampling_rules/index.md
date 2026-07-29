--- 
title: sampling_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - sampling_rules
  - xray
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

Creates, updates, deletes, gets or lists a <code>sampling_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sampling_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.sampling_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sampling_rules"
    values={[
        { label: 'get_sampling_rules', value: 'get_sampling_rules' }
    ]}
>
<TabItem value="get_sampling_rules">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the rule was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="sampling_rule" /></td>
    <td><code>object</code></td>
    <td>A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.</td>
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
    <td><a href="#get_sampling_rules"><CopyableCode code="get_sampling_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all sampling rules.</td>
</tr>
<tr>
    <td><a href="#create_sampling_rule"><CopyableCode code="create_sampling_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SamplingRule"><code>SamplingRule</code></a></td>
    <td></td>
    <td>Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with GetSamplingRules, and evaluate each rule in ascending order of priority for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with GetSamplingTargets to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.</td>
</tr>
<tr>
    <td><a href="#update_sampling_rule"><CopyableCode code="update_sampling_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SamplingRuleUpdate"><code>SamplingRuleUpdate</code></a></td>
    <td></td>
    <td>Modifies a sampling rule's configuration.</td>
</tr>
<tr>
    <td><a href="#delete_sampling_rule"><CopyableCode code="delete_sampling_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a sampling rule.</td>
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
    defaultValue="get_sampling_rules"
    values={[
        { label: 'get_sampling_rules', value: 'get_sampling_rules' }
    ]}
>
<TabItem value="get_sampling_rules">

Retrieves all sampling rules.

```sql
SELECT
created_at,
modified_at,
sampling_rule
FROM aws.xray.sampling_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sampling_rule"
    values={[
        { label: 'create_sampling_rule', value: 'create_sampling_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sampling_rule">

Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with GetSamplingRules, and evaluate each rule in ascending order of priority for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with GetSamplingTargets to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.

```sql
INSERT INTO aws.xray.sampling_rules (
SamplingRule,
Tags,
region
)
SELECT 
'{{ SamplingRule }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
sampling_rule_record
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sampling_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sampling_rules resource.
    - name: SamplingRule
      description: |
        A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
      value:
        RuleName: "{{ RuleName }}"
        RuleARN: "{{ RuleARN }}"
        ResourceARN: "{{ ResourceARN }}"
        Priority: {{ Priority }}
        FixedRate: {{ FixedRate }}
        ReservoirSize: {{ ReservoirSize }}
        ServiceName: "{{ ServiceName }}"
        ServiceType: "{{ ServiceType }}"
        Host: "{{ Host }}"
        HTTPMethod: "{{ HTTPMethod }}"
        URLPath: "{{ URLPath }}"
        Version: {{ Version }}
        Attributes: "{{ Attributes }}"
        SamplingRateBoost:
          MaxRate: {{ MaxRate }}
          CooldownWindowMinutes: {{ CooldownWindowMinutes }}
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_sampling_rule"
    values={[
        { label: 'update_sampling_rule', value: 'update_sampling_rule' }
    ]}
>
<TabItem value="update_sampling_rule">

Modifies a sampling rule's configuration.

```sql
UPDATE aws.xray.sampling_rules
SET 
SamplingRuleUpdate = '{{ SamplingRuleUpdate }}'
WHERE 
region = '{{ region }}' --required
AND SamplingRuleUpdate = '{{ SamplingRuleUpdate }}' --required
RETURNING
sampling_rule_record;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sampling_rule"
    values={[
        { label: 'delete_sampling_rule', value: 'delete_sampling_rule' }
    ]}
>
<TabItem value="delete_sampling_rule">

Deletes a sampling rule.

```sql
DELETE FROM aws.xray.sampling_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
