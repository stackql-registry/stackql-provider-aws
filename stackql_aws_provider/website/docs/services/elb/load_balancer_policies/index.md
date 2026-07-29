--- 
title: load_balancer_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancer_policies
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

Creates, updates, deletes, gets or lists a <code>load_balancer_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="load_balancer_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elb.load_balancer_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_load_balancer_policies"
    values={[
        { label: 'describe_load_balancer_policies', value: 'describe_load_balancer_policies' }
    ]}
>
<TabItem value="describe_load_balancer_policies">

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
    <td><CopyableCode code="policy_attribute_descriptions" /></td>
    <td><code>string</code></td>
    <td>The policy attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_name" /></td>
    <td><code>string</code></td>
    <td>The name of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_type_name" /></td>
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
    <td><a href="#describe_load_balancer_policies"><CopyableCode code="describe_load_balancer_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-PolicyNames"><code>PolicyNames</code></a></td>
    <td>Describes the specified policies. If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the ELBSample- prefix.</td>
</tr>
<tr>
    <td><a href="#create_load_balancer_policy"><CopyableCode code="create_load_balancer_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-PolicyTypeName"><code>PolicyTypeName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PolicyAttributes"><code>PolicyAttributes</code></a></td>
    <td>Creates a policy with the specified attributes for the specified load balancer. Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</td>
</tr>
<tr>
    <td><a href="#set_load_balancer_policies_for_backend_server"><CopyableCode code="set_load_balancer_policies_for_backend_server" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-InstancePort"><code>InstancePort</code></a>, <a href="#parameter-PolicyNames"><code>PolicyNames</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies. Each time you use SetLoadBalancerPoliciesForBackendServer to enable the policies, use the PolicyNames parameter to list the policies that you want to enable. You can use DescribeLoadBalancers or DescribeLoadBalancerPolicies to verify that the policy is associated with the EC2 instance. For more information about enabling back-end instance authentication, see Configure Back-end Instance Authentication in the Classic Load Balancers Guide. For more information about Proxy Protocol, see Configure Proxy Protocol Support in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#set_load_balancer_policies_of_listener"><CopyableCode code="set_load_balancer_policies_of_listener" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-LoadBalancerPort"><code>LoadBalancerPort</code></a>, <a href="#parameter-PolicyNames"><code>PolicyNames</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Replaces the current set of policies for the specified load balancer port with the specified set of policies. To enable back-end server authentication, use SetLoadBalancerPoliciesForBackendServer. For more information about setting policies, see Update the SSL Negotiation Configuration, Duration-Based Session Stickiness, and Application-Controlled Session Stickiness in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#delete_load_balancer_policy"><CopyableCode code="delete_load_balancer_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.</td>
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
<tr id="parameter-InstancePort">
    <td><CopyableCode code="InstancePort" /></td>
    <td><code>integer</code></td>
    <td>The port number associated with the EC2 instance.</td>
</tr>
<tr id="parameter-LoadBalancerName">
    <td><CopyableCode code="LoadBalancerName" /></td>
    <td><code>string</code></td>
    <td>The name of the load balancer.</td>
</tr>
<tr id="parameter-LoadBalancerPort">
    <td><CopyableCode code="LoadBalancerPort" /></td>
    <td><code>integer</code></td>
    <td>The external port of the load balancer.</td>
</tr>
<tr id="parameter-PolicyName">
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>The name of the policy.</td>
</tr>
<tr id="parameter-PolicyNames">
    <td><CopyableCode code="PolicyNames" /></td>
    <td><code>array</code></td>
    <td>The names of the policies. This list must include all policies to be enabled. If you omit a policy that is currently enabled, it is disabled. If the list is empty, all current policies are disabled.</td>
</tr>
<tr id="parameter-PolicyTypeName">
    <td><CopyableCode code="PolicyTypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the base policy type. To get the list of policy types, use DescribeLoadBalancerPolicyTypes.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-LoadBalancerName">
    <td><CopyableCode code="LoadBalancerName" /></td>
    <td><code>string</code></td>
    <td>The name of the load balancer.</td>
</tr>
<tr id="parameter-PolicyAttributes">
    <td><CopyableCode code="PolicyAttributes" /></td>
    <td><code>array</code></td>
    <td>The policy attributes.</td>
