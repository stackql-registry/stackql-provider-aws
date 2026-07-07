--- 
title: keyspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - keyspaces
  - keyspaces
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

Creates, updates, deletes, gets or lists a <code>keyspaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="keyspaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.keyspaces.keyspaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_keyspace"
    values={[
        { label: 'get_keyspace', value: 'get_keyspace' },
        { label: 'list_keyspaces', value: 'list_keyspaces' }
    ]}
>
<TabItem value="get_keyspace">

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
    <td><CopyableCode code="keyspaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the keyspace. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="replicationGroupStatuses" /></td>
    <td><code>array</code></td>
    <td>A list of all Regions the keyspace is replicated in after the update keyspace operation and their status.</td>
</tr>
<tr>
    <td><CopyableCode code="replicationRegions" /></td>
    <td><code>array</code></td>
    <td>If the replicationStrategy of the keyspace is MULTI_REGION, a list of replication Regions is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="replicationStrategy" /></td>
    <td><code>string</code></td>
    <td>Returns the replication strategy of the keyspace. The options are SINGLE_REGION or MULTI_REGION. (SINGLE_REGION, MULTI_REGION)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>Returns the ARN of the keyspace. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):cassandra:.+.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_keyspaces">

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
    <td><CopyableCode code="keyspaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the keyspace. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="replicationRegions" /></td>
    <td><code>array</code></td>
    <td>If the replicationStrategy of the keyspace is MULTI_REGION, a list of replication Regions is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="replicationStrategy" /></td>
    <td><code>string</code></td>
    <td>This property specifies if a keyspace is a single Region keyspace or a multi-Region keyspace. The available values are SINGLE_REGION or MULTI_REGION. (SINGLE_REGION, MULTI_REGION)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the keyspace in the format of an Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):cassandra:.+.*&lt;/code&gt;)</td>
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
    <td><a href="#get_keyspace"><CopyableCode code="get_keyspace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the name of the specified keyspace, the Amazon Resource Name (ARN), the replication strategy, the Amazon Web Services Regions of a multi-Region keyspace, and the status of newly added Regions after an UpdateKeyspace operation.</td>
</tr>
<tr>
    <td><a href="#list_keyspaces"><CopyableCode code="list_keyspaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListKeyspaces operation returns a list of keyspaces.</td>
</tr>
<tr>
    <td><a href="#create_keyspace"><CopyableCode code="create_keyspace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-keyspaceName"><code>keyspaceName</code></a></td>
    <td></td>
    <td>The CreateKeyspace operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names must be unique within each Region. CreateKeyspace is an asynchronous operation. You can monitor the creation status of the new keyspace by using the GetKeyspace operation. For more information, see Create a keyspace in the Amazon Keyspaces Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_keyspace"><CopyableCode code="update_keyspace" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-keyspaceName"><code>keyspaceName</code></a>, <a href="#parameter-replicationSpecification"><code>replicationSpecification</code></a></td>
    <td></td>
    <td>Adds a new Amazon Web Services Region to the keyspace. You can add a new Region to a keyspace that is either a single or a multi-Region keyspace. Amazon Keyspaces is going to replicate all tables in the keyspace to the new Region. To successfully replicate all tables to the new Region, they must use client-side timestamps for conflict resolution. To enable client-side timestamps, specify clientSideTimestamps.status = enabled when invoking the API. For more information about client-side timestamps, see Client-side timestamps in Amazon Keyspaces in the Amazon Keyspaces Developer Guide. To add a Region to a keyspace using the UpdateKeyspace API, the IAM principal needs permissions for the following IAM actions: cassandra:Alter cassandra:AlterMultiRegionResource cassandra:Create cassandra:CreateMultiRegionResource cassandra:Select cassandra:SelectMultiRegionResource cassandra:Modify cassandra:ModifyMultiRegionResource If the keyspace contains a table that is configured in provisioned mode with auto scaling enabled, the following additional IAM actions need to be allowed. application-autoscaling:RegisterScalableTarget application-autoscaling:DeregisterScalableTarget application-autoscaling:DescribeScalableTargets application-autoscaling:PutScalingPolicy application-autoscaling:DescribeScalingPolicies To use the UpdateKeyspace API, the IAM principal also needs permissions to create a service-linked role with the following elements: iam:CreateServiceLinkedRole - The action the principal can perform. arn:aws:iam::*:role/aws-service-role/replication.cassandra.amazonaws.com/AWSServiceRoleForKeyspacesReplication - The resource that the action can be performed on. iam:AWSServiceName: replication.cassandra.amazonaws.com - The only Amazon Web Services service that this role can be attached to is Amazon Keyspaces. For more information, see Configure the IAM permissions required to add an Amazon Web Services Region to a keyspace in the Amazon Keyspaces Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_keyspace"><CopyableCode code="delete_keyspace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The DeleteKeyspace operation deletes a keyspace and all of its tables.</td>
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
    defaultValue="get_keyspace"
    values={[
        { label: 'get_keyspace', value: 'get_keyspace' },
        { label: 'list_keyspaces', value: 'list_keyspaces' }
    ]}
