--- 
title: resource_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_groups
  - inspector
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

Creates, updates, deletes, gets or lists a <code>resource_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector.resource_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_resource_groups"
    values={[
        { label: 'describe_resource_groups', value: 'describe_resource_groups' }
    ]}
>
<TabItem value="describe_resource_groups">

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
    <td><CopyableCode code="failedItems" /></td>
    <td><code>object</code></td>
    <td>Resource group details that cannot be described. An error code is provided for each failed item.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceGroups" /></td>
    <td><code>array</code></td>
    <td>Information about a resource group.</td>
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
    <td><a href="#describe_resource_groups"><CopyableCode code="describe_resource_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the resource groups that are specified by the ARNs of the resource groups.</td>
</tr>
<tr>
    <td><a href="#create_resource_group"><CopyableCode code="create_resource_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceGroupTags"><code>resourceGroupTags</code></a></td>
    <td></td>
    <td>Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target. The created resource group is then used to create an Amazon Inspector assessment target. For more information, see CreateAssessmentTarget.</td>
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
    defaultValue="describe_resource_groups"
    values={[
        { label: 'describe_resource_groups', value: 'describe_resource_groups' }
    ]}
>
<TabItem value="describe_resource_groups">

Describes the resource groups that are specified by the ARNs of the resource groups.

```sql
SELECT
failedItems,
resourceGroups
FROM aws.inspector.resource_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource_group"
    values={[
        { label: 'create_resource_group', value: 'create_resource_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource_group">

Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target. The created resource group is then used to create an Amazon Inspector assessment target. For more information, see CreateAssessmentTarget.

```sql
INSERT INTO aws.inspector.resource_groups (
resourceGroupTags,
region
)
SELECT 
'{{ resourceGroupTags }}' /* required */,
'{{ region }}'
RETURNING
resourceGroupArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resource_groups resource.
    - name: resourceGroupTags
      description: |
        A collection of keys and an array of possible values, '[{"key":"key1","values":["Value1","Value2"]},{"key":"Key2","values":["Value3"]}]'. For example,'[{"key":"Name","values":["TestEC2Instance"]}]'.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>
