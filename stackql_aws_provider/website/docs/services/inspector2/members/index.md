--- 
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_member"
    values={[
        { label: 'get_member', value: 'get_member' },
        { label: 'list_members', value: 'list_members' }
    ]}
>
<TabItem value="get_member">

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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the member account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="delegatedAdminAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for this member account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="relationshipStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the member account. (CREATED, INVITED, DISABLED, ENABLED, REMOVED, RESIGNED, DELETED, EMAIL_VERIFICATION_IN_PROGRESS, EMAIL_VERIFICATION_FAILED, REGION_DISABLED, ACCOUNT_SUSPENDED, CANNOT_CREATE_DETECTOR_IN_ORG_MASTER)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp showing when the status of this member was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_members">

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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the member account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="delegatedAdminAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for this member account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="relationshipStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the member account. (CREATED, INVITED, DISABLED, ENABLED, REMOVED, RESIGNED, DELETED, EMAIL_VERIFICATION_IN_PROGRESS, EMAIL_VERIFICATION_FAILED, REGION_DISABLED, ACCOUNT_SUSPENDED, CANNOT_CREATE_DETECTOR_IN_ORG_MASTER)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp showing when the status of this member was last updated.</td>
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
    <td><a href="#get_member"><CopyableCode code="get_member" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets member information for your organization.</td>
</tr>
<tr>
    <td><a href="#list_members"><CopyableCode code="list_members" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List members associated with the Amazon Inspector delegated administrator for your organization.</td>
</tr>
<tr>
    <td><a href="#associate_member"><CopyableCode code="associate_member" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accountId"><code>accountId</code></a></td>
    <td></td>
    <td>Associates an Amazon Web Services account with an Amazon Inspector delegated administrator. An HTTP 200 response indicates the association was successfully started, but doesn’t indicate whether it was completed. You can check if the association completed by using ListMembers for multiple accounts or GetMembers for a single account.</td>
</tr>
<tr>
    <td><a href="#disassociate_member"><CopyableCode code="disassociate_member" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accountId"><code>accountId</code></a></td>
    <td></td>
    <td>Disassociates a member account from an Amazon Inspector delegated administrator.</td>
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
    defaultValue="get_member"
    values={[
        { label: 'get_member', value: 'get_member' },
        { label: 'list_members', value: 'list_members' }
    ]}
>
<TabItem value="get_member">

Gets member information for your organization.

```sql
SELECT
accountId,
delegatedAdminAccountId,
relationshipStatus,
updatedAt
FROM aws.inspector2.members
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_members">

List members associated with the Amazon Inspector delegated administrator for your organization.

```sql
SELECT
accountId,
delegatedAdminAccountId,
relationshipStatus,
updatedAt
FROM aws.inspector2.members
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_member"
    values={[
        { label: 'associate_member', value: 'associate_member' }
    ]}
>
<TabItem value="associate_member">

Associates an Amazon Web Services account with an Amazon Inspector delegated administrator. An HTTP 200 response indicates the association was successfully started, but doesn’t indicate whether it was completed. You can check if the association completed by using ListMembers for multiple accounts or GetMembers for a single account.

```sql
UPDATE aws.inspector2.members
SET 
accountId = '{{ accountId }}'
WHERE 
region = '{{ region }}' --required
AND accountId = '{{ accountId }}' --required
RETURNING
accountId;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_member"
    values={[
        { label: 'disassociate_member', value: 'disassociate_member' }
    ]}
>
<TabItem value="disassociate_member">

Disassociates a member account from an Amazon Inspector delegated administrator.

```sql
EXEC aws.inspector2.members.disassociate_member 
@region='{{ region }}' --required 
@@json=
'{
"accountId": "{{ accountId }}"
}'
;
```
</TabItem>
</Tabs>
