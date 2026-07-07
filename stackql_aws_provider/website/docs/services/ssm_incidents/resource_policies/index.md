--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - ssm_incidents
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_incidents.resource_policies" /></td></tr>
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
    <td><CopyableCode code="policyDocument" /></td>
    <td><code>string</code></td>
    <td>The JSON blob that describes the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource policy.</td>
</tr>
<tr>
    <td><CopyableCode code="ramResourceShareRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region that policy allows resources to be used in.</td>
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
    <td><a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the resource policies attached to the specified response plan.</td>
</tr>
<tr>
    <td><a href="#put_resource_policy"><CopyableCode code="put_resource_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policy"><code>policy</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a></td>
    <td></td>
    <td>Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see Cross-Region and cross-account incident management.</td>
</tr>
<tr>
    <td><a href="#delete_resource_policy"><CopyableCode code="delete_resource_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.</td>
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
<tr id="parameter-resourceArn">
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the response plan with the attached resource policy.</td>
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

Retrieves the resource policies attached to the specified response plan.

```sql
SELECT
policyDocument,
policyId,
ramResourceShareRegion
FROM aws.ssm_incidents.resource_policies
WHERE resourceArn = '{{ resourceArn }}' -- required
AND region = '{{ region }}' -- required
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

Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see Cross-Region and cross-account incident management.

```sql
REPLACE aws.ssm_incidents.resource_policies
SET 
policy = '{{ policy }}',
resourceArn = '{{ resourceArn }}'
WHERE 
region = '{{ region }}' --required
AND policy = '{{ policy }}' --required
AND resourceArn = '{{ resourceArn }}' --required
RETURNING
policyId;
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

Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.

```sql
DELETE FROM aws.ssm_incidents.resource_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
