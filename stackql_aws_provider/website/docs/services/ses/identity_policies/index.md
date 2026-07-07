--- 
title: identity_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_policies
  - ses
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

Creates, updates, deletes, gets or lists an <code>identity_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.identity_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity_policies"
    values={[
        { label: 'get_identity_policies', value: 'get_identity_policies' },
        { label: 'list_identity_policies', value: 'list_identity_policies' }
    ]}
>
<TabItem value="get_identity_policies">

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
    <td><CopyableCode code="Policies" /></td>
    <td><code>string</code></td>
    <td>A map of policy names to policies.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_identity_policies">

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
    <td><CopyableCode code="policy_name" /></td>
    <td><code>string</code></td>
    <td>A list of names of policies that apply to the specified identity.</td>
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
    <td><a href="#get_identity_policies"><CopyableCode code="get_identity_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-PolicyNames"><code>PolicyNames</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Identity"><code>Identity</code></a></td>
    <td>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time. This operation is for the identity owner only. If you have not verified the identity, it returns an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#list_identity_policies"><CopyableCode code="list_identity_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Identity"><code>Identity</code></a></td>
    <td>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This operation returns only a list. To get the actual policy content, use GetIdentityPolicies. This operation is for the identity owner only. If you have not verified the identity, it returns an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#put_identity_policy"><CopyableCode code="put_identity_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-Policy"><code>Policy</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Identity"><code>Identity</code></a></td>
    <td>Adds or updates a sending authorization policy for the specified identity (an email address or a domain). This operation is for the identity owner only. If you have not verified the identity, it returns an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#delete_identity_policy"><CopyableCode code="delete_identity_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Identity"><code>Identity</code></a></td>
    <td>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This operation returns successfully even if a policy with the specified name does not exist. This operation is for the identity owner only. If you have not verified the identity, it returns an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-Policy">
    <td><CopyableCode code="Policy" /></td>
    <td><code>string</code></td>
    <td>The text of the policy in JSON format. The policy cannot exceed 4 KB. For information about the syntax of sending authorization policies, see the Amazon SES Developer Guide.</td>
</tr>
<tr id="parameter-PolicyName">
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>The name of the policy to be deleted.</td>
</tr>
<tr id="parameter-PolicyNames">
    <td><CopyableCode code="PolicyNames" /></td>
    <td><code>array</code></td>
    <td>A list of the names of policies to be retrieved. You can retrieve a maximum of 20 policies at a time. If you do not know the names of the policies that are attached to the identity, you can use ListIdentityPolicies.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Identity">
    <td><CopyableCode code="Identity" /></td>
    <td><code>string</code></td>
    <td>The identity that is associated with the policy to delete. You can specify the identity by using its name or by using its Amazon Resource Name (ARN). Examples: user@example.com, example.com, arn:aws:ses:us-east-1:123456789012:identity/example.com. To successfully call this operation, you must own the identity.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_identity_policies"
    values={[
        { label: 'get_identity_policies', value: 'get_identity_policies' },
        { label: 'list_identity_policies', value: 'list_identity_policies' }
    ]}
>
<TabItem value="get_identity_policies">

Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time. This operation is for the identity owner only. If you have not verified the identity, it returns an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
SELECT
Policies
FROM aws.ses.identity_policies
WHERE PolicyNames = '{{ PolicyNames }}' -- required
AND region = '{{ region }}' -- required
AND Identity = '{{ Identity }}'
;
```
</TabItem>
<TabItem value="list_identity_policies">

Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This operation returns only a list. To get the actual policy content, use GetIdentityPolicies. This operation is for the identity owner only. If you have not verified the identity, it returns an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
SELECT
policy_name
FROM aws.ses.identity_policies
WHERE region = '{{ region }}' -- required
AND Identity = '{{ Identity }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_identity_policy"
    values={[
        { label: 'put_identity_policy', value: 'put_identity_policy' }
    ]}
>
<TabItem value="put_identity_policy">

Adds or updates a sending authorization policy for the specified identity (an email address or a domain). This operation is for the identity owner only. If you have not verified the identity, it returns an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
REPLACE aws.ses.identity_policies
SET 
-- No updatable properties
WHERE 
PolicyName = '{{ PolicyName }}' --required
AND Policy = '{{ Policy }}' --required
AND region = '{{ region }}' --required
AND Identity = '{{ Identity}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_identity_policy"
    values={[
        { label: 'delete_identity_policy', value: 'delete_identity_policy' }
    ]}
>
<TabItem value="delete_identity_policy">

Deletes the specified sending authorization policy for the given identity (an email address or a domain). This operation returns successfully even if a policy with the specified name does not exist. This operation is for the identity owner only. If you have not verified the identity, it returns an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
DELETE FROM aws.ses.identity_policies
WHERE PolicyName = '{{ PolicyName }}' --required
AND region = '{{ region }}' --required
AND Identity = '{{ Identity }}'
;
```
</TabItem>
</Tabs>
