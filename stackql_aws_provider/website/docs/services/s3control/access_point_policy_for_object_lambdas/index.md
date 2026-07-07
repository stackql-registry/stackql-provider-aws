--- 
title: access_point_policy_for_object_lambdas
hide_title: false
hide_table_of_contents: false
keywords:
  - access_point_policy_for_object_lambdas
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

Creates, updates, deletes, gets or lists an <code>access_point_policy_for_object_lambdas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_point_policy_for_object_lambdas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.access_point_policy_for_object_lambdas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_point_policy_for_object_lambda"
    values={[
        { label: 'get_access_point_policy_for_object_lambda', value: 'get_access_point_policy_for_object_lambda' }
    ]}
>
<TabItem value="get_access_point_policy_for_object_lambda">

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
    <td>Object Lambda Access Point resource policy document.</td>
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
    <td><a href="#get_access_point_policy_for_object_lambda"><CopyableCode code="get_access_point_policy_for_object_lambda" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Returns the resource policy for an Object Lambda Access Point. The following actions are related to GetAccessPointPolicyForObjectLambda: DeleteAccessPointPolicyForObjectLambda PutAccessPointPolicyForObjectLambda</td>
</tr>
<tr>
    <td><a href="#put_access_point_policy_for_object_lambda"><CopyableCode code="put_access_point_policy_for_object_lambda" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see Creating Object Lambda Access Points in the Amazon S3 User Guide. The following actions are related to PutAccessPointPolicyForObjectLambda: DeleteAccessPointPolicyForObjectLambda GetAccessPointPolicyForObjectLambda</td>
</tr>
<tr>
    <td><a href="#delete_access_point_policy_for_object_lambda"><CopyableCode code="delete_access_point_policy_for_object_lambda" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Removes the resource policy for an Object Lambda Access Point. The following actions are related to DeleteAccessPointPolicyForObjectLambda: GetAccessPointPolicyForObjectLambda PutAccessPointPolicyForObjectLambda</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Object Lambda Access Point you want to delete the policy for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The account ID for the account that owns the specified Object Lambda Access Point.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_access_point_policy_for_object_lambda"
    values={[
        { label: 'get_access_point_policy_for_object_lambda', value: 'get_access_point_policy_for_object_lambda' }
    ]}
>
<TabItem value="get_access_point_policy_for_object_lambda">

This operation is not supported by directory buckets. Returns the resource policy for an Object Lambda Access Point. The following actions are related to GetAccessPointPolicyForObjectLambda: DeleteAccessPointPolicyForObjectLambda PutAccessPointPolicyForObjectLambda

```sql
SELECT
Policy
FROM aws.s3control.access_point_policy_for_object_lambdas
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_access_point_policy_for_object_lambda"
    values={[
        { label: 'put_access_point_policy_for_object_lambda', value: 'put_access_point_policy_for_object_lambda' }
    ]}
>
<TabItem value="put_access_point_policy_for_object_lambda">

This operation is not supported by directory buckets. Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see Creating Object Lambda Access Points in the Amazon S3 User Guide. The following actions are related to PutAccessPointPolicyForObjectLambda: DeleteAccessPointPolicyForObjectLambda GetAccessPointPolicyForObjectLambda

```sql
REPLACE aws.s3control.access_point_policy_for_object_lambdas
SET 
Policy = '{{ Policy }}'
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_point_policy_for_object_lambda"
    values={[
        { label: 'delete_access_point_policy_for_object_lambda', value: 'delete_access_point_policy_for_object_lambda' }
    ]}
>
<TabItem value="delete_access_point_policy_for_object_lambda">

This operation is not supported by directory buckets. Removes the resource policy for an Object Lambda Access Point. The following actions are related to DeleteAccessPointPolicyForObjectLambda: GetAccessPointPolicyForObjectLambda PutAccessPointPolicyForObjectLambda

```sql
DELETE FROM aws.s3control.access_point_policy_for_object_lambdas
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
