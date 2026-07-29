--- 
title: program_management_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - program_management_accounts
  - partnercentral_channel
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

Creates, updates, deletes, gets or lists a <code>program_management_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="program_management_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_channel.program_management_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_program_management_accounts"
    values={[
        { label: 'list_program_management_accounts', value: 'list_program_management_accounts' }
    ]}
>
<TabItem value="list_program_management_accounts">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the program management account. (pattern: &lt;code&gt;pma-&#91;a-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID associated with the program management account. (pattern: &lt;code&gt;&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the program management account.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier associated with the account. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the account was created.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the program management account. (pattern: &lt;code&gt;&#91;^\x00-\x1F\x7F&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="program" /></td>
    <td><code>string</code></td>
    <td>The program type for the management account. (SOLUTION_PROVIDER, DISTRIBUTION, DISTRIBUTION_SELLER)</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The current revision number of the program management account. (pattern: &lt;code&gt;&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the program management account.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the program management account. (PENDING, ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the account was last updated.</td>
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
    <td><a href="#list_program_management_accounts"><CopyableCode code="list_program_management_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists program management accounts based on specified criteria.</td>
</tr>
<tr>
    <td><a href="#create_program_management_account"><CopyableCode code="create_program_management_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-catalog"><code>catalog</code></a>, <a href="#parameter-program"><code>program</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-accountId"><code>accountId</code></a></td>
    <td></td>
    <td>Creates a new program management account for managing partner relationships.</td>
</tr>
<tr>
    <td><a href="#update_program_management_account"><CopyableCode code="update_program_management_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-catalog"><code>catalog</code></a>, <a href="#parameter-identifier"><code>identifier</code></a></td>
    <td></td>
    <td>Updates the properties of a program management account.</td>
</tr>
<tr>
    <td><a href="#delete_program_management_account"><CopyableCode code="delete_program_management_account" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a program management account.</td>
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
    defaultValue="list_program_management_accounts"
    values={[
        { label: 'list_program_management_accounts', value: 'list_program_management_accounts' }
    ]}
>
<TabItem value="list_program_management_accounts">

Lists program management accounts based on specified criteria.

```sql
SELECT
id,
account_id,
arn,
catalog,
created_at,
display_name,
program,
revision,
start_date,
status,
updated_at
FROM aws.partnercentral_channel.program_management_accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_program_management_account"
    values={[
        { label: 'create_program_management_account', value: 'create_program_management_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_program_management_account">

Creates a new program management account for managing partner relationships.

```sql
INSERT INTO aws.partnercentral_channel.program_management_accounts (
catalog,
program,
displayName,
accountId,
clientToken,
tags,
region
)
SELECT 
'{{ catalog }}' /* required */,
'{{ program }}' /* required */,
'{{ displayName }}' /* required */,
'{{ accountId }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
program_management_account_detail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: program_management_accounts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the program_management_accounts resource.
    - name: catalog
      value: "{{ catalog }}"
      description: |
        The catalog identifier for the program management account.
    - name: program
      value: "{{ program }}"
      description: |
        The program type for the management account.
      valid_values: ['SOLUTION_PROVIDER', 'DISTRIBUTION', 'DISTRIBUTION_SELLER']
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A human-readable name for the program management account.
    - name: accountId
      value: "{{ accountId }}"
      description: |
        The AWS account ID to associate with the program management account.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier to ensure idempotency of the request.
    - name: tags
      description: |
        Key-value pairs to associate with the program management account.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_program_management_account"
    values={[
        { label: 'update_program_management_account', value: 'update_program_management_account' }
    ]}
>
<TabItem value="update_program_management_account">

Updates the properties of a program management account.

```sql
UPDATE aws.partnercentral_channel.program_management_accounts
SET 
catalog = '{{ catalog }}',
identifier = '{{ identifier }}',
revision = '{{ revision }}',
displayName = '{{ displayName }}'
WHERE 
region = '{{ region }}' --required
AND catalog = '{{ catalog }}' --required
AND identifier = '{{ identifier }}' --required
RETURNING
program_management_account_detail;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_program_management_account"
    values={[
        { label: 'delete_program_management_account', value: 'delete_program_management_account' }
    ]}
>
<TabItem value="delete_program_management_account">

Deletes a program management account.

```sql
DELETE FROM aws.partnercentral_channel.program_management_accounts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
