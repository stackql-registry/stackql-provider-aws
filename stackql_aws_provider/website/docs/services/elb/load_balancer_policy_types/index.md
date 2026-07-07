--- 
title: load_balancer_policy_types
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancer_policy_types
  - elb
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

Creates, updates, deletes, gets or lists a <code>load_balancer_policy_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="load_balancer_policy_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elb.load_balancer_policy_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_load_balancer_policy_types"
    values={[
        { label: 'describe_load_balancer_policy_types', value: 'describe_load_balancer_policy_types' }
    ]}
>
<TabItem value="describe_load_balancer_policy_types">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the policy type.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyAttributeTypeDescriptions" /></td>
    <td><code>string</code></td>
    <td>The description of the policy attributes associated with the policies defined by Elastic Load Balancing.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyTypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the policy type.</td>
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
    <td><a href="#describe_load_balancer_policy_types"><CopyableCode code="describe_load_balancer_policy_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PolicyTypeNames"><code>PolicyTypeNames</code></a></td>
    <td>Describes the specified load balancer policy types or all load balancer policy types. The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances. You can use CreateLoadBalancerPolicy to create a policy configuration for any of these policy types. Then, depending on the policy type, use either SetLoadBalancerPoliciesOfListener or SetLoadBalancerPoliciesForBackendServer to set the policy.</td>
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
<tr id="parameter-PolicyTypeNames">
    <td><CopyableCode code="PolicyTypeNames" /></td>
    <td><code>array</code></td>
    <td>The names of the policy types. If no names are specified, describes all policy types defined by Elastic Load Balancing.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_load_balancer_policy_types"
    values={[
        { label: 'describe_load_balancer_policy_types', value: 'describe_load_balancer_policy_types' }
    ]}
>
<TabItem value="describe_load_balancer_policy_types">

Describes the specified load balancer policy types or all load balancer policy types. The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances. You can use CreateLoadBalancerPolicy to create a policy configuration for any of these policy types. Then, depending on the policy type, use either SetLoadBalancerPoliciesOfListener or SetLoadBalancerPoliciesForBackendServer to set the policy.

```sql
SELECT
Description,
PolicyAttributeTypeDescriptions,
PolicyTypeName
FROM aws.elb.load_balancer_policy_types
WHERE region = '{{ region }}' -- required
AND PolicyTypeNames = '{{ PolicyTypeNames }}'
;
```
</TabItem>
</Tabs>
