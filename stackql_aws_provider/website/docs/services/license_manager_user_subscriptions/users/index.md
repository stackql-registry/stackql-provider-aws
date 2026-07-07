--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - license_manager_user_subscriptions
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager_user_subscriptions.users" /></td></tr>
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
    <td><a href="#associate_user"><CopyableCode code="associate_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Username"><code>Username</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-IdentityProvider"><code>IdentityProvider</code></a></td>
    <td></td>
    <td>Associates the user to an EC2 instance to utilize user-based subscriptions. Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as Pending billing status) in Amazon Web Services Billing. For more information, see Viewing your monthly charges in the Amazon Web Services Billing User Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_user"><CopyableCode code="disassociate_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates the user from an EC2 instance providing user-based subscriptions.</td>
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
    defaultValue="associate_user"
    values={[
        { label: 'associate_user', value: 'associate_user' },
        { label: 'disassociate_user', value: 'disassociate_user' }
    ]}
>
<TabItem value="associate_user">

Associates the user to an EC2 instance to utilize user-based subscriptions. Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as Pending billing status) in Amazon Web Services Billing. For more information, see Viewing your monthly charges in the Amazon Web Services Billing User Guide.

```sql
UPDATE aws.license_manager_user_subscriptions.users
SET 
Username = '{{ Username }}',
InstanceId = '{{ InstanceId }}',
IdentityProvider = '{{ IdentityProvider }}',
Domain = '{{ Domain }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND Username = '{{ Username }}' --required
AND InstanceId = '{{ InstanceId }}' --required
AND IdentityProvider = '{{ IdentityProvider }}' --required
RETURNING
InstanceUserSummary;
```
</TabItem>
<TabItem value="disassociate_user">

Disassociates the user from an EC2 instance providing user-based subscriptions.

```sql
UPDATE aws.license_manager_user_subscriptions.users
SET 
Username = '{{ Username }}',
InstanceId = '{{ InstanceId }}',
IdentityProvider = '{{ IdentityProvider }}',
InstanceUserArn = '{{ InstanceUserArn }}',
Domain = '{{ Domain }}'
WHERE 
region = '{{ region }}' --required
RETURNING
InstanceUserSummary;
```
</TabItem>
</Tabs>
