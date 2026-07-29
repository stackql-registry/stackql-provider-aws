--- 
title: storage_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_configurations
  - ivs_realtime
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

Creates, updates, deletes, gets or lists a <code>storage_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storage_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs_realtime.storage_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_storage_configuration"
    values={[
        { label: 'get_storage_configuration', value: 'get_storage_configuration' },
        { label: 'list_storage_configurations', value: 'list_storage_configurations' }
    ]}
>
<TabItem value="get_storage_configuration">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the storage configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the storage configuration. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:storage-configuration/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s_3" /></td>
    <td><code>object</code></td>
    <td>A complex type that describes an S3 location where recorded videos will be stored.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Best practices and strategies in Tagging AWS Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_storage_configurations">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If there are more storage configurations than maxResults, use nextToken in the request to get the next set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9+/=_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_configurations" /></td>
    <td><code>array</code></td>
    <td>List of the matching storage configurations.</td>
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
    <td><a href="#get_storage_configuration"><CopyableCode code="get_storage_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the storage configuration for the specified ARN.</td>
</tr>
<tr>
    <td><a href="#list_storage_configurations"><CopyableCode code="list_storage_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summary information about all storage configurations in your account, in the AWS region where the API request is processed.</td>
</tr>
<tr>
    <td><a href="#create_storage_configuration"><CopyableCode code="create_storage_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-s3"><code>s3</code></a></td>
    <td></td>
    <td>Creates a new storage configuration, used to enable recording to Amazon S3. When a StorageConfiguration is created, IVS will modify the S3 bucketPolicy of the provided bucket. This will ensure that IVS has sufficient permissions to write content to the provided bucket.</td>
</tr>
<tr>
    <td><a href="#delete_storage_configuration"><CopyableCode code="delete_storage_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the storage configuration for the specified ARN. If you try to delete a storage configuration that is used by a Composition, you will get an error (409 ConflictException). To avoid this, for all Compositions that reference the storage configuration, first use StopComposition and wait for it to complete, then use DeleteStorageConfiguration.</td>
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
    defaultValue="get_storage_configuration"
    values={[
        { label: 'get_storage_configuration', value: 'get_storage_configuration' },
        { label: 'list_storage_configurations', value: 'list_storage_configurations' }
    ]}
>
<TabItem value="get_storage_configuration">

Gets the storage configuration for the specified ARN.

```sql
SELECT
name,
arn,
s_3,
tags
FROM aws.ivs_realtime.storage_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_storage_configurations">

Gets summary information about all storage configurations in your account, in the AWS region where the API request is processed.

```sql
SELECT
next_token,
storage_configurations
FROM aws.ivs_realtime.storage_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_storage_configuration"
    values={[
        { label: 'create_storage_configuration', value: 'create_storage_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_storage_configuration">

Creates a new storage configuration, used to enable recording to Amazon S3. When a StorageConfiguration is created, IVS will modify the S3 bucketPolicy of the provided bucket. This will ensure that IVS has sufficient permissions to write content to the provided bucket.

```sql
INSERT INTO aws.ivs_realtime.storage_configurations (
name,
s3,
tags,
region
)
SELECT 
'{{ name }}',
'{{ s3 }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
storage_configuration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: storage_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the storage_configurations resource.
    - name: name
      value: "{{ name }}"
    - name: s3
      description: |
        A complex type that describes an S3 location where recorded videos will be stored.
      value:
        bucketName: "{{ bucketName }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_storage_configuration"
    values={[
        { label: 'delete_storage_configuration', value: 'delete_storage_configuration' }
    ]}
>
<TabItem value="delete_storage_configuration">

Deletes the storage configuration for the specified ARN. If you try to delete a storage configuration that is used by a Composition, you will get an error (409 ConflictException). To avoid this, for all Compositions that reference the storage configuration, first use StopComposition and wait for it to complete, then use DeleteStorageConfiguration.

```sql
DELETE FROM aws.ivs_realtime.storage_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
