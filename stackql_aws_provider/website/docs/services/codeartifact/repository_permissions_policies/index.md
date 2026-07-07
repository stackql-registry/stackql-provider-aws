--- 
title: repository_permissions_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_permissions_policies
  - codeartifact
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

Creates, updates, deletes, gets or lists a <code>repository_permissions_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_permissions_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.repository_permissions_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repository_permissions_policy"
    values={[
        { label: 'get_repository_permissions_policy', value: 'get_repository_permissions_policy' }
    ]}
>
<TabItem value="get_repository_permissions_policy">

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
    <td><CopyableCode code="document" /></td>
    <td><code>string</code></td>
    <td>The resource policy formatted in JSON. (pattern: &lt;code&gt;&#91;\P&#123;C&#125;\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource associated with the resource policy (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The current revision of the resource policy. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
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
    <td><a href="#get_repository_permissions_policy"><CopyableCode code="get_repository_permissions_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Returns the resource policy that is set on a repository.</td>
</tr>
<tr>
    <td><a href="#put_repository_permissions_policy"><CopyableCode code="put_repository_permissions_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyDocument"><code>policyDocument</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Sets the resource policy on a repository that specifies permissions to access it. When you call PutRepositoryPermissionsPolicy, the resource policy on the repository is ignored when evaluting permissions. This ensures that the owner of a repository cannot lock themselves out of the repository, which would prevent them from being able to update the resource policy.</td>
</tr>
<tr>
    <td><a href="#delete_repository_permissions_policy"><CopyableCode code="delete_repository_permissions_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-policy-revision"><code>policy-revision</code></a></td>
    <td>Deletes the resource policy that is set on a repository. After a resource policy is deleted, the permissions allowed and denied by the deleted policy are removed. The effect of deleting a resource policy might not be immediate. Use DeleteRepositoryPermissionsPolicy with caution. After a policy is deleted, Amazon Web Services users, roles, and accounts lose permissions to perform the repository actions granted by the deleted policy.</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that contains the repository associated with the resource policy to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-repository">
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The name of the repository that is associated with the resource policy to be deleted</td>
</tr>
<tr id="parameter-domain-owner">
    <td><CopyableCode code="domain-owner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.</td>
</tr>
<tr id="parameter-policy-revision">
    <td><CopyableCode code="policy-revision" /></td>
    <td><code>string</code></td>
    <td>The revision of the repository's resource policy to be deleted. This revision is used for optimistic locking, which prevents others from accidentally overwriting your changes to the repository's resource policy.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_repository_permissions_policy"
    values={[
        { label: 'get_repository_permissions_policy', value: 'get_repository_permissions_policy' }
    ]}
>
<TabItem value="get_repository_permissions_policy">

Returns the resource policy that is set on a repository.

```sql
SELECT
document,
resourceArn,
revision
FROM aws.codeartifact.repository_permissions_policies
WHERE domain = '{{ domain }}' -- required
AND repository = '{{ repository }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_repository_permissions_policy"
    values={[
        { label: 'put_repository_permissions_policy', value: 'put_repository_permissions_policy' }
    ]}
>
<TabItem value="put_repository_permissions_policy">

Sets the resource policy on a repository that specifies permissions to access it. When you call PutRepositoryPermissionsPolicy, the resource policy on the repository is ignored when evaluting permissions. This ensures that the owner of a repository cannot lock themselves out of the repository, which would prevent them from being able to update the resource policy.

```sql
REPLACE aws.codeartifact.repository_permissions_policies
SET 
policyRevision = '{{ policyRevision }}',
policyDocument = '{{ policyDocument }}'
WHERE 
domain = '{{ domain }}' --required
AND repository = '{{ repository }}' --required
AND region = '{{ region }}' --required
AND policyDocument = '{{ policyDocument }}' --required
AND `domain-owner` = '{{ domain-owner}}'
RETURNING
policy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_repository_permissions_policy"
    values={[
        { label: 'delete_repository_permissions_policy', value: 'delete_repository_permissions_policy' }
    ]}
>
<TabItem value="delete_repository_permissions_policy">

Deletes the resource policy that is set on a repository. After a resource policy is deleted, the permissions allowed and denied by the deleted policy are removed. The effect of deleting a resource policy might not be immediate. Use DeleteRepositoryPermissionsPolicy with caution. After a policy is deleted, Amazon Web Services users, roles, and accounts lose permissions to perform the repository actions granted by the deleted policy.

```sql
DELETE FROM aws.codeartifact.repository_permissions_policies
WHERE domain = '{{ domain }}' --required
AND repository = '{{ repository }}' --required
AND region = '{{ region }}' --required
AND `domain-owner` = '{{ domain-owner }}'
AND `policy-revision` = '{{ policy-revision }}'
;
```
</TabItem>
</Tabs>
