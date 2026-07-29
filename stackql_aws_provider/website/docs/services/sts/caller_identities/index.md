--- 
title: caller_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - caller_identities
  - sts
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

Creates, updates, deletes, gets or lists a <code>caller_identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="caller_identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sts.caller_identities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_caller_identity"
    values={[
        { label: 'get_caller_identity', value: 'get_caller_identity' }
    ]}
>
<TabItem value="get_caller_identity">

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
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID number of the account that owns or contains the calling entity.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services ARN associated with the calling entity.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the calling entity. The exact value depends on the type of entity that is making the call. The values returned are those listed in the aws:userid column in the Principal table found on the Policy Variables reference page in the IAM User Guide.</td>
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
    <td><a href="#get_caller_identity"><CopyableCode code="get_caller_identity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about the IAM user or role whose credentials are used to call the operation. No permissions are required to perform this operation. If an administrator attaches a policy to your identity that explicitly denies access to the sts:GetCallerIdentity action, you can still perform this operation. Permissions are not required because the same information is returned when access is denied. To view an example response, see I Am Not Authorized to Perform: iam:DeleteVirtualMFADevice in the IAM User Guide.</td>
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
    defaultValue="get_caller_identity"
    values={[
        { label: 'get_caller_identity', value: 'get_caller_identity' }
    ]}
>
<TabItem value="get_caller_identity">

Returns details about the IAM user or role whose credentials are used to call the operation. No permissions are required to perform this operation. If an administrator attaches a policy to your identity that explicitly denies access to the sts:GetCallerIdentity action, you can still perform this operation. Permissions are not required because the same information is returned when access is denied. To view an example response, see I Am Not Authorized to Perform: iam:DeleteVirtualMFADevice in the IAM User Guide.

```sql
SELECT
account,
arn,
user_id
FROM aws.sts.caller_identities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
