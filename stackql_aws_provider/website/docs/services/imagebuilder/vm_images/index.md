--- 
title: vm_images
hide_title: false
hide_table_of_contents: false
keywords:
  - vm_images
  - imagebuilder
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

Creates, updates, deletes, gets or lists a <code>vm_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vm_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.vm_images" /></td></tr>
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
    <td><a href="#import_vm_image"><CopyableCode code="import_vm_image" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-semanticVersion"><code>semanticVersion</code></a>, <a href="#parameter-platform"><code>platform</code></a>, <a href="#parameter-vmImportTaskId"><code>vmImportTaskId</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API ImportImage action uses those files to import your VM and create an AMI. To import using the CLI command, see import-image You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</td>
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
    defaultValue="import_vm_image"
    values={[
        { label: 'import_vm_image', value: 'import_vm_image' }
    ]}
>
<TabItem value="import_vm_image">

When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API ImportImage action uses those files to import your VM and create an AMI. To import using the CLI command, see import-image You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.

```sql
EXEC aws.imagebuilder.vm_images.import_vm_image 
@region='{{ region }}' --required 
@@json=
'{
"name": "{{ name }}", 
"semanticVersion": "{{ semanticVersion }}", 
"description": "{{ description }}", 
"platform": "{{ platform }}", 
"osVersion": "{{ osVersion }}", 
"vmImportTaskId": "{{ vmImportTaskId }}", 
"loggingConfiguration": "{{ loggingConfiguration }}", 
"tags": "{{ tags }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
