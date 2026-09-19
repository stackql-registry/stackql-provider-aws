--- 
title: custom_workspace_images
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_workspace_images
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>custom_workspace_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_workspace_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.custom_workspace_images" /></td></tr>
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
    <td><a href="#import_custom_workspace_image"><CopyableCode code="import_custom_workspace_image" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ImageName"><code>ImageName</code></a>, <a href="#parameter-ImageDescription"><code>ImageDescription</code></a>, <a href="#parameter-ComputeType"><code>ComputeType</code></a>, <a href="#parameter-Protocol"><code>Protocol</code></a>, <a href="#parameter-ImageSource"><code>ImageSource</code></a>, <a href="#parameter-InfrastructureConfigurationArn"><code>InfrastructureConfigurationArn</code></a>, <a href="#parameter-Platform"><code>Platform</code></a>, <a href="#parameter-OsVersion"><code>OsVersion</code></a></td>
    <td></td>
    <td>Imports the specified Windows 10 or 11 Bring Your Own License (BYOL) image into Amazon WorkSpaces using EC2 Image Builder. The image must be an already licensed image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see Bring Your Own Windows Desktop Licenses.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="import_custom_workspace_image"
    values={[
        { label: 'import_custom_workspace_image', value: 'import_custom_workspace_image' }
    ]}
>
<TabItem value="import_custom_workspace_image">

Imports the specified Windows 10 or 11 Bring Your Own License (BYOL) image into Amazon WorkSpaces using EC2 Image Builder. The image must be an already licensed image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see Bring Your Own Windows Desktop Licenses.

```sql
EXEC aws.workspaces.custom_workspace_images.import_custom_workspace_image 
@region='{{ region }}' --required 
@@json=
'{
"ImageName": "{{ ImageName }}", 
"ImageDescription": "{{ ImageDescription }}", 
"ComputeType": "{{ ComputeType }}", 
"Protocol": "{{ Protocol }}", 
"ImageSource": "{{ ImageSource }}", 
"InfrastructureConfigurationArn": "{{ InfrastructureConfigurationArn }}", 
"Platform": "{{ Platform }}", 
"OsVersion": "{{ OsVersion }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
