--- 
title: alias
hide_title: false
hide_table_of_contents: false
keywords:
  - alias
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

Creates, updates, deletes, gets or lists an <code>alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography.alias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_alias"
    values={[
        { label: 'get_alias', value: 'get_alias' }
    ]}
>
<TabItem value="get_alias">

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
    <td><a href="#get_alias"><CopyableCode code="get_alias" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the Amazon Web Services Payment Cryptography key associated with the alias. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: CreateAlias DeleteAlias ListAliases UpdateAlias</td>
</tr>
<tr>
    <td><a href="#create_alias"><CopyableCode code="create_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AliasName"><code>AliasName</code></a></td>
    <td></td>
    <td>Creates an alias, or a friendly name, for an Amazon Web Services Payment Cryptography key. You can use an alias to identify a key in the console and when you call cryptographic operations such as EncryptData or DecryptData. You can associate the alias with any key in the same Amazon Web Services Region. Each alias is associated with only one key at a time, but a key can have multiple aliases. You can't create an alias without a key. The alias must be unique in the account and Amazon Web Services Region, but you can create another alias with the same name in a different Amazon Web Services Region. To change the key that's associated with the alias, call UpdateAlias. To delete the alias, call DeleteAlias. These operations don't affect the underlying key. To get the alias that you created, call ListAliases. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: DeleteAlias GetAlias ListAliases UpdateAlias</td>
</tr>
<tr>
    <td><a href="#update_alias"><CopyableCode code="update_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AliasName"><code>AliasName</code></a></td>
    <td></td>
    <td>Associates an existing Amazon Web Services Payment Cryptography alias with a different key. Each alias is associated with only one Amazon Web Services Payment Cryptography key at a time, although a key can have multiple aliases. The alias and the Amazon Web Services Payment Cryptography key must be in the same Amazon Web Services account and Amazon Web Services Region Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: CreateAlias DeleteAlias GetAlias ListAliases</td>
</tr>
<tr>
    <td><a href="#delete_alias"><CopyableCode code="delete_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the alias, but doesn't affect the underlying key. Each key can have multiple aliases. To get the aliases of all keys, use the UpdateAlias operation. To change the alias of a key, first use DeleteAlias to delete the current alias and then use CreateAlias to create a new alias. To associate an existing alias with a different key, call UpdateAlias. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: CreateAlias GetAlias ListAliases UpdateAlias</td>
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
    defaultValue="get_alias"
    values={[
        { label: 'get_alias', value: 'get_alias' }
    ]}
>
<TabItem value="get_alias">

Gets the Amazon Web Services Payment Cryptography key associated with the alias. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: CreateAlias DeleteAlias ListAliases UpdateAlias

```sql
SELECT
alias_name,
key_arn
FROM aws.payment_cryptography.alias
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_alias"
    values={[
        { label: 'create_alias', value: 'create_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_alias">

Creates an alias, or a friendly name, for an Amazon Web Services Payment Cryptography key. You can use an alias to identify a key in the console and when you call cryptographic operations such as EncryptData or DecryptData. You can associate the alias with any key in the same Amazon Web Services Region. Each alias is associated with only one key at a time, but a key can have multiple aliases. You can't create an alias without a key. The alias must be unique in the account and Amazon Web Services Region, but you can create another alias with the same name in a different Amazon Web Services Region. To change the key that's associated with the alias, call UpdateAlias. To delete the alias, call DeleteAlias. These operations don't affect the underlying key. To get the alias that you created, call ListAliases. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: DeleteAlias GetAlias ListAliases UpdateAlias

```sql
INSERT INTO aws.payment_cryptography.alias (
AliasName,
KeyArn,
region
)
SELECT 
'{{ AliasName }}' /* required */,
'{{ KeyArn }}',
'{{ region }}'
RETURNING
alias
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: alias
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the alias resource.
    - name: AliasName
      value: "{{ AliasName }}"
      description: |
        A friendly name that you can use to refer to a key. An alias must begin with alias/ followed by a name, for example alias/ExampleAlias. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
    - name: KeyArn
      value: "{{ KeyArn }}"
      description: |
        The KeyARN of the key to associate with the alias.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_alias"
    values={[
        { label: 'update_alias', value: 'update_alias' }
    ]}
>
<TabItem value="update_alias">

Associates an existing Amazon Web Services Payment Cryptography alias with a different key. Each alias is associated with only one Amazon Web Services Payment Cryptography key at a time, although a key can have multiple aliases. The alias and the Amazon Web Services Payment Cryptography key must be in the same Amazon Web Services account and Amazon Web Services Region Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: CreateAlias DeleteAlias GetAlias ListAliases

```sql
UPDATE aws.payment_cryptography.alias
SET 
AliasName = '{{ AliasName }}',
KeyArn = '{{ KeyArn }}'
WHERE 
region = '{{ region }}' --required
AND AliasName = '{{ AliasName }}' --required
RETURNING
alias;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_alias"
    values={[
        { label: 'delete_alias', value: 'delete_alias' }
    ]}
>
<TabItem value="delete_alias">

Deletes the alias, but doesn't affect the underlying key. Each key can have multiple aliases. To get the aliases of all keys, use the UpdateAlias operation. To change the alias of a key, first use DeleteAlias to delete the current alias and then use CreateAlias to create a new alias. To associate an existing alias with a different key, call UpdateAlias. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: CreateAlias GetAlias ListAliases UpdateAlias

```sql
DELETE FROM aws.payment_cryptography.alias
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
