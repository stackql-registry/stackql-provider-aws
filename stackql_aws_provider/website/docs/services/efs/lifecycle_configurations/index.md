--- 
title: lifecycle_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - lifecycle_configurations
  - efs
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

Creates, updates, deletes, gets or lists a <code>lifecycle_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lifecycle_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.efs.lifecycle_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_lifecycle_configuration"
    values={[
        { label: 'describe_lifecycle_configuration', value: 'describe_lifecycle_configuration' }
    ]}
>
<TabItem value="describe_lifecycle_configuration">

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
    <td><CopyableCode code="lifecycle_policies" /></td>
    <td><code>array</code></td>
    <td>An array of lifecycle management policies. EFS supports a maximum of one policy per file system.</td>
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
    <td><a href="#describe_lifecycle_configuration"><CopyableCode code="describe_lifecycle_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current LifecycleConfiguration object for the specified EFS file system. Lifecycle management uses the LifecycleConfiguration object to identify when to move files between storage classes. For a file system without a LifecycleConfiguration object, the call returns an empty array in the response. This operation requires permissions for the elasticfilesystem:DescribeLifecycleConfiguration operation.</td>
</tr>
<tr>
    <td><a href="#put_lifecycle_configuration"><CopyableCode code="put_lifecycle_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LifecyclePolicies"><code>LifecyclePolicies</code></a></td>
    <td></td>
    <td>Use this action to manage storage for your file system. A LifecycleConfiguration consists of one or more LifecyclePolicy objects that define the following: TransitionToIA – When to move files in the file system from primary storage (Standard storage class) into the Infrequent Access (IA) storage. TransitionToArchive – When to move files in the file system from their current storage class (either IA or Standard storage) into the Archive storage. File systems cannot transition into Archive storage before transitioning into IA storage. Therefore, TransitionToArchive must either not be set or must be later than TransitionToIA. The Archive storage class is available only for file systems that use the Elastic throughput mode and the General Purpose performance mode. TransitionToPrimaryStorageClass – Whether to move files in the file system back to primary storage (Standard storage class) after they are accessed in IA or Archive storage. For more information, see Managing file system storage. Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a LifecycleConfiguration object already exists for the specified file system, a PutLifecycleConfiguration call modifies the existing configuration. A PutLifecycleConfiguration call with an empty LifecyclePolicies array in the request body deletes any existing LifecycleConfiguration. In the request, specify the following: The ID for the file system for which you are enabling, disabling, or modifying lifecycle management. A LifecyclePolicies array of LifecyclePolicy objects that define when to move files to IA storage, to Archive storage, and back to primary storage. Amazon EFS requires that each LifecyclePolicy object have only have a single transition, so the LifecyclePolicies array needs to be structured with separate LifecyclePolicy objects. See the example requests in the following section for more information. This operation requires permissions for the elasticfilesystem:PutLifecycleConfiguration operation. To apply a LifecycleConfiguration object to an encrypted file system, you need the same Key Management Service permissions as when you created the encrypted file system.</td>
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
<tr id="parameter-file_system_id">
    <td><CopyableCode code="file_system_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the file system for which you are creating the LifecycleConfiguration object (String).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_lifecycle_configuration"
    values={[
        { label: 'describe_lifecycle_configuration', value: 'describe_lifecycle_configuration' }
    ]}
>
<TabItem value="describe_lifecycle_configuration">

Returns the current LifecycleConfiguration object for the specified EFS file system. Lifecycle management uses the LifecycleConfiguration object to identify when to move files between storage classes. For a file system without a LifecycleConfiguration object, the call returns an empty array in the response. This operation requires permissions for the elasticfilesystem:DescribeLifecycleConfiguration operation.

```sql
SELECT
lifecycle_policies
FROM aws.efs.lifecycle_configurations
WHERE file_system_id = '{{ file_system_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_lifecycle_configuration"
    values={[
        { label: 'put_lifecycle_configuration', value: 'put_lifecycle_configuration' }
    ]}
>
<TabItem value="put_lifecycle_configuration">

Use this action to manage storage for your file system. A LifecycleConfiguration consists of one or more LifecyclePolicy objects that define the following: TransitionToIA – When to move files in the file system from primary storage (Standard storage class) into the Infrequent Access (IA) storage. TransitionToArchive – When to move files in the file system from their current storage class (either IA or Standard storage) into the Archive storage. File systems cannot transition into Archive storage before transitioning into IA storage. Therefore, TransitionToArchive must either not be set or must be later than TransitionToIA. The Archive storage class is available only for file systems that use the Elastic throughput mode and the General Purpose performance mode. TransitionToPrimaryStorageClass – Whether to move files in the file system back to primary storage (Standard storage class) after they are accessed in IA or Archive storage. For more information, see Managing file system storage. Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a LifecycleConfiguration object already exists for the specified file system, a PutLifecycleConfiguration call modifies the existing configuration. A PutLifecycleConfiguration call with an empty LifecyclePolicies array in the request body deletes any existing LifecycleConfiguration. In the request, specify the following: The ID for the file system for which you are enabling, disabling, or modifying lifecycle management. A LifecyclePolicies array of LifecyclePolicy objects that define when to move files to IA storage, to Archive storage, and back to primary storage. Amazon EFS requires that each LifecyclePolicy object have only have a single transition, so the LifecyclePolicies array needs to be structured with separate LifecyclePolicy objects. See the example requests in the following section for more information. This operation requires permissions for the elasticfilesystem:PutLifecycleConfiguration operation. To apply a LifecycleConfiguration object to an encrypted file system, you need the same Key Management Service permissions as when you created the encrypted file system.

```sql
REPLACE aws.efs.lifecycle_configurations
SET 
LifecyclePolicies = '{{ LifecyclePolicies }}'
WHERE 
file_system_id = '{{ file_system_id }}' --required
AND region = '{{ region }}' --required
AND LifecyclePolicies = '{{ LifecyclePolicies }}' --required
RETURNING
lifecycle_policies;
```
</TabItem>
</Tabs>
