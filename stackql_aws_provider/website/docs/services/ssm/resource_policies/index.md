--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - ssm
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

Creates, updates, deletes, gets or lists a <code>resource_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.resource_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_policies"
    values={[
        { label: 'get_resource_policies', value: 'get_resource_policies' }
    ]}
>
<TabItem value="get_resource_policies">

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
    <td><CopyableCode code="Policy" /></td>
    <td><code>string</code></td>
    <td>A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, OpsItemGroup is the only resource that supports Systems Manager resource policies. The resource policy for OpsItemGroup enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems). (pattern: &lt;code&gt;^(?!\s*$).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyHash" /></td>
    <td><code>string</code></td>
    <td>ID of the current policy version. The hash helps to prevent a situation where multiple users attempt to overwrite a policy. You must provide this hash when updating or deleting a policy.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyId" /></td>
    <td><code>string</code></td>
    <td>A policy ID.</td>
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
    <td><a href="#get_resource_policies"><CopyableCode code="get_resource_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of the Policy object.</td>
</tr>
<tr>
    <td><a href="#put_resource_policy"><CopyableCode code="put_resource_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. The following resources support Systems Manager resource policies. OpsItemGroup - The resource policy for OpsItemGroup enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems). Parameter - The resource policy is used to share a parameter with other accounts using Resource Access Manager (RAM). To share a parameter, it must be in the advanced parameter tier. For information about parameter tiers, see Managing parameter tiers. For information about changing an existing standard parameter to an advanced parameter, see Changing a standard parameter to an advanced parameter. To share a SecureString parameter, it must be encrypted with a customer managed key, and you must share the key separately through Key Management Service. Amazon Web Services managed keys cannot be shared. Parameters encrypted with the default Amazon Web Services managed key can be updated to use a customer managed key instead. For KMS key definitions, see KMS concepts in the Key Management Service Developer Guide. While you can share a parameter using the Systems Manager PutResourcePolicy operation, we recommend using Resource Access Manager (RAM) instead. This is because using PutResourcePolicy requires the extra step of promoting the parameter to a standard RAM Resource Share using the RAM PromoteResourceShareCreatedFromPolicy API operation. Otherwise, the parameter won't be returned by the Systems Manager DescribeParameters API operation using the --shared option. For more information, see Sharing a parameter in the Amazon Web Services Systems Manager User Guide</td>
</tr>
<tr>
    <td><a href="#delete_resource_policy"><CopyableCode code="delete_resource_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. The following resources support Systems Manager resource policies. OpsItemGroup - The resource policy for OpsItemGroup enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems). Parameter - The resource policy is used to share a parameter with other accounts using Resource Access Manager (RAM). For more information about cross-account sharing of parameters, see Working with shared parameters in the Amazon Web Services Systems Manager User Guide.</td>
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
    defaultValue="get_resource_policies"
    values={[
        { label: 'get_resource_policies', value: 'get_resource_policies' }
    ]}
>
<TabItem value="get_resource_policies">

Returns an array of the Policy object.

```sql
SELECT
Policy,
PolicyHash,
PolicyId
FROM aws.ssm.resource_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_resource_policy"
    values={[
        { label: 'put_resource_policy', value: 'put_resource_policy' }
    ]}
>
<TabItem value="put_resource_policy">

Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. The following resources support Systems Manager resource policies. OpsItemGroup - The resource policy for OpsItemGroup enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems). Parameter - The resource policy is used to share a parameter with other accounts using Resource Access Manager (RAM). To share a parameter, it must be in the advanced parameter tier. For information about parameter tiers, see Managing parameter tiers. For information about changing an existing standard parameter to an advanced parameter, see Changing a standard parameter to an advanced parameter. To share a SecureString parameter, it must be encrypted with a customer managed key, and you must share the key separately through Key Management Service. Amazon Web Services managed keys cannot be shared. Parameters encrypted with the default Amazon Web Services managed key can be updated to use a customer managed key instead. For KMS key definitions, see KMS concepts in the Key Management Service Developer Guide. While you can share a parameter using the Systems Manager PutResourcePolicy operation, we recommend using Resource Access Manager (RAM) instead. This is because using PutResourcePolicy requires the extra step of promoting the parameter to a standard RAM Resource Share using the RAM PromoteResourceShareCreatedFromPolicy API operation. Otherwise, the parameter won't be returned by the Systems Manager DescribeParameters API operation using the --shared option. For more information, see Sharing a parameter in the Amazon Web Services Systems Manager User Guide

```sql
REPLACE aws.ssm.resource_policies
SET 
ResourceArn = '{{ ResourceArn }}',
Policy = '{{ Policy }}',
PolicyId = '{{ PolicyId }}',
PolicyHash = '{{ PolicyHash }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
RETURNING
PolicyHash,
PolicyId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_policy"
    values={[
        { label: 'delete_resource_policy', value: 'delete_resource_policy' }
    ]}
>
<TabItem value="delete_resource_policy">

Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. The following resources support Systems Manager resource policies. OpsItemGroup - The resource policy for OpsItemGroup enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems). Parameter - The resource policy is used to share a parameter with other accounts using Resource Access Manager (RAM). For more information about cross-account sharing of parameters, see Working with shared parameters in the Amazon Web Services Systems Manager User Guide.

```sql
DELETE FROM aws.ssm.resource_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
