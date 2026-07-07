--- 
title: domain_permissions_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_permissions_policies
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

Creates, updates, deletes, gets or lists a <code>domain_permissions_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_permissions_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.domain_permissions_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain_permissions_policy"
    values={[
        { label: 'get_domain_permissions_policy', value: 'get_domain_permissions_policy' }
    ]}
>
<TabItem value="get_domain_permissions_policy">

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
    <td><a href="#get_domain_permissions_policy"><CopyableCode code="get_domain_permissions_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Returns the resource policy attached to the specified domain. The policy is a resource-based policy, not an identity-based policy. For more information, see Identity-based policies and resource-based policies in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#put_domain_permissions_policy"><CopyableCode code="put_domain_permissions_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-policyDocument"><code>policyDocument</code></a></td>
    <td></td>
    <td>Sets a resource policy on a domain that specifies permissions to access it. When you call PutDomainPermissionsPolicy, the resource policy on the domain is ignored when evaluting permissions. This ensures that the owner of a domain cannot lock themselves out of the domain, which would prevent them from being able to update the resource policy.</td>
</tr>
<tr>
    <td><a href="#delete_domain_permissions_policy"><CopyableCode code="delete_domain_permissions_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-policy-revision"><code>policy-revision</code></a></td>
    <td>Deletes the resource policy set on a domain.</td>
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
    <td>The name of the domain associated with the resource policy to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-domain-owner">
    <td><CopyableCode code="domain-owner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.</td>
</tr>
<tr id="parameter-policy-revision">
    <td><CopyableCode code="policy-revision" /></td>
    <td><code>string</code></td>
    <td>The current revision of the resource policy to be deleted. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_domain_permissions_policy"
    values={[
        { label: 'get_domain_permissions_policy', value: 'get_domain_permissions_policy' }
    ]}
>
<TabItem value="get_domain_permissions_policy">

Returns the resource policy attached to the specified domain. The policy is a resource-based policy, not an identity-based policy. For more information, see Identity-based policies and resource-based policies in the IAM User Guide.

```sql
SELECT
document,
resourceArn,
revision
FROM aws.codeartifact.domain_permissions_policies
WHERE domain = '{{ domain }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_domain_permissions_policy"
    values={[
        { label: 'put_domain_permissions_policy', value: 'put_domain_permissions_policy' }
    ]}
>
<TabItem value="put_domain_permissions_policy">

Sets a resource policy on a domain that specifies permissions to access it. When you call PutDomainPermissionsPolicy, the resource policy on the domain is ignored when evaluting permissions. This ensures that the owner of a domain cannot lock themselves out of the domain, which would prevent them from being able to update the resource policy.

```sql
REPLACE aws.codeartifact.domain_permissions_policies
SET 
domain = '{{ domain }}',
domainOwner = '{{ domainOwner }}',
policyRevision = '{{ policyRevision }}',
policyDocument = '{{ policyDocument }}'
WHERE 
region = '{{ region }}' --required
AND domain = '{{ domain }}' --required
AND policyDocument = '{{ policyDocument }}' --required
RETURNING
policy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain_permissions_policy"
    values={[
        { label: 'delete_domain_permissions_policy', value: 'delete_domain_permissions_policy' }
    ]}
>
<TabItem value="delete_domain_permissions_policy">

Deletes the resource policy set on a domain.

```sql
DELETE FROM aws.codeartifact.domain_permissions_policies
WHERE domain = '{{ domain }}' --required
AND region = '{{ region }}' --required
AND `domain-owner` = '{{ domain-owner }}'
AND `policy-revision` = '{{ policy-revision }}'
;
```
</TabItem>
</Tabs>
