--- 
title: invitations
hide_title: false
hide_table_of_contents: false
keywords:
  - invitations
  - managedblockchain
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

Creates, updates, deletes, gets or lists an <code>invitations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invitations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.managedblockchain.invitations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_invitations"
    values={[
        { label: 'list_invitations', value: 'list_invitations' }
    ]}
>
<TabItem value="list_invitations">

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
    <td><CopyableCode code="Invitations" /></td>
    <td><code>array</code></td>
    <td>The invitations for the network.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that indicates the next set of results to retrieve.</td>
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
    <td><a href="#list_invitations"><CopyableCode code="list_invitations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all invitations for the current Amazon Web Services account. Applies only to Hyperledger Fabric.</td>
</tr>
<tr>
    <td><a href="#reject_invitation"><CopyableCode code="reject_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-invitation_id"><code>invitation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Rejects an invitation to join a network. This action can be called by a principal in an Amazon Web Services account that has received an invitation to create a member and join a network. Applies only to Hyperledger Fabric.</td>
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
<tr id="parameter-invitation_id">
    <td><CopyableCode code="invitation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the invitation to reject.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of invitations to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that indicates the next set of results to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_invitations"
    values={[
        { label: 'list_invitations', value: 'list_invitations' }
    ]}
>
<TabItem value="list_invitations">

Returns a list of all invitations for the current Amazon Web Services account. Applies only to Hyperledger Fabric.

```sql
SELECT
Invitations,
NextToken
FROM aws.managedblockchain.invitations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reject_invitation"
    values={[
        { label: 'reject_invitation', value: 'reject_invitation' }
    ]}
>
<TabItem value="reject_invitation">

Rejects an invitation to join a network. This action can be called by a principal in an Amazon Web Services account that has received an invitation to create a member and join a network. Applies only to Hyperledger Fabric.

```sql
EXEC aws.managedblockchain.invitations.reject_invitation 
@invitation_id='{{ invitation_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
