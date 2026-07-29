--- 
title: email_identity_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - email_identity_policies
  - sesv2
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

Creates, updates, deletes, gets or lists an <code>email_identity_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="email_identity_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.email_identity_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_email_identity_policies"
    values={[
        { label: 'get_email_identity_policies', value: 'get_email_identity_policies' }
    ]}
>
<TabItem value="get_email_identity_policies">

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
    <td><CopyableCode code="policies" /></td>
    <td><code>object</code></td>
    <td>A map of policy names to policies.</td>
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
    <td><a href="#get_email_identity_policies"><CopyableCode code="get_email_identity_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time. This API is for the identity owner only. If you have not verified the identity, this API will return an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#create_email_identity_policy"><CopyableCode code="create_email_identity_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Policy"><code>Policy</code></a></td>
    <td></td>
    <td>Creates the specified sending authorization policy for the given identity (an email address or a domain). This API is for the identity owner only. If you have not verified the identity, this API will return an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#update_email_identity_policy"><CopyableCode code="update_email_identity_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Policy"><code>Policy</code></a></td>
    <td></td>
    <td>Updates the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist. This API is for the identity owner only. If you have not verified the identity, this API will return an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#delete_email_identity_policy"><CopyableCode code="delete_email_identity_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist. This API is for the identity owner only. If you have not verified the identity, this API will return an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-email_identity">
    <td><CopyableCode code="email_identity" /></td>
    <td><code>string</code></td>
    <td>The email identity.</td>
</tr>
<tr id="parameter-policy_name">
    <td><CopyableCode code="policy_name" /></td>
    <td><code>string</code></td>
    <td>The name of the policy. The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_email_identity_policies"
    values={[
        { label: 'get_email_identity_policies', value: 'get_email_identity_policies' }
    ]}
>
<TabItem value="get_email_identity_policies">

Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time. This API is for the identity owner only. If you have not verified the identity, this API will return an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
SELECT
policies
FROM aws.sesv2.email_identity_policies
WHERE email_identity = '{{ email_identity }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_email_identity_policy"
    values={[
        { label: 'create_email_identity_policy', value: 'create_email_identity_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_email_identity_policy">

Creates the specified sending authorization policy for the given identity (an email address or a domain). This API is for the identity owner only. If you have not verified the identity, this API will return an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
INSERT INTO aws.sesv2.email_identity_policies (
Policy,
email_identity,
policy_name,
region
)
SELECT 
'{{ Policy }}' /* required */,
'{{ email_identity }}',
'{{ policy_name }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: email_identity_policies
  props:
    - name: email_identity
      value: "{{ email_identity }}"
      description: Required parameter for the email_identity_policies resource.
    - name: policy_name
      value: "{{ policy_name }}"
      description: Required parameter for the email_identity_policies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the email_identity_policies resource.
    - name: Policy
      value: "{{ Policy }}"
      description: |
        The text of the policy in JSON format. The policy cannot exceed 4 KB. For information about the syntax of sending authorization policies, see the Amazon SES Developer Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_email_identity_policy"
    values={[
        { label: 'update_email_identity_policy', value: 'update_email_identity_policy' }
    ]}
>
<TabItem value="update_email_identity_policy">

Updates the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist. This API is for the identity owner only. If you have not verified the identity, this API will return an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
UPDATE aws.sesv2.email_identity_policies
SET 
Policy = '{{ Policy }}'
WHERE 
email_identity = '{{ email_identity }}' --required
AND policy_name = '{{ policy_name }}' --required
AND region = '{{ region }}' --required
AND Policy = '{{ Policy }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_email_identity_policy"
    values={[
        { label: 'delete_email_identity_policy', value: 'delete_email_identity_policy' }
    ]}
>
<TabItem value="delete_email_identity_policy">

Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist. This API is for the identity owner only. If you have not verified the identity, this API will return an error. Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
DELETE FROM aws.sesv2.email_identity_policies
WHERE email_identity = '{{ email_identity }}' --required
AND policy_name = '{{ policy_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
