--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - logs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.resource_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_resource_policies"
    values={[
        { label: 'describe_resource_policies', value: 'describe_resource_policies' }
    ]}
>
<TabItem value="describe_resource_policies">

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
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Timestamp showing when this policy was last updated, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_document" /></td>
    <td><code>string</code></td>
    <td>The details of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_scope" /></td>
    <td><code>string</code></td>
    <td>Specifies scope of the resource policy. Valid values are ACCOUNT or RESOURCE. (ACCOUNT, RESOURCE)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the CloudWatch Logs resource to which the resource policy is attached. Only populated for resource-scoped policies.</td>
</tr>
<tr>
    <td><CopyableCode code="revision_id" /></td>
    <td><code>string</code></td>
    <td>The revision ID of the resource policy. Only populated for resource-scoped policies.</td>
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
    <td><a href="#describe_resource_policies"><CopyableCode code="describe_resource_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the resource policies in this account.</td>
</tr>
<tr>
    <td><a href="#put_resource_policy"><CopyableCode code="put_resource_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates or updates a resource policy allowing other Amazon Web Services services to put log events to this account, such as Amazon Route 53. This API has the following restrictions: Supported actions - Policy only supports logs:PutLogEvents and logs:CreateLogStream actions Supported principals - Policy only applies when operations are invoked by Amazon Web Services service principals (not IAM users, roles, or cross-account principals Policy limits - An account can have a maximum of 10 policies without resourceARN and one per LogGroup resourceARN Resource policies with actions invoked by non-Amazon Web Services service principals (such as IAM users, roles, or other Amazon Web Services accounts) will not be enforced. For access control involving these principals, use the IAM policies.</td>
</tr>
<tr>
    <td><a href="#delete_resource_policy"><CopyableCode code="delete_resource_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account.</td>
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
    defaultValue="describe_resource_policies"
    values={[
        { label: 'describe_resource_policies', value: 'describe_resource_policies' }
    ]}
>
<TabItem value="describe_resource_policies">

Lists the resource policies in this account.

```sql
SELECT
last_updated_time,
policy_document,
policy_name,
policy_scope,
resource_arn,
revision_id
FROM aws.logs.resource_policies
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

Creates or updates a resource policy allowing other Amazon Web Services services to put log events to this account, such as Amazon Route 53. This API has the following restrictions: Supported actions - Policy only supports logs:PutLogEvents and logs:CreateLogStream actions Supported principals - Policy only applies when operations are invoked by Amazon Web Services service principals (not IAM users, roles, or cross-account principals Policy limits - An account can have a maximum of 10 policies without resourceARN and one per LogGroup resourceARN Resource policies with actions invoked by non-Amazon Web Services service principals (such as IAM users, roles, or other Amazon Web Services accounts) will not be enforced. For access control involving these principals, use the IAM policies.

```sql
REPLACE aws.logs.resource_policies
SET 
policyName = '{{ policyName }}',
policyDocument = '{{ policyDocument }}',
resourceArn = '{{ resourceArn }}',
expectedRevisionId = '{{ expectedRevisionId }}'
WHERE 
region = '{{ region }}' --required
RETURNING
resource_policy,
revision_id;
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

Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account.

```sql
DELETE FROM aws.logs.resource_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
