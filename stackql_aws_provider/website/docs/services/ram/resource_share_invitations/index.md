--- 
title: resource_share_invitations
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_share_invitations
  - ram
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

Creates, updates, deletes, gets or lists a <code>resource_share_invitations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_share_invitations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ram.resource_share_invitations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_share_invitations"
    values={[
        { label: 'get_resource_share_invitations', value: 'get_resource_share_invitations' }
    ]}
>
<TabItem value="get_resource_share_invitations">

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
    <td><CopyableCode code="invitation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the invitation was sent.</td>
</tr>
<tr>
    <td><CopyableCode code="receiver_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that received the invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="receiver_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM user or role that received the invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_share_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource share</td>
</tr>
<tr>
    <td><CopyableCode code="resource_share_associations" /></td>
    <td><code>array</code></td>
    <td>To view the resources associated with a pending resource share invitation, use ListPendingInvitationResources.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_share_invitation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_share_name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="sender_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that sent the invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the invitation. (PENDING, ACCEPTED, REJECTED, EXPIRED)</td>
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
    <td><a href="#get_resource_share_invitations"><CopyableCode code="get_resource_share_invitations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about invitations that you have received for resource shares. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.</td>
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
    defaultValue="get_resource_share_invitations"
    values={[
        { label: 'get_resource_share_invitations', value: 'get_resource_share_invitations' }
    ]}
>
<TabItem value="get_resource_share_invitations">

Retrieves details about invitations that you have received for resource shares. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.

```sql
SELECT
invitation_timestamp,
receiver_account_id,
receiver_arn,
resource_share_arn,
resource_share_associations,
resource_share_invitation_arn,
resource_share_name,
sender_account_id,
status
FROM aws.ram.resource_share_invitations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
