--- 
title: model_package_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - model_package_groups
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>model_package_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_package_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.model_package_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_model_package_group"
    values={[
        { label: 'describe_model_package_group', value: 'describe_model_package_group' },
        { label: 'list_model_package_groups', value: 'list_model_package_groups' }
    ]}
>
<TabItem value="describe_model_package_group">

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
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the model group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_configuration" /></td>
    <td><code>object</code></td>
    <td>The managed configuration of the model package group.</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model group. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:model-package-group/&#91;\S&#93;&#123;1,2048&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_group_description" /></td>
    <td><code>string</code></td>
    <td>A description of the model group. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;Z&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the model group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_group_status" /></td>
    <td><code>string</code></td>
    <td>The status of the model group. (Pending, InProgress, Completed, Failed, Deleting, DeleteFailed)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_model_package_groups">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the model group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_configuration" /></td>
    <td><code>object</code></td>
    <td>The managed configuration of the model package group.</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model group. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:model-package-group/&#91;\S&#93;&#123;1,2048&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_group_description" /></td>
    <td><code>string</code></td>
    <td>A description of the model group. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;Z&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the model group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_group_status" /></td>
    <td><code>string</code></td>
    <td>The status of the model group. (Pending, InProgress, Completed, Failed, Deleting, DeleteFailed)</td>
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
    <td><a href="#describe_model_package_group"><CopyableCode code="describe_model_package_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a description for the specified model group.</td>
</tr>
<tr>
    <td><a href="#list_model_package_groups"><CopyableCode code="list_model_package_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the model groups in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_model_package_group"><CopyableCode code="create_model_package_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelPackageGroupName"><code>ModelPackageGroupName</code></a></td>
    <td></td>
    <td>Creates a model group. A model group contains a group of model versions.</td>
</tr>
<tr>
    <td><a href="#delete_model_package_group"><CopyableCode code="delete_model_package_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified model group.</td>
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
    defaultValue="describe_model_package_group"
    values={[
        { label: 'describe_model_package_group', value: 'describe_model_package_group' },
        { label: 'list_model_package_groups', value: 'list_model_package_groups' }
    ]}
>
<TabItem value="describe_model_package_group">

Gets a description for the specified model group.

```sql
SELECT
created_by,
creation_time,
managed_configuration,
model_package_group_arn,
model_package_group_description,
model_package_group_name,
model_package_group_status
FROM aws.sagemaker.model_package_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_model_package_groups">

Gets a list of the model groups in your Amazon Web Services account.

```sql
SELECT
creation_time,
managed_configuration,
model_package_group_arn,
model_package_group_description,
model_package_group_name,
model_package_group_status
FROM aws.sagemaker.model_package_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_model_package_group"
    values={[
        { label: 'create_model_package_group', value: 'create_model_package_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model_package_group">

Creates a model group. A model group contains a group of model versions.

```sql
INSERT INTO aws.sagemaker.model_package_groups (
ModelPackageGroupName,
ModelPackageGroupDescription,
Tags,
ManagedConfiguration,
region
)
SELECT 
'{{ ModelPackageGroupName }}' /* required */,
'{{ ModelPackageGroupDescription }}',
'{{ Tags }}',
'{{ ManagedConfiguration }}',
'{{ region }}'
RETURNING
model_package_group_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_package_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the model_package_groups resource.
    - name: ModelPackageGroupName
      value: "{{ ModelPackageGroupName }}"
      description: |
        The name of the model group.
    - name: ModelPackageGroupDescription
      value: "{{ ModelPackageGroupDescription }}"
      description: |
        A description for the model group.
    - name: Tags
      description: |
        A list of key value pairs associated with the model group. For more information, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference Guide.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ManagedConfiguration
      description: |
        The managed configuration of the model package group.
      value:
        ManagedStorageType: "{{ ManagedStorageType }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_model_package_group"
    values={[
        { label: 'delete_model_package_group', value: 'delete_model_package_group' }
    ]}
>
<TabItem value="delete_model_package_group">

Deletes the specified model group.

```sql
DELETE FROM aws.sagemaker.model_package_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
