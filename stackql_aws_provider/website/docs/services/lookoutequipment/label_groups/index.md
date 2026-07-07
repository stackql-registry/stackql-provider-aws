--- 
title: label_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - label_groups
  - lookoutequipment
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

Creates, updates, deletes, gets or lists a <code>label_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="label_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lookoutequipment.label_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_label_group"
    values={[
        { label: 'describe_label_group', value: 'describe_label_group' },
        { label: 'list_label_groups', value: 'list_label_groups' }
    ]}
>
<TabItem value="describe_label_group">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the label group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="FaultCodes" /></td>
    <td><code>array</code></td>
    <td>Codes indicating the type of anomaly associated with the labels in the lagbel group.</td>
</tr>
<tr>
    <td><CopyableCode code="LabelGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the label group. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:label-group\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the label group. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the label group was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_label_groups">

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
    <td><CopyableCode code="LabelGroupSummaries" /></td>
    <td><code>array</code></td>
    <td>A summary of the label groups.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token indicating where to continue the listing of label groups. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_label_group"><CopyableCode code="describe_label_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the label group.</td>
</tr>
<tr>
    <td><a href="#list_label_groups"><CopyableCode code="list_label_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the label groups.</td>
</tr>
<tr>
    <td><a href="#create_label_group"><CopyableCode code="create_label_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LabelGroupName"><code>LabelGroupName</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a group of labels.</td>
</tr>
<tr>
    <td><a href="#update_label_group"><CopyableCode code="update_label_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LabelGroupName"><code>LabelGroupName</code></a></td>
    <td></td>
    <td>Updates the label group.</td>
</tr>
<tr>
    <td><a href="#delete_label_group"><CopyableCode code="delete_label_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a group of labels.</td>
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
    defaultValue="describe_label_group"
    values={[
        { label: 'describe_label_group', value: 'describe_label_group' },
        { label: 'list_label_groups', value: 'list_label_groups' }
    ]}
>
<TabItem value="describe_label_group">

Returns information about the label group.

```sql
SELECT
CreatedAt,
FaultCodes,
LabelGroupArn,
LabelGroupName,
UpdatedAt
FROM aws.lookoutequipment.label_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_label_groups">

Returns a list of the label groups.

```sql
SELECT
LabelGroupSummaries,
NextToken
FROM aws.lookoutequipment.label_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_label_group"
    values={[
        { label: 'create_label_group', value: 'create_label_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_label_group">

Creates a group of labels.

```sql
INSERT INTO aws.lookoutequipment.label_groups (
LabelGroupName,
FaultCodes,
ClientToken,
Tags,
region
)
SELECT 
'{{ LabelGroupName }}' /* required */,
'{{ FaultCodes }}',
'{{ ClientToken }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
LabelGroupArn,
LabelGroupName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: label_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the label_groups resource.
    - name: LabelGroupName
      value: "{{ LabelGroupName }}"
      description: |
        Names a group of labels. Data in this field will be retained for service usage. Follow best practices for the security of your data.
    - name: FaultCodes
      value:
        - "{{ FaultCodes }}"
      description: |
        The acceptable fault codes (indicating the type of anomaly associated with the label) that can be used with this label group. Data in this field will be retained for service usage. Follow best practices for the security of your data.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique identifier for the request to create a label group. If you do not set the client request token, Lookout for Equipment generates one.
    - name: Tags
      description: |
        Tags that provide metadata about the label group you are creating. Data in this field will be retained for service usage. Follow best practices for the security of your data.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_label_group"
    values={[
        { label: 'update_label_group', value: 'update_label_group' }
    ]}
>
<TabItem value="update_label_group">

Updates the label group.

```sql
UPDATE aws.lookoutequipment.label_groups
SET 
LabelGroupName = '{{ LabelGroupName }}',
FaultCodes = '{{ FaultCodes }}'
WHERE 
region = '{{ region }}' --required
AND LabelGroupName = '{{ LabelGroupName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_label_group"
    values={[
        { label: 'delete_label_group', value: 'delete_label_group' }
    ]}
>
<TabItem value="delete_label_group">

Deletes a group of labels.

```sql
DELETE FROM aws.lookoutequipment.label_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
