--- 
title: aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - aliases
  - payment_cryptography
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

Creates, updates, deletes, gets or lists an <code>aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography.aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_aliases"
    values={[
        { label: 'list_aliases', value: 'list_aliases' }
    ]}
>
<TabItem value="list_aliases">

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
    <td><CopyableCode code="alias_name" /></td>
    <td><code>string</code></td>
    <td>A friendly name that you can use to refer to a key. The value must begin with alias/. Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output. (pattern: &lt;code&gt;alias/&#91;a-zA-Z0-9/_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="key_arn" /></td>
    <td><code>string</code></td>
    <td>The KeyARN of the key associated with the alias. (pattern: &lt;code&gt;arn:aws:payment-cryptography:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,16&#125;-&#91;0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:key/&#91;0-9a-zA-Z&#93;&#123;16,64&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_aliases"><CopyableCode code="list_aliases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the aliases for all keys in the caller's Amazon Web Services account and Amazon Web Services Region. You can filter the aliases by keyARN. For more information, see Using aliases in the Amazon Web Services Payment Cryptography User Guide. This is a paginated operation, which means that each response might contain only a subset of all the aliases. When the response contains only a subset of aliases, it includes a NextToken value. Use this value in a subsequent ListAliases request to get more aliases. When you receive a response with no NextToken (or an empty or null value), that means there are no more aliases to get. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: CreateAlias DeleteAlias GetAlias UpdateAlias</td>
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
    defaultValue="list_aliases"
    values={[
        { label: 'list_aliases', value: 'list_aliases' }
    ]}
>
<TabItem value="list_aliases">

Lists the aliases for all keys in the caller's Amazon Web Services account and Amazon Web Services Region. You can filter the aliases by keyARN. For more information, see Using aliases in the Amazon Web Services Payment Cryptography User Guide. This is a paginated operation, which means that each response might contain only a subset of all the aliases. When the response contains only a subset of aliases, it includes a NextToken value. Use this value in a subsequent ListAliases request to get more aliases. When you receive a response with no NextToken (or an empty or null value), that means there are no more aliases to get. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: CreateAlias DeleteAlias GetAlias UpdateAlias

```sql
SELECT
alias_name,
key_arn
FROM aws.payment_cryptography.aliases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
