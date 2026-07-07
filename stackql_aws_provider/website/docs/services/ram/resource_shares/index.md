--- 
title: resource_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_shares
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

Creates, updates, deletes, gets or lists a <code>resource_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ram.resource_shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_shares"
    values={[
        { label: 'get_resource_shares', value: 'get_resource_shares' }
    ]}
>
<TabItem value="get_resource_shares">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="allowExternalPrincipals" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether principals outside your organization in Organizations can be associated with a resource share. True – the resource share can be shared with any Amazon Web Services account. False – the resource share can be shared with only accounts in the same organization as the account that owns the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the resource share was created.</td>
</tr>
<tr>
    <td><CopyableCode code="featureSet" /></td>
    <td><code>string</code></td>
    <td>Indicates what features are available for this resource share. This parameter can have one of the following values: STANDARD – A resource share that supports all functionality. These resource shares are visible to all principals you share the resource share with. You can modify these resource shares in RAM using the console or APIs. This resource share might have been created by RAM, or it might have been CREATED_FROM_POLICY and then promoted. CREATED_FROM_POLICY – The customer manually shared a resource by attaching a resource-based policy. That policy did not match any existing managed permissions, so RAM created this customer managed permission automatically on the customer's behalf based on the attached policy document. This type of resource share is visible only to the Amazon Web Services account that created it. You can't modify it in RAM unless you promote it. For more information, see PromoteResourceShareCreatedFromPolicy. PROMOTING_TO_STANDARD – This resource share was originally CREATED_FROM_POLICY, but the customer ran the PromoteResourceShareCreatedFromPolicy and that operation is still in progress. This value changes to STANDARD when complete. (CREATED_FROM_POLICY, PROMOTING_TO_STANDARD, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the resource share was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="owningAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceShareArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource share</td>
</tr>
<tr>
    <td><CopyableCode code="resourceShareConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the resource share</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the resource share. (PENDING, ACTIVE, FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A message about the status of the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag key and value pairs attached to the resource share.</td>
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
    <td><a href="#get_resource_shares"><CopyableCode code="get_resource_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about the resource shares that you own or that are shared with you. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.</td>
</tr>
<tr>
    <td><a href="#create_resource_share"><CopyableCode code="create_resource_share" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a resource share. You can provide a list of the Amazon Resource Names (ARNs) for the resources that you want to share, a list of principals you want to share the resources with, the permissions to grant those principals, and optionally source constraints to enhance security for service principal sharing. Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</td>
</tr>
<tr>
    <td><a href="#associate_resource_share"><CopyableCode code="associate_resource_share" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceShareArn"><code>resourceShareArn</code></a></td>
    <td></td>
    <td>Adds the specified list of principals, resources, and source constraints to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share.</td>
</tr>
<tr>
    <td><a href="#delete_resource_share"><CopyableCode code="delete_resource_share" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resourceShareArn"><code>resourceShareArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes the specified resource share. This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share.</td>
</tr>
<tr>
    <td><a href="#accept_resource_share_invitation"><CopyableCode code="accept_resource_share_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceShareInvitationArn"><code>resourceShareInvitationArn</code></a></td>
    <td></td>
    <td>Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.</td>
</tr>
<tr>
    <td><a href="#disassociate_resource_share"><CopyableCode code="disassociate_resource_share" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceShareArn"><code>resourceShareArn</code></a></td>
    <td></td>
    <td>Removes the specified principals, resources, or source constraints from participating in the specified resource share.</td>
</tr>
<tr>
    <td><a href="#promote_resource_share_created_from_policy"><CopyableCode code="promote_resource_share_created_from_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-resourceShareArn"><code>resourceShareArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of featureSet=CREATED_FROM_POLICY with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM. This operation promotes the resource share to a STANDARD resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with. Before you perform this operation, you should first run PromotePermissionCreatedFromPolicyto ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing CREATED_FROM_POLICY permission, then this operation fails.</td>
</tr>
<tr>
    <td><a href="#reject_resource_share_invitation"><CopyableCode code="reject_resource_share_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceShareInvitationArn"><code>resourceShareInvitationArn</code></a></td>
    <td></td>
    <td>Rejects an invitation to a resource share from another Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#update_resource_share"><CopyableCode code="update_resource_share" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceShareArn"><code>resourceShareArn</code></a></td>
    <td></td>
    <td>Modifies some of the properties of the specified resource share.</td>
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
<tr id="parameter-resourceShareArn">
    <td><CopyableCode code="resourceShareArn" /></td>
    <td><code>string</code></td>
    <td>Specifies the Amazon Resource Name (ARN) of the resource share to promote.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_shares"
    values={[
        { label: 'get_resource_shares', value: 'get_resource_shares' }
    ]}
>
<TabItem value="get_resource_shares">

Retrieves details about the resource shares that you own or that are shared with you. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.

```sql
SELECT
name,
allowExternalPrincipals,
creationTime,
featureSet,
lastUpdatedTime,
owningAccountId,
resourceShareArn,
resourceShareConfiguration,
status,
statusMessage,
tags
FROM aws.ram.resource_shares
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource_share"
    values={[
        { label: 'create_resource_share', value: 'create_resource_share' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource_share">

Creates a resource share. You can provide a list of the Amazon Resource Names (ARNs) for the resources that you want to share, a list of principals you want to share the resources with, the permissions to grant those principals, and optionally source constraints to enhance security for service principal sharing. Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.

```sql
INSERT INTO aws.ram.resource_shares (
name,
resourceArns,
principals,
tags,
allowExternalPrincipals,
clientToken,
permissionArns,
sources,
resourceShareConfiguration,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ resourceArns }}',
'{{ principals }}',
'{{ tags }}',
{{ allowExternalPrincipals }},
'{{ clientToken }}',
'{{ permissionArns }}',
'{{ sources }}',
'{{ resourceShareConfiguration }}',
'{{ region }}'
RETURNING
clientToken,
resourceShare
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_shares
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resource_shares resource.
    - name: name
      value: "{{ name }}"
    - name: resourceArns
      value:
        - "{{ resourceArns }}"
    - name: principals
      value:
        - "{{ principals }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: allowExternalPrincipals
      value: {{ allowExternalPrincipals }}
    - name: clientToken
      value: "{{ clientToken }}"
    - name: permissionArns
      value:
        - "{{ permissionArns }}"
    - name: sources
      value:
        - "{{ sources }}"
    - name: resourceShareConfiguration
      description: |
        The configuration of the resource share
      value:
        retainSharingOnAccountLeaveOrganization: {{ retainSharingOnAccountLeaveOrganization }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_resource_share"
    values={[
        { label: 'associate_resource_share', value: 'associate_resource_share' }
    ]}
>
<TabItem value="associate_resource_share">

Adds the specified list of principals, resources, and source constraints to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share.

```sql
UPDATE aws.ram.resource_shares
SET 
resourceShareArn = '{{ resourceShareArn }}',
resourceArns = '{{ resourceArns }}',
principals = '{{ principals }}',
clientToken = '{{ clientToken }}',
sources = '{{ sources }}'
WHERE 
region = '{{ region }}' --required
AND resourceShareArn = '{{ resourceShareArn }}' --required
RETURNING
clientToken,
resourceShareAssociations;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_share"
    values={[
        { label: 'delete_resource_share', value: 'delete_resource_share' }
    ]}
>
<TabItem value="delete_resource_share">

Deletes the specified resource share. This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share.

```sql
DELETE FROM aws.ram.resource_shares
WHERE resourceShareArn = '{{ resourceShareArn }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_resource_share_invitation"
    values={[
        { label: 'accept_resource_share_invitation', value: 'accept_resource_share_invitation' },
        { label: 'disassociate_resource_share', value: 'disassociate_resource_share' },
        { label: 'promote_resource_share_created_from_policy', value: 'promote_resource_share_created_from_policy' },
        { label: 'reject_resource_share_invitation', value: 'reject_resource_share_invitation' },
        { label: 'update_resource_share', value: 'update_resource_share' }
    ]}
>
<TabItem value="accept_resource_share_invitation">

Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.

```sql
EXEC aws.ram.resource_shares.accept_resource_share_invitation 
@region='{{ region }}' --required 
@@json=
'{
"resourceShareInvitationArn": "{{ resourceShareInvitationArn }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_resource_share">

Removes the specified principals, resources, or source constraints from participating in the specified resource share.

```sql
EXEC aws.ram.resource_shares.disassociate_resource_share 
@region='{{ region }}' --required 
@@json=
'{
"resourceShareArn": "{{ resourceShareArn }}", 
"resourceArns": "{{ resourceArns }}", 
"principals": "{{ principals }}", 
"clientToken": "{{ clientToken }}", 
"sources": "{{ sources }}"
}'
;
```
</TabItem>
<TabItem value="promote_resource_share_created_from_policy">

When you attach a resource-based policy to a resource, RAM automatically creates a resource share of featureSet=CREATED_FROM_POLICY with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM. This operation promotes the resource share to a STANDARD resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with. Before you perform this operation, you should first run PromotePermissionCreatedFromPolicyto ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing CREATED_FROM_POLICY permission, then this operation fails.

```sql
EXEC aws.ram.resource_shares.promote_resource_share_created_from_policy 
@resourceShareArn='{{ resourceShareArn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="reject_resource_share_invitation">

Rejects an invitation to a resource share from another Amazon Web Services account.

```sql
EXEC aws.ram.resource_shares.reject_resource_share_invitation 
@region='{{ region }}' --required 
@@json=
'{
"resourceShareInvitationArn": "{{ resourceShareInvitationArn }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="update_resource_share">

Modifies some of the properties of the specified resource share.

```sql
EXEC aws.ram.resource_shares.update_resource_share 
@region='{{ region }}' --required 
@@json=
'{
"resourceShareArn": "{{ resourceShareArn }}", 
"name": "{{ name }}", 
"allowExternalPrincipals": {{ allowExternalPrincipals }}, 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
