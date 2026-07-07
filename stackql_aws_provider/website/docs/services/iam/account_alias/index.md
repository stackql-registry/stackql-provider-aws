--- 
title: account_alias
hide_title: false
hide_table_of_contents: false
keywords:
  - account_alias
  - iam
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

Creates, updates, deletes, gets or lists an <code>account_alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.account_alias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_account_alias"><CopyableCode code="create_account_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-AccountAlias"><code>AccountAlias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see Creating, deleting, and listing an Amazon Web Services account alias in the Amazon Web Services Sign-In User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_account_alias"><CopyableCode code="delete_account_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-AccountAlias"><code>AccountAlias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see Creating, deleting, and listing an Amazon Web Services account alias in the Amazon Web Services Sign-In User Guide.</td>
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
<tr id="parameter-AccountAlias">
    <td><CopyableCode code="AccountAlias" /></td>
    <td><code>string</code></td>
    <td>The name of the account alias to delete. This parameter allows (through its regex pattern) a string of characters consisting of lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have two dashes in a row.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_account_alias"
    values={[
        { label: 'create_account_alias', value: 'create_account_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_account_alias">

Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see Creating, deleting, and listing an Amazon Web Services account alias in the Amazon Web Services Sign-In User Guide.

```sql
INSERT INTO aws.iam.account_alias (
AccountAlias,
region
)
SELECT 
'{{ AccountAlias }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: account_alias
  props:
    - name: AccountAlias
      value: "{{ AccountAlias }}"
      description: Required parameter for the account_alias resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the account_alias resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_account_alias"
    values={[
        { label: 'delete_account_alias', value: 'delete_account_alias' }
    ]}
>
<TabItem value="delete_account_alias">

Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see Creating, deleting, and listing an Amazon Web Services account alias in the Amazon Web Services Sign-In User Guide.

```sql
DELETE FROM aws.iam.account_alias
WHERE AccountAlias = '{{ AccountAlias }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
