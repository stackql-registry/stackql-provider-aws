--- 
title: drt_roles
hide_title: false
hide_table_of_contents: false
keywords:
  - drt_roles
  - shield
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

Creates, updates, deletes, gets or lists a <code>drt_roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="drt_roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.shield.drt_roles" /></td></tr>
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
    <td><a href="#associate_drt_role"><CopyableCode code="associate_drt_role" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs. You can associate only one RoleArn with your subscription. If you submit an AssociateDRTRole request for an account that already has an associated role, the new RoleArn will replace the existing RoleArn. Prior to making the AssociateDRTRole request, you must attach the AWSShieldDRTAccessPolicy managed policy to the role that you'll specify in the request. You can access this policy in the IAM console at AWSShieldDRTAccessPolicy. For more information see Adding and removing IAM identity permissions. The role must also trust the service principal drt.shield.amazonaws.com. For more information, see IAM JSON policy elements: Principal. The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you. You must have the iam:PassRole permission to make an AssociateDRTRole request. For more information, see Granting a user permissions to pass a role to an Amazon Web Services service. To use the services of the SRT and make an AssociateDRTRole request, you must be subscribed to the Business Support plan or the Enterprise Support plan.</td>
</tr>
<tr>
    <td><a href="#disassociate_drt_role"><CopyableCode code="disassociate_drt_role" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="associate_drt_role"
    values={[
        { label: 'associate_drt_role', value: 'associate_drt_role' },
        { label: 'disassociate_drt_role', value: 'disassociate_drt_role' }
    ]}
>
<TabItem value="associate_drt_role">

Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs. You can associate only one RoleArn with your subscription. If you submit an AssociateDRTRole request for an account that already has an associated role, the new RoleArn will replace the existing RoleArn. Prior to making the AssociateDRTRole request, you must attach the AWSShieldDRTAccessPolicy managed policy to the role that you'll specify in the request. You can access this policy in the IAM console at AWSShieldDRTAccessPolicy. For more information see Adding and removing IAM identity permissions. The role must also trust the service principal drt.shield.amazonaws.com. For more information, see IAM JSON policy elements: Principal. The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you. You must have the iam:PassRole permission to make an AssociateDRTRole request. For more information, see Granting a user permissions to pass a role to an Amazon Web Services service. To use the services of the SRT and make an AssociateDRTRole request, you must be subscribed to the Business Support plan or the Enterprise Support plan.

```sql
UPDATE aws.shield.drt_roles
SET 
RoleArn = '{{ RoleArn }}'
WHERE 
region = '{{ region }}' --required
AND RoleArn = '{{ RoleArn }}' --required;
```
</TabItem>
<TabItem value="disassociate_drt_role">

Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.

```sql
UPDATE aws.shield.drt_roles
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