>
<TabItem value="get_keyspace">

Returns the name of the specified keyspace, the Amazon Resource Name (ARN), the replication strategy, the Amazon Web Services Regions of a multi-Region keyspace, and the status of newly added Regions after an UpdateKeyspace operation.

```sql
SELECT
keyspaceName,
replicationGroupStatuses,
replicationRegions,
replicationStrategy,
resourceArn
FROM aws.keyspaces.keyspaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_keyspaces">

The ListKeyspaces operation returns a list of keyspaces.

```sql
SELECT
keyspaceName,
replicationRegions,
replicationStrategy,
resourceArn
FROM aws.keyspaces.keyspaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_keyspace"
    values={[
        { label: 'create_keyspace', value: 'create_keyspace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_keyspace">

The CreateKeyspace operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names must be unique within each Region. CreateKeyspace is an asynchronous operation. You can monitor the creation status of the new keyspace by using the GetKeyspace operation. For more information, see Create a keyspace in the Amazon Keyspaces Developer Guide.

```sql
INSERT INTO aws.keyspaces.keyspaces (
keyspaceName,
tags,
replicationSpecification,
region
)
SELECT 
'{{ keyspaceName }}' /* required */,
'{{ tags }}',
'{{ replicationSpecification }}',
'{{ region }}'
RETURNING
resourceArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: keyspaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the keyspaces resource.
    - name: keyspaceName
      value: "{{ keyspaceName }}"
      description: |
        The name of the keyspace to be created.
    - name: tags
      description: |
        A list of key-value pair tags to be attached to the keyspace. For more information, see Adding tags and labels to Amazon Keyspaces resources in the Amazon Keyspaces Developer Guide.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: replicationSpecification
      description: |
        The replication specification of the keyspace includes: replicationStrategy - the required value is SINGLE_REGION or MULTI_REGION. regionList - if the replicationStrategy is MULTI_REGION, the regionList requires the current Region and at least one additional Amazon Web Services Region where the keyspace is going to be replicated in.
      value:
        replicationStrategy: "{{ replicationStrategy }}"
        regionList:
          - "{{ regionList }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_keyspace"
    values={[
        { label: 'update_keyspace', value: 'update_keyspace' }
    ]}
>
<TabItem value="update_keyspace">

Adds a new Amazon Web Services Region to the keyspace. You can add a new Region to a keyspace that is either a single or a multi-Region keyspace. Amazon Keyspaces is going to replicate all tables in the keyspace to the new Region. To successfully replicate all tables to the new Region, they must use client-side timestamps for conflict resolution. To enable client-side timestamps, specify clientSideTimestamps.status = enabled when invoking the API. For more information about client-side timestamps, see Client-side timestamps in Amazon Keyspaces in the Amazon Keyspaces Developer Guide. To add a Region to a keyspace using the UpdateKeyspace API, the IAM principal needs permissions for the following IAM actions: cassandra:Alter cassandra:AlterMultiRegionResource cassandra:Create cassandra:CreateMultiRegionResource cassandra:Select cassandra:SelectMultiRegionResource cassandra:Modify cassandra:ModifyMultiRegionResource If the keyspace contains a table that is configured in provisioned mode with auto scaling enabled, the following additional IAM actions need to be allowed. application-autoscaling:RegisterScalableTarget application-autoscaling:DeregisterScalableTarget application-autoscaling:DescribeScalableTargets application-autoscaling:PutScalingPolicy application-autoscaling:DescribeScalingPolicies To use the UpdateKeyspace API, the IAM principal also needs permissions to create a service-linked role with the following elements: iam:CreateServiceLinkedRole - The action the principal can perform. arn:aws:iam::*:role/aws-service-role/replication.cassandra.amazonaws.com/AWSServiceRoleForKeyspacesReplication - The resource that the action can be performed on. iam:AWSServiceName: replication.cassandra.amazonaws.com - The only Amazon Web Services service that this role can be attached to is Amazon Keyspaces. For more information, see Configure the IAM permissions required to add an Amazon Web Services Region to a keyspace in the Amazon Keyspaces Developer Guide.

```sql
UPDATE aws.keyspaces.keyspaces
SET 
keyspaceName = '{{ keyspaceName }}',
replicationSpecification = '{{ replicationSpecification }}',
clientSideTimestamps = '{{ clientSideTimestamps }}'
WHERE 
region = '{{ region }}' --required
AND keyspaceName = '{{ keyspaceName }}' --required
AND replicationSpecification = '{{ replicationSpecification }}' --required
RETURNING
resourceArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_keyspace"
    values={[
        { label: 'delete_keyspace', value: 'delete_keyspace' }
    ]}
>
<TabItem value="delete_keyspace">

The DeleteKeyspace operation deletes a keyspace and all of its tables.

```sql
DELETE FROM aws.keyspaces.keyspaces
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
