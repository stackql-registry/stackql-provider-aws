--- 
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
  - rbin
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

Creates, updates, deletes, gets or lists a <code>rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rbin.rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rule"
    values={[
        { label: 'get_rule', value: 'get_rule' },
        { label: 'list_rules', value: 'list_rules' }
    ]}
>
<TabItem value="get_rule">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The retention rule description. (pattern: &lt;code&gt;^&#91;\S &#93;&#123;0,255&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExcludeResourceTags" /></td>
    <td><code>array</code></td>
    <td>&#91;Region-level retention rules only&#93; Information about the exclusion tags used to identify resources that are to be excluded, or ignored, by the retention rule.</td>
</tr>
<tr>
    <td><CopyableCode code="Identifier" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the retention rule. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;11&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LockConfiguration" /></td>
    <td><code>object</code></td>
    <td>Information about a retention rule lock configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LockEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the unlock delay is set to expire. Only returned for retention rules that have been unlocked and that are still within the unlock delay period.</td>
</tr>
<tr>
    <td><CopyableCode code="LockState" /></td>
    <td><code>string</code></td>
    <td>&#91;Region-level retention rules only&#93; The lock state for the retention rule. locked - The retention rule is locked and can't be modified or deleted. pending_unlock - The retention rule has been unlocked but it is still within the unlock delay period. The retention rule can be modified or deleted only after the unlock delay period has expired. unlocked - The retention rule is unlocked and it can be modified or deleted by any user with the required permissions. null - The retention rule has never been locked. Once a retention rule has been locked, it can transition between the locked and unlocked states only; it can never transition back to null. (locked, pending_unlock, unlocked)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceTags" /></td>
    <td><code>array</code></td>
    <td>&#91;Tag-level retention rules only&#93; Information about the resource tags used to identify resources that are retained by the retention rule.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type retained by the retention rule. (EBS_SNAPSHOT, EC2_IMAGE, EBS_VOLUME)</td>
</tr>
<tr>
    <td><CopyableCode code="RetentionPeriod" /></td>
    <td><code>object</code></td>
    <td>Information about the retention period for which the retention rule is to retain resources.</td>
</tr>
<tr>
    <td><CopyableCode code="RuleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the retention rule. (pattern: &lt;code&gt;^arn:\S+:rbin:&#91;a-z\-0-9&#93;&#123;0,63&#125;:&#91;0-9&#93;&#123;12&#125;:rule/&#91;0-9a-zA-Z&#93;&#123;11&#125;&#123;0,1011&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The state of the retention rule. Only retention rules that are in the available state retain resources. (pending, available)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rules">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The retention rule description. (pattern: &lt;code&gt;^&#91;\S &#93;&#123;0,255&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Identifier" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the retention rule. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;11&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LockState" /></td>
    <td><code>string</code></td>
    <td>&#91;Region-level retention rules only&#93; The lock state for the retention rule. locked - The retention rule is locked and can't be modified or deleted. pending_unlock - The retention rule has been unlocked but it is still within the unlock delay period. The retention rule can be modified or deleted only after the unlock delay period has expired. unlocked - The retention rule is unlocked and it can be modified or deleted by any user with the required permissions. null - The retention rule has never been locked. Once a retention rule has been locked, it can transition between the locked and unlocked states only; it can never transition back to null. (locked, pending_unlock, unlocked)</td>
</tr>
<tr>
    <td><CopyableCode code="RetentionPeriod" /></td>
    <td><code>object</code></td>
    <td>Information about the retention period for which the retention rule is to retain resources.</td>
</tr>
<tr>
    <td><CopyableCode code="RuleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the retention rule. (pattern: &lt;code&gt;^arn:\S+:rbin:&#91;a-z\-0-9&#93;&#123;0,63&#125;:&#91;0-9&#93;&#123;12&#125;:rule/&#91;0-9a-zA-Z&#93;&#123;11&#125;&#123;0,1011&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_rule"><CopyableCode code="get_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a Recycle Bin retention rule.</td>
</tr>
<tr>
    <td><a href="#list_rules"><CopyableCode code="list_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Recycle Bin retention rules in the Region.</td>
</tr>
<tr>
    <td><a href="#create_rule"><CopyableCode code="create_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RetentionPeriod"><code>RetentionPeriod</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a></td>
    <td></td>
    <td>Creates a Recycle Bin retention rule. You can create two types of retention rules: Tag-level retention rules - These retention rules use resource tags to identify the resources to protect. For each retention rule, you specify one or more tag key and value pairs. Resources (of the specified type) that have at least one of these tag key and value pairs are automatically retained in the Recycle Bin upon deletion. Use this type of retention rule to protect specific resources in your account based on their tags. Region-level retention rules - These retention rules, by default, apply to all of the resources (of the specified type) in the Region, even if the resources are not tagged. However, you can specify exclusion tags to exclude resources that have specific tags. Use this type of retention rule to protect all resources of a specific type in a Region. For more information, see Create Recycle Bin retention rules in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#update_rule"><CopyableCode code="update_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see Update Recycle Bin retention rules in the Amazon Elastic Compute Cloud User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_rule"><CopyableCode code="delete_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Recycle Bin retention rule. For more information, see Delete Recycle Bin retention rules in the Amazon Elastic Compute Cloud User Guide.</td>
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
    <td>The unique ID of the retention rule.</td>
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
    defaultValue="get_rule"
    values={[
        { label: 'get_rule', value: 'get_rule' },
        { label: 'list_rules', value: 'list_rules' }
    ]}
>
<TabItem value="get_rule">

Gets information about a Recycle Bin retention rule.

```sql
SELECT
Description,
ExcludeResourceTags,
Identifier,
LockConfiguration,
LockEndTime,
LockState,
ResourceTags,
ResourceType,
RetentionPeriod,
RuleArn,
Status
FROM aws.rbin.rules
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_rules">

Lists the Recycle Bin retention rules in the Region.

```sql
SELECT
Description,
Identifier,
LockState,
RetentionPeriod,
RuleArn
FROM aws.rbin.rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rule"
    values={[
        { label: 'create_rule', value: 'create_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rule">

Creates a Recycle Bin retention rule. You can create two types of retention rules: Tag-level retention rules - These retention rules use resource tags to identify the resources to protect. For each retention rule, you specify one or more tag key and value pairs. Resources (of the specified type) that have at least one of these tag key and value pairs are automatically retained in the Recycle Bin upon deletion. Use this type of retention rule to protect specific resources in your account based on their tags. Region-level retention rules - These retention rules, by default, apply to all of the resources (of the specified type) in the Region, even if the resources are not tagged. However, you can specify exclusion tags to exclude resources that have specific tags. Use this type of retention rule to protect all resources of a specific type in a Region. For more information, see Create Recycle Bin retention rules in the Amazon EBS User Guide.

```sql
INSERT INTO aws.rbin.rules (
RetentionPeriod,
Description,
Tags,
ResourceType,
ResourceTags,
LockConfiguration,
ExcludeResourceTags,
region
)
SELECT 
'{{ RetentionPeriod }}' /* required */,
'{{ Description }}',
'{{ Tags }}',
'{{ ResourceType }}' /* required */,
'{{ ResourceTags }}',
'{{ LockConfiguration }}',
'{{ ExcludeResourceTags }}',
'{{ region }}'
RETURNING
Description,
ExcludeResourceTags,
Identifier,
LockConfiguration,
LockState,
ResourceTags,
ResourceType,
RetentionPeriod,
RuleArn,
Status,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rules resource.
    - name: RetentionPeriod
      description: |
        Information about the retention period for which the retention rule is to retain resources.
      value:
        RetentionPeriodValue: {{ RetentionPeriodValue }}
        RetentionPeriodUnit: "{{ RetentionPeriodUnit }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ResourceType
      value: "{{ ResourceType }}"
      valid_values: ['EBS_SNAPSHOT', 'EC2_IMAGE', 'EBS_VOLUME']
    - name: ResourceTags
      value:
        - ResourceTagKey: "{{ ResourceTagKey }}"
          ResourceTagValue: "{{ ResourceTagValue }}"
    - name: LockConfiguration
      description: |
        Information about a retention rule lock configuration.
      value:
        UnlockDelay:
          UnlockDelayValue: {{ UnlockDelayValue }}
          UnlockDelayUnit: "{{ UnlockDelayUnit }}"
    - name: ExcludeResourceTags
      value:
        - ResourceTagKey: "{{ ResourceTagKey }}"
          ResourceTagValue: "{{ ResourceTagValue }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rule"
    values={[
        { label: 'update_rule', value: 'update_rule' }
    ]}
>
<TabItem value="update_rule">

Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see Update Recycle Bin retention rules in the Amazon Elastic Compute Cloud User Guide.

```sql
UPDATE aws.rbin.rules
SET 
RetentionPeriod = '{{ RetentionPeriod }}',
Description = '{{ Description }}',
ResourceType = '{{ ResourceType }}',
ResourceTags = '{{ ResourceTags }}',
ExcludeResourceTags = '{{ ExcludeResourceTags }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
Description,
ExcludeResourceTags,
Identifier,
LockEndTime,
LockState,
ResourceTags,
ResourceType,
RetentionPeriod,
RuleArn,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rule"
    values={[
        { label: 'delete_rule', value: 'delete_rule' }
    ]}
>
<TabItem value="delete_rule">

Deletes a Recycle Bin retention rule. For more information, see Delete Recycle Bin retention rules in the Amazon Elastic Compute Cloud User Guide.

```sql
DELETE FROM aws.rbin.rules
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
