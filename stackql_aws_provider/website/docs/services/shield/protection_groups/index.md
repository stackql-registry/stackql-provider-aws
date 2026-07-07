--- 
title: protection_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - protection_groups
  - shield
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

Creates, updates, deletes, gets or lists a <code>protection_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="protection_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.shield.protection_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_protection_group"
    values={[
        { label: 'describe_protection_group', value: 'describe_protection_group' },
        { label: 'list_protection_groups', value: 'list_protection_groups' }
    ]}
>
<TabItem value="describe_protection_group">

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
    <td><CopyableCode code="Aggregation" /></td>
    <td><code>string</code></td>
    <td>Defines how Shield combines resource data for the group in order to detect, mitigate, and report events. Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically. Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers. Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront distributions and origin resources for CloudFront distributions. (SUM, MEAN, MAX)</td>
</tr>
<tr>
    <td><CopyableCode code="Members" /></td>
    <td><code>array</code></td>
    <td>The ARNs (Amazon Resource Names) of the resources to include in the protection group. You must set this when you set Pattern to ARBITRARY and you must not set it for any other Pattern setting.</td>
</tr>
<tr>
    <td><CopyableCode code="Pattern" /></td>
    <td><code>string</code></td>
    <td>The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource ARNs (Amazon Resource Names), or include all resources of a specified resource type. (ALL, ARBITRARY, BY_RESOURCE_TYPE)</td>
</tr>
<tr>
    <td><CopyableCode code="ProtectionGroupArn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the protection group. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProtectionGroupId" /></td>
    <td><code>string</code></td>
    <td>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type to include in the protection group. All protected resources of this type are included in the protection group. You must set this when you set Pattern to BY_RESOURCE_TYPE and you must not set it for any other Pattern setting. (CLOUDFRONT_DISTRIBUTION, ROUTE_53_HOSTED_ZONE, ELASTIC_IP_ALLOCATION, CLASSIC_LOAD_BALANCER, APPLICATION_LOAD_BALANCER, GLOBAL_ACCELERATOR)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_protection_groups">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>When you request a list of objects from Shield Advanced, if the response does not include all of the remaining available objects, Shield Advanced includes a NextToken value in the response. You can retrieve the next batch of objects by requesting the list again and providing the token that was returned by the prior call in your request. You can indicate the maximum number of objects that you want Shield Advanced to return for a single call with the MaxResults setting. Shield Advanced will not return more than MaxResults objects, but may return fewer, even if more objects are still available. Whenever more objects remain that Shield Advanced has not yet returned to you, the response will include a NextToken value. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProtectionGroups" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#describe_protection_group"><CopyableCode code="describe_protection_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the specification for the specified protection group.</td>
</tr>
<tr>
    <td><a href="#list_protection_groups"><CopyableCode code="list_protection_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves ProtectionGroup objects for the account. You can retrieve all protection groups or you can provide filtering criteria and retrieve just the subset of protection groups that match the criteria.</td>
</tr>
<tr>
    <td><a href="#create_protection_group"><CopyableCode code="create_protection_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProtectionGroupId"><code>ProtectionGroupId</code></a>, <a href="#parameter-Aggregation"><code>Aggregation</code></a>, <a href="#parameter-Pattern"><code>Pattern</code></a></td>
    <td></td>
    <td>Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives.</td>
</tr>
<tr>
    <td><a href="#update_protection_group"><CopyableCode code="update_protection_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProtectionGroupId"><code>ProtectionGroupId</code></a>, <a href="#parameter-Aggregation"><code>Aggregation</code></a>, <a href="#parameter-Pattern"><code>Pattern</code></a></td>
    <td></td>
    <td>Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives.</td>
</tr>
<tr>
    <td><a href="#delete_protection_group"><CopyableCode code="delete_protection_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified protection group.</td>
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
    defaultValue="describe_protection_group"
    values={[
        { label: 'describe_protection_group', value: 'describe_protection_group' },
        { label: 'list_protection_groups', value: 'list_protection_groups' }
    ]}
>
<TabItem value="describe_protection_group">

Returns the specification for the specified protection group.

```sql
SELECT
Aggregation,
Members,
Pattern,
ProtectionGroupArn,
ProtectionGroupId,
ResourceType
FROM aws.shield.protection_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_protection_groups">

Retrieves ProtectionGroup objects for the account. You can retrieve all protection groups or you can provide filtering criteria and retrieve just the subset of protection groups that match the criteria.

```sql
SELECT
NextToken,
ProtectionGroups
FROM aws.shield.protection_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_protection_group"
    values={[
        { label: 'create_protection_group', value: 'create_protection_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_protection_group">

Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives.

```sql
INSERT INTO aws.shield.protection_groups (
ProtectionGroupId,
Aggregation,
Pattern,
ResourceType,
Members,
Tags,
region
)
SELECT 
'{{ ProtectionGroupId }}' /* required */,
'{{ Aggregation }}' /* required */,
'{{ Pattern }}' /* required */,
'{{ ResourceType }}',
'{{ Members }}',
'{{ Tags }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: protection_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the protection_groups resource.
    - name: ProtectionGroupId
      value: "{{ ProtectionGroupId }}"
      description: |
        The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it.
    - name: Aggregation
      value: "{{ Aggregation }}"
      description: |
        Defines how Shield combines resource data for the group in order to detect, mitigate, and report events. Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically. Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers. Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront and origin resources for CloudFront distributions.
      valid_values: ['SUM', 'MEAN', 'MAX']
    - name: Pattern
      value: "{{ Pattern }}"
      description: |
        The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type.
      valid_values: ['ALL', 'ARBITRARY', 'BY_RESOURCE_TYPE']
    - name: ResourceType
      value: "{{ ResourceType }}"
      description: |
        The resource type to include in the protection group. All protected resources of this type are included in the protection group. Newly protected resources of this type are automatically added to the group. You must set this when you set Pattern to BY_RESOURCE_TYPE and you must not set it for any other Pattern setting.
      valid_values: ['CLOUDFRONT_DISTRIBUTION', 'ROUTE_53_HOSTED_ZONE', 'ELASTIC_IP_ALLOCATION', 'CLASSIC_LOAD_BALANCER', 'APPLICATION_LOAD_BALANCER', 'GLOBAL_ACCELERATOR']
    - name: Members
      value:
        - "{{ Members }}"
      description: |
        The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set Pattern to ARBITRARY and you must not set it for any other Pattern setting.
    - name: Tags
      description: |
        One or more tag key-value pairs for the protection group.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_protection_group"
    values={[
        { label: 'update_protection_group', value: 'update_protection_group' }
    ]}
>
<TabItem value="update_protection_group">

Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives.

```sql
UPDATE aws.shield.protection_groups
SET 
ProtectionGroupId = '{{ ProtectionGroupId }}',
Aggregation = '{{ Aggregation }}',
Pattern = '{{ Pattern }}',
ResourceType = '{{ ResourceType }}',
Members = '{{ Members }}'
WHERE 
region = '{{ region }}' --required
AND ProtectionGroupId = '{{ ProtectionGroupId }}' --required
AND Aggregation = '{{ Aggregation }}' --required
AND Pattern = '{{ Pattern }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_protection_group"
    values={[
        { label: 'delete_protection_group', value: 'delete_protection_group' }
    ]}
>
<TabItem value="delete_protection_group">

Removes the specified protection group.

```sql
DELETE FROM aws.shield.protection_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
