--- 
title: cloud_formation_stacks
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_formation_stacks
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>cloud_formation_stacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_formation_stacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.cloud_formation_stacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_cloud_formation_stack"><CopyableCode code="create_cloud_formation_stack" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instances"><code>instances</code></a></td>
    <td></td>
    <td>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the get cloud formation stack records operation to get a list of the CloudFormation stacks created. Wait until after your new Amazon EC2 instance is created before running the create cloud formation stack operation again with the same export snapshot record.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_cloud_formation_stack"
    values={[
        { label: 'create_cloud_formation_stack', value: 'create_cloud_formation_stack' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cloud_formation_stack">

Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the get cloud formation stack records operation to get a list of the CloudFormation stacks created. Wait until after your new Amazon EC2 instance is created before running the create cloud formation stack operation again with the same export snapshot record.

```sql
INSERT INTO aws.lightsail.cloud_formation_stacks (
instances,
region
)
SELECT 
'{{ instances }}' /* required */,
'{{ region }}'
RETURNING
operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cloud_formation_stacks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cloud_formation_stacks resource.
    - name: instances
      description: |
        An array of parameters that will be used to create the new Amazon EC2 instance. You can only pass one instance entry at a time in this array. You will get an invalid parameter error if you pass more than one instance entry in this array.
      value:
        - sourceName: "{{ sourceName }}"
          instanceType: "{{ instanceType }}"
          portInfoSource: "{{ portInfoSource }}"
          userData: "{{ userData }}"
          availabilityZone: "{{ availabilityZone }}"
`}</CodeBlock>

</TabItem>
</Tabs>
