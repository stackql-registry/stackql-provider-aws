--- 
title: rule_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - rule_sets
  - mailmanager
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

Creates, updates, deletes, gets or lists a <code>rule_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rule_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.rule_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rule_set"
    values={[
        { label: 'get_rule_set', value: 'get_rule_set' },
        { label: 'list_rule_sets', value: 'list_rule_sets' }
    ]}
>
<TabItem value="get_rule_set">

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
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date of when then rule set was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date of when the rule set was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_set_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the rule set resource.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_set_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the rule set resource.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_set_name" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the rule set resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>The rules contained in the rule set.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rule_sets">

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
    <td><CopyableCode code="last_modification_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modification date of the rule set.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_set_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the rule set.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_set_name" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the rule set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_rule_set"><CopyableCode code="get_rule_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetch attributes of a rule set.</td>
</tr>
<tr>
    <td><a href="#list_rule_sets"><CopyableCode code="list_rule_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List rule sets for this account.</td>
</tr>
<tr>
    <td><a href="#create_rule_set"><CopyableCode code="create_rule_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleSetName"><code>RuleSetName</code></a></td>
    <td></td>
    <td>Provision a new rule set.</td>
</tr>
<tr>
    <td><a href="#update_rule_set"><CopyableCode code="update_rule_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleSetId"><code>RuleSetId</code></a></td>
    <td></td>
    <td>Update attributes of an already provisioned rule set.</td>
</tr>
<tr>
    <td><a href="#delete_rule_set"><CopyableCode code="delete_rule_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a rule set.</td>
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
    defaultValue="get_rule_set"
    values={[
        { label: 'get_rule_set', value: 'get_rule_set' },
        { label: 'list_rule_sets', value: 'list_rule_sets' }
    ]}
>
<TabItem value="get_rule_set">

Fetch attributes of a rule set.

```sql
SELECT
created_date,
last_modification_date,
rule_set_arn,
rule_set_id,
rule_set_name,
rules
FROM aws.mailmanager.rule_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_rule_sets">

List rule sets for this account.

```sql
SELECT
last_modification_date,
rule_set_id,
rule_set_name
FROM aws.mailmanager.rule_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rule_set"
    values={[
        { label: 'create_rule_set', value: 'create_rule_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rule_set">

Provision a new rule set.

```sql
INSERT INTO aws.mailmanager.rule_sets (
ClientToken,
RuleSetName,
Rules,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ RuleSetName }}' /* required */,
'{{ Rules }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
rule_set_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rule_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rule_sets resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique token that Amazon SES uses to recognize subsequent retries of the same request.
    - name: RuleSetName
      value: "{{ RuleSetName }}"
      description: |
        A user-friendly name for the rule set.
    - name: Rules
      description: |
        Conditional rules that are evaluated for determining actions on email.
      value:
        - Name: "{{ Name }}"
          Conditions: "{{ Conditions }}"
          Unless: "{{ Unless }}"
          Actions: "{{ Actions }}"
    - name: Tags
      description: |
        The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rule_set"
    values={[
        { label: 'update_rule_set', value: 'update_rule_set' }
    ]}
>
<TabItem value="update_rule_set">

Update attributes of an already provisioned rule set.

```sql
UPDATE aws.mailmanager.rule_sets
SET 
RuleSetId = '{{ RuleSetId }}',
RuleSetName = '{{ RuleSetName }}',
Rules = '{{ Rules }}'
WHERE 
region = '{{ region }}' --required
AND RuleSetId = '{{ RuleSetId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rule_set"
    values={[
        { label: 'delete_rule_set', value: 'delete_rule_set' }
    ]}
>
<TabItem value="delete_rule_set">

Delete a rule set.

```sql
DELETE FROM aws.mailmanager.rule_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