</tr>
<tr id="parameter-PolicyNames">
    <td><CopyableCode code="PolicyNames" /></td>
    <td><code>array</code></td>
    <td>The names of the policies.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_load_balancer_policies"
    values={[
        { label: 'describe_load_balancer_policies', value: 'describe_load_balancer_policies' }
    ]}
>
<TabItem value="describe_load_balancer_policies">

Describes the specified policies. If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the ELBSample- prefix.

```sql
SELECT
policy_attribute_descriptions,
policy_name,
policy_type_name
FROM aws.elb.load_balancer_policies
WHERE region = '{{ region }}' -- required
AND LoadBalancerName = '{{ LoadBalancerName }}'
AND PolicyNames = '{{ PolicyNames }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_load_balancer_policy"
    values={[
        { label: 'create_load_balancer_policy', value: 'create_load_balancer_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_load_balancer_policy">

Creates a policy with the specified attributes for the specified load balancer. Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.

```sql
INSERT INTO aws.elb.load_balancer_policies (
LoadBalancerName,
PolicyName,
PolicyTypeName,
region,
PolicyAttributes
)
SELECT 
'{{ LoadBalancerName }}',
'{{ PolicyName }}',
'{{ PolicyTypeName }}',
'{{ region }}',
'{{ PolicyAttributes }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: load_balancer_policies
  props:
    - name: LoadBalancerName
      value: "{{ LoadBalancerName }}"
      description: Required parameter for the load_balancer_policies resource.
    - name: PolicyName
      value: "{{ PolicyName }}"
      description: Required parameter for the load_balancer_policies resource.
    - name: PolicyTypeName
      value: "{{ PolicyTypeName }}"
      description: Required parameter for the load_balancer_policies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the load_balancer_policies resource.
    - name: PolicyAttributes
      value: "{{ PolicyAttributes }}"
      description: The policy attributes.
      description: The policy attributes.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_load_balancer_policies_for_backend_server"
    values={[
        { label: 'set_load_balancer_policies_for_backend_server', value: 'set_load_balancer_policies_for_backend_server' },
        { label: 'set_load_balancer_policies_of_listener', value: 'set_load_balancer_policies_of_listener' }
    ]}
>
<TabItem value="set_load_balancer_policies_for_backend_server">

Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies. Each time you use SetLoadBalancerPoliciesForBackendServer to enable the policies, use the PolicyNames parameter to list the policies that you want to enable. You can use DescribeLoadBalancers or DescribeLoadBalancerPolicies to verify that the policy is associated with the EC2 instance. For more information about enabling back-end instance authentication, see Configure Back-end Instance Authentication in the Classic Load Balancers Guide. For more information about Proxy Protocol, see Configure Proxy Protocol Support in the Classic Load Balancers Guide.

```sql
UPDATE aws.elb.load_balancer_policies
SET 
-- No updatable properties
WHERE 
LoadBalancerName = '{{ LoadBalancerName }}' --required
AND InstancePort = '{{ InstancePort }}' --required
AND PolicyNames = '{{ PolicyNames }}' --required
AND region = '{{ region }}' --required
RETURNING
line_items;
```
</TabItem>
<TabItem value="set_load_balancer_policies_of_listener">

Replaces the current set of policies for the specified load balancer port with the specified set of policies. To enable back-end server authentication, use SetLoadBalancerPoliciesForBackendServer. For more information about setting policies, see Update the SSL Negotiation Configuration, Duration-Based Session Stickiness, and Application-Controlled Session Stickiness in the Classic Load Balancers Guide.

```sql
UPDATE aws.elb.load_balancer_policies
SET 
-- No updatable properties
WHERE 
LoadBalancerName = '{{ LoadBalancerName }}' --required
AND LoadBalancerPort = '{{ LoadBalancerPort }}' --required
AND PolicyNames = '{{ PolicyNames }}' --required
AND region = '{{ region }}' --required
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_load_balancer_policy"
    values={[
        { label: 'delete_load_balancer_policy', value: 'delete_load_balancer_policy' }
    ]}
>
<TabItem value="delete_load_balancer_policy">

Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.

```sql
DELETE FROM aws.elb.load_balancer_policies
WHERE LoadBalancerName = '{{ LoadBalancerName }}' --required
AND PolicyName = '{{ PolicyName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
