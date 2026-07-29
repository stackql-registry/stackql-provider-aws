--- 
title: receipt_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - receipt_rules
  - ses
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

Creates, updates, deletes, gets or lists a <code>receipt_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="receipt_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.receipt_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_receipt_rule"
    values={[
        { label: 'describe_receipt_rule', value: 'describe_receipt_rule' }
    ]}
>
<TabItem value="describe_receipt_rule">

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
    <td><code>string</code></td>
    <td>An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, the receipt rule is active. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the receipt rule. The name must meet the following requirements: Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), dashes (-), or periods (.). Start and end with a letter or number. Contain 64 characters or fewer.</td>
</tr>
<tr>
    <td><CopyableCode code="recipients" /></td>
    <td><code>string</code></td>
    <td>The recipient domains and email addresses that the receipt rule applies to. If this field is not specified, this rule matches all recipients on all verified domains.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_enabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, then messages that this receipt rule applies to are scanned for spam and viruses. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="tls_policy" /></td>
    <td><code>string</code></td>
    <td>Specifies whether Amazon SES should require that incoming email is delivered over a connection encrypted with Transport Layer Security (TLS). If this parameter is set to Require, Amazon SES bounces emails that are not received over TLS. The default is Optional.</td>
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
    <td><a href="#describe_receipt_rule"><CopyableCode code="describe_receipt_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-RuleSetName"><code>RuleSetName</code></a>, <a href="#parameter-RuleName"><code>RuleName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of the specified receipt rule. For information about setting up receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#create_receipt_rule"><CopyableCode code="create_receipt_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-RuleSetName"><code>RuleSetName</code></a>, <a href="#parameter-Rule"><code>Rule</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-After"><code>After</code></a></td>
    <td>Creates a receipt rule. For information about setting up receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#set_receipt_rule_position"><CopyableCode code="set_receipt_rule_position" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RuleSetName"><code>RuleSetName</code></a>, <a href="#parameter-RuleName"><code>RuleName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-After"><code>After</code></a></td>
    <td>Sets the position of the specified receipt rule in the receipt rule set. For information about managing receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#update_receipt_rule"><CopyableCode code="update_receipt_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RuleSetName"><code>RuleSetName</code></a>, <a href="#parameter-Rule"><code>Rule</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a receipt rule. For information about managing receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#delete_receipt_rule"><CopyableCode code="delete_receipt_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-RuleSetName"><code>RuleSetName</code></a>, <a href="#parameter-RuleName"><code>RuleName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified receipt rule. For information about managing receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-Rule">
    <td><CopyableCode code="Rule" /></td>
    <td><code>object</code></td>
    <td>A data structure that contains the updated receipt rule information.</td>
</tr>
<tr id="parameter-RuleName">
    <td><CopyableCode code="RuleName" /></td>
    <td><code>string</code></td>
    <td>The name of the receipt rule to delete.</td>
</tr>
<tr id="parameter-RuleSetName">
    <td><CopyableCode code="RuleSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the receipt rule set that contains the receipt rule to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-After">
    <td><CopyableCode code="After" /></td>
    <td><code>string</code></td>
    <td>The name of the receipt rule after which to place the specified receipt rule.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_receipt_rule"
    values={[
        { label: 'describe_receipt_rule', value: 'describe_receipt_rule' }
    ]}
>
<TabItem value="describe_receipt_rule">

Returns the details of the specified receipt rule. For information about setting up receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
SELECT
actions,
enabled,
name,
recipients,
scan_enabled,
tls_policy
FROM aws.ses.receipt_rules
WHERE RuleSetName = '{{ RuleSetName }}' -- required
AND RuleName = '{{ RuleName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_receipt_rule"
    values={[
        { label: 'create_receipt_rule', value: 'create_receipt_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_receipt_rule">

Creates a receipt rule. For information about setting up receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
INSERT INTO aws.ses.receipt_rules (
RuleSetName,
Rule,
region,
After
)
SELECT 
'{{ RuleSetName }}',
'{{ Rule }}',
'{{ region }}',
'{{ After }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: receipt_rules
  props:
    - name: RuleSetName
      value: "{{ RuleSetName }}"
      description: Required parameter for the receipt_rules resource.
    - name: Rule
      value: "{{ Rule }}"
      description: Required parameter for the receipt_rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the receipt_rules resource.
    - name: After
      value: "{{ After }}"
      description: The name of an existing rule after which the new rule is placed. If this parameter is null, the new rule is inserted at the beginning of the rule list.
      description: The name of an existing rule after which the new rule is placed. If this parameter is null, the new rule is inserted at the beginning of the rule list.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_receipt_rule_position"
    values={[
        { label: 'set_receipt_rule_position', value: 'set_receipt_rule_position' },
        { label: 'update_receipt_rule', value: 'update_receipt_rule' }
    ]}
>
<TabItem value="set_receipt_rule_position">

Sets the position of the specified receipt rule in the receipt rule set. For information about managing receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
UPDATE aws.ses.receipt_rules
SET 
-- No updatable properties
WHERE 
RuleSetName = '{{ RuleSetName }}' --required
AND RuleName = '{{ RuleName }}' --required
AND region = '{{ region }}' --required
AND After = '{{ After}}';
```
</TabItem>
<TabItem value="update_receipt_rule">

Updates a receipt rule. For information about managing receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
UPDATE aws.ses.receipt_rules
SET 
-- No updatable properties
WHERE 
RuleSetName = '{{ RuleSetName }}' --required
AND Rule = '{{ Rule }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_receipt_rule"
    values={[
        { label: 'delete_receipt_rule', value: 'delete_receipt_rule' }
    ]}
>
<TabItem value="delete_receipt_rule">

Deletes the specified receipt rule. For information about managing receipt rules, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
DELETE FROM aws.ses.receipt_rules
WHERE RuleSetName = '{{ RuleSetName }}' --required
AND RuleName = '{{ RuleName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
