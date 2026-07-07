--- 
title: organization_delegated_admins
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_delegated_admins
  - cloudtrail
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

Creates, updates, deletes, gets or lists an <code>organization_delegated_admins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_delegated_admins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.organization_delegated_admins" /></td></tr>
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
    <td><a href="#register_organization_delegated_admin"><CopyableCode code="register_organization_delegated_admin" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MemberAccountId"><code>MemberAccountId</code></a></td>
    <td></td>
    <td>Registers an organization’s member account as the CloudTrail delegated administrator.</td>
</tr>
<tr>
    <td><a href="#deregister_organization_delegated_admin"><CopyableCode code="deregister_organization_delegated_admin" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes CloudTrail delegated administrator permissions from a member account in an organization.</td>
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
    defaultValue="register_organization_delegated_admin"
    values={[
        { label: 'register_organization_delegated_admin', value: 'register_organization_delegated_admin' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_organization_delegated_admin">

Registers an organization’s member account as the CloudTrail delegated administrator.

```sql
INSERT INTO aws.cloudtrail.organization_delegated_admins (
MemberAccountId,
region
)
SELECT 
'{{ MemberAccountId }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: organization_delegated_admins
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the organization_delegated_admins resource.
    - name: MemberAccountId
      value: "{{ MemberAccountId }}"
      description: |
        An organization member account ID that you want to designate as a delegated administrator.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_organization_delegated_admin"
    values={[
        { label: 'deregister_organization_delegated_admin', value: 'deregister_organization_delegated_admin' }
    ]}
>
<TabItem value="deregister_organization_delegated_admin">

Removes CloudTrail delegated administrator permissions from a member account in an organization.

```sql
DELETE FROM aws.cloudtrail.organization_delegated_admins
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
