--- 
title: automation_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - automation_rules
  - compute_optimizer_automation
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

Creates, updates, deletes, gets or lists an <code>automation_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automation_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer_automation.automation_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automation_rule"
    values={[
        { label: 'get_automation_rule', value: 'get_automation_rule' },
        { label: 'list_automation_rules', value: 'list_automation_rules' }
    ]}
>
<TabItem value="get_automation_rule">

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
    <td>The name of the automation rule. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The 12-digit Amazon Web Services account ID that owns this automation rule. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the automation rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="criteria" /></td>
    <td><code>object</code></td>
    <td>A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time. You can specify up to 20 conditions per filter criteria and 20 values per condition.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the automation rule.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the automation rule was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for organization-wide automation rules.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>A string representation of a decimal number between 0 and 1 (having up to 30 digits after the decimal point) that determines the priority of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_action_types" /></td>
    <td><code>array</code></td>
    <td>List of recommended action types that this rule can execute.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the automation rule. (pattern: &lt;code&gt;arn:aws:compute-optimizer::&#91;0-9&#93;&#123;12&#125;:automation-rule/&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the automation rule. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_revision" /></td>
    <td><code>integer (int64)</code></td>
    <td>The revision number of the automation rule.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_type" /></td>
    <td><code>string</code></td>
    <td>The type of automation rule. (OrganizationRule, AccountRule)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>Configuration for scheduling when automation rules should execute, including timing and execution windows.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the automation rule (Active or Inactive). (Active, Inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the automation rule.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_automation_rules">

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
    <td>The name of the automation rule. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The 12-digit Amazon Web Services account ID that owns this automation rule. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the automation rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the automation rule.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the automation rule was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for organization-wide automation rules.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>A string representation of a decimal number between 0 and 1 (having up to 30 digits after the decimal point) that determines the priority of the rule. When multiple rules match the same recommended action, Compute Optimizer assigns the action to the rule with the lowest priority value (highest priority), even if that rule is scheduled to run later than other matching rules.</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_action_types" /></td>
    <td><code>array</code></td>
    <td>List of recommended action types that this rule can execute.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the automation rule. (pattern: &lt;code&gt;arn:aws:compute-optimizer::&#91;0-9&#93;&#123;12&#125;:automation-rule/&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the automation rule. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_revision" /></td>
    <td><code>integer (int64)</code></td>
    <td>The revision number of the automation rule.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_type" /></td>
    <td><code>string</code></td>
    <td>The type of automation rule (OrganizationRule or AccountRule). (OrganizationRule, AccountRule)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>Configuration for scheduling when automation rules should execute, including timing and execution windows.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the automation rule (Active or Inactive). (Active, Inactive)</td>
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
    <td><a href="#get_automation_rule"><CopyableCode code="get_automation_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a specific automation rule.</td>
</tr>
<tr>
    <td><a href="#list_automation_rules"><CopyableCode code="list_automation_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the automation rules that match specified filters.</td>
</tr>
<tr>
    <td><a href="#create_automation_rule"><CopyableCode code="create_automation_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-ruleType"><code>ruleType</code></a>, <a href="#parameter-recommendedActionTypes"><code>recommendedActionTypes</code></a>, <a href="#parameter-schedule"><code>schedule</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Creates a new automation rule to apply recommended actions to resources based on specified criteria.</td>
</tr>
<tr>
    <td><a href="#update_automation_rule"><CopyableCode code="update_automation_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ruleArn"><code>ruleArn</code></a>, <a href="#parameter-ruleRevision"><code>ruleRevision</code></a></td>
    <td></td>
    <td>Updates an existing automation rule.</td>
</tr>
<tr>
    <td><a href="#delete_automation_rule"><CopyableCode code="delete_automation_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing automation rule.</td>
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
    defaultValue="get_automation_rule"
    values={[
        { label: 'get_automation_rule', value: 'get_automation_rule' },
        { label: 'list_automation_rules', value: 'list_automation_rules' }
    ]}
>
<TabItem value="get_automation_rule">

Retrieves details about a specific automation rule.

```sql
SELECT
name,
account_id,
created_timestamp,
criteria,
description,
last_updated_timestamp,
organization_configuration,
priority,
recommended_action_types,
rule_arn,
rule_id,
rule_revision,
rule_type,
schedule,
status,
tags
FROM aws.compute_optimizer_automation.automation_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_automation_rules">

Lists the automation rules that match specified filters.

```sql
SELECT
name,
account_id,
created_timestamp,
description,
last_updated_timestamp,
organization_configuration,
priority,
recommended_action_types,
rule_arn,
rule_id,
rule_revision,
rule_type,
schedule,
status
FROM aws.compute_optimizer_automation.automation_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_automation_rule"
    values={[
        { label: 'create_automation_rule', value: 'create_automation_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_automation_rule">

Creates a new automation rule to apply recommended actions to resources based on specified criteria.

```sql
INSERT INTO aws.compute_optimizer_automation.automation_rules (
name,
description,
ruleType,
organizationConfiguration,
priority,
recommendedActionTypes,
criteria,
schedule,
status,
tags,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ ruleType }}' /* required */,
'{{ organizationConfiguration }}',
'{{ priority }}',
'{{ recommendedActionTypes }}' /* required */,
'{{ criteria }}',
'{{ schedule }}' /* required */,
'{{ status }}' /* required */,
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
name,
created_timestamp,
criteria,
description,
organization_configuration,
priority,
recommended_action_types,
rule_arn,
rule_id,
rule_revision,
rule_type,
schedule,
status,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: automation_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the automation_rules resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the automation rule.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the automation rule.
    - name: ruleType
      value: "{{ ruleType }}"
      description: |
        The type of rule. Only the management account or a delegated administrator can set the ruleType to be OrganizationRule.
      valid_values: ['OrganizationRule', 'AccountRule']
    - name: organizationConfiguration
      description: |
        Configuration for organization-level rules. Required for OrganizationRule type.
      value:
        ruleApplyOrder: "{{ ruleApplyOrder }}"
        accountIds:
          - "{{ accountIds }}"
    - name: priority
      value: "{{ priority }}"
      description: |
        A string representation of a decimal number between 0 and 1 (having up to 30 digits after the decimal point) that determines the priority of the rule. When multiple rules match the same recommended action, Compute Optimizer assigns the action to the rule with the lowest priority value (highest priority), even if that rule is scheduled to run later than other matching rules.
    - name: recommendedActionTypes
      value:
        - "{{ recommendedActionTypes }}"
      description: |
        The types of recommended actions this rule will automate.
    - name: criteria
      description: |
        A set of conditions that specify which recommended action qualify for implementation. When a rule is active and a recommended action matches these criteria, Compute Optimizer implements the action at the scheduled run time.
      value:
        region:
          - comparison: "{{ comparison }}"
            values: "{{ values }}"
        resourceArn:
          - comparison: "{{ comparison }}"
            values: "{{ values }}"
        ebsVolumeType:
          - comparison: "{{ comparison }}"
            values: "{{ values }}"
        ebsVolumeSizeInGib:
          - comparison: "{{ comparison }}"
            values: "{{ values }}"
        estimatedMonthlySavings:
          - comparison: "{{ comparison }}"
            values: "{{ values }}"
        resourceTag:
          - comparison: "{{ comparison }}"
            key: "{{ key }}"
            values: "{{ values }}"
        lookBackPeriodInDays:
          - comparison: "{{ comparison }}"
            values: "{{ values }}"
        restartNeeded:
          - comparison: "{{ comparison }}"
            values: "{{ values }}"
    - name: schedule
      description: |
        The schedule for when the rule should run.
      value:
        scheduleExpression: "{{ scheduleExpression }}"
        scheduleExpressionTimezone: "{{ scheduleExpressionTimezone }}"
        executionWindowInMinutes: {{ executionWindowInMinutes }}
    - name: status
      value: "{{ status }}"
      description: |
        The status of the rule
      valid_values: ['Active', 'Inactive']
    - name: tags
      description: |
        The tags to associate with the rule.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique identifier to ensure idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_automation_rule"
    values={[
        { label: 'update_automation_rule', value: 'update_automation_rule' }
    ]}
>
<TabItem value="update_automation_rule">

Updates an existing automation rule.

```sql
UPDATE aws.compute_optimizer_automation.automation_rules
SET 
ruleArn = '{{ ruleArn }}',
ruleRevision = {{ ruleRevision }},
name = '{{ name }}',
description = '{{ description }}',
ruleType = '{{ ruleType }}',
organizationConfiguration = '{{ organizationConfiguration }}',
priority = '{{ priority }}',
recommendedActionTypes = '{{ recommendedActionTypes }}',
criteria = '{{ criteria }}',
schedule = '{{ schedule }}',
status = '{{ status }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND ruleArn = '{{ ruleArn }}' --required
AND ruleRevision = '{{ ruleRevision }}' --required
RETURNING
name,
created_timestamp,
criteria,
description,
last_updated_timestamp,
organization_configuration,
priority,
recommended_action_types,
rule_arn,
rule_revision,
rule_type,
schedule,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_automation_rule"
    values={[
        { label: 'delete_automation_rule', value: 'delete_automation_rule' }
    ]}
>
<TabItem value="delete_automation_rule">

Deletes an existing automation rule.

```sql
DELETE FROM aws.compute_optimizer_automation.automation_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
