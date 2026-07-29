--- 
title: public_access_blocks
hide_title: false
hide_table_of_contents: false
keywords:
  - public_access_blocks
  - s3control
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

Creates, updates, deletes, gets or lists a <code>public_access_blocks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="public_access_blocks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.public_access_blocks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_public_access_block"
    values={[
        { label: 'get_public_access_block', value: 'get_public_access_block' }
    ]}
>
<TabItem value="get_public_access_block">

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
    <td><CopyableCode code="block_public_acls" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to TRUE causes the following behavior: PutBucketAcl and PutObjectAcl calls fail if the specified ACL is public. PUT Object calls fail if the request includes a public ACL. PUT Bucket calls fail if the request includes a public ACL. Enabling this setting doesn't affect existing policies or ACLs. This property is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr>
    <td><CopyableCode code="block_public_policy" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies. This property is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr>
    <td><CopyableCode code="ignore_public_acls" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. This property is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr>
    <td><CopyableCode code="restrict_public_buckets" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account. Setting this element to TRUE restricts access to buckets with public policies to only Amazon Web Services service principals and authorized users within this account. Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked. This property is not supported for Amazon S3 on Outposts.</td>
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
    <td><a href="#get_public_access_block"><CopyableCode code="get_public_access_block" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Retrieves the PublicAccessBlock configuration for an Amazon Web Services account. This operation returns the effective account-level configuration, which may inherit from organization-level policies. For more information, see Using Amazon S3 block public access. Related actions include: DeletePublicAccessBlock PutPublicAccessBlock</td>
</tr>
<tr>
    <td><a href="#put_public_access_block"><CopyableCode code="put_public_access_block" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PublicAccessBlockConfiguration"><code>PublicAccessBlockConfiguration</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Creates or modifies the PublicAccessBlock configuration for an Amazon Web Services account. This operation may be restricted when the account is managed by organization-level Block Public Access policies. You might get an Access Denied (403) error when the account is managed by organization-level Block Public Access policies. Organization-level policies override account-level settings, preventing direct account-level modifications. For this operation, users must have the s3:PutAccountPublicAccessBlock permission. For more information, see Using Amazon S3 block public access. Related actions include: GetPublicAccessBlock DeletePublicAccessBlock</td>
</tr>
<tr>
    <td><a href="#delete_public_access_block"><CopyableCode code="delete_public_access_block" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Removes the PublicAccessBlock configuration for an Amazon Web Services account. This operation might be restricted when the account is managed by organization-level Block Public Access policies. You’ll get an Access Denied (403) error when the account is managed by organization-level Block Public Access policies. Organization-level policies override account-level settings, preventing direct account-level modifications. For more information, see Using Amazon S3 block public access. Related actions include: GetPublicAccessBlock PutPublicAccessBlock</td>
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
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The account ID for the Amazon Web Services account whose PublicAccessBlock configuration you want to remove.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_public_access_block"
    values={[
        { label: 'get_public_access_block', value: 'get_public_access_block' }
    ]}
>
<TabItem value="get_public_access_block">

This operation is not supported by directory buckets. Retrieves the PublicAccessBlock configuration for an Amazon Web Services account. This operation returns the effective account-level configuration, which may inherit from organization-level policies. For more information, see Using Amazon S3 block public access. Related actions include: DeletePublicAccessBlock PutPublicAccessBlock

```sql
SELECT
block_public_acls,
block_public_policy,
ignore_public_acls,
restrict_public_buckets
FROM aws.s3control.public_access_blocks
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_public_access_block"
    values={[
        { label: 'put_public_access_block', value: 'put_public_access_block' }
    ]}
>
<TabItem value="put_public_access_block">

This operation is not supported by directory buckets. Creates or modifies the PublicAccessBlock configuration for an Amazon Web Services account. This operation may be restricted when the account is managed by organization-level Block Public Access policies. You might get an Access Denied (403) error when the account is managed by organization-level Block Public Access policies. Organization-level policies override account-level settings, preventing direct account-level modifications. For this operation, users must have the s3:PutAccountPublicAccessBlock permission. For more information, see Using Amazon S3 block public access. Related actions include: GetPublicAccessBlock DeletePublicAccessBlock

```sql
REPLACE aws.s3control.public_access_blocks
SET 
PublicAccessBlockConfiguration = '{{ PublicAccessBlockConfiguration }}'
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required
AND PublicAccessBlockConfiguration = '{{ PublicAccessBlockConfiguration }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_public_access_block"
    values={[
        { label: 'delete_public_access_block', value: 'delete_public_access_block' }
    ]}
>
<TabItem value="delete_public_access_block">

This operation is not supported by directory buckets. Removes the PublicAccessBlock configuration for an Amazon Web Services account. This operation might be restricted when the account is managed by organization-level Block Public Access policies. You’ll get an Access Denied (403) error when the account is managed by organization-level Block Public Access policies. Organization-level policies override account-level settings, preventing direct account-level modifications. For more information, see Using Amazon S3 block public access. Related actions include: GetPublicAccessBlock PutPublicAccessBlock

```sql
DELETE FROM aws.s3control.public_access_blocks
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
