--- 
title: receipt_rule_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - receipt_rule_sets
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

Creates, updates, deletes, gets or lists a <code>receipt_rule_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="receipt_rule_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.receipt_rule_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_receipt_rule_set"
    values={[
        { label: 'describe_receipt_rule_set', value: 'describe_receipt_rule_set' },
        { label: 'list_receipt_rule_sets', value: 'list_receipt_rule_sets' }
    ]}
>
<TabItem value="describe_receipt_rule_set">

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
<TabItem value="list_receipt_rule_sets">

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
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string</code></td>
    <td>The date and time the receipt rule set was created.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the receipt rule set. The name must meet the following requirements: Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). Start and end with a letter or number. Contain 64 characters or fewer.</td>
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
    <td><a href="#describe_receipt_rule_set"><CopyableCode code="describe_receipt_rule_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-RuleSetName"><code>RuleSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of the specified receipt rule set. For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#list_receipt_rule_sets"><CopyableCode code="list_receipt_rule_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists the receipt rule sets that exist under your Amazon Web Services account in the current Amazon Web Services Region. If there are additional receipt rule sets to be retrieved, you receive a NextToken that you can provide to the next call to ListReceiptRuleSets to retrieve the additional entries. For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#create_receipt_rule_set"><CopyableCode code="create_receipt_rule_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-RuleSetName"><code>RuleSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an empty receipt rule set. For information about setting up receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#delete_receipt_rule_set"><CopyableCode code="delete_receipt_rule_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-RuleSetName"><code>RuleSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified receipt rule set and all of the receipt rules it contains. The currently active rule set cannot be deleted. For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-RuleSetName">
    <td><CopyableCode code="RuleSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the receipt rule set to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token returned from a previous call to ListReceiptRuleSets to indicate the position in the receipt rule set list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_receipt_rule_set"
    values={[
        { label: 'describe_receipt_rule_set', value: 'describe_receipt_rule_set' },
        { label: 'list_receipt_rule_sets', value: 'list_receipt_rule_sets' }
    ]}
>
<TabItem value="describe_receipt_rule_set">

Returns the details of the specified receipt rule set. For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
SELECT
actions,
enabled,
name,
recipients,
scan_enabled,
tls_policy
FROM aws.ses.receipt_rule_sets
WHERE RuleSetName = '{{ RuleSetName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_receipt_rule_sets">

Lists the receipt rule sets that exist under your Amazon Web Services account in the current Amazon Web Services Region. If there are additional receipt rule sets to be retrieved, you receive a NextToken that you can provide to the next call to ListReceiptRuleSets to retrieve the additional entries. For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
SELECT
created_timestamp,
name
FROM aws.ses.receipt_rule_sets
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_receipt_rule_set"
    values={[
        { label: 'create_receipt_rule_set', value: 'create_receipt_rule_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_receipt_rule_set">

Creates an empty receipt rule set. For information about setting up receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
INSERT INTO aws.ses.receipt_rule_sets (
RuleSetName,
region
)
SELECT 
'{{ RuleSetName }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: receipt_rule_sets
  props:
    - name: RuleSetName
      value: "{{ RuleSetName }}"
      description: Required parameter for the receipt_rule_sets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the receipt_rule_sets resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_receipt_rule_set"
    values={[
        { label: 'delete_receipt_rule_set', value: 'delete_receipt_rule_set' }
    ]}
>
<TabItem value="delete_receipt_rule_set">

Deletes the specified receipt rule set and all of the receipt rules it contains. The currently active rule set cannot be deleted. For information about managing receipt rule sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
DELETE FROM aws.ses.receipt_rule_sets
WHERE RuleSetName = '{{ RuleSetName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
