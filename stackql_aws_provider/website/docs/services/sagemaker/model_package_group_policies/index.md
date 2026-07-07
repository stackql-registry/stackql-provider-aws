--- 
title: model_package_group_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - model_package_group_policies
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

Creates, updates, deletes, gets or lists a <code>model_package_group_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_package_group_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.model_package_group_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_model_package_group_policy"
    values={[
        { label: 'get_model_package_group_policy', value: 'get_model_package_group_policy' }
    ]}
>
<TabItem value="get_model_package_group_policy">

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
    <td><CopyableCode code="ResourcePolicy" /></td>
    <td><code>string</code></td>
    <td>The resource policy for the model group. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#get_model_package_group_policy"><CopyableCode code="get_model_package_group_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a resource policy that manages access for a model group. For information about resource policies, see Identity-based policies and resource-based policies in the Amazon Web Services Identity and Access Management User Guide..</td>
</tr>
<tr>
    <td><a href="#put_model_package_group_policy"><CopyableCode code="put_model_package_group_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelPackageGroupName"><code>ModelPackageGroupName</code></a>, <a href="#parameter-ResourcePolicy"><code>ResourcePolicy</code></a></td>
    <td></td>
    <td>Adds a resouce policy to control access to a model group. For information about resoure policies, see Identity-based policies and resource-based policies in the Amazon Web Services Identity and Access Management User Guide..</td>
</tr>
<tr>
    <td><a href="#delete_model_package_group_policy"><CopyableCode code="delete_model_package_group_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a model group resource policy.</td>
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
    defaultValue="get_model_package_group_policy"
    values={[
        { label: 'get_model_package_group_policy', value: 'get_model_package_group_policy' }
    ]}
>
<TabItem value="get_model_package_group_policy">

Gets a resource policy that manages access for a model group. For information about resource policies, see Identity-based policies and resource-based policies in the Amazon Web Services Identity and Access Management User Guide..

```sql
SELECT
ResourcePolicy
FROM aws.sagemaker.model_package_group_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_model_package_group_policy"
    values={[
        { label: 'put_model_package_group_policy', value: 'put_model_package_group_policy' }
    ]}
>
<TabItem value="put_model_package_group_policy">

Adds a resouce policy to control access to a model group. For information about resoure policies, see Identity-based policies and resource-based policies in the Amazon Web Services Identity and Access Management User Guide..

```sql
REPLACE aws.sagemaker.model_package_group_policies
SET 
ModelPackageGroupName = '{{ ModelPackageGroupName }}',
ResourcePolicy = '{{ ResourcePolicy }}'
WHERE 
region = '{{ region }}' --required
AND ModelPackageGroupName = '{{ ModelPackageGroupName }}' --required
AND ResourcePolicy = '{{ ResourcePolicy }}' --required
RETURNING
ModelPackageGroupArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_model_package_group_policy"
    values={[
        { label: 'delete_model_package_group_policy', value: 'delete_model_package_group_policy' }
    ]}
>
<TabItem value="delete_model_package_group_policy">

Deletes a model group resource policy.

```sql
DELETE FROM aws.sagemaker.model_package_group_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
