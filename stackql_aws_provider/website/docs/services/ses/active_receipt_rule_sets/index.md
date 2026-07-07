--- 
title: active_receipt_rule_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - active_receipt_rule_sets
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

Creates, updates, deletes, gets or lists an <code>active_receipt_rule_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="active_receipt_rule_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.active_receipt_rule_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_active_receipt_rule_set"
    values={[
        { label: 'describe_active_receipt_rule_set', value: 'describe_active_receipt_rule_set' }
    ]}
>
<TabItem value="describe_active_receipt_rule_set">

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
    <td><CopyableCode code="Actions" /></td>
    <td><code>string</code></td>
    <td>An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, the receipt rule is active. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the receipt rule. The name must meet the following requirements: Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), dashes (-), or periods (.). Start and end with a letter or number. Contain 64 characters or fewer.</td>
</tr>
<tr>
    <td><CopyableCode code="Recipients" /></td>
    <td><code>string</code></td>
    <td>The recipient domains and email addresses that the receipt rule applies to. If this field is not specified, this rule matches all recipients on all verified domains.</td>
</tr>
<tr>
    <td><CopyableCode code="ScanEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, then messages that this receipt rule applies to are scanned for spam and viruses. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="TlsPolicy" /></td>
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
    <td><a href="#describe_active_receipt_rule_set"><CopyableCode code="describe_active_receipt_rule_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the metadata and receipt rules for the receipt rule set that is currently active. For information about setting up receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#set_active_receipt_rule_set"><CopyableCode code="set_active_receipt_rule_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RuleSetName"><code>RuleSetName</code></a></td>
    <td>Sets the specified receipt rule set as the active receipt rule set. To disable your email-receiving through Amazon SES completely, you can call this operation with RuleSetName set to null. For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-RuleSetName">
    <td><CopyableCode code="RuleSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the receipt rule set to make active. Setting this value to null disables all email receiving.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_active_receipt_rule_set"
    values={[
        { label: 'describe_active_receipt_rule_set', value: 'describe_active_receipt_rule_set' }
    ]}
>
<TabItem value="describe_active_receipt_rule_set">

Returns the metadata and receipt rules for the receipt rule set that is currently active. For information about setting up receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
SELECT
Actions,
Enabled,
Name,
Recipients,
ScanEnabled,
TlsPolicy
FROM aws.ses.active_receipt_rule_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_active_receipt_rule_set"
    values={[
        { label: 'set_active_receipt_rule_set', value: 'set_active_receipt_rule_set' }
    ]}
>
<TabItem value="set_active_receipt_rule_set">

Sets the specified receipt rule set as the active receipt rule set. To disable your email-receiving through Amazon SES completely, you can call this operation with RuleSetName set to null. For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
UPDATE aws.ses.active_receipt_rule_sets
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND RuleSetName = '{{ RuleSetName}}';
```
</TabItem>
</Tabs>
