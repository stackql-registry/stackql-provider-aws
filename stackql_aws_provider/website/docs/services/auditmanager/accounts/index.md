--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - auditmanager
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

Creates, updates, deletes, gets or lists an <code>accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.accounts" /></td></tr>
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
    <td><a href="#register_account"><CopyableCode code="register_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables Audit Manager for the specified Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#deregister_account"><CopyableCode code="deregister_account" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters an account in Audit Manager. Before you deregister, you can use the UpdateSettings API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the DeregistrationPolicy attribute to request the deletion of your data. For more information about data retention, see Data Protection in the Audit Manager User Guide.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="register_account"
    values={[
        { label: 'register_account', value: 'register_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_account">

Enables Audit Manager for the specified Amazon Web Services account.

```sql
INSERT INTO aws.auditmanager.accounts (
kmsKey,
delegatedAdminAccount,
region
)
SELECT 
'{{ kmsKey }}',
'{{ delegatedAdminAccount }}',
'{{ region }}'
RETURNING
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: accounts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the accounts resource.
    - name: kmsKey
      value: "{{ kmsKey }}"
    - name: delegatedAdminAccount
      value: "{{ delegatedAdminAccount }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_account"
    values={[
        { label: 'deregister_account', value: 'deregister_account' }
    ]}
>
<TabItem value="deregister_account">

Deregisters an account in Audit Manager. Before you deregister, you can use the UpdateSettings API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the DeregistrationPolicy attribute to request the deletion of your data. For more information about data retention, see Data Protection in the Audit Manager User Guide.

```sql
DELETE FROM aws.auditmanager.accounts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
